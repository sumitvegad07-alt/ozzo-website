import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./reveal";
import {
  productLines,
  combinedPlans,
  includedInEveryPlan,
} from "@/lib/site";
import { cn } from "@/lib/utils";

/** Pricing focused on one product line, shown on that product's page. */
export function ProductPricing({ slug }: { slug: "crm" | "wfa" | "sfa" }) {
  const line = productLines.find((p) => p.slug === slug)!;
  // Combined plans that include this line (cross-sell).
  const combos = combinedPlans.filter((c) =>
    c.name.toLowerCase().includes(line.name.toLowerCase()),
  );

  return (
    <section id="pricing" className="border-y border-border bg-card-2 py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={`Simple pricing for ${line.name}`}
          description="Per user, per month, minimum 3 users. Buy this line on its own, or combine it — every plan carries the essentials below."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* the line itself — primary card */}
          <Reveal>
            <div
              className={`relative flex h-full flex-col rounded-3xl border border-primary/30 bg-card p-8 shadow-lg shadow-primary/5 ring-2 ${line.ringClass}`}
            >
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                {line.name} on its own
              </span>
              <h3 className={`text-xl font-bold ${line.accentClass}`}>
                {line.name}
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  {line.sub}
                </span>
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="ozzo-display text-5xl text-foreground">
                  ₹{line.price}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  /user/mo
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Minimum 3 users
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {line.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", line.accentClass)} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/book-demo"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* combine it — cross-sell */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-4">
              <p className="ozzo-eyebrow text-muted-foreground">Or combine it</p>
              {combos.map((c) => (
                <div
                  key={c.name}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-lg font-bold text-foreground">{c.name}</h4>
                    <div>
                      <span className="ozzo-display text-2xl text-foreground">
                        ₹{c.price}
                      </span>
                      <span className="text-xs text-muted-foreground"> /user/mo</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                </div>
              ))}
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Annual billing is the base rate · half-yearly +20% · quarterly +30% ·
          10-day &amp; 30-day refundable trials.{" "}
          <a href="/book-demo" className="font-semibold text-primary hover:underline">
            Book a demo for the right plan →
          </a>
        </p>
      </Container>
    </section>
  );
}
