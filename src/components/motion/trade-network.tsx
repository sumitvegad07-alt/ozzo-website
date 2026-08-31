"use client";

import { Fragment } from "react";
import { Building2, Truck, Store, ShoppingBag, ArrowRight } from "lucide-react";
import { useInView } from "./use-in-view";

/** The trade hierarchy that actually ships: named levels (Distributor / Dealer /
 * Retailer), orders auto-classified Primary vs Secondary from each customer's
 * level, and outstanding tracked at every node. NO invented consumer-level
 * stock-flow or "market demand" — only what OZZO really does. */
const NODES = [
  { icon: Building2, label: "You", badge: "Company", badgeTone: "muted", meta: "origin" },
  { icon: Truck, label: "Distributor", badge: "Primary order", badgeTone: "primary", meta: "Outstanding ₹4.2L" },
  { icon: Store, label: "Dealer", badge: "Secondary", badgeTone: "amber", meta: "Outstanding ₹1.1L" },
  { icon: ShoppingBag, label: "Retailer", badge: "Secondary", badgeTone: "amber", meta: "Outstanding ₹32k" },
] as const;

const badgeClass = {
  primary: "bg-primary-soft text-primary",
  amber: "bg-warning/15 text-warning",
  muted: "bg-muted text-muted-foreground",
} as const;

export function TradeNetwork() {
  const [ref, inView] = useInView<HTMLDivElement>({ once: false });

  return (
    <div ref={ref} className={`rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8 ${inView ? "" : "ozzo-anim-paused"}`}>
      <div className="flex flex-col items-stretch md:flex-row">
        {NODES.map((n, i) => {
          const Icon = n.icon;
          return (
            <Fragment key={n.label}>
              {/* node card — equal height via items-stretch + h-full */}
              <div className="flex flex-1 flex-col items-center rounded-2xl border border-border bg-card-2 p-4 text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"
                  style={{ animation: "ozzo-bob 3s ease-in-out infinite", animationDelay: `${i * 0.4}s` }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-bold text-foreground">{n.label}</p>
                <span className={`mt-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badgeClass[n.badgeTone]}`}>
                  {n.badge}
                </span>
                {/* meta pinned to the bottom so every card's baseline lines up */}
                <p className="mt-auto pt-3 text-[11px] text-muted-foreground">
                  {n.meta.startsWith("Outstanding") ? (
                    <>Outstanding <span className="font-bold text-foreground">{n.meta.replace("Outstanding ", "")}</span></>
                  ) : (
                    <span className="opacity-60">{n.meta}</span>
                  )}
                </p>
              </div>

              {/* connector — centered between cards; horizontal on desktop, vertical on mobile */}
              {i < NODES.length - 1 && (
                <div className="relative flex shrink-0 items-center justify-center self-stretch py-2 md:w-10 md:py-0">
                  <span className="hidden h-px w-full bg-border md:block" />
                  <span className="block h-6 w-px bg-border md:hidden" />
                  <ArrowRight className="absolute h-4 w-4 rotate-90 text-muted-foreground/40 md:rotate-0" />
                  <span
                    className="absolute h-2 w-2 rounded-full bg-primary shadow"
                    style={{ animation: "ozzo-flow 2.4s ease-in-out infinite", animationDelay: `${i * 0.6}s` }}
                  />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <p className="mt-6 text-center text-[13px] leading-relaxed text-muted-foreground">
        Classify customers into up to five trade levels. Orders tag themselves{" "}
        <span className="font-semibold text-primary">Primary</span> or{" "}
        <span className="font-semibold text-warning">Secondary</span> from the customer&apos;s level — and outstanding is tracked at every node.
      </p>
    </div>
  );
}
