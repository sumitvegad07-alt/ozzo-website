import Link from "next/link";
import { ArrowRight, Eye, X } from "lucide-react";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./reveal";
import { Icon } from "./icon";
import {
  tradeChainStages,
  chainActors,
  chainIntro,
  chainNotCovered,
} from "@/lib/trade-chain";

/**
 * The CRM + SFA + DMS story, rendered identically on the home page and on
 * /fmcg-software. Only the `variant` changes the framing copy — see the note
 * at the top of src/lib/trade-chain.ts for why the two pages share the stages
 * but not the intro.
 *
 * Dark section on both pages: it is the narrative centrepiece, and the actor
 * handover at stage 04 is the thing a reader should remember.
 */
export function TradeChain({ variant }: { variant: "home" | "fmcg" }) {
  const intro = chainIntro[variant];

  return (
    <section
      id="trade-chain"
      className="relative overflow-hidden bg-ink py-24 text-white md:py-32"
    >
      <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
      <div className="animate-drift-a pointer-events-none absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-[#10b981]/20 blur-[150px]" />
      <div className="animate-drift-b pointer-events-none absolute -right-24 top-1/3 h-[480px] w-[480px] rounded-full bg-[#0ea5e9]/20 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#7834e8]/20 blur-[140px]" />

      <Container className="relative z-10">
        {/* ── Heading ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Eyebrow center className="text-primary">
            {intro.eyebrow}
          </Eyebrow>
          <h2 className="ozzo-display mt-4 text-4xl md:text-5xl">
            {intro.title}{" "}
            <span className="ozzo-gradient-text">{intro.titleAccent}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            {intro.body}
          </p>
        </div>

        {/* ── The three actors ── */}
        <div className="mx-auto mb-14 grid max-w-4xl gap-3 sm:grid-cols-3">
          {(["rep", "distributor", "you"] as const).map((key, i) => {
            const a = chainActors[key];
            return (
              <Reveal key={key} delay={i * 70}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${a.dotClass}`}
                    aria-hidden
                  />
                  <div>
                    <p className={`text-sm font-bold ${a.toneClass}`}>
                      {a.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-white/55">
                      {a.where}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── The six stages ── */}
        <div className="mx-auto max-w-4xl space-y-3">
          {tradeChainStages.map((s, i) => {
            const a = chainActors[s.actor];
            const handover =
              i > 0 && tradeChainStages[i - 1].actor !== s.actor;
            return (
              <div key={s.step}>
                {/* The actor changing is the point of the story, so it is
                    marked rather than left for the reader to notice. */}
                {handover && (
                  <Reveal>
                    <div
                      className="my-5 flex items-center gap-3"
                      aria-hidden
                    >
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white/60">
                        Hands over to {a.label.toLowerCase()}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                    </div>
                  </Reveal>
                )}

                <Reveal delay={i * 40}>
                  <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-white/20 md:grid-cols-[1.45fr_0.55fr]">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2.5">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07] ${a.toneClass}`}
                        >
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <span className="ozzo-display text-xl text-white/25">
                          {s.step}
                        </span>
                        <span
                          className={`rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold ${a.toneClass}`}
                        >
                          {a.label}
                        </span>
                        <span className="rounded-full border border-white/15 px-2 py-0.5 font-mono text-[10px] font-bold text-white/55">
                          {s.line}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                        {s.body}
                      </p>
                    </div>

                    {/* What reaches the office the moment it happens. */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.05] p-4 md:border-l md:border-white/10">
                      <Eye
                        className="mt-0.5 h-4 w-4 shrink-0 text-violet-300"
                        aria-hidden
                      />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-violet-300">
                          You see
                        </p>
                        <p className="mt-1 text-xs leading-snug text-white/70">
                          {s.youSee}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* ── Where the chain stops ── */}
        <Reveal>
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="ozzo-display text-xl text-white">
              And where the chain stops
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Said here rather than discovered in week three. These are exactly
              what the enterprise distribution suites are for, and if one of
              them is why you are buying, we will tell you so on the call.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {chainNotCovered.map((n) => (
                <div key={n.title} className="flex gap-2.5">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/30"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-bold text-white/85">{n.title}</p>
                    <p className="mt-1 text-xs leading-snug text-white/50">
                      {n.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Links out to the three products ── */}
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              { href: "/products/sfa", label: "Sales Force Automation" },
              { href: "/products/dms", label: "Distributor Management" },
              { href: "/products/crm", label: "CRM" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40"
              >
                {l.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
