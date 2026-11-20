import Link from "next/link";
import { Check, X, ArrowRight, Lock } from "lucide-react";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  SecondaryCTA,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { FaqSection } from "@/components/faq-section";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  productSchema,
} from "@/lib/seo";
import { DMS_PRICE_INR, DMS_SEATS, dms } from "@/lib/site";
import { GST_RATE_PCT } from "@/lib/plans";
import {
  dmsMeta,
  dmsPain,
  dmsHowItWorks,
  dmsCapabilities,
  dmsControls,
  dmsLimits,
  dmsFitFor,
  dmsFitNotFor,
  dmsFaqs,
} from "@/lib/dms-page";

export const metadata = pageMetadata({
  title: dmsMeta.metaTitle,
  description: dmsMeta.metaDescription,
  path: "/products/dms",
  keywords: dmsMeta.keywords,
});

/* ───────────────────────── Portal visual ───────────────────────── */

/**
 * A mock of what a DISTRIBUTOR sees, not what the brand owner sees.
 *
 * Every other product visual on this site shows a manager's dashboard, because
 * every other product is used by staff. The whole idea of DMS is that the
 * person looking at the screen is your customer, and showing their view is the
 * fastest way to make that land.
 */
function PortalVisual() {
  const lines = [
    { sku: "Amrit Gold 1L × 24", qty: "40 cs", amt: "₹1,04,000" },
    { sku: "Amrit Gold 500ml × 48", qty: "25 cs", amt: "₹58,750" },
    { sku: "Amrit Pure 5L", qty: "60 pc", amt: "₹42,000" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.1]">
        <div className="flex items-center gap-2 border-b border-border bg-card-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-3 flex-1 truncate rounded-md bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground">
            dms.ozzo.co.in · Shree Krishna Agencies
          </span>
        </div>

        <div className="border-b border-border px-4 py-3">
          <p className="ozzo-eyebrow text-[9px] text-sky-500">Purchase order</p>
          <p className="mt-1 text-sm font-bold text-foreground">
            New order on Amrit Foods Pvt Ltd
          </p>
        </div>

        <div className="space-y-1.5 p-3">
          {lines.map((l) => (
            <div
              key={l.sku}
              className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card-2 px-2.5 py-2"
            >
              <div className="min-w-0">
                <p className="truncate text-[11px] font-bold text-foreground">
                  {l.sku}
                </p>
                <p className="text-[9px] text-muted-foreground">{l.qty}</p>
              </div>
              <span className="shrink-0 text-[11px] font-extrabold text-foreground">
                {l.amt}
              </span>
            </div>
          ))}

          <div className="mt-2 rounded-lg bg-success/10 px-2.5 py-2">
            <p className="text-[10px] font-bold text-success">
              Scheme applied automatically
            </p>
            <p className="text-[9px] text-success/80">
              Buy 40 cs, get 2 cs free — detected on your slab
            </p>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border bg-card-2 p-2.5">
              <p className="text-[9px] text-muted-foreground">Your rate</p>
              <p className="ozzo-display text-base leading-none text-foreground">
                Price list B
              </p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                Yours only — never anyone else&apos;s
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card-2 p-2.5">
              <p className="text-[9px] text-muted-foreground">
                Credit available
              </p>
              <p className="ozzo-display text-base leading-none text-foreground">
                ₹2.9L
              </p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                of ₹5L limit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* floating: what they owe — the call that stops happening */}
      <div className="animate-float absolute -left-4 top-28 w-44 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1]">
        <p className="ozzo-eyebrow text-[9px] text-warning">Outstanding</p>
        <p className="mt-1 text-xs font-bold text-foreground">₹2,10,400</p>
        <p className="text-[10px] text-muted-foreground">
          They can see it themselves
        </p>
      </div>

      {/* floating: no app */}
      <div
        className="animate-float absolute -bottom-6 -right-4 w-44 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1]"
        style={{ animationDelay: "1.2s" }}
      >
        <p className="ozzo-eyebrow text-[9px] text-sky-500">No install</p>
        <p className="mt-1 text-xs font-bold text-foreground">
          Just a browser
        </p>
        <p className="text-[10px] text-muted-foreground">
          Nothing to download
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function DmsProductPage() {
  return (
    <>
      <JsonLd
        data={[
          productSchema("dms"),
          faqSchema(dmsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "DMS", path: "/products/dms" },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#0ea5e9]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#2563eb]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow>Distributor Management System</Eyebrow>
              <h1 className="ozzo-display mt-4 max-w-2xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
                Let your trade{" "}
                <span className="ozzo-gradient-bright">order for itself</span>
              </h1>
              {/* Answer-first. This paragraph has to stand alone, because it is
                  the block an AI engine lifts when asked what OZZO DMS is. */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                OZZO DMS gives your distributors, stockists and dealers their
                own login. They place their own orders — priced on their own
                price list, with their schemes applied and their credit limit
                respected — see what they owe you, and dispatch what they have
                sold onward. Your order desk stops retyping orders that arrived
                on WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/distributor-management-software">
                  What is a DMS?
                </SecondaryCTA>
              </div>

              <p className="mt-6 text-sm text-white/60">
                <span className="font-bold text-white">{dms.priceLine}</span>, +{" "}
                {GST_RATE_PCT}% GST — about ₹{dms.perLoginPerMonth} per login a
                month. An add-on to any CRM or SFA plan.
              </p>
            </div>

            <Reveal>
              <PortalVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── The problem ─────────────── */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Why this exists"
            title="Your distributors already order. Just not into your system."
            description="Every order that arrives as a message has to be typed in by somebody on your payroll. That retyping is slow, and it is where the mistakes live."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dmsPain.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── How it works ─────────────── */}
      <section className="border-y border-border bg-card-2 py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, and none of them is a project"
            description="The usual objection is that distributors will never adopt new software. They do not have to adopt anything — there is nothing to install and nothing to learn."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dmsHowItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="ozzo-display absolute right-5 top-4 text-3xl text-sky-500/20">
                    {s.step}
                  </span>
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Capabilities ─────────────── */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What the portal does"
            title="Everything below is a screen that exists today"
            description="OZZO DMS is live at dms.ozzo.co.in. This is not a roadmap — and what is not built is listed further down this page rather than left out."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {dmsCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="ozzo-display text-xl text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-foreground/85">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── What you keep control of ─────────────── */}
      <section className="border-y border-border bg-ink py-24 text-white">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow center>You stay in control</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-white md:text-5xl">
              Opening a door is not losing the keys
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              The objection to any customer-facing portal is control. Here is
              exactly what stays yours — enforced in the database, not promised
              in a brochure.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dmsControls.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                    <Lock className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Price ─────────────── */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Pricing"
            title="One number, and it is per login"
            description="Not per user, not per order, and not on a quote. Your own staff are already licensed on your CRM or SFA plan — DMS prices the outsiders you are letting in."
          />
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-lg md:p-12">
              <p className="ozzo-eyebrow text-sky-500">DMS add-on</p>
              <p className="ozzo-display mt-4 text-5xl text-foreground md:text-6xl">
                ₹{DMS_PRICE_INR.toLocaleString("en-IN")}
              </p>
              <p className="mt-3 text-lg font-bold text-foreground">
                per year, for {DMS_SEATS} distributor &amp; dealer logins
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                + {GST_RATE_PCT}% GST · about ₹{dms.perLoginPerMonth} per login
                per month
              </p>

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
                {[
                  `All ${DMS_SEATS} logins included — use as many as you need`,
                  "Switch a customer off and the seat is free again",
                  "An add-on to any CRM or SFA plan",
                  "The limit is enforced by the system, not by an invoice",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex gap-2.5 rounded-xl bg-card-2 p-3.5 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-foreground/85">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/plans">See CRM &amp; SFA plans</SecondaryCTA>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                DMS is granted per account by OZZO, so there is no self-serve
                switch — we turn it on with you on the call.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── Honest limits ─────────────── */}
      <section className="border-y border-border bg-card-2 py-24">
        <Container>
          <SectionHeading
            eyebrow="What DMS does not do"
            title="The list most vendors leave for week three"
            description="Every rival ships some of what follows. If one of these is what you are actually buying, you should find out here rather than on a demo call."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dmsLimits.map((l, i) => (
              <Reveal key={l.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <X className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Need distributor stock, replenishment or claims on day one? Read{" "}
              <Link
                href="/compare/ozzo-vs-botree"
                className="font-semibold text-primary hover:underline"
              >
                OZZO vs Botree
              </Link>{" "}
              — we say plainly where a specialist is the better buy.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── Fit ─────────────── */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Is this for you?"
            title="Who DMS suits, and who it does not"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-success/25 bg-success/[0.04] p-7">
                <h3 className="ozzo-display text-xl text-foreground">
                  A good fit
                </h3>
                <ul className="mt-5 space-y-3">
                  {dmsFitFor.map((t) => (
                    <li key={t} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-foreground/85">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <h3 className="ozzo-display text-xl text-foreground">
                  Look elsewhere if
                </h3>
                <ul className="mt-5 space-y-3">
                  {dmsFitNotFor.map((t) => (
                    <li key={t} className="flex gap-2.5 text-sm">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      <span className="text-foreground/85">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── Related ─────────────── */}
      <section className="border-t border-border bg-card-2 py-20">
        <Container>
          <SectionHeading
            eyebrow="Read next"
            title="The rest of the picture"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/distributor-management-software",
                title: "What is a DMS?",
                body: "The category explained plainly — what a Distributor Management System is, what it is not, and how to tell which one you need.",
              },
              {
                href: "/products/sfa",
                title: "Sales Force Automation",
                body: "The other half of the trade: your own reps, their attendance, visits, beats, offline orders and collections.",
              },
              {
                href: "/blog/what-is-a-distributor-management-system-dms",
                title: "On the blog",
                body: "Why distributor orders arrive on WhatsApp, what that habit costs, and what changes when the trade orders for itself.",
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 60}>
                <Link
                  href={c.href}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                    {c.title}
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection items={dmsFaqs} />

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="border-t border-border py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="ozzo-display text-4xl text-foreground md:text-5xl">
            Stop typing in other people&apos;s orders
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We will switch DMS on against your real catalogue, price lists and
            customers, and create the first distributor login with you on the
            call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/contact">Talk to us</SecondaryCTA>
          </div>
        </Container>
      </section>
    </>
  );
}
