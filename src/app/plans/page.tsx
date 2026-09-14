import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  SecondaryCTA,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { PlansMatrix } from "@/components/plans-matrix";
import { FaqSection } from "@/components/faq-section";
import { InquiryForm } from "@/components/inquiry-form";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { plans, setsApart, includedEverywhere, planFaqs } from "@/lib/plans";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Plans & Packages — CRM, Field & Sales Force Automation",
  description:
    "Compare OZZO plans module by module — CRM, Field (workforce tracking), Sales Force Automation and the complete platform. Attendance, GPS, visits, orders, collections, auto-outstanding, stock, schemes and WhatsApp CRM. Refundable trials — book a demo for a quote.",
  path: "/plans",
  keywords: [
    "field sales software plans",
    "sales force automation packages",
    "CRM plans India",
    "field force tracking plans",
    "attendance and order management app",
    "distributor management plans",
    "compare field sales features",
  ],
});

export default function PlansPage() {
  return (
    <>
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
      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>Plans &amp; packages</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-foreground md:text-6xl">
            Plans that grow with your{" "}
            <span className="ozzo-gradient-text">field team</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Buy the line that fits how your team works today — front office, field
            visibility, or full field sales — and move up whenever you&apos;re ready.
            Every module below is live in production. Compare them side by side, then
            book a demo for a package built around your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
            <SecondaryCTA href="#compare">Compare every module</SecondaryCTA>
          </div>
          <p className="mt-5 text-sm font-medium text-muted-foreground">
            10 &amp; 30-day refundable trials · no card required · guided setup
          </p>
        </Container>
      </section>

      {/* ─────────────── Plan cards ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.key} delay={i * 70}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-card p-6 shadow-sm ring-1",
                    plan.popular
                      ? "border-primary/40 ring-primary/30"
                      : "border-border ring-transparent",
                  )}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                      Most popular
                    </span>
                  )}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl bg-muted",
                        plan.accentClass,
                      )}
                    >
                      <Icon name={plan.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className={cn("text-xl font-bold", plan.accentClass)}>
                        {plan.name}
                      </h2>
                      <p className="text-xs text-muted-foreground">{plan.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {plan.blurb}
                  </p>

                  {plan.inherits && (
                    <p className="mt-4 text-xs font-semibold text-foreground">
                      Everything in{" "}
                      <span className="text-primary">{plan.inherits}</span>, plus:
                    </p>
                  )}

                  <ul className="mt-3 flex-1 space-y-2.5">
                    {plan.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check
                          className={cn("mt-0.5 h-4 w-4 shrink-0", plan.accentClass)}
                          strokeWidth={2.5}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book-demo"
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5",
                      plan.popular
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover"
                        : "border border-border bg-card text-foreground shadow-sm hover:border-primary/30",
                    )}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

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
          </div>
        </Container>
      </section>

      {/* ─────────────── What sets us apart ─────────────── */}
      <section className="border-y border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What sets OZZO apart"
            title="The things a spreadsheet and a generic tool can't do"
            description="Every plan is built on the same foundations — the ones that make OZZO safe to run a whole field business on."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {setsApart.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
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
                description="Share your team size and how your field team works, and we'll recommend the right line — then set up a refundable trial with your own data before you commit."
                className="mb-8"
              />
              <ul className="space-y-4">
                {[
                  "A recommendation matched to how you actually sell",
                  "A guided demo on your own workflow",
                  "A refundable trial so your team can try it live",
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
