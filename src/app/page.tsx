import Link from "next/link";
import {
  CheckCircle2,
  Monitor,
  Smartphone,
  WifiOff,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CountUp } from "@/components/count-up";
import { HeroVisual } from "@/components/hero-visual";
import { CrmSpotlight } from "@/components/crm-spotlight";
import { FaqSection } from "@/components/faq-section";
import { InquiryForm } from "@/components/inquiry-form";
import { LiveActivityFeed } from "@/components/motion/live-activity-feed";
import { RouteCompliance } from "@/components/motion/route-compliance";
import { OrderGuards } from "@/components/motion/order-guards";
import { WhatsAppThread } from "@/components/motion/whatsapp-thread";
import { JsonLd, faqSchema, softwareApplicationSchema } from "@/lib/seo";
import { brand, productLines } from "@/lib/site";
import { plans, featureGroups } from "@/lib/plans";
import {
  productStats,
  removed,
  dayTimeline,
  chapters,
  suiteLines,
  platformFeatures,
  industries,
  faqs,
} from "@/lib/content";

/** Animated product demos shown in the "OZZO in motion" showcase. */
const motionDemos: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  node: React.ReactNode;
}[] = [
  {
    eyebrow: "WhatsApp CRM",
    title: "Every customer message, one shared inbox",
    body: "Chats on your official WhatsApp number land against the right lead — with templates and an AI assistant answering routine questions from your own knowledge base.",
    points: [
      "Shared team inbox — never stuck on a personal phone",
      "AI replies to routine questions instantly",
      "Every message on the customer's timeline",
    ],
    node: <WhatsAppThread />,
  },
  {
    eyebrow: "Route compliance",
    title: "The beat gets worked — in order",
    body: "Plan the beat once. On the ground the rep works it in sequence, and every stop is recorded visited or skipped — a skip needs a reason, not a silent miss.",
    points: [
      "Planned sequence vs what actually happened",
      "Skipping is gated — a reason is logged",
      "The outlet that kept getting missed stops getting missed",
    ],
    node: <RouteCompliance />,
  },
  {
    eyebrow: "Order control",
    title: "Every order checked before it's booked",
    body: "This is where the money leaks close. An order is checked against the customer's credit limit, overdue days and real stock — set to warn or hard-block, per account.",
    points: [
      "Credit-limit control: warn or block over the limit",
      "Overdue control: block new orders while past due",
      "Stock control: flag when a line exceeds what's on hand",
    ],
    node: <OrderGuards />,
  },
  {
    eyebrow: "Live field feed",
    title: "Watch the day happen — don't reconstruct it",
    body: "Attendance, visits, orders and collections stream onto one screen as they happen, so you manage the field by facts in real time, not a WhatsApp round-up at night.",
    points: [
      "Punch-ins, visits, orders and payments, live",
      "Offline captures sync the moment signal returns",
      "One screen — the whole field force, in real time",
    ],
    node: <LiveActivityFeed />,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(faqs)]} />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  CRM · Workforce · Field Sales — one platform
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="ozzo-display max-w-2xl text-[2.75rem] leading-[1.03] text-foreground sm:text-6xl md:text-[4.1rem]">
                  Run the whole field day on{" "}
                  <span className="ozzo-gradient-text">one app</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {brand.name}{" "}unifies your CRM, your on-ground workforce and your
                  sales &amp; distribution into a single system — a web dashboard
                  for managers and a mobile app for reps. Outstanding, stock and
                  reports keep themselves, with{" "}
                  <span className="font-semibold text-foreground">
                    no accounting software to bolt on.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                  <SecondaryCTA href="#story">See how the day flows</SecondaryCTA>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <WifiOff className="h-4 w-4 text-success" /> Works fully
                    offline
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Monitor className="h-4 w-4 text-primary" /> Web dashboard
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="h-4 w-4 text-primary" /> Mobile app
                    <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      iOS soon
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} variant="scale">
              <HeroVisual />
            </Reveal>
          </div>

          {/* honest product counters */}
          <Reveal delay={120}>
            <div className="mt-16 grid grid-cols-3 divide-x divide-border rounded-3xl border border-border bg-card/70 py-7 shadow-sm backdrop-blur md:mt-20">
              {productStats.map((s) => (
                <div key={s.label} className="px-4 text-center">
                  <div className="ozzo-display text-3xl text-foreground md:text-5xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mx-auto mt-2 max-w-[9rem] text-xs text-muted-foreground md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── Differentiators ("removed") ─────────────── */}
      <section id="why" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Why owners switch"
            title={
              <>
                Four things every field team fights.
                <br className="hidden md:block" /> We removed all four.
              </>
            }
            description="Most field businesses lose the same money the same way — from things nobody is quite responsible for. OZZO closes each one by design, not by discipline."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {removed.map((r, i) => (
              <Reveal key={r.tag} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon name={r.icon} className="h-6 w-6" />
                    </span>
                    <span className="ozzo-eyebrow text-primary">{r.tag}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── OZZO in motion (animated showcase) ─────────────── */}
      <section id="in-motion" className="relative overflow-hidden border-y border-border bg-card-2 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
        <Container className="relative">
          <SectionHeading
            eyebrow="See it in motion"
            title="Not screenshots — the product, working"
            description="Every OZZO module is a moment in the field day. Here are four of them, in motion — messaging, coverage, order control and the live feed that ties them together."
          />
          <div className="space-y-20 md:space-y-28">
            {motionDemos.map((d, i) => (
              <div
                key={d.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                <Reveal
                  variant={i % 2 ? "right" : "left"}
                  className={i % 2 ? "md:order-2" : ""}
                >
                  <Eyebrow>{d.eyebrow}</Eyebrow>
                  <h3 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.4rem] md:leading-[1.1]">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {d.points.map((p) => (
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
                <Reveal
                  delay={100}
                  variant={i % 2 ? "left" : "right"}
                  className={i % 2 ? "md:order-1" : ""}
                >
                  {d.node}
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── The day (dark band) ─────────────── */}
      <section id="story" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center className="text-primary">
              A day in the field
            </Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
              One rep. One day.{" "}
              <span className="ozzo-gradient-text">Accounted for.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Everything OZZO does happens at a moment in the day. So here is the
              day — and what the product is doing at each point in it.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* vertical line */}
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/15 md:left-1/2" />
            <div className="space-y-3">
              {dayTimeline.map((d, i) => (
                <Reveal key={d.time} delay={i * 60} variant={i % 2 ? "right" : "left"}>
                  <div
                    className={`relative flex items-start gap-5 md:w-1/2 ${
                      i % 2
                        ? "md:ml-auto md:flex-row md:pl-10"
                        : "md:flex-row-reverse md:pr-10 md:text-right"
                    }`}
                  >
                    <span
                      className={`absolute top-3 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary ring-4 ring-primary/20 left-[20px] ${
                        i % 2 ? "md:-left-[7px]" : "md:-right-[7px] md:left-auto"
                      }`}
                    />
                    <div className="ml-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:ml-0">
                      <div
                        className={`mb-2 flex items-center gap-2 ${
                          i % 2 ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
                          <Icon name={d.icon} className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/80">
                          {d.time}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{d.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────── Chapters ("what changes") ─────────────── */}
      <section id="what-changes" className="py-24 md:py-32">
        <Container>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <Eyebrow center>What changes</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-foreground md:text-5xl">
              Four things shift in the first month.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              None of them are really about software. They are about what you can
              finally see, enforce, keep and trust.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {chapters.map((c, i) => (
              <div
                key={c.n}
                className="grid items-center gap-10 md:grid-cols-12 md:gap-14"
              >
                {/* number / stat side */}
                <Reveal
                  variant={i % 2 ? "right" : "left"}
                  className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}
                >
                  <div className="ozzo-eyebrow text-primary">{c.kicker}</div>
                  <div className="ozzo-display mt-2 text-8xl leading-none text-primary/15 md:text-[9rem]">
                    {c.n}
                  </div>
                  <div className="mt-6 inline-flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <span className="ozzo-display text-4xl text-foreground md:text-5xl">
                      {c.stat.value}
                    </span>
                    <span className="mt-1 max-w-[13rem] text-sm text-muted-foreground">
                      {c.stat.label}
                    </span>
                  </div>
                </Reveal>

                {/* copy side */}
                <Reveal
                  delay={100}
                  variant={i % 2 ? "left" : "right"}
                  className={`md:col-span-7 ${i % 2 ? "md:order-1" : ""}`}
                >
                  <h3 className="ozzo-display text-3xl text-foreground md:text-[2.6rem] md:leading-[1.08]">
                    {c.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <ul className="mt-7 space-y-4">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
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

      {/* ─────────────── The suite (product lines) ─────────────── */}
      <section id="products" className="border-y border-border bg-card-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="The suite"
            title="Start with what hurts most. It's all connected."
            description="Two products — CRM to win and keep customers, and Sales Force Automation to run your field team. Buy either on its own or combine them; both share one customer record, one login and one source of truth. Field-force tracking is the entry tier of SFA, not a separate tool."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {productLines.map((line, i) => (
              <Reveal key={line.slug} delay={i * 90}>
                <Link
                  href={`/products#${line.slug}`}
                  className={`group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm ring-1 ${line.ringClass} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.05]`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted ${line.accentClass} transition-transform duration-300 group-hover:scale-110`}
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
                    <span className={`ozzo-eyebrow text-[10px] ${line.accentClass}`}>
                      {line.sub}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold ${line.accentClass}`}>
                    {line.name}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">
                      {line.fullName}
                    </span>
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                    {suiteLines[line.slug]}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {line.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${line.accentClass}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {line.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Platform features ─────────────── */}
      <section id="features" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Everything it runs on"
            title="One connected system — web and pocket"
            description="Sales, field tracking, distribution and messaging in one place that works on the manager's screen and in the rep's hand."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06] ${f.gradient}`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 ${f.gradient}`}
                    >
                      <Icon name={f.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2.5 text-xl font-bold tracking-tight text-foreground">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Modules showcase (SEO depth) ─────────────── */}
      <section id="modules" className="border-y border-border bg-card-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Everything under one login"
            title="Every module your field team needs — in one place"
            description="From attendance to distribution, OZZO ships the whole toolkit as one connected system. No add-on marketplace, no integrations to babysit — just the modules a field-sales business actually runs on, on web and the Android app."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((g, i) => (
              <Reveal key={g.name} delay={i * 40}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon name={g.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">{g.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {g.rows.slice(0, 4).map((row) => (
                      <li
                        key={row.feature}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={3} />
                        {row.feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See every module, plan by plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────── CRM spotlight ─────────────── */}
      <CrmSpotlight />

      {/* ─────────────── Industries marquee ─────────────── */}
      <section className="border-y border-border bg-card-2 py-16">
        <Container>
          <Eyebrow center className="mb-8">
            Built for field-first businesses
          </Eyebrow>
        </Container>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card-2 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card-2 to-transparent" />
          <div className="flex w-max animate-marquee gap-4 pr-4">
            {[...industries, ...industries].map((ind, i) => (
              <div
                key={`${ind.name}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Plans teaser ─────────────── */}
      <section id="plans" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Plans & packages"
            title="Start with the line that fits your team"
            description="Buy the front office, field visibility, or full field sales — and grow into the rest on the same data. No public price tags; a package built around your team, quoted on a quick call."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 60}>
                <Link
                  href="/plans"
                  className={`group flex h-full flex-col rounded-3xl border bg-card p-5 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.05] ${
                    plan.popular
                      ? "border-primary/40 ring-primary/30"
                      : "border-border ring-transparent"
                  }`}
                >
                  {plan.popular && (
                    <span className="mb-3 w-fit rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-muted ${plan.accentClass} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon name={plan.icon} className="h-5 w-5" />
                  </span>
                  <h3 className={`text-base font-bold ${plan.accentClass}`}>{plan.name}</h3>
                  <p className="text-[11px] text-muted-foreground">{plan.tagline}</p>
                  <ul className="mt-3 flex-1 space-y-2">
                    {plan.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[12px] leading-snug text-muted-foreground">
                        <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.accentClass}`} strokeWidth={3} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View plan
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA href="/plans">Compare all plans</PrimaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <FaqSection />

      {/* ─────────────── Final CTA with form ─────────────── */}
      <section id="get-started" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="See it on your own workflow"
                title="Book a free, no-pressure demo"
                description="Share a few details and our team will call you, understand how your field team works, and show you exactly how OZZO fits — with guided onboarding to get you live."
                className="mb-8"
              />
              <ul className="space-y-4">
                {[
                  "A real walkthrough built around your workflow",
                  "Straight answers on plans and setup",
                  "Guided onboarding and data migration, with you",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-4">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
