import { Check, X, Navigation } from "lucide-react";

/**
 * SFA "beat itinerary" visual — a stop-by-stop list of the rep's day
 * (visited / skipped-with-reason / next / pending) with a coverage bar.
 * Deliberately different from the map-based RouteCompliance used on the
 * home page, so the SFA route-compliance section doesn't repeat it.
 */
export function BeatItinerary() {
  const stops = [
    { name: "Vertex Electricals", sub: "Visited · 9:10 AM", status: "done" as const },
    { name: "Ganesh Stores", sub: "Visited · 9:40 AM", status: "done" as const },
    { name: "Meera Traders", sub: "Skipped · “Shop closed”", status: "skip" as const },
    { name: "Sri Balaji Stores", sub: "Next stop · 320 m", status: "next" as const },
    { name: "Anand Hardware", sub: "Pending", status: "pending" as const },
    { name: "Skyline Infra", sub: "Pending", status: "pending" as const },
  ];

  const marker: Record<string, string> = {
    done: "bg-success text-white",
    skip: "bg-warning text-white",
    next: "bg-primary text-white ring-4 ring-primary/20",
    pending: "border-2 border-border bg-card text-muted-foreground",
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/[0.1]">
        {/* header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="ozzo-eyebrow text-[10px] text-muted-foreground">Ravi K. · today&apos;s beat</p>
            <p className="ozzo-display mt-1 text-2xl text-foreground">
              3 <span className="text-lg text-muted-foreground">/ 6 stops</span>
            </p>
          </div>
          <span className="rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-bold text-success">
            50% covered
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-[#e246d9]" />
        </div>

        {/* itinerary */}
        <ol className="relative mt-6 space-y-4">
          <span className="absolute left-[13px] top-3 bottom-3 w-px bg-border" aria-hidden />
          {stops.map((s) => (
            <li key={s.name} className="relative flex items-center gap-3.5">
              <span
                className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${marker[s.status]} ${
                  s.status === "next" ? "animate-float" : ""
                }`}
              >
                {s.status === "done" && <Check className="h-4 w-4" strokeWidth={3} />}
                {s.status === "skip" && <X className="h-4 w-4" strokeWidth={3} />}
                {s.status === "next" && <Navigation className="h-3.5 w-3.5" />}
              </span>
              <div
                className={`flex-1 rounded-xl border px-3 py-2 ${
                  s.status === "next"
                    ? "border-primary/30 bg-primary-soft"
                    : "border-border bg-card-2"
                }`}
              >
                <p className="text-[13px] font-bold text-foreground">{s.name}</p>
                <p
                  className={`text-[11px] ${
                    s.status === "skip"
                      ? "font-semibold text-warning"
                      : "text-muted-foreground"
                  }`}
                >
                  {s.sub}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-5 rounded-xl bg-muted px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
          A skip needs a reason — no outlet quietly drops off the beat.
        </p>
      </div>

      {/* floating chip */}
      <div className="absolute -right-3 top-8 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl shadow-black/[0.1] animate-float" style={{ animationDelay: "1s" }}>
        <p className="ozzo-eyebrow text-[9px] text-muted-foreground">Missed last week</p>
        <p className="text-sm font-extrabold text-success">0 outlets</p>
      </div>
    </div>
  );
}
