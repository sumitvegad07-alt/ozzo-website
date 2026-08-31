import { Fingerprint, MapPin, Check, Battery, Navigation } from "lucide-react";

/**
 * Illustrative Workforce visual — a live map strip with attendance and a
 * Tracking Health chip. Not a screenshot, not a data claim.
 */
export function WfaVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.07]">
        {/* map */}
        <div className="ozzo-grid relative h-44 bg-primary-soft text-primary/25">
          {/* route path */}
          <svg viewBox="0 0 400 176" className="absolute inset-0 h-full w-full" aria-hidden>
            <path
              d="M40 150 C120 120 140 70 210 70 S330 40 360 26"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeDasharray="2 8"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <span className="absolute left-8 top-[130px] flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3 w-3 rounded-full bg-success/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <span className="absolute left-[195px] top-[58px] rounded-md bg-card px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
            Ganesh Stores
          </span>
          <MapPin className="absolute right-9 top-4 h-5 w-5 text-primary" />
          <span className="absolute bottom-3 left-4 rounded-full bg-card px-2.5 py-1 text-[10px] font-semibold text-foreground shadow-sm">
            Beat · 6 of 9 visited
          </span>
        </div>

        <div className="space-y-3 p-4">
          {/* attendance */}
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
              <Fingerprint className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Punched in · 07:40</p>
              <p className="text-[10px] text-muted-foreground">Selfie + GPS verified</p>
            </div>
            <Check className="h-4 w-4 text-success" />
          </div>

          {/* tracking health */}
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Navigation className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Tracking Health</p>
              <p className="text-[10px] text-muted-foreground">GPS on · permission granted</p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-success">
              <Battery className="h-3.5 w-3.5" /> 82%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
