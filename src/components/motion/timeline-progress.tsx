"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * The vertical spine of the "day in the field" timeline. A faint static
 * track with a violet fill that draws downward as the section scrolls
 * through the viewport — the day "filling in" as you read it.
 *
 * Drop-in for the old static line: takes the same positioning className.
 */
export function TimelineProgress({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={className} aria-hidden>
      <div className="absolute inset-0 rounded-full bg-white/15" />
      {!reduce && (
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute inset-0 rounded-full bg-gradient-to-b from-primary via-primary to-primary/30 shadow-[0_0_12px_rgba(124,58,237,0.6)]"
        />
      )}
    </div>
  );
}
