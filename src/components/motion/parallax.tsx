"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Scroll-linked parallax. As the element travels through the viewport its
 * content drifts vertically by ±`speed` px, tied to scroll progress — the
 * ambient "depth" motion behind hero glows and section visuals.
 *
 * Purely decorative: wrap glow blobs or illustrative visuals, never the
 * SEO-critical copy. Honors prefers-reduced-motion (renders static).
 */
export function Parallax({
  children,
  speed = 60,
  className,
  offset,
}: {
  children: React.ReactNode;
  /** Total travel in px across the scroll window (positive = starts lower). */
  speed?: number;
  className?: string;
  /** Optional extra horizontal drift in px. */
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const x = useTransform(scrollYProgress, [0, 1], [offset ?? 0, -(offset ?? 0)]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : ({ y, x } as { y: MotionValue<number>; x: MotionValue<number> })}
      className={className}
    >
      {children}
    </motion.div>
  );
}
