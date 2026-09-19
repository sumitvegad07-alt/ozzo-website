"use client";

import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

type Industry = { name: string; icon: string };

/**
 * Interactive industries grid — each tile is a 3D flip card (front: icon +
 * name on a clean card; back: a glowing gradient face) that turns on hover,
 * and the whole grid staggers in on scroll. Matches the reference site's
 * "flipping tiles" pattern; content (names + icons) is unchanged.
 */
export function IndustryTiles({ items }: { items: Industry[] }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((ind, i) => (
        <Reveal key={ind.name} delay={i * 60} variant="up" className="[perspective:1200px]">
          <div className="group h-36 w-full [perspective:1200px]">
            <div className="relative h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:group-hover:[transform:none]">
              {/* front */}
              <div className="absolute inset-0 flex flex-col items-start justify-between rounded-2xl border border-border bg-card p-5 shadow-sm [backface-visibility:hidden]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-snug text-foreground">
                  {ind.name}
                </span>
              </div>
              {/* back */}
              <div
                className="absolute inset-0 flex flex-col items-start justify-between overflow-hidden rounded-2xl p-5 text-white shadow-[0_20px_44px_-18px_rgba(124,58,237,0.85)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "linear-gradient(135deg,#2563eb,#7c3aed,#e246d9)" }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-snug">
                  {ind.name}
                  <span className="mt-1 block text-[11px] font-medium text-white/80">
                    Field-ready with OZZO
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
