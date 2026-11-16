/**
 * Thin wrapper around GA4's `gtag`, for the public marketing site.
 *
 * Every call here is best-effort and silent. Analytics must never be able to
 * break a lead's journey: `gtag` is absent when the tag has not loaded yet,
 * when an ad blocker removed it, during SSR, and in tests. So every entry
 * point guards for `window`, optional-chains the call, and swallows throws.
 *
 * Why a helper rather than inline `window.gtag` at each call site: the
 * cast-and-guard dance is four lines of noise, and when it was inlined the
 * form simply never got it — the site ran for weeks recording 0 conversions
 * while the WhatsApp button alone reported. One place to call means one place
 * to get right.
 */

type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return (window as unknown as { gtag?: GtagFn }).gtag;
  } catch {
    return undefined;
  }
}

/** Send a GA4 event. Never throws, never returns a failure. */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  try {
    gtag()?.("event", name, params);
  } catch {
    /* analytics is never allowed to break the page */
  }
}

/**
 * The site's single conversion: a visitor handed over their contact details.
 *
 * GA4 names this `generate_lead` by convention, which matters — it is one of
 * GA4's recommended events, so the property reports it without custom setup
 * and it can be marked a key event in Admin with one click.
 *
 * `value` is deliberately a flat 1 rather than a rupee figure. We do not know
 * what a lead is worth at submit time, and a wrong number pollutes every
 * revenue report downstream; 1 keeps "count of leads" and "value" the same
 * series, which is what the funnel reports actually want.
 */
export function trackLead(fields: {
  pagePath: string;
  teamSize?: string;
  hasCompany?: boolean;
  hasMessage?: boolean;
}): void {
  trackEvent("generate_lead", {
    currency: "INR",
    value: 1,
    form_location: fields.pagePath,
    // Team size is the single best quality signal we collect at the form:
    // it maps directly onto seats, and therefore onto deal size.
    team_size: fields.teamSize || "unspecified",
    has_company: Boolean(fields.hasCompany),
    has_message: Boolean(fields.hasMessage),
  });
}

/** A click on any WhatsApp call-to-action. `placement` says which one. */
export function trackWhatsAppClick(placement: string, pagePath: string): void {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: pagePath,
    placement,
  });
}
