import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { HomeHero } from "@/components/home-hero";
import { Parallax } from "@/components/motion/parallax";
import { TimelineProgress } from "@/components/motion/timeline-progress";
import { StackedChapters } from "@/components/motion/stacked-chapters";
import { IndustryTiles } from "@/components/motion/industry-tiles";
import { CrmSpotlight } from "@/components/crm-spotlight";
import { FaqSection } from "@/components/faq-section";
import { InquiryForm } from "@/components/inquiry-form";
import { LiveActivityFeed } from "@/components/motion/live-activity-feed";
import { RouteCompliance } from "@/components/motion/route-compliance";
import { OrderGuards } from "@/components/motion/order-guards";
import { WhatsAppThread } from "@/components/motion/whatsapp-thread";
import { JsonLd, faqSchema, softwareApplicationSchema } from "@/lib/seo";
import { productLines } from "@/lib/site";
import { plans, featureGroups } from "@/lib/plans";
import {
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
      <HomeHero />

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

      {/* ─────────────── OZZO in motion (animated showcase · dark band) ─────────────── */}
      <section id="in-motion" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <Parallax speed={90} className="pointer-events-none absolute -top-24 right-0">
          <div className="h-[460px] w-[560px] rounded-full bg-[#7c3aed]/25 blur-[140px]" />
        </Parallax>
        <Parallax speed={70} className="pointer-events-none absolute top-1/3 -left-24">
          <div className="h-[420px] w-[420px] rounded-full bg-[#2563eb]/20 blur-[140px]" />
        </Parallax>
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center className="text-primary">See it in motion</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
              See how your field day{" "}
              <span className="ozzo-gradient-bright">actually runs</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Every OZZO module is a moment in the field day. Here are four of
              them, live — messaging, coverage, order control and the feed that
              ties them together.
            </p>
          </div>
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
                  <h3 className="ozzo-display mt-4 text-3xl text-white md:text-[2.4rem] md:leading-[1.1]">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-white/65">
                    {d.body}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-[#c4b5fd]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-white/85">
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
                  <Parallax speed={34}>{d.node}</Parallax>
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
            {/* vertical line — draws with scroll */}
            <TimelineProgress className="absolute left-[27px] top-2 bottom-2 w-px md:left-1/2" />
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

          <StackedChapters items={chapters} />
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
        <Container>
          <IndustryTiles items={industries} />
        </Container>
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

      {/* ─────────────── Final CTA with form (dark band) ─────────────── */}
      <section id="get-started" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <Parallax speed={90} className="pointer-events-none absolute -bottom-40 left-1/2">
          <div className="h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#7c3aed]/25 blur-[140px]" />
        </Parallax>
        <Parallax speed={60} className="pointer-events-none absolute -top-24 right-6">
          <div className="h-[380px] w-[380px] rounded-full bg-[#2563eb]/20 blur-[130px]" />
        </Parallax>
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-8 max-w-xl">
                <Eyebrow className="text-primary">See it on your own workflow</Eyebrow>
                <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
                  Book a free,{" "}
                  <span className="ozzo-gradient-bright">no-pressure demo</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/60">
                  Share a few details and our team will call you, understand how
                  your field team works, and show you exactly how OZZO fits — with
                  guided onboarding to get you live.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "A real walkthrough built around your workflow",
                  "Straight answers on plans and setup",
                  "Guided onboarding and data migration, with you",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#37e0a0]" />
                    <span className="text-white/85">{point}</span>
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
