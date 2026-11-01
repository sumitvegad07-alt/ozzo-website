/**
 * The approved topic queue for the weekly post.
 *
 * `scripts/write-weekly-post.mjs` runs every Sunday and writes ONE post. It
 * takes the first topic here that has not been published yet. It cannot invent
 * a subject, and when this list runs out it stops and opens a GitHub issue
 * rather than inventing filler.
 *
 * That restriction is the whole safety model. Google's spam policy on "scaled
 * content abuse" targets bulk generated pages published with no human
 * judgement; a fixed queue that a person wrote means every post still traces
 * back to a decision someone made. Adding a topic here IS the editorial act.
 *
 * The first eight are docs/SEO-STRATEGY.md section 7, in its order. The rest
 * continue the same thinking: questions an Indian field-sales buyer actually
 * asks before they know which software category they need.
 *
 * To add a topic: append to the end. To reorder: move entries. To retire one
 * that is no longer right, delete it — if it was already published its post is
 * unaffected, because published posts live in content/generated-posts.json.
 */

export type BlogTopic = {
  /** Becomes the URL. Must be unique across this file and blog.ts. */
  slug: string;
  /** The working headline. The writer may refine the wording, not the subject. */
  title: string;
  /** What the post must actually answer, in one or two sentences. */
  angle: string;
  /** The search phrase this post is meant to own. */
  targetKeyword: string;
  /**
   * Internal links the post must include. Site-relative paths only, and every
   * one must exist — a generated post linking to a 404 is worse than no link.
   */
  internalLinks: string[];
  tags: string[];
  emoji: string;
};

export const blogTopics: BlogTopic[] = [
  {
    slug: "how-to-track-field-sales-reps-without-micromanaging",
    title: "How to track field sales reps without micromanaging them",
    angle:
      "Managers want visibility; reps hear surveillance. Explain what to measure (outcomes: visits that produced orders, coverage, collection) instead of what most teams measure (dots on a map), and how to introduce tracking so the team accepts it.",
    targetKeyword: "how to track field sales team",
    internalLinks: ["/products/sfa", "/salesman-location-tracking-software", "/plans"],
    tags: ["Field sales", "Team management", "GPS tracking"],
    emoji: "📍",
  },
  {
    slug: "beat-plan-vs-route-plan-what-indian-fmcg-teams-need",
    title: "Beat plan vs route plan — what Indian FMCG teams actually need",
    angle:
      "The two terms are used interchangeably and are not the same thing. Define both plainly, show when each is right, and give a worked example of building a week's beat for a 10-person team.",
    targetKeyword: "beat plan vs route plan",
    internalLinks: ["/products/sfa", "/fmcg-software", "/industries"],
    tags: ["Beat planning", "FMCG", "Field sales"],
    emoji: "🗺️",
  },
  {
    slug: "excel-whatsapp-groups-vs-field-sales-software-real-cost",
    title: "Excel and WhatsApp groups vs field sales software — the real cost",
    angle:
      "Most teams think the spreadsheet is free. Cost it honestly: hours spent consolidating, orders lost to stale stock and price, collections slipping, and the day the file is out of date. Compare against a per-user software cost.",
    targetKeyword: "excel vs field sales software",
    internalLinks: ["/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp", "/products/sfa", "/plans"],
    tags: ["Spreadsheets", "Field sales", "Cost"],
    emoji: "📊",
  },
  {
    slug: "how-to-calculate-and-collect-outstanding-from-distributors",
    title: "How to calculate and collect outstanding from distributors",
    angle:
      "Define outstanding and ageing in plain terms, show the arithmetic with a worked example, and set out a collection routine a field team can actually follow on a beat.",
    targetKeyword: "how to collect outstanding from distributors",
    internalLinks: ["/products/sfa", "/fmcg-software", "/plans"],
    tags: ["Collections", "Outstanding", "Distributors"],
    emoji: "💰",
  },
  {
    slug: "what-is-secondary-sales-and-why-primary-numbers-lie",
    title: "What is secondary sales, and why primary sales numbers lie",
    angle:
      "Primary is what you billed the distributor; secondary is what actually sold to retailers. Explain the gap, why stock sitting in a distributor's godown flatters your numbers, and how to start measuring secondary without a huge rollout.",
    targetKeyword: "what is secondary sales",
    internalLinks: ["/fmcg-software", "/products/sfa", "/industries"],
    tags: ["Secondary sales", "FMCG", "Distribution"],
    emoji: "📦",
  },
  {
    slug: "how-to-set-territory-and-beat-coverage-for-a-10-person-team",
    title: "How to set territory and beat coverage for a 10-person field team",
    angle:
      "A practical method: list outlets, grade them by value and visit frequency, divide by travel time rather than by map area, and review coverage monthly. Include a worked split for ten reps.",
    targetKeyword: "sales territory planning India",
    internalLinks: ["/products/sfa", "/salesman-location-tracking-software", "/plans"],
    tags: ["Territory", "Beat planning", "Field sales"],
    emoji: "🧭",
  },
  {
    slug: "offline-order-capture-why-it-matters-in-rural-india",
    title: "Offline order capture — why it matters in rural India",
    angle:
      "Network drops are normal outside metros. Explain what breaks when an app needs connectivity at the counter, what offline-first actually means, and the questions to ask a vendor to find out whether theirs really works.",
    targetKeyword: "offline sales order app India",
    internalLinks: ["/products/sfa", "/industries", "/plans"],
    tags: ["Offline", "Order capture", "Rural"],
    emoji: "📴",
  },
  {
    slug: "how-to-pick-field-sales-software-12-question-checklist",
    title: "How to pick field sales software: a 12-question checklist",
    angle:
      "Twelve questions to put to any vendor, each with a note on what a good answer sounds like and what a weak one is hiding. Cover offline, pricing transparency, data export, rollout time and support.",
    targetKeyword: "how to choose field sales software",
    internalLinks: ["/compare", "/plans", "/products/sfa"],
    tags: ["Buying guide", "Checklist", "Field sales"],
    emoji: "✅",
  },
  {
    slug: "whatsapp-for-business-sales-what-actually-works",
    title: "WhatsApp for business sales — what actually works, and what gets you banned",
    angle:
      "The practical rules of selling on WhatsApp in India: what the Business API allows, why broadcast lists get numbers blocked, template messages, and how a shared team inbox differs from one person's phone.",
    targetKeyword: "whatsapp for business sales india",
    internalLinks: ["/products/crm", "/plans", "/contact"],
    tags: ["WhatsApp", "CRM", "Sales"],
    emoji: "💬",
  },
  {
    slug: "sales-rep-attendance-what-to-measure-instead-of-hours",
    title: "Sales rep attendance: what to measure instead of hours",
    angle:
      "Punch-in time tells you almost nothing about a field day. Set out the handful of measures that do — first visit time, outlets covered, productive visit rate, collection per beat — and how to introduce them without the team gaming them.",
    targetKeyword: "field staff attendance tracking",
    internalLinks: ["/salesman-location-tracking-software", "/products/sfa", "/plans"],
    tags: ["Attendance", "Field sales", "Productivity"],
    emoji: "⏱️",
  },
  {
    slug: "crm-rollout-for-small-teams-first-90-days",
    title: "Rolling out a CRM to a small sales team: the first 90 days",
    angle:
      "Why most small-team CRM rollouts stall, and a week-by-week plan that avoids it: start with one pipeline, import only what you need, make one habit stick before adding the next.",
    targetKeyword: "crm implementation small business",
    internalLinks: ["/products/crm", "/plans", "/contact"],
    tags: ["CRM", "Rollout", "Small business"],
    emoji: "🚀",
  },
  {
    slug: "dealer-vs-distributor-vs-retailer-trade-levels-explained",
    title: "Dealer, distributor, retailer — trade levels explained",
    angle:
      "Plain definitions of each level, who holds stock and credit at each, how margins typically stack, and why software that cannot model the levels separately gives you the wrong numbers.",
    targetKeyword: "distributor vs dealer vs retailer",
    internalLinks: ["/fmcg-software", "/products/sfa", "/industries"],
    tags: ["Distribution", "Trade levels", "FMCG"],
    emoji: "🏪",
  },
];
