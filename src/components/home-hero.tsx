"use client";

import { useEffect, useRef } from "react";
import {
  Fingerprint,
  MapPin,
  ShoppingCart,
  IndianRupee,
  Check,
  WifiOff,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Container, PrimaryCTA, SecondaryCTA } from "@/components/ui";
import { CountUp } from "@/components/count-up";
import { brand } from "@/lib/site";
import { productStats } from "@/lib/content";

/**
 * Home hero — the same words and links as before, now with a staggered
 * entrance, a phone "field glimpse" whose floating cards drift with the
 * cursor (mouse parallax), and a violet glow that follows the pointer.
 *
 * Copy and CTAs are unchanged; only the presentation is new. All motion
 * is disabled under prefers-reduced-motion (globals.css collapses the
 * CSS keyframes; the pointer effects below bail out).
 */
export function HomeHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }
    const root = rootRef.current;
    const scene = sceneRef.current;
    const glow = glowRef.current;
    if (!root) return;
    const depthEls = scene
      ? Array.from(scene.querySelectorAll<HTMLElement>("[data-depth]"))
      : [];
    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const apply = () => {
      raf = 0;
      if (glow) {
        glow.style.transform = `translate(-50%, 0) translate(${tx * 60}px, ${ty * 40}px)`;
      }
      for (const el of depthEls) {
        const d = Number(el.dataset.depth || 20);
        el.style.transform = `translate(${tx * -d}px, ${ty * -d}px)`;
      }
    };
    const reset = () => {
      if (glow) glow.style.transform = "translate(-50%, 0)";
      for (const el of depthEls) el.style.transform = "";
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", reset);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden pt-32 md:pt-40">
      <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
      <div
        ref={glowRef}
        style={{ transform: "translate(-50%, 0)" }}
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[820px] rounded-full bg-primary/15 blur-[130px] transition-transform duration-300 ease-out"
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                CRM · Workforce · Field Sales — one platform
              </div>
            </div>

            <h1
              className="ozzo-display animate-fade-up max-w-2xl text-[2.75rem] leading-[1.03] text-foreground sm:text-6xl md:text-[4.1rem]"
              style={{ animationDelay: "90ms" }}
            >
              Run the whole field day on{" "}
              <span className="ozzo-gradient-text">one app</span>.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {brand.name}{" "}unifies your CRM, your on-ground workforce and your
              sales &amp; distribution into a single system — a web dashboard for
              managers and a mobile app for reps. Outstanding, stock and reports
              keep themselves, with{" "}
              <span className="font-semibold text-foreground">
                no accounting software to bolt on.
              </span>
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "270ms" }}
            >
              <PrimaryCTA href="/book-demo">Book a free demo</PrimaryCTA>
              <SecondaryCTA href="#story">See how the day flows</SecondaryCTA>
            </div>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground"
              style={{ animationDelay: "360ms" }}
            >
              <span className="flex items-center gap-1.5">
                <WifiOff className="h-4 w-4 text-success" /> Works fully offline
              </span>
              <span className="flex items-center gap-1.5">
                <Monitor className="h-4 w-4 text-primary" /> Web dashboard
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-primary" /> Mobile app
                <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                  iOS soon
                </span>
              </span>
            </div>
          </div>

          {/* Visual — floating field glimpse with mouse parallax */}
          <div
            ref={sceneRef}
            className="animate-fade-up relative mx-auto aspect-[4/5] w-full max-w-sm"
            style={{ animationDelay: "220ms" }}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />

            {/* phone frame */}
            <div
              data-depth="8"
              className="absolute inset-x-8 inset-y-2 rounded-[2.2rem] border border-border bg-card shadow-2xl shadow-black/[0.10] [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)] animate-float"
            >
              <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-border" />
              <div className="space-y-3 p-4">
                <div className="ozzo-grid relative h-28 overflow-hidden rounded-2xl bg-primary-soft text-primary/25">
                  <div className="absolute left-4 top-6 flex items-center gap-1.5 text-primary">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 [animation:ozzo-pulse-ring_2s_ease-out_infinite]" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    </span>
                  </div>
                  <MapPin className="absolute bottom-4 right-6 h-5 w-5 text-primary" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-card px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
                    Route · 6 of 9 done
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
                    <Fingerprint className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-foreground">Punched in · 07:40</p>
                    <p className="text-[10px] text-muted-foreground">Selfie + GPS verified</p>
                  </div>
                  <Check className="h-4 w-4 text-success" />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-card-2 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <ShoppingCart className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-foreground">Order #1042</p>
                    <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <WifiOff className="h-2.5 w-2.5" /> Captured offline · synced
                    </p>
                  </div>
                  <span className="text-xs font-bold text-foreground">₹18,400</span>
                </div>
              </div>
            </div>

            {/* floating outstanding card */}
            <div
              data-depth="42"
              className="absolute -right-1 top-10 w-40 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.10] [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="animate-float">
                <p className="ozzo-eyebrow text-[10px] text-muted-foreground">Outstanding</p>
                <p className="mt-1 flex items-center gap-1 text-lg font-extrabold text-foreground">
                  <IndianRupee className="h-4 w-4" />1,20,500
                </p>
                <p className="text-[10px] font-medium text-success">↓ updated on collection</p>
              </div>
            </div>

            {/* floating DSR chip */}
            <div
              data-depth="26"
              className="absolute -left-2 bottom-14 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl shadow-black/[0.10] [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="animate-float" style={{ animationDelay: "1.2s" }}>
                <p className="text-[10px] font-semibold text-foreground">DSR · auto-built</p>
                <p className="text-[10px] text-muted-foreground">visits · orders · km</p>
              </div>
            </div>
          </div>
        </div>

        {/* honest product counters */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-3 divide-x divide-border rounded-3xl border border-border bg-card/70 py-7 shadow-sm backdrop-blur md:mt-20"
          style={{ animationDelay: "420ms" }}
        >
          {productStats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <div className="ozzo-display text-3xl text-foreground md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-2 max-w-[9rem] text-xs text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
