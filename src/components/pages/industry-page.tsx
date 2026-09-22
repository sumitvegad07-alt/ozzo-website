import Link from "next/link";
import { AlertTriangle, Check, ArrowRight, Info } from "lucide-react";
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
import type { Industry } from "@/lib/industries";

export function IndustryPage({
  data,
  siblings,
}: {
  data: Industry;
  siblings: Industry[];
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
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>{data.sector} · Field sales</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.4rem] leading-[1.05] text-white md:text-5xl lg:text-6xl">
            Field sales software for{" "}
            <span className="ozzo-gradient-bright">{data.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {data.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/products">Explore the platform</SecondaryCTA>
          </div>
        </Container>
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

      {/* ─────────── Pain points ─────────── */}
      <section className="border-y border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The reality on the ground"
            title={
              <>
                What {data.name} are{" "}
                <span className="ozzo-gradient-bright">up against</span>
              </>
            }
            description="The specific field-sales pressures of this trade — not generic sales advice."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {data.painPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-500">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Solutions ─────────── */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="How OZZO helps"
            title={
              <>
                What OZZO does about it, for{" "}
                <span className="text-primary">{data.name.toLowerCase()}</span>
              </>
            }
            description="Each pressure above, mapped to a capability OZZO actually ships."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {data.solutions.map((s, i) => (
              <Reveal key={s.pain} delay={i * 50}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-7">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {s.pain}
                    </h3>
                  </div>
                  <p className="mt-3 pl-[2.375rem] text-sm leading-relaxed text-muted-foreground">
                    {s.how}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Workflow ─────────── */}
      <section className="border-y border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="A day in the field"
            title={
              <>
                A day in the field,{" "}
                <span className="ozzo-gradient-bright">on OZZO</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.workflow.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <div className="ozzo-display text-4xl text-primary/20">
                    0{i + 1}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Key modules ─────────── */}
      <section className="py-20 md:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="What you'll use most"
            title={<>The OZZO modules that matter here</>}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {data.modules.map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {m}
              </span>
            ))}
          </div>

          {data.honestNote && (
            <Reveal>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-card-2 p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Honest scope:{" "}
                  </span>
                  {data.honestNote}
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <FaqSection items={data.faqs} />

      {/* ─────────── Related industries ─────────── */}
      {siblings.length > 0 && (
        <section className="border-t border-border py-16">
          <Container>
            <p className="ozzo-eyebrow mb-6 text-center text-muted-foreground">
              More {data.sector.toLowerCase()} industries
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/industries/${s.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <span className="text-primary">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  {s.name}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────── CTA ─────────── */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
                See how {brand.name} fits {data.name}
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
