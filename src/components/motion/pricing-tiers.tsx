"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export type Tier = {
  name: string;
  price: number | null; // annual base /user/mo; null = custom
  priceNote?: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  group?: string;
};

type Cycle = { key: string; label: string; mult: number; hint?: string };

const CYCLES: Cycle[] = [
  { key: "annual", label: "Annual", mult: 1, hint: "Best value" },
  { key: "half", label: "6-monthly", mult: 1.2 },
  { key: "quarter", label: "Quarterly", mult: 1.3 },
];

/** Pricing grid with a billing-cycle toggle. Annual is the base rate; shorter
 * cycles cost more per user/month (half-yearly +20%, quarterly +30%). */
export function PricingTiers({ tiers }: { tiers: Tier[] }) {
  const [cycle, setCycle] = useState(CYCLES[0]);

  return (
    <div>
      {/* toggle */}
      <div className="mx-auto mb-10 flex w-fit items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
        {CYCLES.map((c) => {
          const on = c.key === cycle.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setCycle(c)}
              aria-pressed={on}
              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all ${
                on ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
              {c.hint && (
                <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${on ? "bg-white/20 text-white" : "bg-success/15 text-success"}`}>
                  {c.hint}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className={`grid gap-6 ${tiers.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {tiers.map((tier) => {
          const monthly = tier.price === null ? null : Math.round(tier.price * cycle.mult);
          return (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all ${
                tier.popular
                  ? "border-primary/40 bg-primary-soft ring-2 ring-primary/40"
                  : "border-border bg-card"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  Most popular
                </span>
              )}
              {tier.group && (
                <span className="ozzo-eyebrow text-[10px] text-muted-foreground">{tier.group}</span>
              )}
              <h3 className="mt-1 text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mb-4 text-xs text-muted-foreground">{tier.tagline}</p>
              <div className="mb-1 flex items-baseline gap-1">
                {monthly === null ? (
                  <span className="text-3xl font-extrabold text-foreground">{tier.priceNote ?? "Custom"}</span>
                ) : (
                  <>
                    <span className="text-3xl font-extrabold text-foreground tabular-nums">₹{monthly.toLocaleString("en-IN")}</span>
                    <span className="text-sm font-medium text-muted-foreground">/user/mo</span>
                  </>
                )}
              </div>
              <p className="mb-6 h-4 text-[11px] font-medium text-muted-foreground">
                {monthly === null
                  ? "Tailored to your team"
                  : cycle.key === "annual"
                    ? "billed yearly · lowest rate"
                    : `billed ${cycle.key === "half" ? "6-monthly" : "quarterly"}`}
              </p>
              <Link
                href="/book-demo"
                className={`mb-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                  tier.popular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover"
                    : "bg-muted text-foreground hover:bg-muted/70"
                }`}
              >
                {monthly === null ? "Talk to sales" : "Get a quote"} <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Per user, per month · minimum 3 users. Annual is the base rate — 6-monthly adds 20%, quarterly adds 30%. 10-day &amp; 30-day refundable trials.
      </p>
    </div>
  );
}
