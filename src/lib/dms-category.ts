/**
 * Content for the /distributor-management-software CATEGORY page.
 *
 * ───────────────────── WHY THIS PAGE EXISTS ─────────────────────
 *
 * "distributor management software" is declared as a target keyword in
 * `layout.tsx`, on `/fmcg-software`, on 14 industry pages and on 2 sector
 * pages — and until this page there was NO page on the site that owned it.
 * Every mention was a leaf page targeting the phrase as a secondary term
 * while competing with its own siblings for it.
 *
 * That is precisely the failure `/fmcg-software` and `/whatsapp-crm` were
 * built to fix (docs/SEO-STRATEGY.md §B4): a theme sprayed across leaves with
 * no pillar to rank. One page answers the category question, and the leaves
 * link up to it instead of at each other.
 *
 * ───────────────── IT MUST NOT BECOME /products/dms ─────────────────
 *
 * This page answers "what is a DMS, do I need one, and how do I choose".
 * `/products/dms` sells OZZO DMS. If this page drifts into a feature list the
 * two compete for the same query and both lose — the same warning that sits at
 * the top of whatsapp-crm-page.ts, for the same reason.
 *
 * The practical test when editing: a paragraph here should still be true and
 * useful if the reader ends up buying somebody else's DMS. If it is only true
 * about OZZO, it belongs on /products/dms.
 *
 * HONESTY BAR: the same as everywhere else on this site. The competitor
 * capabilities described in `dmsTiers` are category-level and true of the
 * segment, and NO competitor price appears — see the contract at the top of
 * comparisons.ts.
 */

export const dmsCategoryMeta = {
  /** 40 chars. Budget is 53 — the title template adds " — OZZO". */
  metaTitle: "Distributor Management Software India",
  metaDescription:
    "What a Distributor Management System (DMS) is, how it differs from SFA and ERP, what it should do, and how to choose one for an Indian trade network.",
  keywords: [
    "distributor management software",
    "distributor management system",
    "DMS software",
    "DMS software India",
    "what is distributor management system",
    "distributor management software for FMCG",
    "dealer management software India",
    "distributor portal software",
    "distribution management system India",
    "secondary sales management software",
  ],
};

/**
 * THE DEFINITION BLOCK — the paragraph an AI engine lifts.
 *
 * Written to stand completely alone, because that is how it gets quoted. No
 * "as we saw above", no pronoun whose antecedent is in another section, and
 * the brand is not mentioned until after the definition is complete.
 */
export const dmsDefinition = [
  "A Distributor Management System (DMS) is software that connects a brand or manufacturer to the distributors, stockists and dealers who sell its products onward. Its job is to replace the phone calls, WhatsApp messages and spreadsheets that normally carry trade orders, stock positions and outstanding balances between a company and its channel.",
  "In practice that means each trade customer gets their own login. They place their own orders against the price list and credit limit that apply to them, see what they owe, and record what they sold onward. The brand gets that information as data at the moment it happens, instead of asking for it at month-end.",
  "A DMS is not a CRM and not a sales-force app. A CRM manages the relationship with a customer your own team is selling to. A sales-force automation (SFA) app manages your own reps — their attendance, their beats, the orders they type at a counter. A DMS manages the people who are not your employees and not your end customers: the trade in between.",
];

/** The three terms buyers mix up, separated plainly. */
export const dmsVsWhat: {
  term: string;
  whose: string;
  answers: string;
  body: string;
}[] = [
  {
    term: "CRM",
    whose: "Your sales team's prospects",
    answers: "“Who might buy, and where is that deal?”",
    body: "Leads, deals, pipelines, quotations, follow-ups. The customer does not log in — your team does, to manage the pursuit. A CRM is about winning business that has not closed yet.",
  },
  {
    term: "SFA",
    whose: "Your own field staff",
    answers: "“What did my reps do today?”",
    body: "Attendance, GPS, geo-tagged visits, beat routes, orders typed at the counter, collections taken in the field. Your employees log in from a phone. SFA is about the execution of your own team's day.",
  },
  {
    term: "DMS",
    whose: "Your distributors and dealers",
    answers: "“What is my channel buying, owing and selling onward?”",
    body: "Trade logins, self-service ordering, per-customer price lists, outstanding visible to the person who owes it, and onward dispatch. The people logging in are your customers, not your staff.",
  },
];

/**
 * Signals that a business has outgrown WhatsApp-and-Tally.
 *
 * Phrased as observable symptoms rather than feature gaps, because the reader
 * does not yet know what a DMS is called — they know their order desk is
 * drowning. These are the queries that bring people to this page.
 */
export const dmsSignals: { signal: string; body: string }[] = [
  {
    signal: "Somebody retypes orders that arrived as messages",
    body: "A photo of a handwritten list, a voice note, eleven lines in a chat — read by a person on your payroll and typed in again. Every retyping is a chance for a wrong SKU, a wrong rate or a missed scheme.",
  },
  {
    signal: "Your accounts desk reads out balances on the phone",
    body: "If “how much do I owe you” is answered by a human opening a report, you are paying salary for a lookup your customer could do themselves.",
  },
  {
    signal: "Secondary sales arrives as a monthly favour",
    body: "You know what you sold the distributor. What they sold onward comes in a format nobody can total, late, and only from the distributors who bother.",
  },
  {
    signal: "Schemes get argued about after the fact",
    body: "When the scheme is applied by hand at the order desk, the distributor who was missed finds out later, and you settle it as a credit note and an awkward call.",
  },
  {
    signal: "Saturday orders ship on Tuesday",
    body: "Not because of stock, but because nothing moves until a person keys it in. Your lead time contains a queue your customer cannot see.",
  },
  {
    signal: "Your price list lives in several versions",
    body: "If a rate depends on which copy of the Excel file somebody opened, a per-customer price list enforced by software is the fix.",
  },
];

/**
 * The buyer's checklist — what to actually test on a demo.
 *
 * Written so it is useful against ANY vendor, including ours. A checklist that
 * only OZZO passes is marketing and gets discounted; one a buyer can take to
 * three demos gets cited and shared.
 */
export const dmsChecklist: { q: string; why: string }[] = [
  {
    q: "Is the order priced by the server, or by the distributor's browser?",
    why: "If the total is calculated in the browser, it can be tampered with and it can drift from your own pricing rules. Ask where the arithmetic happens.",
  },
  {
    q: "Can one distributor see another distributor's rates or customers?",
    why: "Ask them to prove it by typing another customer's id into the address bar. The answer should be enforced by the database, not by hiding a menu.",
  },
  {
    q: "Does the price list follow the individual customer?",
    why: "A single shared price list means your distributor can work out everyone else's rate — and your margin. Per-customer pricing is the point.",
  },
  {
    q: "Are schemes applied automatically on a portal order?",
    why: "If schemes are applied only when your own staff type the order, a self-service order is priced worse than a phoned-in one, and your distributors will go back to phoning.",
  },
  {
    q: "Is there anything for the distributor to install?",
    why: "Trade adoption is the whole risk. A browser link gets used; an app that needs installing, updating and a password reset often does not.",
  },
  {
    q: "What happens when a distributor forgets their password?",
    why: "Ask who resets it. If logins are email-shaped but not real mailboxes, a reset link has nowhere to go — the honest answer is that your admin sets a new one.",
  },
  {
    q: "Does it hold distributor stock, and do you need it to?",
    why: "Stock-based replenishment is the expensive half of this category. Decide before the demo whether you are buying ordering and visibility, or stock and claims — they are different products at different prices.",
  },
  {
    q: "Do claims live in the system or in your inbox?",
    why: "Damage, scheme, freight and rate-difference claims are a real workload. Many DMS tools cover them; many ordering portals do not. Ask which you are looking at.",
  },
  {
    q: "Does it share one database with your field-sales app?",
    why: "If the DMS and the SFA are separate products from separate vendors, somebody maintains an integration forever. One database means a distributor's order and a rep's order are the same kind of record.",
  },
  {
    q: "How is it priced — per login, per user, per order, or on a quote?",
    why: "Per-login pricing is predictable as your trade network grows. A quote-based enterprise contract may be right at scale, but you should know which model you are in before the first call.",
  },
];

/**
 * The segments of this market, so a reader can place themselves.
 *
 * NO PRICES — not ours in the competitor tiers, and never theirs. The
 * distinction drawn is the pricing MODEL, which is public and stable, rather
 * than a number that would be wrong within a quarter.
 */
export const dmsTiers: {
  tier: string;
  who: string;
  strengths: string[];
  watchFor: string;
}[] = [
  {
    tier: "Enterprise DMS suites",
    who: "National FMCG and CPG brands with hundreds of distributors and a dedicated channel team",
    strengths: [
      "Distributor stock with auto-replenishment and reorder levels",
      "Full claims handling — damage, scheme, freight, rate difference",
      "Primary and secondary stock reconciliation across the network",
      "Deep retail-execution tooling, often including shelf image recognition",
    ],
    watchFor:
      "Quote-based enterprise contracts, a rollout measured in months, and a feature surface that assumes a channel team to run it. Genuinely the right answer above a certain size — and heavy below it.",
  },
  {
    tier: "ERP and accounting-led distribution modules",
    who: "Businesses whose distributors already live inside an accounting or ERP system",
    strengths: [
      "Invoicing, taxation and the books in one place",
      "Familiar to the accountant who already runs it",
      "Strong on stock and billing, because that is the system's origin",
    ],
    watchFor:
      "The distributor-facing experience is usually an afterthought — these were built for your back office, not for your customer's phone. Self-service ordering is often an add-on module or not present.",
  },
  {
    tier: "Ordering portals on top of an SFA platform",
    who: "Regional brands and manufacturers with 10 to 500 trade customers",
    strengths: [
      "Self-service ordering with per-customer pricing and schemes",
      "Outstanding visible to the distributor, which removes the balance call",
      "One database shared with the field-sales app, so no integration to maintain",
      "Priced per login rather than on a quote",
    ],
    watchFor:
      "This tier is about ordering and visibility. Distributor stock, replenishment and claims are usually absent — fine if that is not what you are buying, and a deal-breaker if it is. OZZO DMS is in this tier, and says so.",
  },
];

/** FAQs — category questions, not product questions. */
export const dmsCategoryFaqs: { q: string; a: string }[] = [
  {
    q: "What is a Distributor Management System (DMS)?",
    a: "A Distributor Management System is software that connects a brand to the distributors, stockists and dealers who sell its products onward. Each trade customer gets their own login and places their own orders against the price list and credit limit that apply to them, sees what they owe, and records what they sold onward — so trade orders and balances stop travelling by phone, WhatsApp and spreadsheet.",
  },
  {
    q: "What is the difference between a DMS and an SFA?",
    a: "They manage different people. An SFA (sales force automation) app manages your own employees — attendance, GPS, beat routes, the orders a rep types at a counter. A DMS manages your distributors and dealers, who are not your employees: they log in themselves to order, to see their outstanding and to record what they sold onward. Most brands that need one eventually need both, because they cover the two halves of the same trade.",
  },
  {
    q: "What is the difference between a DMS and a CRM?",
    a: "A CRM is about business you have not won yet — leads, deals, pipelines and quotations, managed by your own team. A DMS is about the trade that already buys from you repeatedly. A CRM's users are your salespeople; a DMS's users are your customers.",
  },
  {
    q: "Do I need a DMS if I already use Tally and WhatsApp?",
    a: "Not necessarily — but there are symptoms worth checking. If somebody on your payroll retypes orders that arrived as messages, if your accounts desk reads balances out over the phone, if secondary sales arrives as a monthly favour, or if Saturday orders ship on Tuesday because of a keying queue, those are costs a DMS removes. If your trade is a handful of customers who order predictably, WhatsApp is genuinely fine.",
  },
  {
    q: "What should a DMS do at a minimum?",
    a: "Three things. Let a trade customer place their own order, priced correctly for them without your staff involved. Show that customer their own outstanding without a phone call. And land the result in your system as real data rather than as something to be re-entered. Anything a vendor shows you beyond those three is worth having, but those three are what makes it a DMS rather than an order form.",
  },
  {
    q: "Should the distributor's prices be the same as everyone else's?",
    a: "No, and this is one of the most important things to test. A single shared price list lets any distributor work out what every other distributor pays, and from there your margin. A proper DMS prices each order on that buyer's own price list and enforces their own credit limit.",
  },
  {
    q: "Do distributors actually use these portals?",
    a: "Adoption is the main risk in this category, and it hinges on friction. A browser link with a password gets used. An app that has to be found in a store, installed, updated and reset when the password is lost often does not — the order goes back to WhatsApp within a month. When you evaluate, ask what the distributor has to install, and ask who handles a forgotten password.",
  },
  {
    q: "Does a DMS track secondary sales?",
    a: "Partly, and the distinction matters. When a distributor raises their onward sales orders and dispatches inside the system, what they sold becomes data as it happens — that is the useful part, and most ordering portals deliver it. A full reconciled view of primary versus secondary stock movement needs distributor stock tracking as well, which is usually only in the enterprise suites. Ask which of the two a vendor is showing you.",
  },
  {
    q: "What does distributor management software cost in India?",
    a: "The models differ more than the numbers. Enterprise DMS suites are typically quote-based annual contracts sized to your distributor count. ERP-led distribution modules are usually priced with the ERP. Ordering portals built on an SFA platform tend to be priced per login — OZZO DMS, for example, is ₹10,000 per year for 100 distributor and dealer logins plus GST, as an add-on to a CRM or SFA plan. Ask which model a vendor uses before the first demo, because it determines what growth costs you.",
  },
  {
    q: "Can I start with ordering and add stock and claims later?",
    a: "That is the usual path, and it is the right one for most regional brands. Ordering and outstanding visibility remove a daily workload immediately and need almost no change from your distributors. Stock and claims are a bigger project that assumes your trade will keep data up to date. Start where the pain is, and be honest with yourself about which one that is.",
  },
];
