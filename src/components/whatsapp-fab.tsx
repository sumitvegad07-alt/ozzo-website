"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { brand, contact } from "@/lib/site";
import { floatingChatText, waLink } from "@/lib/whatsapp";
import { COOKIE_NOTICE_OPEN_ATTR, COOKIE_NOTICE_DISMISSED_EVENT } from "./cookie-notice";
import { WhatsAppGlyph } from "./whatsapp-glyph";

/**
 * The floating "chat with us on WhatsApp" button, shown on every page.
 *
 * ── Why a fixed button at all ─────────────────────────────────────────────
 * The site already links to WhatsApp from the footer, the contact page and
 * the form's thank-you screen — all of which require the visitor to have
 * already decided to get in touch and then go looking. Most never do. A
 * persistent button turns "I'll ask later" into one tap at the moment the
 * question occurs, which is the whole reason it exists.
 *
 * ── Stacking ──────────────────────────────────────────────────────────────
 * z-[80] is deliberate and sits below the two other fixed layers:
 *   z-[100] exit-intent modal  — must cover this; it is asking for the same
 *                                lead and two competing CTAs is worse than one
 *   z-[90]  cookie notice      — a full-width bottom bar
 *   z-[80]  this button
 *
 * The cookie bar would otherwise sit directly on top of the button, so the
 * button lifts above it while it is open. It reads the same `<html>` dataset
 * attribute + dismissed event that <ExitIntentPopup/> already uses, rather
 * than inventing a second mechanism or re-reading localStorage (which a
 * blocked-storage browser would answer wrongly — see the note in
 * cookie-notice.tsx).
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const [cookieBarOpen, setCookieBarOpen] = useState(false);
  // Held back until after hydration so the button animates in rather than
  // appearing mid-paint, and so the first render matches the server's.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setCookieBarOpen(
      document.documentElement.dataset[COOKIE_NOTICE_OPEN_ATTR] === "open",
    );
    const onDismissed = () => setCookieBarOpen(false);
    window.addEventListener(COOKIE_NOTICE_DISMISSED_EVENT, onDismissed);

    const t = setTimeout(() => setShown(true), 600);
    return () => {
      window.removeEventListener(COOKIE_NOTICE_DISMISSED_EVENT, onDismissed);
      clearTimeout(t);
    };
  }, []);

  const href = waLink(floatingChatText(pathname));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // The accessible name says what happens AND to whom. "WhatsApp" alone
      // tells a screen-reader user nothing about where the link goes.
      aria-label={`Chat with ${brand.name} on WhatsApp at ${contact.whatsappDisplay}`}
      data-testid="whatsapp-fab"
      onClick={() => {
        // Best-effort funnel signal. GA may be blocked or not yet loaded;
        // the click must never depend on it, so this is guarded and silent.
        try {
          const w = window as unknown as {
            gtag?: (...args: unknown[]) => void;
          };
          w.gtag?.("event", "whatsapp_click", {
            event_category: "engagement",
            event_label: pathname,
          });
        } catch {
          /* analytics is never allowed to break a lead's click */
        }
      }}
      className={cn(
        "group fixed right-4 z-[80] flex items-center gap-0 rounded-full",
        "bg-[#25D366] text-white shadow-lg shadow-black/20",
        "transition-all duration-300 ease-out",
        "hover:bg-[#1ebe5b] hover:shadow-xl hover:shadow-black/25",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40",
        // Never ends up in a printed page or PDF of the site.
        "print:hidden",
        // Lifted clear of the cookie bar while that is on screen. The two
        // offsets differ because the bar stacks to two rows on phones.
        cookieBarOpen ? "bottom-36 sm:bottom-24" : "bottom-5 sm:bottom-6",
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <WhatsAppGlyph className="h-7 w-7" />
      </span>
      {/*
        The label expands on hover on pointer devices only. On a phone there is
        no hover state and screen width is scarce, so the button stays a plain
        circle there — `max-w-0` collapses it with no layout shift, and
        `md:` keeps it off touch screens entirely.
      */}
      <span
        aria-hidden
        className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-[max-width,padding] duration-300 ease-out md:block md:group-hover:max-w-[12rem] md:group-hover:pr-6"
      >
        Chat with us
      </span>
    </a>
  );
}
