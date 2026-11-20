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
  {
    slug: "field-sales-app-for-iphone-what-to-check",
    title: "Choosing a field sales app when half your team is on iPhone",
    angle:
      "Most Indian field-sales apps are Android-only, which quietly excludes managers and senior reps who carry iPhones. Explain what breaks in a mixed-handset team (visits logged from the office, two sets of numbers, a second handset bought for one person), what to check on each vendor's store listing before shortlisting, and what to ask about feature parity between the two platforms.",
    targetKeyword: "field sales app for iphone",
    internalLinks: ["/products/sfa", "/salesman-location-tracking-software", "/plans"],
    tags: ["Mobile app", "iOS", "Field sales", "Buying guide"],
    emoji: "📱",
  },
  {
    slug: "what-to-ask-before-buying-a-sales-app-for-your-team",
    title: "Nine questions to ask before you buy a sales app for your team",
    angle:
      "A buyer's checklist that goes past the demo: which phones it runs on and whether both platforms get the same features, what happens with no signal, who owns the data, whether prices are published, how long onboarding really takes, and what the vendor admits it does not do.",
    targetKeyword: "questions to ask before buying sales software",
    internalLinks: ["/plans", "/products/sfa", "/alternatives"],
    tags: ["Buying guide", "Field sales", "CRM"],
    emoji: "❓",
  },
  /* ───────── DMS topics, queued 2026-11-20 with the product launch ─────────
     Eight in a row on one theme is deliberate, not an oversight. The queue is
     worked in order, so this is roughly two months of DMS coverage while the
     product is new — which is exactly when the category pages need blog posts
     linking into them. Reorder or interleave these if that stops being true. */
  {
    slug: "dms-vs-erp-which-manages-your-distributors",
    title: "DMS or ERP — which one should manage your distributors?",
    angle:
      "Buyers are routinely sold an ERP distribution module when they needed a trade portal, and the reverse. Separate them by who logs in and what breaks: an ERP is built for your back office and owns billing, GST and stock; a DMS is built for your customer's phone and owns self-service ordering and visible outstanding. Say plainly that many businesses should run both, and that OZZO does not do accounting.",
    targetKeyword: "DMS vs ERP",
    internalLinks: ["/distributor-management-software", "/compare/ozzo-vs-marg-erp", "/products/dms"],
    tags: ["DMS", "ERP", "Distributor management", "Buying guide"],
    emoji: "⚖️",
  },
  {
    slug: "how-to-get-distributors-to-use-your-ordering-portal",
    title: "How to get distributors to actually use your ordering portal",
    angle:
      "Adoption is the only real risk in this category — a portal nobody uses is worse than none, because the WhatsApp orders continue and the software is paid for anyway. Give a practical rollout: start with the highest-frequency customers, never cut off WhatsApp on day one, make the first order a guided phone call, show them their own outstanding (the feature they adopt for), and remove every install step. Explain why a browser beats an app for trade adoption.",
    targetKeyword: "distributor portal adoption",
    internalLinks: ["/products/dms", "/distributor-management-software", "/blog/distributor-orders-on-whatsapp-what-it-costs"],
    tags: ["DMS", "Distributor management", "Rollout", "Change management"],
    emoji: "🤝",
  },
  {
    slug: "distributor-credit-limits-how-to-set-and-enforce-them",
    title: "Distributor credit limits: how to set them and actually enforce them",
    angle:
      "Most credit limits are advisory — a number in a master that nobody checks until accounts notices. Cover how to set a limit from order frequency and payment history rather than from the relationship, why enforcement has to happen at order time to mean anything, how to handle the over-limit order without stopping the business, and what changes when the distributor can see their own balance before they order.",
    targetKeyword: "distributor credit limit management",
    internalLinks: ["/products/dms", "/products/sfa", "/distributor-management-software"],
    tags: ["Credit control", "Distributor management", "DMS", "Outstanding"],
    emoji: "🧾",
  },
  {
    slug: "price-lists-for-distributors-dealers-and-retailers",
    title: "One price list per customer: how trade pricing should work",
    angle:
      "A single shared price list lets any distributor work out what every other one pays, and from there your margin. Explain trade-level pricing, why a per-customer price list is the control that matters, how schemes layer on top of it, and the technical point that pricing calculated in the buyer's browser can be tampered with while pricing calculated on the server cannot.",
    targetKeyword: "distributor price list management",
    internalLinks: ["/products/dms", "/distributor-management-software", "/products/sfa"],
    tags: ["Pricing", "Distributor management", "DMS", "Schemes"],
    emoji: "🏷️",
  },
  {
    slug: "distributor-onboarding-first-30-days-checklist",
    title: "Onboarding a new distributor: a 30-day checklist",
    angle:
      "A practical checklist for the first month of a new trade relationship — the masters to set up (price list, credit limit, trade level, beat), who serves them, the first order, the first collection, and the review at day 30. Frame the portal login as part of onboarding rather than a later upgrade, because a distributor who has never ordered any other way adopts it without being persuaded.",
    targetKeyword: "distributor onboarding process",
    internalLinks: ["/products/dms", "/products/crm", "/plans"],
    tags: ["Distributor management", "Onboarding", "DMS", "Operations"],
    emoji: "📋",
  },
  {
    slug: "what-to-do-when-a-distributor-stops-ordering",
    title: "What to do when a distributor quietly stops ordering",
    angle:
      "Trade customers rarely announce that they have left — the orders just get smaller and further apart, and nobody notices for a quarter. Cover how to spot it (ageing, order gaps, coverage against the beat), the usual real causes (credit blocked, a competitor's scheme, a dispute nobody escalated, the rep stopped visiting), and how to build a review that surfaces it in weeks instead of at year-end.",
    targetKeyword: "distributor churn",
    internalLinks: ["/products/sfa", "/products/dms", "/distributor-management-software"],
    tags: ["Distributor management", "Retention", "Reports", "DMS"],
    emoji: "📉",
  },
  {
    slug: "running-schemes-without-arguments-and-credit-notes",
    title: "How to run trade schemes without arguments and credit notes",
    angle:
      "Most scheme disputes are not disagreements about the scheme — they are a scheme that was applied by hand and missed. Explain the common structures (quantity slab, value slab, free goods), why applying them at order time rather than at settlement removes the argument entirely, and what it costs you when a distributor finds out three weeks later that they qualified. Be clear that OZZO applies schemes automatically but does not handle claims.",
    targetKeyword: "trade scheme management",
    internalLinks: ["/products/dms", "/products/sfa", "/compare/ozzo-vs-bizom-dms"],
    tags: ["Schemes", "Trade promotions", "Distributor management", "DMS"],
    emoji: "🎁",
  },
  {
    slug: "do-you-need-a-dms-or-just-a-better-order-desk",
    title: "Do you need a DMS, or just a better order desk?",
    angle:
      "An honest buying-decision post that sometimes concludes no. Give the test: count the trade orders you retype in a month and time one properly. Below a threshold, a shared mailbox and a tidier process genuinely is the answer. Above it, the keying time, the order delay and the balance calls justify a portal. Include the cases where a DMS is the wrong buy — selling direct to consumers, very infrequent trade orders, or needing distributor stock and claims that an ordering portal does not cover.",
    targetKeyword: "do I need a distributor management system",
    internalLinks: ["/distributor-management-software", "/products/dms", "/blog/distributor-orders-on-whatsapp-what-it-costs"],
    tags: ["DMS", "Buying guide", "Distributor management", "Operations"],
    emoji: "🤔",
  },
];
