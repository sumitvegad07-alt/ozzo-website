import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Check,
  ArrowRight,
  Info,
  X,
  Sparkles,
  TrendingUp,
} from "lucide-react";
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
import { IndustryCockpit } from "@/components/pages/industry-visuals";
import type { Industry } from "@/lib/industries";

const ACCENT = "linear-gradient(100deg,#5ea1ff 0%,#a855f7 48%,#ec5fe6 100%)";

export function IndustryPage({
  data,
  siblings,
}: {
  data: Industry;
  siblings: Industry[];
}) {
  const cockpit = data.cockpit;

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
          /* Split hero — text left, vivid framed industry image right. */
          <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="text-center lg:text-left">
                <div className="animate-fade-up">
                  <Eyebrow className="justify-center lg:justify-start">
                    {data.sector} · Field sales
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
                  {/* subtle brand tint so it belongs on the dark hero */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </Container>
        ) : (
          /* Gradient hero — for industries without an image yet. */
          <Container className="relative z-10 text-center">
            <div className="animate-fade-up">
              <Eyebrow center>{data.sector} · Field sales</Eyebrow>
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

      {/* ─────────── Stat strip ─────────── */}
      {data.stats && data.stats.length > 0 && (
        <section className="pb-8">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-border bg-card-2 p-7 text-center shadow-sm">
                    <div className="ozzo-display text-3xl text-primary md:text-4xl">
                      {s.value}
                    </div>
                    <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                      {s.label}
                    </p>
                    {s.note && (
                      <p className="mt-2 text-[11px] uppercase tracking-wide text-muted-foreground/60">
                        {s.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

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

      {/* ─────────── Bespoke "see it work" cockpit ─────────── */}
      {cockpit && (
        <section className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
          <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
          <div className="animate-drift-b pointer-events-none absolute right-0 -top-10 h-[420px] w-[420px] rounded-full bg-[#7c3aed]/22 blur-[140px]" />
          <div className="animate-drift-a pointer-events-none absolute -left-16 bottom-0 h-[380px] w-[380px] rounded-full bg-[#2563eb]/18 blur-[140px]" />
          <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal variant="left">
                <Eyebrow>See it work</Eyebrow>
                <h2 className="ozzo-display mt-4 text-3xl md:text-4xl">
                  {cockpit.sectionTitle}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">
                  {cockpit.sectionBody}
                </p>
                <div className="mt-8">
                  <Link
                    href="/book-demo"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.8)] transition-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: ACCENT }}
                  >
                    See it on your own catalogue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
              <Reveal variant="right" delay={120}>
                <IndustryCockpit cockpit={cockpit} />
              </Reveal>
            </div>
          </Container>
        </section>
      )}

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

      {/* ─────────── Why OZZO over alternatives, for this industry ─────────── */}
      {data.whyNotOthers && data.whyNotOthers.length > 0 && (
        <section className="py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Why OZZO, specifically"
              title={
                <>
                  Why not just a generic tool —{" "}
                  <span className="ozzo-gradient-bright">for this trade</span>
                </>
              }
              description={`What a general tracker, an enterprise FMCG SFA, or a plain CRM each miss for ${data.name.toLowerCase()}.`}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {data.whyNotOthers.map((w, i) => (
                <Reveal key={w.label} delay={i * 70}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                      <X className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {w.label}
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
      )}

      {/* ─────────── Outcomes ─────────── */}
      {data.outcomes && data.outcomes.length > 0 && (
        <section className="border-y border-border bg-card-2 py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="What changes"
              title={
                <>
                  What it looks like{" "}
                  <span className="ozzo-gradient-bright">when it&apos;s working</span>
                </>
              }
            />
            <div className="grid gap-5 md:grid-cols-2">
              {data.outcomes.map((o, i) => (
                <Reveal key={o.title} delay={i * 60}>
                  <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm ring-1 ring-primary/5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {o.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {o.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

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
              <div className="mb-5 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
              </div>
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
