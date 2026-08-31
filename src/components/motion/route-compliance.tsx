"use client";

import { useEffect, useState } from "react";
import { Check, X, MapPin, Navigation } from "lucide-react";
import { useInView } from "./use-in-view";

/** Stops on the planned beat, in sequence. One is skipped (with a reason) to
 * tell the "no outlet quietly skipped" story — grounded in real route
 * execution: completed / skipped stops, planned vs actual, skip reasons. */
const STOPS = [
  { name: "Ganesh Stores", x: 12, y: 78, skip: false },
  { name: "Meera Traders", x: 30, y: 48, skip: false },
  { name: "Shalimar Mart", x: 48, y: 66, skip: true, reason: "Shop closed" },
  { name: "Anand Hardware", x: 64, y: 34, skip: false },
  { name: "Vertex Depot", x: 82, y: 52, skip: false },
  { name: "Skyline Cash&Carry", x: 92, y: 22, skip: false },
];

const PATH = "M12,78 C22,60 24,52 30,48 S44,70 48,66 S60,38 64,34 S78,56 82,52 S90,30 92,22";

export function RouteCompliance() {
  const [ref, inView] = useInView<HTMLDivElement>();
  // step = number of stops resolved so far (0..STOPS.length); loops.
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let s = 0;
    setStep(0);
    const id = setInterval(() => {
      s = s + 1;
      if (s > STOPS.length + 2) s = 0; // brief pause at the end, then replay
      setStep(s);
    }, 950);
    return () => clearInterval(id);
  }, [inView]);

  const visited = STOPS.slice(0, Math.min(step, STOPS.length)).filter((s) => !s.skip).length;
  const skipped = STOPS.slice(0, Math.min(step, STOPS.length)).filter((s) => s.skip).length;
  const active = Math.min(step, STOPS.length);
  const cur = STOPS[Math.min(step, STOPS.length) - 1];

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-[1.6fr_1fr]">
      {/* map */}
      <div className="ozzo-grid relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-primary-soft text-primary/20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          <path d={PATH} fill="none" stroke="var(--primary)" strokeWidth="0.6" strokeDasharray="1.5 2.5" strokeLinecap="round" opacity="0.5" vectorEffect="non-scaling-stroke" />
        </svg>

        {STOPS.map((s, i) => {
          const resolved = i < active;
          const isCur = i === active - 1;
          return (
            <div
              key={s.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-500 ${
                  !resolved
                    ? "border-border bg-card text-muted-foreground/50"
                    : s.skip
                      ? "border-warning bg-warning text-white"
                      : "border-success bg-success text-white"
                } ${isCur ? "scale-125 ring-4 ring-primary/20" : ""}`}
              >
                {resolved ? (
                  s.skip ? <X className="h-3.5 w-3.5" strokeWidth={3} /> : <Check className="h-3.5 w-3.5" strokeWidth={3} />
                ) : (
                  <MapPin className="h-3 w-3" />
                )}
              </span>
            </div>
          );
        })}

        {/* rep marker travels stop→stop */}
        {active > 0 && active <= STOPS.length && cur && (
          <div
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
            style={{ left: `${cur.x}%`, top: `${cur.y}%` }}
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute h-4 w-4 rounded-full bg-primary/40 [animation:ozzo-pulse-ring_1.6s_ease-out_infinite]" />
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                <Navigation className="h-2.5 w-2.5" />
              </span>
            </span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-card px-2.5 py-1 text-[11px] font-bold text-foreground shadow-sm">
          Ravi K. · today&apos;s beat
        </span>
      </div>

      {/* live tally */}
      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div>
          <p className="ozzo-eyebrow text-[10px] text-muted-foreground">Route progress</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="ozzo-display text-4xl text-foreground tabular-nums">{visited}</span>
            <span className="mb-1 text-sm font-semibold text-muted-foreground">/ {STOPS.length} visited</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-success transition-all duration-700"
              style={{ width: `${(visited / STOPS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border bg-card-2 px-3 py-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success text-white"><Check className="h-2.5 w-2.5" strokeWidth={4} /></span>
              Visited
            </span>
            <span className="text-sm font-bold tabular-nums text-foreground">{visited}</span>
          </div>
          <div className={`flex items-center justify-between rounded-lg border px-3 py-2 transition-colors ${skipped ? "border-warning/40 bg-warning/10" : "border-border bg-card-2"}`}>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-warning text-white"><X className="h-2.5 w-2.5" strokeWidth={4} /></span>
              Skipped
            </span>
            <span className="text-sm font-bold tabular-nums text-foreground">{skipped}</span>
          </div>
        </div>

        <div className="rounded-lg border border-dashed border-border px-3 py-2 text-[11px] leading-snug text-muted-foreground">
          {skipped > 0 ? (
            <>Skip needs a reason: <span className="font-semibold text-warning">“Shop closed”</span> — logged for the manager.</>
          ) : (
            <>Reps work the beat in order — no outlet quietly dropped.</>
          )}
        </div>
      </div>
    </div>
  );
}
