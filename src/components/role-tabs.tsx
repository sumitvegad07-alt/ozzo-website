"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Icon } from "./icon";

type Role = {
  role: string;
  tagline: string;
  icon: string;
  points: string[];
};

/** Accessible tab switcher for role-based benefits. Renders every panel in
 * the DOM (visually hides the inactive ones) so the copy stays crawlable
 * for search + AI engines even before JS runs. */
export function RoleTabs({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Benefits by role"
        className="mx-auto flex max-w-2xl flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm sm:flex-row"
      >
        {roles.map((r, i) => {
          const selected = i === active;
          return (
            <button
              key={r.role}
              role="tab"
              id={`role-tab-${i}`}
              aria-selected={selected}
              aria-controls={`role-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                selected
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon name={r.icon} className="h-4 w-4" />
              {r.role}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <div className="mt-8">
        {roles.map((r, i) => (
          <div
            key={r.role}
            role="tabpanel"
            id={`role-panel-${i}`}
            aria-labelledby={`role-tab-${i}`}
            hidden={i !== active}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{r.role}</h3>
                  <p className="text-sm text-muted-foreground">{r.tagline}</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
