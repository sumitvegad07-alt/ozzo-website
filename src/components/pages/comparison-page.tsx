import Link from "next/link";
import { Check, Minus, X, ArrowRight, Sparkles, Scale } from "lucide-react";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  SecondaryCTA,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { brand } from "@/lib/site";
import type { Comparison, CompareValue } from "@/lib/comparisons";

function Cell({ value }: { value: CompareValue }) {
  if (value === "yes")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
        <Minus className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
      <X className="h-4 w-4" strokeWidth={3} />
    </span>
  );
}

export function ComparisonPage({ data }: { data: Comparison }) {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
            { name: `OZZO vs ${data.competitor}`, path: `/compare/${data.slug}` },
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
          <Eyebrow center>Compare · {data.competitorCategory}</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            OZZO <span className="text-white/40">vs</span>{" "}
            <span className="ozzo-gradient-bright">{data.competitor}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {data.tagline}
          </p>
          <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-4 text-left backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c4b5fd]">
                {data.competitor} is best for
              </p>
              <p className="mt-1 text-sm text-white/80">{data.bestForThem}</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] px-5 py-4 text-left backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                OZZO is best for
              </p>
              <p className="mt-1 text-sm text-white/80">{data.bestForOzzo}</p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/plans">See plans</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────── Verdict / TL;DR ─────────── */}
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Scale className="h-5 w-5" />
                <span className="ozzo-eyebrow text-primary">The short answer</span>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                {data.verdict}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────── Capability matrix ─────────── */}
      <section className="border-y border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Feature by feature"
            title={
              <>
                OZZO vs {data.competitor},{" "}
                <span className="ozzo-gradient-bright">side by side</span>
              </>
            }
            description="An honest capability map. A dash means partial or add-on support; a cross means it isn't offered."
          />
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-card-2">
                    <th className="px-5 py-4 font-semibold text-foreground">
                      Capability
                    </th>
                    <th className="px-4 py-4 text-center font-bold text-primary">
                      OZZO
                    </th>
                    <th className="px-4 py-4 text-center font-semibold text-muted-foreground">
                      {data.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.table.map((row) => (
                    <tr
                      key={row.capability}
                      className="border-b border-border/60 align-top last:border-0"
                    >
                      <td className="px-5 py-4">
                        <span className="font-medium text-foreground">
                          {row.capability}
                        </span>
                        {row.note && (
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {row.note}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={row.ozzo} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={row.them} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────── Where competitor is strong (honest) ─────────── */}
      <section className="py-20 md:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Giving credit where it's due"
            title={<>Where {data.competitor} is strong</>}
            description={`No tool is right for everyone. Here's what ${data.competitor} genuinely does well — and where it's the better choice.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {data.theirStrengths.map((s, i) => (
              <Reveal key={s} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                  <p className="text-sm leading-relaxed text-foreground">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Where OZZO wins ─────────── */}
      <section className="border-y border-border bg-card-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The OZZO difference"
            title={
              <>
                Where <span className="ozzo-gradient-bright">OZZO wins</span>
              </>
            }
            description={`What you get with OZZO that ${data.competitor} leaves you to buy, build or bolt on separately.`}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {data.ozzoWins.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm ring-1 ring-primary/5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Decision block ─────────── */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Which should you choose?"
            title="Pick by your situation"
            description="The honest fork. Match yourself to the column that sounds like your business."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm">
                <p className="ozzo-eyebrow mb-1 text-muted-foreground">
                  Choose {data.competitor} if
                </p>
                <ul className="mt-5 space-y-4">
                  {data.chooseThemIf.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                      <span className="text-sm leading-relaxed text-foreground">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-primary/25 bg-primary-soft p-8 shadow-sm">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-[70px]" />
                <p className="ozzo-eyebrow mb-1 text-primary">Choose OZZO if</p>
                <ul className="mt-5 space-y-4">
                  {data.chooseOzzoIf.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── Pricing note ─────────── */}
      <section className="pb-4">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                A note on price
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {data.pricingNote}
              </p>
              <p className="mt-4 text-sm text-muted-foreground/80">
                OZZO doesn&apos;t publish per-user prices publicly — you get a
                straightforward quote on a short demo call, matched to your team
                size and the plan you choose.
              </p>
              <div className="mt-6">
                <SecondaryCTA href="/plans">Compare OZZO plans</SecondaryCTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        items={data.faqs}
      />

      {/* ─────────── CTA ─────────── */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
                See {brand.name} against your own workflow
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Tell us how your team sells in the field and we&apos;ll show you
                exactly how OZZO runs it — then you decide.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/compare">See all comparisons</SecondaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
