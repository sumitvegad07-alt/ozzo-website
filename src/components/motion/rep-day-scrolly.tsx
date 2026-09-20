"use client";

import { useEffect, useRef, useState } from "react";
import {
  Fingerprint,
  Navigation,
  MapPin,
  ShoppingCart,
  IndianRupee,
  Check,
  Camera,
  BarChart3,
} from "lucide-react";
import { Icon } from "@/components/icon";

type Step = { time: string; title: string; body: string; icon: string };

/**
 * Scrollytelling for the SFA field day: the steps scroll on the left while a
 * pinned visual on the right cross-fades to the one that matches the step in
 * view. On small screens the sticky column is dropped and each step shows its
 * visual inline. Content (the steps) is unchanged.
 */
export function RepDayScrolly({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {/* LEFT — steps */}
      <div>
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <div
              key={s.title}
              data-i={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-[62vh] flex-col justify-center py-10"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    on ? "bg-primary text-white" : "bg-white/10 text-white/50"
                  }`}
                >
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    on ? "text-[#c4b5fd]" : "text-white/35"
                  }`}
                >
                  Step {i + 1}
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/70">
                  {s.time}
                </span>
              </div>
              <h3
                className={`ozzo-display mt-4 text-3xl transition-colors duration-300 md:text-4xl ${
                  on ? "text-white" : "text-white/40"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 max-w-md text-[15px] leading-relaxed transition-colors duration-300 ${
                  on ? "text-white/70" : "text-white/35"
                }`}
              >
                {s.body}
              </p>
              {/* inline visual on mobile */}
              <div className="mt-7 lg:hidden">
                <StepVisual index={i} />
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT — pinned, cross-fading visual (desktop) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-[16vh] h-[68vh]">
          <div className="relative h-full">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <StepVisual index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────── per-step visuals (dark-glass mini cards) ─────────── */

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#7c3aed]/40 to-[#2563eb]/10 blur-2xl" />
      <div className="rounded-3xl border border-white/12 bg-[#141225]/90 p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

const chip = "rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70";

function StepVisual({ index }: { index: number }) {
  switch (index) {
    case 0: // Attendance
      return (
        <Shell>
          <p className="ozzo-eyebrow text-[10px] text-white/45">Attendance</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white">
              <Camera className="h-7 w-7" />
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#141225] bg-success text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            </span>
            <div>
              <p className="text-lg font-bold text-white">Punched in · 07:40</p>
              <p className="text-xs text-white/55">Selfie + GPS verified</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
            </span>
            <span className="text-xs text-white/70">Location locked · 12.9°N, 77.6°E</span>
            <span className={`${chip} ml-auto`}>On time</span>
          </div>
        </Shell>
      );
    case 1: // Route
      return (
        <Shell>
          <div className="flex items-center justify-between">
            <p className="ozzo-eyebrow text-[10px] text-white/45">Today&apos;s beat</p>
            <span className={chip}>2 / 6 done</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#e246d9]" />
          </div>
          <ul className="mt-4 space-y-2">
            {[
              { n: "Vertex Electricals", s: "Visited", done: true },
              { n: "Ganesh Stores", s: "Visited", done: true },
              { n: "Sri Balaji Stores", s: "Next · 320 m", next: true },
              { n: "Anand Hardware", s: "Pending" },
            ].map((o) => (
              <li key={o.n} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${o.next ? "border-primary/40 bg-primary-soft" : "border-white/10 bg-white/[0.04]"}`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${o.done ? "bg-success text-white" : o.next ? "bg-primary text-white" : "border border-white/20 text-white/40"}`}>
                  {o.done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : o.next ? <Navigation className="h-3 w-3" /> : ""}
                </span>
                <span className="text-[13px] font-semibold text-white">{o.n}</span>
                <span className="ml-auto text-[11px] text-white/50">{o.s}</span>
              </li>
            ))}
          </ul>
        </Shell>
      );
    case 2: // Visit
      return (
        <Shell>
          <p className="ozzo-eyebrow text-[10px] text-white/45">Visit check-in</p>
          <div className="relative mt-4 h-36 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e18]">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(124,58,237,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.18) 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
            <span className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute h-4 w-4 rounded-full bg-primary/60 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
              <span className="relative h-3 w-3 rounded-full bg-primary" />
            </span>
            <MapPin className="absolute right-4 top-4 h-5 w-5 text-[#c4b5fd]" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm font-bold text-white">At Ganesh Stores</span>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success">
              <Check className="h-3 w-3" strokeWidth={3} /> Geo-stamped
            </span>
          </div>
        </Shell>
      );
    case 3: // Order
      return (
        <Shell>
          <div className="flex items-center justify-between">
            <p className="ozzo-eyebrow text-[10px] text-white/45">Order · #1042</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">
              <ShoppingCart className="h-3 w-3" /> Offline · synced
            </span>
          </div>
          <ul className="mt-4 space-y-1.5">
            {[
              ["MST Drink 1L × 24", "₹6,120"],
              ["Grain Pack 5kg × 10", "₹8,400"],
              ["Spice Mix 200g × 30", "₹3,880"],
            ].map(([a, b]) => (
              <li key={a} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2 text-[12px]">
                <span className="text-white/75">{a}</span>
                <span className="font-bold text-white">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#2563eb]/25 to-[#e246d9]/25 px-3 py-2.5">
            <span className="text-xs font-semibold text-white/80">Order total</span>
            <span className="flex items-center gap-0.5 text-lg font-extrabold text-white"><IndianRupee className="h-4 w-4" />18,400</span>
          </div>
        </Shell>
      );
    case 4: // Collection
      return (
        <Shell>
          <p className="ozzo-eyebrow text-[10px] text-white/45">Collection</p>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] p-4 text-white">
            <IndianRupee className="h-8 w-8" />
            <div>
              <p className="text-2xl font-extrabold leading-none">₹9,250</p>
              <p className="text-[11px] text-white/80">collected · proof attached</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <span className="text-xs text-white/70">Outstanding</span>
            <span className="flex items-center gap-1 text-sm font-bold text-white">
              <IndianRupee className="h-3.5 w-3.5" />8,60,200
              <span className="ml-1 text-[10px] font-semibold text-success">↓ live</span>
            </span>
          </div>
        </Shell>
      );
    default: // End day / DSR
      return (
        <Shell>
          <div className="flex items-center justify-between">
            <p className="ozzo-eyebrow text-[10px] text-white/45">Daily Sales Report</p>
            <BarChart3 className="h-4 w-4 text-[#c4b5fd]" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["Visits", "9"],
              ["Orders", "₹3.4L"],
              ["Collected", "₹1.28L"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
                <p className="ozzo-display text-lg text-white">{v}</p>
                <p className="text-[9px] text-white/50">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-20 items-end gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            {[40, 62, 48, 75, 58, 88, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-[#c4b5fd]" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-white/50">Built itself through the day — no night-time round-up.</p>
        </Shell>
      );
  }
}
