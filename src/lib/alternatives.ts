/**
 * "<Competitor> alternatives" pages — /alternatives/[slug].
 *
 * WHY THESE EXIST, AND WHY THEY ARE NOT MORE COMPARE PAGES: every page under
 * /compare is "OZZO vs X", so every one of them contains our own brand name.
 * Nobody searches a brand they have not heard of, and Search Console confirms
 * it — across three months not one query mentioned a competitor, while generic
 * category terms did pick up impressions. "<Competitor> alternatives" is the
 * same buyer at the same moment with our name removed from the query, which is
 * the version people actually type.
 *
 * It is also the format AI engines quote. Asked "what are alternatives to
 * FieldAssist", an engine wants a list of named options with a line on who each
 * suits — not a two-column head-to-head. These pages are written to be that
 * list.
 *
 * HONESTY BAR — this is the whole reason the format works:
 *   1. OZZO is one entry among several, never automatically first, and its
 *      `watchOut` states a real limitation. A page where we win every row
 *      converts worse than one a buyer believes.
 *   2. `watchOut` for a competitor describes their POSITIONING (who they built
 *      for, what that implies about cost and fit) — never an invented defect
 *      or a price we have not verified. Unverifiable claims are a legal risk
 *      and AI engines cross-check them.
 *   3. No outbound links to competitors. We name them in plain text; their
 *      website is not our exit path.
 */

export type AltPick = {
  name: string;
  category: string;
  bestFor: string;
  strength: string;
  watchOut: string;
  /** Head-to-head page, when we have one. */
  compareSlug?: string;
  isOzzo?: boolean;
};

export type AlternativesPage = {
  slug: string;
  /** The tool people are searching an alternative to. */
  target: string;
  targetCategory: string;
  compareSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Answer-first paragraph. This is the block an AI engine lifts. */
  summary: string;
  /** Honest, non-bashing reasons a buyer goes looking. */
  whyLook: { title: string; body: string }[];
  picks: AltPick[];
  faqs: { q: string; a: string }[];
};

/**
 * ONE definition, shared by all eight pages — so a product change reaches every
 * "<Competitor> alternatives" list in a single edit instead of eight.
 *
 * `watchOut` is required to state a real limitation, per rule 1 of the honesty
 * bar above. When DMS was added to `strength`, its three genuine gaps were
 * added to `watchOut` in the same edit, deliberately: a pick that gains a
 * capability and no corresponding caveat is how these pages stop being
 * believed. Distributor stock, replenishment and claims are exactly what the
 * specialist DMS vendors in these lists ship and OZZO does not.
 */
const OZZO_PICK: AltPick = {
  name: "OZZO",
  category: "All-in-one CRM + field sales + distributor portal for SMEs",
  bestFor: "Indian SMEs and MSMEs that want field sales, CRM, WhatsApp and a trade portal in one system",
  strength:
    "Attendance, GPS, visits, beat routes, offline orders, collections and auto-outstanding, plus a CRM and a shared WhatsApp inbox on the same customer record. An optional DMS add-on gives distributors and dealers their own browser login to order on their own price list and see their outstanding. Rates are published: from ₹100 per user per month, and ₹10,000 a year per 100 distributor logins.",
  watchOut:
    "No AI shelf-image recognition, no planogram scoring and no demand forecasting. The DMS add-on covers ordering and visibility only — no distributor stock, no auto-replenishment and no claims. (Platform is no longer a watch-out: the app ships on both Android and iPhone.)",
  isOzzo: true,
};

export const alternativesPages: AlternativesPage[] = [
  {
    slug: "fieldassist-alternatives",
    target: "FieldAssist",
    targetCategory: "Enterprise SFA & DMS for FMCG/CPG",
    compareSlug: "ozzo-vs-fieldassist",
    metaTitle: "FieldAssist alternatives for Indian teams",
    metaDescription:
      "Six FieldAssist alternatives compared: who each suits, what it does well and where it falls short. Enterprise SFA, SME platforms and tracking-only apps.",
    keywords: [
      "FieldAssist alternatives",
      "FieldAssist competitors",
      "alternatives to FieldAssist India",
      "FieldAssist vs other SFA software",
      "cheaper FieldAssist alternative",
      "SFA software for small FMCG brands",
    ],
    summary:
      "FieldAssist is an enterprise sales-automation and distribution platform for FMCG and CPG brands, with strong retail-audit and route-to-market tooling. Teams usually look for an alternative for one of two reasons: they are too small to need enterprise depth and do not want to pay for it, or they are large enough to be comparing it against its direct peers. Those are different shortlists, so both are below.",
    whyLook: [
      {
        title: "You are an SME paying for enterprise depth",
        body: "Image-recognition shelf audits, demand forecasting and a full DMS are real capabilities, but a 10-rep team will not switch most of them on. Smaller platforms cover attendance, visits, orders and collections for a fraction of the cost.",
      },
      {
        title: "You need a CRM too, not just field sales",
        body: "SFA platforms handle the field. The front office — leads, deals, quotations, customer conversations — is usually a separate purchase, which means a second subscription and a second customer record.",
      },
      {
        title: "You sell outside FMCG",
        body: "FieldAssist is built around FMCG/CPG route-to-market. If you are in agri-inputs, pharma, building materials or auto parts, a more general field-sales platform may map to your trade more naturally.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Bizom",
        category: "Enterprise SFA for FMCG & CPG",
        bestFor: "Large FMCG and CPG brands with hundreds to thousands of outlets",
        strength:
          "FieldAssist's closest direct peer. Deep retail execution and distribution management built for scale.",
        watchOut:
          "Priced and scoped for enterprise distribution networks, so expect an implementation project rather than a quick start.",
        compareSlug: "ozzo-vs-bizom",
      },
      {
        name: "BeatRoute",
        category: "AI retail-execution SFA",
        bestFor: "Mid-to-large consumer brands focused on retail execution",
        strength:
          "Goal-driven AI for retail execution, route optimisation and sales-team nudges.",
        watchOut:
          "Built around retail execution at scale — more than a small distributor-led team needs.",
        compareSlug: "ozzo-vs-beatroute",
      },
      {
        name: "mAssist",
        category: "Enterprise SFA for FMCG, CPG & pharma",
        bestFor: "Large pharma and FMCG enterprises with complex distribution",
        strength:
          "Strong fit where pharma field-force structures and multi-tier distribution are the core problem.",
        watchOut: "Enterprise-oriented; not aimed at a first-time SME buyer.",
        compareSlug: "ozzo-vs-massist",
      },
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distributors and manufacturers wanting a focused field-sales app",
        strength:
          "Does field sales for distribution well without enterprise overhead.",
        watchOut:
          "Field-sales focused, so a separate CRM is still needed for the front office.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
      {
        name: "Unolo",
        category: "Field-force tracking & attendance",
        bestFor: "Teams whose actual problem is GPS tracking and attendance",
        strength: "Fast, simple and cheap for tracking a field team.",
        watchOut:
          "Tracking-first. If you need order capture, schemes and collections, this is not a like-for-like replacement.",
        compareSlug: "ozzo-vs-unolo",
      },
    ],
    faqs: [
      {
        q: "What is the best FieldAssist alternative for a small FMCG brand?",
        a: "For an SME, the realistic shortlist is OZZO, Delta Sales App or Unolo, depending on how much you need. Unolo if the problem is purely tracking attendance and GPS. Delta Sales App if you need focused field sales for a distributor network. OZZO if you want field sales plus a CRM and WhatsApp inbox on one customer record, with published pricing from ₹100 per user per month.",
      },
      {
        q: "Is there a cheaper alternative to FieldAssist?",
        a: "Yes. FieldAssist is quote-based and geared to enterprise CPG deployments. SME-focused platforms publish per-user rates instead — OZZO lists SFA at ₹300 per user per month on yearly billing, plus GST. The honest trade-off is that you give up image-recognition shelf audits, demand forecasting and enterprise DMS depth.",
      },
      {
        q: "Which FieldAssist alternative includes a CRM?",
        a: "Most do not. FieldAssist, Bizom, BeatRoute and Delta Sales App are sales-force-automation tools, so the front-office CRM is a separate purchase. OZZO includes leads, deals, pipelines, quotations and a shared WhatsApp inbox in the same system as the field app.",
      },
      {
        q: "Do any alternatives do AI shelf-image recognition?",
        a: "Among the options here, the enterprise CPG platforms — FieldAssist, Bizom, BeatRoute and mAssist — are where that capability lives. OZZO captures geo-tagged visit photos and checklists but does not score planograms automatically. If perfect-store auditing is core to your route-to-market, stay with an enterprise platform.",
      },
    ],
  },
  {
    slug: "unolo-alternatives",
    target: "Unolo",
    targetCategory: "Field-force tracking & attendance",
    compareSlug: "ozzo-vs-unolo",
    metaTitle: "Unolo alternatives for Indian field teams",
    metaDescription:
      "Five Unolo alternatives compared. Unolo tracks attendance and GPS well - here is what to use when you also need order capture, collections or a CRM.",
    keywords: [
      "Unolo alternatives",
      "Unolo competitors",
      "alternatives to Unolo",
      "field force tracking app India",
      "GPS attendance app alternatives",
      "field sales app with order booking",
    ],
    summary:
      "Unolo is a fast, affordable field-force tracking and attendance app, and for teams whose problem really is \"where are my reps\", it does the job. Most teams start looking for an alternative at the point the job grows: they also need the rep to take an order, apply a scheme, collect a payment or update a lead. That is a different category of product, so the alternatives below are grouped by how far past tracking you need to go.",
    whyLook: [
      {
        title: "You need orders, not just locations",
        body: "Knowing a rep visited a shop is useful. Capturing what the shop ordered, at the right price with the right scheme, offline, is what actually moves revenue.",
      },
      {
        title: "Collections and outstanding are handled on paper",
        body: "Tracking apps rarely settle payments against invoices. If your reps collect cash and your outstanding lives in a spreadsheet, that is the gap.",
      },
      {
        title: "You are paying for two systems",
        body: "A tracking app plus a separate CRM means two subscriptions, two logins and two versions of the same customer.",
      },
    ],
    picks: [
      {
        name: "FieldSense",
        category: "Field-force management app",
        bestFor: "Small teams that want easy tracking, with a free tier to start",
        strength: "Simple to roll out and inexpensive to trial.",
        watchOut:
          "Like Unolo, it is tracking-first — the same ceiling applies once you need orders.",
        compareSlug: "ozzo-vs-fieldsense",
      },
      {
        name: "TrackOlap",
        category: "Employee monitoring, HR & sales suite",
        bestFor: "Teams wanting HR, monitoring and sales from one vendor",
        strength:
          "Broader than pure tracking — bundles HR and employee monitoring alongside sales.",
        watchOut:
          "Monitoring-led rather than sales-led; worth checking how your reps react to that framing.",
        compareSlug: "ozzo-vs-trackolap",
      },
      OZZO_PICK,
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distributor-led businesses that have outgrown tracking",
        strength: "Purpose-built for field sales in a distribution network.",
        watchOut: "No front-office CRM, so leads and deals live elsewhere.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
      {
        name: "Bizom",
        category: "Enterprise SFA for FMCG & CPG",
        bestFor: "Large brands where tracking was never the real requirement",
        strength: "Full retail execution and distribution management at scale.",
        watchOut:
          "A large step up in cost and implementation from a tracking app.",
        compareSlug: "ozzo-vs-bizom",
      },
    ],
    faqs: [
      {
        q: "What is the best Unolo alternative that also takes orders?",
        a: "OZZO and Delta Sales App both add offline order capture to field tracking. OZZO additionally includes field payment collection with self-calculating outstanding, plus a CRM and shared WhatsApp inbox on the same record, so the front office and the field share one customer.",
      },
      {
        q: "Is there a free alternative to Unolo?",
        a: "FieldSense offers a free tier, which makes it the easiest way to trial field tracking at no cost. Free tiers generally cover attendance and location only — order capture, schemes and collections sit on paid plans across every vendor here.",
      },
      {
        q: "Do I need a separate CRM alongside a field-tracking app?",
        a: "With a tracking-only tool, usually yes — leads, deals and quotations have nowhere to live. That means two subscriptions and two customer records that drift apart. A platform that includes both avoids it; OZZO is the option here that does.",
      },
    ],
  },
  {
    slug: "delta-sales-app-alternatives",
    target: "Delta Sales App",
    targetCategory: "Field sales automation for distributors",
    compareSlug: "ozzo-vs-delta-sales-app",
    metaTitle: "Delta Sales App alternatives compared",
    metaDescription:
      "Five Delta Sales App alternatives for Indian distributors and manufacturers: field sales apps, all-in-one platforms and enterprise SFA, and who each suits.",
    keywords: [
      "Delta Sales App alternatives",
      "Delta Sales App competitors",
      "alternatives to Delta Sales App",
      "field sales app for distributors India",
      "distributor sales software alternatives",
      "sales force automation for manufacturers",
    ],
    summary:
      "Delta Sales App is a focused field-sales tool for distributors and manufacturers, and it does that job without enterprise overhead. Teams tend to look elsewhere when they want the front office in the same system, when they need deeper distribution and scheme handling, or when tracking alone would do. Those three directions lead to different products, and all three are covered below.",
    whyLook: [
      {
        title: "You want the CRM in the same place",
        body: "Field-sales apps cover the beat. Enquiries, deals, quotations and customer conversations usually sit in a separate tool, which splits the customer record in two.",
      },
      {
        title: "Your trade schemes and price lists are complicated",
        body: "Slab schemes, free goods, and distributor/dealer/retailer levels each with their own price list are where a general field-sales app starts to strain.",
      },
      {
        title: "You actually just need tracking",
        body: "If the only open question is attendance and where reps went, a tracking app costs considerably less.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Koops",
        category: "All-in-one sales & distribution (SFA + CRM + DMS)",
        bestFor: "SMEs wanting distributor self-service and native Tally integration",
        strength:
          "Covers SFA, CRM and DMS together, with dealer self-service and a Tally link.",
        watchOut:
          "Evaluate the DMS depth against what your distributors will realistically log in and use.",
        compareSlug: "ozzo-vs-koops",
      },
      {
        name: "Unolo",
        category: "Field-force tracking & attendance",
        bestFor: "Teams whose requirement stops at attendance and GPS",
        strength: "Cheapest way to answer \"where was my rep today\".",
        watchOut: "No order capture, schemes or collections.",
        compareSlug: "ozzo-vs-unolo",
      },
      {
        name: "FieldAssist",
        category: "Enterprise SFA & DMS for FMCG/CPG",
        bestFor: "Brands whose distribution network has outgrown an SME tool",
        strength:
          "Enterprise route-to-market, retail audits and demand forecasting.",
        watchOut: "Quote-based and scoped for enterprise rollouts.",
        compareSlug: "ozzo-vs-fieldassist",
      },
      {
        name: "FieldSense",
        category: "Field-force management app",
        bestFor: "Very small teams starting out, on a free tier",
        strength: "Low-friction way to begin digitising a field team.",
        watchOut: "You will outgrow it as soon as orders matter.",
        compareSlug: "ozzo-vs-fieldsense",
      },
    ],
    faqs: [
      {
        q: "What is the best Delta Sales App alternative with a built-in CRM?",
        a: "OZZO and Koops both combine field sales with a CRM in one system. OZZO adds a shared WhatsApp inbox with an AI assistant on the same customer record; Koops leans towards distributor self-service and native Tally integration. Which fits depends on whether your bottleneck is customer conversations or distributor ordering.",
      },
      {
        q: "Which alternative handles trade schemes and price lists best?",
        a: "Among SME-priced options, look for slab schemes, free-goods offers and customer-specific price lists per trade level. OZZO ships all three plus distributor/dealer/retailer levels. The enterprise platforms — FieldAssist, Bizom — go deeper again, at enterprise cost.",
      },
      {
        q: "How much do these alternatives cost?",
        a: "Most Indian field-sales vendors quote rather than publish. OZZO publishes: ₹300 per user per month for SFA and ₹400 for CRM + SFA on yearly billing, plus 18% GST. Always confirm current pricing with each vendor directly.",
      },
    ],
  },
  {
    slug: "bizom-alternatives",
    target: "Bizom",
    targetCategory: "Enterprise SFA for FMCG & CPG",
    compareSlug: "ozzo-vs-bizom",
    metaTitle: "Bizom alternatives, honestly compared",
    metaDescription:
      "Five Bizom alternatives for Indian FMCG and consumer brands: enterprise SFA peers and lighter SME platforms, with an honest view of who each one suits.",
    keywords: [
      "Bizom alternatives",
      "Bizom competitors",
      "alternatives to Bizom India",
      "enterprise SFA alternatives",
      "FMCG sales automation alternatives",
      "affordable Bizom alternative",
    ],
    summary:
      "Bizom is an enterprise sales-automation platform for FMCG and CPG brands running large distribution networks. Buyers compare it either against its direct enterprise peers, or — more often — discover during evaluation that their network is not big enough to justify an enterprise rollout. Both shortlists are below, with the SME options marked clearly so you do not waste a demo on the wrong tier.",
    whyLook: [
      {
        title: "Your outlet count does not justify it",
        body: "Enterprise SFA is priced and built for hundreds or thousands of outlets. Below that, most of the platform goes unused while you still pay for the rollout.",
      },
      {
        title: "You want a published price",
        body: "Enterprise platforms are quote-based by default. If you need to budget before a sales cycle, a vendor that publishes per-user rates is easier to plan around.",
      },
      {
        title: "Implementation time is a problem",
        body: "An enterprise deployment is a project with a timeline. SME platforms are configured in days.",
      },
    ],
    picks: [
      {
        name: "FieldAssist",
        category: "Enterprise SFA & DMS for FMCG/CPG",
        bestFor: "Enterprise FMCG and CPG brands and their distribution networks",
        strength:
          "Bizom's closest peer — route-to-market depth, retail audits and demand forecasting.",
        watchOut: "Same enterprise tier, so the same cost and rollout questions apply.",
        compareSlug: "ozzo-vs-fieldassist",
      },
      {
        name: "BeatRoute",
        category: "AI retail-execution SFA",
        bestFor: "Mid-to-large consumer brands focused on retail execution",
        strength: "Goal-driven AI for retail execution and route optimisation.",
        watchOut: "Strongest where retail execution, not distribution, is the core problem.",
        compareSlug: "ozzo-vs-beatroute",
      },
      {
        name: "mAssist",
        category: "Enterprise SFA for FMCG, CPG & pharma",
        bestFor: "Large pharma and FMCG enterprises with complex distribution",
        strength: "Handles multi-tier distribution and pharma field-force structures.",
        watchOut: "Enterprise-oriented throughout.",
        compareSlug: "ozzo-vs-massist",
      },
      OZZO_PICK,
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distributors and manufacturers below enterprise scale",
        strength: "Focused field sales without an implementation project.",
        watchOut: "Field sales only — the CRM is a separate purchase.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
    ],
    faqs: [
      {
        q: "What is a good Bizom alternative for a small or regional brand?",
        a: "Bizom is built for enterprise distribution, so the honest answer for a regional brand is usually a different tier of product entirely. OZZO and Delta Sales App both cover field attendance, visits, beat routes and order capture at published SME pricing, without an enterprise rollout. You give up image-recognition audits and demand forecasting.",
      },
      {
        q: "Which Bizom alternative is closest on features?",
        a: "FieldAssist is the nearest direct peer — enterprise SFA plus DMS for FMCG and CPG. BeatRoute is close too, weighted more towards AI-driven retail execution than distribution management. mAssist is the stronger fit if pharma distribution is part of the picture.",
      },
      {
        q: "Do any alternatives publish their pricing?",
        a: "The enterprise platforms are generally quote-based. Among the SME options, OZZO publishes every rate — SFA at ₹300 per user per month and CRM + SFA at ₹400 on yearly billing, plus GST. Confirm current figures with any vendor before deciding.",
      },
    ],
  },
  {
    slug: "trackolap-alternatives",
    target: "TrackOlap",
    targetCategory: "Employee monitoring, HR & sales suite",
    compareSlug: "ozzo-vs-trackolap",
    metaTitle: "TrackOlap alternatives for field sales",
    metaDescription:
      "Four TrackOlap alternatives for Indian teams, from lighter field-tracking apps to full field-sales platforms with order capture, collections and CRM.",
    keywords: [
      "TrackOlap alternatives",
      "TrackOlap competitors",
      "alternatives to TrackOlap",
      "employee tracking software alternatives India",
      "field sales tracking alternatives",
      "GPS employee monitoring alternative",
    ],
    summary:
      "TrackOlap bundles employee monitoring, HR and sales tracking from a single vendor, which suits teams that want those three in one contract. Buyers look elsewhere when the sales side needs to do more than report activity — taking orders, applying schemes, collecting payments — or when a monitoring-led product is the wrong tone for a sales team. The alternatives below split along exactly that line.",
    whyLook: [
      {
        title: "Monitoring is not the same as selling",
        body: "A monitoring-led tool answers what the rep did. A sales-led tool helps the rep sell — order capture, current prices, schemes, outstanding. Reps feel the difference, and so does adoption.",
      },
      {
        title: "You need order capture and collections",
        body: "If revenue depends on what the rep books at the counter, activity reporting alone leaves the main job on paper.",
      },
      {
        title: "You only need the field piece",
        body: "If the HR and monitoring modules are not used, a focused field app is cheaper and simpler.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Unolo",
        category: "Field-force tracking & attendance",
        bestFor: "Teams that want tracking without the HR and monitoring layers",
        strength: "Lean, quick to deploy and inexpensive.",
        watchOut: "No order capture, schemes or collections.",
        compareSlug: "ozzo-vs-unolo",
      },
      {
        name: "FieldSense",
        category: "Field-force management app",
        bestFor: "Small teams starting with a free tier",
        strength: "Easy to trial before committing budget.",
        watchOut: "Same ceiling as any tracking-first tool.",
        compareSlug: "ozzo-vs-fieldsense",
      },
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distribution businesses where the field team books orders",
        strength: "Sales-led rather than monitoring-led.",
        watchOut: "Front-office CRM is a separate system.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
    ],
    faqs: [
      {
        q: "What is the best TrackOlap alternative for a field sales team?",
        a: "If the team sells rather than services, a sales-led platform usually fits better than a monitoring-led one. OZZO and Delta Sales App both centre on order capture; OZZO also adds collections with self-calculating outstanding and a CRM with a shared WhatsApp inbox.",
      },
      {
        q: "Is there a lighter alternative to TrackOlap?",
        a: "Unolo and FieldSense are both lighter and focused on attendance and GPS without the HR and employee-monitoring layers. FieldSense has a free tier if you want to trial before paying.",
      },
      {
        q: "Do these alternatives include attendance and GPS?",
        a: "Yes, all four do. The difference is what sits on top: Unolo and FieldSense stop at tracking, Delta Sales App adds order capture, and OZZO adds order capture, field payment collection, automatic outstanding and a CRM on the same record.",
      },
    ],
  },
  /*
   * The three entries below were added on 2026-11-17. The five that precede
   * them cover the competitors Search Console actually shows demand for
   * ("bizom alternative" earned the site's only non-brand click of the quarter).
   * These three close the gap between /compare, which carries twelve
   * competitors, and /alternatives, which carried five — the same buyer, at the
   * same moment, searching without our brand name in the query.
   *
   * Every factual claim about a competitor here is taken from the verdict
   * already published on the matching /compare page rather than written fresh,
   * so the two formats cannot drift apart and nothing unverified about a real
   * company goes live. That is the honesty bar at the top of this file applied
   * literally.
   */
  {
    slug: "beatroute-alternatives",
    target: "BeatRoute",
    targetCategory: "AI retail-execution SFA",
    compareSlug: "ozzo-vs-beatroute",
    metaTitle: "BeatRoute alternatives for Indian teams",
    metaDescription:
      "Four BeatRoute alternatives for Indian field sales teams, from brand-scale retail execution to all-in-one CRM and order capture built for SMEs.",
    keywords: [
      "BeatRoute alternatives",
      "BeatRoute competitors",
      "alternatives to BeatRoute",
      "retail execution software alternatives India",
      "affordable SFA alternative",
      "BeatRoute alternative for SME",
    ],
    summary:
      "BeatRoute is a goal-driven AI platform for retail execution, used by large consumer brands across Asia, Africa and the Middle East, with fast deployment and strong route and visit planning. Buyers look elsewhere when the team is smaller than the platform assumes — when AI retail execution is more machinery than a twenty-rep field team will ever use, or when the front-office CRM and the field app are wanted on one login instead of two systems. The alternatives below split along exactly that line.",
    whyLook: [
      {
        title: "The platform is sized for a larger brand",
        body: "Goal-driven AI retail execution earns its keep across hundreds of outlets with someone watching the analytics. A smaller distribution business is usually paying for depth it will not reach.",
      },
      {
        title: "You want CRM and field sales on one login",
        body: "Retail-execution tools concentrate on what happens at the outlet. If leads, quotations and follow-ups live in a separate CRM, somebody is keying the same customer in twice.",
      },
      {
        title: "You need a rate card before the first call",
        body: "Enterprise platforms quote per deployment. A smaller team planning a budget usually wants published pricing it can read first.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Bizom",
        category: "Retail intelligence & distribution SFA",
        bestFor: "Brands that want deep distributor and retail analytics",
        strength: "Mature retail-execution and secondary-sales reporting.",
        watchOut:
          "Built for brand-scale distribution, so it carries the cost and the setup that implies.",
        compareSlug: "ozzo-vs-bizom",
      },
      {
        name: "FieldAssist",
        category: "Route-to-market SFA for consumer brands",
        bestFor: "Consumer brands running a large beat network",
        strength: "Strong route-to-market execution and outlet coverage.",
        watchOut: "Positioned at brands rather than SMEs, with the pricing that follows.",
        compareSlug: "ozzo-vs-fieldassist",
      },
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distribution businesses whose reps book the orders",
        strength: "Sales-led and straightforward to roll out.",
        watchOut: "Front-office CRM is a separate system.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
    ],
    faqs: [
      {
        q: "What is the best BeatRoute alternative for a small team?",
        a: "For a field team under about fifty users, an all-in-one platform usually fits better than an AI retail-execution suite. OZZO covers attendance, GPS, visits, beat routes, offline orders and collections alongside a CRM and a shared WhatsApp inbox, from ₹100 per user per month.",
      },
      {
        q: "Which BeatRoute alternative is closest on retail execution?",
        a: "Bizom and FieldAssist are nearest in scope — both built for brand-scale distribution with deep secondary-sales reporting. Expect a similar class of deployment rather than a lighter one.",
      },
      {
        q: "Do these alternatives capture orders offline?",
        a: "Offline capture matters wherever reps work in low-signal markets. OZZO and Delta Sales App both take orders offline and sync when signal returns; confirm the details against your own device mix with each vendor.",
      },
    ],
  },
  {
    slug: "fieldsense-alternatives",
    target: "FieldSense",
    targetCategory: "Field-force management app",
    compareSlug: "ozzo-vs-fieldsense",
    metaTitle: "FieldSense alternatives for field sales",
    metaDescription:
      "Four FieldSense alternatives for Indian teams that have outgrown tracking and now need order capture, collections and a CRM on the same record.",
    keywords: [
      "FieldSense alternatives",
      "FieldSense competitors",
      "alternatives to FieldSense",
      "field force management alternatives India",
      "field sales app with order booking",
      "FieldSense alternative with CRM",
    ],
    summary:
      "FieldSense is an easy, mobile-first field-force management app — real-time tracking, visits, attendance, expenses and custom forms, with a free tier for up to ten users. It is a sensible place to start. Buyers move on when the job grows past visibility: when the rep has to book the order at the counter, apply the scheme, collect the payment and have the outstanding update itself. The alternatives below are ordered by how far past tracking each one goes.",
    whyLook: [
      {
        title: "You have outgrown the free tier",
        body: "Ten users is enough to prove the idea. Past that the question stops being whether to track at all and becomes what else the field app should do.",
      },
      {
        title: "The rep needs to take the order",
        body: "Tracking confirms a visit happened. It does not capture what was ordered, at what price, under which scheme — which is the part the business is actually paid for.",
      },
      {
        title: "Collections are still on paper",
        body: "If outstanding gets reconciled in a spreadsheet after the fact, the field app is only doing half the round.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Unolo",
        category: "Field-force tracking & attendance",
        bestFor: "Teams that want the same job done, leanly",
        strength: "Quick to deploy and inexpensive.",
        watchOut: "Same ceiling: no order capture, schemes or collections.",
        compareSlug: "ozzo-vs-unolo",
      },
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Distributors whose reps book orders on the beat",
        strength: "Sales-led rather than tracking-led.",
        watchOut: "Front-office CRM is a separate system.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
      {
        name: "TrackOlap",
        category: "Employee monitoring, HR & sales suite",
        bestFor: "Teams that want HR and monitoring in the same contract",
        strength: "Three things from one vendor.",
        watchOut: "Monitoring-led in tone, which sales teams adopt less readily.",
        compareSlug: "ozzo-vs-trackolap",
      },
    ],
    faqs: [
      {
        q: "Is there a free alternative to FieldSense?",
        a: "Free tiers change, so check each vendor directly rather than trusting any list. Past ten users the more useful question is what you need besides tracking — order capture and collections are where the real pricing difference sits.",
      },
      {
        q: "Which FieldSense alternative adds order booking?",
        a: "OZZO and Delta Sales App both capture orders in the field, offline included. OZZO also applies prices and schemes at the point of order and keeps outstanding updating itself as collections come in.",
      },
      {
        q: "Can I keep tracking and attendance if I switch?",
        a: "Yes. Attendance, GPS and visit logging are table stakes across all four — nothing here asks you to give up the visibility you already have.",
      },
    ],
  },
  {
    slug: "massist-alternatives",
    target: "mAssist",
    targetCategory: "Enterprise SFA for FMCG & CPG",
    compareSlug: "ozzo-vs-massist",
    metaTitle: "mAssist alternatives for growing teams",
    metaDescription:
      "Four mAssist alternatives for Indian distribution businesses that want sales-force automation without an enterprise deployment behind it.",
    keywords: [
      "mAssist alternatives",
      "mAssist competitors",
      "alternatives to mAssist",
      "SFA alternatives India",
      "FMCG sales force automation alternative",
      "mAssist alternative for SME",
    ],
    summary:
      "mAssist is an AI-powered sales-force-automation platform built for large FMCG, CPG and pharma enterprises with complex multi-tier distribution, serving 350+ enterprise customers and 125,000+ daily users. That scale is precisely why buyers look elsewhere: a business selling through one tier of distributors with a few dozen reps ends up buying an enterprise rollout to solve a mid-market problem. The alternatives below keep the sales-force automation and drop the enterprise weight.",
    whyLook: [
      {
        title: "Your distribution is one tier, not four",
        body: "Multi-tier distribution logic is the hardest part of enterprise SFA to configure. If you sell through a single layer of distributors, most of that configuration is cost without benefit.",
      },
      {
        title: "You cannot staff an enterprise rollout",
        body: "Enterprise SFA assumes an internal project owner and an implementation window. A smaller team needs something a sales manager can run without either.",
      },
      {
        title: "You want the CRM in the same system",
        body: "Enterprise SFA handles the distribution side well. Leads, quotations and follow-ups usually sit in a second tool, and the two rarely share one customer record.",
      },
    ],
    picks: [
      OZZO_PICK,
      {
        name: "Bizom",
        category: "Retail intelligence & distribution SFA",
        bestFor: "Businesses that still need deep distribution analytics",
        strength: "Mature secondary-sales and retail reporting.",
        watchOut:
          "Also pitched at brand scale, so it is a sideways move rather than a lighter one.",
        compareSlug: "ozzo-vs-bizom",
      },
      {
        name: "Delta Sales App",
        category: "Field sales automation for distributors",
        bestFor: "Single-tier distribution with field order booking",
        strength: "Right-sized for a distributor rather than a brand.",
        watchOut: "Front-office CRM is a separate system.",
        compareSlug: "ozzo-vs-delta-sales-app",
      },
      {
        name: "FieldAssist",
        category: "Route-to-market SFA for consumer brands",
        bestFor: "Consumer brands with a large beat network",
        strength: "Strong outlet coverage and route-to-market execution.",
        watchOut: "Enterprise positioning, much like mAssist itself.",
        compareSlug: "ozzo-vs-fieldassist",
      },
    ],
    faqs: [
      {
        q: "What is the best mAssist alternative for an SME?",
        a: "OZZO is built for that exact gap — SMEs and MSMEs wanting field sales, CRM and WhatsApp on one login, with published rates from ₹100 per user per month rather than a per-deployment quote.",
      },
      {
        q: "Will I lose secondary sales reporting if I move off mAssist?",
        a: "Not necessarily. Secondary sales tracking is standard across this list; what differs is depth. If your reporting runs to planogram scoring or demand forecasting, stay with an enterprise platform — OZZO does neither.",
      },
      {
        q: "How long does a smaller SFA platform take to roll out?",
        a: "Weeks rather than quarters, because there is far less to configure when distribution is single-tier. Ask any vendor here to show you a live account with your own products and price list loaded before you sign.",
      },
    ],
  },
];

export const getAlternativesPage = (slug: string) =>
  alternativesPages.find((p) => p.slug === slug);
