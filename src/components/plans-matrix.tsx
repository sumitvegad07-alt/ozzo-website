"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { Icon } from "./icon";
import {
  plans,
  planOrder,
  featureGroups,
  cellValue,
  type MatrixValue,
  type PlanId,
} from "@/lib/plans";
import { cn } from "@/lib/utils";

const planById = Object.fromEntries(plans.map((p) => [p.id, p])) as Record<
  PlanId,
  (typeof plans)[number]
>;

function Cell({ v, highlight = false }: { v: MatrixValue; highlight?: boolean }) {
  if (v === true)
    return (
      <span
        className={cn(
          "inline-flex h-6 w-6 items-center justify-center rounded-full",
          highlight ? "bg-primary text-primary-foreground" : "bg-success/15 text-success",
        )}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground/40">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold",
        highlight ? "bg-primary-soft-2 text-primary" : "bg-muted text-muted-foreground",
      )}
    >
      {v}
    </span>
  );
}

export function PlansMatrix() {
  // On phones we show ONE plan column at a time via this selector.
  const [mobilePlan, setMobilePlan] = useState<PlanId>("SFA");
  const active = planById[mobilePlan];

  return (
    <div>
      {/* ---------- Mobile: plan selector + single-plan list ---------- */}
      <div className="lg:hidden">
        <div className="mb-4 rounded-2xl border border-border bg-card p-1.5 shadow-sm">
          <div className="grid grid-cols-3 gap-1">
            {planOrder.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setMobilePlan(id)}
                className={cn(
                  "rounded-xl px-1 py-2 text-[11px] font-bold transition-colors",
                  mobilePlan === id
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {planById[id].name}
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
                      {row.note && <p className="mt-0.5 text-xs text-muted-foreground">{row.note}</p>}
                    </div>
                    <div className="shrink-0 pt-0.5">
                      <Cell v={cellValue(row, mobilePlan)} highlight />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Desktop: five-column table, sticky header, no horizontal scroll ---------- */}
      {/* NB: no overflow-hidden on any ancestor — it would disable the sticky
          header. Corners are rounded on the corner cells instead, which needs
          border-separate (border-collapse ignores cell radius). */}
      <div className="hidden rounded-3xl border border-border bg-card shadow-sm lg:block">
        <table className="w-full table-fixed border-separate border-spacing-0 text-left [&_tbody_tr:last-child_td:first-child]:rounded-bl-3xl [&_tbody_tr:last-child_td:last-child]:rounded-br-3xl [&_thead_th:first-child]:rounded-tl-3xl [&_thead_th:last-child]:rounded-tr-3xl">
          <colgroup>
            <col className="w-[28%]" />
            {planOrder.map((id) => (
              <col key={id} className="w-[14.4%]" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th className="sticky top-20 z-20 border-b border-border bg-card px-5 py-4 align-bottom text-sm font-bold text-muted-foreground">
                Compare every module
              </th>
              {planOrder.map((id) => {
                const p = planById[id];
                return (
                  <th
                    key={id}
                    className={cn(
                      "sticky top-20 z-20 border-b border-border bg-card px-2 py-4 text-center align-bottom",
                      p.popular && "border-x border-primary/30",
                    )}
                  >
                    {p.popular && (
                      <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-wider text-primary">
                        Most popular
                      </span>
                    )}
                    <span className={cn("mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-muted", p.accentClass)}>
                      <Icon name={p.icon} className="h-4 w-4" />
                    </span>
                    <span className="block text-[13px] font-bold leading-tight text-foreground">
                      {p.name}
                    </span>
                  </th>
                );
              })}
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
        <td colSpan={1 + planOrder.length} className="border-b border-border bg-card-2 px-5 py-2.5">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
            <Icon name={icon} className="h-4 w-4 text-primary" />
            {name}
          </span>
        </td>
      </tr>
      {rows.map((row, i) => (
        <tr key={row.feature} className={i % 2 ? "bg-card-2/40" : ""}>
          <td className="px-5 py-3 align-top">
            <p className="text-[13px] font-medium leading-snug text-foreground">{row.feature}</p>
            {row.note && <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{row.note}</p>}
          </td>
          {planOrder.map((id) => (
            <td
              key={id}
              className={cn("px-2 py-3 text-center", planById[id].popular && "bg-primary-soft/40")}
            >
              <Cell v={cellValue(row, id)} highlight={planById[id].popular} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
