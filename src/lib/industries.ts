/**
 * Data-driven industry / sub-industry pages ( /industries/[slug] ).
 *
 * STRATEGY: deep, specific sub-industry pages (not one broad "industries"
 * page). Each targets the real, researched field-sales & distribution pain
 * points of ONE sub-industry, then maps them to shipped OZZO capability.
 *
 * ANTI-THIN-CONTENT CONTRACT (this is what wins Google organic AND AI
 * recommendations — break it and the pages become worthless doorway pages):
 *   1. painPoints must be SPECIFIC to the sub-industry and grounded in
 *      real industry research — never generic "boost productivity" filler.
 *   2. Every OZZO claim must be a shipped capability
 *      (OZZO_FEATURE_MASTER_CATALOG.md) — same honesty bar as the whole site.
 *   3. honestNote states plainly what OZZO does NOT do for this industry
 *      (e.g. fertilizer subsidy POS / e-Urvarak, pesticide QR-batch
 *      compliance). Overclaiming compliance features destroys trust.
 *   4. No competitor or exact-price claims here.
 *
 * Sub-industry facts sourced from public industry research (Sep 2026):
 * agri-input distribution, fertilizer DBT/e-Urvarak, pesticide QR mandate
 * (Aug 2025), animal-feed dealer credit economics, etc.
 */

export type IndustryPain = { title: string; body: string };
export type IndustrySolution = { pain: string; how: string };
export type IndustryStep = { title: string; body: string };
export type IndustryStat = { value: string; label: string; note?: string };
export type IndustryWhyNot = { label: string; body: string };
export type IndustryOutcome = { title: string; body: string };
/**
 * Keyword-targeted SEO section — 2–3 readable paragraphs written around the
 * high-intent SFA/WFA search terms for THIS industry ("SFA for X",
 * "salesman tracking software for X", "order booking app for X", plus the
 * industry's own feature language like RTM/route-to-market for FMCG). Its
 * `keywords` also extend the page's <meta keywords>. Focus: SFA + WFA (field
 * sales + workforce/GPS tracking), not CRM. Keep it genuinely useful, not
 * keyword-stuffed.
 */
export type IndustrySeo = { heading: string; body: string[]; keywords: string[] };

/**
 * Data-driven "field cockpit" — a tailored, illustrative app glimpse per
 * industry (not a screenshot). The generic IndustryCockpit component renders
 * this, so every industry gets its own on-brand field-app visual from data,
 * without a bespoke component each. Keep the content genuinely specific to the
 * trade (real SKUs, schemes, units, roles for THAT industry).
 */
export type CockpitRow = {
  /** lucide icon name (rendered via <Icon/>). */
  icon: string;
  title: string;
  subtitle: string;
  /** Right-aligned value, e.g. "₹9,860". Omit for a check row. */
  value?: string;
  /** Highlighted badge line under the row, e.g. a price/scheme alert. */
  badge?: string;
  badgeTone?: "amber" | "primary" | "success";
  /** Show a success check on the right instead of a value. */
  check?: boolean;
  /** Accent colour of the row's icon tile. */
  tone?: "primary" | "success" | "amber";
};
export type CockpitMeter = { label: string; value: string; sub?: string; fillPct: number };
export type CockpitChip = { label: string; sub: string; tone?: "gradient" | "glass" };
export type Cockpit = {
  /** Panel header, e.g. "Today · Rajkot beat". */
  header: string;
  headerBadge: string;
  rows: CockpitRow[];
  meter?: CockpitMeter;
  chips?: CockpitChip[];
  /** Heading + blurb for the dark "see it work" section. */
  sectionTitle: string;
  sectionBody: string;
};

export type Industry = {
  /** URL slug: /industries/<slug> */
  slug: string;
  /** Sector label used to group the hub and cross-link siblings. */
  sector: string;
  /** Display name, e.g. "Seed Companies". */
  name: string;
  /** lucide-react icon name. */
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Hero one-liner. */
  tagline: string;
  /** 1–2 sentence framing under the hero. */
  intro: string;
  /**
   * Premium hero image for this industry (path under /public). When present,
   * the page renders the full-bleed image hero; when absent it falls back to
   * the gradient hero. Every industry should eventually have one (founder
   * requirement: a relevant image per industry).
   */
  image?: string;
  imageAlt?: string;
  /** Cited, industry-specific facts for the animated stat strip. */
  stats?: IndustryStat[];
  /** The real, researched pain points of this sub-industry. */
  painPoints: IndustryPain[];
  /** How OZZO addresses each pain (kept honest and grounded). */
  solutions: IndustrySolution[];
  /** An industry-specific field-sales flow. */
  workflow: IndustryStep[];
  /** Why OZZO over the alternatives, FOR THIS INDUSTRY (the competitive angle). */
  whyNotOthers?: IndustryWhyNot[];
  /** Honest outcome framing — what changes (no fabricated numbers). */
  outcomes?: IndustryOutcome[];
  /** Tailored "field cockpit" visual for the dark "see it work" section. */
  cockpit?: Cockpit;
  /** Keyword-targeted SFA/WFA SEO section (for Google long-tail ranking). */
  seo?: IndustrySeo;
  /** Key OZZO modules that matter most for this industry. */
  modules: string[];
  /** What OZZO complements but does NOT replace (honesty). */
  honestNote?: string;
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  // ─────────────────────────────────────────── CPVC & PVC PIPES (flagship)
  {
    slug: "cpvc-pvc-pipe-companies",
    sector: "Pipes & Fittings",
    name: "CPVC & PVC Pipe Companies",
    icon: "Factory",
    metaTitle: "Field sales software for CPVC, PVC & uPVC pipe companies | OZZO",
    metaDescription:
      "OZZO is built for PVC, CPVC & uPVC pipe brands: 15,000+ SKUs at multiple units, resin-linked price changes pushed to the field, dealer credit & secondary-sales visibility, plumber/contractor engagement, and a CRM pipeline for project sales — one system.",
    keywords: ["PVC pipe company software", "CPVC pipe distribution software", "uPVC pipe distribution", "pipe manufacturer field sales", "plumbing pipe SFA India", "pipe dealer management software", "field sales software for pipe brands"],
    image: "/industries/pvc-cpvc-pipes-hero.jpg",
    imageAlt: "CPVC and PVC pipes and fittings installed along a wall",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for CPVC & PVC pipe companies",
      body: [
        "OZZO is a sales force automation (SFA) software for PVC, CPVC and uPVC pipe companies that combines multi-unit order booking (piece, bundle, metre, kg), resin-linked price-list updates, dealer and secondary-sales management and outstanding in one field app. With a 15,000-SKU catalogue, multi-unit order booking is the core — reps quote the current price and book the exact SKU and unit at the counter, even offline.",
        "It is also field-force tracking (WFA) and salesman location tracking software for pipe field teams: GPS attendance, live location, and geo-tagged dealer and plumber/contractor visits. So \"SFA for pipe companies\", \"order booking app for pipe distributors\" and \"salesman tracking software\" are one system. Multi-unit order booking, price-list control, secondary sales and GPS field tracking make OZZO a practical pipe distribution and sales-tracking system.",
      ],
      keywords: ["SFA for pipe companies", "PVC CPVC pipe distributor management software", "sales force automation software for pipe brands", "salesman tracking software for pipe distribution", "order booking app for pipe distributors", "multi unit order booking pipes", "field sales software for pipe companies"],
    },
    tagline: "The pipe business runs on the plumber's word, a 15,000-SKU catalogue and a resin price that never sits still. OZZO is built for exactly that.",
    intro:
      "Selling pipe isn't selling packaged goods. The plumber decides your brand, your catalogue runs to thousands of SKUs across sizes and pressure classes, resin prices move your price list constantly, and you're running a dealer beat and long-cycle project sales at the same time. OZZO handles all of it in one system.",
    stats: [
      { value: "15,000+", label: "SKUs a pipe brand carries — sizes × pressure classes × fittings", note: "Industry range" },
      { value: "Crude-linked", label: "PVC resin prices swing with oil, forcing constant price-list revisions" },
      { value: "Plumbers", label: "decide the brand at the point of use — not the retailer" },
    ],
    painPoints: [
      { title: "The plumber decides your brand — not the shop", body: "Plumbers, contractors and masons specify which pipe brand actually gets used. That's why leaders like FlowGuard ('PlumberKaSaathi'), Astral and Finolex pour investment into plumber engagement and loyalty. A field team that only calls on dealers is invisible to the people who truly drive demand." },
      { title: "15,000+ SKUs, sold by the piece, bundle, metre and kilo", body: "Sizes × pressure classes/schedules × a long tail of fittings — and every one sold in different units. Capturing an accurate order at the counter (right SKU, right unit, right current price) is genuinely hard, and every error costs margin." },
      { title: "Resin-price volatility whipsaws your price list", body: "PVC and CPVC resin is crude-linked and moves sharply. When prices rise you must push new rates to the field fast; when they fall, dealers destock and outstanding balloons. A stale rate card quietly bleeds margin on every order booked." },
      { title: "Dealer credit and secondary sales you can't see", body: "Product moves distributor → dealer → retailer on credit, but primary billing tells you nothing about whether it's actually reaching the counter and the plumber. Slow secondary movement becomes tomorrow's destocking and returns." },
      { title: "Two sales motions at once — retail channel and projects", body: "Alongside the dealer and retail beat, there's long-cycle project and institutional business (builders, infrastructure, irrigation) that needs a pipeline, quotations and disciplined follow-up. Most field tools do one motion well, not both." },
    ],
    solutions: [
      { pain: "Engage the plumber & contractor network", how: "Model plumbers, contractors and masons as their own customer type; log geo-stamped engagement visits, run trade schemes tied to what they specify, and keep their history on the same record as the dealer they buy from — so demand generation is finally visible." },
      { pain: "Take complex orders right, in the field", how: "A full catalogue with categories, multi-unit ordering (piece / bundle / metre / kg) and customer-specific price lists — so a rep captures the exact SKU, unit and current price at the counter, offline if there's no signal." },
      { pain: "Push new prices the day resin moves", how: "Update the price-list engine centrally and every rep quotes the new price instantly — no stale rate cards when resin swings — with trade schemes to move stock when dealers hesitate on the dips." },
      { pain: "See secondary sales and control credit", how: "Distributor / dealer / retailer trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so you see real movement and recover on time." },
      { pain: "Run projects and the retail beat in one system", how: "A CRM pipeline for project and institutional deals — leads, stages, branded PDF quotations and follow-ups — running alongside the dealer field beat, on one login and one customer record." },
    ],
    workflow: [
      { title: "Engage the influencer", body: "The rep meets a plumber or contractor, logs a geo-stamped visit and the products they specify, and enrols them in a scheme." },
      { title: "Work the dealer beat", body: "A counter visit, a multi-unit order at current prices, captured offline and synced — no stale rate card, no skipped outlet." },
      { title: "Advance a project deal", body: "Update a project-pipeline stage, send a branded PDF quotation, and set the next follow-up so nothing goes cold." },
      { title: "Collect & watch movement", body: "Record the collection against outstanding; primary/secondary and the Ageing report show what's actually reaching the counter." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "Generic trackers can tell you a rep visited a shop — but not manage 15,000 SKUs at multiple units, push resin-linked price changes, run a project pipeline, or engage plumbers. For a pipe brand, that's most of the job." },
      { label: "Not an enterprise FMCG SFA", body: "Enterprise CPG platforms are shaped around fast-moving packaged goods and heavy shelf-audit merchandising — built for biscuits and shampoo, not pressure-class pipe SKUs, project sales and plumber influence, and priced for national brands." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM handles the project pipeline but has no native field tracking, multi-unit counter orders, trade levels or dealer outstanding — you'd stitch three tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "Current prices in every rep's hand", body: "When resin moves, the new price list is live in the field the same day — margin stops leaking on stale rates." },
      { title: "The plumber network becomes visible", body: "Who your reps engaged, what they specify, and which schemes they're in — on the record, not in someone's head." },
      { title: "Credit & secondary under control", body: "Outstanding self-calculates, credit limits gate the next order, and you finally see what's reaching the counter." },
      { title: "Projects stop slipping", body: "Every project deal has a stage, a quotation and a next step — no long-cycle opportunity quietly forgotten." },
    ],
    cockpit: {
      header: "Today · Rajkot beat",
      headerBadge: "Live price list",
      sectionTitle: "One field app, built for the counter",
      sectionBody: "Current prices, multi-unit orders, the plumber who specifies your brand, and the dealer's outstanding — captured on one screen in the field, online or off.",
      rows: [
        { icon: "Layers", title: "CPVC SDR-11 · 1″", subtitle: "Price list · Central India", value: "₹214/pc", badge: "Resin ▲ 3% · new list pushed to field today", badgeTone: "amber" },
        { icon: "ShoppingCart", title: "PVC 4″ · 6 kg/cm²", subtitle: "40 pc · 2 bundles · captured offline", value: "₹9,860" },
        { icon: "UserRound", title: "Ramesh · Plumber", subtitle: "Specifies your brand · in Monsoon scheme", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹2.4L", sub: "/ ₹3L limit", fillPct: 80 },
      chips: [
        { label: "Project deal", sub: "Quotation sent · follow-up Fri", tone: "gradient" },
        { label: "Secondary ✓ reaching counter", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["CRM pipeline for project sales", "Multi-unit ordering (piece / bundle / metre / kg)", "Customer-specific price lists & schemes", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Geo-tagged influencer & dealer visits", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO can model and track your plumber/contractor engagement — as a customer type, with geo-stamped visits, schemes and history — but it is not a consumer-style gamified plumber-rewards app with points redemption. It gives your field team the visibility and tools to run that relationship; a dedicated loyalty app for plumbers is a separate thing.",
    faqs: [
      { q: "Is OZZO built for PVC and CPVC pipe companies?", a: "Yes. OZZO handles what makes pipe field sales hard — 15,000+ SKUs at multiple units, resin-linked price-list changes pushed to the field, dealer credit and secondary-sales visibility, plumber/contractor engagement, and a CRM pipeline for project sales — in one system." },
      { q: "Can OZZO handle our huge SKU range and multiple units?", a: "Yes. A full catalogue with categories and multi-unit ordering (piece, bundle, metre, kilo) plus customer-specific price lists means reps capture the exact SKU, unit and current price at the counter — offline if there's no signal." },
      { q: "How does OZZO deal with PVC resin price volatility?", a: "Update the price-list engine centrally and every rep quotes the new price instantly — so resin swings don't leave stale rate cards in the field. Trade schemes help move stock when dealers hesitate on price dips." },
      { q: "Can OZZO manage both dealer sales and project/institutional sales?", a: "Yes. The dealer/retail field beat and a CRM pipeline for long-cycle project deals (stages, branded quotations, follow-ups) run in one system on one customer record — most tools do only one." },
      { q: "Does OZZO help engage plumbers and contractors?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealers they buy from. It isn't a gamified consumer rewards app, but it makes the influencer relationship visible and manageable." },
    ],
  },

  // ─────────────────────────────────────────── SEED COMPANIES
  {
    slug: "seed-companies",
    sector: "Agriculture",
    name: "Seed Companies",
    icon: "Sprout",
    metaTitle: "Field sales software for seed companies | OZZO",
    metaDescription:
      "OZZO helps seed companies run their dealer network in the field — season-timed order capture, dealer outstanding and credit control, territory coverage and secondary-sales visibility. Built for India's seasonal agri-input trade.",
    keywords: ["seed company software", "seed distribution software", "field sales software for seed companies", "seed dealer management", "agri-input SFA", "seed company CRM India"],
    tagline: "Run your seed dealer network in the field — season-timed orders, dealer outstanding under control, and every territory actually covered.",
    intro:
      "Seed demand lives and dies by a few weeks of sowing window, moves through a deep dealer network on credit, and depends on reps actually reaching the field. OZZO gives seed companies visibility and control over exactly that — without a heavy enterprise rollout.",
    image: "/industries/seed-companies-hero.jpg",
    imageAlt: "Indian farmer broadcasting seeds by hand in a field",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for seed companies",
      body: [
        "OZZO is a sales force automation (SFA) software for seed companies that puts season-timed order booking, dealer outstanding and credit control, trade schemes and territory management into one field app. In the seed trade, dealer outstanding and collection are make-or-break — every order and collection updates a self-calculating outstanding with credit limits, and the Ageing report surfaces overdue dealers before the season turns. Reps book orders in the field, offline in rural belts.",
        "OZZO doubles as field-force tracking (WFA) and salesman location tracking software for seed companies: selfie + GPS attendance, live location, beat routes and geo-tagged dealer visits. So \"SFA for seed companies\", \"dealer management software for seeds\" and \"salesman tracking app\" are one system. Season-timed order booking, outstanding and collection control, and GPS field tracking make OZZO a practical seed distribution and sales-tracking system.",
      ],
      keywords: ["SFA for seed companies", "sales force automation software for seed distribution", "seed dealer management software", "salesman tracking app for seeds", "order booking app for seed companies", "field sales software for seeds", "outstanding collection software for seed dealers"],
    },
    stats: [
      { value: "A few weeks", label: "the sowing window a whole season's demand is compressed into" },
      { value: "15–25%", label: "counterfeit seed incidence in some regions in peak years", note: "Industry estimate" },
      { value: "On credit", label: "dealers carry your stock through the season until the crop sells" },
    ],
    painPoints: [
      { title: "Demand is compressed into a narrow sowing window", body: "A delayed monsoon or a shifted sowing window can turn a season's stock into returns and obsolescence almost overnight. Getting the right variety to the right dealer at the right week is the whole game." },
      { title: "Deep dealer network runs on credit", body: "Distributors, dealers and sub-dealers carry your stock on credit through the season. Outstanding piles up across the chain and gets chased from memory, long after the season has turned." },
      { title: "Coverage and channel conflict", body: "Overlapping territories cause channel conflict, and it's hard to know whether a rep truly visited a dealer or just messaged 'covered' at night." },
      { title: "Liquidation and secondary sales are invisible", body: "Primary billing to the dealer tells you nothing about whether the seed actually moved to the farmer. Slow liquidation quietly becomes next season's returns." },
      { title: "Counterfeit and trust", body: "Counterfeit seed spikes regionally in peak years, so dealer relationships, demo programs and a trusted, well-served channel are what drive repeat farmer purchases." },
    ],
    solutions: [
      { pain: "Season-timed ordering", how: "Reps capture dealer orders in the field — even offline in low-signal rural belts — so stock reaches the right dealer inside the sowing window, and dispatch runs off real orders, not guesswork." },
      { pain: "Outstanding & credit control across the chain", how: "Every order and collection updates a self-calculating outstanding at distributor, dealer and retailer level, with credit limits checked before the next order — so season-end recovery isn't a surprise. The Ageing report shows exactly who's overdue." },
      { pain: "Real coverage, no fake reporting", how: "Selfie + GPS attendance and geo-tagged visits mean 'reached the dealer' means the phone was actually there; beat routes make sure the whole territory gets worked, in order." },
      { pain: "Secondary-sales visibility", how: "Trade levels tag every order Primary or Secondary automatically, so you see whether seed is liquidating to the farmer — not just sitting billed at the dealer." },
      { pain: "Territory discipline", how: "Territory master and reporting hierarchy keep reps to their areas and roll demand up by geography, reducing overlap and channel conflict." },
    ],
    workflow: [
      { title: "Plan the beat by season", body: "Build each rep's dealer beat for the sowing window; the route runs itself, dealer by dealer." },
      { title: "Visit & capture the order offline", body: "Geo-stamped dealer visit, order taken on the spot for the right varieties — queues and syncs even with no signal." },
      { title: "Collect & control credit", body: "Record collections against the dealer's outstanding; the credit limit is checked before the next season's stock goes out." },
      { title: "Watch liquidation & recovery", body: "Primary vs secondary and the Ageing report show what's moving to farmers and what's still owed, in time to act." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a dealer — but not season-timed order capture, dealer outstanding across the chain, trade schemes, or whether seed actually liquidated to the farmer." },
      { label: "Not an enterprise FMCG SFA", body: "Seed isn't fast-moving packaged goods on a monthly cycle — it's a sharp seasonal spike with returns/obsolescence risk and a credit-heavy dealer chain. OZZO is priced and shaped for that, not national CPG budgets." },
      { label: "Not a plain CRM", body: "A CRM records enquiries but has no field visits, offline dealer orders, trade levels or self-calculating outstanding — the things a seasonal seed business actually runs on." },
    ],
    outcomes: [
      { title: "Stock lands inside the sowing window", body: "The right varieties reach the right dealers in the weeks that matter — not after the window has closed." },
      { title: "Season-end recovery isn't a surprise", body: "Outstanding self-calculates and the Ageing report flags overdue dealers early, so recovery starts before the season turns." },
      { title: "You see liquidation, not just billing", body: "Primary vs secondary shows whether seed is actually moving to farmers — early warning on next season's returns." },
      { title: "Every territory truly gets worked", body: "Beat routes and geo-stamped visits make 'covered' a fact, and overlap and channel conflict drop." },
    ],
    cockpit: {
      header: "Kharif beat · Nashik",
      headerBadge: "Sowing window",
      sectionTitle: "One field app, built for the season",
      sectionBody: "Season-timed orders, dealer schemes, outstanding and whether seed is actually liquidating to the farmer — on one screen in the field, online or off.",
      rows: [
        { icon: "Sprout", title: "Hybrid Maize · 4 kg pack", subtitle: "60 packs · captured offline", value: "₹42,000" },
        { icon: "Percent", title: "Early-bird sowing scheme", subtitle: "Pre-season offer · applied", badge: "Dealer enrolled · window pricing", badgeTone: "primary" },
        { icon: "UserRound", title: "Deshmukh Agri · Dealer", subtitle: "Liquidation 70% · secondary tracked", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹1.8L", sub: "/ ₹2.5L limit", fillPct: 72 },
      chips: [
        { label: "Liquidation", sub: "70% moved to farmers", tone: "gradient" },
        { label: "Secondary ✓ reaching farmer", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Trade levels (distributor / dealer / retailer)", "Offline order capture", "Field payment collection & outstanding", "Beat routes & territory", "Trade schemes & price lists", "Ageing & Daily Sales Report"],
    honestNote:
      "OZZO manages your field sales, dealer network and outstanding — it is not a seed-certification or lot-traceability compliance system. It works alongside whatever quality/traceability process you already run.",
    faqs: [
      { q: "How does OZZO help a seed company during peak sowing season?", a: "Reps capture dealer orders in the field (offline-capable for rural areas) so the right varieties reach the right dealers inside the sowing window, while outstanding, credit limits and territory coverage stay under control — the things that decide a seasonal business." },
      { q: "Can OZZO track dealer and sub-dealer outstanding?", a: "Yes. Classify customers into distributor, dealer and retailer trade levels; every order and collection updates a self-calculating outstanding at each level, with credit limits enforced and an Ageing report for recovery." },
      { q: "Does OZZO show secondary sales / liquidation?", a: "Yes. Orders are tagged Primary or Secondary automatically, so you can see whether seed is actually liquidating to farmers rather than only being billed to the dealer." },
    ],
  },

  // ─────────────────────────────────────────── FERTILIZER
  {
    slug: "fertilizer-distributors",
    sector: "Agriculture",
    name: "Fertilizer Distributors",
    icon: "Truck",
    metaTitle: "Field sales software for fertilizer distributors | OZZO",
    metaDescription:
      "OZZO helps fertilizer distributors and companies run the field — dealer coverage, seasonal order capture, outstanding and credit control across the dealer chain, and secondary-sales visibility. Built for India's agri-input trade.",
    keywords: ["fertilizer distribution software", "fertilizer dealer management software", "field sales software for fertilizer", "fertilizer company SFA India", "agri-input distribution software"],
    tagline: "Run your fertilizer dealer chain in the field — seasonal orders, credit under control, and coverage you can actually verify.",
    intro:
      "Fertilizer moves seasonally through a long dealer chain on tight credit, into regions where the network is patchy and reporting is done from memory. OZZO gives fertilizer companies and distributors real field visibility and outstanding control across that chain.",
    image: "/industries/fertilizer-distributors-hero.jpg",
    imageAlt: "Worker loading a urea fertilizer bag onto a distribution truck",
    seo: {
      heading: "Sales force automation (SFA) & distributor management for fertilizer",
      body: [
        "OZZO is a sales force automation (SFA) and distributor management software for fertilizer companies that combines order booking, distributor–dealer–retailer management, outstanding and credit control, and secondary-sales tracking in one field app. Across a long fertilizer dealer chain, distributor management and outstanding control are the core — orders book offline in weak-network regions, credit limits gate the next dispatch, and the Ageing report keeps exposure in check.",
        "It is also field-force tracking (WFA) and salesman location tracking software for fertilizer distributors: GPS attendance, live location and geo-tagged dealer visits. So \"SFA for fertilizer\", \"distributor management software for fertilizer\" and \"salesman tracking software\" are one system. Order booking, distributor management, outstanding and collection, and GPS field tracking make OZZO a practical fertilizer distribution and sales-tracking system. (OZZO complements — it does not replace — the government e-Urvarak/DBT POS.)",
      ],
      keywords: ["SFA for fertilizer", "fertilizer distributor management software", "sales force automation software for fertilizer", "salesman tracking software for fertilizer", "order booking app for fertilizer dealers", "secondary sales software fertilizer", "field sales app for fertilizer"],
    },
    stats: [
      { value: "15–45 days", label: "manufacturer-to-dealer credit that stretches further down the chain" },
      { value: "Seasonal", label: "demand that spikes with the crop calendar and shifts with the monsoon" },
      { value: "Last mile", label: "coverage in weak-network regions where reporting is done from memory" },
    ],
    painPoints: [
      { title: "Seasonal demand and stock exposure", body: "Demand spikes with the crop calendar and can shift with the monsoon, so timely availability at the dealer — without overstocking expensive product — is a constant balancing act." },
      { title: "Long credit cycles down the chain", body: "Manufacturer-to-dealer credit typically runs 15–45 days, and dealers extend further to retailers and farmers. Outstanding across the chain is the number that quietly decides margins." },
      { title: "Last-mile coverage in weak-network regions", body: "Reps work remote belts with poor connectivity, and it's hard to confirm whether dealers were actually visited and stock actually placed." },
      { title: "Secondary movement is a black box", body: "Primary billing to the dealer says nothing about whether product reached the retailer and farmer, so slow-moving stock and channel gaps stay hidden until it's late." },
    ],
    solutions: [
      { pain: "Seasonal order capture, offline", how: "Reps place dealer orders in the field, offline where the network is weak, so availability tracks the crop calendar instead of lagging it." },
      { pain: "Outstanding & credit across the chain", how: "Self-calculating outstanding at distributor, dealer and retailer level with credit limits enforced before the next order, and an Ageing report so overdue accounts surface early — not at year-end." },
      { pain: "Verified last-mile coverage", how: "Selfie-GPS attendance, geo-tagged dealer visits and beat routes turn 'covered' into a fact, even in remote territories, with everything syncing once signal returns." },
      { pain: "Secondary-sales visibility", how: "Automatic Primary/Secondary tagging and trade levels reveal whether product is actually moving down the chain to retailers and farmers." },
    ],
    workflow: [
      { title: "Route the dealer beat", body: "Plan each rep's territory beat; the app walks them dealer by dealer through the region." },
      { title: "Capture orders offline", body: "Geo-stamped visit and order at the dealer, working even without a signal in remote belts." },
      { title: "Collect and cap credit", body: "Collections hit outstanding immediately; credit limits gate the next dispatch so exposure stays bounded." },
      { title: "Track movement & ageing", body: "Primary vs secondary and Ageing reports expose slow stock and overdue dealers in time to act." },
    ],
    whyNotOthers: [
      { label: "Not a fertilizer subsidy POS", body: "OZZO doesn't replace the government e-Urvarak/DBT POS at the counter — it runs everything around your reps, dealers, orders and outstanding, which the POS doesn't touch." },
      { label: "Not just a tracking app", body: "A tracker can't do seasonal dealer order capture offline, credit-limited dispatch, trade schemes, or secondary-sales visibility across the distributor–dealer–retailer chain." },
      { label: "Not an enterprise SFA project", body: "You don't need a national-CPG implementation to run a fertilizer field team — OZZO deploys in days at transparent per-user pricing." },
    ],
    outcomes: [
      { title: "Availability tracks the crop calendar", body: "Dealer orders captured in the field — offline where the network is weak — so stock is there when the season needs it." },
      { title: "Credit exposure stays bounded", body: "Outstanding self-calculates at every level and credit limits gate the next dispatch, so exposure doesn't balloon on the dips." },
      { title: "Secondary stops being a black box", body: "Primary vs secondary shows whether product is actually reaching retailers and farmers." },
      { title: "Coverage you can verify", body: "Selfie-GPS visits turn 'covered' into a fact, even in remote belts." },
    ],
    cockpit: {
      header: "Rabi beat · Nagpur",
      headerBadge: "Live price list",
      sectionTitle: "One field app for the whole chain",
      sectionBody: "Seasonal orders, current prices, credit limits and secondary movement across distributor, dealer and retailer — captured in the field, offline where the network is weak.",
      rows: [
        { icon: "Package", title: "Urea · 45 kg bag", subtitle: "80 bags · captured offline", value: "₹21,600" },
        { icon: "TrendingUp", title: "DAP price revised", subtitle: "New list pushed to field", badge: "Reps quote the current rate today", badgeTone: "primary" },
        { icon: "UserRound", title: "Krishi Kendra · Dealer", subtitle: "Secondary tracked · retailer sales", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹3.2L", sub: "/ ₹4L limit", fillPct: 80 },
      chips: [
        { label: "Ageing alert", sub: "2 dealers > 45 days", tone: "gradient" },
        { label: "Secondary ✓ to retailer", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Trade levels & primary/secondary", "Offline order capture", "Outstanding, credit limits & Ageing", "Beat routes & territory", "Trade schemes & price lists", "Stock & Daily Sales Report"],
    honestNote:
      "OZZO handles your field sales, dealer coverage and outstanding. It is not a fertilizer-subsidy (e-Urvarak / DBT) POS system and does not process Aadhaar/KCC subsidy sales — it runs alongside the government POS your retail points already use.",
    faqs: [
      { q: "Does OZZO work for fertilizer companies and distributors?", a: "Yes. OZZO runs the field-sales side — dealer coverage, seasonal order capture, outstanding and credit control across the distributor–dealer–retailer chain, and secondary-sales visibility — for fertilizer companies and their distributors." },
      { q: "Does OZZO handle the fertilizer subsidy POS (e-Urvarak / DBT)?", a: "No. OZZO is a field-sales and dealer-management platform, not a subsidy POS. It complements the government e-Urvarak/DBT system your retail points use; OZZO covers everything around your reps, dealers and outstanding." },
      { q: "Can OZZO control dealer credit and outstanding?", a: "Yes. Outstanding self-calculates at each trade level, credit limits are enforced before the next order, and the Ageing report flags overdue dealers early." },
    ],
  },

  // ─────────────────────────────────────────── AGROCHEMICALS / PESTICIDES
  {
    slug: "agrochemical-pesticide-companies",
    sector: "Agriculture",
    name: "Agrochemical & Pesticide Companies",
    icon: "SprayCan",
    metaTitle: "Field sales software for agrochemical & pesticide companies | OZZO",
    metaDescription:
      "OZZO helps agrochemical and pesticide companies run the field — retailer coverage, demand-spike order capture, dealer outstanding and credit control, schemes and secondary-sales visibility across India's agri-input channel.",
    keywords: ["agrochemical distribution software", "pesticide company SFA", "crop protection field sales software", "agrochemical dealer management India", "pesticide distribution software"],
    tagline: "Cover the retail channel, catch the demand spike, and keep dealer credit under control — for crop-protection field teams.",
    intro:
      "Agrochemical demand can spike overnight with a pest attack, moves through a vast private retail channel, and rides on dealer credit and field advisory. OZZO gives crop-protection companies the field visibility and outstanding control to respond fast and get paid.",
    image: "/industries/agrochemical-pesticide-companies-hero.jpg",
    imageAlt: "Tractor boom-spraying crop protection across a green field",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for agrochemical companies",
      body: [
        "OZZO is a sales force automation (SFA) software for agrochemical and pesticide companies that brings order booking, trade schemes, secondary-sales management and outstanding into one field app. When a pest outbreak spikes demand, geo-tagged visits and offline order booking surface it in real time so you can move stock and reps to the zone — while schemes apply at the counter and outstanding keeps itself.",
        "It is also field-force tracking (WFA) and salesman location tracking software for crop-protection field teams: GPS attendance, live location and geo-tagged retailer visits across a fragmented channel. So \"SFA for agrochemicals\", \"order booking app for pesticide distributors\" and \"salesman tracking software\" are one system. Order booking, schemes, secondary sales and GPS field tracking make OZZO a practical agrochemical distribution and sales-tracking system. (It complements, not replaces, pesticide QR/batch compliance.)",
      ],
      keywords: ["SFA for agrochemicals", "sales force automation software for pesticide companies", "agrochemical distributor management software", "salesman tracking software for agrochemicals", "order booking app for pesticide distributors", "crop protection field sales software", "secondary sales software agrochemical"],
    },
    stats: [
      { value: "Overnight", label: "how fast demand can spike when a pest outbreak hits" },
      { value: "~90%", label: "of pesticide retail handled by the private, fragmented channel", note: "Industry data" },
      { value: "Advisory-led", label: "sales ride on correct field advice and demos, not just availability" },
    ],
    painPoints: [
      { title: "Sudden, weather-driven demand spikes", body: "When sowing starts or a pest outbreak hits, demand can jump in days. Without fast field feedback, dealers face stockouts exactly when farmers need the product." },
      { title: "A huge, fragmented private retail channel", body: "The vast majority of pesticide retail is private and highly fragmented across hundreds of thousands of points, making consistent coverage and reliable secondary-sales data hard." },
      { title: "Dealer credit and outstanding", body: "Product moves on credit through distributors and dealers; outstanding across the channel is a constant risk that's usually chased from memory." },
      { title: "Advisory-led selling", body: "Sales depend on correct field advisory and demos, so knowing who your reps actually met — and what happened — matters as much as the order itself." },
    ],
    solutions: [
      { pain: "Respond to demand spikes", how: "Real-time geo-tagged visits and offline order capture mean field demand and stockouts surface immediately, so you can redirect stock and reps where the outbreak is." },
      { pain: "Consistent channel coverage", how: "Beat routes and territory master make sure the fragmented retail channel actually gets worked, with selfie-GPS visits proving real coverage." },
      { pain: "Outstanding & credit control", how: "Self-calculating outstanding at each trade level, credit limits before the next order, and an Ageing report to recover on time." },
      { pain: "Secondary sales & schemes", how: "Automatic Primary/Secondary tagging shows real movement to retailers, and trade schemes and price lists run promotions cleanly across the channel." },
    ],
    workflow: [
      { title: "Work the retail beat", body: "Plan dealer and retailer beats; the route runs itself so no outlet is quietly skipped." },
      { title: "Capture demand & orders live", body: "Geo-stamped visits and offline orders surface pest-driven demand and stockouts in real time." },
      { title: "Run schemes & collect", body: "Apply trade schemes at the counter, record collections against outstanding, and enforce credit limits." },
      { title: "See movement & recover", body: "Primary/secondary and Ageing reports show what's liquidating and who's overdue." },
    ],
    whyNotOthers: [
      { label: "Not a compliance / QR system", body: "OZZO doesn't handle the pesticide QR-code labelling mandate or batch-licensing registers — it runs your field sales, channel coverage, schemes and outstanding around that compliance." },
      { label: "Not just a tracker", body: "A tracker won't surface pest-driven demand in real time, run trade schemes across a fragmented retail channel, or show secondary movement and credit." },
      { label: "Not an enterprise CPG platform", body: "Heavy shelf-audit and merchandising suites are built for packaged FMCG, not spike-driven, advisory-led crop protection — and priced for national brands." },
    ],
    outcomes: [
      { title: "You catch the spike", body: "Geo-tagged visits and offline orders surface pest-driven demand and stockouts in real time, so stock and reps move to the outbreak fast." },
      { title: "The fragmented channel gets covered", body: "Beat routes and verified visits keep hundreds of retail points actually worked." },
      { title: "Schemes run clean", body: "Trade schemes and price lists apply at the counter, with primary/secondary tagging to see real movement." },
      { title: "Credit under control", body: "Outstanding self-calculates and Ageing flags overdue dealers before it's too late." },
    ],
    cockpit: {
      header: "Pest alert · Guntur",
      headerBadge: "Field demand",
      sectionTitle: "One field app that catches the spike",
      sectionBody: "Real-time field demand, trade schemes, secondary movement and dealer outstanding — so you respond to a pest outbreak in hours, not days.",
      rows: [
        { icon: "SprayCan", title: "Insecticide · 1 L", subtitle: "Bollworm outbreak · 40 units", value: "₹24,000", badge: "Demand spike flagged from the field", badgeTone: "amber" },
        { icon: "Percent", title: "Combo scheme · 10 + 1", subtitle: "Applied at the counter", check: true, tone: "success" },
        { icon: "UserRound", title: "Rythu Agro · Dealer", subtitle: "Secondary tracked · advisory logged", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹2.1L", sub: "/ ₹3L limit", fillPct: 70 },
      chips: [
        { label: "Outbreak", sub: "stock redirected to zone", tone: "gradient" },
        { label: "Secondary ✓ to retailer", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Beat routes & territory", "Offline order capture", "Trade schemes & price lists", "Outstanding, credit limits & Ageing", "Trade levels & primary/secondary", "Geo-tagged visits & Daily Sales Report"],
    honestNote:
      "OZZO runs your field sales, channel coverage and outstanding. It is not a pesticide regulatory-compliance system — it does not manage the QR-code labelling mandate or batch/expiry licensing registers your compliance process handles. OZZO can capture batch or expiry as custom fields, but formal traceability compliance stays with your existing system.",
    faqs: [
      { q: "How does OZZO help agrochemical companies respond to demand spikes?", a: "Geo-tagged field visits and offline order capture surface pest-driven demand and dealer stockouts in real time, so you can move stock and reps to the outbreak quickly instead of finding out days later." },
      { q: "Does OZZO manage pesticide batch/expiry and the QR-code compliance mandate?", a: "No — that regulatory traceability stays with your compliance system. OZZO can record batch or expiry as custom fields for your own reference, but it focuses on field sales, channel coverage, schemes and outstanding." },
      { q: "Can OZZO run trade schemes across the retail channel?", a: "Yes. Trade schemes and customer-specific price lists are built in, applied at the counter, with primary/secondary tagging to see real movement to retailers." },
    ],
  },

  // ─────────────────────────────────────────── ANIMAL FEED
  {
    slug: "animal-feed-manufacturers",
    sector: "Agriculture",
    name: "Animal Feed Manufacturers",
    icon: "Wheat",
    metaTitle: "Field sales software for animal & poultry feed companies | OZZO",
    metaDescription:
      "OZZO helps cattle, poultry and animal feed companies run the field — dealer and sub-dealer coverage, order capture, the all-important credit and outstanding control, and demand that swings with the dairy calendar.",
    keywords: ["animal feed distribution software", "cattle feed dealer management", "poultry feed field sales software", "feed company SFA India", "animal feed CRM"],
    tagline: "Run the feed dealer chain where credit is the whole game — coverage, order capture, and outstanding you can finally control.",
    intro:
      "Feed moves factory → distributor → dealer → sub-dealer → farmer, almost entirely on credit, with demand that swings with the dairy calendar. For feed companies the real bottleneck is working capital tied up in dealer and farmer dues — exactly what OZZO makes visible and controllable.",
    image: "/industries/animal-feed-manufacturers-hero.jpg",
    imageAlt: "Indian dairy cattle at a farm",
    seo: {
      heading: "Sales force automation (SFA) & collection software for animal feed",
      body: [
        "OZZO is a sales force automation (SFA) software for cattle and poultry feed companies where outstanding and collection are the whole game. Multi-level dealer and sub-dealer outstanding self-calculates, credit limits gate the next order, and the Ageing report turns ₹15–25 lakh of dealer dues into a number you manage — with order booking (bags and tonnes) offline and collections recorded in the field.",
        "It is also field-force tracking (WFA) and salesman location tracking software for feed companies: GPS attendance, live location and geo-tagged dealer visits across rural belts. So \"SFA for animal feed\", \"outstanding and collection software for feed dealers\" and \"salesman tracking app\" are one system. Order booking, outstanding and collection control, and GPS field tracking make OZZO a practical animal-feed distribution and sales-tracking system.",
      ],
      keywords: ["SFA for animal feed", "cattle feed dealer management software", "sales force automation software for feed companies", "outstanding collection software feed dealers", "salesman tracking app for feed", "order booking app for feed distributors", "poultry feed field sales software"],
    },
    stats: [
      { value: "₹15–25L", label: "unrecovered farmer dues a single 100-tonne/month dealer can carry", note: "Industry estimate" },
      { value: "30–60 days", label: "farmers pay at the milk cycle — the dealer funds the gap" },
      { value: "Oct–Feb", label: "concentrate-feed demand peaks with the dairy calendar" },
    ],
    painPoints: [
      { title: "Credit is the bottleneck", body: "Most farmers buy on credit and pay 30–60 days later at the milk payment, so dealers fund the gap. A single dealer doing 100 tonnes a month can carry ₹15–25 lakh in unrecovered dues — and that exposure runs up the whole chain." },
      { title: "A long dealer–sub-dealer chain", body: "The dealer–sub-dealer model dominates the feed trade, so outstanding, schemes and secondary movement have to be tracked at several levels, not just primary billing." },
      { title: "Seasonal, calendar-driven demand", body: "Concentrate-feed demand peaks with the dairy calendar (roughly October–February), so order timing and stock placement swing sharply through the year." },
      { title: "Weak rural logistics and coverage", body: "Poor rural roads and sparse trucking raise delivery cost and make consistent dealer coverage — and honest visit reporting — genuinely hard." },
    ],
    solutions: [
      { pain: "Control the credit exposure", how: "Self-calculating outstanding at distributor, dealer and sub-dealer level, credit limits enforced before the next order, and an Ageing report — so ₹15–25 lakh of dealer dues stops being a guess and starts being managed." },
      { pain: "Track the multi-level chain", how: "Trade levels and automatic Primary/Secondary tagging follow product and dues through distributor, dealer and sub-dealer, not just the first invoice." },
      { pain: "Time the seasonal swing", how: "Offline order capture and beat routes keep dealer stock aligned to the dairy calendar's peaks, with a Daily Sales Report to manage the ramp." },
      { pain: "Verify rural coverage", how: "Selfie-GPS attendance and geo-tagged visits confirm reps actually reached dealers across scattered rural belts, syncing when signal returns." },
    ],
    workflow: [
      { title: "Beat the dealer & sub-dealer route", body: "Plan the rural beat; the route runs dealer by dealer so no account is quietly skipped." },
      { title: "Capture orders offline", body: "Geo-stamped visit and order, working with no signal on rural roads, syncing later." },
      { title: "Collect & cap exposure", body: "Record collections against outstanding at every level; credit limits gate the next dispatch." },
      { title: "Manage the season & dues", body: "Daily Sales Report and Ageing keep the seasonal ramp and dealer dues under control." },
    ],
    whyNotOthers: [
      { label: "Not just a tracker", body: "A tracker can't manage multi-level outstanding, credit limits, schemes and secondary movement down a dealer–sub-dealer chain — where the whole business is credit." },
      { label: "Not an accounting tool", body: "OZZO isn't your books — but outstanding and stock self-calculate from every order and collection, so you control field credit without an accounting bolt-on." },
      { label: "Not an enterprise SFA", body: "A feed business doesn't need a national-CPG rollout — OZZO gives dealer coverage, credit control and seasonal timing, live in days at SME pricing." },
    ],
    outcomes: [
      { title: "Exposure becomes a managed number", body: "₹15–25L of dealer dues stops being a guess — outstanding self-calculates and credit limits gate the next order." },
      { title: "The whole chain is visible", body: "Distributor, dealer and sub-dealer dues and secondary movement — not just the first invoice." },
      { title: "You ride the seasonal peak", body: "Orders and stock stay aligned to the dairy calendar's Oct–Feb ramp." },
      { title: "Rural coverage you can trust", body: "Selfie-GPS visits confirm reps reached scattered dealers, syncing when signal returns." },
    ],
    cockpit: {
      header: "Beat · Anand",
      headerBadge: "Dairy season",
      sectionTitle: "One field app where credit is the game",
      sectionBody: "Multi-level dealer dues, credit limits, collections and seasonal orders — so ₹15–25L of exposure becomes a number you manage, not a guess.",
      rows: [
        { icon: "Wheat", title: "Cattle Feed · 50 kg", subtitle: "Dealer + sub-dealer · 120 bags", value: "₹96,000" },
        { icon: "IndianRupee", title: "Collection recorded", subtitle: "₹40,000 · against outstanding", check: true, tone: "success" },
        { icon: "UserRound", title: "Patel Traders · Sub-dealer", subtitle: "Secondary tracked · credit limit set", check: true, tone: "success" },
      ],
      meter: { label: "Dealer dues", value: "₹18.4L", sub: "/ ₹20L limit", fillPct: 92 },
      chips: [
        { label: "Credit alert", sub: "sub-dealer near limit", tone: "gradient" },
        { label: "Secondary ✓ to farmer", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Trade levels (distributor / dealer / sub-dealer)", "Outstanding, credit limits & Ageing", "Offline order capture", "Beat routes & territory", "Trade schemes & price lists", "Daily Sales Report"],
    honestNote:
      "OZZO manages field sales, dealer coverage and outstanding — it is not an accounting or a feed-formulation/production system. Because outstanding and stock self-calculate, most feed teams run it without a separate accounting bolt-on for the field side.",
    faqs: [
      { q: "How does OZZO help feed companies with the credit problem?", a: "It makes dealer and sub-dealer dues visible and controllable: outstanding self-calculates at every level, credit limits are enforced before the next order, and the Ageing report surfaces overdue accounts — turning ₹15–25 lakh of unrecovered dues from a guess into a managed number." },
      { q: "Does OZZO handle the dealer and sub-dealer chain?", a: "Yes. Classify customers into distributor, dealer and sub-dealer trade levels, with automatic primary/secondary tagging and outstanding tracked at each level of the chain." },
      { q: "Can OZZO work in low-connectivity rural areas?", a: "Yes. Orders, visits, attendance and collections all capture fully offline and sync automatically once the rep is back in signal." },
    ],
  },

  // ─────────────────────────────────────────── POULTRY FEED & INTEGRATORS
  {
    slug: "poultry-feed-integrators",
    sector: "Agriculture",
    name: "Poultry Feed & Integrators",
    icon: "Bird",
    metaTitle: "Field sales software for poultry feed & integrators | OZZO",
    metaDescription:
      "OZZO helps poultry feed companies and integrators run the field — coverage of thousands of contract and independent farms, feed-price changes pushed to the field, dealer and farmer credit control, and offtake/secondary visibility.",
    keywords: ["poultry feed software", "poultry integrator field sales", "broiler layer feed distribution", "poultry feed dealer management India", "contract farming field app"],
    image: "/industries/poultry-feed-integrators-hero.jpg",
    imageAlt: "Commercial broiler poultry farm interior",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for poultry feed & integrators",
      body: [
        "OZZO is a sales force automation (SFA) software for poultry feed companies and integrators that combines feed-price updates pushed to the field, order booking, farm coverage and dealer/farmer outstanding in one app. Because feed is most of a farmer's cost, the price-list engine keeps every rep quoting today's feed price, order booking works offline across scattered farms, and outstanding self-calculates down to the farmer.",
        "It is also field-force tracking (WFA) and salesman location tracking software for poultry field teams: GPS attendance, live location and geo-tagged farm visits across thousands of contract and independent farms. So \"SFA for poultry feed\", \"salesman tracking software for poultry\" and \"order booking app\" are one system. Feed-price control, order booking, outstanding and GPS field tracking make OZZO a practical poultry-feed distribution and sales-tracking system.",
      ],
      keywords: ["SFA for poultry feed", "poultry feed dealer management software", "sales force automation software for poultry", "salesman tracking software for poultry feed", "order booking app for poultry feed", "contract farming field app", "poultry integrator field sales software"],
    },
    tagline: "Feed is most of a poultry farmer's cost, its price never sits still, and your reps work thousands of scattered farms on credit. OZZO runs exactly that.",
    intro:
      "Whether you run captive feed for contract farms or sell through a dealer network to independent broiler and layer farmers, the poultry business turns on feed price, farm coverage and credit. OZZO gives poultry feed companies and integrators visibility and control across all three.",
    stats: [
      { value: "60–70%", label: "of a poultry farmer's cost is feed — so feed price and timing decide the relationship", note: "Industry range" },
      { value: "Volatile", label: "feed prices swing and compress margins before bird prices adjust" },
      { value: "1000s", label: "of contract and independent farms an integrator's field team must cover" },
    ],
    painPoints: [
      { title: "Feed price moves faster than you can update the field", body: "Maize and soya swing sharply; a stale rate card or a slow price update quietly erodes margin on every tonne of feed booked." },
      { title: "Thousands of scattered farms to actually cover", body: "Contract and independent broiler and layer farms are spread across districts. Knowing which farms your reps really reached, and what they need, is genuinely hard." },
      { title: "Credit runs down to the farmer", body: "Feed moves on credit through dealers to farmers who pay after the flock sells; outstanding across the chain is the number that decides your working capital." },
      { title: "Offtake and secondary movement are invisible", body: "Primary billing to the dealer says nothing about which farms are actually lifting feed and growing — an early warning you don't get." },
      { title: "Advisory and relationship drive the sale", body: "Placement, feed conversion and support keep a farmer loyal; without a record of what your reps did on each farm, the relationship lives in someone's head." },
    ],
    solutions: [
      { pain: "Push feed prices the day the market moves", how: "Update the price-list engine centrally and every rep quotes the current feed price instantly — no stale rate cards when maize and soya swing — with schemes to hold volume." },
      { pain: "Cover every farm, and prove it", how: "Geo-tagged farm visits, beat routes and selfie-GPS attendance turn 'covered' into a fact across thousands of scattered contract and independent farms." },
      { pain: "Control credit down to the farmer", how: "Trade levels (distributor / dealer / farm), self-calculating outstanding, credit limits before the next order, and an Ageing report — so exposure is managed, not guessed." },
      { pain: "See offtake and secondary", how: "Automatic primary/secondary tagging shows which farms are actually lifting feed, so you spot a slowing farm early." },
      { pain: "Keep the farm relationship on the record", how: "Every visit, order and note lives on the farm's customer record — placement, feed, support and history in one place, not in a rep's head." },
    ],
    workflow: [
      { title: "Route the farm beat", body: "Plan each rep's beat across contract and independent farms; the route runs farm by farm." },
      { title: "Visit & take the feed order", body: "Geo-stamped farm visit; feed order in bags or tonnes captured offline, at the current price." },
      { title: "Collect & cap credit", body: "Record collections against outstanding; credit limits gate the next dispatch." },
      { title: "Watch offtake & recover", body: "Primary/secondary and Ageing show which farms are lifting and who's overdue." },
    ],
    whyNotOthers: [
      { label: "Not a farm / flock-management system", body: "OZZO isn't an FCR, placement or biosecurity tool — it's the field-sales and distribution layer: coverage, feed orders, price, credit and secondary movement, around whatever farm-management you already run." },
      { label: "Not just a tracker", body: "A tracker shows a rep reached a farm — not feed-price updates, multi-level credit, schemes or offtake visibility across thousands of farms." },
      { label: "Not an enterprise CPG SFA", body: "Poultry feed isn't packaged-goods merchandising — it's price-sensitive, credit-heavy, farm-by-farm distribution, priced for the business, not national CPG budgets." },
    ],
    outcomes: [
      { title: "Current feed prices in every rep's hand", body: "When maize or soya moves, the new price is live in the field the same day — margin stops leaking." },
      { title: "Every farm genuinely covered", body: "Geo-stamped visits make coverage of scattered farms a fact, not a claim." },
      { title: "Credit exposure managed to the farmer", body: "Outstanding self-calculates and credit limits gate the next order down the chain." },
      { title: "Slowing farms surface early", body: "Offtake and secondary visibility flag a farm that's lifting less, in time to act." },
    ],
    cockpit: {
      header: "Broiler belt · Namakkal",
      headerBadge: "Live feed price",
      sectionTitle: "One field app for the farm belt",
      sectionBody: "Feed prices, farm-by-farm orders, credit down to the farmer and offtake — captured across thousands of scattered farms, online or off.",
      rows: [
        { icon: "Bird", title: "Broiler Starter · 50 kg", subtitle: "Contract farm · 80 bags", value: "₹1,20,000" },
        { icon: "TrendingUp", title: "Feed price revised", subtitle: "Maize ▲ · new list pushed", badge: "Reps quote today's feed price", badgeTone: "primary" },
        { icon: "UserRound", title: "SKM Farms · Contract farm", subtitle: "Offtake steady · secondary tracked", check: true, tone: "success" },
      ],
      meter: { label: "Dealer + farm dues", value: "₹4.6L", sub: "/ ₹5L limit", fillPct: 88 },
      chips: [
        { label: "Offtake dip", sub: "1 farm lifting less", tone: "gradient" },
        { label: "Secondary ✓ to farm", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Price-list engine for feed prices", "Trade levels (distributor / dealer / farm)", "Offline order capture (bags / tonnes)", "Outstanding, credit limits & Ageing", "Geo-tagged farm visits & beat routes", "Primary/secondary & Daily Sales Report"],
    honestNote:
      "OZZO runs your poultry field sales, farm coverage and credit — it is not a flock/farm-management, FCR or biosecurity system. It works alongside whatever production tools you use; OZZO owns the sales, distribution and outstanding side.",
    faqs: [
      { q: "Is OZZO built for poultry feed companies and integrators?", a: "Yes. OZZO handles feed-price changes pushed to the field, coverage of thousands of contract and independent farms, credit control down to the farmer, and offtake/secondary visibility — the field-sales and distribution side of a poultry business." },
      { q: "How does OZZO handle feed-price volatility?", a: "Update the price-list engine centrally and every rep quotes the current feed price instantly, so maize and soya swings don't leave stale rate cards in the field. Schemes help hold volume when prices move." },
      { q: "Does OZZO manage the contract-farming chain and credit?", a: "Yes — classify distributors, dealers and farms as trade levels, with self-calculating outstanding, credit limits before the next order, and an Ageing report across the chain." },
    ],
  },

  // ─────────────────────────────────────────── AQUACULTURE & FISH FEED
  {
    slug: "aquaculture-fish-feed",
    sector: "Agriculture",
    name: "Aquaculture & Fish Feed",
    icon: "Fish",
    metaTitle: "Field sales software for aquaculture & fish feed companies | OZZO",
    metaDescription:
      "OZZO helps shrimp and fish feed companies run the field — reach dispersed pond farmers through the distributor–sub-dealer chain, log technical advisory, push prices, and control 30–60 day credit and secondary movement.",
    keywords: ["aquaculture feed software", "shrimp feed distribution India", "fish feed dealer management", "aqua feed field sales", "pond farmer field app"],
    image: "/industries/aquaculture-fish-feed-hero.jpg",
    imageAlt: "Coastal aquaculture farm with floating rafts",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for aquaculture & fish feed",
      body: [
        "OZZO is a sales force automation (SFA) software for shrimp and fish feed companies that combines order booking, distributor–sub-dealer management, 30–60 day credit and outstanding, and pond-visit advisory logging in one field app. Reaching dispersed pond farmers through the sub-dealer chain, OZZO books orders offline, records the technical advice given on each pond, and self-calculates outstanding with credit limits across the chain.",
        "It is also field-force tracking (WFA) and salesman location tracking software for aqua field teams: GPS attendance, live location and geo-tagged pond visits. So \"SFA for aquaculture feed\", \"fish feed distributor management\" and \"salesman tracking app\" are one system. Order booking, distributor management, outstanding and collection, and GPS field tracking make OZZO a practical aquafeed distribution and sales-tracking system.",
      ],
      keywords: ["SFA for aquaculture feed", "shrimp feed distributor management software", "sales force automation software for fish feed", "salesman tracking software for aqua feed", "order booking app for aquaculture", "pond farmer field app", "aqua feed field sales software"],
    },
    tagline: "Aqua feed reaches dispersed pond farmers through a long, credit-heavy chain, against cheaper farm-made feed, and rides on technical advice. OZZO runs the field side.",
    intro:
      "Whether you sell shrimp or fish feed direct to corporate farms or through distributors and sub-dealers to thousands of independent pond farmers, the aqua business turns on credit, coverage and advisory. OZZO gives aquafeed companies visibility and control across the chain.",
    stats: [
      { value: "30–60 days", label: "credit terms feed makers extend, stretching further down the sub-dealer chain", note: "Industry range" },
      { value: "65–70%", label: "of organized feed flows through distributors and sub-dealers to independent farmers", note: "Industry data" },
      { value: "Advisory-led", label: "feeding and disease advice keep a pond farmer loyal — not just price" },
    ],
    painPoints: [
      { title: "Dispersed pond farmers, a long sub-dealer chain", body: "Independent shrimp and fish farmers are scattered across coastal and inland belts, reached through distributors and sub-dealers — coverage and reliable secondary data are hard." },
      { title: "Credit runs 30–60 days and further", body: "Feed moves on extended credit down to farmers who pay at harvest; outstanding across the chain is the working-capital risk." },
      { title: "Cheaper farm-made feed competes", body: "Rice-bran and mustard-cake home feeds undercut commercial feed by 30–40%, so your reps sell on results and advice, not just availability." },
      { title: "Advisory and timing drive the sale", body: "The right feed at the right stage, disease guidance and stocking advice keep a farmer buying — but only if what your reps did on each pond is recorded." },
      { title: "Price and secondary are hard to see", body: "Raw-material swings move your price list, and primary billing hides whether feed is actually reaching the pond." },
    ],
    solutions: [
      { pain: "Reach the pond through the chain", how: "Distributor and sub-dealer trade levels with geo-tagged farm visits, so the dispersed pond-farmer base actually gets covered and secondary movement is visible." },
      { pain: "Control 30–60 day credit", how: "Self-calculating outstanding at each level, credit limits before the next order, and an Ageing report — so extended credit down the chain is managed, not guessed." },
      { pain: "Sell on advice, on the record", how: "Log each pond visit, the advice given and the stage/feed — so the advisory relationship that beats cheap farm-made feed lives on the farm's record." },
      { pain: "Keep prices current", how: "Update the price-list engine centrally when raw materials swing, and every rep quotes the current price — with schemes to hold volume." },
      { pain: "See real movement to the pond", how: "Automatic primary/secondary tagging shows whether feed is reaching farmers, not just billed to the distributor." },
    ],
    workflow: [
      { title: "Route the pond beat", body: "Plan the beat across distributors, sub-dealers and farms; the route runs stop by stop." },
      { title: "Visit, advise & order", body: "Geo-stamped pond visit, feeding/stage advice logged, feed order captured offline at the current price." },
      { title: "Collect & cap credit", body: "Record collections against outstanding; credit limits gate the next dispatch." },
      { title: "Watch movement & recover", body: "Primary/secondary and Ageing show what's reaching ponds and who's overdue." },
    ],
    whyNotOthers: [
      { label: "Not a pond / water-quality system", body: "OZZO isn't a water-quality, disease-diagnostic or pond-management tool — it's the field-sales and distribution layer: coverage, advisory logging, orders, price, credit and secondary movement." },
      { label: "Not just a tracker", body: "A tracker can't manage the distributor–sub-dealer chain, 30–60 day credit, price updates or secondary visibility to dispersed ponds." },
      { label: "Not an enterprise CPG SFA", body: "Aqua feed is credit-heavy, advisory-led, farm-by-farm distribution — not packaged-goods merchandising, and priced for the business, not national CPG budgets." },
    ],
    outcomes: [
      { title: "Dispersed ponds actually covered", body: "Geo-stamped visits make coverage of scattered farms a fact across the sub-dealer chain." },
      { title: "Extended credit stays bounded", body: "Outstanding self-calculates and credit limits gate the next order down the chain." },
      { title: "The advisory edge is captured", body: "Each pond's advice and history are on the record — the relationship that beats cheap farm-made feed." },
      { title: "You see feed reach the pond", body: "Secondary visibility shows real movement, not just distributor billing." },
    ],
    cockpit: {
      header: "Shrimp belt · Nellore",
      headerBadge: "Live price list",
      sectionTitle: "One field app for the pond belt",
      sectionBody: "Distributor-to-pond coverage, advisory on the record, current prices and 30–60 day credit — captured in the field, online or off.",
      rows: [
        { icon: "Fish", title: "Shrimp Grower · 25 kg", subtitle: "Sub-dealer · 60 bags", value: "₹90,000" },
        { icon: "Droplets", title: "Pond visit · advice logged", subtitle: "Stage feed · disease check", check: true, tone: "primary" },
        { icon: "UserRound", title: "Sagar Aqua · Sub-dealer", subtitle: "Secondary tracked · 45-day credit", check: true, tone: "success" },
      ],
      meter: { label: "Chain outstanding", value: "₹3.8L", sub: "/ ₹4.5L limit", fillPct: 84 },
      chips: [
        { label: "Advisory", sub: "logged on the pond", tone: "gradient" },
        { label: "Secondary ✓ to pond", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Trade levels (distributor / sub-dealer / farm)", "Geo-tagged pond visits & advisory notes", "Offline order capture (bags)", "Price-list engine & schemes", "Outstanding, credit limits & Ageing", "Primary/secondary & Daily Sales Report"],
    honestNote:
      "OZZO runs your aqua field sales, coverage, advisory logging and credit — it is not a water-quality, disease-diagnostic or pond-management system. It owns the sales, distribution and outstanding side alongside your technical tools.",
    faqs: [
      { q: "Is OZZO built for shrimp and fish feed companies?", a: "Yes. OZZO handles reaching dispersed pond farmers through the distributor–sub-dealer chain, logging technical advisory, pushing price changes, and controlling 30–60 day credit and secondary movement — the field-sales side of an aquafeed business." },
      { q: "Can OZZO capture the advisory a rep gives on each pond?", a: "Yes. Each geo-stamped pond visit records the advice, stage and feed on the farm's customer record — so the advisory relationship that beats cheap farm-made feed is captured, not lost." },
      { q: "How does OZZO handle the long aqua credit chain?", a: "Trade levels for distributor, sub-dealer and farm, with self-calculating outstanding, credit limits before the next order, and an Ageing report across the chain." },
    ],
  },

  // ─────────────────────────────────────────── AGRICULTURE EQUIPMENT
  {
    slug: "agriculture-equipment",
    sector: "Agriculture",
    name: "Agriculture Equipment",
    icon: "Tractor",
    metaTitle: "Field sales software for agriculture equipment companies | OZZO",
    metaDescription:
      "OZZO helps farm-equipment and implement companies run the field — dealer coverage, a CRM pipeline for high-value demo-and-finance sales, spare-parts orders, after-sales service visits, and dealer outstanding.",
    keywords: ["farm equipment dealer software", "agriculture implement field sales", "tractor dealer management India", "farm machinery CRM", "after-sales service field app agriculture"],
    image: "/industries/agriculture-equipment-hero.jpg",
    imageAlt: "Tractor with an implement working a field",
    seo: {
      heading: "Sales force automation (SFA) & field service tracking for agriculture equipment",
      body: [
        "OZZO is a sales force automation (SFA) and field-service software for farm-equipment and implement companies that combines dealer coverage, spare-parts order booking, after-sales service visits and dealer outstanding in one app. Across a wide dealer network, reps book spare-parts orders at the counter offline, log after-sales service visits against the machine and track them to closure, while outstanding self-calculates with credit limits.",
        "It is also field-force tracking (WFA) and salesman location tracking software for equipment field teams: GPS attendance, live location and geo-tagged dealer and service visits. So \"SFA for farm equipment\", \"dealer management software\" and \"field service app\" are one system. Spare-parts order booking, after-sales service tracking, outstanding and GPS field tracking make OZZO a practical agriculture-equipment sales, service and tracking system.",
      ],
      keywords: ["SFA for farm equipment", "agriculture equipment dealer management software", "sales force automation software for tractors", "field service app for farm equipment", "salesman tracking software for equipment", "spare parts order booking app", "after sales service tracking agriculture"],
    },
    tagline: "Equipment is a high-value, demo-and-finance sale, bought seasonally, and won or lost on after-sales service. OZZO runs the whole field motion.",
    intro:
      "Farm equipment isn't a fast-moving consumable — it's a considered, financed purchase through a dealer network, with after-sales service that decides the next sale. OZZO gives equipment and implement companies a CRM pipeline, dealer coverage, spare-parts orders and service visibility in one system.",
    stats: [
      { value: "Seasonal", label: "demand concentrated around crop cycles and subsidy timing" },
      { value: "Financed", label: "most purchases need credit — and rural financing is scarce and costly", note: "Local-lender rates up to ~48%" },
      { value: "After-sales", label: "breakdowns in remote villages decide whether the farmer buys again" },
    ],
    painPoints: [
      { title: "A long, considered, financed sale", body: "Equipment is high-value and demo-driven; leads take weeks, hinge on financing, and need disciplined follow-up — a beat-and-order app alone can't run it." },
      { title: "Seasonal, subsidy-timed demand", body: "Buying concentrates around crop cycles and subsidy disbursement; miss the window and you miss the sale." },
      { title: "Financing is the bottleneck", body: "Rural credit is scarce and costly, so a deal stalls without follow-up on finance and paperwork." },
      { title: "After-sales service wins the next sale", body: "Breakdowns happen in remote villages far from the dealer; slow service and spare-parts delays lose the farmer's next purchase." },
      { title: "Dealer coverage and dues", body: "A wide dealer network needs real coverage, spare-parts order capture and outstanding control — not guesswork." },
    ],
    solutions: [
      { pain: "Run the demo-and-finance pipeline", how: "A CRM pipeline for high-value leads — stages, demo scheduling, branded quotations, financing follow-up and next-step reminders — so no considered buyer goes cold." },
      { pain: "Time the seasonal window", how: "Beat routes, tasks and the pipeline keep reps working the right dealers and prospects when crop cycles and subsidies drive demand." },
      { pain: "Capture spare-parts orders in the field", how: "A multi-unit catalogue and offline order capture for spare parts and consumables, at current prices, from the dealer counter." },
      { pain: "Run after-sales service as field visits", how: "Log service visits and tasks against the customer and machine, so breakdowns in remote villages are tracked to closure — the thing that wins the next sale." },
      { pain: "Cover dealers and control dues", how: "Geo-tagged dealer visits, self-calculating outstanding and credit limits across the dealer network, with an Ageing report." },
    ],
    workflow: [
      { title: "Work the pipeline & demos", body: "Move high-value leads through stages, schedule demos, send branded quotations, follow up on finance." },
      { title: "Cover the dealer beat", body: "Geo-stamped dealer visits; spare-parts orders captured offline at current prices." },
      { title: "Service the machine", body: "Log after-sales service visits and tasks against the machine, tracked to closure." },
      { title: "Collect & recover", body: "Record collections against outstanding; credit limits and Ageing keep dealer dues in check." },
    ],
    whyNotOthers: [
      { label: "Not just a beat-and-order app", body: "A pure order app can't run a weeks-long, demo-and-finance pipeline for a high-value machine — you'd lose the considered buyer. OZZO carries the CRM pipeline and the field beat together." },
      { label: "Not a full service / warranty ERP", body: "OZZO isn't a workshop, warranty-claim or parts-inventory ERP — it manages leads, dealer visits, spare-parts orders, service visits and outstanding, alongside whatever back-end you run." },
      { label: "Not an enterprise CPG SFA", body: "Equipment is a considered, financed, service-led sale — nothing like fast-moving packaged goods — and OZZO is priced for the business, not national CPG budgets." },
    ],
    outcomes: [
      { title: "No considered buyer goes cold", body: "Every high-value lead has a stage, a quotation and a next step — demo and financing follow-up on the record." },
      { title: "You hit the seasonal window", body: "Reps work the right dealers and prospects when crop cycles and subsidies drive demand." },
      { title: "Service closes the loop", body: "After-sales visits are tracked to closure, so a remote breakdown wins the next sale instead of losing it." },
      { title: "Dealer dues stay in check", body: "Outstanding self-calculates and Ageing flags overdue dealers across the network." },
    ],
    cockpit: {
      header: "Rabi season · Rajkot",
      headerBadge: "Pipeline",
      sectionTitle: "One field app for the whole sale",
      sectionBody: "A demo-and-finance pipeline, dealer coverage, spare-parts orders and after-sales service — the full high-value equipment motion on one screen.",
      rows: [
        { icon: "Tractor", title: "45 HP Tractor · demo", subtitle: "Stage: Finance · follow-up Fri", badge: "Quotation sent · subsidy form pending", badgeTone: "primary" },
        { icon: "Wrench", title: "Service visit · rotavator", subtitle: "Breakdown · tracked to closure", check: true, tone: "success" },
        { icon: "Package", title: "Spare parts order", subtitle: "Dealer counter · captured offline", value: "₹18,500" },
      ],
      meter: { label: "Dealer outstanding", value: "₹2.7L", sub: "/ ₹3.5L limit", fillPct: 77 },
      chips: [
        { label: "Demo booked", sub: "Sat · 2 prospects", tone: "gradient" },
        { label: "Service ✓ closed", sub: "next sale protected", tone: "glass" },
      ],
    },
    modules: ["CRM pipeline (demos, quotations, finance follow-up)", "Geo-tagged dealer visits & beat routes", "Spare-parts order capture (offline)", "After-sales service visits & tasks", "Outstanding, credit limits & Ageing", "Branded PDF quotations"],
    honestNote:
      "OZZO runs the field motion — pipeline, dealer coverage, spare-parts orders, service visits and outstanding. It is not a workshop/warranty-claim or parts-inventory ERP; it works alongside your back-end systems.",
    faqs: [
      { q: "Is OZZO built for farm-equipment and implement companies?", a: "Yes. OZZO runs the whole high-value field motion — a CRM pipeline for demo-and-finance sales, dealer coverage, spare-parts orders, after-sales service visits, and dealer outstanding — in one system." },
      { q: "Can OZZO manage after-sales service, not just sales?", a: "Yes. Log after-sales service visits and tasks against the customer and machine and track them to closure — the service that wins the farmer's next purchase — alongside the sales pipeline." },
      { q: "Does OZZO handle the long, financed equipment sale?", a: "Yes. A CRM pipeline moves high-value leads through stages with demo scheduling, branded quotations, financing follow-up and next-step reminders, so a considered buyer doesn't go cold." },
    ],
  },

  // ─────────────────────────────────────────── HDPE PIPES
  {
    slug: "hdpe-pipe-companies",
    sector: "Pipes & Fittings",
    name: "HDPE Pipe Companies",
    icon: "Droplets",
    metaTitle: "Field sales software for HDPE pipe companies | OZZO",
    metaDescription:
      "OZZO is built for HDPE pipe brands: government water & irrigation project pipelines (Jal Jeevan, AMRUT), an agri dealer network, resin-linked price changes, fusion-jointing support, and dealer credit — one system.",
    keywords: ["HDPE pipe company software", "HDPE pipe distribution India", "Jal Jeevan Mission dealer", "irrigation pipe field sales", "HDPE dealer management", "PE100 pipe project sales"],
    image: "/industries/hdpe-pipe-companies-hero.jpg",
    imageAlt: "Black HDPE drip-irrigation lines running through a field",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for HDPE pipe companies",
      body: [
        "OZZO is a sales force automation (SFA) software for HDPE pipe companies that combines dealer order booking, resin-linked price-list updates, site and fusion support visits, and dealer outstanding in one field app. Alongside government water and irrigation projects, the irrigation dealer beat runs on OZZO — reps book orders offline at the current PE price, and outstanding self-calculates with credit limits.",
        "It is also field-force tracking (WFA) and salesman location tracking software for HDPE field teams: GPS attendance, live location and geo-tagged dealer and site visits. So \"SFA for HDPE pipes\", \"irrigation pipe dealer management\" and \"salesman tracking app\" are one system. Order booking, price control, site-visit tracking and GPS field tracking make OZZO a practical HDPE distribution and sales-tracking system.",
      ],
      keywords: ["SFA for HDPE pipes", "HDPE pipe dealer management software", "sales force automation software for HDPE", "salesman tracking software for irrigation pipes", "order booking app for HDPE dealers", "irrigation pipe field sales software", "field sales app for pipe companies"],
    },
    tagline: "HDPE lives on government water projects, irrigation dealers and a resin price that moves — with fusion-jointing on every site. OZZO runs that whole motion.",
    intro:
      "HDPE isn't sold like plumbing pipe. It goes into Jal Jeevan and AMRUT water schemes, canal irrigation, gas and telecom — through government tenders and an agri dealer network, jointed by fusion welding on site. OZZO gives HDPE pipe companies a project pipeline, dealer coverage and price control in one system.",
    stats: [
      { value: "₹3.6 lakh cr", label: "Jal Jeevan Mission masterplan driving HDPE water-pipe demand", note: "Programme scale" },
      { value: "Coils & fusion", label: "long lengths jointed on site by butt / electrofusion welding" },
      { value: "Crude-linked", label: "PE resin prices move, forcing price-list revisions" },
    ],
    painPoints: [
      { title: "Government projects are the market — and they're tender-driven", body: "JJM, AMRUT and canal-irrigation orders come through long-cycle tenders and approvals; a beat-and-order app can't run that pipeline of specs, approvals and follow-ups." },
      { title: "Resin-linked prices move under long project timelines", body: "PE resin tracks crude; a price that shifts between quotation and supply, across a long project, quietly decides the margin." },
      { title: "An agri dealer network alongside the projects", body: "Beyond projects, irrigation dealers serve farmers and contractors — two very different sales motions to run at once." },
      { title: "Fusion jointing means technical, site-level support", body: "HDPE is welded on site; reps carry technical support and machine/contractor coordination, not just an order pad." },
      { title: "Credit and secondary across a spread-out network", body: "Orders move on credit to dealers and contractors across districts; outstanding and real movement are hard to see." },
    ],
    solutions: [
      { pain: "Run the project / tender pipeline", how: "A CRM pipeline for JJM/AMRUT and irrigation projects — stages, approvals, branded quotations and follow-ups — so long-cycle tender business doesn't slip." },
      { pain: "Keep quotes current as resin moves", how: "Update the price-list engine centrally and reps quote the current PE price — so resin swings between quotation and supply don't erode margin." },
      { pain: "Run projects and the agri dealer beat together", how: "The project pipeline and the irrigation-dealer field beat live on one login and one customer record." },
      { pain: "Coordinate site & technical support", how: "Log site visits, fusion/technical support and contractor coordination against the project and customer, so nothing lives in a rep's head." },
      { pain: "Control credit & see movement", how: "Trade levels, self-calculating outstanding, credit limits and primary/secondary tagging across the spread-out network, with an Ageing report." },
    ],
    workflow: [
      { title: "Work the project pipeline", body: "Move JJM/AMRUT and irrigation tenders through stages, send branded quotations, follow up on approvals." },
      { title: "Cover the irrigation dealer beat", body: "Geo-stamped dealer and contractor visits; orders at current PE prices, offline if needed." },
      { title: "Support the site", body: "Log fusion/technical support and contractor coordination against the project." },
      { title: "Collect & recover", body: "Collections against outstanding; credit limits and Ageing keep dues in check." },
    ],
    whyNotOthers: [
      { label: "Not just a beat-and-order app", body: "HDPE's real revenue is long-cycle government and irrigation projects — a pure order app can't run that tender pipeline of specs, approvals and follow-ups." },
      { label: "Not an enterprise FMCG SFA", body: "HDPE is project- and resin-driven infrastructure, not fast-moving packaged goods — and OZZO is priced for the business, not national CPG budgets." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM runs the tender pipeline but has no irrigation-dealer field beat, multi-unit orders, trade levels or outstanding — you'd stitch tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "Tender business stops slipping", body: "Every JJM/AMRUT and irrigation project has a stage, a quotation and a next step." },
      { title: "Current PE prices in every quote", body: "Resin moves and the price list is live in the field the same day — margin holds across long projects." },
      { title: "Projects and dealers in one view", body: "The tender pipeline and the irrigation-dealer beat share one record." },
      { title: "Credit and movement under control", body: "Outstanding self-calculates and secondary shows real movement across the network." },
    ],
    cockpit: {
      header: "JJM project · Krishna dist.",
      headerBadge: "Pipeline",
      sectionTitle: "One field app for projects and the beat",
      sectionBody: "A JJM/irrigation project pipeline, current PE prices, site/fusion support and the dealer beat — on one screen, online or off.",
      rows: [
        { icon: "Droplets", title: "PE100 · 110 mm coil", subtitle: "JJM water supply · 1,200 m", value: "₹3.4L" },
        { icon: "FileText", title: "Tender quotation", subtitle: "Stage: Approval · follow-up Mon", badge: "PE price locked to today's rate", badgeTone: "primary" },
        { icon: "Wrench", title: "Fusion support · site", subtitle: "Contractor trained · joint check", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹3.1L", sub: "/ ₹4L limit", fillPct: 78 },
      chips: [
        { label: "Irrigation beat", sub: "6 dealers covered", tone: "gradient" },
        { label: "Secondary ✓ to contractor", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["CRM pipeline for water/irrigation projects", "Price-list engine (PE resin)", "Geo-tagged dealer & site visits", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Branded PDF quotations"],
    honestNote:
      "OZZO runs your HDPE field sales — project pipeline, dealer coverage, pricing, site support and outstanding. It is not a fusion-machine, hydraulic-design or e-tender portal system; it works alongside those, owning the sales and distribution side.",
    faqs: [
      { q: "Is OZZO built for HDPE pipe companies?", a: "Yes. OZZO runs the HDPE motion — a project pipeline for Jal Jeevan/AMRUT and irrigation tenders, an agri dealer beat, resin-linked price control, site/fusion support logging, and dealer credit — in one system." },
      { q: "Can OZZO handle government water-project sales?", a: "Yes. A CRM pipeline moves tender and project business through stages with approvals, branded quotations and follow-ups, alongside the irrigation-dealer field beat on one record." },
      { q: "How does OZZO deal with PE resin price changes?", a: "Update the price-list engine centrally and every rep quotes the current PE price, so resin swings between quotation and supply don't erode margin across long projects." },
    ],
  },

  // ─────────────────────────────────────────── STAINLESS STEEL PIPES
  {
    slug: "stainless-steel-pipe-companies",
    sector: "Pipes & Fittings",
    name: "Stainless Steel Pipe Companies",
    icon: "Factory",
    metaTitle: "Field sales software for stainless steel pipe companies | OZZO",
    metaDescription:
      "OZZO is built for SS pipe & tube brands: grade/spec technical selling (304/316, seamless/welded, schedules), industrial project quotations, fabricator & stockist dealers, mill-certificate references, and dealer credit — one system.",
    keywords: ["stainless steel pipe software", "SS pipe distribution India", "304 316 pipe field sales", "fabricator dealer management", "industrial pipe project sales", "SS tube stockist software"],
    image: "/industries/stainless-steel-pipe-companies-hero.jpg",
    imageAlt: "Stacked stainless steel pipes and tubes",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for stainless steel pipe companies",
      body: [
        "OZZO is a sales force automation (SFA) software for stainless steel pipe and tube companies that combines spec-based order booking (grade and schedule), stockist and fabricator coverage, and outstanding in one field app. Reps book orders to the exact grade and schedule at the current price, capture grade and MTC references against the order, and outstanding self-calculates with credit limits across the channel.",
        "It is also field-force tracking (WFA) and salesman location tracking software for SS pipe field teams: GPS attendance, live location and geo-tagged fabricator, OEM and stockist visits. So \"SFA for stainless steel pipes\", \"SS pipe stockist management\" and \"salesman tracking software\" are one system. Spec-based order booking, channel coverage, outstanding and GPS field tracking make OZZO a practical SS-pipe distribution and sales-tracking system.",
      ],
      keywords: ["SFA for stainless steel pipes", "SS pipe distributor management software", "sales force automation software for steel pipes", "salesman tracking software for SS pipes", "order booking app for steel pipe stockists", "industrial pipe field sales software", "stockist management software steel"],
    },
    tagline: "SS pipe is a grade-and-spec technical sale into industry — 304 vs 316, seamless vs welded, schedules and certificates. OZZO runs that B2B motion.",
    intro:
      "Stainless steel pipe isn't a counter sale — it's specified by grade, schedule and standard into food, pharma, chemical and industrial projects, quoted against drawings, and served from stock to fabricators and OEMs. OZZO gives SS pipe companies a technical project pipeline, stockist/dealer coverage and outstanding in one system.",
    stats: [
      { value: "304 / 316", label: "grade decides the sale — spec, corrosion class and certificate matter" },
      { value: "Ex-stock", label: "seamless / welded / ERW across NB sizes and schedules, quoted to spec" },
      { value: "Project-led", label: "food, pharma, chemical and industrial projects drive demand" },
    ],
    painPoints: [
      { title: "Every sale is grade- and spec-specific", body: "304 vs 316, seamless vs welded, NB size and schedule, standard (ASTM/ASME) — getting the exact spec and matching stock right is the sale; errors are costly." },
      { title: "Quotations against drawings and BOQs", body: "Industrial and project buyers quote against drawings and bills of quantity, with long approval cycles — not a beat-and-order motion." },
      { title: "Fabricators, OEMs and stockist dealers", body: "The channel is fabricators, OEMs and stockists, each buying differently — coverage and relationship depth matter." },
      { title: "Certificates and quality are part of the deal", body: "Mill test certificates and standards are expected; tracking what spec and certs went to whom is real work." },
      { title: "Credit and outstanding on high-value orders", body: "Orders are large and on credit; outstanding and recovery are a serious working-capital question." },
    ],
    solutions: [
      { pain: "Sell to spec, accurately", how: "A full catalogue by grade, construction, NB size and schedule with customer-specific price lists — so reps quote the exact spec and stock at the current price." },
      { pain: "Run the project / quotation pipeline", how: "A CRM pipeline for industrial and project enquiries — quotations against drawings, approval stages and follow-ups — so high-value deals don't slip." },
      { pain: "Cover fabricators, OEMs and stockists", how: "Trade levels and geo-tagged visits keep the fabricator/OEM/stockist channel covered, with history on one record." },
      { pain: "Keep spec and certs on the record", how: "Custom fields capture grade, schedule, standard and certificate references against each order and customer — not in a rep's head." },
      { pain: "Control credit on big orders", how: "Self-calculating outstanding, credit limits before the next order and an Ageing report across the channel." },
    ],
    workflow: [
      { title: "Work the project pipeline", body: "Move industrial/project enquiries through stages, quote against drawings, follow up on approvals." },
      { title: "Cover the channel", body: "Geo-stamped fabricator, OEM and stockist visits; orders to exact spec at current prices." },
      { title: "Capture spec & certs", body: "Grade, schedule, standard and certificate references recorded against the order." },
      { title: "Collect & recover", body: "Collections against outstanding; credit limits and Ageing keep high-value dues in check." },
    ],
    whyNotOthers: [
      { label: "Not a beat-and-order app", body: "SS is a technical, spec-driven, project-quoted B2B sale — a pure order app can't run drawings-based quotations, approval cycles and grade/spec accuracy." },
      { label: "Not an FMCG SFA", body: "Industrial SS pipe is nothing like fast-moving packaged goods — no merchandising or shelf audits; it's spec, certs and projects, priced for the business." },
      { label: "Not a bare CRM", body: "A CRM runs the pipeline but has no spec catalogue, stockist field beat, multi-unit orders or outstanding — you'd stitch tools. OZZO is one." },
    ],
    outcomes: [
      { title: "Quotes go out to exact spec", body: "Grade, schedule and standard captured right — fewer costly spec errors, faster quotes." },
      { title: "High-value deals don't slip", body: "Every industrial/project enquiry has a stage, a quotation and a next step." },
      { title: "The channel stays covered", body: "Fabricators, OEMs and stockists worked and on one record." },
      { title: "Credit on big orders controlled", body: "Outstanding self-calculates and Ageing flags overdue accounts." },
    ],
    cockpit: {
      header: "Project desk · Ahmedabad",
      headerBadge: "Quote to spec",
      sectionTitle: "One field app for spec-driven sales",
      sectionBody: "Grade-and-schedule quoting, a drawings-based project pipeline, fabricator/stockist coverage and outstanding — on one screen.",
      rows: [
        { icon: "Layers", title: "SS 316L · 2″ SCH-10", subtitle: "Seamless · pharma project", value: "₹2.6L" },
        { icon: "FileText", title: "Quotation vs drawing", subtitle: "Stage: Approval · MTC attached", badge: "Grade & schedule locked to spec", badgeTone: "primary" },
        { icon: "UserRound", title: "Shah Fabricators · OEM", subtitle: "304 line · secondary tracked", check: true, tone: "success" },
      ],
      meter: { label: "Account outstanding", value: "₹5.2L", sub: "/ ₹6L limit", fillPct: 87 },
      chips: [
        { label: "Project deal", sub: "food-plant · quotation sent", tone: "gradient" },
        { label: "Spec + MTC ✓", sub: "on the order record", tone: "glass" },
      ],
    },
    modules: ["Spec catalogue (grade / schedule / standard)", "CRM pipeline for industrial projects", "Customer-specific price lists", "Custom fields (grade, MTC, standard)", "Outstanding, credit limits & Ageing", "Branded PDF quotations"],
    honestNote:
      "OZZO runs your SS field sales — spec quoting, project pipeline, channel coverage and outstanding. It is not a metallurgical, mill-test-lab or inventory-ERP system; it records spec and certificate references and works alongside your back-end.",
    faqs: [
      { q: "Is OZZO built for stainless steel pipe and tube companies?", a: "Yes. OZZO runs the SS motion — grade/spec quoting (304/316, seamless/welded, schedules), a drawings-based project pipeline, fabricator/OEM/stockist coverage, certificate references and dealer credit — in one system." },
      { q: "Can OZZO capture grade, schedule and mill certificates?", a: "Yes. Custom fields record grade, schedule, standard and mill-test-certificate references against each order and customer, so the spec history is on the record." },
      { q: "Does OZZO handle project quotations against drawings?", a: "Yes. A CRM pipeline moves industrial and project enquiries through stages with branded quotations, spec capture, approvals and follow-ups." },
    ],
  },

  // ─────────────────────────────────────────── CAST IRON PIPES
  {
    slug: "cast-iron-pipe-companies",
    sector: "Pipes & Fittings",
    name: "Cast Iron Pipe Companies",
    icon: "Building2",
    metaTitle: "Field sales software for cast iron pipe companies | OZZO",
    metaDescription:
      "OZZO is built for cast iron (CI / SG iron) drainage pipe brands: getting specified in high-rise soil stacks, builder/plumber influence, municipal & project tenders, dealer coverage and outstanding — one system.",
    keywords: ["cast iron pipe software", "CI drainage pipe distribution", "SG iron pipe field sales", "soil pipe project sales India", "builder specification field app", "municipal pipe tender"],
    image: "/industries/cast-iron-pipe-companies-hero.jpg",
    imageAlt: "Heavy flanged iron drainage pipes",
    seo: {
      heading: "Sales force automation (SFA) & field tracking for cast iron pipe companies",
      body: [
        "OZZO is a sales force automation (SFA) software for cast iron (CI/SG iron) drainage pipe companies that combines dealer order booking, project and site visits, and outstanding in one field app. Alongside the specification work on high-rise and municipal projects, the dealer beat runs on OZZO — reps book orders offline, coordinate heavy supply, and outstanding self-calculates with credit limits.",
        "It is also field-force tracking (WFA) and salesman location tracking software for cast-iron field teams: GPS attendance, live location and geo-tagged dealer and site visits. So \"SFA for cast iron pipes\", \"drainage pipe dealer management\" and \"salesman tracking software\" are one system. Order booking, site-visit tracking, outstanding and GPS field tracking make OZZO a practical cast-iron distribution and sales-tracking system.",
      ],
      keywords: ["SFA for cast iron pipes", "cast iron drainage pipe dealer management", "sales force automation software for CI pipes", "salesman tracking software for drainage pipes", "order booking app for pipe dealers", "soil pipe field sales software", "field sales app for drainage pipes"],
    },
    tagline: "Cast iron is won by getting specified — in high-rise soil stacks and municipal projects — through builders, plumbers and consultants. OZZO runs that spec-led motion.",
    intro:
      "Cast iron drainage pipe is specified, not impulse-bought: chosen in premium high-rise soil stacks (quiet and fire-safe) and municipal sewerage through builders, consultants and plumbing contractors, plus tenders. OZZO gives CI/SG-iron pipe companies a specification pipeline, contractor influence, dealer coverage and outstanding in one system.",
    stats: [
      { value: "Specified", label: "won at design stage in high-rise soil stacks — quiet & fire-safe" },
      { value: "Builders + civic", label: "premium real estate and municipal projects drive demand" },
      { value: "Contractor-led", label: "plumbing contractors and consultants influence the choice" },
    ],
    painPoints: [
      { title: "The sale is won at specification, not the counter", body: "CI gets designed into a high-rise's soil stack by builders and consultants; if your reps aren't influencing the spec, you're not in the project." },
      { title: "Builders, consultants and plumbing contractors decide", body: "A web of influencers — developer, MEP consultant, plumbing contractor — drives the choice, so relationships and engagement have to be tracked." },
      { title: "Long project and municipal tender cycles", body: "High-rise projects and municipal sewerage run on long cycles with approvals and drawings — not a beat-and-order motion." },
      { title: "Heavy product, dealer coverage and logistics", body: "CI is heavy; dealer coverage, order capture and delivery coordination matter across projects." },
      { title: "Credit and outstanding on project supply", body: "Project supply is on credit; outstanding and recovery across builders and dealers are a working-capital risk." },
    ],
    solutions: [
      { pain: "Win the specification", how: "Track builders, MEP consultants and plumbing contractors as influencers, with geo-stamped engagement visits and the project they're specifying on the record." },
      { pain: "Run the project pipeline", how: "A CRM pipeline for high-rise and municipal projects — stages, approvals, branded quotations and follow-ups — so spec-led deals don't slip." },
      { pain: "Manage contractor influence", how: "Every influencer's engagement, the project and the spec live on one record — not in a rep's memory." },
      { pain: "Cover dealers & coordinate supply", how: "Geo-tagged dealer visits, offline order capture and delivery coordination across heavy project supply." },
      { pain: "Control project credit", how: "Trade levels, self-calculating outstanding, credit limits and an Ageing report across builders and dealers." },
    ],
    workflow: [
      { title: "Engage the spec", body: "Meet builders, consultants and plumbing contractors; log engagement and the project being specified." },
      { title: "Work the project pipeline", body: "Move high-rise/municipal projects through stages, send branded quotations, follow up on approvals." },
      { title: "Cover dealers & coordinate", body: "Geo-stamped dealer visits, order capture and delivery coordination for heavy supply." },
      { title: "Collect & recover", body: "Collections against outstanding; credit limits and Ageing keep project dues in check." },
    ],
    whyNotOthers: [
      { label: "Not a beat-and-order app", body: "CI is a specification-led, project sale won through builders and consultants — a pure order app can't run influencer engagement, the spec pipeline and approvals." },
      { label: "Not an FMCG SFA", body: "Cast iron drainage isn't fast-moving packaged goods — it's spec-driven project supply, priced for the business, not national CPG budgets." },
      { label: "Not a bare CRM", body: "A CRM runs the pipeline but has no dealer field beat, order capture, trade levels or outstanding — you'd stitch tools. OZZO is one." },
    ],
    outcomes: [
      { title: "You're in the spec", body: "Influencer engagement is tracked, so your brand is designed into the soil stack — not discovered too late." },
      { title: "Project deals don't slip", body: "Every high-rise and municipal project has a stage, a quotation and a next step." },
      { title: "Dealer supply stays covered", body: "Heavy project supply coordinated across dealers on one record." },
      { title: "Project credit controlled", body: "Outstanding self-calculates and Ageing flags overdue builders and dealers." },
    ],
    cockpit: {
      header: "Tower project · Mumbai",
      headerBadge: "Specification",
      sectionTitle: "One field app to win the spec",
      sectionBody: "Influencer engagement, a high-rise/municipal project pipeline, dealer coverage and outstanding — the whole spec-led motion on one screen.",
      rows: [
        { icon: "Building2", title: "CI soil stack · 100 mm", subtitle: "32-storey tower · hubless", value: "₹6.8L" },
        { icon: "UserRound", title: "MEP consultant · engaged", subtitle: "Specifying your brand · fire-safe", check: true, tone: "primary" },
        { icon: "FileText", title: "Project quotation", subtitle: "Stage: Approval · follow-up Wed", badge: "Builder + contractor aligned", badgeTone: "primary" },
      ],
      meter: { label: "Project outstanding", value: "₹4.4L", sub: "/ ₹5L limit", fillPct: 88 },
      chips: [
        { label: "Specified", sub: "brand in the soil stack", tone: "gradient" },
        { label: "Municipal tender", sub: "in the pipeline", tone: "glass" },
      ],
    },
    modules: ["Influencer engagement (builders / consultants / plumbers)", "CRM pipeline for high-rise & municipal projects", "Geo-tagged dealer & site visits", "Offline order capture", "Outstanding, credit limits & Ageing", "Branded PDF quotations"],
    honestNote:
      "OZZO runs your CI field sales — specification engagement, project pipeline, dealer coverage and outstanding. It is not a structural-design, BIM or municipal e-tender portal; it works alongside those, owning the sales and distribution side.",
    faqs: [
      { q: "Is OZZO built for cast iron drainage pipe companies?", a: "Yes. OZZO runs the CI/SG-iron motion — winning the specification in high-rise soil stacks through builders and consultants, a project and municipal pipeline, dealer coverage and outstanding — in one system." },
      { q: "How does OZZO help win the specification?", a: "Track builders, MEP consultants and plumbing contractors as influencers with geo-stamped engagement visits and the project they're specifying on the record — so your brand gets designed in, not discovered late." },
      { q: "Can OZZO run high-rise and municipal project sales?", a: "Yes. A CRM pipeline moves projects through stages with branded quotations, approvals and follow-ups, alongside the dealer field beat on one record." },
    ],
  },

  // ─────────────────────────────────────────── FOOD & BEVERAGE
  {
    slug: "food-beverage-companies",
    sector: "FMCG & Consumer Goods",
    name: "Food & Beverage Companies",
    icon: "ShoppingBag",
    metaTitle: "Field sales software for food & beverage companies | OZZO",
    metaDescription:
      "OZZO is built for food & beverage brands and distributors: high-frequency retail coverage, near-expiry & damage returns from the field, batch/expiry capture, trade schemes, secondary sales and outstanding — one affordable system.",
    keywords: ["food beverage distribution software", "FMCG food SFA India", "snacks distribution field sales", "beverage distributor management", "expiry returns field app", "food distributor secondary sales"],
    image: "/industries/food-beverage-companies-hero.jpg",
    imageAlt: "Vibrant snack aisle in a retail store",
    seo: {
      heading: "Sales force automation (SFA) & salesman tracking for food & beverage",
      body: [
        "OZZO is a sales force automation (SFA) software for food & beverage companies that combines order booking, high-frequency beat and route planning (route-to-market), near-expiry and damage returns, trade schemes and secondary-sales management in one field app. For an F&B distributor, beat planning drives the frequent coverage that keeps stock fresh — reps book orders offline, record returns at the outlet, and outstanding keeps itself. It is the ordering system and the salesman tracker in one.",
        "It is also a field-force tracking (WFA) and salesman location tracking software for food & beverage: GPS attendance, live location and geo-tagged outlet visits. So \"SFA for food and beverage\", \"order booking app for food distributors\" and \"salesman tracking software\" become one system. That combination of route-to-market beat planning, offline order booking, returns capture and GPS field tracking makes OZZO a practical food & beverage sales-tracking and distribution system.",
      ],
      keywords: ["SFA for food and beverage", "sales force automation software for food distributors", "salesman tracking software for food distribution", "order booking app for food distributors", "beat planning software food beverage", "secondary sales software food distribution", "field sales app for beverages"],
    },
    tagline: "Food moves fast and expires faster. It's won on daily retail coverage, fresh stock and schemes — not a monthly beat. OZZO runs that pace.",
    intro:
      "Packaged food and beverage is a freshness game: short shelf-life, near-expiry returns, damage, and a wide retail universe that needs frequent visits. OZZO gives F&B brands and distributors high-frequency coverage, field returns capture, schemes and secondary visibility in one affordable system.",
    stats: [
      { value: "Shelf-life", label: "short expiry windows mean freshness and FEFO decide waste and returns" },
      { value: "High-frequency", label: "outlets need weekly or daily visits, not a monthly beat" },
      { value: "Returns & damage", label: "near-expiry and breakage eat margin if they're not caught in the field" },
    ],
    painPoints: [
      { title: "Freshness and expiry decide profit", body: "Short shelf-life means near-expiry stock, FEFO and returns are constant; product that ages on a shelf becomes a return and a loss." },
      { title: "A wide retail universe, visited often", body: "Kirana and general-trade outlets need frequent visits to stay stocked and fresh — coverage frequency, not just reach, is the job." },
      { title: "Near-expiry and damage returns from the field", body: "Breakage and near-expiry have to be spotted, recorded and reconciled at the outlet, or they quietly bleed margin." },
      { title: "Schemes and competition on every shelf", body: "F&B is scheme-heavy and competitive; running promotions cleanly and seeing what actually sold matters." },
      { title: "Secondary sales and outstanding", body: "Distributor-to-retailer movement and outstanding drive the real business, but primary billing hides it." },
    ],
    solutions: [
      { pain: "Cover outlets at the right frequency", how: "Beat routes and geo-tagged visits keep a wide retail universe visited often, with productive-call visibility — coverage frequency you can actually manage." },
      { pain: "Capture returns and expiry in the field", how: "Record near-expiry and damage returns against the outlet on the visit, and capture batch/expiry as fields — so losses are caught early, not at reconciliation." },
      { pain: "Run schemes and see what sold", how: "Trade schemes and price lists apply at the counter, with automatic primary/secondary tagging to see real movement to retailers." },
      { pain: "Take orders offline, fast", how: "Offline order capture with a multi-unit catalogue keeps the high-frequency beat moving even in low-signal markets." },
      { pain: "Control secondary & outstanding", how: "Trade levels, self-calculating outstanding, credit limits and an Ageing report across the distributor–retailer chain." },
    ],
    workflow: [
      { title: "Work the daily beat", body: "Beat routes run the high-frequency outlet list; the rep works it, outlet by outlet." },
      { title: "Visit: order, scheme, returns", body: "Geo-stamped visit; order offline, apply the scheme, record near-expiry/damage returns." },
      { title: "See secondary movement", body: "Primary/secondary shows what's actually reaching and leaving the retailer." },
      { title: "Collect & recover", body: "Collections against outstanding; credit limits and Ageing keep dues in check." },
    ],
    whyNotOthers: [
      { label: "Not just a tracker", body: "A tracker shows a rep visited an outlet — not high-frequency productive coverage, field returns, schemes, secondary and outstanding, which is the F&B job." },
      { label: "Not an enterprise FMCG SFA (for big brands)", body: "Enterprise CPG platforms with AI image-recognition shelf audits are built and priced for national brands. OZZO is for regional and SME F&B brands and distributors that want CRM + field + WhatsApp affordably." },
      { label: "Not a food-ERP", body: "OZZO isn't a lot-traceability, FSSAI-compliance or warehouse-FEFO ERP — it runs the field: coverage, orders, returns, schemes, secondary and outstanding, alongside your ERP." },
    ],
    outcomes: [
      { title: "Fresh stock, fewer returns", body: "Frequent coverage and field returns capture mean less product ages into a loss." },
      { title: "The retail universe stays covered", body: "Beat frequency is managed, not hoped for — productive calls, not just visits." },
      { title: "Schemes run clean and visible", body: "Promotions apply at the counter and secondary shows what actually sold." },
      { title: "Secondary & credit under control", body: "Outstanding self-calculates and Ageing flags overdue outlets." },
    ],
    cockpit: {
      header: "GT beat · Rajkot",
      headerBadge: "High-frequency",
      sectionTitle: "One field app at retail pace",
      sectionBody: "High-frequency coverage, offline orders, schemes and near-expiry returns — captured at the outlet, so freshness and margin hold.",
      rows: [
        { icon: "ShoppingBag", title: "Wafers · 45 g × 60", subtitle: "Kirana · order offline", value: "₹4,200" },
        { icon: "Percent", title: "Combo scheme · 12 + 1", subtitle: "Applied at the counter", check: true, tone: "success" },
        { icon: "FileWarning", title: "Near-expiry return", subtitle: "2 cases · recorded at outlet", badge: "Caught in the field, not at month-end", badgeTone: "amber" },
      ],
      meter: { label: "Retailer outstanding", value: "₹32,000", sub: "/ ₹40k limit", fillPct: 80 },
      chips: [
        { label: "Productive call ✓", sub: "order + scheme placed", tone: "gradient" },
        { label: "Secondary ✓ to retailer", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Beat routes & high-frequency coverage", "Offline order capture (multi-unit)", "Near-expiry & damage returns capture", "Trade schemes & price lists", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing"],
    honestNote:
      "OZZO runs your F&B field sales — coverage, orders, returns, schemes, secondary and outstanding. It is not a lot-traceability, FSSAI-compliance or warehouse-FEFO ERP; it captures batch/expiry and field returns and works alongside your ERP.",
    faqs: [
      { q: "Is OZZO built for food and beverage distribution?", a: "Yes. OZZO handles the F&B field motion — high-frequency retail coverage, offline order capture, near-expiry and damage returns from the field, trade schemes, secondary sales and outstanding — in one affordable system." },
      { q: "Can OZZO capture near-expiry and damage returns in the field?", a: "Yes. Reps record near-expiry and damage returns against the outlet on the visit, and batch/expiry can be captured as fields — so losses are caught early, not discovered at reconciliation." },
      { q: "How is OZZO different from an enterprise FMCG SFA?", a: "Enterprise CPG platforms with AI shelf-audit are built and priced for national brands. OZZO is for regional and SME F&B brands and distributors wanting CRM, field sales and WhatsApp in one affordable system." },
    ],
  },

  // ─────────────────────────────────────────── FMCG
  {
    slug: "fmcg-companies",
    sector: "FMCG & Consumer Goods",
    name: "FMCG Companies",
    icon: "ShoppingCart",
    metaTitle: "Field sales software for FMCG companies | OZZO",
    metaDescription:
      "OZZO is built for FMCG brands and distributors: wide retail coverage, must-stock assortment and reorder discipline, retail-execution visibility, trade schemes, secondary sales and outstanding — one affordable system for regional & SME brands.",
    keywords: ["FMCG distribution software India", "FMCG field sales app", "retail execution software SME", "distributor management FMCG", "secondary sales FMCG", "FMCG SFA affordable"],
    image: "/industries/fmcg-companies-hero.jpg",
    imageAlt: "Well-stocked retail shelf of FMCG products",
    seo: {
      heading: "Sales force automation (SFA) & salesman tracking for FMCG",
      body: [
        "OZZO is a sales force automation (SFA) software for FMCG that brings order booking, route-to-market (RTM) beat planning, distributor and secondary-sales management, and reporting into one field app. For an FMCG field team, route and beat management is the engine of RTM — every salesman works a planned beat, books orders at the counter even offline, applies schemes on the spot, and outstanding updates itself. It replaces the separate ordering system, GPS tracker and spreadsheets most FMCG distributors still juggle.",
        "OZZO is also a field-force tracking (WFA) and salesman location tracking software for FMCG: selfie + GPS attendance, live rep location, geo-tagged retail visits and productive-call visibility. So \"sales person location tracking software for FMCG\", \"SFA for FMCG\" and \"ordering system for FMCG\" aren't three tools — they're one. That mix of route-to-market beat planning, order booking and GPS field tracking is what makes OZZO a practical FMCG sales-tracking and distributor-management system for regional and SME brands.",
      ],
      keywords: ["SFA for FMCG", "sales force automation software for FMCG", "salesman tracking software for FMCG", "sales person location tracking software for FMCG", "ordering system for FMCG", "order booking app for FMCG", "route to market software FMCG", "distributor management software FMCG", "field force tracking FMCG"],
    },
    tagline: "FMCG is won store by store — assortment on the shelf, reorders that actually happen, and schemes that land. OZZO runs that execution at SME scale.",
    intro:
      "For an FMCG brand or distributor, the battle is retail execution across a huge outlet universe: the right assortment stocked, retailers reordering, schemes landing and secondary sales visible. OZZO gives regional and SME FMCG brands that execution — coverage, assortment, schemes and outstanding — affordably.",
    stats: [
      { value: "50,000+", label: "stores a growing FMCG brand needs across GT, MT and quick-commerce", note: "Category scale" },
      { value: "60% GT", label: "of sales still come from traditional-trade kirana outlets" },
      { value: "Reorder", label: "the real problem: distributors underdeliver and retailers don't reorder" },
    ],
    painPoints: [
      { title: "Retail execution across a huge universe", body: "Presence in tens of thousands of outlets across GT/MT/quick-commerce, with the right assortment on the shelf — reach alone isn't enough, execution is." },
      { title: "Distributors underdeliver, retailers don't reorder", body: "The classic regional-brand wall: primary loads the distributor, but secondary to retailers and reorders quietly stall." },
      { title: "Assortment and must-stock discipline", body: "Wide SKU ranges with must-stock lines and new launches; keeping the right assortment live per outlet is hard." },
      { title: "Schemes, visibility and competition", body: "Trade schemes, display and share-of-shelf are constant; running promotions cleanly and seeing what sold matters." },
      { title: "Secondary sales and outstanding", body: "The business lives in secondary movement and outstanding, which primary billing hides." },
    ],
    solutions: [
      { pain: "Drive execution, not just visits", how: "Beat routes, geo-tagged visits and productive-call visibility so coverage means the right outlets worked with the right assortment — not just a check-in." },
      { pain: "Fix reorder and secondary", how: "Automatic primary/secondary tagging and outstanding show whether product is actually reaching and reordering at the retailer — the regional-brand blindspot, made visible." },
      { pain: "Keep assortment & must-stock live", how: "A full catalogue with custom fields and per-outlet ordering so must-stock lines and new launches stay on the shelf, captured offline." },
      { pain: "Run schemes cleanly", how: "Trade schemes and price lists apply at the counter, with secondary tagging to see what actually sold through." },
      { pain: "Control credit & dues", how: "Trade levels, self-calculating outstanding, credit limits and an Ageing report across distributor and retailer." },
    ],
    workflow: [
      { title: "Work the beat", body: "Beat routes run the outlet list with the right assortment target per store." },
      { title: "Visit: order, scheme, execution", body: "Geo-stamped visit; order the must-stock range offline, apply schemes, capture what's needed." },
      { title: "See secondary & reorder", body: "Primary/secondary shows real movement and where reorders are stalling." },
      { title: "Collect & recover", body: "Collections against outstanding; credit limits and Ageing keep dues in check." },
    ],
    whyNotOthers: [
      { label: "Not just a tracker", body: "A tracker shows a rep reached a store — not assortment, reorder, schemes, secondary and outstanding, which is the FMCG execution job." },
      { label: "Not an enterprise FMCG SFA (for big brands)", body: "Bizom/FieldAssist-class platforms with AI image-recognition shelf audits are built and priced for national CPG. OZZO is for regional and SME FMCG brands and distributors that want CRM + field + WhatsApp affordably." },
      { label: "Not a bare CRM", body: "A CRM has no field beat, offline orders, trade levels, schemes or secondary/outstanding — you'd stitch tools. OZZO is one." },
    ],
    outcomes: [
      { title: "Execution you can measure", body: "Productive coverage with the right assortment, not just visit counts." },
      { title: "Reorders stop stalling", body: "Secondary visibility shows where retailers aren't reordering, in time to fix it." },
      { title: "Schemes land and show through", body: "Promotions apply at the counter and secondary shows what actually sold." },
      { title: "Secondary & credit controlled", body: "Outstanding self-calculates and Ageing flags overdue outlets." },
    ],
    cockpit: {
      header: "GT beat · Surat",
      headerBadge: "Retail execution",
      sectionTitle: "One field app for retail execution",
      sectionBody: "Assortment on the shelf, reorders that happen, schemes that land and secondary you can see — store by store, at SME scale.",
      rows: [
        { icon: "ShoppingCart", title: "Toothpaste 100 g × 72", subtitle: "Must-stock · order offline", value: "₹6,480" },
        { icon: "ClipboardList", title: "Assortment check", subtitle: "8/10 must-stock lines live", badge: "2 lines out of stock · flagged", badgeTone: "amber" },
        { icon: "Percent", title: "Scheme · 10 + 1", subtitle: "Applied at the counter", check: true, tone: "success" },
      ],
      meter: { label: "Retailer outstanding", value: "₹28,500", sub: "/ ₹35k limit", fillPct: 81 },
      chips: [
        { label: "Productive call ✓", sub: "assortment + scheme", tone: "gradient" },
        { label: "Reorder ✓ tracked", sub: "secondary vs primary", tone: "glass" },
      ],
    },
    modules: ["Beat routes & productive coverage", "Offline order capture & assortment", "Trade schemes & price lists", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "WhatsApp CRM & Daily Sales Report"],
    honestNote:
      "OZZO runs your FMCG field execution — coverage, assortment, orders, schemes, secondary and outstanding. It does not ship AI image-recognition shelf audits or planogram-compliance scoring like enterprise CPG platforms; it gives regional and SME brands the execution and visibility that matter, affordably.",
    faqs: [
      { q: "Is OZZO built for FMCG brands and distributors?", a: "Yes — especially regional and SME FMCG brands. OZZO handles retail execution across a wide outlet universe: coverage, must-stock assortment, reorder/secondary visibility, trade schemes and outstanding, with CRM and WhatsApp in one affordable system." },
      { q: "How does OZZO fix the 'retailers don't reorder' problem?", a: "Automatic primary/secondary tagging and outstanding show whether product is actually reaching and reordering at the retailer — the regional-brand blindspot — so you can act where reorders stall." },
      { q: "How is OZZO different from Bizom or FieldAssist?", a: "Those enterprise CPG platforms (with AI shelf-audit) are built and priced for national brands. OZZO is for regional and SME FMCG brands and distributors that want CRM, field sales and WhatsApp in one affordable system." },
    ],
  },

  // ─────────────────────────────────────────── PAINTS
  {
    slug: "paint-companies",
    sector: "Building Materials",
    name: "Paint Companies",
    icon: "Paintbrush",
    metaTitle: "Field sales software for paint companies & distributors | OZZO",
    metaDescription:
      "OZZO is built for decorative & industrial paint brands: the painter/contractor who decides the brand, a huge base × shade × pack × finish catalogue, dealer credit & secondary-sales visibility, project sales and trade schemes — one field-sales system.",
    keywords: ["paint company software", "paint distribution software", "field sales software for paint companies", "paint dealer management software", "decorative paint SFA India", "painter contractor engagement software", "paint distributor management software"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for paint companies",
      body: [
        "OZZO is a sales force automation (SFA) software for decorative and industrial paint companies that combines counter order booking across a wide base × shade × pack-size × finish catalogue, dealer and secondary-sales visibility, trade schemes and outstanding in one field app. Reps book the exact base, pack and finish at the dealer counter — offline in low-signal markets — and quote the current price, so an accurate order reaches dispatch every time.",
        "It is also field-force tracking (WFA) and salesman location tracking software for paint field teams: selfie + GPS attendance, live location, beat routes and geo-tagged dealer, painter and contractor visits. So \"SFA for paint companies\", \"dealer management software for paints\" and \"salesman tracking software\" are one system. Counter order booking, painter/contractor engagement, secondary sales, trade schemes and GPS field tracking make OZZO a practical paint distribution and sales-tracking system.",
      ],
      keywords: ["SFA for paint companies", "sales force automation software for paint distribution", "paint dealer management software", "salesman tracking software for paint distributors", "order booking app for paint distributors", "painter engagement software", "field sales software for paint brands"],
    },
    tagline: "The painter picks your brand, your catalogue runs to thousands of shades and packs, and dealers move stock on credit. OZZO is built for exactly that.",
    intro:
      "Selling paint isn't selling one product — it's a huge catalogue of bases, shades, pack sizes and finishes, a painter or contractor who actually decides which brand goes on the wall, a dealer beat that runs on credit, and long-cycle project sales all at once. OZZO handles the whole motion in one system.",
    stats: [
      { value: "Painter-led", label: "painters & contractors specify the brand at the point of use — not the shop", note: "Industry reality" },
      { value: "1000s", label: "of SKUs — bases × shades × pack sizes × finishes (interior/exterior/enamel)" },
      { value: "On credit", label: "dealers and retailers carry your stock and pay after they sell" },
    ],
    painPoints: [
      { title: "The painter decides your brand — not the shop", body: "Painters and contractors specify which paint actually gets used, which is why leaders (Asian Paints' colour academies and contractor programmes, Berger, Nerolac) invest heavily in painter engagement and loyalty. A field team that only calls on dealers is invisible to the people who truly drive demand." },
      { title: "A vast base × shade × pack × finish catalogue", body: "Interior, exterior, enamel, primer, putty, wood and metal finishes — each in multiple bases, pack sizes (1L, 4L, 10L, 20L) and price points. Capturing the exact SKU, pack and current price at the counter is genuinely hard, and every error costs margin." },
      { title: "Dealer credit and secondary sales you can't see", body: "Product moves company → dealer → retailer on credit, but primary billing tells you nothing about whether it's actually reaching the counter and the painter. Slow secondary movement quietly becomes tomorrow's returns and destocking." },
      { title: "Scheme-driven trade with festival & season spikes", body: "The paint trade runs on constant dealer schemes, festival offers and slabs — and demand swings with the festive and pre-monsoon painting season. Applying the right scheme at the counter and tracking who's enrolled is a full-time job on paper." },
      { title: "Two motions at once — retail beat and projects", body: "Alongside the dealer and retail beat there's long-cycle project and institutional business (builders, contractors, developers) needing a pipeline, quotations and disciplined follow-up. Most field tools do one motion well, not both." },
    ],
    solutions: [
      { pain: "Engage the painter & contractor network", how: "Model painters and contractors as their own customer type; log geo-stamped engagement visits, run trade schemes tied to what they specify, and keep their history on the same record as the dealer they buy from — so demand generation is finally visible." },
      { pain: "Take complex counter orders right", how: "A full catalogue with categories, packs and finishes, plus customer-specific price lists — so a rep captures the exact base, pack, finish and current price at the counter, offline if there's no signal." },
      { pain: "See secondary sales and control credit", how: "Distributor / dealer / retailer trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so you see real movement and recover on time." },
      { pain: "Run schemes without the paperwork", how: "Central schemes and slabs apply at the counter automatically, with enrolment tracked per dealer/painter — so the right offer lands every time and you know exactly who's in which scheme." },
      { pain: "Run projects and the retail beat in one system", how: "A CRM pipeline for project and institutional deals — leads, stages, branded PDF quotations and follow-ups — running alongside the dealer field beat, on one login and one customer record." },
    ],
    workflow: [
      { title: "Engage the influencer", body: "The rep meets a painter or contractor, logs a geo-stamped visit and the products they specify, and enrols them in a scheme." },
      { title: "Work the dealer beat", body: "A counter visit, a multi-pack order at current prices with the right scheme applied, captured offline and synced." },
      { title: "Advance a project deal", body: "Update a project-pipeline stage, send a branded PDF quotation, and set the next follow-up so nothing goes cold." },
      { title: "Collect & watch movement", body: "Record the collection against outstanding; primary/secondary and the Ageing report show what's actually reaching the counter." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker can tell you a rep visited a shop — but not manage a huge base/shade/pack catalogue, apply the right scheme at the counter, run a project pipeline, or engage painters. For a paint brand, that's most of the job." },
      { label: "Not an enterprise CPG SFA", body: "Enterprise platforms are shaped around fast-moving packaged goods and heavy shelf-audit merchandising, and priced for national brands — not painter influence, project sales and a shade-and-pack catalogue for a regional paint company." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM handles the project pipeline but has no native field tracking, counter order capture, trade levels or dealer outstanding — you'd stitch three tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "The painter network becomes visible", body: "Who your reps engaged, what they specify, and which schemes they're in — on the record, not in someone's head." },
      { title: "Accurate orders, right scheme, every counter", body: "The exact base, pack and finish at the current price, with the correct scheme applied — no rework, no margin leak." },
      { title: "Credit & secondary under control", body: "Outstanding self-calculates, credit limits gate the next order, and you finally see what's reaching the counter." },
      { title: "Projects stop slipping", body: "Every project deal has a stage, a quotation and a next step — no long-cycle opportunity quietly forgotten." },
    ],
    cockpit: {
      header: "Today · Indore beat",
      headerBadge: "Festive scheme live",
      sectionTitle: "One field app, built for the counter",
      sectionBody: "Current prices, the right pack, the painter who specifies your brand, the festive scheme and the dealer's outstanding — captured on one screen in the field, online or off.",
      rows: [
        { icon: "Paintbrush", title: "Interior Emulsion · 20L", subtitle: "Base + shade · captured offline", value: "₹6,400" },
        { icon: "Percent", title: "Festive scheme · 10% slab", subtitle: "Applied at the counter", badge: "Dealer enrolled · slab active", badgeTone: "primary" },
        { icon: "UserRound", title: "Suresh · Painter", subtitle: "Specifies your brand · in loyalty scheme", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹1.6L", sub: "/ ₹2L limit", fillPct: 80 },
      chips: [
        { label: "Project deal", sub: "Quotation sent · follow-up Mon", tone: "gradient" },
        { label: "Secondary ✓ reaching counter", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Painter/contractor engagement (customer type)", "Full pack & finish catalogue", "Customer-specific price lists & schemes", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "CRM pipeline for project sales", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO can model and track your painter/contractor engagement — as a customer type, with geo-stamped visits, schemes and history — but it is not a consumer-style gamified painter-rewards app with points redemption, nor a colour-tinting-machine integration. It gives your field team the visibility and tools to run those relationships and orders.",
    faqs: [
      { q: "Is OZZO built for paint companies and distributors?", a: "Yes. OZZO handles what makes paint field sales hard — a huge base/shade/pack/finish catalogue, painter and contractor engagement, dealer credit and secondary-sales visibility, trade schemes and a CRM pipeline for project sales — in one system." },
      { q: "Can OZZO handle our large catalogue of bases, packs and finishes?", a: "Yes. A full catalogue with categories, pack sizes and finishes plus customer-specific price lists means reps capture the exact SKU, pack and current price at the counter — offline if there's no signal." },
      { q: "Does OZZO help engage painters and contractors?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealers they buy from. It isn't a gamified consumer rewards app, but it makes the influencer relationship visible and manageable." },
      { q: "Can OZZO manage both dealer sales and project sales?", a: "Yes. The dealer/retail field beat and a CRM pipeline for long-cycle project deals (stages, branded quotations, follow-ups) run in one system on one customer record." },
    ],
  },

  // ─────────────────────────────────────────── TILES & SANITARYWARE
  {
    slug: "tiles-sanitaryware-companies",
    sector: "Building Materials",
    name: "Tiles & Sanitaryware Companies",
    icon: "LayoutGrid",
    metaTitle: "Field sales software for tiles & sanitaryware companies | OZZO",
    metaDescription:
      "OZZO is built for ceramic/vitrified tile and sanitaryware brands: architect & interior-designer influence, showroom + project dual sales, batch/shade-lot ordering, dealer credit and a CRM pipeline for builder projects — one field-sales system.",
    keywords: ["tiles company software", "sanitaryware distribution software", "field sales software for tiles", "ceramic tile dealer management", "vitrified tiles SFA India", "sanitaryware dealer software", "architect interior designer engagement software"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for tiles & sanitaryware companies",
      body: [
        "OZZO is a sales force automation (SFA) software for ceramic/vitrified tile and sanitaryware companies that combines dealer and showroom order booking, batch/shade-lot capture, dealer credit and outstanding, and a CRM pipeline for builder and project sales in one field app. Reps book the exact size, series and shade-lot at current prices — offline if needed — so a tile order dispatches with the matched batch and a sanitaryware order lands right.",
        "It is also field-force tracking (WFA) and salesman location tracking software for tile and sanitaryware field teams: selfie + GPS attendance, live location, beat routes and geo-tagged dealer, architect and interior-designer visits. So \"SFA for tiles companies\", \"dealer management software for sanitaryware\" and \"salesman tracking software\" are one system. Order booking, architect/ID engagement, project pipeline, outstanding and GPS field tracking make OZZO a practical tiles and sanitaryware distribution and sales-tracking system.",
      ],
      keywords: ["SFA for tiles companies", "sales force automation software for sanitaryware", "tiles dealer management software", "salesman tracking software for tile distributors", "order booking app for tile distributors", "architect engagement software", "field sales software for ceramic tiles"],
    },
    tagline: "The architect specifies, the builder buys by the project, and tiles ship in shade-lots. OZZO runs the showroom beat and the project pipeline together.",
    intro:
      "Tiles and sanitaryware sell two ways at once — a dealer and showroom beat, and long-cycle project sales to builders and developers where the architect or interior designer specifies. Add slow-moving high-value SKUs, shade-lot matching and dealer credit, and you need one system that does all of it. That's OZZO.",
    stats: [
      { value: "Architect-led", label: "architects & interior designers specify the brand and series on projects", note: "Industry reality" },
      { value: "Project-heavy", label: "builder & developer projects drive a large share of tile & sanitaryware volume" },
      { value: "Shade-lots", label: "tiles must ship in matched batches/shade-lots — a mismatch is a rejection" },
    ],
    painPoints: [
      { title: "Architects & interior designers specify the brand", body: "On projects, the architect, interior designer or contractor decides the series and finish long before the dealer sells it. A field team that only works dealers misses the people who actually specify — where demand is really created." },
      { title: "Two sales motions — showroom beat and projects", body: "A dealer and showroom beat runs alongside long-cycle project sales to builders and developers, each with quotations, samples and follow-ups. Most field tools handle one motion, not both — so projects get chased on WhatsApp and forgotten." },
      { title: "Shade-lot & batch matching", body: "Tiles from different production batches vary slightly in shade; a project needs a matched lot or the customer rejects it. Capturing the right series, size and batch at order time — not after dispatch — protects the sale." },
      { title: "High-value, slow-moving SKUs and displays", body: "Big-ticket vitrified tiles and premium sanitaryware move slowly, tie up dealer capital, and depend on showroom displays and samples. Knowing what's displayed, what's moving and what's dead stock at each counter is hard to see from HQ." },
      { title: "Dealer credit and outstanding", body: "Dealers carry high-value stock on credit; outstanding piles up and gets chased from memory. Without live outstanding and credit limits, recovery slips and the next order goes out to a dealer already over the line." },
    ],
    solutions: [
      { pain: "Engage architects, designers & contractors", how: "Model architects, interior designers and contractors as their own customer type; log geo-stamped engagement visits, track what they specify, and keep their history alongside the dealers and projects they influence — so specification-led demand is visible." },
      { pain: "Run the showroom beat and projects together", how: "A dealer/showroom field beat plus a CRM pipeline for builder and developer projects — leads, stages, branded PDF quotations and follow-ups — on one login and one customer record." },
      { pain: "Capture the right series, size & batch", how: "A full catalogue by category, series and size with customer-specific price lists, so reps book the exact SKU and note the required shade-lot at current prices, offline if there's no signal." },
      { pain: "See movement and control credit", how: "Trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so you see real movement and recover on high-value stock on time." },
      { pain: "Keep displays and samples honest", how: "Geo-stamped visits with photos capture what's actually displayed at the showroom, so display compliance and dead stock are visible instead of assumed." },
    ],
    workflow: [
      { title: "Specify with the influencer", body: "The rep meets an architect or interior designer, logs a geo-stamped visit and the series they specify for an upcoming project." },
      { title: "Work the showroom beat", body: "A dealer/showroom visit with a display photo and an order for the right series, size and batch at current prices — captured offline." },
      { title: "Advance the project", body: "Update the project-pipeline stage, send a branded PDF quotation to the builder, and set the next follow-up." },
      { title: "Collect & recover", body: "Record collections against outstanding; credit limits and the Ageing report keep high-value dealer credit under control." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a showroom — but not architect/designer engagement, a builder-project pipeline, shade-lot ordering, display photos or dealer outstanding on high-value stock." },
      { label: "Not an enterprise FMCG SFA", body: "Tiles and sanitaryware aren't fast-moving packaged goods — they're high-value, slow-moving, specification- and project-led. Enterprise CPG platforms are built and priced for the opposite." },
      { label: "Not a plain CRM", body: "A CRM handles the project pipeline but has no field visits, showroom display photos, catalogue ordering, trade levels or dealer outstanding — you'd run two disconnected tools." },
    ],
    outcomes: [
      { title: "Specification demand becomes visible", body: "Which architects and designers your reps engaged, and what they specify — on the record, feeding the project pipeline." },
      { title: "Projects stop slipping", body: "Every builder deal has a stage, a quotation and a next step — no high-value project quietly lost to a competitor." },
      { title: "The right batch ships", body: "The required series, size and shade-lot is captured at order time — fewer rejections and returns on matched tile." },
      { title: "High-value credit under control", body: "Outstanding self-calculates and credit limits gate the next order, so recovery on big-ticket stock isn't a surprise." },
    ],
    cockpit: {
      header: "Today · Morbi + Ahmedabad",
      headerBadge: "Project pipeline",
      sectionTitle: "One field app for showroom + project",
      sectionBody: "The architect who specified, the showroom order with the right shade-lot, the builder project in the pipeline and the dealer's outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "LayoutGrid", title: "GVT 600×1200 · Series 12", subtitle: "40 boxes · shade-lot noted", value: "₹58,000" },
        { icon: "Building2", title: "Skyline Towers · Project", subtitle: "Quotation sent · architect specified", badge: "Stage: Negotiation · follow-up Thu", badgeTone: "primary" },
        { icon: "UserRound", title: "Ar. Mehta · Architect", subtitle: "Specifies your series · engagement logged", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹3.2L", sub: "/ ₹4L limit", fillPct: 80 },
      chips: [
        { label: "Display ✓ photo captured", sub: "showroom compliance", tone: "gradient" },
        { label: "Secondary tracked", sub: "primary vs secondary", tone: "glass" },
      ],
    },
    modules: ["Architect/designer engagement (customer type)", "CRM pipeline for builder projects", "Catalogue by series & size + shade-lot notes", "Geo-tagged visits with display photos", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO runs your dealer, showroom and project field sales — engagement, orders, pipeline, outstanding and display photos. It is not a 3D room-visualiser, tile-layout designer or BIM/specification-catalogue tool; it works alongside whatever design or visualiser tools your showrooms and architects already use.",
    faqs: [
      { q: "Is OZZO built for tiles and sanitaryware companies?", a: "Yes. OZZO runs both the dealer/showroom beat and long-cycle builder-project sales, with architect/designer engagement, catalogue ordering with shade-lot notes, display photos, and dealer credit/outstanding — in one system." },
      { q: "Can OZZO handle project sales to builders and developers?", a: "Yes. A CRM pipeline tracks each project deal through stages with branded PDF quotations and follow-ups, running alongside the dealer field beat on one customer record — so high-value projects don't slip." },
      { q: "Does OZZO help with architect and interior-designer relationships?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, track what they specify, and link it to the projects and dealers they influence, so specification-led demand becomes visible." },
      { q: "Can reps capture the right shade-lot and control dealer credit?", a: "Reps book the exact series and size and note the required shade-lot at order time, while self-calculating outstanding, credit limits and an Ageing report keep high-value dealer credit under control." },
    ],
  },

  // ─────────────────────────────────────────── ELECTRICALS, WIRES & CABLES
  {
    slug: "electricals-wires-cables-companies",
    sector: "Building Materials",
    name: "Electricals, Wires & Cables Companies",
    icon: "Cable",
    metaTitle: "Field sales software for electrical, wires & cables companies | OZZO",
    metaDescription:
      "OZZO is built for wires, cables & electrical-goods brands: the electrician who decides the brand, copper-linked price volatility pushed to the field, multi-unit ordering (coil/metre/kg/piece), dealer credit and project sales — one field-sales system.",
    keywords: ["wire and cable company software", "electrical goods distribution software", "field sales software for electricals", "cable dealer management software", "electrical SFA India", "electrician engagement software", "switchgear distributor software"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for wires, cables & electrical companies",
      body: [
        "OZZO is a sales force automation (SFA) software for wire, cable and electrical-goods companies that combines multi-unit counter order booking (coil, metre, kg, piece), copper-linked price-list updates pushed to the field, dealer credit and secondary-sales visibility, and a project pipeline in one field app. When copper moves and rate cards change, every rep quotes the new price instantly and books the exact SKU and unit at the counter — offline if needed.",
        "It is also field-force tracking (WFA) and salesman location tracking software for electrical field teams: selfie + GPS attendance, live location, beat routes and geo-tagged dealer, electrician and contractor visits. So \"SFA for wire and cable companies\", \"dealer management software for electricals\" and \"salesman tracking software\" are one system. Multi-unit order booking, copper-linked price control, electrician engagement, secondary sales and GPS field tracking make OZZO a practical electrical distribution and sales-tracking system.",
      ],
      keywords: ["SFA for wire and cable companies", "sales force automation software for electrical distribution", "cable dealer management software", "salesman tracking software for electrical distributors", "order booking app for electrical distributors", "electrician engagement software", "field sales software for wires and cables"],
    },
    tagline: "The electrician picks your brand, copper never sits still, and wire sells by the coil, metre and kilo. OZZO is built for exactly that.",
    intro:
      "Electricals is a hard field-sales trade: the electrician decides the brand, copper-linked prices move your rate card constantly, wire and cable sell in multiple units, and you run a retail beat and project sales at once. OZZO handles all of it — current prices in every rep's hand, multi-unit counter orders and a project pipeline — in one system.",
    stats: [
      { value: "Electrician-led", label: "electricians & contractors specify the wire and switchgear brand", note: "Industry reality" },
      { value: "Copper-linked", label: "wire & cable prices swing with copper/LME, forcing constant rate revisions" },
      { value: "Multi-unit", label: "wire sells by coil, metre and kilogram; goods by the piece" },
    ],
    painPoints: [
      { title: "The electrician decides your brand", body: "Electricians and contractors specify which wire, cable and switchgear actually get installed — which is why leaders (Polycab, Havells, Finolex) run heavy electrician-loyalty programmes. A team that only calls on dealers is invisible to the people who create demand." },
      { title: "Copper-price volatility whipsaws your rate card", body: "Wire and cable prices are copper/LME-linked and move sharply. When prices rise you must push new rates to the field fast; a stale rate card quietly bleeds margin on every order booked at the old price." },
      { title: "Multi-unit ordering across a wide SKU range", body: "Wire and cable sell by coil, metre and kilogram; switches, MCBs, fans and fittings by the piece. Capturing the right SKU in the right unit at the current price — accurately, at the counter — is genuinely hard." },
      { title: "Dealer credit and secondary sales you can't see", body: "Product moves company → distributor → dealer → retailer on credit, but primary billing tells you nothing about whether it's reaching the counter and the electrician. Slow secondary movement becomes tomorrow's destocking." },
      { title: "Retail beat and project sales at once", body: "Alongside the dealer beat there's project and institutional business (builders, electrical contractors, infrastructure) needing a pipeline, quotations and follow-ups. Most field tools do one motion well, not both." },
    ],
    solutions: [
      { pain: "Engage the electrician & contractor network", how: "Model electricians and contractors as their own customer type; log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealer they buy from — so demand generation is visible." },
      { pain: "Push new prices the day copper moves", how: "Update the price-list engine centrally and every rep quotes the new price instantly — no stale rate cards when copper swings — with trade schemes to move stock when dealers hesitate." },
      { pain: "Take multi-unit orders right, in the field", how: "A full catalogue with multi-unit ordering (coil / metre / kg / piece) and customer-specific price lists, so a rep captures the exact SKU, unit and current price at the counter, offline if there's no signal." },
      { pain: "See secondary sales and control credit", how: "Trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so you see real movement and recover on time." },
      { pain: "Run projects and the retail beat in one system", how: "A CRM pipeline for project and institutional deals — leads, stages, branded PDF quotations and follow-ups — running alongside the dealer field beat, on one customer record." },
    ],
    workflow: [
      { title: "Engage the electrician", body: "The rep meets an electrician or contractor, logs a geo-stamped visit and the products they specify, and enrols them in a scheme." },
      { title: "Work the dealer beat", body: "A counter visit, a multi-unit order at current copper-linked prices, captured offline and synced — no stale rate card." },
      { title: "Advance a project deal", body: "Update a project-pipeline stage, send a branded PDF quotation, and set the next follow-up so nothing goes cold." },
      { title: "Collect & watch movement", body: "Record the collection against outstanding; primary/secondary and the Ageing report show what's actually reaching the counter." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep visited a shop — but not multi-unit orders, copper-linked price pushes, a project pipeline, or electrician engagement. For an electrical brand, that's most of the job." },
      { label: "Not an enterprise FMCG SFA", body: "Enterprise CPG platforms are shaped around fast-moving packaged goods and shelf-audit merchandising, and priced for national brands — not copper-linked pricing, multi-unit wire orders and electrician influence for a regional electrical company." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM handles the project pipeline but has no native field tracking, multi-unit counter orders, trade levels or dealer outstanding — you'd stitch three tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "Current prices in every rep's hand", body: "When copper moves, the new rate card is live in the field the same day — margin stops leaking on stale prices." },
      { title: "The electrician network becomes visible", body: "Who your reps engaged, what they specify, and which schemes they're in — on the record, not in someone's head." },
      { title: "Credit & secondary under control", body: "Outstanding self-calculates, credit limits gate the next order, and you finally see what's reaching the counter." },
      { title: "Projects stop slipping", body: "Every project deal has a stage, a quotation and a next step — no long-cycle opportunity quietly forgotten." },
    ],
    cockpit: {
      header: "Today · Delhi beat",
      headerBadge: "Live price list",
      sectionTitle: "One field app, built for the counter",
      sectionBody: "Current copper-linked prices, multi-unit orders, the electrician who specifies your brand, and the dealer's outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "Cable", title: "FR Wire 2.5 sq mm · 90m coil", subtitle: "Price list · North", value: "₹1,240/coil", badge: "Copper ▲ 2% · new list pushed to field", badgeTone: "amber" },
        { icon: "ShoppingCart", title: "Modular switches · 6A", subtitle: "120 pc · captured offline", value: "₹9,600" },
        { icon: "UserRound", title: "Imran · Electrician", subtitle: "Specifies your brand · in loyalty scheme", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹2.1L", sub: "/ ₹2.5L limit", fillPct: 84 },
      chips: [
        { label: "Project deal", sub: "Quotation sent · follow-up Fri", tone: "gradient" },
        { label: "Secondary ✓ reaching counter", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Multi-unit ordering (coil / metre / kg / piece)", "Copper-linked price lists & schemes", "Electrician/contractor engagement (customer type)", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "CRM pipeline for project sales", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO can model and track your electrician/contractor engagement — as a customer type, with geo-stamped visits, schemes and history — but it is not a consumer-style gamified electrician-rewards app with points redemption, nor a BIS/ISI quality-compliance system. It gives your field team the visibility, pricing control and tools to run the trade.",
    faqs: [
      { q: "Is OZZO built for wire, cable and electrical companies?", a: "Yes. OZZO handles what makes electrical field sales hard — multi-unit ordering (coil, metre, kg, piece), copper-linked price-list changes pushed to the field, electrician engagement, dealer credit and secondary-sales visibility, and a project pipeline — in one system." },
      { q: "How does OZZO deal with copper price volatility?", a: "Update the price-list engine centrally and every rep quotes the new price instantly — so copper swings don't leave stale rate cards in the field. Trade schemes help move stock when dealers hesitate on price changes." },
      { q: "Can OZZO handle wire sold by coil, metre and kilogram?", a: "Yes. Multi-unit ordering lets reps book the exact SKU in the right unit (coil, metre, kg or piece) at the current price, offline if there's no signal." },
      { q: "Does OZZO help engage electricians and contractors?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealers they buy from. It isn't a gamified consumer rewards app, but it makes the influencer relationship visible and manageable." },
    ],
  },

  // ─────────────────────────────────────────── ADHESIVES & CONSTRUCTION CHEMICALS
  {
    slug: "adhesives-construction-chemicals-companies",
    sector: "Building Materials",
    name: "Adhesives & Construction Chemicals Companies",
    icon: "FlaskConical",
    metaTitle: "Field sales software for adhesives & construction chemicals | OZZO",
    metaDescription:
      "OZZO is built for tile-adhesive, waterproofing & construction-chemical brands: the applicator/contractor who specifies, technical & site-demo selling, batch and shelf-life aware ordering, project sales, dealer credit — one field-sales system.",
    keywords: ["construction chemicals software", "tile adhesive distribution software", "field sales software for construction chemicals", "waterproofing dealer management", "adhesives SFA India", "applicator contractor engagement software", "admixture distributor software"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for adhesives & construction chemicals",
      body: [
        "OZZO is a sales force automation (SFA) software for tile-adhesive, waterproofing, admixture and construction-chemical companies that combines counter and site order booking, applicator/contractor engagement, project sales and dealer credit in one field app. Reps book the exact product and pack at current prices — offline at the site or counter — and log the technical demos and site visits that this trade sells on.",
        "It is also field-force tracking (WFA) and salesman location tracking software for construction-chemical field teams: selfie + GPS attendance, live location, beat routes and geo-tagged dealer, applicator, contractor and site visits. So \"SFA for construction chemicals\", \"dealer management software for waterproofing\" and \"salesman tracking software\" are one system. Order booking, applicator engagement, site-demo logging, project pipeline, outstanding and GPS field tracking make OZZO a practical construction-chemical distribution and sales-tracking system.",
      ],
      keywords: ["SFA for construction chemicals", "sales force automation software for adhesives", "tile adhesive dealer management software", "salesman tracking software for construction chemicals", "order booking app for waterproofing distributors", "applicator engagement software", "field sales software for admixtures"],
    },
    tagline: "The applicator specifies, the sale is won at a site demo, and product has a shelf life. OZZO runs that technical, project-led trade.",
    intro:
      "Construction chemicals sell on trust and technique: the applicator or contractor specifies the brand, the sale is often won at a site demo, product moves batch-by-batch with a shelf life, and big volume comes from projects. OZZO gives your field team the engagement, ordering, project pipeline and credit control this trade actually runs on — in one system.",
    stats: [
      { value: "Applicator-led", label: "applicators & contractors specify the adhesive/waterproofing brand", note: "Industry reality" },
      { value: "Demo-driven", label: "sales are often won at a technical site demo, not a counter pitch" },
      { value: "Shelf-life", label: "adhesives & chemicals have batch dates — old stock is a liability" },
    ],
    painPoints: [
      { title: "The applicator & contractor specify the brand", body: "Waterproofing applicators, tile-fixing contractors and site engineers decide which product actually gets used. A field team that only calls on dealers is invisible to the people who drive specification and repeat demand." },
      { title: "Technical, demo-led selling", body: "The sale is frequently won at a site demo or a technical conversation, not a counter pitch. Logging which sites were visited, which demos were run and what got specified is where the real pipeline lives — and it usually lives only in a rep's head." },
      { title: "Batch and shelf-life matter", body: "Adhesives, admixtures and chemicals carry batch dates and a shelf life. Booking the right product and pack, and moving stock before it ages, protects both margin and the applicator's trust — hard to manage on paper." },
      { title: "Project sales alongside the dealer beat", body: "Large volume comes from projects — builders, waterproofing contracts, infrastructure — needing a pipeline, quotations and follow-ups, run at the same time as the dealer and retail beat. Most tools handle only one." },
      { title: "Dealer credit and secondary movement", body: "Product moves on credit through distributors and dealers, but primary billing doesn't show whether it's reaching sites and applicators. Slow secondary movement and rising outstanding creep up unseen." },
    ],
    solutions: [
      { pain: "Engage applicators & contractors", how: "Model applicators, contractors and site engineers as their own customer type; log geo-stamped engagement visits, track what they specify, and keep their history alongside the dealers and projects they influence." },
      { pain: "Capture site demos and specification", how: "Geo-stamped site visits with photos record which demos were run and what was specified, turning demo-led selling into a visible pipeline instead of memory." },
      { pain: "Order the right product & pack", how: "A full catalogue by category and pack with customer-specific price lists, so reps book the exact product, pack and current price at the counter or site — offline if there's no signal." },
      { pain: "Run projects and the dealer beat together", how: "A CRM pipeline for project and contract deals — leads, stages, branded PDF quotations and follow-ups — running alongside the dealer field beat, on one customer record." },
      { pain: "See movement and control credit", how: "Trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so real movement and recovery stay visible." },
    ],
    workflow: [
      { title: "Run a site demo", body: "The rep visits a site, logs a geo-stamped visit with photos, runs a demo and records what the applicator specifies." },
      { title: "Work the dealer beat", body: "A counter visit and an order for the right product and pack at current prices, captured offline and synced." },
      { title: "Advance the project", body: "Update the project-pipeline stage, send a branded PDF quotation, and set the next follow-up so the contract doesn't go cold." },
      { title: "Collect & watch movement", body: "Record collections against outstanding; primary/secondary and the Ageing report show what's actually reaching sites." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a shop — but not applicator engagement, site-demo logging, a project pipeline, or catalogue ordering with credit control. For this trade, that's most of the job." },
      { label: "Not an enterprise FMCG SFA", body: "Construction chemicals aren't fast-moving packaged goods — they're technical, demo-led and project-heavy. Enterprise CPG platforms are built and priced for the opposite." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM handles the project pipeline but has no native field visits, site-demo photos, catalogue ordering, trade levels or dealer outstanding — you'd stitch several tools together." },
    ],
    outcomes: [
      { title: "Demo-led selling becomes a real pipeline", body: "Which sites were visited, which demos were run and what got specified — on the record, feeding the project pipeline." },
      { title: "The applicator network becomes visible", body: "Who your reps engaged and what they specify — not lost in a rep's memory when they leave." },
      { title: "Projects stop slipping", body: "Every project and contract has a stage, a quotation and a next step — no waterproofing tender quietly forgotten." },
      { title: "Credit & secondary under control", body: "Outstanding self-calculates, credit limits gate the next order, and you see what's actually reaching sites." },
    ],
    cockpit: {
      header: "Today · Pune sites",
      headerBadge: "Site demo logged",
      sectionTitle: "One field app for site + counter",
      sectionBody: "The applicator who specified, the site demo with photos, the project in the pipeline and the dealer's outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "FlaskConical", title: "Tile Adhesive T3 · 20kg", subtitle: "80 bags · captured offline", value: "₹22,400" },
        { icon: "Camera", title: "Waterproofing site demo", subtitle: "Photos + spec logged", badge: "Applicator specified your brand", badgeTone: "primary" },
        { icon: "UserRound", title: "Kadam · Applicator", subtitle: "Specifies your brand · engagement logged", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹1.9L", sub: "/ ₹2.4L limit", fillPct: 79 },
      chips: [
        { label: "Project deal", sub: "Quotation sent · follow-up Wed", tone: "gradient" },
        { label: "Secondary ✓ reaching site", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Applicator/contractor engagement (customer type)", "Geo-tagged site visits & demo photos", "Full catalogue & pack ordering", "CRM pipeline for project & contract sales", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO runs your field sales — applicator engagement, site demos, orders, project pipeline and credit. It can note product batches on orders, but it is not a batch-traceability/QC-lab or shelf-life compliance system; it works alongside whatever quality and batch-control process your plant already runs.",
    faqs: [
      { q: "Is OZZO built for construction chemicals and adhesive companies?", a: "Yes. OZZO handles what makes this trade hard — applicator/contractor engagement, technical site-demo logging with photos, catalogue and pack ordering, project sales and dealer credit — in one field-sales system." },
      { q: "Can OZZO capture site demos and specification?", a: "Yes. Geo-stamped site visits with photos record which demos were run and what the applicator specified, turning demo-led selling into a visible pipeline instead of memory." },
      { q: "Does OZZO handle project sales for waterproofing and contracts?", a: "Yes. A CRM pipeline tracks each project or contract through stages with branded PDF quotations and follow-ups, running alongside the dealer field beat on one customer record." },
      { q: "Can OZZO help engage applicators and contractors?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, track what they specify, and link it to the dealers and projects they influence, so specification-led demand becomes visible." },
    ],
  },

  // ─────────────────────────────────────────── PLYWOOD & LAMINATES
  {
    slug: "plywood-laminates-companies",
    sector: "Building Materials",
    name: "Plywood & Laminates Companies",
    icon: "SquareStack",
    metaTitle: "Field sales software for plywood & laminates companies | OZZO",
    metaDescription:
      "OZZO is built for plywood, laminate & veneer brands: the carpenter who decides the brand, a design-led catalogue (grades, designs, thickness, sizes), dealer credit & secondary-sales visibility, project sales and trade schemes — one field-sales system.",
    keywords: ["plywood company software", "laminate distribution software", "field sales software for plywood", "plywood dealer management software", "laminates SFA India", "carpenter engagement software", "veneer distributor software"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for plywood & laminates companies",
      body: [
        "OZZO is a sales force automation (SFA) software for plywood, laminate and veneer companies that combines counter order booking across a design-led catalogue (grades, designs, thicknesses, sizes), carpenter engagement, dealer credit and secondary-sales visibility, and a project pipeline in one field app. Reps book the exact grade, design and size at current prices — offline if needed — so the right SKU reaches dispatch and the carpenter gets what they specified.",
        "It is also field-force tracking (WFA) and salesman location tracking software for plywood and laminate field teams: selfie + GPS attendance, live location, beat routes and geo-tagged dealer and carpenter visits. So \"SFA for plywood companies\", \"dealer management software for laminates\" and \"salesman tracking software\" are one system. Order booking, carpenter engagement, secondary sales, trade schemes and GPS field tracking make OZZO a practical plywood and laminate distribution and sales-tracking system.",
      ],
      keywords: ["SFA for plywood companies", "sales force automation software for laminate distribution", "plywood dealer management software", "salesman tracking software for plywood distributors", "order booking app for laminate distributors", "carpenter engagement software", "field sales software for plywood and laminates"],
    },
    tagline: "The carpenter picks your brand, laminates sell on design, and dealers move stock on credit. OZZO is built for exactly that.",
    intro:
      "Plywood and laminates are a carpenter-led, design-driven trade: the carpenter decides the brand, laminates sell on a long tail of designs and finishes, grades get confused and counterfeited, and product moves through dealers on credit alongside project and furniture-maker sales. OZZO handles the whole motion in one system.",
    stats: [
      { value: "Carpenter-led", label: "carpenters & contractors specify the plywood/laminate brand", note: "Industry reality" },
      { value: "Design-led", label: "laminates sell on 100s of designs, finishes and thicknesses" },
      { value: "On credit", label: "dealers and retailers carry your stock and pay after they sell" },
    ],
    painPoints: [
      { title: "The carpenter decides your brand", body: "Carpenters and contractors specify which plywood and laminate actually get used — which is why leaders (CenturyPly, Greenlam, Merino) run heavy carpenter-loyalty programmes. A field team that only calls on dealers is invisible to the people who create demand." },
      { title: "A design-led catalogue with a long tail", body: "Laminates run to hundreds of designs, finishes, thicknesses and sizes; plywood spans grades (MR, BWR, BWP, marine) and sizes. Capturing the exact design/grade and size at the counter — accurately, at the current price — is genuinely hard." },
      { title: "Grade confusion and counterfeiting", body: "Plywood grades are easy to misrepresent, and counterfeiting hurts trusted brands. A well-served, well-engaged channel and clear catalogue ordering protect brand integrity and repeat purchase." },
      { title: "Dealer credit and secondary sales you can't see", body: "Product moves company → dealer → retailer on credit, but primary billing tells you nothing about whether it's reaching the counter and the carpenter. Slow secondary movement becomes tomorrow's destocking." },
      { title: "Project and furniture-maker sales alongside retail", body: "Beyond the dealer beat there's project business (builders, interior contractors) and volume furniture-makers/OEMs needing a pipeline, quotations and follow-ups. Most field tools do one motion, not both." },
    ],
    solutions: [
      { pain: "Engage the carpenter & contractor network", how: "Model carpenters and contractors as their own customer type; log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealer they buy from — so demand generation is visible." },
      { pain: "Take design-led orders right", how: "A full catalogue by grade, design, thickness and size with customer-specific price lists, so a rep captures the exact SKU and current price at the counter, offline if there's no signal." },
      { pain: "Protect the brand with an engaged channel", how: "Geo-stamped visits and a well-served, scheme-backed dealer and carpenter network keep the trusted channel strong — the practical defence against grade confusion and counterfeits." },
      { pain: "See secondary sales and control credit", how: "Trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits enforced before the next order, and an Ageing report — so you see real movement and recover on time." },
      { pain: "Run projects and the retail beat in one system", how: "A CRM pipeline for project, furniture-maker and institutional deals — leads, stages, branded PDF quotations and follow-ups — running alongside the dealer field beat, on one customer record." },
    ],
    workflow: [
      { title: "Engage the carpenter", body: "The rep meets a carpenter or contractor, logs a geo-stamped visit and the products they specify, and enrols them in a scheme." },
      { title: "Work the dealer beat", body: "A counter visit and an order for the right grade, design and size at current prices, with the scheme applied — captured offline." },
      { title: "Advance a project deal", body: "Update a project-pipeline stage, send a branded PDF quotation, and set the next follow-up so nothing goes cold." },
      { title: "Collect & watch movement", body: "Record the collection against outstanding; primary/secondary and the Ageing report show what's actually reaching the counter." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep visited a shop — but not a design/grade catalogue, carpenter engagement, a project pipeline, or dealer outstanding. For a plywood or laminate brand, that's most of the job." },
      { label: "Not an enterprise FMCG SFA", body: "Plywood and laminates aren't fast-moving packaged goods — they're carpenter-led, design-driven and project-heavy. Enterprise CPG platforms are built and priced for the opposite." },
      { label: "Not a CRM with field bolted on", body: "A pure CRM handles the project pipeline but has no native field tracking, catalogue ordering, trade levels or dealer outstanding — you'd stitch three tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "The carpenter network becomes visible", body: "Who your reps engaged, what they specify, and which schemes they're in — on the record, not in someone's head." },
      { title: "Accurate design & grade orders", body: "The exact grade, design and size at the current price — fewer wrong dispatches and returns on a long-tail catalogue." },
      { title: "Credit & secondary under control", body: "Outstanding self-calculates, credit limits gate the next order, and you finally see what's reaching the counter." },
      { title: "Projects stop slipping", body: "Every project and furniture-maker deal has a stage, a quotation and a next step — no opportunity quietly forgotten." },
    ],
    cockpit: {
      header: "Today · Yamunanagar + Delhi",
      headerBadge: "Carpenter scheme live",
      sectionTitle: "One field app, built for the counter",
      sectionBody: "The right grade and design, current prices, the carpenter who specifies your brand, the scheme and the dealer's outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "SquareStack", title: "BWP Ply 18mm · 8×4", subtitle: "40 sheets · captured offline", value: "₹96,000" },
        { icon: "Percent", title: "Carpenter loyalty scheme", subtitle: "Points on specified brand", badge: "Carpenter enrolled · scheme active", badgeTone: "primary" },
        { icon: "UserRound", title: "Rakesh · Carpenter", subtitle: "Specifies your brand · engagement logged", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹4.1L", sub: "/ ₹5L limit", fillPct: 82 },
      chips: [
        { label: "Project deal", sub: "Quotation sent · follow-up Tue", tone: "gradient" },
        { label: "Secondary ✓ reaching counter", sub: "primary vs secondary tracked", tone: "glass" },
      ],
    },
    modules: ["Carpenter/contractor engagement (customer type)", "Catalogue by grade, design, thickness & size", "Customer-specific price lists & schemes", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "CRM pipeline for project & OEM sales", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO can model and track your carpenter/contractor engagement — as a customer type, with geo-stamped visits, schemes and history — but it is not a consumer-style gamified carpenter-rewards app with points redemption, nor a design-visualiser/catalogue-display app. It gives your field team the visibility and tools to run those relationships and orders.",
    faqs: [
      { q: "Is OZZO built for plywood and laminate companies?", a: "Yes. OZZO handles what makes this trade hard — a design/grade-led catalogue, carpenter engagement, dealer credit and secondary-sales visibility, trade schemes and a CRM pipeline for project and furniture-maker sales — in one system." },
      { q: "Can OZZO handle our long tail of laminate designs and plywood grades?", a: "Yes. A full catalogue by grade, design, thickness and size plus customer-specific price lists means reps capture the exact SKU and current price at the counter — offline if there's no signal." },
      { q: "Does OZZO help engage carpenters and contractors?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealers they buy from. It isn't a gamified consumer rewards app, but it makes the influencer relationship visible and manageable." },
      { q: "Can OZZO manage both dealer sales and project/OEM sales?", a: "Yes. The dealer/retail field beat and a CRM pipeline for project and furniture-maker deals (stages, branded quotations, follow-ups) run in one system on one customer record." },
    ],
  },

  // ─────────────────────────────────────────── PHARMACEUTICAL (MR)
  {
    slug: "pharmaceutical-companies",
    sector: "Pharma & Healthcare",
    name: "Pharmaceutical Companies",
    icon: "Pill",
    metaTitle: "Field sales software for pharmaceutical companies & MR teams | OZZO",
    metaDescription:
      "OZZO is built for pharma field teams: geo-stamped doctor calls, real MR attendance and territory coverage, chemist & stockist orders, secondary visibility, tour/DA expense claims and outstanding — one MR reporting and field-tracking system.",
    keywords: ["pharma field sales software", "MR reporting software India", "medical representative tracking app", "pharma SFA India", "chemist stockist management software", "pharmaceutical CRM India", "MR expense claim software"],
    seo: {
      heading: "Sales force automation (SFA) & MR tracking for pharmaceutical companies",
      body: [
        "OZZO is a sales force automation (SFA) and MR reporting software for pharmaceutical companies that combines geo-stamped doctor calls, chemist and stockist order booking, territory and beat coverage, tour/DA expense claims and outstanding in one field app. Doctors, chemists and stockists are each modelled as their own customer type, so a medical representative's day — the calls made, the products detailed, the orders booked and the expenses claimed — is captured on the record instead of reconstructed from memory at month end.",
        "It is also field-force tracking (WFA) and medical-representative location tracking software: selfie + GPS attendance, live location, beat routes and geo-tagged doctor, chemist and stockist visits. So \"SFA for pharma\", \"MR reporting software\", \"medical representative tracking app\" and \"chemist stockist management software\" are one system. Doctor-call capture, real coverage, secondary visibility, expense claims and GPS tracking make OZZO a practical pharmaceutical field-force and sales-tracking system.",
      ],
      keywords: ["SFA for pharma companies", "MR reporting software", "medical representative tracking app", "pharma field force automation India", "chemist stockist order booking app", "doctor visit tracking software", "MR tour expense claim software"],
    },
    tagline: "Demand is created in the doctor's chamber, billed to a stockist, and dispensed at a chemist. OZZO makes that whole chain visible.",
    intro:
      "Pharma field sales is uniquely indirect: an MR details a doctor, the prescription reaches a chemist, and the money flows through a stockist. Primary billing tells you almost nothing about what's really happening. OZZO captures the doctor call, the chemist and stockist coverage, the secondary movement, the tour claims and the outstanding — in one system.",
    stats: [
      { value: "Doctor-led", label: "prescriptions are created in the chamber — the chemist only dispenses them", note: "Industry reality" },
      { value: "MR field force", label: "a large, dispersed team reporting calls that HQ cannot independently verify" },
      { value: "C&F → stockist → chemist", label: "a multi-tier channel on credit where secondary movement is invisible from billing" },
    ],
    painPoints: [
      { title: "Demand is created in the doctor's chamber", body: "The prescription — not the counter — drives your sales, but the doctor call is the least visible part of the business. Which doctors were actually met, what was detailed and what was committed usually lives only in an MR's memory until the monthly report." },
      { title: "MR reporting that can't be verified", body: "'Met twelve doctors today' is easy to type and impossible to check. Without a geo-stamp and a timestamp, call reports drift towards fiction, and field discipline quietly erodes across a large dispersed team." },
      { title: "Stockist billing hides chemist reality", body: "Primary billing to the C&F or stockist says nothing about whether product is reaching chemists and being dispensed. Slow secondary movement becomes tomorrow's expiry returns and destocking." },
      { title: "Tour, travel and DA claims are a paper mountain", body: "Every MR submits monthly travel, daily-allowance and expense claims that managers must reconcile against where the rep actually was — a slow, disputed, entirely manual process in most companies." },
      { title: "Territory, HQ and doctor-list discipline", body: "Overlapping territories, stale doctor lists and unclear HQ ownership cause duplicated effort and missed coverage, and roll-ups by geography stop being trustworthy." },
    ],
    solutions: [
      { pain: "Make the doctor call visible", how: "Model doctors as their own customer type and log geo-stamped calls with custom fields — speciality, products detailed, commitment and the next call — so the most important visit in pharma is finally on the record, not in someone's head." },
      { pain: "Real coverage, not reported coverage", how: "Selfie + GPS attendance, live location and beat routes mean 'met the doctor' means the phone was actually there, and the whole territory gets worked in order." },
      { pain: "See chemist & stockist movement", how: "C&F, stockist and chemist as trade levels with automatic primary/secondary tagging, self-calculating outstanding, credit limits before the next order and an Ageing report — so you see real movement and recover on time." },
      { pain: "Digitise tour & DA claims", how: "MRs submit expense claims from the phone against configurable expense types and rate tiers; managers approve on the web, with the Expense Report and the rep's own GPS-stamped visit history alongside." },
      { pain: "Hold territory discipline", how: "Territory master and reporting hierarchy keep MRs to their HQ and areas and roll performance up by geography — so coverage and accountability are clear." },
    ],
    workflow: [
      { title: "Punch in & start the beat", body: "Selfie + GPS attendance, then the day's doctor and chemist beat runs in order." },
      { title: "Detail the doctor", body: "A geo-stamped call logged against the doctor, with products detailed and the next call set." },
      { title: "Cover chemist & stockist", body: "Chemist and stockist visits with orders captured offline, and collections recorded against outstanding." },
      { title: "Claim & close the day", body: "Submit the day's travel and DA claim from the phone; the manager approves it against a real, GPS-stamped day." },
    ],
    whyNotOthers: [
      { label: "Not just an MR tracking app", body: "A pure tracker shows where a rep went — but not the doctor-call record, chemist and stockist orders, secondary movement, outstanding or expense claims that a pharma business actually runs on." },
      { label: "Not an enterprise pharma suite", body: "Large pharma platforms bundle e-detailing, closed-loop marketing and deep compliance modules, priced for national field forces. OZZO gives growing pharma companies the field discipline, coverage, ordering and claims — affordably." },
      { label: "Not a plain CRM", body: "A CRM records contacts but has no GPS attendance, geo-stamped doctor calls, beat routes, offline stockist orders, trade levels or expense claims — you'd stitch several tools together. OZZO is one." },
    ],
    outcomes: [
      { title: "The doctor call is finally on the record", body: "Who was met, what was detailed and what's next — visible to the manager the same day, not at month end." },
      { title: "Coverage becomes a fact", body: "GPS-stamped calls and beat routes turn 'covered my territory' from a claim into evidence." },
      { title: "Secondary and credit under control", body: "Primary vs secondary shows what's reaching chemists, while outstanding self-calculates and credit limits gate the next order." },
      { title: "Claims stop being a monthly argument", body: "Expense claims arrive digitally and are approved against a real, GPS-stamped day in the field." },
    ],
    cockpit: {
      header: "Today · Jaipur HQ",
      headerBadge: "MR beat live",
      sectionTitle: "One field app for the whole MR day",
      sectionBody: "The doctor call, the chemist order, the stockist's outstanding and the day's travel claim — captured on one screen in the field, online or off.",
      rows: [
        { icon: "Stethoscope", title: "Dr. Iyer · Physician", subtitle: "Call logged · 3 products detailed", check: true, tone: "success" },
        { icon: "ShoppingCart", title: "Sharma Medicals · Chemist", subtitle: "Order captured offline", value: "₹14,200" },
        { icon: "ReceiptText", title: "Travel + DA claim", subtitle: "Submitted from the phone", badge: "Approved against GPS-stamped day", badgeTone: "primary" },
      ],
      meter: { label: "Stockist outstanding", value: "₹2.7L", sub: "/ ₹3.2L limit", fillPct: 84 },
      chips: [
        { label: "Coverage ✓ GPS-stamped", sub: "beat worked in order", tone: "gradient" },
        { label: "Secondary tracked", sub: "stockist vs chemist", tone: "glass" },
      ],
    },
    modules: ["Doctors/chemists/stockists as customer types", "Geo-stamped calls with custom fields", "Selfie + GPS attendance & live location", "Beat routes & territory master", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Expense claims (types, rate tiers, approval)", "Offline order capture"],
    honestNote:
      "OZZO runs the pharma field motion — doctor calls, coverage, chemist and stockist orders, secondary, outstanding and expense claims. It is NOT an e-detailing / closed-loop-marketing tool with digital visual aids, and it is NOT a regulatory system: it does not manage CDSCO or UCPMP compliance, drug-licence registers, serialisation / track-and-trace, or auditable physician-sample accountability. Batch and expiry can be captured as custom fields for your own reference, but formal traceability stays with your existing compliance system.",
    faqs: [
      { q: "Is OZZO built for pharmaceutical companies and MR teams?", a: "Yes. OZZO captures the pharma field day end to end — geo-stamped doctor calls, chemist and stockist coverage and orders, secondary visibility, outstanding and tour/DA expense claims — with selfie + GPS attendance and beat routes, in one system." },
      { q: "Can OZZO be used for MR reporting and doctor-call tracking?", a: "Yes. Doctors are modelled as their own customer type and calls are geo-stamped with custom fields (speciality, products detailed, next call), so a medical representative's call report is captured on the spot and visible to managers the same day." },
      { q: "Does OZZO handle MR tour, travel and DA expense claims?", a: "Yes. MRs submit claims from the phone against configurable expense types and rate tiers, and managers approve them on the web — alongside the rep's own GPS-stamped visit history and the Expense Report." },
      { q: "Does OZZO do e-detailing or pharma regulatory compliance?", a: "No. OZZO is not an e-detailing/closed-loop-marketing tool, and it does not manage CDSCO or UCPMP compliance, drug-licence registers, serialisation/track-and-trace or auditable sample accountability. It runs your field sales, coverage, ordering, collections and claims around whatever compliance process you already have." },
    ],
  },

  // ─────────────────────────────────────────── SURGICAL & MEDICAL DEVICES
  {
    slug: "surgical-medical-devices-companies",
    sector: "Pharma & Healthcare",
    name: "Surgical & Medical Device Companies",
    icon: "Scissors",
    metaTitle: "Field sales software for surgical & medical device companies | OZZO",
    metaDescription:
      "OZZO is built for surgical and medical-device brands: surgeon & clinician engagement, long-cycle hospital and institutional deals, distributor coverage, branded quotations, and long hospital credit cycles under control — one field-sales system.",
    keywords: ["surgical products distribution software", "medical device field sales software", "hospital sales CRM India", "surgical distributor management software", "medical device SFA India", "institutional sales software healthcare"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for surgical & medical device companies",
      body: [
        "OZZO is a sales force automation (SFA) software for surgical and medical-device companies that combines surgeon and clinician engagement, a CRM pipeline for long-cycle hospital and institutional deals, distributor and dealer coverage, branded PDF quotations and long-credit outstanding control in one field app. Reps log geo-stamped hospital and surgeon visits, move each institutional deal through stages, and book distributor orders offline at current prices.",
        "It is also field-force tracking (WFA) and salesman location tracking software for medical-device field teams: selfie + GPS attendance, live location and geo-tagged hospital, surgeon and distributor visits. So \"SFA for medical devices\", \"hospital sales CRM\" and \"surgical distributor management software\" are one system. Clinician engagement, institutional pipeline, distributor coverage, quotations and outstanding make OZZO a practical surgical and medical-device sales-tracking system.",
      ],
      keywords: ["SFA for medical devices", "surgical distributor management software", "hospital sales CRM India", "medical device field sales software", "institutional sales pipeline healthcare", "salesman tracking software for medical devices"],
    },
    tagline: "The surgeon specifies, the hospital committee buys, and the payment arrives months later. OZZO runs that whole long-cycle motion.",
    intro:
      "Surgical and device selling is specification-led and institutional: a surgeon or clinician decides what they'll use, a hospital or purchase committee actually buys it, distributors carry the stock, and credit cycles run long. OZZO gives you clinician engagement, an institutional pipeline, distributor coverage and credit control in one system.",
    stats: [
      { value: "Surgeon-led", label: "the clinician specifies the device or consumable the hospital then buys", note: "Industry reality" },
      { value: "Long-cycle", label: "institutional and tender deals run for months through committees and approvals" },
      { value: "Long credit", label: "hospital and institutional payment cycles stretch outstanding well beyond retail trade" },
    ],
    painPoints: [
      { title: "The surgeon specifies — the hospital buys", body: "A clinician's preference decides which device or consumable is used, but the purchase runs through procurement, committees and approvals. You have to win two very different audiences, and most field tools see neither clearly." },
      { title: "Long-cycle institutional and tender deals", body: "Hospital and institutional business runs for months across documents, approvals and revisions. Without stages, quotations and disciplined follow-up, deals stall silently and get chased on WhatsApp." },
      { title: "Two channels at once — hospitals and distributors", body: "Direct institutional business runs alongside a distributor and dealer network carrying stock in the market. Coverage, orders and credit for the channel need managing while the long deals grind on." },
      { title: "Long hospital credit cycles", body: "Institutional payments arrive long after supply, so outstanding stretches and ages. Without live outstanding, credit limits and an Ageing view, recovery slips and exposure builds quietly." },
      { title: "A technical, specification-heavy catalogue", body: "Sizes, specifications, variants and consumable ranges make accurate quoting and ordering hard, and an error on a specification-led product is expensive to unwind." },
    ],
    solutions: [
      { pain: "Engage surgeons & clinicians", how: "Model surgeons, clinicians and departments as their own customer type; log geo-stamped engagement visits with custom fields for what they specify, and keep that history alongside the hospital and distributor it flows through." },
      { pain: "Run the institutional pipeline properly", how: "A CRM pipeline for hospital, institutional and tender deals — leads, stages, branded PDF quotations and next-step follow-ups — so long-cycle business has structure instead of memory." },
      { pain: "Cover the distributor channel too", how: "Geo-tagged distributor and dealer visits with offline order capture from a full specification catalogue at current prices — the channel motion running beside the institutional one, on one customer record." },
      { pain: "Control long-cycle credit", how: "Trade levels, self-calculating outstanding, credit limits enforced before the next order and an Ageing report — built for credit that ages far longer than retail trade." },
      { pain: "Quote accurately from a technical catalogue", how: "A catalogue by category, size and specification with customer-specific price lists feeds branded PDF quotations, so a specification-led quote goes out right the first time." },
    ],
    workflow: [
      { title: "Engage the clinician", body: "A geo-stamped visit to the surgeon or department, logging what they specify and the next step." },
      { title: "Advance the institutional deal", body: "Move the hospital or tender deal a stage, send a branded PDF quotation and set the follow-up." },
      { title: "Cover the distributor", body: "A distributor visit with an offline order from the specification catalogue at current prices." },
      { title: "Collect on long credit", body: "Record collections against outstanding; credit limits and the Ageing report keep long institutional exposure visible." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a hospital — but not clinician engagement, an institutional pipeline, specification quoting, distributor orders or long-cycle outstanding." },
      { label: "Not an enterprise FMCG SFA", body: "Devices are specification-led, institutional and long-cycle — the opposite of fast-moving packaged goods that enterprise CPG platforms are built and priced for." },
      { label: "Not a plain CRM", body: "A CRM runs the pipeline but has no field visits, GPS attendance, offline distributor orders, trade levels or self-calculating outstanding — you'd run two disconnected systems." },
    ],
    outcomes: [
      { title: "Clinician influence becomes visible", body: "Which surgeons your reps engaged and what they specify — feeding the institutional pipeline instead of living in memory." },
      { title: "Long deals stop stalling", body: "Every hospital and tender deal has a stage, a quotation and a next step, so months-long business keeps moving." },
      { title: "Both channels on one record", body: "Institutional business and the distributor beat run in one system, on one customer record and one login." },
      { title: "Long credit stays visible", body: "Outstanding self-calculates and the Ageing report keeps stretched institutional exposure in view, early enough to act." },
    ],
    cockpit: {
      header: "Today · Chennai hospitals",
      headerBadge: "Institutional pipeline",
      sectionTitle: "One field app for clinician + institution",
      sectionBody: "The surgeon who specified, the hospital deal in the pipeline, the distributor's order and long-cycle outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "Stethoscope", title: "Dr. Rao · Ortho surgeon", subtitle: "Engagement visit · specifies your range", check: true, tone: "success" },
        { icon: "Building2", title: "City Hospital · Tender", subtitle: "Quotation sent · committee review", badge: "Stage: Negotiation · follow-up Mon", badgeTone: "primary" },
        { icon: "ShoppingCart", title: "Surgical consumables", subtitle: "Distributor order · captured offline", value: "₹1,18,000" },
      ],
      meter: { label: "Institutional outstanding", value: "₹8.4L", sub: "/ ₹10L limit", fillPct: 84 },
      chips: [
        { label: "Ageing watch", sub: "long hospital credit cycle", tone: "gradient" },
        { label: "Quotation ✓ branded PDF", sub: "specification-led quote", tone: "glass" },
      ],
    },
    modules: ["Surgeon/clinician engagement (customer type)", "CRM pipeline for hospital & tender deals", "Branded PDF quotations", "Specification catalogue & price lists", "Geo-tagged hospital & distributor visits", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Offline order capture"],
    honestNote:
      "OZZO runs the field and commercial motion — clinician engagement, institutional pipeline, quotations, distributor orders and long-cycle outstanding. It does NOT integrate with government e-procurement/tender portals or hospital HIS/ERP systems, and it is NOT a UDI/serialisation, device-regulatory or consignment-stock-at-hospital inventory system. Batch or lot can be captured as custom fields for your own reference; formal traceability stays with your existing systems.",
    faqs: [
      { q: "Is OZZO built for surgical and medical device companies?", a: "Yes. OZZO handles specification-led, institutional selling — surgeon and clinician engagement, a CRM pipeline for hospital and tender deals with branded quotations, distributor coverage and orders, and long-cycle outstanding — in one system." },
      { q: "Can OZZO manage long hospital and tender sales cycles?", a: "Yes. Each institutional deal moves through pipeline stages with branded PDF quotations and next-step follow-ups, so months-long business has structure rather than living on WhatsApp and in memory." },
      { q: "Does OZZO handle the long credit cycles of hospital business?", a: "Yes. Self-calculating outstanding, credit limits enforced before the next order and an Ageing report keep institutional exposure visible early — credit that ages far longer than retail trade." },
      { q: "Does OZZO connect to tender portals or hospital systems?", a: "No. OZZO does not integrate with government e-procurement/tender portals or hospital HIS/ERP systems, and it is not a UDI/serialisation or consignment-inventory system. It runs your field engagement, pipeline, quotations, channel orders and collections alongside those." },
    ],
  },

  // ─────────────────────────────────────────── INJECTABLES & CRITICAL CARE
  {
    slug: "injectables-critical-care-companies",
    sector: "Pharma & Healthcare",
    name: "Injectables & Critical Care Companies",
    icon: "Syringe",
    metaTitle: "Field sales software for injectables & critical care companies | OZZO",
    metaDescription:
      "OZZO is built for injectable and critical-care pharma: hospital and institutional supply, a narrow high-value stockist network, batch & expiry captured in the field, long credit cycles and real coverage — one field-sales system.",
    keywords: ["injectable pharma distribution software", "critical care pharma field sales", "hospital supply pharma software", "institutional pharma sales software", "injectables stockist management", "pharma SFA hospital channel"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for injectables & critical care",
      body: [
        "OZZO is a sales force automation (SFA) software for injectable and critical-care pharmaceutical companies that combines hospital and institutional supply, a narrow high-value stockist network, offline order capture, batch and expiry capture as custom fields, and long-cycle outstanding in one field app. Reps cover hospitals, institutions and stockists with geo-stamped visits, book orders on the spot, and record collections against a self-calculating outstanding.",
        "It is also field-force tracking (WFA) and salesman location tracking software for injectable field teams: selfie + GPS attendance, live location and geo-tagged hospital and stockist visits. So \"SFA for injectables\", \"hospital supply pharma software\" and \"institutional pharma sales software\" are one system. Institutional coverage, stockist orders, near-expiry visibility and credit control make OZZO a practical injectables and critical-care sales-tracking system.",
      ],
      keywords: ["SFA for injectables", "injectable pharma distribution software", "critical care pharma field sales software", "hospital supply pharma software", "institutional pharma sales software", "stockist management software injectables"],
    },
    tagline: "High-value consignments, a narrow stockist network, short-dated stock and hospital credit that ages. OZZO keeps that chain visible.",
    intro:
      "Injectables and critical care is a high-stakes, low-margin-for-error trade: consignments are valuable, the stockist network is narrow, batch and expiry matter enormously, and hospital credit stretches. OZZO gives you institutional coverage, stockist ordering, near-expiry visibility and credit control in one field system.",
    stats: [
      { value: "Hospital-led", label: "demand sits with hospitals, ICUs and institutions rather than retail counters", note: "Industry reality" },
      { value: "Short-dated risk", label: "batch and expiry decide whether high-value stock sells or becomes a return" },
      { value: "Narrow, high-value", label: "a small stockist network carrying expensive consignments on long credit" },
    ],
    painPoints: [
      { title: "The channel is institutional, not retail", body: "Demand sits with hospitals, ICUs, nursing homes and institutional buyers rather than a wide chemist counter. Coverage means a small number of high-value relationships, each of which matters disproportionately." },
      { title: "Batch and expiry decide the margin", body: "High-value injectable stock that goes short-dated at a stockist becomes a return and a write-off. Spotting near-expiry stock in the field — while it can still be moved — is the difference between a sale and a loss." },
      { title: "Narrow network, concentrated exposure", body: "With few stockists carrying expensive consignments, one slow-paying or over-stocked partner is a material problem. Credit exposure is concentrated in a way retail trade never is." },
      { title: "Long institutional credit cycles", body: "Hospital and institutional payments arrive well after supply. Outstanding ages, and without live visibility and limits, exposure builds quietly across a small number of large balances." },
      { title: "Cold-chain and handling discipline", body: "Many injectables require controlled storage and careful handling through the chain. Handling failures destroy product value, and field teams need the visit discipline to check and record what they find." },
    ],
    solutions: [
      { pain: "Cover institutions and stockists properly", how: "Hospitals, institutions and stockists as their own customer types with geo-stamped visits and custom fields — so a narrow, high-value network is covered deliberately, not casually." },
      { pain: "Spot near-expiry while it can still move", how: "Capture batch and expiry as custom fields on orders and visits, so short-dated stock at a stockist is recorded in the field and can be acted on before it becomes a return." },
      { pain: "Control concentrated credit exposure", how: "Self-calculating outstanding, credit limits enforced before the next order and an Ageing report — so a small number of large, ageing balances stay visible early." },
      { pain: "Run institutional deals with structure", how: "A CRM pipeline for hospital and institutional supply — stages, branded PDF quotations and follow-ups — alongside the stockist beat on one customer record." },
      { pain: "Hold field discipline on handling checks", how: "Geo-stamped visits with photos and custom fields let reps record storage and handling observations at the stockist or hospital, so issues are logged when they're seen." },
    ],
    workflow: [
      { title: "Cover the institution", body: "A geo-stamped hospital or institution visit, with the supply requirement and next step recorded." },
      { title: "Check stock & expiry", body: "At the stockist, record batch/expiry observations and photograph anything short-dated, before it ages out." },
      { title: "Book the order", body: "Capture the order offline at current prices against the stockist's credit limit." },
      { title: "Collect & watch ageing", body: "Record collections against outstanding; the Ageing report keeps concentrated institutional exposure in view." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a hospital — but not institutional supply pipeline, stockist orders, near-expiry capture or concentrated credit exposure." },
      { label: "Not an enterprise FMCG SFA", body: "Injectables are high-value, institutional and expiry-critical — nothing like fast-moving packaged goods that enterprise CPG platforms are built and priced for." },
      { label: "Not a cold-chain monitoring platform", body: "Temperature monitoring needs data loggers and IoT sensors. OZZO runs the commercial field motion around your cold chain — it does not replace the monitoring hardware or its records." },
    ],
    outcomes: [
      { title: "A narrow network covered deliberately", body: "Every high-value hospital, institution and stockist relationship is visited on a plan and on the record." },
      { title: "Short-dated stock caught in time", body: "Near-expiry observations are captured in the field, while the stock can still be moved rather than written off." },
      { title: "Concentrated credit stays visible", body: "Outstanding self-calculates and the Ageing report surfaces large ageing balances early, not at reconciliation." },
      { title: "Institutional supply has structure", body: "Hospital and institutional deals move through stages with quotations and follow-ups instead of drifting." },
    ],
    cockpit: {
      header: "Today · Hyderabad institutions",
      headerBadge: "Near-expiry check",
      sectionTitle: "One field app for a high-value chain",
      sectionBody: "The hospital supply requirement, the stockist's short-dated stock, the order and the ageing balance — captured on one screen in the field, online or off.",
      rows: [
        { icon: "Syringe", title: "Critical-care injectable", subtitle: "Stockist order · captured offline", value: "₹2,40,000" },
        { icon: "FileWarning", title: "Near-expiry flagged", subtitle: "Batch/expiry noted + photo", badge: "Short-dated · move before ageing out", badgeTone: "amber" },
        { icon: "Building2", title: "Apex Hospital · Supply", subtitle: "Requirement logged · quotation sent", check: true, tone: "success" },
      ],
      meter: { label: "Institutional outstanding", value: "₹11.2L", sub: "/ ₹13L limit", fillPct: 86 },
      chips: [
        { label: "Ageing watch", sub: "concentrated exposure", tone: "gradient" },
        { label: "Handling check ✓ logged", sub: "photo on the visit", tone: "glass" },
      ],
    },
    modules: ["Hospitals/institutions/stockists as customer types", "Geo-tagged visits with photos & custom fields", "Batch/expiry capture as custom fields", "CRM pipeline for institutional supply", "Outstanding, credit limits & Ageing", "Branded PDF quotations", "Offline order capture"],
    honestNote:
      "OZZO runs the commercial field motion — institutional and stockist coverage, orders, near-expiry observations, quotations and credit. It is explicitly NOT a cold-chain temperature-monitoring system (that needs data loggers/IoT sensors and their own records), and NOT a regulatory system: no serialisation/track-and-trace, no CDSCO compliance, no auditable batch traceability. Batch and expiry are captured as custom fields for your own commercial reference only.",
    faqs: [
      { q: "Is OZZO built for injectable and critical-care pharma companies?", a: "Yes. OZZO covers the institutional channel — hospitals, institutions and a narrow high-value stockist network — with geo-stamped visits, offline orders, batch/expiry capture as custom fields, an institutional pipeline and long-cycle credit control, in one system." },
      { q: "Does OZZO monitor cold chain and storage temperature?", a: "No. Temperature monitoring requires data loggers and IoT sensors, which OZZO does not provide or replace. Reps can record storage and handling observations with photos and custom fields on a visit, but the cold-chain monitoring record stays with your dedicated system." },
      { q: "Can OZZO help with near-expiry and short-dated stock?", a: "Yes, commercially. Batch and expiry can be captured as custom fields on orders and visits, so short-dated stock at a stockist is recorded in the field early enough to be moved — but this is for your own reference, not regulatory traceability." },
      { q: "How does OZZO handle long hospital credit cycles?", a: "Self-calculating outstanding, credit limits enforced before the next order and an Ageing report keep a small number of large, ageing institutional balances visible early rather than at reconciliation." },
    ],
  },

  // ─────────────────────────────────────────── MEDICAL EQUIPMENT & DIAGNOSTICS
  {
    slug: "medical-equipment-diagnostics-companies",
    sector: "Pharma & Healthcare",
    name: "Medical Equipment & Diagnostics Companies",
    icon: "Microscope",
    metaTitle: "Field sales software for medical equipment & diagnostics companies | OZZO",
    metaDescription:
      "OZZO is built for medical equipment and diagnostic-device brands: the long demo-and-finance capital sale, recurring consumable & reagent reorders, service visits tracked to closure, dealer coverage and outstanding — one sales and field-service system.",
    keywords: ["medical equipment field sales software", "diagnostic device distribution software", "medical device dealer management", "glucometer distribution software", "lab equipment sales CRM India", "medical equipment service visit app"],
    seo: {
      heading: "Sales force automation (SFA) & field service tracking for medical equipment & diagnostics",
      body: [
        "OZZO is a sales force automation (SFA) and field-service software for medical equipment and diagnostic-device companies that combines a CRM pipeline for the long demo-and-finance capital sale, recurring consumable and reagent reorders, service visits tracked to closure, dealer coverage and outstanding in one app. The machine is sold once but the strips, reagents and consumables recur — so OZZO keeps both motions on the same customer record.",
        "It is also field-force tracking (WFA) and salesman location tracking software for equipment field teams: selfie + GPS attendance, live location and geo-tagged hospital, lab, clinic and dealer visits. So \"SFA for medical equipment\", \"diagnostic device distribution software\" and \"field service app\" are one system. Capital-sale pipeline, consumable reorders, service visits, dealer coverage and GPS tracking make OZZO a practical medical-equipment sales, service and tracking system.",
      ],
      keywords: ["SFA for medical equipment", "diagnostic device distribution software", "medical equipment dealer management software", "field service app for medical devices", "consumable reorder tracking software", "lab equipment sales CRM India"],
    },
    tagline: "The machine sells once; the strips, reagents and service sell forever. OZZO runs the capital sale and the recurring pull together.",
    intro:
      "Diagnostics and medical equipment is really two businesses on one customer: a long, demo-led, financed capital sale, and the recurring consumable, reagent and service revenue that follows it for years. OZZO runs both — the pipeline, the reorders, the service visits and the credit — on one record.",
    stats: [
      { value: "Demo-led", label: "capital equipment is a considered, financed sale won on demonstration and trust", note: "Industry reality" },
      { value: "Recurring pull", label: "strips, reagents and consumables — not the machine — carry the long-run revenue" },
      { value: "Uptime sells", label: "service responsiveness decides the reference and the next machine" },
    ],
    painPoints: [
      { title: "The capital sale is long, demo-led and financed", body: "A hospital, lab or clinic buying a machine evaluates, demos, compares and arranges finance over months. Without stages, quotations and follow-up discipline, a considered buyer simply goes quiet." },
      { title: "The recurring consumable pull is invisible", body: "The real revenue is strips, reagents and consumables reordering for years after installation — but most companies can't see which installed customer is reordering on cycle and which has quietly switched or stopped." },
      { title: "Service uptime decides the next sale", body: "A machine down at a lab is a reference lost. Service calls handled slowly, or not tracked to closure, cost far more than the visit — they cost the next purchase and the word-of-mouth." },
      { title: "You don't know your own installed base", body: "Who has which machine, installed when, on what consumable cycle — this is usually scattered across spreadsheets and individuals, so proactive reorder and service follow-up is impossible." },
      { title: "Two channels — direct and dealer", body: "Direct hospital and lab business runs alongside a dealer and distributor network, each needing coverage, orders and credit control, while the long capital deals grind on." },
    ],
    solutions: [
      { pain: "Run the demo-and-finance capital sale", how: "A CRM pipeline for high-value equipment deals — stages, demo scheduling, branded PDF quotations, finance follow-up and next-step reminders — so no considered buyer goes quiet." },
      { pain: "Make the recurring reorder visible", how: "Consumable and reagent reorders booked as offline counter orders against the same customer record, so reorder behaviour after installation is finally on the system and slipping cycles are visible." },
      { pain: "Track service visits to closure", how: "Log service visits and tasks against the customer and machine and track them to closure — the responsiveness that wins the next sale, captured instead of assumed." },
      { pain: "Record the installed base", how: "Capture machine, installation and consumable-cycle details as custom fields on the customer, so your installed base lives in the system rather than a spreadsheet." },
      { pain: "Run both channels and control credit", how: "Geo-tagged hospital, lab, clinic and dealer visits with trade levels, self-calculating outstanding, credit limits and an Ageing report — both motions on one login." },
    ],
    workflow: [
      { title: "Demo the machine", body: "A geo-stamped visit to the lab or hospital, demo logged, deal moved a stage with a branded quotation." },
      { title: "Install & record", body: "Capture the installed machine and its consumable cycle as custom fields on the customer record." },
      { title: "Keep the reorder flowing", body: "Consumable and reagent reorders captured offline at current prices, so the recurring pull is visible." },
      { title: "Service & retain", body: "Service visits and tasks logged against the machine and tracked to closure — uptime protects the next sale." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a lab — but not a demo-and-finance pipeline, consumable reorder visibility, service-visit closure or installed-base records." },
      { label: "Not an enterprise FMCG SFA", body: "Equipment is a considered, financed, service-led sale with recurring consumables — nothing like fast-moving packaged goods, and priced for a very different business." },
      { label: "Not a full service / warranty ERP", body: "OZZO isn't a workshop, AMC-contract, warranty-claim or parts-inventory ERP — it runs the pipeline, reorders, service visits, coverage and outstanding alongside whatever back end you use." },
    ],
    outcomes: [
      { title: "No considered buyer goes quiet", body: "Every capital deal has a stage, a demo, a quotation and a next step — months-long sales keep moving." },
      { title: "The recurring pull becomes visible", body: "You can finally see which installed customers are reordering consumables on cycle and which are slipping." },
      { title: "Service closes, and uptime sells", body: "Service visits and tasks are tracked to closure, protecting the reference that wins the next machine." },
      { title: "Your installed base is on the system", body: "Machine, installation and consumable-cycle details live on the customer record, not in a spreadsheet." },
    ],
    cockpit: {
      header: "Today · Bengaluru labs",
      headerBadge: "Installed base live",
      sectionTitle: "One app for the machine and everything after it",
      sectionBody: "The demo-and-finance deal, the reagent reorder, the service visit and the dealer's outstanding — on one screen in the field, online or off.",
      rows: [
        { icon: "Microscope", title: "Analyser · demo scheduled", subtitle: "Finance follow-up set", badge: "Stage: Demo → Quotation sent", badgeTone: "primary" },
        { icon: "Repeat", title: "Reagent reorder · monthly", subtitle: "Captured offline · on cycle", value: "₹36,500" },
        { icon: "Wrench", title: "Service visit · closed", subtitle: "Logged against the machine", check: true, tone: "success" },
      ],
      meter: { label: "Dealer outstanding", value: "₹3.6L", sub: "/ ₹4.5L limit", fillPct: 80 },
      chips: [
        { label: "Installed base ✓ recorded", sub: "machine + consumable cycle", tone: "gradient" },
        { label: "Uptime protects the next sale", sub: "service tracked to closure", tone: "glass" },
      ],
    },
    modules: ["CRM pipeline (demos, quotations, finance follow-up)", "Consumable & reagent reorder capture (offline)", "Service visits & tasks tracked to closure", "Installed-base details as custom fields", "Geo-tagged hospital, lab & dealer visits", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "Branded PDF quotations"],
    honestNote:
      "OZZO runs the field motion — capital-sale pipeline, consumable reorders, service visits and tasks, coverage and outstanding. It is NOT a workshop, AMC-contract-management, warranty-claim or spare-parts-inventory ERP, and NOT a device calibration/QC, UDI or regulatory system. Installed-base details are captured as custom fields on the customer, which is a practical record — not a full asset-management module.",
    faqs: [
      { q: "Is OZZO built for medical equipment and diagnostic device companies?", a: "Yes. OZZO runs both sides of the business — the long demo-and-finance capital sale through a CRM pipeline, and the recurring consumable/reagent reorders, service visits and dealer coverage that follow — on one customer record." },
      { q: "Can OZZO track consumable and reagent reorders after installation?", a: "Yes. Reorders are booked as offline counter orders against the same customer record, so reorder behaviour after installation is visible and slipping cycles can be acted on — the recurring revenue that matters most." },
      { q: "Does OZZO handle service visits and AMC?", a: "OZZO logs service visits and tasks against the customer and machine and tracks them to closure. It is not an AMC-contract-management, warranty-claim or parts-inventory ERP — it runs the field service motion alongside whatever back-end system you use." },
      { q: "Can OZZO record our installed base?", a: "Yes, practically. Machine, installation and consumable-cycle details are captured as custom fields on the customer record, so your installed base lives in the system rather than a spreadsheet — though it is not a full asset-management module." },
    ],
  },

  // ─────────────────────────────────────────── AYURVEDIC & NUTRACEUTICAL
  {
    slug: "ayurvedic-nutraceutical-companies",
    sector: "Pharma & Healthcare",
    name: "Ayurvedic & Nutraceutical Companies",
    icon: "Leaf",
    metaTitle: "Field sales software for ayurvedic & nutraceutical companies | OZZO",
    metaDescription:
      "OZZO is built for ayurvedic, herbal and nutraceutical brands: a dual OTC-retail and practitioner-ethical motion, wide chemist & general-trade coverage, reorder and secondary visibility, trade schemes, expiry returns and outstanding — one field-sales system.",
    keywords: ["ayurvedic company field sales software", "nutraceutical distribution software", "herbal products distributor management", "ayurvedic SFA India", "nutraceutical retail execution software", "wellness products field sales"],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for ayurvedic & nutraceutical companies",
      body: [
        "OZZO is a sales force automation (SFA) software for ayurvedic, herbal and nutraceutical companies that combines wide chemist and general-trade coverage, offline order booking, practitioner engagement for the ethical range, trade schemes, near-expiry returns and outstanding in one field app. These brands sell two ways at once — OTC pull at the counter and practitioner-recommended ethical lines — and OZZO keeps both on one customer record.",
        "It is also field-force tracking (WFA) and salesman location tracking software for wellness field teams: selfie + GPS attendance, live location, beat routes and geo-tagged retailer and practitioner visits. So \"SFA for ayurvedic companies\", \"nutraceutical distribution software\" and \"salesman tracking software\" are one system. Retail coverage, reorder and secondary visibility, schemes, expiry returns and GPS tracking make OZZO a practical ayurvedic and nutraceutical sales-tracking system.",
      ],
      keywords: ["SFA for ayurvedic companies", "nutraceutical distribution software", "herbal products distributor management software", "ayurvedic retail execution software", "order booking app for nutraceutical distributors", "salesman tracking software for wellness brands"],
    },
    tagline: "Half your range sells off the shelf, half on a practitioner's word — across a huge, fragmented counter universe. OZZO runs both.",
    intro:
      "Ayurvedic and nutraceutical brands run a genuinely dual motion: an OTC range that lives or dies on retail execution across a vast chemist and general-trade universe, and an ethical range recommended by practitioners. Add herbal shelf-life and scheme-driven trade, and you need one system for all of it. That's OZZO.",
    stats: [
      { value: "Dual motion", label: "OTC shelf pull plus a practitioner-recommended ethical range", note: "Industry reality" },
      { value: "Wide & fragmented", label: "chemists, general trade, wellness stores and modern trade all at once" },
      { value: "Shelf-life", label: "herbal and nutraceutical formulations date — slow movers become returns" },
    ],
    painPoints: [
      { title: "Two motions, one field team", body: "The OTC range needs classic retail execution — coverage, assortment, schemes — while the ethical range depends on practitioners recommending it. Most tools handle one motion, so half the business runs on memory." },
      { title: "A vast, fragmented counter universe", body: "Chemists, general trade, wellness stores and modern trade, spread thin. Covering it productively — an assortment check and an order, not just a face shown — is the whole game and very hard to verify." },
      { title: "The reorder blindspot", body: "Primary billing to the distributor says nothing about whether product is moving off the shelf and reordering. Slow secondary quietly becomes near-expiry stock and returns." },
      { title: "Shelf-life and near-expiry returns", body: "Herbal and nutraceutical formulations date. Slow-moving stock at a counter ages into a return and a write-off unless it's spotted on the visit while it can still be moved." },
      { title: "Scheme-driven, seasonal trade", body: "Constant retailer schemes, slabs and seasonal or festive spikes. Applying the right scheme at the counter and knowing who's enrolled is a full-time job on paper." },
    ],
    solutions: [
      { pain: "Run OTC retail execution properly", how: "Beat routes and productive coverage with must-stock assortment checks and offline order capture, so every call produces an order or a flagged gap — not just a visit." },
      { pain: "Engage practitioners for the ethical range", how: "Model ayurvedic practitioners and wellness professionals as their own customer type, with geo-stamped engagement visits and custom fields for what they recommend — alongside the counters that stock it." },
      { pain: "See reorders and secondary", how: "Trade levels with automatic primary/secondary tagging, so you see whether product is actually reordering at the counter rather than just billed to the distributor." },
      { pain: "Catch near-expiry before it's a write-off", how: "Record near-expiry and damage returns against the outlet on the visit, and capture batch/expiry as custom fields — so ageing stock is caught early, not at reconciliation." },
      { pain: "Apply schemes without paperwork", how: "Central schemes and slabs apply at the counter automatically with enrolment tracked per retailer, and outstanding self-calculates with credit limits and an Ageing report." },
    ],
    workflow: [
      { title: "Work the counter beat", body: "Geo-stamped retailer visit with a must-stock assortment check and an offline order at current prices." },
      { title: "Catch ageing stock", body: "Record near-expiry or damaged stock at the outlet so it can be moved or returned before it's a write-off." },
      { title: "Engage the practitioner", body: "A geo-stamped visit to an ayurvedic practitioner, logging what they recommend for the ethical range." },
      { title: "Collect & see reorders", body: "Record collections against outstanding; primary vs secondary shows what's genuinely reordering." },
    ],
    whyNotOthers: [
      { label: "Not just a field-tracking app", body: "A tracker shows a rep reached a shop — but not assortment, reorder and secondary visibility, practitioner engagement, expiry returns or outstanding." },
      { label: "Not an enterprise CPG SFA", body: "Enterprise platforms with AI shelf-audit are built and priced for national brands. OZZO gives growing ayurvedic and nutraceutical brands the execution and visibility that matter, affordably." },
      { label: "Not a plain CRM", body: "A CRM records contacts but has no beat routes, GPS attendance, offline counter orders, assortment checks, trade levels or self-calculating outstanding." },
    ],
    outcomes: [
      { title: "Both motions on one record", body: "OTC retail execution and practitioner engagement run in one system, so no half of the business is invisible." },
      { title: "Coverage becomes productive", body: "Every call carries an assortment check and an order or a flagged gap — not just a visit marked done." },
      { title: "Reorders and ageing stock are visible", body: "Primary vs secondary shows real movement, and near-expiry is caught on the visit while it can still be moved." },
      { title: "Schemes land and credit holds", body: "The right scheme applies at the counter, outstanding self-calculates and credit limits gate the next order." },
    ],
    cockpit: {
      header: "Today · Lucknow beat",
      headerBadge: "Assortment check",
      sectionTitle: "One field app for shelf and practitioner",
      sectionBody: "The counter order and assortment gap, the near-expiry catch, the practitioner who recommends your ethical range and the retailer's outstanding — on one screen, online or off.",
      rows: [
        { icon: "Leaf", title: "Herbal immunity range", subtitle: "Must-stock · order offline", value: "₹8,900" },
        { icon: "FileWarning", title: "Near-expiry spotted", subtitle: "Recorded at the outlet", badge: "Move now or it's a return", badgeTone: "amber" },
        { icon: "UserRound", title: "Vaidya Sharma · Practitioner", subtitle: "Recommends ethical range", check: true, tone: "success" },
      ],
      meter: { label: "Retailer outstanding", value: "₹42,000", sub: "/ ₹50k limit", fillPct: 84 },
      chips: [
        { label: "Productive call ✓", sub: "assortment + order", tone: "gradient" },
        { label: "Reorder ✓ tracked", sub: "primary vs secondary", tone: "glass" },
      ],
    },
    modules: ["Beat routes & productive coverage", "Must-stock assortment & offline orders", "Practitioner engagement (customer type)", "Near-expiry & damage returns at the outlet", "Trade schemes & price lists", "Trade levels & primary/secondary", "Outstanding, credit limits & Ageing", "WhatsApp CRM & Daily Sales Report"],
    honestNote:
      "OZZO runs your field execution — coverage, assortment, orders, practitioner engagement, returns, schemes, secondary and outstanding. It is NOT an AYUSH or FSSAI regulatory-compliance system, and not a lot-traceability or licensing-register tool. Batch and expiry can be captured as custom fields for your own commercial reference; formal traceability and compliance stay with your existing process.",
    faqs: [
      { q: "Is OZZO built for ayurvedic and nutraceutical companies?", a: "Yes. OZZO runs the dual motion these brands have — OTC retail execution across a wide chemist and general-trade universe, and practitioner engagement for the ethical range — with orders, schemes, near-expiry returns, secondary visibility and outstanding in one system." },
      { q: "Can OZZO handle both our OTC range and our practitioner-recommended range?", a: "Yes. Retailers and practitioners are modelled as separate customer types, so counter coverage and practitioner engagement are tracked distinctly but live on one system and one customer record." },
      { q: "Does OZZO help with near-expiry stock and returns?", a: "Yes. Reps record near-expiry and damage returns against the outlet on the visit and can capture batch/expiry as custom fields, so ageing herbal stock is caught while it can still be moved rather than written off at reconciliation." },
      { q: "Does OZZO handle AYUSH or FSSAI compliance?", a: "No. OZZO is not a regulatory-compliance or lot-traceability system. It runs your field sales, coverage, ordering, returns, schemes and collections alongside whatever compliance process you already have." },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

/** Industries grouped by sector, for the hub and sibling cross-linking. */
export function industriesBySector(): Record<string, Industry[]> {
  return industries.reduce<Record<string, Industry[]>>((acc, ind) => {
    (acc[ind.sector] ||= []).push(ind);
    return acc;
  }, {});
}
