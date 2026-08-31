import Link from "next/link";
import { ArrowRight, Check, Sparkles, Bot } from "lucide-react";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./reveal";

const points = [
  "Every WhatsApp chat in one shared team inbox — attached to the right lead, not stuck on one phone",
  "An AI assistant that answers routine questions from your own knowledge base",
  "Leads and deals move across visual Kanban pipelines with stages, tags and custom fields",
  "Branded PDF quotations built from the customer's own record",
  "Calls, messages, visits, tasks and quotes on one customer timeline",
];

/** Home-page spotlight on the CRM line — balances the field-sales story. */
export function CrmSpotlight() {
  return (
    <section id="crm" className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <Eyebrow>Not just field sales</Eyebrow>
            <h2 className="ozzo-display mt-4 text-4xl text-foreground md:text-5xl">
              A full CRM,{" "}
              <span className="ozzo-gradient-text">on WhatsApp</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Before a rep ever hits the road, the enquiry has to be caught and
              worked. OZZO&apos;s CRM keeps every lead moving and every customer
              conversation in one place — so nothing goes cold between the first
              message and the close.
            </p>
            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
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
            <Link
              href="/products/crm"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Explore the CRM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <CrmInboxVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Illustrative WhatsApp shared-inbox card (not a screenshot, no data claim). */
export function CrmInboxVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.07]">
        {/* header */}
        <div className="flex items-center gap-3 border-b border-border bg-card-2 px-5 py-3.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 0 1 12 4Z" />
            </svg>
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">Shared team inbox</p>
            <p className="text-[11px] text-muted-foreground">Vertex Electricals · Nisha Rao</p>
          </div>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
            Lead #204
          </span>
        </div>

        {/* thread */}
        <div className="space-y-3 bg-card p-5">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-[13px] text-foreground">
            Hi, need pricing on the 3-phase panel range.
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-[13px] text-primary-foreground">
            Sharing the catalogue and rate list now — quote to follow today.
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary-soft px-3.5 py-2.5">
            <Bot className="h-4 w-4 shrink-0 text-primary" />
            <p className="text-[12px] leading-snug text-foreground">
              <span className="font-semibold text-primary">AI assistant</span>{" "}
              answered “What’s the lead time?” from your knowledge base.
            </p>
          </div>
        </div>

        {/* footer chips */}
        <div className="flex items-center gap-2 border-t border-border bg-card-2 px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3 w-3 text-primary" /> Template sent
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
            Quotation · v2
          </span>
          <span className="ml-auto text-[11px] font-semibold text-success">● Deal: Negotiation</span>
        </div>
      </div>
    </div>
  );
}
