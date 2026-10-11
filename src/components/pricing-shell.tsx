"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { billingTerms, TERM_LABEL, type BillingTerm } from "@/lib/plans";

/**
 * Billing-period switcher for the plans page.
 *
 * CURRENCY IS NOT A CHOICE. India sees INR, everywhere else sees USD, decided
 * by the visitor's location — see <CurrencyScript/> below. There is deliberately
 * no currency toggle: an Indian buyer should never be shown a dollar price.
 *
 * WHY THE PRICES ARE STILL ALL IN THE HTML: every rate for both currencies and
 * all three terms is server-rendered, and CSS reveals the one pair a visitor
 * should see. Googlebot, GPTBot, ClaudeBot and PerplexityBot all crawl from US
 * IP addresses, so geo-gating the markup would hide the rupee price from every
 * client we need to read it, and "how much does OZZO cost" would stay
 * unanswerable in AI results. Everyone — crawler and human — is served byte-for
 * byte the same HTML, so this is presentation, not cloaking, and the JSON-LD
 * states both currencies outright.
 */
export function PricingShell({ children }: { children: React.ReactNode }) {
  const [term, setTerm] = useState<BillingTerm>("yearly");

  return (
    <div data-term={term} className="pricing-scope">
      <div className="mb-8 flex justify-center">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm"
        >
          {billingTerms.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={term === t}
              onClick={() => setTerm(t)}
              className={cn(
                "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
                term === t
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {TERM_LABEL[t]}
            </button>
          ))}
        </div>
      </div>
      {children}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Prices are per user, per month, billed for the period shown.{" "}
        <span data-cur-only data-c="INR">
          Excludes 18% GST.
        </span>
        <span data-cur-only data-c="USD">
          International pricing, billed in USD.
        </span>{" "}
        Smaller team? We&apos;ll still quote you.
      </p>
    </div>
  );
}

/**
 * Sets the currency before first paint, so an Indian visitor never sees a
 * dollar figure flash and an international one never sees rupees.
 *
 * It writes to <html>, which React does not own, so there is no hydration
 * mismatch and no need to make the page dynamic — /plans stays statically
 * rendered. Timezone is the signal rather than an IP lookup: it costs no
 * network round trip and is available synchronously.
 *
 * If the script never runs (JS disabled, or a crawler that does not execute
 * it), the attribute is absent and the CSS falls back to INR — the right
 * default for the primary market, and the price we most want indexed.
 */
export function CurrencyScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          "try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone||'';" +
          "document.documentElement.setAttribute('data-ozzo-currency'," +
          "/^Asia\\/(Kolkata|Calcutta)$/.test(t)?'INR':'USD')}catch(e){}",
      }}
    />
  );
}
