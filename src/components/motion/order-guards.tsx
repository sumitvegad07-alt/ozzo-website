"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Loader2, Ban, IndianRupee, Boxes } from "lucide-react";
import { useInView } from "./use-in-view";

/** Staged demo of the two order guardrails that actually ship:
 *  - credit control (outstanding vs limit → warn/block, configurable)
 *  - stock control (line vs available stock → warn/block when restrictStock is on)
 */
export function OrderGuards() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [step, setStep] = useState(0); // 0..5, loops (with hold frames)

  useEffect(() => {
    if (!inView) return;
    let s = 0;
    setStep(0);
    const id = setInterval(() => {
      s = (s + 1) % 7;
      setStep(s);
    }, 1150);
    return () => clearInterval(id);
  }, [inView]);

  const creditState = step < 1 ? "idle" : step === 1 ? "checking" : "blocked";
  const stockState = step < 2 ? "idle" : step === 2 ? "checking" : "blocked";
  const showResult = step >= 3;

  return (
    <div ref={ref} className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/[0.07]">
      <div className="flex items-center justify-between border-b border-border bg-card-2 px-5 py-3.5">
        <p className="text-sm font-bold text-foreground">New order · Meera Traders</p>
        <span className="text-sm font-bold text-foreground">₹12,000</span>
      </div>

      <div className="space-y-3 p-5">
        {/* credit guard */}
        <GuardRow
          icon={IndianRupee}
          title="Credit check"
          state={creditState}
          detail="Outstanding ₹45,000 · limit ₹30,000"
          verdict="Over available credit"
        />
        {/* stock guard */}
        <GuardRow
          icon={Boxes}
          title="Stock check"
          state={stockState}
          detail="Ordered 20 · available 5"
          verdict="Exceeds available stock"
        />

        {/* result */}
        <div
          className="rounded-xl border border-warning/40 bg-warning/10 p-3.5 transition-all duration-500"
          style={{ opacity: showResult ? 1 : 0, transform: showResult ? "none" : "translateY(8px)", animation: showResult ? "ozzo-shake 0.5s ease" : undefined }}
        >
          <div className="flex items-center gap-2">
            <Ban className="h-5 w-5 shrink-0 text-warning" />
            <p className="text-[13px] font-bold text-foreground">Order held for approval</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
            Each guardrail is per-account — set to <span className="font-semibold text-foreground">ignore, warn, or hard-block</span>. Overdue days can block too.
          </p>
        </div>
      </div>
    </div>
  );
}

function GuardRow({
  icon: Icon,
  title,
  state,
  detail,
  verdict,
}: {
  icon: React.ElementType;
  title: string;
  state: "idle" | "checking" | "blocked";
  detail: string;
  verdict: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${state === "blocked" ? "bg-warning/15 text-warning" : "bg-primary-soft text-primary"}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-bold text-foreground">{title}</p>
        <p className="truncate text-[11px] text-muted-foreground">{detail}</p>
      </div>
      <span className="shrink-0">
        {state === "idle" && <ShieldCheck className="h-4 w-4 text-muted-foreground/40" />}
        {state === "checking" && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
        {state === "blocked" && (
          <span className="flex items-center gap-1 rounded-full bg-warning/15 px-2 py-0.5 text-[10px] font-bold text-warning">
            {verdict}
          </span>
        )}
      </span>
    </div>
  );
}
