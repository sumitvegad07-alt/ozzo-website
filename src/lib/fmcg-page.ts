/**
 * Content for the /fmcg-software pillar page.
 *
 * WHY THIS PAGE EXISTS: Search Console shows FMCG is the site's single
 * strongest non-brand theme — "fmcg software solutions", "fmcg retail
 * software", "fmcg distribution software", "fmcg order booking app" and four
 * more, roughly 48 impressions and zero clicks over three months. Nothing on
 * the site targets those terms. The two existing FMCG pages
 * (/industries/fmcg-companies and /industries/fmcg-consumer-goods) both target
 * "field sales software for FMCG…", which is a different and narrower intent.
 *
 * So this is the category pillar — what FMCG software IS and how to choose it —
 * and the two industry pages are its spokes. It must stay distinct from them:
 * if it drifts into "field sales software for FMCG" the three pages compete
 * with each other and all three lose.
 *
 * HONESTY BAR (same as every other page): every OZZO claim is a shipped
 * capability, and `limits` states plainly what OZZO does not do. Overclaiming
 * against the enterprise FMCG suites is the fastest way to lose a deal in
 * week three of an evaluation.
 */

export type FmcgModule = {
  name: string;
  what: string;
  /** The buyer-side question this module answers. */
  question: string;
  ozzo: "full" | "partial" | "none";
  note?: string;
};

export const fmcgModules: FmcgModule[] = [
  {
    name: "Sales Force Automation (SFA)",
    what: "Attendance, GPS, beat routes and geo-tagged visits for the field team.",
    question: "Where were my reps today, and did they cover the beat?",
    ozzo: "full",
  },
  {
    name: "Order booking",
    what: "Order capture at the counter, offline, with live prices and schemes applied.",
    question: "Can my rep take an order where there is no signal?",
    ozzo: "full",
    note: "Captured offline and synced when signal returns — not a form that fails at the counter.",
  },
  {
    name: "Secondary sales tracking",
    what: "What the distributor sells on to retailers, not just what you billed the distributor.",
    question: "Is my stock actually moving, or sitting in a godown?",
    ozzo: "full",
  },
  {
    name: "Distributor management (DMS)",
    what: "Distributor, dealer and retailer trade levels with their own price lists and schemes.",
    question: "Does every trade level see the right price?",
    ozzo: "full",
  },
  {
    name: "Collections & outstanding",
    what: "Field payment collection with outstanding that recalculates itself.",
    question: "How much is owed, by whom, and for how long?",
    ozzo: "full",
    note: "Settles against the invoice, so there is no separate accounting bolt-on to buy.",
  },
  {
    name: "Stock & inventory",
    what: "Closing stock derived from the ledger rather than typed in by hand.",
    question: "What is actually on the shelf at each distributor?",
    ozzo: "full",
  },
  {
    name: "Trade schemes & price lists",
    what: "Slab schemes, free-goods offers and customer-specific pricing.",
    question: "Will the right scheme apply without the rep calculating it?",
    ozzo: "full",
  },
  {
    name: "Retail execution / shelf audits",
    what: "Planogram compliance and share-of-shelf measurement in store.",
    question: "Is my product displayed the way I paid for?",
    ozzo: "partial",
    note: "OZZO captures geo-tagged visit photos and checklists. It does not do automated planogram scoring.",
  },
  {
    name: "AI image recognition",
    what: "A photo of the shelf scored automatically for facings and compliance.",
    question: "Can a photo replace a manual shelf audit?",
    ozzo: "none",
    note: "A genuine strength of the enterprise CPG platforms. OZZO does not ship it.",
  },
  {
    name: "Demand forecasting",
    what: "Predicting sell-through to plan production and primary dispatch.",
    question: "How much should I produce next month?",
    ozzo: "none",
    note: "Enterprise territory. OZZO reports what happened; it does not forecast what will.",
  },
];

export const fmcgFaqs = [
  {
    q: "What is FMCG software?",
    a: "FMCG software is the set of systems a fast-moving consumer goods brand uses to run sales and distribution: a Sales Force Automation (SFA) app for the field team, order booking at the retail counter, distributor management (DMS) for trade levels and schemes, secondary-sales visibility, and collections against outstanding. Smaller brands usually buy these as one platform; large CPG companies often run several specialist systems together.",
  },
  {
    q: "What is the difference between primary and secondary sales in FMCG?",
    a: "Primary sales are what you bill the distributor. Secondary sales are what the distributor sells on to retailers. Primary numbers can look healthy while stock sits unsold in a distributor's godown, so secondary-sales visibility is the figure that tells you whether your product is genuinely moving.",
  },
  {
    q: "Do I need a separate DMS and SFA?",
    a: "Large FMCG brands often run both, because their distributor networks are big enough to need a dedicated distribution system. Most SME and regional brands do not — one platform that covers field sales, order booking, trade levels, schemes and collections is simpler to run and far cheaper than stitching two systems together.",
  },
  {
    q: "Does an FMCG order booking app work without internet?",
    a: "It has to. Orders are taken at the counter, often in markets with poor signal. OZZO captures the order offline with current prices and schemes applied, and syncs it when the connection returns — so the rep never loses an order or has to write it on paper and re-enter it later.",
  },
  {
    q: "How much does FMCG software cost in India?",
    a: "OZZO publishes its rates: SFA is ₹300 per user per month and CRM + SFA is ₹400 per user per month on yearly billing, plus 18% GST, with a minimum order of ₹5,000. Enterprise FMCG platforms are usually quote-based and priced for large distribution networks.",
  },
  {
    q: "Can OZZO do shelf audits and planogram compliance?",
    a: "Partly, and it is worth being clear about the limit. OZZO captures geo-tagged visit photos and in-store checklists, which covers most SME retail-execution needs. It does not do automated AI image recognition or planogram scoring — that is a genuine strength of the enterprise CPG platforms, and if it is core to your route-to-market you should buy one of those.",
  },
];
