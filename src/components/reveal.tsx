"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "left" | "right" | "scale" | "blur";

const hidden: Record<Variant, string> = {
  up: "translate-y-6 opacity-0",
  fade: "opacity-0",
  left: "-translate-x-6 opacity-0",
  right: "translate-x-6 opacity-0",
  scale: "scale-[0.96] opacity-0",
  blur: "opacity-0 blur-[6px]",
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
      { threshold: 0.14, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none",
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : hidden[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
