"use client";

import { useEffect, useState } from "react";
import { Fingerprint, MapPin, ShoppingCart, IndianRupee, ReceiptText, Route } from "lucide-react";
import { useInView } from "./use-in-view";

type Ev = { icon: React.ElementType; who: string; what: string; meta: string; tone: "success" | "primary" | "amber" };

/** Real field events, in the order they happen through a day. Grounded in
 * shipped modules: attendance punch-in, route start, geo visit check-in,
 * offline order capture, field collection, expense claim. */
const EVENTS: Ev[] = [
  { icon: Fingerprint, who: "Suresh P.", what: "punched in", meta: "selfie + GPS · 08:12", tone: "success" },
  { icon: Route, who: "Ravi K.", what: "started today's route", meta: "9 outlets planned", tone: "primary" },
  { icon: MapPin, who: "Neha S.", what: "checked in at Ganesh Stores", meta: "GPS verified · 09:41", tone: "primary" },
  { icon: ShoppingCart, who: "Neha S.", what: "booked order #1042", meta: "₹18,400 · offline → synced", tone: "success" },
  { icon: IndianRupee, who: "Ravi K.", what: "collected a payment", meta: "₹9,000 · proof attached", tone: "success" },
  { icon: MapPin, who: "Suresh P.", what: "skipped Shalimar Mart", meta: "reason: shop closed", tone: "amber" },
  { icon: ReceiptText, who: "Arjun M.", what: "filed an expense", meta: "₹340 · from km travelled", tone: "primary" },
  { icon: ShoppingCart, who: "Ravi K.", what: "booked order #1043", meta: "₹42,750 · Anand Hardware", tone: "success" },
];

const toneMap = {
  success: "bg-success/15 text-success",
  primary: "bg-primary-soft text-primary",
  amber: "bg-warning/15 text-warning",
} as const;

const VISIBLE = 5;

export function LiveActivityFeed() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [n, setN] = useState(VISIBLE); // how many events have "arrived"

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setN((v) => v + 1), 1700);
    return () => clearInterval(id);
  }, [inView]);

  // Rolling window of the latest VISIBLE events, newest first.
  const items = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (((n - 1 - i) % EVENTS.length) + EVENTS.length) % EVENTS.length;
    return { ev: EVENTS[idx], key: `${n - i}` };
  });

  return (
    <div ref={ref} className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.08]">
      <div className="flex items-center justify-between border-b border-border bg-card-2 px-5 py-3.5">
        <p className="text-sm font-bold text-foreground">Live activity</p>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Real-time
        </span>
      </div>
      <div className="space-y-2 p-4">
        {items.map(({ ev, key }, i) => {
          const Icon = ev.icon;
          return (
            <div
              key={key}
              className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-2.5"
              style={{
                animation: i === 0 ? "ozzo-feed-in 0.5s cubic-bezier(0.16,1,0.3,1) both" : undefined,
                opacity: 1 - i * 0.14,
              }}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${toneMap[ev.tone]}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] text-foreground">
                  <span className="font-bold">{ev.who}</span> {ev.what}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">{ev.meta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
