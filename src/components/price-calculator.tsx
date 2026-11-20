"use client";

/**
 * The price calculator on /plans.
 *
 * Why it exists. /plans is the second most-read page on the site and the most
 * patient one — in the five days to 20 November 2026 twelve people spent an
 * average of 1m20s on it and not one of them filled anything in. They were
 * working out their own figure and leaving with it. This hands them the figure
 * and then asks for a WhatsApp number, so the arithmetic they were doing in
 * their head becomes a lead that already states its own deal size.
 *
 * It is a client component on purpose, and that is also what makes it safe to
 * show the term rates here. The old server-rendered term switcher put thirty
 * prices into the HTML with CSS hiding twenty-nine, and Perplexity consequently
 * called OZZO's pricing "incomplete and inconsistent". Nothing this component
 * computes exists in the markup a crawler receives: the static page still
 * states exactly one rate per plan. See the note at the top of `lib/quote.ts`.
 *
 * The order of the steps is the founder's, 20 November 2026: pick a plan, see
 * what is in it, then enter a user count, and only then are the prices
 * revealed — quarterly, half-yearly and yearly, and no other term.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Check,
  Loader2,
  CheckCircle2,
  Users,
  Minus,
  Plus,
  Store,
  ArrowRight,
} from "lucide-react";
import { Icon } from "./icon";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import {
  plans,
  planById,
  planFeatureGroups,
  planFeatureCount,
  includedEverywhere,
  PLAN_RATE,
  GST_RATE_PCT,
  type PlanId,
} from "@/lib/plans";
import {
  quoteAllTerms,
  dmsLine,
  formatINR,
  quoteLines,
  quoteChatText,
  TERM_LABEL,
  type BillingTerm,
} from "@/lib/quote";
import { quoteSchema } from "@/lib/inquiry";
import { waLink } from "@/lib/whatsapp";
import { trackEvent, trackLead, trackWhatsAppClick } from "@/lib/analytics";
import { DMS_SEATS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

/** Quick picks, chosen to pull the typed number upward rather than down. */
const USER_PRESETS = [5, 10, 25, 50, 100];

export function PriceCalculator() {
  const pathname = usePathname();

  const [plan, setPlan] = useState<PlanId | null>(null);
  const [usersRaw, setUsersRaw] = useState("");
  const [withDms, setWithDms] = useState(false);
  const [term, setTerm] = useState<BillingTerm>("yearly");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  /** Kept so the thank-you screen can still render the quote it just sent. */
  const [sent, setSent] = useState<{
    name: string;
    plan: PlanId;
    users: number;
    term: BillingTerm;
    withDms: boolean;
  } | null>(null);

  /**
   * India sees rupees; everywhere else is told these are Indian prices.
   *
   * Same timezone signal <CurrencyScript/> already writes to <html>, read
   * after mount so there is no hydration mismatch. The calculator itself is
   * rupees-only: the USD list has no quoting engine behind it and its term
   * uplifts were never written down, so applying +40% to dollars would quote a
   * price the business cannot honour.
   */
  const [isIndia, setIsIndia] = useState(true);
  useEffect(() => {
    try {
      setIsIndia(
        document.documentElement.getAttribute("data-ozzo-currency") !== "USD",
      );
    } catch {
      /* default stands */
    }
  }, []);

  const users = Number.parseInt(usersRaw, 10);
  const hasUsers = Number.isFinite(users) && users >= 1;
  const showPrices = plan !== null && hasUsers;

  const quotes = useMemo(
    () => (showPrices ? quoteAllTerms(plan, users) : []),
    [showPrices, plan, users],
  );
  const dms = useMemo(() => dmsLine(), []);
  const featureGroupsForPlan = useMemo(
    () => (plan ? planFeatureGroups(plan) : []),
    [plan],
  );

  /** One analytics event per plan-and-size combination, not per keystroke. */
  const seen = useRef<string>("");
  useEffect(() => {
    if (!showPrices) return;
    const key = `${plan}:${users}`;
    if (seen.current === key) return;
    seen.current = key;
    trackEvent("calculator_quote_view", { plan, users, with_dms: withDms });
  }, [showPrices, plan, users, withDms]);

  function choosePlan(id: PlanId) {
    setPlan(id);
    setStatus("idle");
    setSent(null);
    trackEvent("calculator_plan_select", { plan: id });
  }

  function bumpUsers(by: number) {
    const next = Math.max(1, (hasUsers ? users : 0) + by);
    setUsersRaw(String(next));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!plan || !hasUsers) return;
    setErrors({});
    setServerError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name,
      phone,
      plan,
      users,
      term,
      withDms,
      pagePath: pathname,
      website: String(fd.get("website") || ""), // honeypot
    };

    const parsed = quoteSchema.safeParse(payload);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Record<string, string> = {};
      for (const [k, v] of Object.entries(flat)) if (v?.[0]) next[k] = v[0];
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setSent({ name, plan, users, term, withDms });
      setStatus("success");
      /**
       * The conversion, fired only once the API has confirmed the row — so
       * GA4 can be reconciled against website_inquiries lead for lead, which
       * is the whole reason the tracking is trusted now.
       */
      trackLead({
        pagePath: pathname,
        teamSize: `${users} users`,
        hasCompany: false,
        hasMessage: true,
      });
      trackEvent("calculator_quote_sent", {
        plan,
        users,
        term,
        with_dms: withDms,
      });
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {/* ── Step 1 · plan ─────────────────────────────────────── */}
      <Step n={1} title="Choose your plan">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((p) => {
            const active = plan === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => choosePlan(p.id)}
                aria-pressed={active}
                className={cn(
                  "group relative flex flex-col items-start gap-1 rounded-2xl border p-3.5 text-left transition-all",
                  active
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                    : "border-border bg-card-2 hover:border-primary/40 hover:bg-card",
                )}
              >
                {p.popular && !active && (
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                    Popular
                  </span>
                )}
                {active && (
                  <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                )}
                <span className={cn("flex items-center gap-1.5", p.accentClass)}>
                  <Icon name={p.icon} className="h-4 w-4" />
                  <span className="text-sm font-bold">{p.name}</span>
                </span>
                <span className="text-[11px] leading-snug text-muted-foreground">
                  {p.tagline}
                </span>
                <span className="mt-1 text-xs font-semibold text-foreground">
                  {formatINR(PLAN_RATE.INR[p.id])}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    / user / mo
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        {!plan && (
          <p className="mt-3 text-xs text-muted-foreground">
            Pick one and you&apos;ll see everything it includes, then your exact
            price.
          </p>
        )}
      </Step>

      {/* ── Step 2 · what's in it ─────────────────────────────── */}
      {plan && (
        <Step n={2} title={`What's in ${planById(plan).name}`}>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {planById(plan).blurb}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {planFeatureCount(plan)} capabilities included
          </p>

          <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureGroupsForPlan.map((group) => (
              <div key={group.name} className="min-w-0">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground">
                  <Icon name={group.icon} className="h-3.5 w-3.5 text-primary" />
                  {group.name}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {group.rows.map((row) => (
                    <li
                      key={row.feature}
                      className="flex items-start gap-2 text-[13px] leading-snug text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-3 w-3 shrink-0 text-primary"
                        strokeWidth={3}
                      />
                      <span className="min-w-0">
                        {row.feature}
                        {row.qualifier && (
                          <span className="ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-foreground">
                            {row.qualifier}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card-2 p-4">
            <p className="text-xs font-bold text-foreground">
              In every plan, whichever you pick
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {includedEverywhere.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* The DMS add-on — a plan line it is not, so a tick box it is. */}
          <label
            className={cn(
              "mt-3 flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors",
              withDms
                ? "border-primary bg-primary/5"
                : "border-border bg-card-2 hover:border-primary/40",
            )}
          >
            {/*
              `accent-[var(--primary)]` uses the token directly. The theme's
              colours are whole `oklch()` values, so the usual `hsl(var(--x))`
              wrapper would compile to `hsl(oklch(...))` and paint nothing.
            */}
            <input
              type="checkbox"
              id="calc-dms"
              checked={withDms}
              onChange={(e) => {
                setWithDms(e.target.checked);
                trackEvent("calculator_dms_toggle", { on: e.target.checked });
              }}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
            />
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <Store className="h-3.5 w-3.5 text-primary" />
                Add the distributor portal (DMS)
              </span>
              <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
                Your distributors, stockists and dealers get their own browser
                login to place their own orders, see their outstanding and
                dispatch onward. {formatINR(dms.subtotal)} per year for{" "}
                {DMS_SEATS} logins + {GST_RATE_PCT}% GST — billed yearly
                whichever term you choose, because the logins are your
                customers, not your staff.
              </span>
            </span>
          </label>
        </Step>
      )}

      {/* ── Step 3 · users ────────────────────────────────────── */}
      {plan && (
        <Step n={3} title="How many people will use it?">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => bumpUsers(-1)}
                aria-label="One fewer user"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card-2 text-foreground transition-colors hover:border-primary/40"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="relative">
                <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="calc-users"
                  type="number"
                  min={1}
                  max={100000}
                  inputMode="numeric"
                  value={usersRaw}
                  onChange={(e) => setUsersRaw(e.target.value)}
                  placeholder="e.g. 25"
                  aria-label="Number of users"
                  className="w-36 rounded-xl border border-input bg-background py-2.5 pl-9 pr-3 text-base font-bold tabular-nums text-foreground outline-none transition-colors placeholder:font-normal placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="button"
                onClick={() => bumpUsers(1)}
                aria-label="One more user"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card-2 text-foreground transition-colors hover:border-primary/40"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {USER_PRESETS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setUsersRaw(String(n))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                    users === n
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card-2 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          {!hasUsers && (
            <p className="mt-3 text-xs text-muted-foreground">
              Count everyone who needs a login — field reps, managers and office
              staff.
            </p>
          )}
        </Step>
      )}

      {/* ── Step 4 · the prices ───────────────────────────────── */}
      {showPrices && (
        <Step n={4} title="Your price">
          <div className="grid gap-3 md:grid-cols-3">
            {quotes.map((q) => {
              const active = term === q.term;
              const best = q.term === "yearly";
              return (
                <button
                  key={q.term}
                  type="button"
                  onClick={() => {
                    setTerm(q.term);
                    trackEvent("calculator_term_select", {
                      plan: q.plan,
                      users: q.users,
                      term: q.term,
                    });
                  }}
                  aria-pressed={active}
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-5 text-left transition-all",
                    active
                      ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                      : "border-border bg-card-2 hover:border-primary/40",
                  )}
                >
                  {best && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                      Best value
                    </span>
                  )}
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {TERM_LABEL[q.term]}
                  </span>
                  <span className="mt-2 text-3xl font-extrabold tracking-tight tabular-nums text-foreground">
                    {formatINR(q.total)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    every {q.months} months, all in
                  </span>

                  <dl className="mt-4 space-y-1.5 border-t border-border pt-3 text-[13px]">
                    <Row
                      k={`${q.users} × ${formatINR(q.ratePerMonth)} × ${q.months} mo`}
                      v={formatINR(q.subtotal)}
                    />
                    <Row k={`GST ${GST_RATE_PCT}%`} v={formatINR(q.gst)} />
                    <Row
                      k="Over 12 months"
                      v={formatINR(q.annualised)}
                      strong
                    />
                  </dl>

                  <span className="mt-3 block text-[11px] font-semibold">
                    {q.annualSaving > 0 ? (
                      <span className="text-muted-foreground">
                        Yearly saves{" "}
                        <span className="text-foreground">
                          {formatINR(q.annualSaving)}
                        </span>{" "}
                        a year
                      </span>
                    ) : (
                      <span className="text-primary">
                        The lowest rate we publish
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {withDms && (
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 rounded-2xl border border-border bg-card-2 px-4 py-3">
              <p className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
                <Store className="h-3.5 w-3.5 text-primary" />
                Distributor portal · {dms.seats} logins
              </p>
              <p className="text-[13px] tabular-nums text-muted-foreground">
                {formatINR(dms.subtotal)} + {formatINR(dms.gst)} GST ={" "}
                <span className="font-bold text-foreground">
                  {formatINR(dms.total)}
                </span>{" "}
                per year
              </p>
            </div>
          )}

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Yearly billing is the base rate. Half-yearly costs 20% more per user
            and quarterly 40% more, which is what the three figures above
            reflect. All prices exclude {GST_RATE_PCT}% GST until the line that
            adds it.
            {!isIndia && (
              <>
                {" "}
                These are Indian prices in rupees — for international pricing,
                book a demo and we&apos;ll quote in USD.
              </>
            )}
          </p>
        </Step>
      )}

      {/* ── Step 5 · the lead ─────────────────────────────────── */}
      {showPrices && (
        <div className="border-t border-border bg-card-2 p-5 md:p-7">
          {status === "success" && sent ? (
            <div className="mx-auto max-w-xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                Saved, {sent.name.split(" ")[0]}. Here&apos;s your quote.
              </h3>
              <dl className="mt-4 space-y-1.5 rounded-2xl border border-border bg-card p-4 text-left text-[13px]">
                {quoteLines(sent.plan, sent.users, sent.term, sent.withDms).map(
                  ([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap justify-between gap-x-4 gap-y-0.5"
                    >
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-semibold tabular-nums text-foreground">
                        {v}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
              <a
                href={waLink(
                  quoteChatText(
                    sent.name,
                    sent.plan,
                    sent.users,
                    sent.term,
                    sent.withDms,
                  ),
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("quote-calculator", pathname)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Get it on WhatsApp
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Opens WhatsApp with this quote ready to send. Tap send and
                you&apos;ll have it in writing — we reply in the same chat.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto max-w-xl">
              <h3 className="text-center text-lg font-bold text-foreground">
                WhatsApp me this quote
              </h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                {planById(plan!).name} · {users} users ·{" "}
                {TERM_LABEL[term].toLowerCase()} ·{" "}
                <span className="font-bold text-foreground">
                  {formatINR(
                    quotes.find((q) => q.term === term)?.total ?? 0,
                  )}
                </span>
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="calc-name"
                    className="mb-1.5 block text-xs font-semibold text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="calc-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Rahul Sharma"
                    className={fieldBase}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </div>
                <div>
                  <label
                    htmlFor="calc-phone"
                    className="mb-1.5 block text-xs font-semibold text-foreground"
                  >
                    WhatsApp number
                  </label>
                  <input
                    id="calc-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className={fieldBase}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <FieldError>{errors.phone}</FieldError>}
                </div>
              </div>

              {/* Honeypot. Hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving…
                  </>
                ) : (
                  <>
                    <WhatsAppGlyph className="h-4 w-4" />
                    WhatsApp me this quote
                  </>
                )}
              </button>

              {serverError && (
                <p className="mt-2 text-center text-xs font-medium text-destructive">
                  {serverError}
                </p>
              )}
              <p className="mt-2 text-center text-xs text-muted-foreground">
                We&apos;ll send this quote to your WhatsApp and call you to walk
                through it. No spam, ever.
              </p>
            </form>
          )}
        </div>
      )}

      {/* Nothing picked yet — one honest nudge rather than an empty panel. */}
      {!showPrices && plan && (
        <div className="border-t border-border bg-card-2 px-5 py-4 text-center md:px-7">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            Enter your team size above to reveal the price
            <ArrowRight className="h-3.5 w-3.5 rotate-[-90deg]" />
          </p>
        </div>
      )}
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border p-5 last:border-b-0 md:p-7">
      <p className="mb-4 flex items-center gap-2.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
          {n}
        </span>
        <span className="text-base font-bold text-foreground">{title}</span>
      </p>
      {children}
    </div>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-3 gap-y-0.5">
      <dt
        className={cn(
          "min-w-0 text-muted-foreground",
          strong && "font-semibold text-foreground",
        )}
      >
        {k}
      </dt>
      <dd
        className={cn(
          "tabular-nums text-foreground",
          strong ? "font-bold" : "font-medium",
        )}
      >
        {v}
      </dd>
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1 text-xs font-medium text-destructive">{children}</p>
  );
}
