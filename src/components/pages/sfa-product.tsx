import Link from "next/link";
import {
  Check,
  ArrowRight,
  Fingerprint,
  MapPin,
  ShoppingCart,
  IndianRupee,
  WifiOff,
} from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/motion/parallax";
import { IndustryTiles } from "@/components/motion/industry-tiles";
import { TiltCard } from "@/components/motion/tilt-card";
import { RepDayScrolly } from "@/components/motion/rep-day-scrolly";
import { Icon } from "@/components/icon";
import { FaqSection } from "@/components/faq-section";
import { BeatItinerary } from "@/components/motion/beat-itinerary";
import { LiveActivityFeed } from "@/components/motion/live-activity-feed";
import { OrderGuards } from "@/components/motion/order-guards";
import { SchemeCalc } from "@/components/motion/scheme-calc";
import { TradeNetwork } from "@/components/motion/trade-network";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { includedInEveryPlan } from "@/lib/site";
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
  const orders = [
    { c: "Sri Balaji Stores", v: "₹18,400", tag: "Offline · synced", off: true },
    { c: "Ganesh Traders", v: "₹9,250", tag: "Booked · 11:20", off: false },
    { c: "Anand Hardware", v: "₹27,600", tag: "Dispatched", off: false },
  ];
  const stock = [72, 44, 88, 30, 61, 52];
  const kpis = [
    { label: "Orders today", value: "₹3.4L", sub: "22 orders", tint: "bg-primary-soft text-primary" },
    { label: "Collected", value: "₹1.28L", sub: "on the counter", tint: "bg-success/15 text-success" },
    { label: "Outstanding", value: "₹8.6L", sub: "↓ auto", tint: "bg-warning/15 text-warning" },
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
            OZZO · Sales &amp; distribution · Live
          </span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-border bg-card-2 p-2.5">
              <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${k.tint}`}>
                <IndianRupee className="h-4 w-4" />
              </span>
              <p className="ozzo-display text-lg leading-none text-foreground">{k.value}</p>
              <p className="mt-1 text-[9px] font-bold text-foreground">{k.label}</p>
              <p className="text-[9px] text-muted-foreground">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* stock + recent orders */}
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-2 px-3 pb-3">
          <div className="rounded-xl border border-border bg-card-2 p-3">
            <p className="text-[10px] font-bold text-foreground">Stock cover</p>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {stock.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-2 text-[9px] leading-tight text-muted-foreground">Derived from every order &amp; dispatch</p>
          </div>
          <div className="space-y-1.5 rounded-xl border border-border bg-card-2 p-3">
            <p className="text-[10px] font-bold text-foreground">Recent orders</p>
            {orders.map((o) => (
              <div key={o.c} className="flex items-center justify-between gap-2 rounded-lg bg-card px-2 py-1.5">
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-bold text-foreground">{o.c}</p>
                  <p className="flex items-center gap-1 text-[9px] text-muted-foreground">
                    {o.off && <WifiOff className="h-2.5 w-2.5" />}
                    {o.tag}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-extrabold text-foreground">{o.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating: order control — a distinct SFA capability */}
      <div className="absolute -left-4 top-8 w-48 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1] animate-float">
        <p className="ozzo-eyebrow text-[9px] text-warning">Order control</p>
        <p className="mt-1 text-xs font-bold text-foreground">Credit limit reached</p>
        <p className="text-[10px] text-muted-foreground">Over-limit order held for approval</p>
      </div>

      {/* floating: auto outstanding */}
      <div className="absolute -bottom-6 -right-4 w-44 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1] animate-float" style={{ animationDelay: "1.2s" }}>
        <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Auto outstanding</p>
        <p className="mt-1 flex items-center gap-1 text-lg font-extrabold text-foreground">
          <IndianRupee className="h-4 w-4" />8,60,200
        </p>
        <p className="text-[10px] font-medium text-success">recalculated on collection</p>
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

/* Small reusable heading for demonstration sections. */
function DemoHead({
  eyebrow,
  title,
  body,
  points,
}: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.5rem] md:leading-[1.1]">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p>
      <ul className="mt-7 space-y-3.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-[15px] leading-relaxed text-foreground">{p}</span>
          </li>
        ))}
      </ul>
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
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-white md:pt-40 md:pb-20">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <Parallax speed={80} className="pointer-events-none absolute -left-24 -top-24">
          <div className="h-[480px] w-[480px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        </Parallax>
        <Parallax speed={100} className="pointer-events-none absolute right-0 -top-16">
          <div className="h-[520px] w-[520px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        </Parallax>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal><Eyebrow>OZZO SFA · Sales Force Automation</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="ozzo-display mt-4 max-w-2xl text-[2.4rem] leading-[1.05] text-white sm:text-5xl md:text-[3.5rem]">
                  Know what your field team is doing —{" "}
                  <span className="ozzo-gradient-bright">without chasing updates</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                  See where your reps are, which visits happened and which were skipped,
                  and how orders and collections are flowing — live. Then take the order,
                  collect the cash, and watch outstanding and stock keep themselves. One
                  field product, from starter tracking to full sales &amp; distribution.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                  <SecondaryCTA href="/plans">Compare plans</SecondaryCTA>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Selfie + GPS attendance", "Route compliance", "Offline orders", "Auto outstanding"].map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} variant="scale"><FieldDashboardVisual /></Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 2 · Daily life of a rep ─────────── */}
      {/* No overflow-hidden on the section itself — it would break the
          position:sticky scrollytelling below. The glow is clipped by an
          inner absolutely-positioned layer instead. */}
      <section className="relative bg-ink py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="ozzo-grid absolute inset-0 text-white/[0.05]" />
          <div className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
        </div>
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center className="text-primary">A day in the field</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
              The daily life of a sales rep — <span className="ozzo-gradient-text">on record</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Six moments make up a field day. SFA turns each one into something you can
              see, instead of something you&apos;re told about at night.
            </p>
          </div>
          <RepDayScrolly steps={sfaRepDay} />
        </Container>
      </section>

      {/* ─────────── SECTION 3 · Route compliance DEMO ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
              <DemoHead
                eyebrow="Route compliance"
                title="Never lose a planned customer visit again."
                body="Plan the beat once. On the ground the rep works it in order, and the app records every stop as visited or skipped — a skip needs a reason. Your web monitor shows exactly who covered what."
                points={[
                  "Planned sequence vs what actually happened, per rep",
                  "Skipping is gated — a reason is logged, not a silent miss",
                  "Coverage, completed and skipped stops on the manager monitor",
                  "The outlet that kept getting missed finally stops getting missed",
                ]}
              />
            </Reveal>
            <Reveal variant="right" delay={100}><BeatItinerary /></Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 4 · Manager visibility + live feed ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Manager visibility"
            title="Watch the day. Don't reconstruct it."
            description="Four real-time screens put the whole field force in front of you — and a live activity stream shows the moves as they happen."
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {sfaManagerViews.map((v, i) => (
                <Reveal key={v.title} delay={i * 60}>
                  <TiltCard className="rounded-3xl" max={6}>
                    <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.05]">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                        <Icon name={v.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1.5 text-base font-bold text-foreground">{v.title}</h3>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">{v.body}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            <Reveal variant="right" delay={100}><LiveActivityFeed /></Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 5 · Order guardrails DEMO ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="right" delay={100} className="lg:order-2"><OrderGuards /></Reveal>
            <Reveal variant="left" className="lg:order-1">
              <DemoHead
                eyebrow="Order control"
                title="Every order is checked before it's booked."
                body="This is where money leaks close. An order can be checked against the customer's credit limit, their overdue days, and real available stock — and set to warn or hard-block. No more selling deeper to a shop that already owes you."
                points={[
                  "Credit-limit control: warn or block when an order crosses the limit",
                  "Overdue control: block new orders while a customer is past due",
                  "Stock control: flag or block when a line exceeds what's on hand",
                  "Each guardrail is per-account — ignore, warn, or block",
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 6 · Scheme DEMO ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
              <DemoHead
                eyebrow="Trade schemes"
                title="Complex trade schemes, calculated automatically."
                body="Nobody should work out free-goods maths by hand at the counter. Define the scheme once — quantity slabs, order-value slabs, or buy-X-get-Y-free — and the pricing engine detects and applies it on the order, invoice and PDF."
                points={[
                  "Free goods (buy 100 → get 10 free), with a per-order cap",
                  "Quantity slabs — % off, amount off, or a special price",
                  "Order-value slabs for whole-order incentives",
                  "Applied automatically — no manual maths, no missed claim",
                ]}
              />
            </Reveal>
            <Reveal variant="right" delay={100}><SchemeCalc /></Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 7 · Trade network DEMO (secondary sales) ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Distribution & secondary sales"
            title="See what happens after you sell to the distributor."
            description="Classify your customers into trade levels, and every order tags itself Primary or Secondary automatically — with outstanding tracked at each level of the chain."
          />
          <Reveal><TradeNetwork /></Reveal>
        </Container>
      </section>

      {/* ─────────── SECTION 8 · Depth: the rest, in stories ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Everything else that ships"
            title="The field basics, done properly"
            description="The day-to-day capabilities your team leans on — verified, in production, on web and the Android app."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sfaStories.map((s, i) => (
              <Reveal key={s.kicker} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <div className="ozzo-eyebrow mb-1.5 text-primary">{s.kicker}</div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 9 · Reporting ─────────── */}
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
                happen — and every rep gets a Daily Sales Report on a single line.
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
            <Reveal variant="right" delay={100}><SfaReportsVisual /></Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 10 · Mobile showcase ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left"><MobileShowcaseVisual /></Reveal>
            <Reveal variant="right" delay={100}>
              <Eyebrow>The rep&apos;s app</Eyebrow>
              <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.6rem] md:leading-[1.1]">
                Built for one hand, on the road, off the grid.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Everything a rep needs on the ground, in a rugged Android app that keeps
                working when the network doesn&apos;t — then syncs itself the moment a bar
                of signal returns.
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

      {/* ─────────── SECTION 11 · Industries ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Industry use cases"
            title="Made for teams that live on the road"
            description="If your people sell, service or deliver in the field, SFA fits the way they already work."
          />
          <IndustryTiles items={industries} />
        </Container>
      </section>

      {/* ─────────── SECTION 12 · Plans ─────────── */}
      <section id="plans" className="scroll-mt-24 border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Start with field visibility. Grow into full sales."
            description="Field and Sales are lines of the same product, not different tools — begin with attendance, GPS and visits, then add orders, collections, stock and schemes whenever you're ready, on the same data."
          />
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-cyan-500">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Field</h3>
              <p className="mt-1 text-sm text-muted-foreground">See your field team, live</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                Selfie + GPS attendance, live location, geo-tagged visits, beat routes,
                territory and expense claims.
              </p>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-card p-8 shadow-sm ring-2 ring-primary/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-emerald-500">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Sales</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sell, collect &amp; distribute</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                Everything in Field, plus offline orders, multi-unit, field collection,
                auto outstanding, auto stock, schemes, price lists and distribution.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-dashed border-border bg-card p-6">
            <p className="text-sm font-semibold text-foreground">In every plan</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {includedInEveryPlan.map((b) => (
                <span key={b} className="rounded-full border border-border bg-card-2 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href="/plans">Compare every module</PrimaryCTA>
            <SecondaryCTA href="/book-demo">Book a demo</SecondaryCTA>
          </div>
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
                works and show you exactly how it runs on your own data.
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
