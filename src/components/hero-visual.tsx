import {
  Fingerprint,
  MapPin,
  ShoppingCart,
  IndianRupee,
  Check,
  WifiOff,
} from "lucide-react";

/**
 * Illustrative, brand-styled product glimpse for the hero — not a
 * screenshot and not a data claim. Suggests the field flow (attendance,
 * a route, an order, outstanding) with floating cards.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
      {/* soft bloom behind */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />

      {/* phone frame */}
      <div className="absolute inset-x-8 inset-y-2 rounded-[2.2rem] border border-border bg-card shadow-2xl shadow-black/[0.08]">
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-border" />
        <div className="space-y-3 p-4">
          {/* map-ish strip */}
          <div className="ozzo-grid relative h-28 overflow-hidden rounded-2xl bg-primary-soft text-primary/25">
            <div className="absolute left-4 top-6 flex items-center gap-1.5 text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>
            <MapPin className="absolute bottom-4 right-6 h-5 w-5 text-primary" />
            <span className="absolute bottom-3 left-4 rounded-full bg-card px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
              Route · 6 of 9 done
            </span>
          </div>

          {/* attendance row */}
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

          {/* order row */}
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <ShoppingCart className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Order #1042</p>
              <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <WifiOff className="h-2.5 w-2.5" /> Captured offline · synced
              </p>
            </div>
            <span className="text-xs font-bold text-foreground">₹18,400</span>
          </div>
        </div>
      </div>

      {/* floating outstanding card */}
      <div className="absolute -right-1 top-10 w-40 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.08] animate-float">
        <p className="ozzo-eyebrow text-[10px] text-muted-foreground">Outstanding</p>
        <p className="mt-1 flex items-center gap-1 text-lg font-extrabold text-foreground">
          <IndianRupee className="h-4 w-4" />1,20,500
        </p>
        <p className="text-[10px] font-medium text-success">↓ updated on collection</p>
      </div>

      {/* floating DSR chip */}
      <div
        className="absolute -left-2 bottom-14 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl shadow-black/[0.08] animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <p className="text-[10px] font-semibold text-foreground">DSR · auto-built</p>
        <p className="text-[10px] text-muted-foreground">visits · orders · km</p>
      </div>
    </div>
  );
}
