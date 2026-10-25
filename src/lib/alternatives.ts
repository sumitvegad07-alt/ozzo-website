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

const OZZO_PICK: AltPick = {
  name: "OZZO",
  category: "All-in-one CRM + field sales for SMEs",
  bestFor: "Indian SMEs and MSMEs that want field sales, CRM and WhatsApp in one login",
  strength:
    "Attendance, GPS, visits, beat routes, offline orders, collections and auto-outstanding, plus a CRM and a shared WhatsApp inbox on the same customer record. Rates are published: from ₹100 per user per month.",
  watchOut:
    "No AI shelf-image recognition, no planogram scoring and no demand forecasting. Android only today — iOS is not shipped.",
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
        a: "Most Indian field-sales vendors quote rather than publish. OZZO publishes: ₹300 per user per month for SFA and ₹400 for CRM + SFA on yearly billing, plus 18% GST, with a minimum order of ₹5,000. Always confirm current pricing with each vendor directly.",
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
];

export const getAlternativesPage = (slug: string) =>
  alternativesPages.find((p) => p.slug === slug);
