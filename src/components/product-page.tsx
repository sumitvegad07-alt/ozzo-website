import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, SecondaryCTA, Eyebrow } from "./ui";
import { Reveal } from "./reveal";
import { Icon } from "./icon";
import { FaqSection } from "./faq-section";
import { ProductPricing } from "./product-pricing";
import { CrmInboxVisual } from "./crm-spotlight";
import { WfaVisual } from "./wfa-visual";
import { HeroVisual } from "./hero-visual";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import type { ProductPageData } from "@/lib/products-content";

function Visual({ kind }: { kind: ProductPageData["visual"] }) {
  if (kind === "crm") return <CrmInboxVisual />;
  if (kind === "wfa") return <WfaVisual />;
  return <HeroVisual />;
}

export function ProductPage({ data }: { data: ProductPageData }) {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: data.slug.toUpperCase(), path: `/products/${data.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-8 md:pt-40">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[780px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <Eyebrow>{data.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="ozzo-display mt-4 max-w-2xl text-[2.5rem] leading-[1.05] text-foreground sm:text-5xl md:text-[3.6rem]">
                  {data.headline}{" "}
                  <span className="ozzo-gradient-text">{data.headlineAccent}</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {data.sub}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                  <SecondaryCTA href="#pricing">See pricing</SecondaryCTA>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {data.heroChips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} variant="scale">
              <Visual kind={data.visual} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Feature stories */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {data.stories.map((s, i) => (
              <div
                key={s.kicker}
                className="grid items-center gap-10 md:grid-cols-12 md:gap-14"
              >
                <Reveal
                  variant={i % 2 ? "right" : "left"}
                  className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}
                >
                  <div className="ozzo-eyebrow text-primary">{s.kicker}</div>
                  <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-[2.4rem] md:leading-[1.1]">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </Reveal>
                <Reveal
                  delay={100}
                  variant={i % 2 ? "left" : "right"}
                  className={`md:col-span-6 ${i % 2 ? "md:order-1" : ""}`}
                >
                  <ul className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-foreground">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities grid */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Everything in the line"
            title="What you get, at a glance"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing for this line */}
      <ProductPricing slug={data.slug} />

      {/* FAQ */}
      <FaqSection
        items={data.faqs}
        heading
      />

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
                See {data.slug.toUpperCase()} on your own workflow
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Book a free, no-pressure demo. We&apos;ll map it to how your team
                works and set up a refundable trial.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
                >
                  Compare all products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
