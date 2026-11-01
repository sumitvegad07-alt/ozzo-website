import Script from "next/script";

import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google Analytics 4 (gtag.js) for the public marketing site.
 *
 * This is the standard GA snippet, loaded through `next/script` rather than a
 * raw <script> tag. Two reasons that matters:
 *
 *  1. `strategy="afterInteractive"` holds the tag back until the page is
 *     interactive, so GA never competes with the hero for the first paint.
 *     A plain `async` <script> in the document head does compete, and this
 *     site's Core Web Vitals are a GEO/SEO input we actively track.
 *  2. The App Router injects it once per document rather than re-running the
 *     inline block on every client-side navigation, which would reset
 *     `window.dataLayer`.
 *
 * Route changes still report: GA4's "Enhanced measurement" counts them as
 * page_view events from History API changes, which is on by default in the
 * property, so there is no manual router hook to maintain here.
 *
 * `dangerouslySetInnerHTML` is how `next/script` takes inline code. There is
 * no user input anywhere near it — the only interpolated value is our own
 * measurement id constant.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
