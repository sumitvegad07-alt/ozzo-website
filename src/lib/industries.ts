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
  /** The real, researched pain points of this sub-industry. */
  painPoints: IndustryPain[];
  /** How OZZO addresses each pain (kept honest and grounded). */
  solutions: IndustrySolution[];
  /** An industry-specific field-sales flow. */
  workflow: IndustryStep[];
  /** Key OZZO modules that matter most for this industry. */
  modules: string[];
  /** What OZZO complements but does NOT replace (honesty). */
  honestNote?: string;
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
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
    modules: ["Trade levels (distributor / dealer / sub-dealer)", "Outstanding, credit limits & Ageing", "Offline order capture", "Beat routes & territory", "Trade schemes & price lists", "Daily Sales Report"],
    honestNote:
      "OZZO manages field sales, dealer coverage and outstanding — it is not an accounting or a feed-formulation/production system. Because outstanding and stock self-calculate, most feed teams run it without a separate accounting bolt-on for the field side.",
    faqs: [
      { q: "How does OZZO help feed companies with the credit problem?", a: "It makes dealer and sub-dealer dues visible and controllable: outstanding self-calculates at every level, credit limits are enforced before the next order, and the Ageing report surfaces overdue accounts — turning ₹15–25 lakh of unrecovered dues from a guess into a managed number." },
      { q: "Does OZZO handle the dealer and sub-dealer chain?", a: "Yes. Classify customers into distributor, dealer and sub-dealer trade levels, with automatic primary/secondary tagging and outstanding tracked at each level of the chain." },
      { q: "Can OZZO work in low-connectivity rural areas?", a: "Yes. Orders, visits, attendance and collections all capture fully offline and sync automatically once the rep is back in signal." },
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
