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
  phoneDisplay: "+91 92271 26301",
  phoneE164: "+919227126301",
  whatsappDisplay: "+91 92271 26301",
  // Digits only, country code first, no + or spaces (for wa.me links).
  whatsappNumber: "919227126301",
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
 * is NOT a separate product — it is the "Field" entry line of Sales Force
 * Automation. Plans are compared, module by module and without published
 * prices, on the /plans page (see src/lib/plans.ts). Every claim is grounded
 * in the feature master catalog.
 */
export const productLines: ProductLine[] = [
  {
    slug: "crm",
    name: "CRM",
    fullName: "Customer Relationship Management",
    sub: "Win & keep customers",
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

export const teamSizeOptions = [
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "200+",
];
