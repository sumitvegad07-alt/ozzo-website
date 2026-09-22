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
];

export const comparisons: Comparison[] = [
  // ─────────────────────────────────────────── BIZOM
  {
    slug: "ozzo-vs-bizom",
    competitor: "Bizom",
    competitorCategory: "Enterprise SFA for FMCG & CPG",
    metaTitle: "OZZO vs Bizom — affordable SFA alternative for Indian SMEs",
    metaDescription:
      "An honest OZZO vs Bizom comparison. Bizom is a heavyweight enterprise SFA for large FMCG brands; OZZO is the affordable, all-in-one CRM + field sales + WhatsApp platform built for Indian SMEs and MSMEs. See where each one fits.",
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
    metaTitle: "OZZO vs BeatRoute — all-in-one alternative for SME field sales",
    metaDescription:
      "An honest OZZO vs BeatRoute comparison. BeatRoute is a goal-driven AI retail-execution platform for larger brands; OZZO is the all-in-one CRM + field sales + WhatsApp platform for Indian SMEs. See where each fits.",
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
    metaTitle: "OZZO vs FieldAssist — affordable all-in-one SFA for SMEs",
    metaDescription:
      "An honest OZZO vs FieldAssist comparison. FieldAssist is an enterprise FMCG/CPG sales-automation and distribution platform; OZZO is the affordable, all-in-one CRM + field sales + WhatsApp platform for Indian SMEs. See where each fits.",
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
    metaTitle: "OZZO vs Zoho CRM — CRM with native field-force tracking",
    metaDescription:
      "An honest OZZO vs Zoho CRM comparison. Zoho is a strong, affordable general CRM but needs third-party add-ons for GPS field tracking; OZZO ships CRM, native field-force tracking, orders, collections and WhatsApp in one system. See where each fits.",
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
      { title: "Native field-force tracking (no add-ons)", body: "Zoho CRM has no built-in GPS field tracking — you rely on third-party marketplace apps. OZZO ships selfie + GPS attendance, live location, geo-tagged visits and beat routes natively on its own Android app." },
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
    metaTitle: "OZZO vs Salesforce — affordable field-sales CRM for Indian SMEs",
    metaDescription:
      "An honest OZZO vs Salesforce comparison. Salesforce is the most powerful enterprise CRM but is costly and complex for Indian SMEs; OZZO is an affordable, India-built CRM + field sales + WhatsApp platform that goes live in days. See where each fits.",
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
    metaTitle: "OZZO vs Unolo — field tracking plus CRM, orders & WhatsApp",
    metaDescription:
      "An honest OZZO vs Unolo comparison. Unolo is a strong, fast field-force tracking and attendance app; OZZO adds a full CRM, offline orders, field collections and a WhatsApp inbox on top of tracking. See where each fits.",
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
      { q: "Does OZZO do live tracking and attendance like Unolo?", a: "Yes — selfie + GPS attendance, live location, geo-tagged visits and beat routes are all built into OZZO's Android app, alongside the CRM and sales features." },
      { q: "When is Unolo the better choice?", a: "If all you need is lightweight, fast-to-deploy field tracking and attendance — without CRM, orders or collections — Unolo is a focused, well-adopted option." },
    ],
  },

  // ─────────────────────────────────────────── FIELDSENSE
  {
    slug: "ozzo-vs-fieldsense",
    competitor: "FieldSense",
    competitorCategory: "Field-force management app",
    metaTitle: "OZZO vs FieldSense — field tracking plus CRM, orders & WhatsApp",
    metaDescription:
      "An honest OZZO vs FieldSense comparison. FieldSense is an easy, mobile-first field-force tracking app with a free tier; OZZO adds a full CRM, offline orders, field collections and a WhatsApp inbox on top. See where each fits.",
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
    metaTitle: "OZZO vs TrackOlap — purpose-built field sales vs broad suite",
    metaDescription:
      "An honest OZZO vs TrackOlap comparison. TrackOlap bundles sales CRM, HR/payroll, remote monitoring and IT helpdesk; OZZO is a purpose-built CRM + field sales + WhatsApp platform with deeper orders, collections and distribution. See where each fits.",
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
    metaTitle: "OZZO vs Delta Sales App — all-in-one CRM + field sales",
    metaDescription:
      "An honest OZZO vs Delta Sales App comparison. Delta Sales App is a well-adopted field-sales app for distributors and manufacturers; OZZO adds a full CRM and WhatsApp inbox to the same order, tracking and collection flow. See where each fits.",
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
    metaTitle: "OZZO vs mAssist — affordable all-in-one SFA for SMEs",
    metaDescription:
      "An honest OZZO vs mAssist comparison. mAssist is an enterprise sales-force-automation platform for large FMCG/CPG distribution; OZZO is the affordable, all-in-one CRM + field sales + WhatsApp platform for Indian SMEs. See where each fits.",
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
    metaTitle: "OZZO vs Koops — all-in-one sales platforms compared",
    metaDescription:
      "An honest OZZO vs Koops comparison. Both are all-in-one sales & distribution platforms for Indian SMEs. Koops leans on DMS and native Tally; OZZO leans on WhatsApp CRM, an AI assistant and workforce depth. See where each fits.",
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
    metaTitle: "OZZO vs Creatio — affordable field-sales CRM for Indian SMEs",
    metaDescription:
      "An honest OZZO vs Creatio comparison. Creatio is a powerful enterprise no-code CRM/BPM platform with a high minimum contract; OZZO is an affordable, India-built CRM + field sales + WhatsApp platform that goes live in days. See where each fits.",
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
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
