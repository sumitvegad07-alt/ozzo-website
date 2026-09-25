import { IndianRupee, TrendingUp, Check, Sparkles } from "lucide-react";
import { Icon } from "@/components/icon";
import type { Cockpit } from "@/lib/industries";

/**
 * Generic, data-driven "field cockpit" — a tailored, illustrative app glimpse
 * rendered from each industry's `cockpit` data. Not a screenshot, not a data
 * claim: an on-brand suggestion of the field app doing THAT trade's work.
 * Every industry supplies its own rows/chips, so each reads as built for it.
 */

const ACCENT = "linear-gradient(100deg,#5ea1ff 0%,#a855f7 48%,#ec5fe6 100%)";

const rowTile: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  success: "bg-success/15 text-success",
  amber: "bg-amber-500/12 text-amber-500",
};

const badgeClass: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-600",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
};

function BadgeIcon({ tone }: { tone?: string }) {
  if (tone === "success") return <Check className="h-3 w-3" strokeWidth={3} />;
  if (tone === "primary") return <Sparkles className="h-3 w-3" />;
  return <TrendingUp className="h-3 w-3" />;
}

/** Render a value that may start with ₹ using the rupee glyph. */
function Value({ value }: { value: string }) {
  if (value.startsWith("₹")) {
    return (
      <span className="flex items-center text-sm font-bold text-foreground">
        <IndianRupee className="h-3 w-3" />
        {value.slice(1)}
      </span>
    );
  }
  return <span className="text-sm font-bold text-foreground">{value}</span>;
}

export function IndustryCockpit({ cockpit }: { cockpit: Cockpit }) {
  return (
    /* pt/pb are the gutters the floating chips live in, so they never cover
       card content (header badge / meter). `animate-float` lifts them 10px,
       which the gutters account for. */
    <div className="relative mx-auto w-full max-w-md pt-12 pb-12">
      <div className="pointer-events-none absolute inset-x-0 inset-y-12 -z-10 rounded-[3rem] bg-gradient-to-br from-[#7c3aed]/40 to-[#2563eb]/10 blur-2xl" />

      <div className="rounded-[1.75rem] border border-white/10 bg-card p-4 shadow-2xl shadow-black/40">
        <div className="mb-3 flex items-center justify-between px-1">
          <span className="text-xs font-bold text-foreground">{cockpit.header}</span>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary">
            {cockpit.headerBadge}
          </span>
        </div>

        <div className="space-y-3">
          {cockpit.rows.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card-2 p-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${rowTile[r.tone ?? "primary"]}`}
                >
                  <Icon name={r.icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-foreground">{r.title}</p>
                  <p className="truncate text-[10px] text-muted-foreground">{r.subtitle}</p>
                </div>
                {r.check ? (
                  <Check className="h-4 w-4 text-success" />
                ) : r.value ? (
                  <Value value={r.value} />
                ) : null}
              </div>
              {r.badge && (
                <div
                  className={`mt-2 flex items-center gap-1.5 rounded-lg px-2 py-1 text-[10px] font-semibold ${badgeClass[r.badgeTone ?? "amber"]}`}
                >
                  <BadgeIcon tone={r.badgeTone} /> {r.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        {cockpit.meter && (
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-card-2 px-3 py-2.5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {cockpit.meter.label}
              </p>
              <p className="flex items-center text-sm font-bold text-foreground">
                <Value value={cockpit.meter.value} />
                {cockpit.meter.sub && (
                  <span className="ml-1 text-[10px] font-medium text-muted-foreground">
                    {cockpit.meter.sub}
                  </span>
                )}
              </p>
            </div>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${Math.max(0, Math.min(100, cockpit.meter.fillPct))}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {cockpit.chips?.[0] && (
        <div
          className="animate-float absolute right-0 top-0 max-w-[68%] rounded-2xl p-3 text-white shadow-[0_20px_50px_-16px_rgba(124,58,237,0.9)]"
          style={{ backgroundImage: ACCENT }}
        >
          <p className="text-[10px] font-bold uppercase leading-tight tracking-wide text-white/85">
            {cockpit.chips[0].label}
          </p>
          <p className="mt-0.5 text-xs font-semibold leading-tight">
            {cockpit.chips[0].sub}
          </p>
        </div>
      )}
      {cockpit.chips?.[1] && (
        /* Solid dark surface, not bg-white/10: this chip overlaps the LIGHT
           card, where white-on-white text was unreadable. */
        <div
          className="animate-float absolute bottom-0 left-0 max-w-[68%] rounded-2xl border border-white/15 bg-ink/90 px-3 py-2 text-white shadow-xl shadow-black/40 backdrop-blur-md"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-[10px] font-semibold leading-tight">
            {cockpit.chips[1].label}
          </p>
          <p className="text-[10px] leading-tight text-white/70">
            {cockpit.chips[1].sub}
          </p>
        </div>
      )}
    </div>
  );
}
