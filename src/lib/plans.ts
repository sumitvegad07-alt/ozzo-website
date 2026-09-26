/**
 * Plans & Packages — the five sellable OZZO plans, module by module.
 *
 * Mirrors the app's canonical plan catalog (wacrm-web/src/lib/plans/catalog.ts):
 *   Three product lines — CRM, WFA (Workforce Automation), SFA (Sales Force
 *   Automation). SFA always includes WFA. The five plans are combinations:
 *   CRM · WFA · CRM + WFA · SFA · CRM + SFA.
 *
 * This file carries NO pricing and NO trial language — public marketing routes
 * every "how much" question to a demo. Each comparison row is tagged with the
 * product LINE that owns it, so every plan column is derived from the real
 * entitlement map and can never drift from the app.
 */

export type PlanId = "CRM" | "WFA" | "CRM_WFA" | "SFA" | "CRM_SFA";
export type ProductLine = "crm" | "wfa" | "sfa";

/** Display order across cards and the comparison table. */
export const planOrder: PlanId[] = ["CRM", "WFA", "CRM_WFA", "SFA", "CRM_SFA"];

/** Which product lines each plan turns on (SFA includes WFA). */
export const PLAN_LINES: Record<PlanId, Record<ProductLine, boolean>> = {
  CRM: { crm: true, wfa: false, sfa: false },
  WFA: { crm: false, wfa: true, sfa: false },
  CRM_WFA: { crm: true, wfa: true, sfa: false },
  SFA: { crm: false, wfa: true, sfa: true },
  CRM_SFA: { crm: true, wfa: true, sfa: true },
};

export type Plan = {
  id: PlanId;
  /** Short header name (also the comparison column label). */
  name: string;
  tagline: string;
  icon: string;
  accentClass: string;
  ringClass: string;
  /** Card ladder note ("Everything in X, plus…"); null hides it. */
  inherits: string | null;
  blurb: string;
  highlights: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    id: "CRM",
    name: "CRM",
    tagline: "Win & keep customers",
    icon: "MessageSquare",
    accentClass: "text-violet-500",
    ringClass: "ring-violet-500/20",
    inherits: null,
    blurb:
      "The front office. Capture every enquiry, work it on WhatsApp with an AI assistant, and quote in minutes — on one shared customer record.",
    highlights: [
      "Leads, deals & visual Kanban pipelines",
      "Shared WhatsApp inbox + AI assistant",
      "Branded PDF quotations",
      "Custom fields, roles & data-scoping",
    ],
  },
  {
    id: "WFA",
    name: "WFA",
    tagline: "See your field team, live",
    icon: "MapPin",
    accentClass: "text-cyan-500",
    ringClass: "ring-cyan-500/20",
    inherits: null,
    blurb:
      "Workforce Automation. Selfie-and-GPS attendance, live location, geo-tagged visits and territory your reps actually work in order.",
    highlights: [
      "Selfie + GPS attendance & live location",
      "Geo-tagged visits & territory",
      "Territory management",
      "Expense claims with auto distance",
    ],
  },
  {
    id: "CRM_WFA",
    name: "CRM + WFA",
    tagline: "Front office + field force",
    icon: "Layers",
    accentClass: "text-blue-500",
    ringClass: "ring-blue-500/20",
    inherits: "CRM and WFA",
    blurb:
      "Your customer database gets a field team. Every geo-tagged visit lands on the same record your office works from — one login, office and field.",
    highlights: [
      "Everything in CRM",
      "Everything in WFA",
      "Field visits on the customer record",
      "WhatsApp CRM + live field tracking",
    ],
  },
  {
    id: "SFA",
    name: "SFA",
    tagline: "Sell, collect & distribute",
    icon: "ShoppingCart",
    accentClass: "text-emerald-500",
    ringClass: "ring-emerald-500/20",
    inherits: "WFA",
    blurb:
      "The full field-sales engine. Take the order offline, collect the cash, and watch outstanding and stock keep themselves — no accounting bolt-on.",
    highlights: [
      "Offline order capture + multi-unit ordering",
      "Field collection, auto outstanding & credit limits",
      "Auto closing stock, trade schemes & price lists",
      "Distributor / dealer / retailer levels",
    ],
  },
  {
    id: "CRM_SFA",
    name: "CRM + SFA",
    tagline: "The complete platform",
    icon: "Sparkles",
    accentClass: "text-primary",
    ringClass: "ring-primary/25",
    inherits: "SFA",
    popular: true,
    blurb:
      "Everything OZZO does — CRM and full field sales on one customer record. The office and the field finally run from one source of truth.",
    highlights: [
      "Everything in CRM + everything in SFA",
      "WhatsApp & AI on your field customers",
      "One login, one customer record, one truth",
      "11 built-in reports + a per-rep DSR",
    ],
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
  note?: string;
  /**
   * The product line that owns this capability. "base" = in every plan.
   * A plan column is a tick when the plan turns that line on.
   */
  line: "base" | ProductLine;
  /** Per-plan overrides for nuanced rows (e.g. a "Basic" qualifier). */
  values?: Partial<Record<PlanId, MatrixValue>>;
};

export type FeatureGroup = {
  name: string;
  icon: string;
  rows: FeatureRow[];
};

/** Resolve one cell for a plan — override wins, else derive from the line. */
export function cellValue(row: FeatureRow, plan: PlanId): MatrixValue {
  if (row.values && plan in row.values) return row.values[plan]!;
  if (row.line === "base") return true;
  return PLAN_LINES[plan][row.line];
}

/**
 * The module-wise capability matrix. Column truth is derived from the line tag
 * plus the entitlement map above, so it always matches what the app unlocks.
 */
export const featureGroups: FeatureGroup[] = [
  {
    name: "Attendance & workforce",
    icon: "Fingerprint",
    rows: [
      {
        feature: "Selfie + GPS punch in / out",
        note: "Location-verified attendance",
        line: "wfa",
        values: { CRM: "Basic" },
      },
      { feature: "Auto-classified attendance (present / late)", line: "wfa" },
      { feature: "Shifts, rosters & attendance muster", line: "wfa" },
      { feature: "Odometer capture on punch", line: "wfa" },
      { feature: "Leave management & approval flow", line: "base" },
      { feature: "Holiday calendar & announcements", line: "base" },
    ],
  },
  {
    name: "Location tracking",
    icon: "Navigation",
    rows: [
      { feature: "Live location of every punched-in rep", line: "wfa" },
      { feature: "All-locations map & daily timeline", line: "wfa" },
      { feature: "Historical track report", line: "wfa" },
      { feature: "Tracking Health — flags a dead / drifting device", line: "wfa" },
      { feature: "Distance travelled (GPS + odometer)", line: "wfa" },
      { feature: "Geo-fencing on visit check-in / out", line: "wfa" },
    ],
  },
  {
    name: "Visits, beats & territory",
    icon: "Route",
    rows: [
      { feature: "Geo-tagged customer & lead visits", line: "wfa" },
      { feature: "Beat / route planning & calendar", line: "sfa" },
      { feature: "Route compliance — skip needs a reason", line: "sfa" },
      { feature: "Territory master (country → state → city → area)", line: "wfa" },
      { feature: "Area-wise assignment of reps & customers", line: "wfa" },
      { feature: "Productive-visit reporting", note: "A visit that produced an order", line: "wfa" },
    ],
  },
  {
    name: "Orders & distribution",
    icon: "ShoppingCart",
    rows: [
      { feature: "Order capture — fully offline", line: "sfa" },
      { feature: "Multi-unit order collection", note: "Box, piece, case — auto-converted", line: "sfa" },
      { feature: "Order guardrails (credit / overdue / stock)", note: "Ignore, warn or block", line: "sfa" },
      { feature: "Dispatch & delivery workflow", line: "sfa" },
      { feature: "Distributor / dealer / retailer trade levels", line: "sfa" },
      { feature: "Primary vs secondary sales tagging", line: "sfa" },
      { feature: "Bulk product upload & custom order fields", line: "sfa" },
    ],
  },
  {
    name: "Payments & outstanding",
    icon: "IndianRupee",
    rows: [
      { feature: "Field payment collection with proof", line: "sfa" },
      { feature: "Self-calculating outstanding per customer", line: "sfa" },
      { feature: "Credit limits & overdue-days control", line: "sfa" },
      { feature: "Customer financials & ledger view", line: "sfa" },
      { feature: "Ageing report", line: "sfa" },
    ],
  },
  {
    name: "Stock",
    icon: "Boxes",
    rows: [
      { feature: "Closing stock derived from movement", note: "No separate inventory tool", line: "sfa" },
      { feature: "Stock ledger per product", line: "sfa" },
      { feature: "Stock check inside order guardrails", line: "sfa" },
    ],
  },
  {
    name: "Pricing, schemes & catalogue",
    icon: "Percent",
    rows: [
      { feature: "Trade schemes (free goods, slabs, buy-X-get-Y)", line: "sfa" },
      { feature: "Customer-specific price lists", line: "sfa" },
      { feature: "Product-specific discount limits", line: "sfa" },
      { feature: "Applied automatically on order, invoice & PDF", line: "sfa" },
    ],
  },
  {
    name: "CRM & WhatsApp",
    icon: "MessageSquare",
    rows: [
      { feature: "Leads, deals & visual Kanban pipelines", line: "crm" },
      { feature: "Shared WhatsApp team inbox & templates", line: "crm" },
      { feature: "AI assistant on your own knowledge base", line: "crm" },
      { feature: "Branded PDF quotations", line: "crm" },
      { feature: "One customer timeline — office + field", line: "crm" },
    ],
  },
  {
    name: "Documents",
    icon: "FileText",
    rows: [
      { feature: "Order / dispatch / receipt PDFs", line: "sfa" },
      { feature: "Quotation PDFs with version trail", line: "crm" },
      { feature: "Your company letterhead & templates", line: "base" },
    ],
  },
  {
    name: "Reports, dashboards & DSR",
    icon: "PieChart",
    rows: [
      { feature: "Configurable report engine (save & export)", line: "base" },
      { feature: "Lead, Deal & Quotation reports", line: "crm" },
      { feature: "Attendance, Visit & Expense reports", line: "wfa" },
      { feature: "Order, Sales, Payment & Ageing reports", line: "sfa" },
      {
        feature: "Daily Sales Report (per rep, one line)",
        line: "sfa",
        values: { WFA: "Visits", CRM_WFA: "Visits" },
      },
      { feature: "Plan-aware dashboards", line: "base" },
    ],
  },
  {
    name: "Expenses",
    icon: "ReceiptText",
    rows: [
      { feature: "Expense claims with proof capture", line: "wfa" },
      { feature: "Auto travel-distance claim", line: "wfa" },
      { feature: "Multi-level approval flow", line: "wfa" },
      { feature: "Custom expense categories & limits", line: "wfa" },
    ],
  },
  {
    name: "Platform, admin & security",
    icon: "ShieldCheck",
    rows: [
      { feature: "Web dashboard + Android field app", line: "base" },
      { feature: "Full offline capture & auto-sync", line: "base" },
      { feature: "Custom fields across 12 record types", line: "base" },
      { feature: "Roles, per-module rights & data-scoping", line: "base" },
      { feature: "Reporting hierarchy (manager / approver)", line: "wfa" },
      { feature: "Real-time sync (web ↔ mobile)", line: "base" },
      { feature: "Bulk import framework", line: "base" },
      { feature: "Guided onboarding & data migration", line: "base" },
    ],
  },
];

/** No-price, no-trial FAQs for the Plans page — every "cost" routes to a demo. */
export const planFaqs: { q: string; a: string }[] = [
  {
    q: "How are OZZO plans structured?",
    a: "Around three product lines — CRM for your front office, WFA (Workforce Automation) for field visibility, and SFA (Sales Force Automation) for the full sell-collect-distribute flow. SFA always includes WFA. The five plans are combinations: CRM, WFA, CRM + WFA, SFA, and CRM + SFA. You buy the combination that fits how your team works.",
  },
  {
    q: "Which plan is right for my team?",
    a: "If you sell and support customers from the office, start with CRM. If your priority is knowing what your field team is doing, choose WFA. Want both? CRM + WFA. If reps take orders and collect money on the ground, choose SFA — and add the front office with CRM + SFA for the complete platform. Book a demo and we'll recommend the exact fit.",
  },
  {
    q: "What's the difference between WFA and SFA?",
    a: "WFA is field visibility: attendance, GPS, live location, geo-tagged visits, territory and expenses. SFA is the full field-sales line and always includes WFA, adding beat/route management, order capture, payment collection, outstanding, stock, schemes and distributor/dealer management on top. You move up a line, not across to another product.",
  },
  {
    q: "Can I combine plans or upgrade later?",
    a: "Yes. Each line snaps onto the others on the same data — add the CRM front office to a field team, or add full field sales to a CRM, without migrating anything. You can start narrow and grow into the complete platform whenever you're ready.",
  },
  {
    q: "Do I have to buy the whole platform?",
    a: "No. Each line stands on its own. Every plan already includes the essentials — customers, products, tasks, attendance, leave, holiday and announcements — so even a single line is a complete, usable system.",
  },
  {
    q: "How do I get a quote?",
    a: "Tell us your team size and which plan fits, and our team will put together the right package for you. Just book a demo or request a callback — a real person will map it to your workflow.",
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
