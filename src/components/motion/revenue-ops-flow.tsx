"use client";

import { useEffect, useState } from "react";
import { UserPlus, MessageCircle, MapPin, FileText, CircleCheck } from "lucide-react";
import { useInView } from "./use-in-view";

export type FlowStage = { icon: React.ElementType; label: string; meta: string };

/** Default: the CRM + field-force (WFA) flow — every stage is a shipped module
 * (Leads, WhatsApp/AI, geo-tagged field visits, Quotations, Customers).
 * No SFA stages here. Callers may pass their own `stages`. */
const DEFAULT_STAGES: FlowStage[] = [
  { icon: UserPlus, label: "Lead", meta: "captured + tagged" },
  { icon: MessageCircle, label: "Follow-up", meta: "WhatsApp + AI" },
  { icon: MapPin, label: "Field visit", meta: "selfie + GPS" },
  { icon: FileText, label: "Quotation", meta: "branded PDF" },
  { icon: CircleCheck, label: "Won", meta: "customer + repeat" },
];

export function RevenueOpsFlow({ stages = DEFAULT_STAGES }: { stages?: FlowStage[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActive((v) => (v + 1) % (stages.length + 2)), 900);
    return () => clearInterval(id);
  }, [inView, stages.length]);

  const fill = Math.min(active, stages.length - 1);
  const cols =
    stages.length === 5 ? "sm:grid-cols-3 md:grid-cols-5" : "sm:grid-cols-3 md:grid-cols-6";

  return (
    <div ref={ref} className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="relative">
        <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-border md:block">
          <div
            className="h-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${(fill / (stages.length - 1)) * 100}%` }}
          />
        </div>

        <div className={`grid grid-cols-2 gap-x-3 gap-y-6 ${cols}`}>
          {stages.map((s, i) => {
            const on = i <= fill;
            const Icon = s.icon;
            return (
              <div key={s.label} className="relative flex flex-col items-center text-center">
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-sm transition-all duration-500 ${
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground/50"
                  } ${i === fill ? "scale-110 ring-4 ring-primary/15" : ""}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className={`mt-3 text-sm font-bold transition-colors ${on ? "text-foreground" : "text-muted-foreground/60"}`}>
                  {s.label}
                </p>
                <p className="text-[11px] text-muted-foreground">{s.meta}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
