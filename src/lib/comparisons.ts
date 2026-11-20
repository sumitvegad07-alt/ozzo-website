/**
 * Data-driven "OZZO vs X" comparison pages.
 *
 * HONESTY CONTRACT (do not break — it is what makes these pages trusted by
 * buyers AND cited by AI search engines):
 *   1. Concede each competitor's genuine strengths plainly. A page where the
 *      rival looks worthless reads as marketing and gets discounted by AI.
 *   2. NEVER state a competitor's exact price. Their pricing is quote-based or
 *      changes; a wrong number is a legal + trust risk. Position OZZO on
 *      affordability, transparency and integration — not on false "cheapest"
 *      superlatives.
 *   3. Every OZZO claim must be grounded in shipped capability
 *      (OZZO_FEATURE_MASTER_CATALOG.md) — the same bar as the rest of the site.
 *   4. "Choose them if…" must be real: send genuinely enterprise/CPG-scale
 *      buyers to the specialist. That honesty is what earns the SME buyers.
 *
 * Competitor facts are sourced from public review directories (Capterra, G2,
 * SoftwareSuggest, GetApp, Software Advice) and vendor sites, as of Sep 2026.
 */

import { DMS_PRICE_INR, DMS_SEATS } from "./site";

export type CompareValue = "yes" | "partial" | "no";

export type CompareRow = {
  capability: string;
  ozzo: CompareValue;
  them: CompareValue;
  /** Short, fair clarification shown under the row. */
  note?: string;
};

export type Comparison = {
  /** URL slug: /compare/<slug> */
  slug: string;
  competitor: string;
  /** One-line category label, e.g. "Enterprise SFA for FMCG & CPG". */
  competitorCategory: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Honest one-line framing shown in the hero. */
  tagline: string;
  /** 2–3 sentence quotable verdict (AI extracts this). */
  verdict: string;
  bestForThem: string;
  bestForOzzo: string;
  /** Genuine competitor strengths — conceded plainly. */
  theirStrengths: string[];
  /** Where OZZO wins, with substance. */
  ozzoWins: { title: string; body: string }[];
  /** Capability matrix. */
  table: CompareRow[];
  chooseThemIf: string[];
  chooseOzzoIf: string[];
  /** Honest pricing framing — no competitor numbers. */
  pricingNote: string;
  faqs: { q: string; a: string }[];
};

/**
 * The DMS row that every comparison carries.
 *
 * READ THIS BEFORE CHANGING THE WORDING. The obvious row to write here was
 * "distributor ordering portal: OZZO yes / them no", and it would have been
 * FALSE on at least four of these pages. Researched 2026-11-20: BeatRoute
 * ships a B2B customer app, a retailer app AND a dealer app; Bizom ships a
 * Retailer App plus a WhatsApp ordering bot; Marg ships eRetail, where a
 * retailer orders and sees their distributor-wise outstanding; SalesDiary
 * ships a Dealer App. Claiming they have no portal would have been the kind
 * of error the honesty contract at the top of this file exists to prevent —
 * and the kind an AI engine discounts a whole page for.
 *
 * So the row compares the one thing that is true of every vendor here and
 * independently checkable: NONE of them publishes a per-login price for it.
 * Theirs are quoted. Ours is a number on a public page. That is a real and
 * defensible difference, and it concedes their capability in the note.
 *
 * `them: "partial"` rather than `"no"` for exactly that reason: the capability
 * is often there, the published price is not.
 */
const dmsPortalRow: CompareRow = {
  capability: "Distributor & dealer portal at a published per-login price",
  ozzo: "yes",
  them: "partial",
  note: `Several vendors here do ship a retailer or distributor ordering app — that capability is not the difference. None of them publishes a price for it; it is quoted per deployment. OZZO DMS is ₹${DMS_PRICE_INR.toLocaleString("en-IN")} a year for ${DMS_SEATS} distributor and dealer logins, stated publicly and added to any plan.`,
};

/** Rows shared by the three pure-SFA comparisons (Bizom, BeatRoute, FieldAssist). */
const sfaBaseRows: CompareRow[] = [
  { capability: "Field attendance, GPS & geo-tagged visits", ozzo: "yes", them: "yes" },
  { capability: "Beat / route planning", ozzo: "yes", them: "yes" },
  { capability: "Offline order capture", ozzo: "yes", them: "yes" },
  { capability: "Field payment collection & auto-outstanding", ozzo: "yes", them: "partial", note: "Most SFA tools capture orders; OZZO also settles collections against a self-calculating outstanding, with no accounting bolt-on." },
  { capability: "Built-in CRM (leads, deals, pipelines)", ozzo: "yes", them: "no", note: "These are Sales Force Automation tools — the front-office CRM is a separate purchase." },
  { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "no" },
  { capability: "Branded PDF quotations & documents", ozzo: "yes", them: "partial" },
  { capability: "Trade levels, schemes & price lists", ozzo: "yes", them: "yes" },
  { capability: "Transparent per-user pricing (no enterprise contract)", ozzo: "yes", them: "no", note: "Competitor pricing is quote-based / enterprise-contract." },
  { capability: "AI image recognition / perfect-store shelf audits", ozzo: "no", them: "yes", note: "A genuine strength of the enterprise CPG specialists — OZZO does not ship planogram image recognition." },
  dmsPortalRow,
];

/** Rows for tracking-first field-force apps (Unolo, FieldSense) — strong on
 *  attendance/GPS, lighter on the front-office CRM and sell-collect-distribute flow. */
const trackingFirstRows: CompareRow[] = [
  { capability: "Live GPS tracking & selfie / geo attendance", ozzo: "yes", them: "yes" },
  { capability: "Geo-verified visits & beat planning", ozzo: "yes", them: "yes" },
  { capability: "Expenses & travel / conveyance claims", ozzo: "yes", them: "yes" },
  { capability: "Custom forms & data collection", ozzo: "yes", them: "yes" },
  { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "partial", note: "Tracking-first apps focus on the field; a full front-office CRM pipeline is usually lighter or absent." },
  { capability: "Offline order capture, dispatch & branded PDF", ozzo: "yes", them: "partial" },
  { capability: "Field payment collection & self-calculating outstanding", ozzo: "yes", them: "no" },
  { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "no" },
  { capability: "Distributor / dealer / retailer trade levels, schemes & price lists", ozzo: "yes", them: "no" },
  { capability: "11 built-in reports + per-rep Daily Sales Report", ozzo: "yes", them: "partial" },
  dmsPortalRow,
];

export const comparisons: Comparison[] = [
  // ─────────────────────────────────────────── BIZOM
  {
    slug: "ozzo-vs-bizom",
    competitor: "Bizom",
    competitorCategory: "Enterprise SFA for FMCG & CPG",
    metaTitle: "OZZO vs Bizom — affordable SFA for SMEs",
    metaDescription:
      "Bizom is a heavyweight enterprise SFA for large FMCG brands. OZZO is the all-in-one CRM, field sales and WhatsApp platform for Indian SMEs.",
    keywords: ["OZZO vs Bizom", "Bizom alternative", "Bizom alternative India", "affordable SFA software", "SME sales force automation", "Bizom competitor"],
    tagline: "Bizom is enterprise-grade FMCG software. OZZO is the all-in-one CRM + field sales platform SMEs can actually run — without an enterprise rollout.",
    verdict:
      "Bizom is one of India's largest sales-force-automation platforms, built for big FMCG and CPG brands with deep merchandising, AI ordering and trade-promotion needs. OZZO is built for small and mid-sized businesses that want field-sales visibility, order capture, collections, a CRM and a WhatsApp inbox in one affordable system — without an enterprise contract or a heavy rollout. If you run a national CPG brand, look at Bizom; if you run a growing SME or MSME field team, OZZO fits the way you already work.",
    bestForThem: "Large FMCG / CPG brands, 100s–1000s of outlets",
    bestForOzzo: "SMEs & MSMEs, 5–200 field reps",
    theirStrengths: [
      "Proven at scale — 750+ brands, 35+ countries, billions in GMV flowing through it",
      "Deep FMCG capabilities: AI suggested ordering, beat optimisation, trade-promotion & claims management",
      "Smart merchandising and market-survey tooling for large distribution networks",
      "Strong distributor / order management praised by enterprise customers",
    ],
    ozzoWins: [
      { title: "CRM + field sales + WhatsApp in one", body: "Bizom is pure SFA — you would still buy and integrate a separate CRM and messaging tool. OZZO puts leads, deals, a shared WhatsApp inbox with an AI assistant, field tracking, orders and collections on one customer record and one login." },
      { title: "Built for SMEs, not enterprise rollouts", body: "Smaller distributors often find an enterprise SFA heavier than they need. OZZO deploys in days, not a multi-month implementation project, and a small team can run it without a dedicated admin." },
      { title: "No accounting bolt-on", body: "Every order and collection updates outstanding and stock automatically — no Tally/ERP integration to keep the numbers right." },
      { title: "Transparent, affordable per-user pricing", body: "Straightforward per-user pricing matched to your team size and plan, with no long enterprise lock-in — quoted on a quick demo call." },
    ],
    table: sfaBaseRows,
    chooseThemIf: [
      "You are a large FMCG/CPG brand with hundreds or thousands of outlets",
      "You need AI image-recognition shelf audits and heavy trade-promotion management",
      "You have the budget and team for an enterprise implementation",
    ],
    chooseOzzoIf: [
      "You are an SME or MSME with a field team of 5–200 reps",
      "You want CRM, WhatsApp and field sales in one system, not three",
      "You want to go live in days with transparent pricing and no lock-in",
    ],
    pricingNote:
      "Bizom is priced as an enterprise contract, quoted per deployment. OZZO uses simple per-user pricing matched to your team size and plan — quoted on a short demo call, with no long-term lock-in. For most SME field teams OZZO's total cost is materially lower, because there is no separate CRM, messaging tool or accounting integration to buy alongside it.",
    faqs: [
      { q: "Is OZZO a good Bizom alternative for small businesses?", a: "Yes. Bizom is built for large FMCG brands; OZZO is built for SMEs and MSMEs. If you have a field team of 5–200 reps and want CRM, WhatsApp and field sales in one affordable system, OZZO is designed for exactly that, without an enterprise rollout." },
      { q: "What does OZZO include that Bizom doesn't?", a: "A built-in CRM (leads, deals, pipelines), a shared WhatsApp inbox with an AI assistant, and self-calculating outstanding and stock — so you don't buy a separate CRM, messaging tool or accounting integration alongside your SFA." },
      { q: "Where is Bizom the better choice?", a: "For large CPG brands that need AI image-recognition shelf audits, deep trade-promotion management and merchandising across thousands of outlets, an enterprise specialist like Bizom is the stronger fit." },
    ],
  },

  // ─────────────────────────────────────────── BEATROUTE
  {
    slug: "ozzo-vs-beatroute",
    competitor: "BeatRoute",
    competitorCategory: "AI retail-execution SFA",
    metaTitle: "OZZO vs BeatRoute — the SME alternative",
    metaDescription:
      "BeatRoute is a goal-driven AI retail-execution platform for larger brands. OZZO is the all-in-one CRM, field sales and WhatsApp platform for SMEs.",
    keywords: ["OZZO vs BeatRoute", "BeatRoute alternative", "BeatRoute alternative India", "retail execution software SME", "affordable SFA", "BeatRoute competitor"],
    tagline: "BeatRoute is a goal-driven AI platform for retail execution. OZZO is the affordable all-in-one CRM + field sales system for SMEs.",
    verdict:
      "BeatRoute is a well-regarded, goal-driven AI platform for retail sales and distribution, used by large consumer brands across Asia, Africa and the Middle East, with fast deployment and strong route/visit planning. OZZO targets smaller teams that want field visibility, orders and collections plus a CRM and WhatsApp inbox in one affordable login. Choose BeatRoute for large-brand retail execution; choose OZZO for an SME field team that wants everything in one place.",
    bestForThem: "Mid-to-large consumer brands & their retail networks",
    bestForOzzo: "SMEs & MSMEs wanting CRM + field sales in one",
    theirStrengths: [
      "Goal-driven AI that actively nudges reps, distributors and retailers toward targets",
      "Strong territory segmentation and configurable visit planning",
      "Fast go-live — deployable in weeks",
      "Trusted by large brands (Colgate-Palmolive, Perfetti Van Melle, JSW Paints and others) and rated 4.0–4.2 by users",
    ],
    ozzoWins: [
      { title: "One platform, not just SFA", body: "BeatRoute focuses on sales & distribution execution. OZZO adds a full CRM (leads, deals, pipelines), a shared WhatsApp inbox and an AI assistant on the same customer record — the front office and the field on one login." },
      { title: "SME-friendly simplicity & price", body: "BeatRoute is oriented to larger brand networks. OZZO is built so a 5–200-rep team can run it themselves at transparent per-user pricing, with no enterprise contract." },
      { title: "Easier customisation for a small team", body: "Some BeatRoute users note customization and report-generation limits. OZZO ships custom fields on every record, manage-columns, and 11 built-in reports plus a per-rep DSR out of the box." },
      { title: "No accounting bolt-on", body: "Outstanding and stock keep themselves as orders and collections happen — no separate accounting tool to reconcile." },
    ],
    table: sfaBaseRows,
    chooseThemIf: [
      "You are a mid-to-large brand running structured retail execution across many outlets",
      "You want goal-driven AI nudges across distributors, retailers and reps",
      "Retail-execution depth matters more to you than an integrated CRM",
    ],
    chooseOzzoIf: [
      "You are an SME/MSME wanting CRM, WhatsApp and field sales in one system",
      "You want transparent per-user pricing and to go live in days",
      "You want built-in reports and custom fields without vendor configuration cycles",
    ],
    pricingNote:
      "BeatRoute is sold on quote-based plans oriented to brand-scale deployments. OZZO uses simple per-user pricing matched to team size, quoted on a demo call, with no long lock-in — and because CRM, WhatsApp and field sales are included, there is no separate front-office system to buy.",
    faqs: [
      { q: "Is OZZO a good BeatRoute alternative?", a: "For SMEs and MSMEs, yes. BeatRoute is built for larger brand retail networks; OZZO gives smaller field teams the same field visibility plus a built-in CRM and WhatsApp inbox in one affordable system." },
      { q: "Does OZZO deploy as fast as BeatRoute?", a: "OZZO is designed to go live in days — a small team can set up customers, products, routes and users themselves, with our team guiding the demo and rollout." },
      { q: "When is BeatRoute the better fit?", a: "If you're a mid-to-large consumer brand that needs deep, goal-driven retail-execution across many outlets and distributor tiers, BeatRoute's specialization is a real strength." },
    ],
  },

  // ─────────────────────────────────────────── FIELDASSIST
  {
    slug: "ozzo-vs-fieldassist",
    competitor: "FieldAssist",
    competitorCategory: "Enterprise SFA & DMS for FMCG/CPG",
    metaTitle: "OZZO vs FieldAssist — all-in-one for SMEs",
    metaDescription:
      "FieldAssist is an enterprise FMCG sales-automation and distribution platform. OZZO is the affordable all-in-one CRM and field sales platform for SMEs.",
    keywords: ["OZZO vs FieldAssist", "FieldAssist alternative", "FieldAssist alternative India", "SME SFA software", "affordable field sales app", "FieldAssist competitor"],
    tagline: "FieldAssist is enterprise FMCG software. OZZO gives SMEs field sales, CRM and WhatsApp in one affordable login.",
    verdict:
      "FieldAssist is a leading sales-automation and distribution platform for FMCG and CPG brands, with strong retail-audit, route-to-market and AI execution tooling used by names like Coca-Cola and Mars. OZZO is aimed at SMEs and MSMEs that want the field-sales essentials plus a CRM and WhatsApp inbox in one affordable system — without paying for enterprise depth they won't use. Big CPG brand: FieldAssist. Growing SME field team: OZZO.",
    bestForThem: "Enterprise FMCG/CPG brands & their distribution",
    bestForOzzo: "SMEs & MSMEs across many industries",
    theirStrengths: [
      "Purpose-built for FMCG/CPG route-to-market at scale — 550+ brands, 100k+ users",
      "AI Sales Co-Pilot, route optimisation and image-recognition retail audits ('perfect store')",
      "Demand forecasting and deep distributor / DMS capabilities",
      "Trusted by large global brands (Coca-Cola, Mars, Philips and others)",
    ],
    ozzoWins: [
      { title: "Right-sized for SMEs", body: "Reviewers note smaller teams can end up paying for depth they won't use. OZZO gives you the field-sales essentials — attendance, visits, routes, orders, collections — without enterprise overhead or an implementation project." },
      { title: "CRM + WhatsApp included", body: "FieldAssist is an SFA/DMS. OZZO adds a full CRM (leads, deals, pipelines) and a shared WhatsApp inbox with an AI assistant on the same record — one login for the front office and the field." },
      { title: "Broad industry fit, not just FMCG", body: "OZZO is used well beyond FMCG — agri-inputs, building materials, pharma, manufacturing and more — anywhere a team sells or services on a beat." },
      { title: "Transparent pricing, no accounting bolt-on", body: "Simple per-user pricing, and outstanding + stock keep themselves so there's no separate accounting integration to buy." },
    ],
    table: sfaBaseRows,
    chooseThemIf: [
      "You are an enterprise FMCG/CPG brand with a large distribution network",
      "You need image-recognition retail audits, demand forecasting and a full DMS",
      "You have the scale and budget for an enterprise platform",
    ],
    chooseOzzoIf: [
      "You are an SME/MSME and want field-sales essentials without enterprise depth",
      "You want a built-in CRM and WhatsApp inbox alongside field tracking",
      "You sell in an industry beyond FMCG and want one affordable system",
    ],
    pricingNote:
      "FieldAssist is quote-based and geared to enterprise CPG deployments. OZZO uses simple per-user pricing matched to team size, with no enterprise contract — and includes the CRM and WhatsApp layer, so there's no separate front-office tool to add.",
    faqs: [
      { q: "Is OZZO a good FieldAssist alternative for smaller companies?", a: "Yes. FieldAssist is built for enterprise FMCG/CPG brands; OZZO gives SMEs and MSMEs the field-sales essentials plus a CRM and WhatsApp inbox in one affordable system, without paying for enterprise-scale depth." },
      { q: "What does FieldAssist do that OZZO doesn't?", a: "FieldAssist offers AI image-recognition retail audits ('perfect store'), demand forecasting and a full enterprise distribution-management suite. If those are core to your route-to-market, FieldAssist's depth is a genuine advantage." },
      { q: "Is OZZO only for FMCG?", a: "No. OZZO works for any field team — agri-inputs, building materials, pharma, manufacturing, real estate and more — not just FMCG distribution." },
    ],
  },

  // ─────────────────────────────────────────── ZOHO CRM
  {
    slug: "ozzo-vs-zoho",
    competitor: "Zoho CRM",
    competitorCategory: "General-purpose CRM",
    metaTitle: "OZZO vs Zoho CRM — native field tracking",
    metaDescription:
      "Zoho is a strong, affordable general CRM but needs add-ons for GPS field tracking. OZZO ships CRM, tracking, orders, collections and WhatsApp in one.",
    keywords: ["OZZO vs Zoho", "OZZO vs Zoho CRM", "Zoho CRM field sales", "Zoho CRM GPS tracking alternative", "CRM with field force tracking India", "Zoho alternative for field sales"],
    tagline: "Zoho is a great general CRM. OZZO is a CRM with native field-force tracking, orders and collections built in — no add-ons to stitch.",
    verdict:
      "Zoho CRM is an excellent, affordable general-purpose CRM with a huge feature set and marketplace. But for field sales it has no native GPS/field-force tracking — you add third-party extensions (Badger, SPOTIO, GPS Team Management) and still need separate order/collection tooling. OZZO is a CRM with native selfie-GPS attendance, geo-tagged visits, beat routes, offline orders and field collections built in, plus a WhatsApp inbox. Pure office CRM: Zoho may be enough. Field team on the ground: OZZO is one system instead of several.",
    bestForThem: "Office-based sales teams, broad CRM customization",
    bestForOzzo: "Field-sales teams needing tracking + orders + CRM in one",
    theirStrengths: [
      "Mature, deeply customizable CRM with a very wide feature set",
      "Affordable per-user tiers and a free edition for up to 3 users",
      "Huge marketplace and the broader Zoho ecosystem (Books, Desk, People, etc.)",
      "Strong workflow automation and reporting for office sales processes",
    ],
    ozzoWins: [
      { title: "Native field-force tracking (no add-ons)", body: "Zoho CRM has no built-in GPS field tracking — you rely on third-party marketplace apps. OZZO ships selfie + GPS attendance, live location, geo-tagged visits and beat routes natively on its own app, live for both Android and iPhone." },
      { title: "Orders, collections & outstanding built in", body: "OZZO captures offline orders, collects field payments and self-calculates outstanding and stock — a full sell-collect-distribute flow Zoho CRM doesn't provide on its own." },
      { title: "WhatsApp shared inbox + AI assistant included", body: "A shared team inbox on your official WhatsApp number with templates and an AI assistant, included with the CRM line — not a separate integration to configure." },
      { title: "One system instead of a stack", body: "With Zoho you'd combine CRM + a GPS add-on + an orders tool + accounting. OZZO is one login with one customer record for office and field." },
    ],
    table: [
      { capability: "Leads, deals & pipelines (CRM)", ozzo: "yes", them: "yes" },
      { capability: "Deep CRM customization & workflow automation", ozzo: "partial", them: "yes", note: "Zoho's automation depth and marketplace breadth are a genuine strength." },
      { capability: "Native GPS attendance & field tracking", ozzo: "yes", them: "no", note: "Zoho CRM needs third-party extensions (Badger, SPOTIO, etc.) for field GPS." },
      { capability: "Geo-tagged visits & beat routes", ozzo: "yes", them: "no" },
      { capability: "Offline order capture", ozzo: "yes", them: "no" },
      { capability: "Field payment collection & auto-outstanding", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "partial", note: "Zoho offers WhatsApp integrations; OZZO ships a shared inbox + KB-trained AI assistant in the CRM line." },
      { capability: "Distributor / dealer / retailer trade levels", ozzo: "yes", them: "no" },
      { capability: "Works fully offline in the field", ozzo: "yes", them: "no" },
      { capability: "Broader business suite (accounting, helpdesk, HR)", ozzo: "no", them: "yes", note: "Zoho's wider ecosystem is a real advantage if you want one vendor for everything." },
      dmsPortalRow,
    ],
    chooseThemIf: [
      "Your sales team is office-based and you want maximum CRM customization",
      "You want the broader Zoho ecosystem (Books, Desk, People) from one vendor",
      "You don't need native field-force tracking, orders or collections",
    ],
    chooseOzzoIf: [
      "You have reps in the field and need native GPS tracking, visits and routes",
      "You need offline order capture, field collections and auto-outstanding",
      "You want CRM + field sales + WhatsApp in one login, not a CRM plus add-ons",
    ],
    pricingNote:
      "Zoho CRM has transparent, affordable per-user tiers — but a field team typically adds a GPS-tracking extension and a separate orders/collections tool on top, and often accounting too. OZZO's per-user price includes native field tracking, orders, collections and WhatsApp, so the all-in cost for a field team is usually simpler and lower.",
    faqs: [
      { q: "Does Zoho CRM have built-in field-force GPS tracking?", a: "Not natively. Zoho CRM relies on third-party marketplace extensions (such as Badger Maps, SPOTIO or GPS Team Management) for real-time field tracking. OZZO ships selfie + GPS attendance, live location and geo-tagged visits natively." },
      { q: "Is OZZO a Zoho CRM alternative for field sales?", a: "Yes — specifically for field teams. If your reps work on the ground and you need tracking, offline orders and collections alongside your CRM, OZZO combines all of it in one system instead of a CRM plus several add-ons." },
      { q: "When is Zoho CRM the better choice?", a: "If your team is office-based, you want the deepest CRM customization and workflow automation, or you want Zoho's wider suite (Books, Desk, People) from a single vendor, Zoho CRM is a strong pick." },
    ],
  },

  // ─────────────────────────────────────────── SALESFORCE
  {
    slug: "ozzo-vs-salesforce",
    competitor: "Salesforce",
    competitorCategory: "Enterprise CRM platform",
    metaTitle: "OZZO vs Salesforce — the SME alternative",
    metaDescription:
      "Salesforce is the most powerful enterprise CRM, but costly and complex for an Indian SME. OZZO is an India-built CRM and field sales platform.",
    keywords: ["OZZO vs Salesforce", "Salesforce alternative India", "Salesforce alternative for SME", "affordable CRM India", "field sales CRM India", "Salesforce for small business India"],
    tagline: "Salesforce is the most powerful enterprise CRM. OZZO is the affordable, India-built field-sales platform an SME can run without an admin.",
    verdict:
      "Salesforce is the most powerful and extensible CRM in the world — the right choice for large enterprises with complex processes and the budget and admin team to run it. For most Indian SMEs, though, the total cost of ownership (often 3–5× the licence), USD pricing, weeks-long implementation and need for a dedicated admin make it heavy to start with. OZZO is India-built for SME field sales: CRM, native field tracking, orders, collections and WhatsApp in one affordable system that goes live in days. Enterprise: Salesforce. Indian SME field team: OZZO.",
    bestForThem: "Large enterprises with complex, custom processes",
    bestForOzzo: "Indian SMEs & MSMEs with field sales teams",
    theirStrengths: [
      "The most powerful, extensible CRM platform available, with a vast ecosystem (AppExchange)",
      "Enterprise-grade customization, automation, analytics and AI (Einstein)",
      "Deep integrations and a global partner network",
      "Scales to the largest, most complex sales organizations",
    ],
    ozzoWins: [
      { title: "Affordable and India-built", body: "No USD pricing, no 3–5× total-cost surprise, no lakhs-scale implementation. Transparent per-user pricing in INR, matched to your team size." },
      { title: "Live in days, no admin required", body: "Salesforce typically needs a dedicated admin and a multi-week implementation. A small OZZO team sets up customers, products, routes and users themselves, guided by our team." },
      { title: "Native field sales, not an add-on", body: "Selfie-GPS attendance, geo-tagged visits, beat routes, offline orders and field collections are built in — with Salesforce these are extra clouds, add-ons or custom builds." },
      { title: "WhatsApp + no accounting bolt-on", body: "A shared WhatsApp inbox with an AI assistant is included, and outstanding and stock keep themselves — capabilities that would be additional projects on Salesforce." },
    ],
    table: [
      { capability: "Leads, deals & pipelines (CRM)", ozzo: "yes", them: "yes" },
      { capability: "Enterprise customization & automation depth", ozzo: "partial", them: "yes", note: "Salesforce's platform depth and AppExchange are unmatched for complex enterprises." },
      { capability: "Native field-force GPS & attendance", ozzo: "yes", them: "no", note: "Requires additional clouds/add-ons or custom development on Salesforce." },
      { capability: "Offline order capture & field collections", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "partial" },
      { capability: "Auto outstanding & stock (no accounting bolt-on)", ozzo: "yes", them: "no" },
      { capability: "Goes live in days without a dedicated admin", ozzo: "yes", them: "no" },
      { capability: "Transparent INR per-user pricing", ozzo: "yes", them: "no", note: "Salesforce is USD-priced with implementation costs that often run to lakhs." },
      { capability: "Scales to the largest global enterprises", ozzo: "partial", them: "yes" },
      dmsPortalRow,
    ],
    chooseThemIf: [
      "You are a large enterprise with complex, highly custom sales processes",
      "You have the budget and a dedicated admin/partner to implement and maintain it",
      "You need the deepest platform extensibility and enterprise integrations",
    ],
    chooseOzzoIf: [
      "You are an Indian SME/MSME that wants to go live in days, not months",
      "You want native field tracking, orders and collections without add-ons",
      "You want affordable INR pricing and no dedicated admin overhead",
    ],
    pricingNote:
      "Independent guides put Salesforce's total cost of ownership at roughly 3–5× the per-seat licence once implementation, admin and add-ons are included, with implementation for an Indian SME often running into lakhs. OZZO is transparent per-user pricing in INR with no implementation project — for a field-sales SME the all-in cost is dramatically lower.",
    faqs: [
      { q: "Is OZZO a good Salesforce alternative for Indian SMEs?", a: "Yes. Salesforce is built for large enterprises; OZZO is built for Indian SMEs and MSMEs. It gives you a CRM plus native field sales and WhatsApp in one affordable, INR-priced system that goes live in days without a dedicated admin." },
      { q: "Why is Salesforce considered expensive for small businesses?", a: "Independent guides note the total cost of ownership is often 3–5× the licence fee once implementation, USD pricing, add-ons and a required admin are included — which is why many consider it the wrong CRM to start with for Indian SMBs." },
      { q: "When is Salesforce the better choice?", a: "For large enterprises with complex, highly customized processes, deep integration needs and the budget and team to run it, Salesforce's power and extensibility are unmatched." },
    ],
  },

  // ─────────────────────────────────────────── UNOLO
  {
    slug: "ozzo-vs-unolo",
    competitor: "Unolo",
    competitorCategory: "Field-force tracking & attendance",
    metaTitle: "OZZO vs Unolo — tracking plus orders",
    metaDescription:
      "Unolo is a strong, fast field-force tracking and attendance app. OZZO adds a full CRM, offline orders, field collections and WhatsApp on top.",
    keywords: ["OZZO vs Unolo", "Unolo alternative", "Unolo alternative India", "field force tracking with CRM", "field sales app with orders", "Unolo competitor"],
    tagline: "Unolo is excellent at tracking and attendance. OZZO does that too — and adds a full CRM, orders, collections and WhatsApp on one login.",
    verdict:
      "Unolo is a popular, quick-to-deploy field-force tracking app — real-time GPS, geo-verified visits, attendance and expenses, trusted by 1,200+ companies. If live tracking and attendance are all you need, it does that very well. OZZO covers the same field visibility but is a full platform: a CRM with pipelines, offline order capture, field payment collection with self-calculating outstanding, distributor trade levels and a shared WhatsApp inbox — one login for the office and the field. Just tracking: Unolo. Track, sell, collect and manage customers in one place: OZZO.",
    bestForThem: "Teams that mainly need GPS tracking & attendance",
    bestForOzzo: "Field teams that also sell, collect & manage customers",
    theirStrengths: [
      "Fast to set up and easy to roll out to a field team",
      "Strong real-time GPS tracking, geo-verified visits (photo + OTP) and precise distance for conveyance claims",
      "Solid attendance, targets and expense-claim workflows",
      "Proven adoption — 1,200+ companies and 50,000+ field staff",
    ],
    ozzoWins: [
      { title: "A real CRM, not just tracking", body: "OZZO adds leads, deals and visual pipelines with custom fields — so the same customer a rep visits is the one your office works in the CRM, on one record." },
      { title: "Sell and collect in the field", body: "Offline order capture, branded quotations, field payment collection and self-calculating outstanding — the full sell-collect flow, beyond visit tracking." },
      { title: "WhatsApp shared inbox + AI assistant", body: "Reply to customers from one shared WhatsApp inbox with templates and an AI assistant — included with the CRM line, not a separate tool." },
      { title: "Distribution built in", body: "Distributor / dealer / retailer trade levels, schemes and price lists, with primary/secondary tagging — for teams that sell through a channel, not just visit it." },
    ],
    table: trackingFirstRows,
    chooseThemIf: [
      "Your core need is live GPS tracking and attendance for a field team",
      "You don't need order capture, collections or a full CRM",
      "You want the lightest possible tracking rollout",
    ],
    chooseOzzoIf: [
      "Your reps take orders, collect payments or manage customers, not just check in",
      "You want a CRM and WhatsApp inbox on the same record as field visits",
      "You sell through distributors/dealers and need trade levels, schemes and price lists",
    ],
    pricingNote:
      "Unolo and OZZO are both transparent, per-user subscriptions. The difference isn't a race to the lowest price — it's scope: with OZZO one per-user subscription also covers the CRM, orders, collections and WhatsApp that you'd otherwise buy as separate tools alongside a tracking app.",
    faqs: [
      { q: "Is OZZO a good Unolo alternative?", a: "Yes, especially if your field team does more than check in. Unolo is great at GPS tracking and attendance; OZZO covers that and adds a full CRM, offline orders, field collections and a WhatsApp inbox in one system." },
      { q: "Does OZZO do live tracking and attendance like Unolo?", a: "Yes — selfie + GPS attendance, live location, geo-tagged visits and beat routes are all built into the OZZO SALES app on Android and iPhone, alongside the CRM and sales features." },
      { q: "When is Unolo the better choice?", a: "If all you need is lightweight, fast-to-deploy field tracking and attendance — without CRM, orders or collections — Unolo is a focused, well-adopted option." },
    ],
  },

  // ─────────────────────────────────────────── FIELDSENSE
  {
    slug: "ozzo-vs-fieldsense",
    competitor: "FieldSense",
    competitorCategory: "Field-force management app",
    metaTitle: "OZZO vs FieldSense — tracking plus orders",
    metaDescription:
      "FieldSense is an easy, mobile-first tracking app with a free tier. OZZO adds a full CRM, offline orders, field collections and WhatsApp on top.",
    keywords: ["OZZO vs FieldSense", "FieldSense alternative", "FieldSense alternative India", "field force management with CRM", "field sales app with orders", "FieldSense competitor"],
    tagline: "FieldSense is a simple, mobile-first tracking app. OZZO adds a full CRM, orders, collections and WhatsApp to the same field visibility.",
    verdict:
      "FieldSense is an easy-to-use field-force management app — real-time tracking, visits, attendance, expenses and custom forms, with a free tier for up to 10 users. For lightweight field visibility it's a friendly starting point. OZZO delivers the same field tracking but as a complete platform: CRM pipelines, offline orders, field collections with auto-outstanding, distributor management and a shared WhatsApp inbox on one login. Simple tracking: FieldSense. One system for track-sell-collect-manage: OZZO.",
    bestForThem: "Small teams wanting easy tracking (with a free tier)",
    bestForOzzo: "Field teams that also sell, collect & manage customers",
    theirStrengths: [
      "Very easy to use and quick to adopt — mobile-first and intuitive",
      "Free for up to 10 users — a low-friction way to start",
      "Solid real-time tracking, visit scheduling, attendance and custom forms",
      "Offline support and instant team messaging",
    ],
    ozzoWins: [
      { title: "Grows beyond tracking", body: "OZZO adds a full CRM (leads, deals, pipelines), so tracking is one part of a system that also wins and keeps customers — not the whole product." },
      { title: "Orders, collections & outstanding", body: "Capture orders offline, collect field payments and watch a self-calculating outstanding and stock — the sell-collect flow a pure tracking app doesn't cover." },
      { title: "WhatsApp CRM included", body: "A shared WhatsApp inbox with templates and an AI assistant on your official number — customer conversations live on the same record as visits and orders." },
      { title: "Distribution & 11 reports + DSR", body: "Trade levels, schemes and price lists for channel sales, plus 11 built-in reports and a per-rep Daily Sales Report to manage by facts." },
    ],
    table: trackingFirstRows,
    chooseThemIf: [
      "You want the simplest possible field-tracking app, and a free tier to start",
      "Your team only needs attendance, visits and basic forms",
      "You don't need CRM pipelines, orders or collections",
    ],
    chooseOzzoIf: [
      "Your reps take orders, collect payments or manage a pipeline",
      "You want CRM + WhatsApp on the same record as field visits",
      "You sell through a distributor/dealer channel and need trade levels and schemes",
    ],
    pricingNote:
      "FieldSense offers a free tier for small teams and simple tracking — genuinely useful if that's all you need. OZZO is a paid, per-user platform because it includes the CRM, orders, collections and WhatsApp layer. The honest question isn't which is cheaper, but whether you need a tracking app or a full field-sales system.",
    faqs: [
      { q: "Is OZZO a good FieldSense alternative?", a: "Yes, when you outgrow simple tracking. FieldSense is easy and has a free tier for basic field-force management; OZZO adds a full CRM, offline orders, collections and a WhatsApp inbox in one platform." },
      { q: "Does OZZO have a free plan like FieldSense?", a: "OZZO doesn't publish a free tier — it's a full platform quoted per user on a demo call. FieldSense's free-for-10 tier is a fair option if you only need lightweight tracking." },
      { q: "When is FieldSense the better choice?", a: "If you want the simplest, most affordable way to track attendance and visits for a small team and don't need CRM, orders or collections, FieldSense is a clean fit." },
    ],
  },

  // ─────────────────────────────────────────── TRACKOLAP
  {
    slug: "ozzo-vs-trackolap",
    competitor: "TrackOlap",
    competitorCategory: "Employee monitoring, HR & sales suite",
    metaTitle: "OZZO vs TrackOlap — focused vs broad suite",
    metaDescription:
      "TrackOlap bundles sales CRM, HR, monitoring and helpdesk. OZZO is a purpose-built field sales platform with deeper orders, collections and distribution.",
    keywords: ["OZZO vs TrackOlap", "TrackOlap alternative", "TrackOlap alternative India", "field sales vs employee monitoring", "CRM with field sales", "TrackOlap competitor"],
    tagline: "TrackOlap spans HR, monitoring and sales. OZZO goes deep on field sales — CRM, orders, collections, distribution and WhatsApp.",
    verdict:
      "TrackOlap is a broad business-automation suite — sales CRM plus HR/payroll, remote-team monitoring and an IT help desk — useful if you want one vendor across very different functions. OZZO is purpose-built for field sales: a CRM with pipelines, selfie-GPS attendance, offline orders, field collections with auto-outstanding, distributor trade levels and a WhatsApp inbox. Want one tool spanning HR, monitoring and sales: TrackOlap. Want depth in field sales & distribution: OZZO.",
    bestForThem: "Teams wanting HR + monitoring + sales from one vendor",
    bestForOzzo: "Field-sales & distribution teams wanting real depth",
    theirStrengths: [
      "Genuinely broad — sales CRM, HR/payroll, remote monitoring and IT help desk in one",
      "Integrated payroll and attendance for HR teams",
      "Employee-monitoring and productivity analytics for remote/office staff",
      "Module-based pricing — pay only for the parts you use",
    ],
    ozzoWins: [
      { title: "Built for field sales, not spread thin", body: "OZZO focuses on winning customers and running a field team well — so orders, collections, outstanding, schemes, price lists and distributor levels are first-class, not a light module in a wide suite." },
      { title: "WhatsApp CRM + AI assistant", body: "A shared WhatsApp inbox with an AI assistant on your official number — customer conversations on the same record as leads, visits and orders." },
      { title: "Sell-collect-distribute flow", body: "Offline order capture, branded quotations, field collections and self-calculating outstanding, plus distributor/dealer/retailer trade levels — the full channel-sales flow." },
      { title: "11 reports + DSR made for sales", body: "Sales-focused analytics — orders, sales, payments, visits, ageing — plus a per-rep Daily Sales Report, rather than general workforce dashboards." },
    ],
    table: [
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "yes" },
      { capability: "Selfie-GPS attendance & live field tracking", ozzo: "yes", them: "yes" },
      { capability: "Offline order capture, dispatch & branded PDF", ozzo: "yes", them: "partial" },
      { capability: "Field payment collection & self-calculating outstanding", ozzo: "yes", them: "no" },
      { capability: "Distributor / dealer / retailer trade levels, schemes & price lists", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "no" },
      { capability: "HR: payroll & full HRMS", ozzo: "partial", them: "yes", note: "Payroll and deep HRMS are TrackOlap's territory; OZZO covers attendance, leave, holiday and announcements, not payroll." },
      { capability: "Remote-employee monitoring & productivity analytics", ozzo: "no", them: "yes", note: "OZZO is a field-sales platform, not a screen/activity-monitoring tool." },
      { capability: "IT help desk / ticketing", ozzo: "no", them: "yes" },
      { capability: "11 built-in sales reports + per-rep DSR", ozzo: "yes", them: "partial" },
      dmsPortalRow,
    ],
    chooseThemIf: [
      "You want HR/payroll, employee monitoring and sales from a single vendor",
      "Employee productivity monitoring is a core requirement",
      "Your sales needs are light and breadth matters more than depth",
    ],
    chooseOzzoIf: [
      "Field sales and distribution are your core, and you want real depth there",
      "You need orders, collections, outstanding, schemes and trade levels",
      "You want WhatsApp CRM and a real sales pipeline on one record",
    ],
    pricingNote:
      "TrackOlap prices by module, so cost depends on how many of its suites (sales, HR, monitoring, help desk) you turn on. OZZO is per-user for a focused field-sales platform. If you specifically need HR/payroll and monitoring too, TrackOlap's breadth may consolidate vendors; if field sales is the job, OZZO's depth is the better value.",
    faqs: [
      { q: "Is OZZO a good TrackOlap alternative for sales teams?", a: "Yes. TrackOlap is a broad suite covering HR, monitoring and sales; OZZO is purpose-built for field sales and distribution, with deeper orders, collections, trade levels and a WhatsApp CRM." },
      { q: "Does OZZO do payroll and employee monitoring like TrackOlap?", a: "No — OZZO covers attendance, leave, holiday and announcements, but not payroll or screen/activity monitoring. If those are core needs, TrackOlap's suite is the broader fit." },
      { q: "When is TrackOlap the better choice?", a: "When you want to consolidate HR/payroll, remote-employee monitoring and a light CRM under one vendor, TrackOlap's breadth is a genuine advantage." },
    ],
  },

  // ─────────────────────────────────────────── DELTA SALES APP
  {
    slug: "ozzo-vs-delta-sales-app",
    competitor: "Delta Sales App",
    competitorCategory: "Field sales automation for distributors",
    metaTitle: "OZZO vs Delta Sales App — CRM included",
    metaDescription:
      "Delta Sales App is a well-adopted field-sales app for distributors. OZZO adds a full CRM and WhatsApp inbox to the same order and collection flow.",
    keywords: ["OZZO vs Delta Sales App", "Delta Sales App alternative", "Delta Sales App alternative India", "field sales app for distributors", "CRM with field sales", "Delta Sales competitor"],
    tagline: "Delta Sales App is a solid field-sales app for distributors. OZZO covers the same ground and adds a full CRM and WhatsApp inbox.",
    verdict:
      "Delta Sales App is a well-adopted field-sales automation app for manufacturers, wholesalers and distributors — order capture, GPS tracking, beat planning, attendance, payment collection and stock, used by 100,000+ reps across several countries. OZZO covers the same field-sales essentials and adds a full front-office CRM (leads, deals, pipelines) and a shared WhatsApp inbox with an AI assistant on the same customer record. Focused distributor field-sales app: Delta. One platform for CRM + field sales + WhatsApp: OZZO.",
    bestForThem: "Distributors/manufacturers wanting a focused field-sales app",
    bestForOzzo: "Teams wanting CRM + field sales + WhatsApp in one",
    theirStrengths: [
      "Purpose-built for distributor/manufacturer field sales, with strong order management",
      "Well-adopted and established — 100,000+ reps across multiple countries",
      "Solid beat planning, GPS tracking, attendance and payment-collection monitoring",
      "Stock taking and daily work logs for field teams",
    ],
    ozzoWins: [
      { title: "A full CRM on the same record", body: "Delta focuses on field sales; OZZO adds leads, deals and pipelines so the front office and the field share one customer record and one login." },
      { title: "WhatsApp shared inbox + AI assistant", body: "Reply to customers from a shared WhatsApp inbox with templates and an AI assistant — customer conversations alongside orders and visits." },
      { title: "Self-calculating outstanding & no accounting bolt-on", body: "Every order and collection updates outstanding and stock automatically, with credit limits on the counter — no separate accounting tool to reconcile." },
      { title: "Broader platform depth", body: "37 modules, 11 reports + a per-rep DSR, price-list engine, schemes, geo-fencing and granular roles with data-scoping — room to grow into." },
    ],
    table: sfaBaseRows,
    chooseThemIf: [
      "You want a focused, proven field-sales app for a distributor/manufacturer setup",
      "Your core need is orders, tracking, attendance and collections — not a CRM",
      "You don't need a WhatsApp shared inbox or front-office pipelines",
    ],
    chooseOzzoIf: [
      "You want a full CRM and WhatsApp inbox alongside field sales",
      "You want customer conversations, leads and orders on one record",
      "You want broader platform depth — reports, schemes, price lists, roles",
    ],
    pricingNote:
      "Both are per-user subscriptions aimed at field teams. Rather than compete on the lowest per-seat price, OZZO includes the CRM and WhatsApp layer in the same subscription — so you're not adding a separate CRM or messaging tool alongside your field-sales app.",
    faqs: [
      { q: "Is OZZO a good Delta Sales App alternative?", a: "Yes. Delta Sales App is a strong, focused field-sales app for distributors; OZZO covers the same order, tracking and collection flow and adds a full CRM and a WhatsApp inbox in one platform." },
      { q: "Does OZZO handle distributors and secondary sales like Delta?", a: "Yes — classify customers into distributor/dealer/retailer trade levels with automatic primary/secondary tagging, outstanding at each level, plus schemes, price lists and multi-unit ordering." },
      { q: "When is Delta Sales App the better choice?", a: "If you want a focused, well-adopted field-sales app and don't need a front-office CRM or WhatsApp inbox, Delta Sales App is a proven, straightforward option." },
    ],
  },

  // ─────────────────────────────────────────── MASSIST
  {
    slug: "ozzo-vs-massist",
    competitor: "mAssist",
    competitorCategory: "Enterprise SFA for FMCG & CPG",
    metaTitle: "OZZO vs mAssist — all-in-one for SMEs",
    metaDescription:
      "mAssist is enterprise sales-force automation for large FMCG distribution. OZZO is the affordable all-in-one CRM and field sales platform for SMEs.",
    keywords: ["OZZO vs mAssist", "mAssist alternative", "mAssist CRM alternative", "affordable SFA for SME", "all-in-one field sales platform", "mAssist competitor"],
    tagline: "mAssist is enterprise SFA for large distribution networks. OZZO is the affordable all-in-one CRM + field sales platform for SMEs.",
    verdict:
      "mAssist is an AI-powered sales-force-automation platform built for large FMCG, CPG and pharma enterprises with complex multi-tier distribution — 350+ enterprise customers and 125,000+ daily users. OZZO targets SMEs and MSMEs that want field-sales visibility plus a built-in CRM and WhatsApp inbox in one affordable system, without an enterprise rollout. Large multi-tier distribution: mAssist. Growing SME field team that also wants a CRM and WhatsApp: OZZO.",
    bestForThem: "Large FMCG/CPG/pharma enterprises, complex distribution",
    bestForOzzo: "SMEs & MSMEs wanting CRM + field sales in one",
    theirStrengths: [
      "Built for enterprise-scale, multi-tier Indian distribution networks",
      "AI-driven automated reporting and deviation analysis",
      "Geo-fencing with face-detection attendance and offline-first design",
      "ERP / CRM / HRMS integrations for large IT landscapes",
    ],
    ozzoWins: [
      { title: "CRM + WhatsApp built in", body: "mAssist is SFA that integrates with external CRM/ERP. OZZO ships the CRM (leads, deals, pipelines) and a shared WhatsApp inbox with an AI assistant on the same record — no separate front office to integrate." },
      { title: "Right-sized for SMEs", body: "OZZO deploys in days and a small team can run it without an enterprise implementation project or a dedicated admin." },
      { title: "No accounting bolt-on", body: "Outstanding and stock keep themselves as orders and collections happen — no ERP integration required to keep the numbers right." },
      { title: "Transparent, affordable pricing", body: "Simple per-user pricing matched to team size, with no enterprise contract or minimum commitment." },
    ],
    table: sfaBaseRows,
    chooseThemIf: [
      "You are a large FMCG/CPG/pharma brand with complex multi-tier distribution",
      "You need enterprise AI reporting and deep ERP/HRMS integrations",
      "You have the scale and team for an enterprise SFA deployment",
    ],
    chooseOzzoIf: [
      "You are an SME/MSME with a field team of 5–200 reps",
      "You want a built-in CRM and WhatsApp inbox, not just SFA",
      "You want to go live in days with transparent, affordable pricing",
    ],
    pricingNote:
      "mAssist is an enterprise platform, quoted per deployment and geared to large distribution networks. OZZO uses simple per-user pricing matched to your team size, with no enterprise contract — and because the CRM and WhatsApp layer are included, there's no separate front-office system to buy alongside it.",
    faqs: [
      { q: "Is OZZO a good mAssist alternative for smaller companies?", a: "Yes. mAssist is built for large FMCG/CPG/pharma enterprises; OZZO gives SMEs and MSMEs field-sales visibility plus a built-in CRM and WhatsApp inbox in one affordable system, without an enterprise rollout." },
      { q: "What does OZZO include that mAssist leaves to integrations?", a: "A built-in CRM (leads, deals, pipelines), a shared WhatsApp inbox with an AI assistant, and self-calculating outstanding and stock — so you don't integrate a separate CRM, messaging tool or accounting system." },
      { q: "When is mAssist the better choice?", a: "For large enterprises running complex, multi-tier distribution that need enterprise AI reporting and deep ERP/HRMS integration, mAssist's scale is a genuine fit." },
    ],
  },

  // ─────────────────────────────────────────── KOOPS
  {
    slug: "ozzo-vs-koops",
    competitor: "Koops",
    competitorCategory: "All-in-one sales & distribution (SFA + CRM + DMS)",
    metaTitle: "OZZO vs Koops — all-in-one platforms",
    metaDescription:
      "Both are all-in-one platforms for Indian SMEs. Koops leans on DMS and native Tally; OZZO leans on WhatsApp CRM, an AI assistant and workforce depth.",
    keywords: ["OZZO vs Koops", "Koops alternative", "Koops alternative India", "all-in-one SFA CRM DMS", "sales distribution software SME", "Koops competitor"],
    tagline: "Koops and OZZO are both all-in-one for Indian SMEs. Koops leans on DMS + native Tally; OZZO leans on WhatsApp CRM, AI and workforce depth.",
    verdict:
      "Koops and OZZO are the closest match on this list — both are all-in-one sales & distribution platforms for Indian SMEs, both go live in days, both avoid heavy implementation. Koops leans into a distributor-management system with dealer self-service ordering and native Tally accounting integration. OZZO leans into a WhatsApp shared inbox with an AI assistant, deep workforce tracking (selfie-GPS attendance, geo-fencing, 11 reports + DSR) and a self-calculating outstanding that removes the need for an accounting bolt-on. This one comes down to emphasis — read both columns closely.",
    bestForThem: "SMEs wanting DMS dealer self-service + native Tally",
    bestForOzzo: "SMEs wanting WhatsApp CRM + AI + workforce depth",
    theirStrengths: [
      "Genuinely all-in-one: SFA + CRM + DMS + inventory in one platform",
      "Distributor-management system with dealer self-service ordering",
      "Native Tally integration for businesses that run their books in Tally",
      "Self-service customization, transparent published pricing and a no-lock-in, live-in-days pitch",
    ],
    ozzoWins: [
      { title: "WhatsApp shared inbox + AI assistant", body: "OZZO includes a shared inbox on your official WhatsApp number with templates and an AI assistant trained on your own knowledge base — customer conversations on the same record as orders and visits." },
      { title: "Deep workforce visibility", body: "Selfie + GPS attendance, live location, geo-fenced check-ins, a Tracking Health screen, beat routes, leave and holiday — a full field-workforce layer, not just order capture." },
      { title: "No accounting bolt-on, by design", body: "Rather than integrating Tally, OZZO self-calculates outstanding and stock from every order and collection — the numbers are already right without an accounting sync." },
      { title: "Reports, price lists & schemes depth", body: "11 built-in reports plus a per-rep Daily Sales Report, a customer-specific price-list engine, trade schemes and multi-unit ordering — breadth to manage by facts." },
    ],
    table: [
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "yes" },
      { capability: "Offline order capture & field collections", ozzo: "yes", them: "yes" },
      { capability: "Distributor / dealer / retailer trade levels & schemes", ozzo: "yes", them: "yes" },
      { capability: "Customer-specific price lists", ozzo: "yes", them: "partial" },
      { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "no" },
      { capability: "Selfie-GPS attendance, geo-fencing & workforce tracking", ozzo: "yes", them: "partial", note: "OZZO ships a deep field-workforce layer; Koops centres on sales & distribution." },
      { capability: "Dealer self-service ordering portal (DMS)", ozzo: "partial", them: "yes", note: "Koops offers dealer self-service ordering; OZZO's ordering is rep- and admin-driven." },
      { capability: "Native Tally accounting integration", ozzo: "no", them: "yes", note: "Koops integrates Tally; OZZO instead self-calculates outstanding and stock so no accounting sync is needed." },
      { capability: "11 built-in reports + per-rep DSR", ozzo: "yes", them: "partial" },
      { capability: "Live in days, no heavy implementation", ozzo: "yes", them: "yes" },
      dmsPortalRow,
    ],
    chooseThemIf: [
      "Dealer self-service ordering (a DMS portal) is important to you",
      "You run your accounting in Tally and want a native integration",
      "Distribution management is your primary focus over CRM/WhatsApp",
    ],
    chooseOzzoIf: [
      "You want a WhatsApp shared inbox and an AI assistant built in",
      "You want deep workforce tracking — selfie-GPS attendance, geo-fencing, DSR",
      "You'd rather outstanding and stock self-calculate than sync to Tally",
    ],
    pricingNote:
      "Both Koops and OZZO are affordable, transparent, no-lock-in platforms aimed at Indian SMEs — this isn't a comparison where one is obviously cheaper. Choose on fit: if a distributor self-service portal and native Tally matter most, look at Koops; if WhatsApp CRM, an AI assistant and deep workforce tracking matter most, OZZO is the stronger fit. The best way to decide is a short demo of each against your workflow.",
    faqs: [
      { q: "How is OZZO different from Koops?", a: "Both are all-in-one sales & distribution platforms for Indian SMEs. Koops emphasizes a distributor-management system with dealer self-service ordering and native Tally integration; OZZO emphasizes a WhatsApp shared inbox with an AI assistant, deep workforce tracking, and a self-calculating outstanding that avoids an accounting bolt-on." },
      { q: "Does OZZO integrate with Tally like Koops?", a: "OZZO takes a different approach: instead of syncing to Tally, it self-calculates outstanding and stock from every order and collection, so the numbers stay right without an accounting integration. If a native Tally integration is essential to you, Koops offers that." },
      { q: "Which is better for my business?", a: "It depends on emphasis. For dealer self-service ordering and native Tally, consider Koops. For WhatsApp CRM, an AI assistant and deep field-workforce visibility, OZZO is the stronger fit. A short demo of each against your workflow is the fastest way to decide." },
    ],
  },

  // ─────────────────────────────────────────── CREATIO
  {
    slug: "ozzo-vs-creatio",
    competitor: "Creatio",
    competitorCategory: "Enterprise no-code CRM & BPM platform",
    metaTitle: "OZZO vs Creatio — the SME alternative",
    metaDescription:
      "Creatio is a powerful enterprise no-code CRM and BPM platform with a high minimum contract. OZZO is an India-built CRM and field sales platform.",
    keywords: ["OZZO vs Creatio", "Creatio alternative", "Creatio alternative India", "affordable CRM for SME", "field sales CRM India", "Creatio competitor"],
    tagline: "Creatio is a powerful enterprise no-code CRM platform. OZZO is the affordable, India-built field-sales platform an SME can run without a big rollout.",
    verdict:
      "Creatio is a powerful no-code CRM and business-process-automation platform, best suited to mid-size and large organizations (often 500+ employees) that need deep, custom workflow automation — and it's priced accordingly, with a high minimum annual commitment that puts it out of reach for most small businesses. OZZO is built for Indian SMEs: a CRM with native field-sales tracking, offline orders, collections and a WhatsApp inbox, live in days at transparent per-user pricing. Enterprise no-code platform: Creatio. Affordable SME field-sales system: OZZO.",
    bestForThem: "Mid-to-large orgs needing deep no-code automation",
    bestForOzzo: "Indian SMEs & MSMEs with field-sales teams",
    theirStrengths: [
      "A powerful no-code / low-code platform for rapid custom app and workflow building",
      "Deep business-process automation (BPM) and enterprise-grade configurability",
      "Strong peer-reviewed ratings for usability, automation and support",
      "Scales to complex mid-market and enterprise processes",
    ],
    ozzoWins: [
      { title: "Affordable, no minimum contract", body: "Creatio carries a high minimum annual commitment aimed at larger organizations. OZZO is transparent per-user pricing with no minimum — accessible to a small team from day one." },
      { title: "India-built for field sales", body: "Native selfie-GPS attendance, geo-tagged visits, beat routes, offline orders and field collections are built in — not a custom build on a general platform." },
      { title: "Live in days, not a project", body: "No steep initialization phase or specialist configuration — a small team gets going quickly, guided by our team." },
      { title: "WhatsApp CRM + no accounting bolt-on", body: "A shared WhatsApp inbox with an AI assistant is included, and outstanding and stock keep themselves — capabilities you'd otherwise configure or integrate on a general platform." },
    ],
    table: [
      { capability: "Leads, deals & pipelines (CRM)", ozzo: "yes", them: "yes" },
      { capability: "No-code / low-code custom app & workflow building", ozzo: "partial", them: "yes", note: "Creatio's no-code platform depth is a genuine strength for complex, custom processes." },
      { capability: "Native field-force GPS & selfie attendance", ozzo: "yes", them: "no" },
      { capability: "Offline order capture & field collections", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI assistant", ozzo: "yes", them: "partial" },
      { capability: "Distributor / dealer / retailer trade levels & schemes", ozzo: "yes", them: "no" },
      { capability: "Auto outstanding & stock (no accounting bolt-on)", ozzo: "yes", them: "no" },
      { capability: "Accessible to small teams (no high minimum contract)", ozzo: "yes", them: "no", note: "Creatio's minimum annual commitment targets larger organizations." },
      { capability: "Live in days without specialist configuration", ozzo: "yes", them: "partial" },
      dmsPortalRow,
    ],
    chooseThemIf: [
      "You are a mid-to-large organization needing deep no-code workflow automation",
      "You have the budget for an enterprise platform and minimum commitment",
      "Custom BPM across many departments matters more than field-sales depth",
    ],
    chooseOzzoIf: [
      "You are an Indian SME/MSME that wants to go live in days affordably",
      "You need native field tracking, orders and collections out of the box",
      "You want CRM + field sales + WhatsApp without building it on a platform",
    ],
    pricingNote:
      "Creatio is priced for mid-market and enterprise, with a high minimum annual commitment that independent reviews note prices it out of reach for small businesses. OZZO is transparent per-user pricing with no minimum contract — for an SME field-sales team the all-in cost is far lower, and the field-sales capabilities are built in rather than configured.",
    faqs: [
      { q: "Is OZZO a good Creatio alternative for SMEs?", a: "Yes. Creatio is a powerful enterprise no-code platform with a high minimum contract aimed at larger organizations; OZZO is an affordable, India-built CRM with native field sales and WhatsApp that a small team can run from day one." },
      { q: "Why is Creatio less suitable for small businesses?", a: "Independent reviews note Creatio's high minimum annual commitment and enterprise focus (often 500+ employees), plus a steeper initialization phase — which can make it expensive overkill for a typical SME." },
      { q: "When is Creatio the better choice?", a: "For mid-to-large organizations that need deep, custom no-code workflow automation across departments and have the budget for it, Creatio's platform power is a real strength." },
    ],
  },
  // ─────────────────────────────────────────── BOTREE
  {
    slug: "ozzo-vs-botree",
    competitor: "Botree Software",
    competitorCategory: "Enterprise FMCG distribution management (DMS)",
    metaTitle: "OZZO vs Botree — the SME alternative",
    metaDescription:
      "Botree is a specialist FMCG distribution suite with distributor stock and claims. OZZO is an ordering portal plus CRM and field sales, priced per login.",
    keywords: ["OZZO vs Botree", "Botree alternative", "Botree Software alternative", "Botree DMS alternative", "distributor management software India", "affordable DMS software"],
    tagline: "Botree is a distribution specialist built for national FMCG networks. OZZO is trade ordering plus CRM and field sales in one system, priced per login.",
    verdict:
      "Botree Software is a dedicated FMCG distribution management vendor, and its DMS covers the hard half of this category: distributor stock, claims and scheme management, billing, and syncing secondary and inventory data out of distributors' own accounting software, with integrations into SAP, Tally and Busy. OZZO DMS is deliberately narrower — it is a self-service ordering portal that sits on the same database as OZZO's CRM and field-sales product, so a distributor orders on their own price list and sees their own outstanding, and your reps, leads and WhatsApp conversations are in the same system. If distributor stock and claims decide your purchase, buy Botree. If your problem is that orders arrive on WhatsApp and somebody retypes them, OZZO solves that at a published per-login price.",
    bestForThem: "National FMCG brands with large distributor networks and a channel team",
    bestForOzzo: "Regional brands with 10–500 trade customers and no channel team",
    theirStrengths: [
      "Distributor stock and inventory management — the expensive half of this category, and a genuine specialism",
      "Full claims and scheme management, with trade promotions and claim turnaround as a stated focus",
      "FlexiDMS captures and syncs secondary and inventory data out of distributors' own accounting software",
      "Integrations into primary ERP systems including SAP, TallyPrime and Busy",
      "A dedicated mobile DMS built for rural and Rurban distribution, where connectivity is the constraint",
      "Years of focus on FMCG distribution specifically, rather than distribution as a side module",
    ],
    ozzoWins: [
      { title: "CRM, field sales and the trade portal on one database", body: "Botree is distribution software. You would still buy a CRM for your own pipeline and an SFA for your own reps, then maintain the integrations. In OZZO a distributor's portal order, a rep's geo-tagged visit, a lead and a WhatsApp conversation are all records in one system, so there is nothing to reconcile between vendors." },
      { title: "A published price, per login", body: "Enterprise distribution suites are quoted per deployment. OZZO DMS is ₹10,000 a year for 100 distributor and dealer logins as an add-on to a CRM or SFA plan — a number you can budget against before you take a call." },
      { title: "Nothing for the distributor to install", body: "OZZO DMS is a browser page. Trade adoption is the real risk in this category, and a link with a password gets used where an app that needs installing, updating and password resets often drifts back to WhatsApp." },
      { title: "Live in days, not a rollout", body: "DMS switches on against the customers, price lists and schemes already in your OZZO. There is no master-data project, because the masters are already there." },
    ],
    table: [
      { capability: "Distributor self-service ordering portal", ozzo: "yes", them: "yes" },
      { capability: "Per-customer price list & credit limit on the order", ozzo: "yes", them: "yes" },
      { capability: "Schemes applied automatically on a portal order", ozzo: "yes", them: "yes" },
      { capability: "Outstanding visible to the distributor themselves", ozzo: "yes", them: "yes" },
      { capability: "Distributor godown stock & inventory", ozzo: "no", them: "yes", note: "The core of the specialist DMS category. OZZO does not ship it, and says so on /products/dms." },
      { capability: "Auto-replenishment from reorder levels", ozzo: "no", them: "yes", note: "Follows from distributor stock. A genuine Botree strength." },
      { capability: "Claims — damage, scheme, freight, rate difference", ozzo: "no", them: "yes", note: "A real workload on a large network, and absent from OZZO DMS." },
      { capability: "Primary vs secondary stock reconciliation", ozzo: "no", them: "yes", note: "OZZO gives you the orders and dispatches, not a reconciled stock ledger." },
      { capability: "Sync from distributors' own accounting software", ozzo: "no", them: "yes", note: "Botree FlexiDMS is built for exactly this." },
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "no", note: "Botree is distribution software; the front-office CRM is a separate purchase." },
      { capability: "WhatsApp shared inbox + AI knowledge-base assistant", ozzo: "yes", them: "no" },
      { capability: "Your own field force — GPS attendance, geo-tagged visits, beats", ozzo: "yes", them: "partial", note: "Botree's focus is the distributor tier; OZZO covers your own reps in the same subscription." },
      { capability: "Nothing for the distributor to install", ozzo: "yes", them: "partial", note: "Botree ships mobile DMS apps; OZZO DMS is a browser page only." },
      { capability: "Published per-login price", ozzo: "yes", them: "no", note: "Enterprise distribution suites are quoted per deployment. OZZO DMS is ₹10,000 a year for 100 logins, stated publicly." },
    ],
    chooseThemIf: [
      "Distributor stock, replenishment or claims are why you are buying",
      "You need secondary and inventory data pulled out of distributors' own accounting software",
      "You run a national FMCG network with a channel team to operate the system",
      "You need a deep SAP, Tally or Busy integration at the distributor tier",
    ],
    chooseOzzoIf: [
      "Your actual problem is orders arriving on WhatsApp and being retyped",
      "You want the trade portal, your CRM and your field team in one system",
      "You have 10–500 trade customers and nobody whose job is channel software",
      "You want a published price you can budget before a sales call",
    ],
    pricingNote:
      "Botree is an enterprise distribution suite, quoted per deployment — the right shape for a national network, and sized accordingly. OZZO DMS is published: ₹10,000 per year for 100 distributor and dealer logins plus GST, as an add-on to a CRM or SFA plan. The two are not really competing on price, because they are not selling the same depth: Botree's stock and claims engine is work OZZO has not built. Compare them on whether you need that engine.",
    faqs: [
      { q: "Is OZZO a Botree alternative?", a: "For trade ordering and visibility, yes. For distributor stock, auto-replenishment and claims, no — OZZO does not ship those, and Botree specialises in them. If your buying decision rests on stock and claims, Botree is the better product and we would say so on a call." },
      { q: "What does OZZO include that Botree does not?", a: "A built-in CRM with leads, deals and pipelines; a shared WhatsApp inbox with an AI knowledge-base assistant; and a full field-sales product for your own reps — GPS attendance, geo-tagged visits, beat routes, offline order capture and field collections — all on the same database as the distributor portal." },
      { q: "Can I start with OZZO and move to a specialist later?", a: "Many regional brands do exactly that: start by removing the retyping and the balance calls, then move to a stock-and-claims suite if the network grows to the point where that is the bottleneck. Starting with ordering costs less and asks almost nothing of your distributors." },
    ],
  },

  // ─────────────────────────────────────────── MARG ERP
  {
    slug: "ozzo-vs-marg-erp",
    competitor: "Marg ERP",
    competitorCategory: "Accounting-led distribution ERP",
    metaTitle: "OZZO vs Marg ERP — portal or books?",
    metaDescription:
      "Marg ERP is accounting-led distribution software with GST billing. OZZO is a trade ordering portal plus CRM and field sales on one cloud system.",
    keywords: ["OZZO vs Marg ERP", "Marg ERP alternative", "Marg alternative India", "Marg ERP 9+ alternative", "distribution software with GST billing", "cloud distributor management software"],
    tagline: "Marg grew out of accounting and billing. OZZO grew out of field sales. They meet in the middle at distribution, from opposite directions.",
    verdict:
      "Marg ERP is one of India's most widely used distribution and accounting systems, strongest where it started: GST billing, inventory, taxation and the books, with real depth in pharmaceutical distribution. It also has trade-facing ordering — eOrder for salesmen and eRetail, where a retailer orders and can see their distributor-wise outstanding. OZZO comes from the other end: it is a CRM and field-sales platform whose DMS gives your distributors and dealers a browser login to order on their own price list and see what they owe. The honest split is that Marg is the better answer if invoicing and the books must live in the same system, and OZZO is the better answer if what you need is your own field team plus a trade portal, with accounting left to your accountant.",
    bestForThem: "Distributors and businesses wanting billing, GST and inventory in one system",
    bestForOzzo: "Brands with a field team who want the trade to self-serve",
    theirStrengths: [
      "Accounting, GST billing and taxation in the same system as inventory — genuinely one less tool",
      "Very large installed base in Indian distribution, so staff are often already trained on it",
      "Real depth in pharmaceutical distribution, including the batch and expiry handling that trade needs",
      "eOrder and eRetail give salesmen and retailers an ordering app, with distributor-wise outstanding visible to the retailer",
      "ERP-to-ERP ordering, so distributors and customers can order and share invoices machine to machine",
      "Multi-location and multi-user support built up over many years in the market",
    ],
    ozzoWins: [
      { title: "Your own field force is in the product", body: "This is the clearest gap. OZZO ships selfie-and-GPS attendance, live location, geo-tagged visits, beat routes, offline order capture and field payment collection for your own reps, on Android and iPhone. An accounting-led ERP does not try to manage the day of a salesman on a bike." },
      { title: "A CRM for business you have not won yet", body: "Marg manages what you have billed. OZZO also manages what you are chasing — leads, deals, pipelines, quotations and follow-ups — plus a shared WhatsApp inbox with an AI assistant on the same customer record." },
      { title: "Cloud-first, and the portal is just a link", body: "OZZO is a browser product end to end: your managers use a dashboard, your reps use an app, your distributors use a web page. There is nothing to install at the distributor's end and no desktop to maintain." },
      { title: "A published per-login price for the trade portal", body: "OZZO DMS is ₹10,000 a year for 100 distributor and dealer logins, added to a CRM or SFA plan. You can size it before you talk to anyone." },
    ],
    table: [
      { capability: "Accounting, GST billing & the books in one system", ozzo: "no", them: "yes", note: "Marg's origin and its strongest ground. OZZO deliberately leaves accounting to your accountant." },
      { capability: "Pharmaceutical distribution depth — batch, expiry", ozzo: "no", them: "yes", note: "A long-standing Marg specialism." },
      { capability: "Trade-facing ordering app for retailers / distributors", ozzo: "yes", them: "yes", note: "Marg ships eRetail; OZZO ships the DMS portal. Both exist — see the rows below for how they differ." },
      { capability: "Distributor-wise outstanding visible to the buyer", ozzo: "yes", them: "yes" },
      { capability: "Per-customer price list enforced on the portal order", ozzo: "yes", them: "partial" },
      { capability: "Schemes detected & applied automatically on a portal order", ozzo: "yes", them: "partial" },
      { capability: "Your own field force — GPS attendance, geo-tagged visits, beats", ozzo: "yes", them: "no", note: "The clearest difference between the two products." },
      { capability: "Offline order capture that syncs itself", ozzo: "yes", them: "partial" },
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI knowledge-base assistant", ozzo: "yes", them: "no" },
      { capability: "Cloud-native, nothing to install for any user", ozzo: "yes", them: "partial", note: "Marg's flagship is desktop-led, with MargBooks as the cloud product." },
      { capability: "Distributor godown stock & claims", ozzo: "no", them: "partial", note: "Marg is strong on inventory as an ERP; neither product is a specialist claims engine." },
      { capability: "Published per-login price for the trade portal", ozzo: "yes", them: "no" },
    ],
    chooseThemIf: [
      "Billing, GST and your books must live in the same system as stock",
      "You are in pharmaceutical distribution and need batch and expiry handling",
      "Your team already runs Marg and retraining them is the real cost",
      "You want machine-to-machine ERP ordering with your own customers",
    ],
    chooseOzzoIf: [
      "You have reps on the road and need attendance, GPS, visits and beats",
      "You want leads and deals, not only invoices",
      "You want your distributors on a browser link with nothing to install",
      "You are happy keeping accounting in your accountant's software",
    ],
    pricingNote:
      "The two are priced on different models and we will not state Marg's numbers, because their licensing varies by edition, user count and channel — ask them directly. What is worth comparing is the shape: an accounting-led ERP is typically licensed per installation or edition, while OZZO is per user per month for the platform plus ₹10,000 a year per 100 logins for the DMS add-on, plus GST. Many businesses end up running both, keeping the books in an accounting system and the field team and trade portal in OZZO. That is a legitimate answer, not a failure of either product.",
    faqs: [
      { q: "Can OZZO replace Marg ERP?", a: "Not for accounting. OZZO does not do GST invoicing, taxation or your books, and it is not trying to. It replaces the field-sales and trade-ordering half: your reps' attendance and visits, order capture, collections, outstanding against credit limits, and a distributor portal. Plenty of businesses run both." },
      { q: "Does OZZO integrate with Marg or Tally?", a: "No, and that is a deliberate design choice worth understanding. Outstanding and stock are calculated inside OZZO from your own orders, dispatches and collections, so there is no integration to buy or keep alive. If you need the two systems reconciled to the rupee in one place, an accounting-led ERP is the better single system." },
      { q: "Marg already has a retailer ordering app. Why would I add OZZO DMS?", a: "If retailer ordering is all you need, that is a fair question and Marg's eRetail may be enough. OZZO DMS is worth it when you also want your own field team in the same system — GPS attendance, geo-tagged visits and beats — plus per-customer price lists and automatic scheme application on the portal order, and a CRM for the business you have not closed yet." },
    ],
  },

  // ─────────────────────────────────────────── SALESDIARY
  {
    slug: "ozzo-vs-salesdiary",
    competitor: "SalesDiary",
    competitorCategory: "Field sales & distribution platform with DMS",
    metaTitle: "OZZO vs SalesDiary — CRM in the box",
    metaDescription:
      "SalesDiary pairs field sales with a DMS module, van sales and a dealer app. OZZO adds a built-in CRM and WhatsApp inbox, at a published per-login price.",
    keywords: ["OZZO vs SalesDiary", "SalesDiary alternative", "SalesDiary alternative India", "field sales software with DMS", "distributor management software for SMEs", "secondary sales software India"],
    tagline: "SalesDiary and OZZO overlap more than most pairs on this site. The differences are the CRM, the WhatsApp inbox, van sales and how each is priced.",
    verdict:
      "SalesDiary is an Indian field-sales platform with a genuine distribution side: public listings name Secondary Sales, a Distributor Management (DMS) module, Primary Sales, Van Sales, a Dealer App and a Modern Trade app, and reviewers mention tracking distributor stock. That makes it one of the closer comparisons on this site. The differences that matter are at the edges: OZZO includes a front-office CRM with leads, deals and pipelines and a shared WhatsApp inbox with an AI knowledge-base assistant, and publishes a per-login price for its distributor portal. SalesDiary ships van sales and distributor stock tracking, which OZZO does not. Shortlist both and decide on those four things rather than on the field-sales basics, which both cover.",
    bestForThem: "Distribution teams needing van sales and distributor stock tracking",
    bestForOzzo: "Teams wanting CRM, WhatsApp and the trade portal in one system",
    theirStrengths: [
      "A real Distributor Management module rather than ordering bolted onto an SFA",
      "Van sales — direct selling from a vehicle, which OZZO does not ship at all",
      "Distributor stock tracking, named by reviewers as something their teams use",
      "Dedicated Dealer and Modern Trade apps alongside the rep app",
      "Primary and secondary sales handled as distinct flows",
      "Established presence across Indian field-sales teams with attendance and route management",
    ],
    ozzoWins: [
      { title: "A front-office CRM, not only field execution", body: "Leads, deals, visual pipelines, quotations with branded PDFs and follow-up tasks are in OZZO. A distribution-led platform generally assumes the customer already exists and is being served — it does not manage the enquiry that has not become a customer yet." },
      { title: "A shared WhatsApp inbox with an AI assistant", body: "Conversations on your official WhatsApp Business number land in one team inbox attached to the customer record, with an AI assistant answering routine questions from documents you upload. This is the capability no large Indian SFA or DMS vendor ships in the same product." },
      { title: "A published per-login price", body: "OZZO DMS is ₹10,000 a year for 100 distributor and dealer logins, as an add-on to a CRM or SFA plan. Distribution platforms in this tier are generally quoted per deployment." },
      { title: "Nothing for the trade to install", body: "OZZO DMS is a browser page. Where a vendor's trade side is a dealer app, somebody has to get it installed, updated and password-reset across your whole network — and that is where portal adoption usually dies." },
    ],
    table: [
      { capability: "GPS attendance, geo-tagged visits & beat routes", ozzo: "yes", them: "yes" },
      { capability: "Offline order capture", ozzo: "yes", them: "yes" },
      { capability: "Distributor / dealer self-service ordering", ozzo: "yes", them: "yes", note: "SalesDiary ships a Dealer App; OZZO ships a browser portal." },
      { capability: "Per-customer price list & credit limit on the order", ozzo: "yes", them: "partial" },
      { capability: "Schemes applied automatically on a portal order", ozzo: "yes", them: "partial" },
      { capability: "Primary & secondary sales as distinct flows", ozzo: "yes", them: "yes" },
      { capability: "Distributor godown stock tracking", ozzo: "no", them: "yes", note: "Named by SalesDiary reviewers as in use. OZZO does not ship it." },
      { capability: "Van sales — selling direct from a vehicle", ozzo: "no", them: "yes", note: "OZZO does not ship van sales at all." },
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared inbox + AI knowledge-base assistant", ozzo: "yes", them: "no" },
      { capability: "Field payment collection & self-calculating outstanding", ozzo: "yes", them: "partial" },
      { capability: "Nothing for the trade to install", ozzo: "yes", them: "no", note: "Their trade side is an app; OZZO's is a browser page." },
      { capability: "Published per-login price for the trade portal", ozzo: "yes", them: "no" },
    ],
    chooseThemIf: [
      "Van sales is part of how you actually sell",
      "You need distributor godown stock tracked, not just orders and dispatches",
      "A dedicated Modern Trade flow matters to your business",
      "Your distribution side is the whole purchase and you have a CRM already",
    ],
    chooseOzzoIf: [
      "You want the CRM and the field app and the trade portal in one subscription",
      "A shared WhatsApp inbox on the customer record would change your day",
      "You want your distributors on a link, with nothing to install",
      "You want to budget the portal from a published number",
    ],
    pricingNote:
      "SalesDiary's pricing is quoted rather than published, so we will not put a number against their name. OZZO publishes its platform rates and prices the DMS add-on at ₹10,000 per year for 100 distributor and dealer logins plus GST. Because these two products overlap heavily on field-sales basics, price transparency and what is bundled are where the real difference shows up: with OZZO the CRM and the WhatsApp inbox are included rather than being separate tools you buy alongside.",
    faqs: [
      { q: "Is OZZO a good SalesDiary alternative?", a: "It is one of the closest comparisons on this site, so it depends on four things rather than on the basics. OZZO includes a CRM and a shared WhatsApp inbox, and publishes a per-login portal price. SalesDiary ships van sales and distributor stock tracking, which OZZO does not. Decide on those." },
      { q: "What does OZZO not do that SalesDiary does?", a: "Van sales and distributor godown stock tracking, both of which SalesDiary covers and OZZO does not. If either is central to how you sell, shortlist them." },
      { q: "Do both handle secondary sales?", a: "Both capture secondary sales, but differently. OZZO records the sales orders and dispatches a distributor raises for their own shops, which gives you onward selling as it happens. A full reconciled primary-versus-secondary stock view needs distributor stock tracking, which SalesDiary has and OZZO does not." },
    ],
  },

  // ─────────────────────────────────────────── BIZOM DMS
  {
    slug: "ozzo-vs-bizom-dms",
    competitor: "Bizom DMS",
    competitorCategory: "Enterprise distributor management (DMS)",
    metaTitle: "OZZO DMS vs Bizom DMS — per login",
    metaDescription:
      "Bizom DMS covers distributor billing, claims and trade promotions at enterprise scale. OZZO DMS is trade ordering on one platform, priced per login.",
    keywords: ["OZZO vs Bizom DMS", "Bizom DMS alternative", "Bizom distributor management alternative", "affordable distributor management system", "DMS software for SMEs India", "distributor portal per login pricing"],
    tagline: "Both give your trade a way to order. Bizom does the heavy distributor tier at enterprise scale; OZZO does ordering and visibility at a published price.",
    verdict:
      "This compares the distribution halves of the two products — for the field-sales comparison, see OZZO vs Bizom. Bizom DMS is built for the distributor tier of large brands: primary orders, billing and returns, load-in and load-out, collection management, claims management and trade promotions, with Tally integration for multi-brand distributors, plus a Retailer App and a WhatsApp ordering bot on the retail side. OZZO DMS is narrower and priced openly: any customer at any level gets a browser login, orders on their own price list with schemes applied and their credit limit enforced, sees their own outstanding, and dispatches what they sold onward. The dividing line is claims, load-in/load-out and stock. If you need those, Bizom. If you need the retyping and the balance calls to stop, OZZO at ₹10,000 a year per 100 logins.",
    bestForThem: "Large brands running a distributor tier with claims and trade promotions",
    bestForOzzo: "Regional brands who want trade ordering without an enterprise contract",
    theirStrengths: [
      "Claims management and trade promotions as first-class features at the distributor tier",
      "Load-in and load-out, distributor billing and returns — the full distributor operating cycle",
      "Collection management built into the distributor workflow",
      "Tally integration, which matters a lot to multi-brand distributors",
      "A Retailer App plus a WhatsApp ordering bot, giving outlets round-the-clock self-ordering",
      "Scale: Bizom publicly cites very large distributor and outlet numbers across its platform",
    ],
    ozzoWins: [
      { title: "One platform, one database, one login model", body: "Bizom DMS and Bizom SFA are modules of an enterprise suite. In OZZO the distributor's portal order, the rep's geo-tagged visit, the lead, the quotation and the WhatsApp conversation are records in one database — nothing is integrated because nothing is separate." },
      { title: "A published price, per login", body: "₹10,000 a year for 100 distributor and dealer logins plus GST, as an add-on to a CRM or SFA plan. Enterprise DMS is quoted per deployment, which makes budgeting a conversation rather than a calculation." },
      { title: "A login for any customer at any level", body: "Not a distributor tier and a separate retailer app. One portal, where a distributor, a stockist or a single dealer each sees itself and everyone below it — so a small dealer who orders directly is not a special case." },
      { title: "Live without a rollout", body: "The portal switches on against the customers, price lists and schemes already in your OZZO. An enterprise DMS deployment is a project with master data, integration and training phases." },
    ],
    table: [
      { capability: "Trade self-service ordering", ozzo: "yes", them: "yes", note: "Bizom via its Retailer App and WhatsApp bot; OZZO via a browser portal." },
      { capability: "A login for any customer at any level, one portal", ozzo: "yes", them: "partial", note: "Bizom separates the distributor tier from the retailer app; OZZO uses one portal for both." },
      { capability: "Per-customer price list & credit limit on the order", ozzo: "yes", them: "yes" },
      { capability: "Schemes applied automatically on a portal order", ozzo: "yes", them: "yes" },
      { capability: "Outstanding visible to the buyer themselves", ozzo: "yes", them: "yes" },
      { capability: "Distributor billing, returns, load-in & load-out", ozzo: "no", them: "yes", note: "The distributor operating cycle is Bizom's ground, not OZZO's." },
      { capability: "Claims management", ozzo: "no", them: "yes", note: "Not in OZZO DMS. Planned, not built, so not sold." },
      { capability: "Trade promotions management", ozzo: "no", them: "yes" },
      { capability: "Distributor godown stock & auto-replenishment", ozzo: "no", them: "yes" },
      { capability: "Tally / ERP integration at the distributor tier", ozzo: "no", them: "yes", note: "A real Bizom strength for multi-brand distributors." },
      { capability: "Built-in CRM — leads, deals & pipelines", ozzo: "yes", them: "no" },
      { capability: "WhatsApp shared team inbox + AI knowledge-base assistant", ozzo: "yes", them: "partial", note: "Bizom's WhatsApp bot takes retailer orders, which is a different job from a shared CRM inbox with an AI assistant on the customer record." },
      { capability: "Published per-login price", ozzo: "yes", them: "no" },
    ],
    chooseThemIf: [
      "Claims, trade promotions or load-in/load-out are part of the purchase",
      "You need distributor stock and auto-replenishment across a large network",
      "Your distributors are multi-brand and need Tally integration at their end",
      "You are an enterprise brand with a channel team and a rollout budget",
    ],
    chooseOzzoIf: [
      "Your problem is orders arriving on WhatsApp and being retyped by your staff",
      "You want one portal for distributors, stockists and dealers alike",
      "You want the CRM, the field app and the portal in one subscription",
      "You want to know the price before the first call",
    ],
    pricingNote:
      "Bizom is sold as an enterprise contract quoted per deployment, and we will not put a number on it — ask them. OZZO DMS is ₹10,000 per year for 100 distributor and dealer logins plus GST, on top of a CRM or SFA plan. The honest framing is that these are different depths of product: Bizom's claims, promotions and stock engine is work OZZO has not done. What OZZO offers is the ordering and visibility layer at a price a regional brand can approve without a committee.",
    faqs: [
      { q: "How is this different from the OZZO vs Bizom page?", a: "That page compares the field-sales products — attendance, visits, beats and rep order capture. This one compares the distribution side: the distributor portal, claims, stock and how each is priced. Most buyers end up reading both." },
      { q: "Is OZZO DMS a cheaper Bizom DMS?", a: "It is cheaper, but calling it the same thing cheaper would be misleading. Bizom covers distributor billing, returns, load-in and load-out, claims, trade promotions and stock. OZZO DMS covers ordering, pricing, schemes, outstanding and dispatch. It is a narrower product at a published price, not the same product discounted." },
      { q: "Does OZZO have a WhatsApp ordering bot like Bizom?", a: "No — and the distinction is worth being precise about. Bizom's WhatsApp bot lets a retailer place an order through WhatsApp. OZZO's WhatsApp is a shared team inbox on your official Business number, attached to the customer record, with an AI assistant answering routine questions from your own documents. Different jobs: theirs is order capture, ours is conversation." },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
