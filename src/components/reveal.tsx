"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "left" | "right" | "scale" | "blur";

/* Bolder resting (hidden) states — larger travel + a touch of blur/scale so
 * the reveal reads as a confident entrance, not a subtle nudge. */
const hidden: Record<Variant, string> = {
  up: "translate-y-12 opacity-0 blur-[2px]",
  fade: "opacity-0",
  left: "-translate-x-12 opacity-0 blur-[2px]",
  right: "translate-x-12 opacity-0 blur-[2px]",
  scale: "scale-[0.9] opacity-0 blur-[3px]",
  blur: "opacity-0 blur-[10px] scale-[0.98]",
};

/** Reveals children into view on first scroll intersection. */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  as?: React.ElementType;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none motion-reduce:duration-0",
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0 motion-reduce:blur-0"
          : hidden[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
