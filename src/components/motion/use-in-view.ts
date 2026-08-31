"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. `inView` flips true the first time the element is
 * ~25% visible and (by default) stays true — used to start scroll-triggered
 * animations once. Honours prefers-reduced-motion by reporting true
 * immediately so components can render their final/static state.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  opts: { once?: boolean; threshold?: number } = {},
) {
  const { once = true, threshold = 0.25 } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return [ref, inView] as const;
}

/** True when the user prefers reduced motion (client-only; false during SSR). */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduced;
}
