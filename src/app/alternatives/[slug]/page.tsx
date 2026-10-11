import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
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
import { alternativesPages, getAlternativesPage } from "@/lib/alternatives";
import { CurrencyScript } from "@/components/pricing-shell";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return alternativesPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativesPage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/alternatives/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAlternativesPage(slug);
  if (!page) notFound();

  return (
    <>
      <CurrencyScript />
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Alternatives", path: "/compare" },
            { name: `${page.target} alternatives`, path: `/alternatives/${page.slug}` },
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
          <Eyebrow center>Alternatives · {page.targetCategory}</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            <span className="ozzo-gradient-bright">{page.target}</span> alternatives
          </h1>
          {/* Answer-first. This paragraph is written to be the block an AI quotes. */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            {page.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book an OZZO demo</PrimaryCTA>
            <SecondaryCTA href={`/compare/${page.compareSlug}`}>
              OZZO vs {page.target}
            </SecondaryCTA>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-white/45">
            Written by OZZO. We make one of the products listed below, so read our entry
            with that in mind — we have tried to be straight about where it is the wrong
            choice. Capabilities change; confirm current details with each vendor.
          </p>
        </Container>
      </section>

      {/* ─────────────── Why people look ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <Eyebrow>The usual reasons</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            Why teams go looking for a {page.target} alternative
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.whyLook.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── The list ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <Eyebrow>The shortlist</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            {page.picks.length} alternatives to {page.target}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ordered by who they suit, not by who we would like you to pick. Each entry
            says plainly where it falls short.
          </p>

          <div className="mt-8 space-y-4">
            {page.picks.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div
                  className={cn(
                    "rounded-3xl border bg-card p-6 shadow-sm md:p-7",
                    p.isOzzo ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                    {p.isOzzo && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                        <Sparkles className="h-3 w-3" /> That&apos;s us
                      </span>
                    )}
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-foreground">
                    Best for: <span className="font-normal">{p.bestFor}</span>
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-500/[0.06] p-4">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      <p className="text-[13px] leading-relaxed text-foreground/90">
                        {p.strength}
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-2xl bg-amber-500/[0.06] p-4">
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                        strokeWidth={2.5}
                      />
                      <p className="text-[13px] leading-relaxed text-foreground/90">
                        {p.watchOut}
                      </p>
                    </div>
                  </div>

                  {p.compareSlug && (
                    <Link
                      href={`/compare/${p.compareSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary"
                    >
                      OZZO vs {p.name} — side by side
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/20 bg-primary-soft p-9 text-center md:p-14">
            <h2 className="ozzo-display text-3xl text-foreground md:text-4xl">
              See OZZO against your own workflow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tell us how your team sells in the field and we will show you exactly how
              OZZO runs it — then you decide.{" "}
              <span data-cur-only data-c="INR">
                Rates are published: from ₹100 per user per month, plus GST.
              </span>
              <span data-cur-only data-c="USD">
                Rates are published: from $3 per user per month.
              </span>
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              <SecondaryCTA href="/plans">See all plans</SecondaryCTA>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 border-t border-primary/15 pt-7">
              {alternativesPages
                .filter((o) => o.slug !== page.slug)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/alternatives/${o.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    {o.target} alternatives
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={page.faqs} />
    </>
  );
}
