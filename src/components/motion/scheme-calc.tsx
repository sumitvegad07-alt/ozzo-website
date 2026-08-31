"use client";

import { useEffect, useState } from "react";
import { Gift, Sparkles, Check } from "lucide-react";
import { useInView } from "./use-in-view";

/** Staged demo of a live "free goods" scheme (Buy 100 → get 10 free), which
 * OZZO's pricing engine detects and applies automatically on the order. */
export function SchemeCalc() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [step, setStep] = useState(0); // 0..4, loops

  useEffect(() => {
    if (!inView) return;
    let s = 0;
    setStep(0);
    const id = setInterval(() => {
      s = (s + 1) % 6; // 4 content steps + 2 hold frames
      setStep(s);
    }, 1250);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/[0.07]">
      <div className="flex items-center justify-between border-b border-border bg-card-2 px-5 py-3.5">
        <p className="text-sm font-bold text-foreground">Order · Sunrise Distributors</p>
        <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
          Primary
        </span>
      </div>

      <div className="space-y-3 p-5">
        {/* ordered line */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-card-2 p-3">
          <div>
            <p className="text-[13px] font-bold text-foreground">Parle Marie · 200g</p>
            <p className="text-[11px] text-muted-foreground">100 boxes × ₹200</p>
          </div>
          <span className="text-sm font-bold text-foreground">₹20,000</span>
        </div>

        {/* scheme detected */}
        <div
          className="flex items-center gap-2 rounded-xl border border-primary/25 bg-primary-soft px-3 py-2.5 transition-all duration-500"
          style={{ opacity: step >= 1 ? 1 : 0.25, transform: step >= 1 ? "none" : "translateY(6px)" }}
        >
          <Sparkles className="h-4 w-4 shrink-0 text-primary" />
          <p className="text-[12px] leading-snug text-foreground">
            <span className="font-bold text-primary">Scheme applied:</span> Buy 100 → get 10 free
          </p>
        </div>

        {/* free line */}
        <div
          className="flex items-center justify-between rounded-xl border border-success/30 bg-success/10 p-3 transition-all duration-500"
          style={{ opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? "none" : "translateY(8px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/20 text-success">
              <Gift className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[13px] font-bold text-foreground">+ 10 boxes free</p>
              <p className="text-[11px] text-muted-foreground">auto-added · capped per order</p>
            </div>
          </div>
          <span className="text-sm font-bold text-success">₹0</span>
        </div>

        {/* totals */}
        <div
          className="grid grid-cols-3 gap-2 transition-all duration-500"
          style={{ opacity: step >= 3 ? 1 : 0 }}
        >
          {[
            { k: "Billed", v: "100" },
            { k: "Free", v: "10" },
            { k: "Value given", v: "₹2,000" },
          ].map((t) => (
            <div key={t.k} className="rounded-xl border border-border bg-card-2 p-2.5 text-center">
              <p className="ozzo-eyebrow text-[9px] text-muted-foreground">{t.k}</p>
              <p className="mt-0.5 text-base font-extrabold text-foreground tabular-nums">{t.v}</p>
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-1.5 text-[11px] font-semibold text-success transition-opacity duration-500"
          style={{ opacity: step >= 3 ? 1 : 0 }}
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} /> On the invoice &amp; order PDF — no manual maths, no missed claim.
        </div>
      </div>
    </div>
  );
}
