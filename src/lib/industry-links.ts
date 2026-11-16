/**
 * Which comparison pages to surface on each industry page.
 *
 * Industry pages previously linked only to the generic /compare hub. That wastes
 * the strongest internal links on the site: Google uses internal linking to work
 * out which pages belong to the same topic and to pass authority between them,
 * and a link whose anchor text is "Compare" tells it nothing. Google Search
 * Console shows these pages already earning impressions for real buyer queries
 * ("agri input dealer software", "paint dealer management software") while
 * sitting at position 23 — low authority, not low relevance — so linking them to
 * the specific competitor page a buyer in that trade would actually search is
 * one of the few ranking levers available on-site.
 *
 * Keyed by the `sector` field on Industry, so a new industry inherits the right
 * set automatically and nothing has to be mapped per slug.
 */
export const SECTOR_COMPARISONS: Record<string, string[]> = {
  "FMCG & Consumer Goods": ["ozzo-vs-bizom", "ozzo-vs-beatroute", "ozzo-vs-fieldassist"],
  Agriculture: ["ozzo-vs-fieldassist", "ozzo-vs-unolo", "ozzo-vs-delta-sales-app"],
  "Pharma & Healthcare": ["ozzo-vs-massist", "ozzo-vs-fieldassist", "ozzo-vs-delta-sales-app"],
  "Building Materials": ["ozzo-vs-delta-sales-app", "ozzo-vs-unolo", "ozzo-vs-trackolap"],
  "Auto, Lubricants & Electricals": ["ozzo-vs-beatroute", "ozzo-vs-delta-sales-app", "ozzo-vs-unolo"],
  "Pipes & Fittings": ["ozzo-vs-delta-sales-app", "ozzo-vs-unolo", "ozzo-vs-fieldsense"],
};

/** Falls back to the broadest three when a sector has no explicit mapping. */
export const DEFAULT_COMPARISONS = [
  "ozzo-vs-fieldassist",
  "ozzo-vs-unolo",
  "ozzo-vs-zoho",
];

export const comparisonsForSector = (sector: string): string[] =>
  SECTOR_COMPARISONS[sector] ?? DEFAULT_COMPARISONS;

/* ────────────────────────────────────────────────────────────────────────── */

/**
 * Which category guides to surface on each industry and sector page.
 *
 * Separate from SECTOR_COMPARISONS above because it solves a different problem.
 * Those links point sideways, at competitor comparisons. These point upwards, at
 * the two pillar pages that carry the site's commercial search demand.
 *
 * WHY this exists: Search Console for the 90 days to 14 Nov 2026 shows
 * /fmcg-software earning 333 impressions and /whatsapp-crm 118, for a combined
 * 451 — and ZERO clicks between them, at an average position around 37. The
 * pages are relevant enough that Google keeps surfacing them and too weak to
 * rank. Nothing on the site linked to either from the 28 industry pages, which
 * are its largest body of topically related content, so the strongest internal
 * signal available was going unused.
 *
 * Anchors are written to match how buyers actually search ("FMCG distribution
 * software", "WhatsApp CRM software" are both live queries in that same report),
 * because an anchor of "Learn more" passes relevance for nothing.
 *
 * Honesty rule, deliberately enforced by keying on sector: /fmcg-software is a
 * guide to FMCG sales and distribution, so only trades that genuinely run that
 * motion link to it, and they do so with an anchor that describes what the
 * reader will find. A pharma or pipes page linking to it under an "FMCG" anchor
 * would be the kind of exact-match stuffing that earns a penalty rather than a
 * ranking.
 */
export type CategoryGuide = { href: string; anchor: string };

/** Relevant to every field-sales trade, so every sector gets these. */
const UNIVERSAL_GUIDES: CategoryGuide[] = [
  { href: "/whatsapp-crm", anchor: "WhatsApp CRM software" },
  { href: "/salesman-location-tracking-software", anchor: "Salesman location tracking app" },
];

/** Added on top of the universal two, for the trades they actually describe. */
const SECTOR_ONLY_GUIDES: Record<string, CategoryGuide[]> = {
  "FMCG & Consumer Goods": [
    { href: "/fmcg-software", anchor: "FMCG distribution software" },
  ],
  // Agri input dealers run the same distributor-and-beat motion as FMCG, so the
  // guide is genuinely useful here — but the anchor says "distributor", not
  // "FMCG", because that is what an agri reader is looking for.
  Agriculture: [
    { href: "/fmcg-software", anchor: "Distributor management software" },
  ],
};

export const guidesForSector = (sector: string): CategoryGuide[] => [
  ...(SECTOR_ONLY_GUIDES[sector] ?? []),
  ...UNIVERSAL_GUIDES,
];
