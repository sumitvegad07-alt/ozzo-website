import Link from "next/link";
import { Check, ArrowRight, HelpCircle, AlertTriangle } from "lucide-react";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  SecondaryCTA,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { dms } from "@/lib/site";
import {
  dmsCategoryMeta,
  dmsDefinition,
  dmsVsWhat,
  dmsSignals,
  dmsChecklist,
  dmsTiers,
  dmsCategoryFaqs,
} from "@/lib/dms-category";

/**
 * The category pillar for "distributor management software" — a phrase this
 * site targeted on 20+ leaf pages and owned on none. See the note at the top
 * of src/lib/dms-category.ts for why that is a problem worth a whole page.
 */
export const metadata = pageMetadata({
  title: dmsCategoryMeta.metaTitle,
  description: dmsCategoryMeta.metaDescription,
  path: "/distributor-management-software",
  keywords: dmsCategoryMeta.keywords,
});

export default function DistributorManagementSoftwarePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(dmsCategoryFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Distributor management software",
              path: "/distributor-management-software",
            },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-16 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#0ea5e9]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#6366f1]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>Distributor management software</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            Distributor management software,{" "}
            <span className="ozzo-gradient-bright">explained plainly</span>
          </h1>
          {/* Answer-first. Each paragraph stands alone — this is the block an
              AI engine quotes when asked what a DMS is. */}
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left">
            {dmsDefinition.map((p) => (
              <p key={p.slice(0, 32)} className="text-lg leading-relaxed text-white/75">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href="/products/dms">See OZZO DMS</PrimaryCTA>
            <SecondaryCTA href="/book-demo">Book a demo</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── CRM vs SFA vs DMS ─────────────── */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Three different things"
            title="CRM, SFA and DMS are not the same purchase"
            description="These three get used interchangeably in sales conversations, and buying the wrong one is the most common and most expensive mistake in this category. The difference is simply who logs in."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {dmsVsWhat.map((t, i) => (
              <Reveal key={t.term} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <p className="ozzo-display text-3xl text-foreground">
                    {t.term}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">
                    Whose world
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {t.whose}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">
                    Question it answers
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {t.answers}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Still unsure which you need? Read{" "}
              <Link
                href="/blog/crm-or-sfa-which-does-your-field-team-need"
                className="font-semibold text-primary hover:underline"
              >
                CRM or SFA: which does your field team actually need?
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── Do you need one ─────────────── */}
      <section className="border-y border-border bg-card-2 py-24">
        <Container>
          <SectionHeading
            eyebrow="Do you need one?"
            title="Six signs your trade has outgrown WhatsApp"
            description="Nobody searches for “distributor management software” first. They search for it after one of these has been annoying them for a year."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dmsSignals.map((s, i) => (
              <Reveal key={s.signal} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-warning/15 text-warning">
                    <AlertTriangle className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {s.signal}
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

      {/* ─────────────── Market tiers ─────────────── */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="The market"
            title="Three kinds of product wear this name"
            description="They solve genuinely different problems at genuinely different scales. Placing yourself here before you take a demo saves you from being sold the wrong tier."
          />
          <div className="space-y-6">
            {dmsTiers.map((t, i) => (
              <Reveal key={t.tier} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card p-7">
                  <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <h3 className="ozzo-display text-xl text-foreground">
                        {t.tier}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Built for:{" "}
                        </span>
                        {t.who}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-success">
                        Genuine strengths
                      </p>
                      <ul className="mt-3 space-y-2">
                        {t.strengths.map((s) => (
                          <li key={s} className="flex gap-2.5 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                            <span className="text-foreground/85">{s}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 rounded-xl bg-card-2 p-4 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Watch for:{" "}
                        </span>
                        {t.watchFor}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Buyer checklist ─────────────── */}
      <section className="border-y border-border bg-ink py-24 text-white">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow center>Take this to the demo</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-white md:text-5xl">
              Ten questions worth asking any vendor
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Including us. A checklist that only one product passes is
              marketing — these are the questions that actually separate these
              tools, whichever one you end up buying.
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-3">
            {dmsChecklist.map((c, i) => (
              <Reveal key={c.q} delay={i * 35}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                      <HelpCircle className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{c.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {c.why}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Where OZZO sits ─────────────── */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Where OZZO fits"
            title="An ordering portal, and we say so"
          />
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted-foreground">
                OZZO DMS is in the third tier above. It gives your distributors,
                stockists and dealers their own login so they place their own
                orders — on their own price list, with their schemes applied and
                their credit limit enforced — see their own outstanding, and
                dispatch what they have sold onward. It shares one database with
                OZZO CRM and SFA, so there is no integration to maintain.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                It does <span className="font-semibold text-foreground">not</span>{" "}
                hold distributor stock, does not do auto-replenishment, and does
                not handle damage, scheme, freight or rate-difference claims. If
                those decide your purchase, an enterprise DMS suite is the right
                buy and we will tell you so on the call.
              </p>
              <p className="mt-6 rounded-xl bg-card-2 p-5 text-sm leading-relaxed text-foreground/85">
                <span className="font-bold">Priced per login:</span>{" "}
                {dms.priceLine}, plus 18% GST — about ₹
                {dms.perLoginPerMonth} per login per month, as an add-on to a
                CRM or SFA plan. It runs in a browser at {dms.portalUrl}, so
                there is nothing for your distributors to install.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryCTA href="/products/dms">
                  See what OZZO DMS does
                </PrimaryCTA>
                <SecondaryCTA href="/compare">Compare alternatives</SecondaryCTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── Related reading ─────────────── */}
      <section className="border-t border-border bg-card-2 py-20">
        <Container>
          <SectionHeading eyebrow="Read next" title="Keep going" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/compare/ozzo-vs-botree",
                title: "OZZO vs Botree",
                body: "Against a distribution specialist — where they win on stock and claims.",
              },
              {
                href: "/compare/ozzo-vs-marg-erp",
                title: "OZZO vs Marg ERP",
                body: "Accounting-led distribution versus a trade-facing portal.",
              },
              {
                href: "/fmcg-software",
                title: "FMCG software guide",
                body: "The category above this one, for consumer-goods brands.",
              },
              {
                href: "/blog/distributor-orders-on-whatsapp-what-it-costs",
                title: "What WhatsApp ordering costs",
                body: "The hidden price of the habit, worked through with numbers.",
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 60}>
                <Link
                  href={c.href}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    {c.title}
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
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

      <FaqSection items={dmsCategoryFaqs} />

      {/* ─────────────── CTA ─────────────── */}
      <section className="border-t border-border py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="ozzo-display text-4xl text-foreground md:text-5xl">
            Work out which tier you need
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell us how your trade orders today and we will tell you straight
            whether OZZO is the right fit — or whether you want a specialist.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/products/dms">See OZZO DMS</SecondaryCTA>
          </div>
        </Container>
      </section>
    </>
  );
}
