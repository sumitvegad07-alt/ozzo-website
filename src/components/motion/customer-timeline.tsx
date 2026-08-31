"use client";

import { useEffect, useState } from "react";
import { UserPlus, Phone, MessageCircle, MapPin, FileText, CircleCheck, ShoppingCart } from "lucide-react";
import { useInView } from "./use-in-view";

type Ev = { icon: React.ElementType; title: string; meta: string; tag?: string };

/** One customer's record building itself up, in order — every touch on the
 * same timeline. Grounded in the activity feed: leads, calls/tasks, WhatsApp,
 * geo visits, quotations, deals, and (with SFA) orders. */
const EVENTS: Ev[] = [
  { icon: UserPlus, title: "Lead created", meta: "source: Website · tagged “panels”" },
  { icon: Phone, title: "Call logged", meta: "next step: send rate list" },
  { icon: MessageCircle, title: "WhatsApp reply", meta: "catalogue + AI answered “lead time?”" },
  { icon: MapPin, title: "Site meeting", meta: "checked in · GPS verified" },
  { icon: FileText, title: "Quotation v2 sent", meta: "branded PDF · ₹2.4L" },
  { icon: CircleCheck, title: "Deal won", meta: "moved to Customers" },
  { icon: ShoppingCart, title: "Order booked", meta: "₹1.8L", tag: "with SFA" },
];

export function CustomerTimeline() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    setShown(0);
    const id = setInterval(() => {
      n = n + 1;
      if (n > EVENTS.length + 2) n = 0; // hold, then replay
      setShown(n);
    }, 850);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.08]">
      <div className="flex items-center gap-3 border-b border-border bg-card-2 px-5 py-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">VE</span>
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">Vertex Electricals</p>
          <p className="text-[11px] text-muted-foreground">One record · whole team</p>
        </div>
        <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success">Customer</span>
      </div>

      <div className="relative p-5">
        <div className="absolute bottom-6 left-[34px] top-6 w-px bg-border" />
        <div className="space-y-2.5">
          {EVENTS.map((e, i) => {
            const visible = i < Math.min(shown, EVENTS.length);
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className="relative flex items-start gap-3 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0.18,
                  transform: visible ? "none" : "translateY(6px)",
                }}
              >
                <span className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${visible ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground/50"}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-bold text-foreground">{e.title}</p>
                    {e.tag && (
                      <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">{e.tag}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{e.meta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
