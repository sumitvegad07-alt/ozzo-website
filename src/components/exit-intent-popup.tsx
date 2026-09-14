"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Check } from "lucide-react";
import { InquiryForm } from "./inquiry-form";

const SESSION_KEY = "ozzo_exit_intent_shown";

/** Pages where a lead form already dominates — don't interrupt there. */
const SUPPRESSED = ["/book-demo", "/contact"];

const VALUE_PROPS = [
  "Real-time field tracking with GPS & selfie attendance",
  "Orders, collections & auto-outstanding in one flow",
  "WhatsApp CRM with an AI assistant, built in",
  "Works fully offline — syncs on its own",
];

/**
 * A once-per-session lead-capture modal that appears on exit intent.
 *
 * Triggers (whichever fires first, after a short arming delay):
 *   - desktop: the cursor leaves through the top of the viewport
 *   - any device: 60% scroll depth, or a 35s dwell fallback
 *
 * It never reappears in the same tab session once shown or dismissed.
 */
export function ExitIntentPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (SUPPRESSED.includes(pathname)) return;

    let shown = false;
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") shown = true;
    } catch {
      /* storage blocked — treat as not shown */
    }
    if (shown) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    function trigger() {
      if (shown || !armed) return;
      shown = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
      cleanup();
    }

    function onMouseOut(e: MouseEvent) {
      // Cursor left through the top edge and isn't entering another element.
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    }
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) trigger();
    }

    const dwellTimer = window.setTimeout(trigger, 35000);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(armTimer);
      window.clearTimeout(dwellTimer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, [pathname]);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/20">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-border hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left — value props */}
          <div className="relative hidden overflow-hidden bg-ink p-8 text-white md:block">
            <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.06]" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-primary/30 blur-[80px]" />
            <div className="relative">
              <p className="ozzo-eyebrow text-primary">Before you go</p>
              <h2 className="ozzo-display mt-3 text-3xl leading-tight">
                Let&apos;s have a quick talk.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Two minutes on a call is worth an hour of clicking around. See OZZO
                run on your own field workflow.
              </p>
              <ul className="mt-7 space-y-3.5">
                {VALUE_PROPS.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-6 sm:p-7">
            <div className="mb-4 md:hidden">
              <p className="ozzo-eyebrow text-primary">Before you go</p>
              <h2 id="exit-intent-title" className="ozzo-display mt-2 text-2xl text-foreground">
                Let&apos;s have a quick talk.
              </h2>
            </div>
            <p id="exit-intent-title-desktop" className="mb-3 hidden text-sm font-semibold text-foreground md:block">
              Request a callback — we&apos;ll show you OZZO on your workflow.
            </p>
            <InquiryForm compact />
          </div>
        </div>
      </div>
    </div>
  );
}
