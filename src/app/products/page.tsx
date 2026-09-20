import Link from "next/link";
import {
  Check,
  ArrowRight,
  Monitor,
  Smartphone,
  WifiOff,
  Users2,
  FileStack,
  ShieldCheck,
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
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { productLines, includedInEveryPlan } from "@/lib/site";
import { suiteLines } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Products — CRM & Sales Force Automation",
  description:
    "Explore OZZO's two products: CRM for winning and keeping customers, and Sales Force Automation for running your field team — field tracking, attendance, orders, payments and distribution — with WhatsApp CRM, GPS and 11 built-in reports.",
  path: "/products",
  keywords: [
    "CRM features",
    "sales force automation software",
    "field force tracking",
    "WhatsApp shared inbox",
    "GPS attendance",
    "order and payment collection app",
  ],
});

const platformCapabilities = [
  {
    icon: Monitor,
    title: "Web dashboard",
    body: "A full admin console for managers — pipelines, catalogue, reports, roles and settings.",
  },
  {
    icon: Smartphone,
    title: "Android field app",
    body: "Everything a rep needs on the ground: check-ins, orders, collections, attendance and more.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "Attendance, visits, orders, quotations, payments and expenses queue offline and sync automatically.",
  },
  {
    icon: FileStack,
    title: "Branded documents",
    body: "PDF quotations, orders, dispatch notes and receipts on your own company letterhead.",
  },
  {
    icon: Users2,
    title: "Custom fields",
    body: "Add your own fields to 12 record types and group them into sections that match your process.",
  },
  {
    icon: ShieldCheck,
    title: "Roles & permissions",
    body: "Granular per-module rights with data-scoping — own, team, department, company or all.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
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
          <Eyebrow center>The OZZO platform</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            One platform for your whole{" "}
            <span className="ozzo-gradient-bright">revenue engine</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Two products you can buy on their own or combine — CRM to win and keep
            customers, and Sales Force Automation to run your field team end to end.
            Both share one customer record, one login and one source of truth across
            the web dashboard and the Android field app.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {productLines.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40"
              >
                {p.name} — {p.sub}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Product line deep-dives */}
      {productLines.map((line, idx) => (
        <section
          key={line.slug}
          id={line.slug}
          className={`scroll-mt-28 py-20 md:py-24 ${
            idx % 2 === 1 ? "border-y border-border bg-card-2" : ""
          }`}
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal
                variant={idx % 2 === 1 ? "right" : "left"}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="ozzo-display text-6xl text-primary/15 md:text-7xl">
                  0{idx + 1}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted ${line.accentClass}`}
                  >
                    <Icon
                      name={
                        line.slug === "crm"
                          ? "MessageSquare"
                          : line.slug === "wfa"
                            ? "MapPin"
                            : "ShoppingCart"
                      }
                      className="h-6 w-6"
                    />
                  </span>
                  <div>
                    <h2 className={`text-3xl font-bold ${line.accentClass}`}>
                      {line.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{line.fullName}</p>
                  </div>
                </div>
                <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-foreground">
                  {suiteLines[line.slug]}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {line.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA href={`/products/${line.slug}`}>
                    Explore {line.name}
                  </PrimaryCTA>
                  <SecondaryCTA href="/plans">See plans</SecondaryCTA>
                </div>
              </Reveal>

              <Reveal
                delay={100}
                variant={idx % 2 === 1 ? "left" : "right"}
                className={idx % 2 === 1 ? "lg:order-1" : ""}
              >
                <div
                  className={`rounded-3xl border border-border bg-card p-8 shadow-sm ring-1 ${line.ringClass}`}
                >
                  <p className="ozzo-eyebrow mb-5 text-muted-foreground">
                    What&apos;s inside
                  </p>
                  <ul className="space-y-4">
                    {line.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-foreground">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted ${line.accentClass}`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* Included in every plan */}
      <section className="py-20">
        <Container>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  The essentials, in every plan
                </h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  No matter which line you buy, your team gets the core modules
                  that keep day-to-day work moving.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                {includedInEveryPlan.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-2 px-3 py-1.5 text-sm font-medium text-foreground"
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

      {/* Platform capabilities */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Built into the platform"
            title="Enterprise-grade foundations, out of the box"
            description="The capabilities that make OZZO safe to run your whole business on."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <c.icon className="h-6 w-6" />
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
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Have a specific requirement? Talk to our team{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Plans pointer */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 shadow-sm md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-[90px]" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <Eyebrow>Plans &amp; packages</Eyebrow>
                <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-4xl">
                  See every module, plan by plan
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Compare CRM, Field, Sales and the complete platform side by side —
                  attendance, GPS, orders, collections, stock, schemes and WhatsApp CRM,
                  laid out module by module. Then book a demo for a package built around
                  your team.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <PrimaryCTA href="/plans">Compare plans</PrimaryCTA>
                <SecondaryCTA href="/book-demo">Book a demo</SecondaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection />

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
                Not sure which line fits your team?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Tell us how your field team works and we&apos;ll recommend the
                right setup — then show you exactly how it runs.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
