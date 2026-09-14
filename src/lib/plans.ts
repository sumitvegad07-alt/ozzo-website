/**
 * Plans & Packages — a module-wise capability model for the /plans page.
 *
 * IMPORTANT: this file carries NO pricing. OZZO's public marketing does not
 * publish per-user rates; the site presents plans by CAPABILITY and routes
 * every "how much" question to a demo/quote. Every row below is grounded in a
 * shipped, production-verified module (see OZZO_FEATURE_MASTER_CATALOG.md and
 * the product pages). Column entitlements follow the real line-plan model:
 *
 *   CRM      — front office: leads, WhatsApp+AI, quotations, one customer record
 *   FIELD    — field visibility (the WFA line): attendance, GPS, visits, routes
 *   SALES    — full field sales (the SFA line): FIELD + orders, collections,
 *              outstanding, stock, schemes, distribution
 *   COMPLETE — CRM + SALES together, one login, one source of truth
 *
 * A boolean renders as a tick / dash; a string renders as a short qualifier.
 */

export type PlanKey = "crm" | "field" | "sales" | "complete";

export type Plan = {
  key: PlanKey;
  name: string;
  /** One-line positioning under the name. */
  tagline: string;
  /** Lucide icon name understood by <Icon />. */
  icon: string;
  /** Accent utility classes reused from the product-line palette. */
  accentClass: string;
  ringClass: string;
  /** "Everything in X, plus" ladder note (null for the base card). */
  inherits: string | null;
  /** Short outward blurb for the plan card. */
  blurb: string;
  /** 5–6 headline capabilities for the card. */
  highlights: string[];
  popular?: boolean;
  /** CTA label — no plan quotes a price, only a next step. */
  cta: string;
};

export const plans: Plan[] = [
  {
    key: "crm",
    name: "CRM",
    tagline: "Win & keep customers",
    icon: "MessageSquare",
    accentClass: "text-violet-500",
    ringClass: "ring-violet-500/20",
    inherits: null,
    blurb:
      "The front office: capture every enquiry, work it on WhatsApp with an AI assistant, and quote in minutes — all on one shared customer record.",
    highlights: [
      "Leads, deals & visual Kanban pipelines",
      "Shared WhatsApp inbox + AI knowledge assistant",
      "Branded PDF quotations on your letterhead",
      "One customer timeline — messages, deals, visits",
      "Custom fields, roles & data-scoping",
    ],
    cta: "Start free trial",
  },
  {
    key: "field",
    name: "Field",
    tagline: "See your field team, live",
    icon: "MapPin",
    accentClass: "text-cyan-500",
    ringClass: "ring-cyan-500/20",
    inherits: "the essentials",
    blurb:
      "Field visibility done properly: selfie-and-GPS attendance, live location, geo-tagged visits and beat routes that reps actually work in order.",
    highlights: [
      "Selfie + GPS attendance, auto-classified",
      "Live location, map & tracking health",
      "Geo-tagged customer & lead visits",
      "Beat / route planning & compliance",
      "Territory management & expense claims",
    ],
    cta: "Start free trial",
  },
  {
    key: "sales",
    name: "Sales",
    tagline: "Sell, collect & distribute",
    icon: "ShoppingCart",
    accentClass: "text-emerald-500",
    ringClass: "ring-emerald-500/20",
    inherits: "Field",
    popular: true,
    blurb:
      "The full field-sales engine: take the order offline, collect the cash, and watch outstanding and stock keep themselves — no accounting bolt-on.",
    highlights: [
      "Offline order capture + multi-unit ordering",
      "Field payment collection with proof",
      "Auto outstanding, credit limits & ageing",
      "Auto closing stock from movement",
      "Trade schemes, price lists & discount control",
      "Distributor / dealer / retailer levels",
    ],
    cta: "Start free trial",
  },
  {
    key: "complete",
    name: "Complete",
    tagline: "The whole platform, one login",
    icon: "Layers",
    accentClass: "text-primary",
    ringClass: "ring-primary/25",
    inherits: "Sales",
    blurb:
      "Everything OZZO does — CRM and field sales on one customer record. The office and the field finally work from the same source of truth.",
    highlights: [
      "Everything in CRM + everything in Sales",
      "WhatsApp & AI on your field customers",
      "One login, one customer record, one truth",
      "11 built-in reports + a per-rep DSR",
      "Roles, data-scoping & reporting hierarchy",
      "Guided onboarding mapped to your workflow",
    ],
    cta: "Book a demo",
  },
];

/** What every plan includes, whichever line you buy. */
export const includedEverywhere = [
  "Customers",
  "Products",
  "Tasks",
  "Attendance",
  "Leave",
  "Holiday",
  "Announcements",
];

/** The differentiators strip above the comparison table. */
export const setsApart = [
  {
    icon: "WifiOff",
    title: "Works fully offline",
    body: "Attendance, visits, orders, payments and expenses capture with no signal and sync themselves.",
  },
  {
    icon: "Calculator",
    title: "No accounting bolt-on",
    body: "Outstanding and closing stock keep themselves — no Tally or ERP to re-key orders into.",
  },
  {
    icon: "Smartphone",
    title: "Web + mobile, one login",
    body: "A manager dashboard in the browser and an Android field app that share one database.",
  },
  {
    icon: "ShieldCheck",
    title: "Your data, you own it",
    body: "Granular roles, per-module rights and data-scoping — and everything is yours to export.",
  },
];

export type MatrixValue = boolean | string;

export type FeatureRow = {
  feature: string;
  /** Optional short clarifier shown under the feature name. */
  note?: string;
  crm: MatrixValue;
  field: MatrixValue;
  sales: MatrixValue;
  complete: MatrixValue;
};

export type FeatureGroup = {
  name: string;
  icon: string;
  rows: FeatureRow[];
};

/**
 * The module-wise capability matrix. Column truth follows the line-plan model
 * above; a `true` means the module ships on that plan today.
 */
export const featureGroups: FeatureGroup[] = [
  {
    name: "Attendance & workforce",
    icon: "Fingerprint",
    rows: [
      { feature: "Selfie + GPS punch in / out", note: "Location-verified attendance", crm: "Basic", field: true, sales: true, complete: true },
      { feature: "Auto-classified attendance (present / late)", crm: false, field: true, sales: true, complete: true },
      { feature: "Shifts, rosters & attendance muster", crm: false, field: true, sales: true, complete: true },
      { feature: "Odometer capture on punch", crm: false, field: true, sales: true, complete: true },
      { feature: "Leave management & approval flow", crm: true, field: true, sales: true, complete: true },
      { feature: "Holiday calendar & announcements", crm: true, field: true, sales: true, complete: true },
    ],
  },
  {
    name: "Location tracking",
    icon: "Navigation",
    rows: [
      { feature: "Live location of every punched-in rep", crm: false, field: true, sales: true, complete: true },
      { feature: "All-locations map & daily timeline", crm: false, field: true, sales: true, complete: true },
      { feature: "Historical track report", crm: false, field: true, sales: true, complete: true },
      { feature: "Tracking Health — flags a dead / drifting device", crm: false, field: true, sales: true, complete: true },
      { feature: "Distance travelled (GPS + odometer)", crm: false, field: true, sales: true, complete: true },
      { feature: "Geo-fencing on visit check-in / out", crm: false, field: true, sales: true, complete: true },
    ],
  },
  {
    name: "Visits, beats & territory",
    icon: "Route",
    rows: [
      { feature: "Geo-tagged customer & lead visits", crm: "Add WFA", field: true, sales: true, complete: true },
      { feature: "Beat / route planning & calendar", crm: false, field: true, sales: true, complete: true },
      { feature: "Route compliance — skip needs a reason", crm: false, field: true, sales: true, complete: true },
      { feature: "Territory master (country → state → city → area)", crm: false, field: true, sales: true, complete: true },
      { feature: "Area-wise assignment of reps & customers", crm: false, field: true, sales: true, complete: true },
      { feature: "Productive-visit reporting", note: "A visit that produced an order", crm: false, field: true, sales: true, complete: true },
    ],
  },
  {
    name: "Orders & distribution",
    icon: "ShoppingCart",
    rows: [
      { feature: "Order capture — fully offline", crm: false, field: false, sales: true, complete: true },
      { feature: "Multi-unit order collection", note: "Sell in box, piece, case — auto-converted", crm: false, field: false, sales: true, complete: true },
      { feature: "Order guardrails (credit / overdue / stock)", note: "Ignore, warn or block, per account", crm: false, field: false, sales: true, complete: true },
      { feature: "Dispatch & delivery workflow", crm: false, field: false, sales: true, complete: true },
      { feature: "Distributor / dealer / retailer trade levels", crm: false, field: false, sales: true, complete: true },
      { feature: "Primary vs secondary sales tagging", crm: false, field: false, sales: true, complete: true },
      { feature: "Bulk product upload & custom order fields", crm: false, field: false, sales: true, complete: true },
    ],
  },
  {
    name: "Payments & outstanding",
    icon: "IndianRupee",
    rows: [
      { feature: "Field payment collection with proof", crm: false, field: false, sales: true, complete: true },
      { feature: "Self-calculating outstanding per customer", crm: false, field: false, sales: true, complete: true },
      { feature: "Credit limits & overdue-days control", crm: false, field: false, sales: true, complete: true },
      { feature: "Customer financials & ledger view", crm: false, field: false, sales: true, complete: true },
      { feature: "Ageing report", crm: false, field: false, sales: true, complete: true },
    ],
  },
  {
    name: "Stock",
    icon: "Boxes",
    rows: [
      { feature: "Closing stock derived from movement", note: "No separate inventory tool", crm: false, field: false, sales: true, complete: true },
      { feature: "Stock ledger per product", crm: false, field: false, sales: true, complete: true },
      { feature: "Stock check inside order guardrails", crm: false, field: false, sales: true, complete: true },
    ],
  },
  {
    name: "Pricing, schemes & catalogue",
    icon: "Percent",
    rows: [
      { feature: "Trade schemes (free goods, slabs, buy-X-get-Y)", crm: false, field: false, sales: true, complete: true },
      { feature: "Customer-specific price lists", crm: false, field: false, sales: true, complete: true },
      { feature: "Product-specific discount limits", crm: false, field: false, sales: true, complete: true },
      { feature: "Applied automatically on order, invoice & PDF", crm: false, field: false, sales: true, complete: true },
    ],
  },
  {
    name: "CRM & WhatsApp",
    icon: "MessageSquare",
    rows: [
      { feature: "Leads, deals & visual Kanban pipelines", crm: true, field: false, sales: false, complete: true },
      { feature: "Shared WhatsApp team inbox & templates", crm: true, field: false, sales: false, complete: true },
      { feature: "AI assistant on your own knowledge base", crm: true, field: false, sales: false, complete: true },
      { feature: "Branded PDF quotations", crm: true, field: false, sales: false, complete: true },
      { feature: "One customer timeline — office + field", crm: true, field: false, sales: false, complete: true },
    ],
  },
  {
    name: "Documents",
    icon: "FileText",
    rows: [
      { feature: "Order / dispatch / receipt PDFs", crm: false, field: false, sales: true, complete: true },
      { feature: "Your company letterhead & templates", crm: true, field: false, sales: true, complete: true },
      { feature: "Quotation PDFs with version trail", crm: true, field: false, sales: false, complete: true },
    ],
  },
  {
    name: "Reports, dashboards & DSR",
    icon: "PieChart",
    rows: [
      { feature: "Configurable report engine (save & export)", crm: true, field: true, sales: true, complete: true },
      { feature: "Lead, Deal & Quotation reports", crm: true, field: false, sales: false, complete: true },
      { feature: "Attendance, Visit & Expense reports", crm: false, field: true, sales: true, complete: true },
      { feature: "Order, Sales, Payment & Ageing reports", crm: false, field: false, sales: true, complete: true },
      { feature: "Daily Sales Report (per rep, one line)", crm: false, field: "Visits", sales: true, complete: true },
      { feature: "Plan-aware dashboards", crm: true, field: true, sales: true, complete: true },
    ],
  },
  {
    name: "Expenses",
    icon: "ReceiptText",
    rows: [
      { feature: "Expense claims with proof capture", crm: false, field: true, sales: true, complete: true },
      { feature: "Auto travel-distance claim", crm: false, field: true, sales: true, complete: true },
      { feature: "Multi-level approval flow", crm: false, field: true, sales: true, complete: true },
      { feature: "Custom expense categories & limits", crm: false, field: true, sales: true, complete: true },
    ],
  },
  {
    name: "Platform, admin & security",
    icon: "ShieldCheck",
    rows: [
      { feature: "Web dashboard + Android field app", crm: true, field: true, sales: true, complete: true },
      { feature: "Full offline capture & auto-sync", crm: true, field: true, sales: true, complete: true },
      { feature: "Custom fields across 12 record types", crm: true, field: true, sales: true, complete: true },
      { feature: "Roles, per-module rights & data-scoping", crm: true, field: true, sales: true, complete: true },
      { feature: "Reporting hierarchy (manager / approver)", crm: true, field: true, sales: true, complete: true },
      { feature: "Real-time sync (web ↔ mobile)", crm: true, field: true, sales: true, complete: true },
      { feature: "Bulk import framework", crm: true, field: true, sales: true, complete: true },
      { feature: "Guided onboarding & data migration", crm: true, field: true, sales: true, complete: true },
    ],
  },
];

/** No-price FAQs for the Plans page — every "cost" answer routes to a demo. */
export const planFaqs: { q: string; a: string }[] = [
  {
    q: "How are OZZO plans structured?",
    a: "By product line, not by feature drip. CRM runs your front office; Field (WFA) gives you field visibility — attendance, GPS, visits and routes; Sales (SFA) adds the full sell-collect-distribute flow with orders, payments, outstanding, stock and schemes; and Complete is CRM and Sales together on one login. You buy the line that fits how your team works and move up whenever you're ready.",
  },
  {
    q: "Which plan is right for my team?",
    a: "If you sell and support customers from the office, start with CRM. If your priority is knowing what your field team is doing, start with Field. If reps take orders and collect money on the ground, choose Sales. If you want the office and the field on one record, choose Complete. Book a demo and we'll recommend the exact fit for your workflow.",
  },
  {
    q: "Can I start on one plan and upgrade later?",
    a: "Yes. The plans are a ladder — everything in a lower line carries into the higher one, on the same data. You can start with field visibility and add the full sales flow, or start with CRM and add the field team, without migrating anything.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — a refundable trial with 10-day and 30-day options, so your own team can use OZZO live with your real data before you commit. Share a few details to book a demo and we'll set it up.",
  },
  {
    q: "Do I have to buy the whole platform?",
    a: "No. Each line stands on its own. Every plan already includes the essentials — customers, products, tasks, attendance, leave, holiday and announcements — so even the entry line is a complete, usable system.",
  },
  {
    q: "How do I get a quote?",
    a: "Tell us your team size and which line fits, and our team will put together the right package for you. Just book a demo or request a callback — there's no obligation.",
  },
  {
    q: "Does OZZO need any other software to run?",
    a: "No. Outstanding and closing stock keep themselves inside OZZO, so there's no Tally, ERP or separate inventory tool to bolt on. The Android app also works fully offline and syncs on its own, so the field never waits for the network.",
  },
  {
    q: "Can I control what each person sees?",
    a: "Yes, on every plan. Granular per-module roles decide who can view, create, edit or delete each record type, and data-scoping limits each person to their own records, their team, their department or the whole company.",
  },
];
