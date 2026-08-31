import Link from "next/link";
import {
  Check,
  ArrowRight,
  Fingerprint,
  MapPin,
  ShoppingCart,
  IndianRupee,
  WifiOff,
  Sparkles,
} from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { FaqSection } from "@/components/faq-section";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { sfaTiers, includedInEveryPlan } from "@/lib/site";
import { industries } from "@/lib/content";
import {
  sfaRepDay,
  sfaManagerViews,
  sfaStories,
  sfaReports,
  sfaMobile,
  sfaFaqs,
} from "@/lib/sfa-page";

/* ─────────────────────────── Field-activity dashboard mock ─────────────────────────── */

function FieldDashboardVisual() {
  const reps = [
    { name: "Ravi K.", status: "On route · 6 of 9", live: true },
    { name: "Neha S.", status: "At Ganesh Stores", live: true },
    { name: "Arjun M.", status: "Punched in · 07:40", live: false },
  ];
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.1]">
        <div className="flex items-center gap-2 border-b border-border bg-card-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-3 flex-1 truncate rounded-md bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground">
            OZZO · Field force · Live
          </span>
        </div>

        <div className="grid grid-cols-[1.3fr_1fr] gap-0">
          {/* map */}
          <div className="ozzo-grid relative h-56 border-r border-border bg-primary-soft text-primary/25">
            <svg viewBox="0 0 300 224" className="absolute inset-0 h-full w-full" aria-hidden>
              <path
                d="M30 190 C90 150 110 100 170 96 S250 60 275 40"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeDasharray="2 8"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            <span className="absolute left-6 top-[176px] flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-success/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <span className="absolute left-[150px] top-[84px] flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-primary/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <MapPin className="absolute right-6 top-6 h-5 w-5 text-primary" />
            <span className="absolute bottom-3 left-3 rounded-full bg-card px-2.5 py-1 text-[10px] font-semibold text-foreground shadow-sm">
              3 reps live
            </span>
          </div>

          {/* live feed list */}
          <div className="space-y-2 p-3">
            <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Live feed</p>
            {reps.map((r) => (
              <div key={r.name} className="rounded-lg border border-border bg-card-2 p-2">
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${r.live ? "bg-success" : "bg-muted-foreground/40"}`} />
                  <span className="text-[11px] font-bold text-foreground">{r.name}</span>
                </div>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{r.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom rows */}
        <div className="grid grid-cols-2 gap-2 border-t border-border p-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card-2 p-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-success/15 text-success">
              <Fingerprint className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold text-foreground">Attendance</p>
              <p className="text-[9px] text-muted-foreground">14 present · 1 late</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card-2 p-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <ShoppingCart className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold text-foreground">Orders today</p>
              <p className="text-[9px] text-muted-foreground">₹3.4L · 22 orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* floating outstanding chip */}
      <div className="absolute -bottom-6 -right-4 w-44 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1] animate-float">
        <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Collected today</p>
        <p className="mt-1 flex items-center gap-1 text-lg font-extrabold text-foreground">
          <IndianRupee className="h-4 w-4" />1,28,500
        </p>
        <p className="text-[10px] font-medium text-success">↓ outstanding updated live</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── Reports mock ─────────────────────────── */

function SfaReportsVisual() {
  const bars = [55, 72, 48, 83, 61, 94, 70, 66];
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/[0.08] md:p-8">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Visits", value: "312" },
            { label: "Orders", value: "₹18.6L" },
            { label: "Collected", value: "₹11.2L" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card-2 p-3">
              <p className="ozzo-eyebrow text-[9px] text-muted-foreground">{s.label}</p>
              <p className="ozzo-display mt-1 text-xl text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-border bg-card-2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-foreground">Daily Sales Report · this week</p>
            <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-bold text-primary">DSR</span>
          </div>
          <div className="mt-4 flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Mobile showcase phone ─────────────────────────── */

function MobileShowcaseVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
      <div className="absolute inset-x-6 inset-y-2 rounded-[2.4rem] border border-border bg-card shadow-2xl shadow-black/[0.1]">
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-border" />
        <div className="space-y-3 p-4">
          <div className="ozzo-grid relative h-24 overflow-hidden rounded-2xl bg-primary-soft text-primary/25">
            <span className="absolute left-4 top-6 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <MapPin className="absolute bottom-4 right-6 h-5 w-5 text-primary" />
            <span className="absolute bottom-3 left-4 rounded-full bg-card px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
              My route · 6 of 9
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
              <Fingerprint className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Punched in · 07:40</p>
              <p className="text-[10px] text-muted-foreground">Selfie + GPS verified</p>
            </div>
            <Check className="h-4 w-4 text-success" />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <ShoppingCart className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Order #1042</p>
              <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <WifiOff className="h-2.5 w-2.5" /> Captured offline · synced
              </p>
            </div>
            <span className="text-xs font-bold text-foreground">₹18,400</span>
          </div>
        </div>
      </div>
      <div
        className="absolute -right-2 top-14 w-36 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Collection</p>
        <p className="mt-1 flex items-center gap-1 text-base font-extrabold text-foreground">
          <IndianRupee className="h-3.5 w-3.5" />9,000
        </p>
        <p className="text-[9px] font-medium text-success">Proof attached</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════ Page ══════════════════════════════ */

export function SfaProductPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(sfaFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Sales Force Automation", path: "/products/sfa" },
          ]),
        ]}
      />

      {/* ─────────── SECTION 1 · Hero ─────────── */}
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <Eyebrow>OZZO SFA · Sales Force Automation</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="ozzo-display mt-4 max-w-2xl text-[2.4rem] leading-[1.05] text-foreground sm:text-5xl md:text-[3.5rem]">
                  Know what your field team is doing —{" "}
                  <span className="ozzo-gradient-text">without chasing updates</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  See where your reps are, which visits happened and which were missed,
                  and how orders and collections are flowing — live. Then take the order,
                  collect the cash, and watch outstanding and stock keep themselves. One
                  field product, from starter tracking to full sales &amp; distribution.
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
                  {["Selfie + GPS attendance", "Live location", "Offline orders", "Auto outstanding"].map((c) => (
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
              <FieldDashboardVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 2 · Daily life of a rep ─────────── */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-28">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center className="text-primary">A day in the field</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
              The daily life of a sales rep — <span className="ozzo-gradient-text">on record</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Six moments make up a field day. SFA turns each one into something you can
              see, instead of something you're told about at night.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sfaRepDay.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/80">
                      {d.time}
                    </span>
                  </div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[11px] font-bold text-primary">STEP {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 3 · Manager visibility ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Manager visibility"
            title="Watch the day. Don't reconstruct it."
            description="Four real-time screens put the whole field force in front of you — where they are, where they've been, and whether the phone is honestly reporting."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sfaManagerViews.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTIONS 4-8 · Feature stories ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {sfaStories.map((s, i) => (
              <div key={s.kicker} className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
                <Reveal
                  variant={i % 2 ? "right" : "left"}
                  className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <div className="ozzo-eyebrow text-primary">{s.kicker}</div>
                  <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-[2.4rem] md:leading-[1.1]">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
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
                        <span className="text-[15px] leading-relaxed text-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 9 · Reporting & analytics ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left">
              <Eyebrow>Reporting &amp; analytics</Eyebrow>
              <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.6rem] md:leading-[1.1]">
                The field day adds itself up.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Attendance, visits, orders and collections roll into reports as they
                happen — and every rep gets a Daily Sales Report on a single line. Manage
                by the numbers, not the loudest update at night.
              </p>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {sfaReports.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <SfaReportsVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 10 · Mobile app showcase ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left">
              <MobileShowcaseVisual />
            </Reveal>
            <Reveal variant="right" delay={100}>
              <Eyebrow>The rep's app</Eyebrow>
              <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.6rem] md:leading-[1.1]">
                Built for one hand, on the road, off the grid.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Everything a rep needs on the ground, in a rugged Android app that keeps
                working when the network doesn't — then syncs itself the moment a bar of
                signal returns.
              </p>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {sfaMobile.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Android today · iOS on the way
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 11 · Industry use cases ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Industry use cases"
            title="Made for teams that live on the road"
            description="If your people sell, service or deliver in the field, SFA fits the way they already work."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 50}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{ind.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 12 · Pricing ─────────── */}
      <section id="pricing" className="scroll-mt-24 border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="One product, three tiers"
            description="Per user, per month, minimum 3 users. Start with field visibility and move up as you grow — WFA Starter and SFA Professional are tiers of the same product, not different tools."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {sfaTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-sm ${
                    tier.popular
                      ? "border-primary/40 bg-card ring-2 ring-primary/30 shadow-lg shadow-primary/5"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    {tier.price === null ? (
                      <span className="ozzo-display text-4xl text-foreground">{tier.priceNote}</span>
                    ) : (
                      <>
                        <span className="ozzo-display text-5xl text-foreground">₹{tier.price}</span>
                        <span className="text-sm font-medium text-muted-foreground">/user/mo</span>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {tier.price === null ? "Full CRM + SFA platform · ₹450/user" : "Minimum 3 users"}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-demo"
                    className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                      tier.popular
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover"
                        : "bg-muted text-foreground hover:bg-muted/70"
                    }`}
                  >
                    {tier.price === null ? "Talk to sales" : "Book a demo"} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-dashed border-border bg-card p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> In every tier
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {includedInEveryPlan.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-card-2 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            Annual billing is the base rate · half-yearly +20% · quarterly +30% · 10-day
            &amp; 30-day refundable trials.{" "}
            <Link href="/book-demo" className="font-semibold text-primary hover:underline">
              Book a demo for the right tier →
            </Link>
          </p>
        </Container>
      </section>

      {/* ─────────── SECTION 13 · FAQ ─────────── */}
      <FaqSection items={sfaFaqs} heading />

      {/* ─────────── Final CTA ─────────── */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-ink p-10 text-center text-white md:p-16">
            <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl md:text-5xl">
                Stop chasing updates. Start watching the day.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
                Book a free, no-pressure demo. We&apos;ll map SFA to how your field team
                works and set up a refundable trial with your own data.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                <Link
                  href="/products/crm"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore the CRM <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
