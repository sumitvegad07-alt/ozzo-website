import Link from "next/link";
import { Check, Minus, X, ArrowRight } from "lucide-react";
import { Container, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { fmcgModules, fmcgFaqs } from "@/lib/fmcg-page";
import { CurrencyScript } from "@/components/pricing-shell";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "FMCG software in India, explained",
  description:
    "A plain guide to FMCG software: SFA, order booking, distributor management, secondary sales, schemes and collections — and which you actually need.",
  path: "/fmcg-software",
  keywords: [
    "FMCG software",
    "FMCG software solutions",
    "FMCG retail software",
    "FMCG distribution software",
    "FMCG order booking app",
    "FMCG sales and distribution software",
    "software for FMCG retail chain",
    "secondary sales software FMCG",
    "FMCG distributor management software India",
  ],
});

const ICON = {
  full: { el: Check, cls: "text-emerald-500", label: "Included" },
  partial: { el: Minus, cls: "text-amber-500", label: "Partial" },
  none: { el: X, cls: "text-muted-foreground/50", label: "Not offered" },
} as const;

export default function FmcgSoftwarePage() {
  return (
    <>
      <CurrencyScript />
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(fmcgFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FMCG software", path: "/fmcg-software" },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-16 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>FMCG software</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            FMCG software, <span className="ozzo-gradient-bright">explained plainly</span>
          </h1>
          {/* Answer-first: this paragraph is what an AI engine quotes. */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            FMCG software is the set of systems a fast-moving consumer goods brand uses to
            run sales and distribution: a field-sales app for reps, order booking at the
            retail counter, distributor management for trade levels and schemes,
            secondary-sales visibility, and collections against outstanding. Large CPG
            companies run several specialist systems. Most Indian SME and regional brands
            need one platform that does all of it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="#modules">See the modules</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── Modules ─────────────── */}
      <section id="modules" className="py-16 md:py-20">
        <Container>
          <Eyebrow>The modules</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            The ten things FMCG software is asked to do
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Work down this list and mark the ones that decide your deal. Most SME brands
            need the first seven and can live without the last three — which is the whole
            difference between an SME platform and an enterprise CPG suite.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card-2">
                  <th className="p-4 font-bold text-foreground">Module</th>
                  <th className="p-4 font-bold text-foreground">
                    The question it answers
                  </th>
                  <th className="w-28 p-4 text-center font-bold text-foreground">
                    In OZZO
                  </th>
                </tr>
              </thead>
              <tbody>
                {fmcgModules.map((m) => {
                  const mark = ICON[m.ozzo];
                  const MarkIcon = mark.el;
                  return (
                    <tr key={m.name} className="border-b border-border/60 last:border-0">
                      <td className="p-4 align-top">
                        <p className="font-semibold text-foreground">{m.name}</p>
                        <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                          {m.what}
                        </p>
                      </td>
                      <td className="p-4 align-top">
                        <p className="text-[13px] italic leading-snug text-foreground/80">
                          &ldquo;{m.question}&rdquo;
                        </p>
                        {m.note && (
                          <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">
                            {m.note}
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

      {/* ─────────────── Primary vs secondary ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>The number that matters</Eyebrow>
                <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
                  Primary sales lie. Secondary sales don&apos;t.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Primary sales are what you bill the distributor. Secondary sales are what
                  the distributor sells on to retailers.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  A brand can hit its primary target every month while stock quietly piles
                  up in a distributor&apos;s godown. You find out two quarters later, when
                  the orders stop and the returns start. Secondary-sales visibility is the
                  figure that tells you whether your product is genuinely moving — and it
                  is the single most common gap in an FMCG brand&apos;s reporting.
                </p>
                <Link
                  href="/products/sfa"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
                >
                  How OZZO tracks secondary sales
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground">
                  Order booking, offline
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  An FMCG order is taken standing at a counter, often in a market with no
                  signal. If the app needs a connection, the rep writes the order on paper
                  and re-keys it that evening — which is where pricing errors, missed
                  schemes and lost orders come from.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  OZZO captures the order offline with the correct price list and scheme
                  already applied, and syncs when signal returns. The rep never loses an
                  order, and nobody re-types anything.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    "Current price list, per trade level",
                    "Slab schemes and free goods applied automatically",
                    "Multi-unit ordering (case, box, piece)",
                    "Branded PDF order confirmation",
                  ].map((x) => (
                    <li
                      key={x}
                      className="flex items-start gap-2 text-[13px] text-foreground"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── Honest limits ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/25 bg-amber-500/[0.04] p-7 md:p-9">
            <Eyebrow>Where OZZO is the wrong answer</Eyebrow>
            <h2 className="ozzo-display mt-3 text-2xl text-foreground md:text-3xl">
              Buy an enterprise CPG platform if you need these
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              OZZO is built for SME and regional FMCG brands. Three things it does not do,
              and they are real strengths of the enterprise suites:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                ["AI image recognition and planogram scoring", "A photo of the shelf graded automatically for facings and compliance."],
                ["Demand forecasting", "Predicting sell-through to plan production and primary dispatch."],
                ["Enterprise-scale DMS rollouts", "Hundreds of distributors with their own ERP integrations and a dedicated implementation team."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-amber-500"
                    strokeWidth={2.5}
                  />
                  <span>
                    <span className="text-sm font-bold text-foreground">{t}</span>
                    <span className="block text-[13px] leading-snug text-muted-foreground">
                      {d}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              If those decide your route-to-market, look at Bizom, BeatRoute or
              FieldAssist. If they don&apos;t, you would be paying for depth you will never
              switch on.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                ["ozzo-vs-bizom", "OZZO vs Bizom"],
                ["ozzo-vs-beatroute", "OZZO vs BeatRoute"],
                ["ozzo-vs-fieldassist", "OZZO vs FieldAssist"],
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
          </div>
        </Container>
      </section>

      {/* ─────────────── Price + spokes ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>What it costs</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              <span data-cur-only data-c="INR">
                SFA from ₹300 per user / month
              </span>
              <span data-cur-only data-c="USD">
                SFA from $10 per user / month
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              <span data-cur-only data-c="INR">
                Yearly billing, plus 18% GST. CRM + SFA is ₹400. Every rate is published —
                no &ldquo;contact us for pricing&rdquo;.
              </span>
              <span data-cur-only data-c="USD">
                Yearly billing. CRM + SFA is $12. Every rate is published — no
                &ldquo;contact us for pricing&rdquo;.
              </span>
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              <SecondaryCTA href="/plans">See all plans</SecondaryCTA>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <p className="ozzo-eyebrow mb-5 text-center text-muted-foreground">
              Built for your trade
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ["fmcg-companies", "FMCG companies"],
                ["fmcg-consumer-goods", "FMCG & consumer goods"],
                ["food-beverage-companies", "Food & beverage"],
                ["ayurvedic-nutraceutical-companies", "Ayurvedic & nutraceutical"],
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
          </div>
        </Container>
      </section>

      <FaqSection items={fmcgFaqs} />
    </>
  );
}
