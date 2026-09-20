"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icon";

type Step = { icon: string; time: string; title: string; body: string };

/**
 * Sticky stacked-steps — a dark-band variant of the home page's stacked
 * cards, for a sequence like the rep's field day. Each step pins and the
 * next rises over it, shrinking the one behind. Content is unchanged.
 */
export function StackedSteps({ items }: { items: Step[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {items.map((s, i) => (
        <StepCard key={s.title} step={s} index={i} />
      ))}
    </div>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 180px", "end 240px"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.5]);
  const top = 120 + index * 16;

  return (
    <div ref={ref} className="sticky pb-6" style={{ top }}>
      <motion.article
        style={reduce ? undefined : { scale, opacity }}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#141225]/90 p-7 backdrop-blur-xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] md:p-9"
      >
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{ backgroundImage: "linear-gradient(100deg,#5ea1ff,#a855f7,#ec5fe6)" }}
        />
        <div className="flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-[#c4b5fd]">
            <Icon name={step.icon} className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#c4b5fd]">
                Step {index + 1}
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/75">
                {step.time}
              </span>
            </div>
            <h3 className="ozzo-display mt-2 text-2xl text-white md:text-3xl">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65">{step.body}</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
