import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, PrimaryCTA, SecondaryCTA } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { pageMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { industriesBySector } from "@/lib/industries";
import { sectors } from "@/lib/sectors";

export const metadata = pageMetadata({
  title: "Industries — field sales software built for your trade",
  description:
    "OZZO is built for the way each industry sells and collects in the field — from seed, fertilizer and agrochemical companies to animal feed and beyond. Explore field-sales software tailored to your sub-industry.",
  path: "/industries",
  keywords: [
    "field sales software by industry",
    "SFA for agriculture",
    "seed company software",
    "fertilizer distribution software",
    "agrochemical field sales",
    "animal feed distribution software",
  ],
});

export default function IndustriesHubPage() {
  const bySector = industriesBySector();
  const sectorNames = Object.keys(bySector);
  const sectorSlugByName = new Map(sectors.map((s) => [s.name, s.slug]));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
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
          <Eyebrow center>Industries</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            Built for{" "}
            <span className="ozzo-gradient-bright">the way you sell</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Every trade has its own field-sales reality — seasonal windows,
            dealer credit, secondary movement, rural coverage. Pick your
            sub-industry to see the specific pressures and exactly how OZZO
            handles them.
          </p>
        </Container>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-24">
        <Container>
          {sectorNames.map((sector, si) => {
            const sectorSlug = sectorSlugByName.get(sector);
            return (
            <div key={sector} className={si > 0 ? "mt-16" : ""}>
              <div className="mb-7 flex items-center gap-3">
                {sectorSlug ? (
                  <Link
                    href={`/industries/${sectorSlug}`}
                    className="group inline-flex items-center gap-2 text-2xl font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {sector}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ) : (
                  <h2 className="text-2xl font-bold text-foreground">{sector}</h2>
                )}
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {bySector[sector].map((ind, i) => (
                  <Reveal key={ind.slug} delay={i * 60}>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    >
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                        <Icon name={ind.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {ind.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {ind.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        See how OZZO fits
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
            );
          })}

          <div className="mt-14 text-center">
            <p className="text-muted-foreground">
              Don&apos;t see your industry yet? OZZO fits any team that sells or
              services on a beat.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              <SecondaryCTA href="/contact">Ask about your trade</SecondaryCTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
