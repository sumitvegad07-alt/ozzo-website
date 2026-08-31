import Link from "next/link";
import {
  Check,
  ArrowRight,
  Bot,
  Sparkles,
  MessageCircle,
  X,
} from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { RoleTabs } from "@/components/role-tabs";
import { FaqSection } from "@/components/faq-section";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { productLines, combinedPlans, includedInEveryPlan } from "@/lib/site";
import {
  crmProblems,
  crmWorkflow,
  crmJourney,
  crmCapabilities,
  crmRoles,
  crmComparison,
  crmFaqs,
} from "@/lib/crm-page";

const crmLine = productLines.find((p) => p.slug === "crm")!;
const fullPlatform = combinedPlans[0];

/* ─────────────────────────── Hero dashboard mock ─────────────────────────── */

function PipelineCard({
  name,
  value,
  tag,
  accent = false,
}: {
  name: string;
  value: string;
  tag: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-2.5 shadow-sm ${
        accent
          ? "border-primary/30 bg-primary-soft"
          : "border-border bg-card"
      }`}
    >
      <p className="truncate text-[11px] font-bold text-foreground">{name}</p>
      <p className="mt-0.5 text-[10px] text-muted-foreground">{tag}</p>
      <p className="mt-1.5 text-[11px] font-extrabold text-foreground">{value}</p>
    </div>
  );
}

function CrmDashboardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />

      {/* browser window */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.1]">
        <div className="flex items-center gap-2 border-b border-border bg-card-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-3 flex-1 truncate rounded-md bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground">
            OZZO · Sales pipeline
          </span>
        </div>

        {/* kanban */}
        <div className="grid grid-cols-4 gap-2 p-4">
          {[
            { h: "New", n: 8 },
            { h: "Contacted", n: 5 },
            { h: "Quoted", n: 3 },
            { h: "Won", n: 2 },
          ].map((col) => (
            <div key={col.h} className="min-w-0">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  {col.h}
                </span>
                <span className="rounded-full bg-muted px-1.5 text-[9px] font-bold text-muted-foreground">
                  {col.n}
                </span>
              </div>
              <div className="space-y-2">
                {col.h === "New" && (
                  <>
                    <PipelineCard name="Vertex Electricals" value="₹2.4L" tag="Website" accent />
                    <PipelineCard name="Ganesh Stores" value="₹68k" tag="WhatsApp" />
                  </>
                )}
                {col.h === "Contacted" && (
                  <PipelineCard name="Meera Traders" value="₹1.1L" tag="Referral" />
                )}
                {col.h === "Quoted" && (
                  <PipelineCard name="Anand Hardware" value="₹3.2L" tag="Field" accent />
                )}
                {col.h === "Won" && (
                  <PipelineCard name="Skyline Infra" value="₹5.0L" tag="Repeat" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating WhatsApp + AI chip */}
      <div className="absolute -bottom-6 -left-4 w-60 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.1] animate-float">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-success/15 text-success">
            <MessageCircle className="h-4 w-4" />
          </span>
          <span className="text-[11px] font-bold text-foreground">WhatsApp · shared inbox</span>
        </div>
        <div className="mt-2 flex items-start gap-1.5 rounded-lg border border-primary/20 bg-primary-soft px-2 py-1.5">
          <Bot className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
          <p className="text-[10px] leading-snug text-foreground">
            <span className="font-semibold text-primary">AI</span> replied to “lead time?”
          </p>
        </div>
      </div>

      {/* floating quotation chip */}
      <div
        className="absolute -right-3 top-8 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl shadow-black/[0.1] animate-float"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Quotation</p>
        <p className="text-sm font-extrabold text-foreground">PDF · v2 sent</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── Reports dashboard mock ─────────────────────────── */

function ReportsVisual() {
  const bars = [42, 66, 51, 78, 63, 90, 72];
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/[0.08] md:p-8">
        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "New leads", value: "128" },
            { label: "Deals won", value: "37" },
            { label: "Quotes sent", value: "54" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card-2 p-3">
              <p className="ozzo-eyebrow text-[9px] text-muted-foreground">{s.label}</p>
              <p className="ozzo-display mt-1 text-2xl text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1.4fr_1fr] gap-4">
          {/* bar chart */}
          <div className="rounded-2xl border border-border bg-card-2 p-4">
            <p className="text-[11px] font-bold text-foreground">Deals by week</p>
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
          {/* donut */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card-2 p-4">
            <p className="mb-3 self-start text-[11px] font-bold text-foreground">Lead source</p>
            <div
              className="relative h-24 w-24 rounded-full"
              style={{
                background:
                  "conic-gradient(var(--primary) 0 45%, oklch(0.62 0.22 305) 45% 72%, var(--border) 72% 100%)",
              }}
            >
              <div className="absolute inset-[22%] rounded-full bg-card" />
            </div>
            <div className="mt-3 space-y-1 self-start text-[9px] text-muted-foreground">
              <p><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />WhatsApp 45%</p>
              <p><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.62 0.22 305)" }} />Field 27%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Comparison cell ─────────────────────────── */

function Cell({ v, highlight = false }: { v: boolean | string; highlight?: boolean }) {
  if (v === true)
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${highlight ? "bg-primary text-primary-foreground" : "bg-success/15 text-success"}`}>
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground/50">
        <X className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span className={`text-xs font-semibold ${highlight ? "text-primary" : "text-muted-foreground"}`}>
      {v}
    </span>
  );
}

/* ══════════════════════════════ Page ══════════════════════════════ */

export function CrmProductPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(crmFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "CRM", path: "/products/crm" },
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
                <Eyebrow>OZZO CRM · Customer Relationship Management</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="ozzo-display mt-4 max-w-2xl text-[2.5rem] leading-[1.05] text-foreground sm:text-5xl md:text-[3.6rem]">
                  Turn every enquiry into a{" "}
                  <span className="ozzo-gradient-text">structured sales process</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Leads stop leaking out of inboxes, notebooks and personal phones.
                  Every enquiry lands in one pipeline, gets worked on WhatsApp, and
                  moves — capture to quotation to customer — on a single timeline your
                  whole team shares.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                  <SecondaryCTA href="#how">See how it works</SecondaryCTA>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Shared WhatsApp inbox", "Kanban pipelines", "Branded quotations", "AI assistant"].map((c) => (
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
              <CrmDashboardVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 2 · Problems we solve ─────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Sales doesn't leak on price. It leaks on process."
            description="Five gaps quietly cost field-sales teams deals every single month. OZZO CRM closes each one by design."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {crmProblems.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={crmProblems.length * 60}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-primary/20 bg-primary-soft p-7">
                <p className="ozzo-eyebrow text-primary">The fix</p>
                <p className="mt-3 text-lg font-bold leading-snug text-foreground">
                  One system where every lead has an owner, a next step, and a full history.
                </p>
                <Link href="#how" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  See the flow <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 3 · How it works (5-step) ─────────── */}
      <section id="how" className="scroll-mt-24 border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="How OZZO CRM works"
            title="Five steps, one continuous flow"
            description="From the first message to a repeat customer — each step is a real module, and each one hands off to the next automatically."
          />
          <div className="relative">
            {/* connecting line */}
            <div className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {crmWorkflow.map((s, i) => (
                <Reveal key={s.step} delay={i * 90}>
                  <div className="group relative flex h-full flex-col items-center text-center">
                    <div className="relative mb-5">
                      <span className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon name={s.icon} className="h-7 w-7" />
                      </span>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <span className="mt-4 rounded-full border border-border bg-card-2 px-3 py-1 text-[11px] font-semibold text-primary">
                      {s.module}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 4 · Customer journey timeline ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The complete customer journey"
            title="One record. Every touch. In order."
            description="Everything that happens with a customer lands on the same timeline — so anyone who opens the record sees the whole story, not their slice of it."
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-2 left-[27px] top-2 w-px bg-gradient-to-b from-primary/40 via-border to-primary/40" />
            <div className="space-y-4">
              {crmJourney.map((j, i) => (
                <Reveal key={j.title} delay={i * 60} variant="left">
                  <div className="relative flex items-start gap-5">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                      <Icon name={j.icon} className="h-6 w-6" />
                    </span>
                    <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-foreground">{j.title}</h3>
                        {j.tag && (
                          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                            {j.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 5 · Core capabilities ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Core capabilities"
            title="Everything the sale needs — nothing it doesn't"
            description="Only what actually ships in OZZO today. No feature theatre, no modules you'll never switch on."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {crmCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 6 · Role-based benefits ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Built for every seat"
            title="One CRM, three points of view"
            description="The same shared record does a different job for each person who opens it."
          />
          <RoleTabs roles={crmRoles} />
        </Container>
      </section>

      {/* ─────────── SECTION 7 · Reports & analytics ─────────── */}
      <section className="border-y border-border bg-card-2 py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left">
              <Eyebrow>Reports & analytics</Eyebrow>
              <h2 className="ozzo-display mt-4 text-3xl text-foreground md:text-[2.6rem] md:leading-[1.1]">
                Manage by facts, not the loudest update.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A report engine where you choose the dimensions, measures and filters,
                save a default view, and export. Lead, Deal and Quotation reports are
                ready out of the box — part of a suite of 11 built-in reports across the
                platform.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Lead Report — sources, stages and conversion at a glance",
                  "Deal Report — what's moving, what's stuck, and where",
                  "Quotation Report — sent, open and won, with the full trail",
                  "Save one default view per report, per user — and export",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <ReportsVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 8 · AI ready future ─────────── */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-28">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center className="text-primary">AI-ready by design</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-white md:text-5xl">
              Built to work with{" "}
              <span className="ozzo-gradient-text">AI assistants</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              AI is only as good as the data behind it. Because OZZO keeps one clean,
              structured record per customer, your business is already organised for the
              way AI is starting to work.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal variant="left">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live today
                </div>
                <h3 className="text-xl font-bold text-white">The AI knowledge-base assistant</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  Upload your own knowledge documents and the assistant answers routine
                  customer questions on WhatsApp from them — instantly, and only from what
                  you gave it. Your team is freed for the conversations that need a person.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Built for what's next
                </div>
                <h3 className="text-xl font-bold text-white">Your data, ready for AI</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  Structured leads, deals, quotes and a single customer timeline — not
                  scattered chats and spreadsheets. As AI assistants become part of how
                  teams sell, clean, connected data is the foundation they run on, and it's
                  yours to own and export.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/40">
            We only describe what OZZO does today. We won't promise AI features that
            aren't yet shipped.
          </p>
        </Container>
      </section>

      {/* ─────────── SECTION 9 · Comparison ─────────── */}
      <section className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why businesses choose OZZO"
            title="Spreadsheet, generic CRM, or OZZO"
            description="What actually changes when the pipeline lives somewhere built for how field-sales teams work."
          />
          <Reveal>
            <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-5 text-sm font-bold text-muted-foreground">Capability</th>
                    <th className="p-5 text-center text-sm font-bold text-muted-foreground">Spreadsheet</th>
                    <th className="p-5 text-center text-sm font-bold text-muted-foreground">Generic CRM</th>
                    <th className="p-5 text-center text-sm font-bold text-primary">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-[11px] text-primary-foreground">O</span>
                        OZZO CRM
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {crmComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 ? "bg-card-2/50" : ""}>
                      <td className="p-5 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="p-5 text-center"><Cell v={row.spreadsheet} /></td>
                      <td className="p-5 text-center"><Cell v={row.generic} /></td>
                      <td className="bg-primary-soft/40 p-5 text-center"><Cell v={row.ozzo} highlight /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────── SECTION 10 · FAQ ─────────── */}
      <section className="border-y border-border bg-card-2">
        <FaqSection items={crmFaqs} heading />
      </section>

      {/* ─────────── SECTION 11 · Pricing CTA ─────────── */}
      <section id="pricing" className="py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing for OZZO CRM"
            description="Per user, per month, minimum 3 users. Annual billing is the base rate — half-yearly adds 20%, quarterly adds 30%."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className={`relative flex h-full flex-col rounded-3xl border border-primary/30 bg-card p-8 shadow-lg shadow-primary/5 ring-2 ${crmLine.ringClass}`}>
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  CRM on its own
                </span>
                <h3 className={`text-xl font-bold ${crmLine.accentClass}`}>
                  CRM
                  <span className="ml-2 text-sm font-medium text-muted-foreground">{crmLine.sub}</span>
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="ozzo-display text-5xl text-foreground">₹{crmLine.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/user/mo</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Minimum 3 users</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {crmLine.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${crmLine.accentClass}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-demo"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col gap-4">
                <p className="ozzo-eyebrow text-muted-foreground">Or go all-in</p>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-lg font-bold text-foreground">{fullPlatform.name}</h4>
                    <div>
                      <span className="ozzo-display text-2xl text-foreground">₹{fullPlatform.price}</span>
                      <span className="text-xs text-muted-foreground"> /user/mo</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{fullPlatform.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    Add Sales Force Automation — field attendance, GPS, orders, payment
                    collection and distribution — so office and field run on one login.
                  </p>
                  <Link href="/products/sfa" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore Sales Force Automation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-auto rounded-3xl border border-dashed border-border p-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="h-4 w-4 text-primary" /> In every plan
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
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────── SECTION 12 · Final CTA ─────────── */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-ink p-10 text-center text-white md:p-16">
            <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl md:text-5xl">
                Give every enquiry a process to move through.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
                Book a free, no-pressure demo. We&apos;ll map OZZO CRM to how your team
                sells and set up a refundable trial with your own data.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Compare products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
