import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Container,
  Eyebrow,
  PrimaryCTA,
  SecondaryCTA,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { pageMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { comparisons } from "@/lib/comparisons";
import { alternativesPages } from "@/lib/alternatives";

export const metadata = pageMetadata({
  title: "OZZO vs the alternatives — honest comparisons",
  description:
    "How OZZO compares to Bizom, BeatRoute, FieldAssist, Zoho and Salesforce. Honest, side-by-side comparisons to help you pick the right platform.",
  path: "/compare",
  keywords: [
    "OZZO vs",
    "OZZO comparison",
    "best SFA software India",
    "Bizom alternative",
    "BeatRoute alternative",
    "FieldAssist alternative",
    "Zoho CRM field sales alternative",
    "Salesforce alternative India",
  ],
});

export default function CompareHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
          ]),
        ]}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>Compare</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            How OZZO stacks up,{" "}
            <span className="ozzo-gradient-bright">honestly</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            We&apos;ll tell you where the other tools are genuinely strong — and
            where OZZO&apos;s all-in-one CRM, field sales and WhatsApp platform is
            the better fit for an Indian SME. Pick a comparison to dig in.
          </p>
        </Container>
      </section>

      {/* Comparison grid */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/compare/${c.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <p className="ozzo-eyebrow text-muted-foreground">
                    {c.competitorCategory}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-foreground">
                    OZZO <span className="text-muted-foreground/50">vs</span>{" "}
                    {c.competitor}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the comparison
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Alternatives round-ups ───────────
          These pages were orphaned on launch: nothing linked to them, so
          neither a visitor browsing the site nor Google crawling it could
          reach them. Internal links are also how Google judges which pages
          matter, so an unlinked page is a page that will not rank. */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>Round-ups</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Shopping around? Start here
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Each round-up lists several tools — not just OZZO — with who they
              suit and where each one falls short.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {alternativesPages.map((a) => (
              <Link
                key={a.slug}
                href={`/alternatives/${a.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
              >
                <span className="text-sm font-bold text-foreground">
                  {a.target} alternatives
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {a.targetCategory}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  {a.picks.length} options compared
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
            <Link
              href="/fmcg-software"
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              <span className="text-sm font-bold text-foreground">
                FMCG software explained
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                Category guide — modules and how to choose
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read the guide
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-14">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-4xl">
                Still weighing it up?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Tell us how your field team works and we&apos;ll show you exactly
                where OZZO fits — no pressure, no jargon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/products">Explore the platform</SecondaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection />
    </>
  );
}
