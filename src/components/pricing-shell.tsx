"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  billingTerms,
  TERM_LABEL,
  type BillingTerm,
  type Currency,
} from "@/lib/plans";

/**
 * Currency + billing-term switcher for the plans page.
 *
 * WHY THIS SHAPE: every price for every currency and term is rendered into the
 * HTML by the server (see <PlanPrice/>), and this component only flips two data
 * attributes on the wrapper. CSS in globals.css reveals the matching one.
 *
 * That matters for more than tidiness. Googlebot, GPTBot, ClaudeBot and
 * PerplexityBot all crawl from US IP addresses. Any design that fetches or
 * geo-gates the price would hide it from exactly the clients we most want to
 * read it, and "how much does OZZO cost" would stay unanswerable in AI results.
 * Rendering the full matrix and hiding with CSS keeps all 30 prices crawlable
 * while each visitor still sees one.
 *
 * The default is INR, so India — the primary market — and every crawler get the
 * rupee price with no flash of the wrong currency. Visitors outside India are
 * switched to USD on mount, detected from the browser's own timezone rather
 * than an IP lookup: it needs no network call and does not force the page out
 * of static rendering.
 */
export function PricingShell({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [term, setTerm] = useState<BillingTerm>("yearly");

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
      if (!/^Asia\/(Kolkata|Calcutta)$/.test(tz)) setCurrency("USD");
    } catch {
      /* Keep INR if the browser will not report a timezone. */
    }
  }, []);

  return (
    <div data-currency={currency} data-term={term} className="pricing-scope">
      <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Switch<BillingTerm>
          label="Billing period"
          options={billingTerms.map((t) => ({ value: t, label: TERM_LABEL[t] }))}
          value={term}
          onChange={setTerm}
        />
        <Switch<Currency>
          label="Currency"
          options={[
            { value: "INR", label: "₹ INR" },
            { value: "USD", label: "$ USD" },
          ]}
          value={currency}
          onChange={setCurrency}
        />
      </div>
      {children}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Prices are per user, per month, billed for the period shown.{" "}
        <span data-price-note data-c="INR">
          Excludes 18% GST.
        </span>
        <span data-price-note data-c="USD">
          International pricing, billed in USD.
        </span>{" "}
        Smaller team? We&apos;ll still quote you.
      </p>
    </div>
  );
}

function Switch<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
            value === o.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
