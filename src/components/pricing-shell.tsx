/**
 * Wrapper for the plans page.
 *
 * CURRENCY IS NOT A CHOICE. India sees INR, everywhere else sees USD, decided
 * by the visitor's location — see <CurrencyScript/> below. There is deliberately
 * no currency toggle: an Indian buyer should never be shown a dollar price.
 *
 * WHY BOTH PRICES ARE STILL IN THE HTML: each plan's rate is server-rendered in
 * both currencies and CSS reveals the right one. Googlebot, GPTBot, ClaudeBot
 * and PerplexityBot all crawl from US IP addresses, so geo-gating the markup
 * would hide the rupee price from every client we need to read it, and "how
 * much does OZZO cost" would stay unanswerable in AI results. Everyone —
 * crawler and human — is served byte-for-byte the same HTML, so this is
 * presentation, not cloaking, and the JSON-LD states both currencies outright.
 *
 * The billing-period switcher that used to live here is gone (1 Nov 2026).
 * It multiplied every plan's price by three in the markup, and a crawler reads
 * markup rather than CSS: Perplexity consequently reported OZZO's pricing as
 * "incomplete and inconsistent across OZZO's own pages" and told readers to
 * treat it as quote-based. One rate per plan now. Half-yearly and quarterly
 * are still real in the quoting engine; sales states them.
 *
 * No hooks remain, so this is a server component and the prices ship in the
 * first HTML response rather than after hydration.
 */
export function PricingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="pricing-scope">
      {children}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Prices are per user, per month, billed yearly.{" "}
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
