import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
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
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { brand } from "@/lib/site";
import type { Sector } from "@/lib/sectors";
import type { Industry } from "@/lib/industries";

const ACCENT = "linear-gradient(100deg,#5ea1ff 0%,#a855f7 48%,#ec5fe6 100%)";

export function SectorPage({
  data,
  members,
}: {
  data: Sector;
  members: Industry[];
}) {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: data.name, path: `/industries/${data.slug}` },
          ]),
        ]}
      />

      {/* ─────────── Hero ─────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44 md:pb-24">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-24 -top-24 h-[500px] w-[500px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[540px] w-[540px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />

        {data.image ? (
          <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="text-center lg:text-left">
                <div className="animate-fade-up">
                  <Eyebrow className="justify-center lg:justify-start">
                    Industries · {data.name}
                  </Eyebrow>
                </div>
                <h1
                  className="ozzo-display animate-fade-up mt-4 text-[2.4rem] leading-[1.05] text-white md:text-5xl lg:text-[3.4rem]"
                  style={{ animationDelay: "80ms" }}
                >
                  Field sales software for{" "}
                  <span
                    style={{
                      backgroundImage: ACCENT,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {data.name}
                  </span>
                </h1>
                <p
                  className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0"
                  style={{ animationDelay: "160ms" }}
                >
                  {data.tagline}
                </p>
                <div
                  className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                  style={{ animationDelay: "240ms" }}
                >
                  <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                  <SecondaryCTA
                    href="/products"
                    className="border-white/20 bg-white/[0.06] text-white hover:border-white/40"
                  >
                    Explore the platform
                  </SecondaryCTA>
                </div>
              </div>
              <div
                className="animate-fade-up relative"
                style={{ animationDelay: "200ms" }}
              >
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[#7c3aed]/50 to-[#2563eb]/20 blur-2xl" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl shadow-black/50">
                  <Image
                    src={data.image}
                    alt={data.imageAlt ?? `${data.name} — OZZO`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </Container>
        ) : (
          <Container className="relative z-10 text-center">
            <div className="animate-fade-up">
              <Eyebrow center>Industries · {data.name}</Eyebrow>
            </div>
            <h1
              className="ozzo-display animate-fade-up mx-auto mt-4 max-w-4xl text-[2.4rem] leading-[1.05] text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Field sales software for{" "}
              <span
                style={{
                  backgroundImage: ACCENT,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {data.name}
              </span>
            </h1>
            <p
              className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "160ms" }}
            >
              {data.tagline}
            </p>
            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              <SecondaryCTA
                href="/products"
                className="border-white/20 bg-white/[0.06] text-white hover:border-white/40"
              >
                Explore the platform
              </SecondaryCTA>
            </div>
          </Container>
        )}
      </section>

      {/* ─────────── Intro ─────────── */}
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              {data.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────── Sub-industries (the spokes) ─────────── */}
      {members.length > 0 && (
        <section className="border-y border-border bg-card-2 py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Pick your trade"
              title={
                <>
                  {data.name}{" "}
                  <span className="ozzo-gradient-bright">industries</span>
                </>
              }
              description="Each page covers the specific field-sales pressures of that sub-industry — and exactly how OZZO handles them."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {members.map((ind, i) => (
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
          </Container>
        </section>
      )}

      {/* ─────────── Shared themes ─────────── */}
      {data.themes.length > 0 && (
        <section className="py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="What this sector shares"
              title={
                <>
                  The field-sales reality of{" "}
                  <span className="ozzo-gradient-bright">
                    {data.name.toLowerCase()}
                  </span>
                </>
              }
              description="The pressures every trade in this sector has in common — and how OZZO answers each."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {data.themes.map((t, i) => (
                <Reveal key={t.title} delay={i * 60}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                    <h3 className="text-lg font-bold text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────── Keyword-targeted SEO section ─────────── */}
      {data.seo && (
        <section className="border-t border-border py-16 md:py-20">
          <Container className="max-w-3xl">
            <h2 className="ozzo-display text-2xl text-foreground md:text-3xl">
              {data.seo.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {data.seo.body.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FaqSection items={data.faqs} />

      {/* ─────────── CTA ─────────── */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <div className="mb-5 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
              </div>
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
                See how {brand.name} fits {data.name.toLowerCase()}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Tell us how your team sells and collects on the ground, and
                we&apos;ll show you exactly how OZZO fits your channel.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/industries">All industries</SecondaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
