"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

type Chapter = {
  n: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  stat: { value: string; label: string };
};

/**
 * Sticky stacked-cards scroll effect (the FieldAssist "cards stack on top of
 * each other" pattern). Each chapter pins near the top as you scroll and the
 * next card rises over it, shrinking the one behind so the stack reads as depth.
 * Content is unchanged — only the presentation is scroll-driven.
 */
export function StackedChapters({ items }: { items: Chapter[] }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      {items.map((c, i) => (
        <StackCard key={c.n} card={c} index={i} />
      ))}
    </div>
  );
}

function StackCard({ card, index }: { card: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 160px", "end 220px"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.55]);
  // Each card pins a little lower than the last so the stack "peeks".
  const top = 104 + index * 18;

  return (
    <div ref={ref} className="sticky pb-8" style={{ top }}>
      <motion.article
        style={reduce ? undefined : { scale, opacity }}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] md:p-12"
      >
        {/* gradient top rail */}
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ backgroundImage: "linear-gradient(100deg,#5ea1ff,#a855f7,#ec5fe6)" }}
        />
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* left: number + stat */}
          <div className="md:col-span-5">
            <div className="ozzo-eyebrow text-primary">{card.kicker}</div>
            <div className="ozzo-display mt-1 text-8xl leading-none text-primary/15 md:text-[10rem]">
              {card.n}
            </div>
            <div
              className="mt-6 inline-flex flex-col rounded-2xl p-5 text-white shadow-[0_18px_40px_-18px_rgba(124,58,237,0.8)]"
              style={{ backgroundImage: "linear-gradient(120deg,#2563eb,#7c3aed,#d946ef)" }}
            >
              <span className="ozzo-display text-4xl md:text-5xl">{card.stat.value}</span>
              <span className="mt-1 max-w-[13rem] text-sm text-white/85">
                {card.stat.label}
              </span>
            </div>
          </div>

          {/* right: copy */}
          <div className="md:col-span-7">
            <h3 className="ozzo-display text-3xl text-foreground md:text-[2.4rem] md:leading-[1.1]">
              {card.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {card.body}
            </p>
            <ul className="mt-7 space-y-4">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
