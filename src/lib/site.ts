/**
 * Single source of truth for site-wide constants: brand, contact
 * details, product lines, and SEO defaults. Fill the `TODO` values
 * with your real business details before launch — they feed the
 * Contact page, footer, and the Organization / LocalBusiness
 * structured data used by Google and AI search engines.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ozzo.app"
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
  appUrl: "https://app.ozzo.app",
};

export const contact = {
  // TODO: replace all of these with your real details.
  email: "hello@ozzo.app",
  salesEmail: "sales@ozzo.app",
  phoneDisplay: "+91 00000 00000",
  phoneE164: "+910000000000",
  whatsappDisplay: "+91 00000 00000",
  // Digits only, country code first, no + or spaces (for wa.me links).
  whatsappNumber: "910000000000",
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
  accentClass: string;
  dotClass: string;
  ringClass: string;
  summary: string;
  features: string[];
};

/** Verified, in-production capabilities only (per the feature master catalog). */
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
    slug: "wfa",
    name: "WFA",
    fullName: "Workforce Automation",
    sub: "Run your field force",
    price: 150,
    accentClass: "text-cyan-400",
    dotClass: "bg-cyan-400",
    ringClass: "ring-cyan-500/20",
    summary:
      "Know where your field team is, that they showed up, and that they visited the right customers — with live GPS, selfie attendance and geo-tagged visits from a rugged mobile app.",
    features: [
      "Live GPS tracking & location history",
      "Attendance with selfie & GPS punch-in",
      "Geo-tagged customer & lead visits",
      "Expense claims with approval",
      "Beat / route planning & territory management",
      "Works offline — syncs when back online",
    ],
  },
  {
    slug: "sfa",
    name: "SFA",
    fullName: "Sales Force Automation",
    sub: "Sell & distribute",
    price: 350,
    accentClass: "text-emerald-400",
    dotClass: "bg-emerald-400",
    ringClass: "ring-emerald-500/20",
    summary:
      "Take orders in the field, collect payments, and keep outstanding under control — with dealer/distributor management and sales analytics. Includes everything in Workforce.",
    features: [
      "Order management with offline capture",
      "Payment collection & outstanding tracking",
      "Customer financials & credit limits",
      "Dealer & distributor (trade-level) management",
      "Dispatch & pending-dispatch queue",
      "Sales analytics — includes all of Workforce",
    ],
  },
];

/** Combined plans (per the OZZO Pricing & Feature Catalogue). */
export const combinedPlans = [
  {
    name: "CRM + WFA",
    price: 200,
    tagline: "Front office + field force",
    popular: true,
    features: [
      "Everything in CRM",
      "Everything in Workforce",
      "One team, one platform",
    ],
  },
  {
    name: "CRM + SFA",
    price: 450,
    tagline: "The complete platform",
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
  "Workforce (WFA)",
  "Sales & Distribution (SFA)",
  "CRM + Workforce",
  "CRM + Sales",
  "Not sure — help me choose",
];

export const teamSizeOptions = [
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "200+",
];
