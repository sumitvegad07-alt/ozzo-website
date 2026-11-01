import Link from "next/link";
import { Check, Minus, X, ArrowRight } from "lucide-react";
import { Container, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { FaqSection } from "@/components/faq-section";
import { CurrencyScript } from "@/components/pricing-shell";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import {
  whatsappCapabilities,
  whatsappApproaches,
  whatsappFeatures,
  whatsappLimits,
  whatsappFaqs,
} from "@/lib/whatsapp-crm-page";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "WhatsApp CRM in India, explained",
  description:
    "What a WhatsApp CRM is, how it differs from a broadcast tool, and what to look for — plus a shared team inbox and AI assistant from ₹100 per user/month.",
  path: "/whatsapp-crm",
  keywords: [
    "WhatsApp CRM",
    "WhatsApp CRM India",
    "WhatsApp CRM software",
    "shared WhatsApp inbox",
    "WhatsApp team inbox India",
    "WhatsApp CRM for small business",
    "CRM with WhatsApp integration India",
    "WhatsApp business CRM software",
    "WhatsApp AI assistant for sales",
    "WhatsApp CRM pricing India",
  ],
});

const ICON = {
  full: { el: Check, cls: "text-emerald-500", label: "Included" },
  partial: { el: Minus, cls: "text-amber-500", label: "Partial" },
  none: { el: X, cls: "text-muted-foreground/50", label: "Not offered" },
} as const;

export default function WhatsappCrmPage() {
  return (
    <>
      <CurrencyScript />
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(whatsappFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "WhatsApp CRM", path: "/whatsapp-crm" },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-16 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#10b981]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#2563eb]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>WhatsApp CRM</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            WhatsApp CRM,{" "}
            <span className="ozzo-gradient-bright">explained plainly</span>
          </h1>
          {/* Answer-first: this paragraph is the block an AI engine quotes, so
              it has to stand alone without the rest of the page. */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            A WhatsApp CRM is a customer relationship management system whose
            inbox is WhatsApp. Conversations on your official WhatsApp Business
            number land in one shared team inbox instead of on individual
            reps&apos; phones, and each one is attached to that customer&apos;s
            record — so the chat sits beside the lead, the deal, the quotation
            and the follow-up task rather than in a separate app. It is not the
            same thing as a WhatsApp broadcast tool, which exists to send bulk
            campaigns rather than to run a sale.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="#what-it-does">What it does</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── Why this is a category at all ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>Why it exists</Eyebrow>
                <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
                  In India, the enquiry arrives on WhatsApp
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Not in a web form, not in an email, and rarely on a call. A
                  customer messages the number on the visiting card, the shop
                  board or the WhatsApp status, and the conversation starts
                  there — which means the most valuable sales data in the
                  business is sitting in a chat thread on somebody&apos;s
                  personal phone.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  That is a real problem, not a software-marketing one. Nobody
                  else can cover the chat when that rep is on leave. Nothing is
                  measurable, so a missed message is invisible until the
                  customer buys from someone faster. And when the rep leaves,
                  the relationship walks out with the handset.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  A WhatsApp CRM fixes the ownership problem first. The number
                  belongs to the business, the inbox is shared, and the
                  conversation is filed against a customer record that outlives
                  whoever happened to answer it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-3xl border border-border bg-card-2 p-7 md:p-9">
                <h3 className="text-lg font-bold text-foreground">
                  The three questions this category answers
                </h3>
                <ul className="mt-5 space-y-5">
                  {[
                    [
                      "Who owns the customer?",
                      "The business, not the phone. One official number, one shared inbox, roles deciding who can reply.",
                    ],
                    [
                      "Did anyone reply?",
                      "Unread indicators on a shared inbox make silence visible. A message nobody picked up is a fact, not a guess.",
                    ],
                    [
                      "What happened next?",
                      "The chat, the deal, the quotation and the field visit on one record — so the sale has a history, not an anecdote.",
                    ],
                  ].map(([q, a]) => (
                    <li key={q}>
                      <p className="text-sm font-bold text-foreground">{q}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {a}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── The four capabilities ─────────────── */}
      <section
        id="what-it-does"
        className="border-t border-border bg-card-2 py-16 md:py-20"
      >
        <Container>
          <Eyebrow>What OZZO ships</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            A shared inbox, an AI assistant, and one customer record
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Four things, and the third one is the difference between this and a
            messaging tool.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whatsappCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 md:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon name={c.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[13px] text-foreground"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
                          strokeWidth={2.5}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The third card is the one worth re-reading. A broadcast platform can
            put a conversation in a shared inbox; a general CRM can integrate
            WhatsApp. Neither puts the chat, the deal, the branded quotation and
            a GPS-stamped field visit on the same timeline, which is what
            actually happens when an Indian sales team closes a customer. See
            the whole product on the{" "}
            <Link href="/products/crm" className="font-bold text-primary">
              OZZO CRM page
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* ─────────────── How teams run WhatsApp today ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <Eyebrow>Five ways teams do this today</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            Which of these is your business, honestly?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Most Indian SMEs are on the first or second row. Work down the
            table and stop at the one that describes you — the next column tells
            you what it costs you.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card-2">
                  <th className="p-4 font-bold text-foreground">Approach</th>
                  <th className="w-24 p-4 text-center font-bold text-foreground">
                    Shared record
                  </th>
                  <th className="p-4 font-bold text-foreground">Good at</th>
                  <th className="p-4 font-bold text-foreground">
                    Where it runs out
                  </th>
                </tr>
              </thead>
              <tbody>
                {whatsappApproaches.map((a) => (
                  <tr
                    key={a.approach}
                    className="border-b border-border/60 last:border-0"
                  >
                    <td className="p-4 align-top">
                      <p className="font-semibold text-foreground">
                        {a.approach}
                      </p>
                      <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                        {a.what}
                      </p>
                    </td>
                    <td className="p-4 text-center align-top">
                      <span
                        className={cn(
                          "inline-block rounded-full px-2.5 py-1 text-[12px] font-bold",
                          a.sharedRecord === "Yes"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : a.sharedRecord === "No"
                              ? "bg-muted text-muted-foreground"
                              : "bg-amber-500/10 text-amber-600",
                        )}
                      >
                        {a.sharedRecord}
                      </span>
                    </td>
                    <td className="p-4 align-top text-[13px] leading-snug text-foreground/80">
                      {a.strength}
                    </td>
                    <td className="p-4 align-top text-[13px] leading-snug text-muted-foreground">
                      {a.breaks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ─────────────── Feature-by-feature ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <Eyebrow>In OZZO, or not</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            Twelve features, and the four we don&apos;t have
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The crosses at the bottom matter more than the ticks at the top. A
            lot of people searching for a &ldquo;WhatsApp CRM&rdquo; are
            actually shopping for a broadcast tool — if that is you, this table
            saves you a demo.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="p-4 font-bold text-foreground">Feature</th>
                  <th className="p-4 font-bold text-foreground">
                    What it means
                  </th>
                  <th className="w-28 p-4 text-center font-bold text-foreground">
                    In OZZO
                  </th>
                </tr>
              </thead>
              <tbody>
                {whatsappFeatures.map((f) => {
                  const mark = ICON[f.ozzo];
                  const MarkIcon = mark.el;
                  return (
                    <tr
                      key={f.feature}
                      className="border-b border-border/60 last:border-0"
                    >
                      <td className="p-4 align-top">
                        <p className="font-semibold text-foreground">
                          {f.feature}
                        </p>
                      </td>
                      <td className="p-4 align-top">
                        <p className="text-[13px] leading-snug text-foreground/80">
                          {f.what}
                        </p>
                        {f.note && (
                          <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">
                            {f.note}
                          </p>
                        )}
                      </td>
                      <td className="p-4 text-center align-top">
                        <MarkIcon
                          className={cn("mx-auto h-5 w-5", mark.cls)}
                          strokeWidth={2.5}
                          aria-label={mark.label}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ─────────────── Price ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>What it costs</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              <span data-cur-only data-c="INR">
                WhatsApp CRM from ₹100 per user / month
              </span>
              <span data-cur-only data-c="USD">
                WhatsApp CRM from $3 per user / month
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              The shared inbox, the message templates and the AI knowledge-base
              assistant are part of the CRM line — not an add-on, and not
              reserved for a higher tier.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <p className="ozzo-eyebrow text-muted-foreground">
                  WhatsApp CRM only
                </p>
                <h3 className="ozzo-display mt-2 text-3xl text-foreground">
                  CRM{" "}
                  <span data-cur-only data-c="INR">
                    ₹100
                  </span>
                  <span data-cur-only data-c="USD">
                    $3
                  </span>
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    / user / month
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Shared WhatsApp inbox, templates, the AI assistant, leads,
                  Kanban deal pipelines and branded PDF quotations. Everything
                  on this page.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-primary/30 bg-card p-7 ring-1 ring-primary/10">
                <p className="ozzo-eyebrow text-primary">
                  WhatsApp CRM + the field
                </p>
                <h3 className="ozzo-display mt-2 text-3xl text-foreground">
                  CRM + WFA{" "}
                  <span data-cur-only data-c="INR">
                    ₹200
                  </span>
                  <span data-cur-only data-c="USD">
                    $7
                  </span>
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    / user / month
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Everything in CRM, plus selfie + GPS attendance, live
                  location and geo-tagged visits — so the field visit lands on
                  the same record as the chat.
                </p>
              </div>
            </Reveal>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            <span data-cur-only data-c="INR">
              Yearly billing, plus 18% GST. The complete
              platform with full field sales is ₹400. Every rate is published —
              no &ldquo;contact us for pricing&rdquo;.
            </span>
            <span data-cur-only data-c="USD">
              Yearly billing. The complete platform with full field sales is
              $12. Every rate is published — no &ldquo;contact us for
              pricing&rdquo;.
            </span>
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/plans">See all plans</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── Honest limits ─────────────── */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/25 bg-amber-500/[0.04] p-7 md:p-9">
            <Eyebrow>Before you buy</Eyebrow>
            <h2 className="ozzo-display mt-3 text-2xl text-foreground md:text-3xl">
              Four things OZZO does not do
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Worth knowing now rather than in week three of an evaluation.
            </p>
            <ul className="mt-5 space-y-3">
              {whatsappLimits.map((l) => (
                <li key={l.title} className="flex items-start gap-3">
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-amber-500"
                    strokeWidth={2.5}
                  />
                  <span>
                    <span className="text-sm font-bold text-foreground">
                      {l.title}
                    </span>
                    <span className="block text-[13px] leading-snug text-muted-foreground">
                      {l.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Weighing OZZO against a named CRM? These three are the closest
              calls, each written with the other side&apos;s real strengths
              stated:
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                ["ozzo-vs-zoho", "OZZO vs Zoho CRM"],
                ["ozzo-vs-koops", "OZZO vs Koops"],
                ["ozzo-vs-salesforce", "OZZO vs Salesforce"],
              ].map(([slug, label]) => (
                <Link
                  key={slug}
                  href={`/compare/${slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
                >
                  {label}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Already using a field-tracking tool and wondering where the
              WhatsApp side comes from?{" "}
              <Link
                href="/alternatives/unolo-alternatives"
                className="font-bold text-primary"
              >
                Unolo alternatives
              </Link>{" "}
              and{" "}
              <Link
                href="/alternatives/delta-sales-app-alternatives"
                className="font-bold text-primary"
              >
                Delta Sales App alternatives
              </Link>{" "}
              list the real options, OZZO among several rather than as the
              automatic answer.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection items={whatsappFaqs} />

      {/* ─────────────── Spokes ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16">
        <Container>
          <p className="ozzo-eyebrow mb-2 text-center text-muted-foreground">
            Built for your trade
          </p>
          <h2 className="ozzo-display mb-7 text-center text-2xl text-foreground md:text-3xl">
            Where a WhatsApp enquiry turns straight into an order
          </h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              ["tiles-sanitaryware-companies", "Tiles & sanitaryware"],
              ["plywood-laminates-companies", "Plywood & laminates"],
              ["electricals-wires-cables-companies", "Electricals & cables"],
              ["pharmaceutical-companies", "Pharmaceutical"],
              ["paint-companies", "Paints"],
              ["fmcg-companies", "FMCG"],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
              >
                {label}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            <Link href="/industries" className="font-bold text-primary">
              All 28 industries
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
