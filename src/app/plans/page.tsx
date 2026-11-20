import Link from "next/link";
import { Check, ArrowRight, Sparkles, Calculator } from "lucide-react";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  SecondaryCTA,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Icon } from "@/components/icon";
import { PlansMatrix } from "@/components/plans-matrix";
import { PricingShell, CurrencyScript } from "@/components/pricing-shell";
import { PlanPrice } from "@/components/plan-price";
import { PriceCalculator } from "@/components/price-calculator";
import { FaqSection } from "@/components/faq-section";
import { InquiryForm } from "@/components/inquiry-form";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import {
  plans,
  setsApart,
  includedEverywhere,
  planFaqs,
  startingFrom,
  fromRate,
  formatRate,
  GST_RATE_PCT,
} from "@/lib/plans";
import { DMS_PRICE_INR, DMS_SEATS, dms } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Plans & Packages — from ₹100 per user",
  description:
    "OZZO pricing in full: CRM from ₹100, WFA ₹150, CRM + WFA ₹200, SFA ₹300 and CRM + SFA ₹400 per user per month on yearly billing, plus 18% GST.",
  path: "/plans",
  keywords: [
    "field sales software plans",
    "sales force automation packages",
    "CRM plans India",
    "field force tracking plans",
    "attendance and order management app",
    "distributor management plans",
    "compare field sales features",
    "field sales software price India",
    "affordable sales force automation",
    "SFA software starting price",
  ],
});

export default function PlansPage() {
  return (
    <>
      <CurrencyScript />
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(planFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Plans & Packages", path: "/plans" },
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
          <Eyebrow center>Plans &amp; packages</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            Plans that grow with your{" "}
            <span className="ozzo-gradient-bright">field team</span>
          </h1>
          <p className="ozzo-display mx-auto mt-5 text-2xl text-white md:text-3xl">
            <span className="ozzo-gradient-bright" data-cur-only data-c="INR">
              From {formatRate("INR", fromRate("INR"))} per user / month
            </span>
            <span className="ozzo-gradient-bright" data-cur-only data-c="USD">
              From {formatRate("USD", fromRate("USD"))} per user / month
            </span>
          </p>
          <p className="mt-2 text-sm font-medium text-white/60">
            <span data-cur-only data-c="INR">{startingFrom("INR")}</span>
            <span data-cur-only data-c="USD">{startingFrom("USD")}</span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            Five plans built from three product lines — CRM, WFA and SFA — plus
            the DMS add-on, which gives your distributors and dealers their own
            ordering logins. Buy the combination that fits how your team works, and
            add the rest on the same data whenever you&apos;re ready. Every module
            below is live in production.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="#compare">Compare every module</SecondaryCTA>
          </div>
          <p className="mt-5 text-sm font-medium text-white/55">
            Web dashboard + Android &amp; iPhone app · works offline · guided onboarding
          </p>
        </Container>
      </section>

      {/* ─────────────── Plan cards ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <PricingShell>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 60}>
                <TiltCard className="rounded-3xl" max={6}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-card p-5 shadow-sm ring-1",
                    plan.popular
                      ? "border-primary/40 ring-primary/30"
                      : "border-border ring-transparent",
                  )}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-md">
                      Most popular
                    </span>
                  )}
                  <span
                    className={cn(
                      "mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted",
                      plan.accentClass,
                    )}
                  >
                    <Icon name={plan.icon} className="h-5 w-5" />
                  </span>
                  <h2 className={cn("text-lg font-bold", plan.accentClass)}>
                    {plan.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">{plan.tagline}</p>

                  <PlanPrice id={plan.id} />

                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {plan.blurb}
                  </p>

                  {plan.inherits && (
                    <p className="mt-4 text-[11px] font-semibold text-foreground">
                      Everything in{" "}
                      <span className="text-primary">{plan.inherits}</span>, plus:
                    </p>
                  )}

                  <ul className="mt-3 flex-1 space-y-2">
                    {plan.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-snug text-foreground"
                      >
                        <Check
                          className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", plan.accentClass)}
                          strokeWidth={2.5}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book-demo"
                    className={cn(
                      "mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-bold transition-all hover:-translate-y-0.5",
                      plan.popular
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover"
                        : "border border-border bg-card text-foreground shadow-sm hover:border-primary/30",
                    )}
                  >
                    Book a demo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          </PricingShell>

          {/* Included in every plan */}
          <div className="mt-8 rounded-3xl border border-border bg-card-2 p-6 md:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <p className="flex shrink-0 items-center gap-2 text-sm font-bold text-foreground">
                <Sparkles className="h-4 w-4 text-primary" /> In every plan
              </p>
              <div className="flex flex-wrap gap-2">
                {includedEverywhere.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/*
              The page already carries the full enquiry form, but it sits past
              the comparison table and the FAQs. Someone who has just picked a
              plan is at the peak of their intent right here, and asking them to
              scroll through two more sections to act on it loses most of them.
              /plans is the second-most-read page on the site (70 views in three
              weeks to 16 Nov 2026) and produced one lead; this shortens the path
              without moving the form or duplicating it.
            */}
            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              <PrimaryCTA href="#calculator">
                Work out your exact price
              </PrimaryCTA>
              <p className="text-sm text-muted-foreground">
                Pick a plan, enter your team size, and see the figure for
                quarterly, half-yearly and yearly billing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────── Price calculator ─────────────── */}
      {/*
        Placed immediately after the plan cards, before the comparison table
        and the FAQs, because that is where intent peaks: someone has just read
        five cards and is working out what their own team would cost. The page
        took 20 views and 1m20s of average attention in the five days to
        20 Nov 2026 and converted nobody, which is what this answers.

        It is the only place on the site that states the quarterly and
        half-yearly rates. That is safe here and was not safe in <PlanPrice/>:
        the calculator computes in the browser from inputs the visitor chooses,
        so none of those figures appear in the HTML a crawler reads. The static
        markup still carries exactly one rate per plan.
      */}
      <section id="calculator" className="scroll-mt-20 border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          {/*
            Written out rather than using <SectionHeading/> so the section can
            lead with the calculator icon. On 20 November 2026 the founder's
            note was that the section "does not feel like a price calculator",
            and an eyebrow reading "Price calculator" in small caps was not
            enough — people scanning a page read shapes before words.
          */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
              <Calculator className="h-7 w-7" />
            </span>
            <Eyebrow>Price calculator</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-foreground md:text-5xl">
              Work out your price in 10 seconds
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Pick a plan, enter how many people you have, and your quarterly,
              half-yearly and yearly figures appear — GST included. Then we&apos;ll
              send the quote straight to your WhatsApp.
            </p>
          </div>
          <PriceCalculator />
        </Container>
      </section>

      {/* ─────────────── What sets us apart ─────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-16 -top-16 h-[420px] w-[420px] rounded-full bg-[#2563eb]/20 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 bottom-0 h-[440px] w-[440px] rounded-full bg-[#7c3aed]/22 blur-[150px]" />
        <Container className="relative z-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow center>What sets OZZO apart</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
              The things a spreadsheet and a generic tool{" "}
              <span className="ozzo-gradient-bright">can&apos;t do</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Every plan is built on the same foundations — the ones that make
              OZZO safe to run a whole field business on.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {setsApart.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <TiltCard className="rounded-3xl" max={6}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-shadow duration-300 hover:shadow-xl hover:shadow-black/30">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-[#c4b5fd]">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-white">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{s.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Detailed comparison ─────────────── */}
      <section id="compare" className="scroll-mt-20 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Module by module"
            title="Compare every capability, plan by plan"
            description="Exactly what ships on each line today — nothing aspirational. On a phone, tap a plan to see its column."
          />
          <PlansMatrix />
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Can&apos;t tell which line fits?{" "}
            <Link href="/book-demo" className="font-semibold text-primary hover:underline">
              Book a demo and we&apos;ll map it to your workflow →
            </Link>
          </p>
        </Container>
      </section>

      {/* ─────────────── DMS add-on ─────────────── */}
      {/*
        DELIBERATELY NOT A COLUMN IN THE MATRIX ABOVE. That table is per user
        per month, and DMS is per login per year — dropping it into a sixth
        column would make it read as ₹10,000 per user, which is a hundredfold
        error on a pricing page. It is a band of its own for that reason.
        See the note on `productLines` in src/lib/site.ts.
      */}
      <section className="border-t border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Add-on"
            title="DMS — let your distributors order for themselves"
            description="Priced per login rather than per user, because the people signing in are your customers, not your staff. Added on top of any plan above."
          />
          <Reveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="border-b border-border bg-ink p-8 text-center text-white md:border-b-0 md:border-r md:p-10">
                  <p className="ozzo-eyebrow text-sky-300">DMS add-on</p>
                  <p className="ozzo-display mt-4 text-5xl text-white">
                    ₹{DMS_PRICE_INR.toLocaleString("en-IN")}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">per year</p>
                  <p className="mt-3 text-sm text-white/70">
                    for {DMS_SEATS} distributor &amp; dealer logins
                  </p>
                  <p className="mt-4 text-xs text-white/55">
                    + {GST_RATE_PCT}% GST · about ₹{dms.perLoginPerMonth} per
                    login per month
                  </p>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Give any customer — distributor, stockist or dealer — their
                    own browser login. They place their own orders on their own
                    price list with their schemes applied, see what they owe
                    you, and dispatch what they have sold onward.
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {[
                      "An add-on to any CRM or SFA plan, not a separate product",
                      `All ${DMS_SEATS} logins included — switch one off and the seat frees up`,
                      "Nothing for your distributors to install — it runs in a browser",
                      "Does not include distributor stock, replenishment or claims",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-foreground/85">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <PrimaryCTA href="/products/dms">What DMS does</PrimaryCTA>
                    <SecondaryCTA href="/distributor-management-software">
                      What is a DMS?
                    </SecondaryCTA>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="border-y border-border bg-card-2">
        <FaqSection items={planFaqs} heading />
      </section>

      {/* ─────────────── Final CTA + form ─────────────── */}
      <section id="get-started" className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Get a package built for you"
                title="Tell us your team. We'll size the plan."
                description="Share your team size and how your field team works, and we'll recommend the right plan and put together a package built around your workflow."
                className="mb-8"
              />
              <ul className="space-y-4">
                {[
                  "A recommendation matched to how you actually sell",
                  "A guided demo on your own workflow",
                  "A package sized to your team and plan",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-4">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
