import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./reveal";
import { productLines, combinedPlans, includedInEveryPlan } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: number;
  tagline: string;
  features: string[];
  accent: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  ...productLines.map((p) => ({
    name: p.name,
    price: p.price,
    tagline: p.sub,
    features: p.features.slice(0, 5),
    accent: p.accentClass,
  })),
  {
    name: combinedPlans[0].name,
    price: combinedPlans[0].price,
    tagline: combinedPlans[0].tagline,
    features: combinedPlans[0].features,
    accent: "text-primary",
    popular: true,
  },
  {
    name: combinedPlans[1].name,
    price: combinedPlans[1].price,
    tagline: combinedPlans[1].tagline,
    features: combinedPlans[1].features,
    accent: "text-foreground",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple, transparent pricing"
          title="Pay only for what your team needs"
          description="Priced per user, per month, minimum 3 users. Pick one line or combine them — SFA already includes everything in Workforce."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 60}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6",
                  tier.popular
                    ? "border-primary/40 bg-primary-soft ring-2 ring-primary/40"
                    : "border-border bg-card",
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                    Most popular
                  </span>
                )}
                <h3 className={cn("text-xl font-bold", tier.accent)}>
                  {tier.name}
                </h3>
                <p className="mb-4 text-xs text-muted-foreground">
                  {tier.tagline}
                </p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">
                    ₹{tier.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    /user/mo
                  </span>
                </div>
                <Link
                  href="/book-demo"
                  className={cn(
                    "mb-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                    tier.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover"
                      : "bg-muted text-foreground hover:bg-muted/70",
                  )}
                >
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className="flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm font-medium text-foreground"
                    >
                      <Check className={cn("h-5 w-5 shrink-0", tier.accent)} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card/50 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div className="shrink-0">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="h-4 w-4 text-primary" /> Included in every
                plan
              </p>
              <p className="text-xs text-muted-foreground">
                The essentials, whichever line you choose
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {includedInEveryPlan.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Annual billing is the base rate · half-yearly +20% · quarterly +30% ·
          10-day &amp; 30-day trials available.{" "}
          <Link href="/book-demo" className="font-semibold text-primary hover:underline">
            Book a demo for the right plan →
          </Link>
        </p>
      </Container>
    </section>
  );
}
