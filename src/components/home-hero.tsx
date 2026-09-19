"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Fingerprint,
  MapPin,
  ShoppingCart,
  IndianRupee,
  Check,
  WifiOff,
  Monitor,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { CountUp } from "@/components/count-up";
import { brand } from "@/lib/site";
import { productStats } from "@/lib/content";

/**
 * Home hero — dark, glowing, "command-centre" treatment (the bold direction
 * the reference site set). Same words, links and stats as before; the light
 * phone glimpse pops against a navy ground with drifting aurora glow, a
 * glowing gradient stat card, mouse-parallax depth and a staggered entrance.
 *
 * Motion is disabled under prefers-reduced-motion (globals.css collapses the
 * CSS keyframes; the pointer handlers below bail out on reduce/coarse pointers).
 */

/* Bright gradient used on the accent word + primary button (blue→violet→magenta). */
const ACCENT = "linear-gradient(100deg,#5ea1ff 0%,#a855f7 48%,#ec5fe6 100%)";

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
    const apply = () => {
      raf = 0;
      if (glow) glow.style.transform = `translate(${tx * 46}px, ${ty * 32}px)`;
      for (const el of depthEls) {
        const d = Number(el.dataset.depth || 20);
        el.style.transform = `translate(${tx * -d}px, ${ty * -d}px)`;
      }
    };
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const reset = () => {
      if (glow) glow.style.transform = "";
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
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-ink pt-32 pb-24 text-white md:pt-40 md:pb-28"
    >
      {/* grid + aurora glow field */}
      <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
      <div ref={glowRef} className="pointer-events-none absolute inset-0 [transition:transform_.4s_ease-out]">
        <div className="animate-drift-a absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-[#2563eb]/25 blur-[130px]" />
        <div className="animate-drift-b absolute right-0 -top-16 h-[560px] w-[560px] rounded-full bg-[#7c3aed]/30 blur-[140px]" />
        <div className="animate-drift-c absolute left-1/3 top-40 h-[460px] w-[460px] rounded-full bg-[#e246d9]/20 blur-[150px]" />
      </div>
      {/* fade into the light page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a855f7] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a855f7]" />
                </span>
                CRM · Workforce · Field Sales — one platform
              </div>
            </div>

            <h1
              className="ozzo-display animate-fade-up max-w-2xl text-[2.75rem] leading-[1.03] sm:text-6xl md:text-[4.1rem]"
              style={{ animationDelay: "90ms" }}
            >
              Run the whole field day on{" "}
              <span
                style={{
                  backgroundImage: ACCENT,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                one app
              </span>
              .
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {brand.name}{" "}unifies your CRM, your on-ground workforce and your
              sales &amp; distribution into a single system — a web dashboard for
              managers and a mobile app for reps. Outstanding, stock and reports
              keep themselves, with{" "}
              <span className="font-semibold text-white">
                no accounting software to bolt on.
              </span>
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "270ms" }}
            >
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.8)] transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: ACCENT, backgroundSize: "200% 100%", animation: "ozzo-sheen 6s linear infinite" }}
              >
                Book a free demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40"
              >
                See how the day flows
              </Link>
            </div>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/60"
              style={{ animationDelay: "360ms" }}
            >
              <span className="flex items-center gap-1.5">
                <WifiOff className="h-4 w-4 text-[#37e0a0]" /> Works fully offline
              </span>
              <span className="flex items-center gap-1.5">
                <Monitor className="h-4 w-4 text-[#a855f7]" /> Web dashboard
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-[#a855f7]" /> Mobile app
                <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/80">
                  iOS soon
                </span>
              </span>
            </div>
          </div>

          {/* Visual — light phone that pops on the dark ground */}
          <div
            ref={sceneRef}
            className="animate-fade-up relative mx-auto aspect-[4/5] w-full max-w-sm"
            style={{ animationDelay: "220ms" }}
          >
            <div className="pointer-events-none absolute inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#7c3aed]/50 to-[#2563eb]/10 blur-2xl" />

            {/* phone frame */}
            <div
              data-depth="10"
              className="absolute inset-x-8 inset-y-2 rounded-[2.2rem] border border-white/10 bg-card shadow-2xl shadow-black/40 [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)] animate-float"
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

            {/* glowing gradient stat card (the FieldAssist-style floating figure) */}
            <div
              data-depth="46"
              className="absolute -right-2 top-8 w-44 rounded-2xl p-3.5 text-white shadow-[0_20px_50px_-16px_rgba(124,58,237,0.9)] [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)]"
              style={{ backgroundImage: ACCENT }}
            >
              <div className="animate-float">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">Outstanding</p>
                <p className="mt-1 flex items-center gap-1 text-xl font-extrabold">
                  <IndianRupee className="h-4 w-4" />1,20,500
                </p>
                <p className="text-[10px] font-medium text-white/85">↓ updated on every collection</p>
              </div>
            </div>

            {/* glass DSR chip */}
            <div
              data-depth="28"
              className="absolute -left-3 bottom-14 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur-md shadow-xl shadow-black/30 [transition:transform_.35s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="animate-float" style={{ animationDelay: "1.2s" }}>
                <p className="text-[10px] font-semibold">DSR · auto-built</p>
                <p className="text-[10px] text-white/60">visits · orders · km</p>
              </div>
            </div>
          </div>
        </div>

        {/* honest product counters — dark glass strip */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/[0.04] py-7 backdrop-blur md:mt-20"
          style={{ animationDelay: "420ms" }}
        >
          {productStats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <div className="ozzo-display text-3xl text-white md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-2 max-w-[9rem] text-xs text-white/55 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
