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

/**
 * The Android package of the rep app (OZZO SALES). Its Google Play listing went
 * public on 2026-10-27, and this id is what builds `brand.playStoreUrl` below,
 * so the store link can never drift from the package that is actually shipped.
 */
export const ANDROID_PACKAGE = "com.wacrm.fieldforce";

/**
 * The Apple App Store id of the SAME rep app (OZZO SALES), live since
 * 2026-11-10. The iOS build shares the `com.wacrm.fieldforce` bundle id with
 * Android — one app, one codebase, two stores — and this numeric id is what
 * builds `brand.appStoreUrl` below.
 *
 * It is a constant and not a hand-written URL for the same reason as Android:
 * a store link typed out in twenty places drifts, and a dead store link on a
 * marketing site is worse than no link at all.
 */
export const IOS_APP_ID = "6832184323";

/**
 * The minimum iPhone/iPad OS the app installs on, taken from the live App
 * Store listing. Stated on the site because "do you have an iOS app" is
 * nearly always followed by "will it run on my phone", and a number answers
 * that better than a paragraph.
 */
export const IOS_MIN_VERSION = "16.4";

export const brand = {
  name: "OZZO",
  // Registered legal entity name (confirmed) — feeds Organization schema.
  legalName: "OZZO Technologies",
  tagline: "CRM, Workforce & Field Sales — in one platform",
  // Feeds the root metadata description AND the SoftwareApplication schema, so
  // the entry price stated here is what search engines and AI assistants read
  // first. Keep it to that one number — per-user rates stay off the site.
  description:
    "OZZO unifies your CRM, field workforce and sales & distribution into one system — a web dashboard for managers and a mobile app for reps in the field, on both Android and iPhone, powered by WhatsApp and AI. Plans from ₹100 per user per month.",
  /**
   * The home page's <meta description>, kept separate because `description`
   * above runs to 211 characters — right for Organization schema and the
   * llms.txt summary, where length is no constraint, but Google rewrites
   * anything past ~155 and we lose control of the snippet.
   */
  metaDescription:
    "CRM, field workforce and sales & distribution in one system — a web dashboard for managers, an Android & iPhone app for reps, powered by WhatsApp and AI.",
  // Where prospects sign in / sign up. Kept OFF the marketing pages
  // on purpose — this is the separate app URL only.
  appUrl: "https://app.ozzo.co.in",
  /**
   * The live Google Play listing for the rep app. Every "Get it on Google Play"
   * link, the `downloadUrl` in SoftwareApplication schema, the Organization
   * `sameAs` list and the llms.txt mobile-app section all read from here.
   */
  playStoreUrl: `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`,
  /**
   * The live Apple App Store listing for the same rep app, public since
   * 2026-11-10. Everywhere `playStoreUrl` appears as a download link, store
   * badge, schema `downloadUrl` or `sameAs` entry, this one appears beside it —
   * the app is on both stores now and the site must never imply otherwise.
   */
  appStoreUrl: `https://apps.apple.com/in/app/ozzo-sales/id${IOS_APP_ID}`,
  /** The rep app's name on both store listings — keep all three identical. */
  mobileAppName: "OZZO SALES",
  /**
   * The platforms the rep app actually ships on, as one phrase to reuse in
   * copy, and as a list for schema `operatingSystem`.
   *
   * This exists because the old site said "Android only today" and "iOS on the
   * way" in more than a dozen separate hand-written places. When iOS shipped,
   * every one of them became a lie that had to be hunted down. Next time a
   * platform changes, this is the line that changes.
   */
  mobilePlatforms: "Android and iPhone",
  /** Same thing for `operatingSystem` in structured data. */
  schemaOperatingSystem: "Web, Android, iOS",
  /** When the iOS build went public on the App Store. */
  iosLaunchDate: "2026-11-10",
};

/**
 * The two store listings, in the order they are shown everywhere on the site
 * (footer badges, download blocks, llms.txt). Android first because it is the
 * larger share of Indian field teams by a wide margin — not because iOS is an
 * afterthought.
 */
export const appStores = [
  {
    id: "android",
    label: "Google Play",
    prefix: "Get it on",
    url: brand.playStoreUrl,
    platform: "Android",
  },
  {
    id: "ios",
    label: "App Store",
    prefix: "Download on the",
    url: brand.appStoreUrl,
    platform: "iPhone & iPad",
  },
] as const;

export const contact = {
  email: "hello@ozzo.co.in",
  // Single shared mailbox for now; both point at the same inbox.
  salesEmail: "hello@ozzo.co.in",
  phoneDisplay: "+91 92271 26301",
  phoneE164: "+919227126301",
  whatsappDisplay: "+91 92271 26301",
  // Digits only, country code first, no + or spaces (for wa.me links).
  whatsappNumber: "919227126301",
  /**
   * Business location. Feeds PostalAddress inside Organization schema.
   *
   * Filled 2026-11-01. It was blank, and that had a measurable cost: asked
   * who makes OZZO, Perplexity answered that the site "does not identify a
   * registered company name, founders, registered address" and concluded the
   * "underlying legal manufacturer/operator remains unverified". An address
   * is one of the few signals that separates a real company from a web page.
   *
   * `street` and `postalCode` stay blank on purpose — city and state are what
   * the founder gave, and inventing the rest would be worse than omitting it.
   * `hasAddress` in seo.tsx was keyed on street, which would still drop the
   * whole block, so it now keys on city.
   */
  address: {
    street: "",
    city: "Rajkot",
    state: "Gujarat",
    postalCode: "",
    country: "IN",
  },
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  /**
   * Official profiles. These are not decoration: every non-empty value here
   * becomes a `sameAs` entry in Organization schema, which is how a search
   * or AI engine confirms that this domain and those profiles are the same
   * company. Until 2026-10-26 they were all empty, so `sameAs` rendered as
   * an empty array and OZZO had no independent evidence of existing — the
   * single biggest gap in the GEO audit.
   *
   * Add a profile ONLY once it is live and branded consistently (same name,
   * logo and description). A dead or half-filled profile is worse than none.
   */
  social: {
    linkedin: "https://www.linkedin.com/company/ozzo-technologies/",
    facebook: "https://www.facebook.com/profile.php?id=61593882036386",
    youtube: "https://www.youtube.com/@OZZOSales",
    twitter: "",
    instagram: "",
  },
};

/**
 * The person behind OZZO.
 *
 * Two reasons this is data rather than prose in one page: it feeds `Person`
 * schema (linked from Organization as `founder`), which is how an engine
 * resolves "who makes OZZO" into a real named human; and it keeps the
 * about-page copy and the structured data from drifting apart.
 *
 * Everything here is the founder's own account, given 2026-10-26. Nothing
 * is inferred — no customer counts, no revenue, no team size, no awards.
 */
export const founder = {
  name: "Sumit Vegad",
  jobTitle: "Founder",
  /** Years spent selling SaaS and CRM tools before building OZZO. */
  yearsInSales: 10,
  /** When work on the product started. */
  buildStarted: "January 2026",
  /** One line, used in Person schema and the about-page hero. */
  bio: "Sumit Vegad spent ten years selling SaaS tools — CRMs above all — to Indian businesses, then built the system those years convinced him was missing.",
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

/**
 * Google Analytics 4 measurement id for the public marketing site.
 *
 * Deliberately hardcoded rather than read from an env var: a measurement id is
 * public by design (it ships in the page source of every site that uses GA),
 * so there is nothing to protect, and keeping it here means the tag cannot go
 * silently missing on a deploy because a Vercel variable was never set.
 *
 * This is the MARKETING site only. It is NOT added to the CRM app at
 * app.ozzo.co.in, where page URLs carry customer and order ids that must not
 * be sent to Google.
 */
export const GA_MEASUREMENT_ID = "G-W9D6KC0QHY";
