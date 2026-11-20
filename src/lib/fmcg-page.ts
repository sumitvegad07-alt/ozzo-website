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
    name: "Distributor self-service ordering (DMS)",
    what: "Your distributors, stockists and dealers get their own browser login and place their own orders.",
    question: "Can my distributor order without my staff retyping it?",
    ozzo: "full",
    note: "A separate add-on product, live at dms.ozzo.co.in. Priced per login, and there is nothing for the distributor to install.",
  },
  {
    name: "Distributor dispatch",
    what: "A distributor raises sales orders for their own shops and dispatches them from their own queue.",
    question: "Can I see what my distributor is selling onward, as it happens?",
    ozzo: "full",
    note: "Part of the DMS add-on. It records the dispatch — it does not track the delivery vehicle or capture proof of delivery.",
  },
  {
    name: "Trade levels, schemes & price lists",
    what: "Distributor, dealer and retailer levels, each with their own price list, credit limit and slab schemes.",
    question: "Does every trade level see the right price, without anyone calculating it?",
    ozzo: "full",
    note: "Pricing and scheme detection run in the database, so a portal order and a rep’s order are priced by the same logic.",
  },
  {
    name: "Secondary sales tracking",
    what: "What the distributor sells on to retailers, not just what you billed the distributor.",
    question: "Is my stock actually moving, or sitting in a godown?",
    ozzo: "partial",
    note: "You get the sales orders and dispatches a distributor raises onward, as they happen. What you do not get is a reconciled primary-versus-secondary stock view, because that needs distributor stock — see below.",
  },
  {
    name: "Collections & outstanding",
    what: "Field payment collection with outstanding that recalculates itself.",
    question: "How much is owed, by whom, and for how long?",
    ozzo: "full",
    note: "Settles against the invoice, so there is no separate accounting bolt-on to buy. Distributors can also see their own outstanding and record what their shops pay them.",
  },
  {
    name: "Your own stock & inventory",
    what: "Your closing stock derived from the order and dispatch ledger rather than typed in by hand.",
    question: "What have I actually got, and what has moved?",
    ozzo: "full",
  },
  {
    name: "Distributor godown stock & replenishment",
    what: "Holding each distributor’s own warehouse stock and suggesting their next order from a reorder level.",
    question: "What is sitting in my distributor’s warehouse right now?",
    ozzo: "none",
    note: "The expensive half of the DMS category, and OZZO does not ship it. If stock-based replenishment across your network is the reason you are buying, an enterprise distribution suite is the right product.",
  },
  {
    name: "Claims management",
    what: "Damage, scheme, freight and rate-difference claims raised and settled in the system.",
    question: "Can my distributors raise claims without emailing me?",
    ozzo: "none",
    note: "Not in OZZO. Planned, not built, so not sold — your distributors raise these with you the way they do now.",
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
    a: "You need both jobs done; the question is whether you buy them from two vendors. SFA runs your own field team — attendance, GPS, beats and the orders your reps take. A DMS gives your distributors and dealers their own login so they order themselves and you can see what they sell onward. Large FMCG brands often buy two specialist systems and maintain the integration between them. With OZZO they are one database with two doors, so a rep’s order and a distributor’s portal order are the same kind of record and there is nothing to keep in step.",
  },
  {
    q: "Does an FMCG order booking app work without internet?",
    a: "It has to. Orders are taken at the counter, often in markets with poor signal. OZZO captures the order offline with current prices and schemes applied, and syncs it when the connection returns — so the rep never loses an order or has to write it on paper and re-enter it later.",
  },
  {
    q: "How much does FMCG software cost in India?",
    a: "OZZO publishes its rates: SFA is ₹300 per user per month and CRM + SFA is ₹400 per user per month on yearly billing, plus 18% GST. The DMS add-on, which gives your distributors and dealers their own ordering logins, is ₹10,000 per year for 100 logins plus GST — priced per login rather than per user, because those users are your customers and not your staff. Enterprise FMCG platforms are usually quote-based and priced for large distribution networks.",
  },
  {
    q: "Can OZZO do shelf audits and planogram compliance?",
    a: "Partly, and it is worth being clear about the limit. OZZO captures geo-tagged visit photos and in-store checklists, which covers most SME retail-execution needs. It does not do automated AI image recognition or planogram scoring — that is a genuine strength of the enterprise CPG platforms, and if it is core to your route-to-market you should buy one of those.",
  },
  {
    q: "How does OZZO cover the whole FMCG chain — rep to distributor to dispatch?",
    a: "In six steps on one database. Your rep punches in with selfie and GPS, walks a GPS-stamped beat and takes orders at the counter offline. Your distributor then signs in to a browser and places their own order on their own price list with schemes applied. They raise sales orders for their own shops, dispatch them from their own queue, and record what those shops pay. Every one of those events lands on the same customer record, so you watch the chain rather than assembling it from reports at month-end.",
  },
  {
    q: "Can my distributors place orders themselves instead of WhatsApping them?",
    a: "Yes — that is what the DMS add-on is for. You switch on access for any customer already in OZZO, give them an email and a password, and they order at dms.ozzo.co.in in an ordinary browser. There is nothing for them to install, no app store and no update to chase, which matters because trade adoption usually dies at the install step. Their order arrives already typed, priced on their own list, with their credit limit enforced and schemes detected automatically.",
  },
  {
    q: "Does OZZO track primary and secondary sales separately?",
    a: "Partly, and the limit is worth knowing. Orders are auto-tagged primary or secondary from the customer’s trade level, and when a distributor raises their onward sales orders and dispatches in the portal you see that movement as it happens. What OZZO does not give you is a reconciled primary-versus-secondary stock view, because that requires holding the distributor’s godown stock — which OZZO does not do. You get the order and dispatch flow, not the stock ledger behind it.",
  },
  {
    q: "What does OZZO not cover in an FMCG distribution setup?",
    a: "Three things, stated plainly because every enterprise suite ships them. It does not hold your distributor’s godown stock or suggest their next order from a reorder level. It does not handle claims — damage, scheme, freight or rate difference. And it does not cover the last mile: a distributor records a dispatch, but there is no delivery-person app or proof-of-delivery capture. It also does not do AI shelf-image recognition or demand forecasting. If any of those decide your purchase, buy a specialist and we will tell you so on the call.",
  },
];
