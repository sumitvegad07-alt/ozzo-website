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
