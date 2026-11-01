"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ozzo_cookie_notice_ack";

/**
 * The event fired when the notice is dismissed, and the `<html>` attribute set
 * while it is on screen. Together they are the contract <ExitIntentPopup/> uses
 * to stay out of the way — see the note there.
 *
 * The attribute is read rather than storage because it is always accurate: if a
 * browser blocks localStorage the notice still shows, and a storage-based check
 * would wrongly report it hidden and let the lead modal open on top of it.
 */
export const COOKIE_NOTICE_OPEN_ATTR = "cookieNotice";
export const COOKIE_NOTICE_DISMISSED_EVENT = "ozzo:cookie-notice-dismissed";

/**
 * A one-time cookie notice, fixed to the bottom of the screen.
 *
 * This is a NOTICE, not a consent gate: analytics runs either way. That is a
 * deliberate decision for an India-first audience, and it is why the button
 * reads "Got it" rather than "Accept" — an Accept button would claim a
 * permission the site does not actually wait for. If the site ever needs real
 * EU consent, this component is where the gate goes, and the Cookie Policy
 * wording has to change with it.
 *
 * Dismissal is remembered in localStorage, not sessionStorage: a cookie notice
 * that returns every time the visitor opens a new tab is just nagging. (The
 * exit-intent popup deliberately uses sessionStorage for the opposite reason.)
 */
export function CookieNotice() {
  const [open, setOpen] = useState(false);

  // Nothing renders until this effect has checked storage, so a returning
  // visitor never sees the bar flash on screen before it is dismissed again.
  useEffect(() => {
    let acknowledged = false;
    try {
      acknowledged = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage blocked — show the notice rather than silently skipping it */
    }
    if (acknowledged) return;

    setOpen(true);
    document.documentElement.dataset[COOKIE_NOTICE_OPEN_ATTR] = "open";
    return () => {
      delete document.documentElement.dataset[COOKIE_NOTICE_OPEN_ATTR];
    };
  }, []);

  if (!open) return null;

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage blocked — the notice returns next visit, which is the safe way to fail */
    }
    delete document.documentElement.dataset[COOKIE_NOTICE_OPEN_ATTR];
    setOpen(false);
    window.dispatchEvent(new Event(COOKIE_NOTICE_DISMISSED_EVENT));
  }

  return (
    // z-[90] keeps this under the exit-intent modal's z-[100]. The two should
    // never be on screen together, but if they ever are, the modal wins.
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-card/95 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use cookies to count visits and see which pages are read.{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold text-foreground underline underline-offset-4 hover:text-primary"
          >
            Read our Cookie Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="w-full shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
