/**
 * Single source of truth for site-wide constants: brand, contact
 * details, product lines, and SEO defaults. Fill the `TODO` values
 * with your real business details before launch — they feed the
 * Contact page, footer, and the Organization / LocalBusiness
 * structured data used by Google and AI search engines.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ozzo.co.in"
).replace(/\/$/, "");

export const brand = {
  name: "OZZO",
  // TODO: replace with your registered legal entity name.
  legalName: "OZZO Technologies",
  tagline: "CRM, Workforce & Field Sales — in one platform",
  description:
    "OZZO unifies your CRM, field workforce and sales & distribution into one system — a web dashboard for managers and a mobile app for reps in the field, powered by WhatsApp and AI.",
  // Where prospects sign in / sign up. Kept OFF the marketing pages
  // on purpose — this is the separate app URL only.
  appUrl: "https://app.ozzo.co.in",
};

export const contact = {
  email: "hello@ozzo.co.in",
  // Single shared mailbox for now; both point at the same inbox.
  salesEmail: "hello@ozzo.co.in",
  phoneDisplay: "+91 97220 74310",
  phoneE164: "+919722074310",
  whatsappDisplay: "+91 97220 74310",
  // Digits only, country code first, no + or spaces (for wa.me links).
  whatsappNumber: "919722074310",
  // Optional street address — improves local SEO. Leave blank to omit.
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
  },
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export type ProductLine = {
  slug: string;
  name: string;
  fullName: string;
  sub: string;
  price: number;
  /** When true, `price` is the entry-tier "from" price, not a flat rate. */
  priceFrom?: boolean;
  accentClass: string;
  dotClass: string;
  ringClass: string;
  summary: string;
  features: string[];
};

/**
 * The public product model is TWO products only:
 *   1. CRM — win & keep customers
 *   2. SFA (Sales Force Automation) — run & grow field sales
 *
 * Field-force tracking (formerly marketed as "WFA / Workforce Automation")
 * is NOT a separate product — it is the entry tier of Sales Force Automation
 * (see `sfaTiers` → "WFA Starter"). Every claim is grounded in the feature
 * master catalog.
 */
export const productLines: ProductLine[] = [
  {
    slug: "crm",
    name: "CRM",
    fullName: "Customer Relationship Management",
    sub: "Win & keep customers",
    price: 100,
    accentClass: "text-violet-400",
    dotClass: "bg-violet-400",
    ringClass: "ring-violet-500/20",
    summary:
      "Capture every enquiry, work your pipeline, and reply to customers on WhatsApp from one shared inbox — with an AI assistant that answers routine questions from your own knowledge base.",
    features: [
      "Leads, Deals & visual Kanban pipelines",
      "WhatsApp CRM — shared team inbox & templates",
      "AI knowledge-base assistant for FAQs",
      "Quotations with branded PDF output",
      "Customers, Products, Tasks & Activities",
      "Custom fields on every record",
    ],
  },
  {
    slug: "sfa",
    name: "SFA",
    fullName: "Sales Force Automation",
    sub: "Run & grow field sales",
    price: 150,
    priceFrom: true,
    accentClass: "text-emerald-400",
    dotClass: "bg-emerald-400",
    ringClass: "ring-emerald-500/20",
    summary:
      "Know exactly what your field team is doing — attendance, GPS and visits — then take the order, collect the cash and watch outstanding and stock keep themselves. One field product, from starter tracking to full sales & distribution.",
    features: [
      "Selfie + GPS attendance & live location",
      "Geo-tagged visits, beat routes & territory",
      "Offline order capture, dispatch & branded PDF",
      "Field payment collection & self-calculating outstanding",
      "Distributor / dealer / retailer trade levels",
      "Sales analytics, Ageing & a per-rep Daily Sales Report",
    ],
  },
];

export type PricingTier = {
  name: string;
  /** null = custom / talk-to-us pricing. */
  price: number | null;
  priceNote?: string;
  tagline: string;
  popular?: boolean;
  features: string[];
};

/**
 * The three tiers of the single Sales Force Automation product.
 * WFA Starter is the field-visibility entry tier; SFA Professional adds the
 * full sell-collect-distribute flow; Enterprise adds the CRM line for the
 * complete platform.
 */
export const sfaTiers: PricingTier[] = [
  {
    name: "WFA Starter",
    price: 150,
    tagline: "Field visibility & attendance",
    features: [
      "Selfie + GPS attendance, auto-classified",
      "Live location, All-Locations map & Track Report",
      "Geo-tagged customer & lead visits",
      "Beat / route planning & territory management",
      "Expense claims with approval",
      "Tracking Health + full offline capture",
    ],
  },
  {
    name: "SFA Professional",
    price: 350,
    popular: true,
    tagline: "Sell, collect & distribute",
    features: [
      "Everything in WFA Starter",
      "Offline order capture, dispatch & order PDF",
      "Field payment collection with proof & approval",
      "Customer financials, credit limits & auto outstanding",
      "Closing stock derived from movement — no inventory tool",
      "Distributor / dealer / retailer levels, discounts & sales analytics",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    priceNote: "Custom",
    tagline: "The complete platform + CRM",
    features: [
      "Everything in SFA Professional",
      "Add the CRM line — shared WhatsApp inbox & pipelines",
      "AI knowledge-base assistant & branded quotations",
      "Custom fields across 12 record types",
      "Roles & permissions with data-scoping",
      "Guided onboarding mapped to your workflow",
    ],
  },
];

/** CRM paired with field-force (WFA) tracking — the combo shown on the CRM page.
 * (WFA is the field-visibility tier of SFA; CRM + WFA is a real ₹200 plan.) */
export const crmWfaPlan = {
  name: "CRM + WFA",
  price: 200,
  tagline: "Front office + field force",
};

/** The full CRM + SFA platform, kept for AI/LLM briefs and schema accuracy. */
export const combinedPlans = [
  {
    name: "CRM + SFA",
    price: 450,
    tagline: "The complete platform — front office and field, one login",
    popular: true,
    features: [
      "Everything in CRM",
      "Everything in SFA",
      "Sell, track & distribute in one place",
    ],
  },
];

/** Included in every plan, regardless of line. */
export const includedInEveryPlan = [
  "Customers",
  "Products",
  "Tasks",
  "Attendance",
  "Leave",
  "Holiday",
  "Announcements",
];

export const productInterestOptions = [
  "CRM",
  "Field tracking — WFA Starter",
  "Sales & distribution — SFA Professional",
  "Full platform — CRM + SFA",
  "Not sure — help me choose",
];

export const teamSizeOptions = [
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "200+",
];
