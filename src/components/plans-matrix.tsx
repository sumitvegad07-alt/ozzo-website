"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { Icon } from "./icon";
import { plans, featureGroups, type MatrixValue, type PlanKey } from "@/lib/plans";
import { cn } from "@/lib/utils";

function Cell({ v, highlight = false }: { v: MatrixValue; highlight?: boolean }) {
  if (v === true)
    return (
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          highlight
            ? "bg-primary text-primary-foreground"
            : "bg-success/15 text-success",
        )}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground/40">
        <Minus className="h-4 w-4" />
      </span>
    );
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold",
        highlight
          ? "bg-primary-soft-2 text-primary"
          : "bg-muted text-muted-foreground",
      )}
    >
      {v}
    </span>
  );
}

export function PlansMatrix() {
  // On phones we show ONE plan column at a time via this selector; the full
  // four-column table renders from the `md` breakpoint up.
  const [mobilePlan, setMobilePlan] = useState<PlanKey>("sales");
  const active = plans.find((p) => p.key === mobilePlan)!;

  return (
    <div>
      {/* ---------- Mobile: plan selector + 2-column table ---------- */}
      <div className="md:hidden">
        <div className="sticky top-[68px] z-20 -mx-1 mb-4 rounded-2xl border border-border bg-card/95 p-1.5 shadow-sm backdrop-blur">
          <div className="grid grid-cols-4 gap-1">
            {plans.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setMobilePlan(p.key)}
                className={cn(
                  "rounded-xl px-1 py-2 text-xs font-bold transition-colors",
                  mobilePlan === p.key
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <p className="mb-4 flex items-center gap-2 px-1 text-sm font-semibold text-foreground">
          <span className={cn("flex h-7 w-7 items-center justify-center rounded-lg bg-muted", active.accentClass)}>
            <Icon name={active.icon} className="h-4 w-4" />
          </span>
          {active.name} — {active.tagline}
        </p>

        <div className="space-y-6">
          {featureGroups.map((g) => (
            <div key={g.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-card-2 px-4 py-2.5">
                <Icon name={g.icon} className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">{g.name}</h3>
              </div>
              <ul className="divide-y divide-border">
                {g.rows.map((row) => (
                  <li key={row.feature} className="flex items-start justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{row.feature}</p>
                      {row.note && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{row.note}</p>
                      )}
                    </div>
                    <div className="shrink-0 pt-0.5">
                      <Cell v={row[mobilePlan]} highlight />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Desktop: full four-column table ---------- */}
      <div className="hidden overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="sticky top-[70px] z-20">
              <th className="w-[34%] border-b border-border bg-card px-6 py-4 align-bottom text-sm font-bold text-muted-foreground">
                Compare every module
              </th>
              {plans.map((p) => (
                <th
                  key={p.key}
                  className={cn(
                    "border-b border-border px-4 py-4 text-center align-bottom",
                    p.popular ? "bg-primary-soft" : "bg-card",
                  )}
                >
                  {p.popular && (
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-primary">
                      Most popular
                    </span>
                  )}
                  <span className="flex items-center justify-center gap-1.5">
                    <span className={cn("flex h-6 w-6 items-center justify-center rounded-lg bg-muted", p.accentClass)}>
                      <Icon name={p.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base font-bold text-foreground">{p.name}</span>
                  </span>
                  <span className="mt-1 block text-[11px] font-normal text-muted-foreground">
                    {p.tagline}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureGroups.map((g) => (
              <FeatureGroupRows key={g.name} name={g.name} icon={g.icon} rows={g.rows} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FeatureGroupRows({
  name,
  icon,
  rows,
}: {
  name: string;
  icon: string;
  rows: (typeof featureGroups)[number]["rows"];
}) {
  return (
    <>
      <tr>
        <td colSpan={5} className="border-b border-border bg-card-2 px-6 py-2.5">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
            <Icon name={icon} className="h-4 w-4 text-primary" />
            {name}
          </span>
        </td>
      </tr>
      {rows.map((row, i) => (
        <tr key={row.feature} className={i % 2 ? "bg-card-2/40" : ""}>
          <td className="px-6 py-3.5 align-top">
            <p className="text-sm font-medium text-foreground">{row.feature}</p>
            {row.note && <p className="mt-0.5 text-xs text-muted-foreground">{row.note}</p>}
          </td>
          {plans.map((p) => (
            <td
              key={p.key}
              className={cn("px-4 py-3.5 text-center", p.popular && "bg-primary-soft/40")}
            >
              <Cell v={row[p.key]} highlight={p.popular} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
