/**
 * Parent-category ("sector") overview pages for /industries/[slug].
 *
 * These are the hub-and-spoke PARENTS above the individual sub-industry
 * pages in industries.ts. A sector page ranks for the broad term
 * ("field sales software for building materials") and links down to every
 * sub-industry spoke, which is exactly the topical-authority structure that
 * wins both Google organic and AI-search recommendations.
 *
 * CONTRACT:
 *   - `name` MUST exactly match the `sector` string on the Industry entries
 *     it groups (that string is the join key used to list its spokes).
 *   - `slug` must NOT collide with any Industry slug (both resolve at
 *     /industries/[slug]).
 *   - Same honesty bar as the rest of the site: no competitor/price claims,
 *     every OZZO claim a shipped capability.
 */

import { industries, type Industry } from "@/lib/industries";

export type Sector = {
  /** URL slug: /industries/<slug> (must not clash with an Industry slug). */
  slug: string;
  /** Display name — MUST equal the Industry.sector it groups. */
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
  /** Premium hero image (optional; gradient hero fallback when absent). */
  image?: string;
  imageAlt?: string;
  /** What ties this whole sector together in the field (3–5 shared truths). */
  themes: { title: string; body: string }[];
  /** Keyword-targeted SFA/WFA SEO section for the broad sector term. */
  seo?: { heading: string; body: string[]; keywords: string[] };
  faqs: { q: string; a: string }[];
};

export const sectors: Sector[] = [
  // ─────────────────────────────────────────── BUILDING MATERIALS
  {
    slug: "building-materials",
    name: "Building Materials",
    icon: "Hammer",
    metaTitle: "Field sales software for building materials companies | OZZO",
    metaDescription:
      "OZZO is field-sales software for building-materials brands — paints, tiles & sanitaryware, wires & cables, adhesives & construction chemicals, plywood & laminates. Engage the influencer who specifies your brand, run the dealer beat and project pipeline together, and control credit — in one system.",
    keywords: ["building materials field sales software", "building materials SFA India", "building materials dealer management software", "field sales software for construction materials", "building materials distribution software", "SFA for building materials"],
    tagline: "Building materials sell on the tradesperson's word, through a dealer channel on credit, and by long-cycle projects. OZZO runs all three in one system.",
    intro:
      "Whether it's paint, pipe, tile, wire, adhesive or plywood, building-materials brands share one field-sales reality: an influencer — the painter, plumber, electrician, applicator, carpenter, architect — decides your brand, a deep dealer channel moves stock on credit, and big volume comes from projects. OZZO is built for exactly that.",
    themes: [
      { title: "The influencer decides your brand", body: "Painters, plumbers, electricians, applicators, carpenters, architects and contractors specify what actually gets used on the wall, the floor or the site. OZZO models them as their own customer type with geo-stamped engagement visits, schemes and history — so demand generation is finally visible, not stuck in a rep's head." },
      { title: "The dealer channel runs on credit", body: "Product moves company → distributor → dealer → retailer on credit. Trade levels, automatic primary/secondary tagging, self-calculating outstanding, credit limits and an Ageing report show what's really reaching the counter and keep recovery on time." },
      { title: "Projects run alongside the retail beat", body: "Long-cycle project and institutional business (builders, developers, contractors) needs a pipeline, branded quotations and follow-ups — run in the same system as the dealer beat, on one login and one customer record." },
      { title: "Prices and catalogues are complex", body: "Resin- and copper-linked prices that move constantly, huge SKU ranges, multiple units (piece, coil, metre, kg, bundle), designs, grades and packs. OZZO pushes new prices to the field instantly and captures the exact SKU, unit and price at the counter — offline if there's no signal." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for building-materials companies",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software built for building-materials companies — paint, pipe, tile and sanitaryware, wire and cable, adhesive and construction-chemical, and plywood and laminate brands. It combines counter and site order booking, influencer engagement (painter, plumber, electrician, applicator, carpenter, architect), dealer credit and secondary-sales visibility, trade schemes and a CRM project pipeline in one field app — with selfie + GPS attendance, live location and geo-tagged visits.",
        "So \"SFA for building materials\", \"dealer management software\", \"order booking app\" and \"salesman tracking software\" are one system, not four. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for building materials", "sales force automation software for building materials", "building materials dealer management software", "salesman tracking software for building materials", "order booking app for building materials distributors", "field sales software for construction materials"],
    },
    faqs: [
      { q: "Is OZZO built for building-materials companies?", a: "Yes. OZZO is field-sales software for building-materials brands — paints, pipes, tiles & sanitaryware, wires & cables, adhesives & construction chemicals, and plywood & laminates. It engages the influencer who specifies your brand, runs the dealer beat and project pipeline together, and controls credit — in one system." },
      { q: "Which building-materials industries does OZZO support?", a: "Dedicated pages exist for paint companies, tiles & sanitaryware, electricals/wires & cables, adhesives & construction chemicals, plywood & laminates, and pipes & fittings — each with the specific pain points and OZZO capabilities of that trade." },
      { q: "Can OZZO handle both dealer sales and project sales?", a: "Yes. The dealer/retail field beat and a CRM pipeline for long-cycle project and institutional deals (stages, branded quotations, follow-ups) run in one system on one customer record — most tools do only one." },
      { q: "Does OZZO help engage tradespeople like painters, electricians and carpenters?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they specify, and keep their history alongside the dealers they buy from, so influencer-driven demand becomes visible and manageable." },
    ],
  },

  // ─────────────────────────────────────────── AUTO, LUBRICANTS & ELECTRICALS
  {
    slug: "auto-lubricants-electricals",
    name: "Auto, Lubricants & Electricals",
    icon: "Car",
    metaTitle: "Field sales software for auto, lubricants & electricals companies | OZZO",
    metaDescription:
      "OZZO is field-sales software for the automotive aftermarket and electricals trade — auto components & spares, lubricants & oils, tyres, batteries, and lighting & appliances. Engage the mechanic who recommends your brand, control dealer credit on high-value stock and see what's really reordering — in one system.",
    keywords: ["automotive aftermarket field sales software", "auto parts distribution software", "lubricant dealer management software", "tyre distribution software", "battery distribution software", "consumer durables SFA India"],
    tagline: "The mechanic recommends, the dealer carries the capital, and the counter decides. OZZO runs the whole aftermarket motion in one system.",
    intro:
      "Whether it's a spare part, a litre of oil, a tyre, a battery or an LED batten, this trade shares a pattern: a mechanic, electrician or retailer recommends the brand, a dealer channel carries high-value stock on credit, and what's really reordering at the counter is invisible from primary billing. OZZO is built for exactly that.",
    themes: [
      { title: "The trade recommends your brand", body: "Mechanics, garages, electricians and retailers decide what actually gets fitted or sold — the end customer usually accepts the recommendation. OZZO models them as their own customer type with geo-stamped engagement visits, schemes and history, so the recommendation is a managed relationship rather than a hope." },
      { title: "High-value stock on dealer credit", body: "Tyres, batteries and parts tie up serious dealer capital, and outstanding builds fast. Trade levels, self-calculating outstanding, credit limits enforced before the next order and an Ageing report keep exposure visible early." },
      { title: "Complex catalogues and moving prices", body: "Part numbers, grades and viscosities, sizes and patterns, packs from a litre to a barrel — plus base-oil and copper-linked costs that move rate cards. OZZO pushes new prices to the field instantly and captures the exact SKU, unit and price at the counter, offline if needed." },
      { title: "Secondary movement and dead stock", body: "Primary billing says nothing about what's reordering. Automatic primary/secondary tagging shows genuine movement at the counter, so slow lines and dead stock surface before more capital-heavy stock is pushed out." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for the automotive aftermarket & electricals",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software for the automotive aftermarket and electricals trade — auto components and spare parts, lubricants and oils, tyres, batteries, and lighting and electrical appliances. It combines counter order booking across complex catalogues, mechanic and electrician engagement, trade schemes, secondary-sales visibility, fleet and institutional pipelines and dealer credit control in one field app, with selfie + GPS attendance, live location and geo-tagged visits.",
        "So \"SFA for auto parts\", \"lubricant dealer management software\", \"tyre distribution software\", \"battery distribution software\" and \"salesman tracking software\" are one system, not five. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for automotive aftermarket", "auto parts distribution software", "lubricant dealer management software", "tyre dealer management software", "battery dealer management software", "salesman tracking software for auto distributors"],
    },
    faqs: [
      { q: "Is OZZO built for the automotive aftermarket and electricals trade?", a: "Yes. OZZO covers auto components and spare parts, lubricants and oils, tyres, batteries, and lighting and electrical appliances — with mechanic and electrician engagement, complex catalogue ordering, trade schemes, secondary visibility and dealer credit control in one system." },
      { q: "Which industries does OZZO support in this sector?", a: "Dedicated pages exist for auto components & spare parts, lubricants & oils, tyres, batteries, and lighting & electrical appliances — each with the specific pain points and OZZO capabilities of that trade." },
      { q: "Does OZZO help engage mechanics, garages and electricians?", a: "Yes — model them as their own customer type, log geo-stamped engagement visits, run schemes tied to what they fit or recommend, and keep their history alongside the dealers they buy from, so influencer-driven demand becomes visible and manageable." },
      { q: "Can OZZO control credit on high-value dealer stock?", a: "Yes. Self-calculating outstanding, credit limits enforced before the next order and an Ageing report are built for the fast-building exposure that tyres, batteries and parts create at a dealer." },
    ],
  },

  // ─────────────────────────────────────────── PHARMA & HEALTHCARE
  {
    slug: "pharma-healthcare",
    name: "Pharma & Healthcare",
    icon: "Stethoscope",
    metaTitle: "Field sales software for pharma & healthcare companies | OZZO",
    metaDescription:
      "OZZO is field-sales software for pharma & healthcare — pharmaceutical/MR teams, surgical & medical devices, injectables & critical care, medical equipment & diagnostics, ayurvedic & nutraceutical. Geo-stamped calls, institutional pipelines, stockist orders, expense claims and credit control in one system.",
    keywords: ["pharma field sales software", "healthcare field sales software India", "MR reporting software", "medical device sales software", "pharma SFA India", "healthcare distributor management software"],
    tagline: "In healthcare the person who decides is rarely the person who pays. OZZO makes that whole chain — clinician, institution, channel — visible.",
    intro:
      "Pharma and healthcare selling is indirect by nature: a doctor, surgeon or practitioner creates the demand, a hospital, stockist or chemist actually buys, and payment arrives on a long credit cycle. Whether you sell prescription brands, surgical devices, injectables, diagnostic machines or nutraceuticals, OZZO makes that chain visible in one system.",
    themes: [
      { title: "The clinician creates demand — someone else pays", body: "Doctors, surgeons and practitioners specify or prescribe, while hospitals, stockists and chemists buy. OZZO models each as its own customer type with geo-stamped visits and custom fields, so the most important conversation in healthcare selling is on the record rather than in a rep's memory." },
      { title: "Field reporting has to be verifiable", body: "Large, dispersed field teams report calls HQ cannot independently check. Selfie + GPS attendance, live location, beat routes and geo-stamped visits make coverage evidence instead of a claim — and tour/DA expense claims get approved against a real day." },
      { title: "Credit cycles run long", body: "Hospital and institutional payments arrive well after supply, and exposure concentrates in a few large balances. Self-calculating outstanding, credit limits enforced before the next order and an Ageing report keep it visible early." },
      { title: "Compliance stays with your systems", body: "OZZO is deliberately not a regulatory platform: no CDSCO/UCPMP compliance, serialisation or track-and-trace, cold-chain temperature monitoring or e-detailing. Batch and expiry are captured as custom fields for commercial reference, and OZZO runs the field motion around whatever compliance process you already have." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for pharma & healthcare companies",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software for pharma and healthcare companies — pharmaceutical and MR field forces, surgical and medical-device brands, injectable and critical-care suppliers, medical equipment and diagnostics, and ayurvedic and nutraceutical brands. It combines geo-stamped doctor, surgeon and practitioner visits, chemist and stockist order booking, CRM pipelines for hospital and institutional deals, tour/DA expense claims and long-cycle outstanding in one field app, with selfie + GPS attendance and live location.",
        "So \"SFA for pharma\", \"MR reporting software\", \"medical representative tracking app\", \"hospital sales CRM\" and \"healthcare distributor management software\" are one system, not five. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for pharma", "pharma field force automation India", "MR reporting software", "medical representative tracking app", "healthcare distributor management software", "hospital sales CRM India"],
    },
    faqs: [
      { q: "Is OZZO built for pharma and healthcare companies?", a: "Yes. OZZO covers pharmaceutical/MR field forces, surgical and medical devices, injectables and critical care, medical equipment and diagnostics, and ayurvedic and nutraceutical brands — with geo-stamped clinician visits, channel orders, institutional pipelines, expense claims and credit control in one system." },
      { q: "Which pharma & healthcare industries does OZZO support?", a: "Dedicated pages exist for pharmaceutical companies (MR teams), surgical & medical device companies, injectables & critical care, medical equipment & diagnostics, and ayurvedic & nutraceutical companies — each with the specific pain points and OZZO capabilities of that trade." },
      { q: "Can OZZO be used for MR reporting and doctor-call tracking?", a: "Yes. Doctors are modelled as their own customer type and calls are geo-stamped with custom fields, so a medical representative's call report is captured on the spot, with selfie + GPS attendance, beat routes and digital tour/DA expense claims." },
      { q: "Does OZZO handle pharma regulatory compliance or cold chain?", a: "No. OZZO does not manage CDSCO/UCPMP compliance, drug-licence registers, serialisation/track-and-trace, auditable sample accountability, or cold-chain temperature monitoring (which needs data loggers and IoT sensors). Batch and expiry can be captured as custom fields for commercial reference only, and OZZO runs the field motion alongside your compliance systems." },
    ],
  },

  // ─────────────────────────────────────────── PIPES & FITTINGS
  {
    slug: "pipes-fittings",
    name: "Pipes & Fittings",
    icon: "Layers",
    metaTitle: "Field sales software for pipe & fittings companies | OZZO",
    metaDescription:
      "OZZO is field-sales software for pipe & fittings brands — CPVC/PVC/uPVC, HDPE, stainless-steel and cast-iron. Manage huge multi-unit SKU catalogues, push resin-linked price changes to the field, engage plumbers, control dealer credit and run project sales — in one system.",
    keywords: ["pipe company field sales software", "pipe fittings SFA India", "pipe dealer management software", "PVC CPVC pipe distribution software", "field sales software for pipe manufacturers", "SFA for pipe companies"],
    tagline: "Pipes sell on the plumber's word, a 15,000-SKU catalogue and a resin price that never sits still. OZZO is built for that.",
    intro:
      "Pipe and fittings brands run a huge multi-unit catalogue, resin-linked prices that move constantly, a plumber and contractor influence network, and dealer plus project sales at once. OZZO handles all of it — current prices in every rep's hand, multi-unit counter orders, plumber engagement and a project pipeline — in one system.",
    themes: [
      { title: "The plumber decides your brand", body: "Plumbers, contractors and masons specify which pipe brand actually gets used. OZZO models them as their own customer type with geo-stamped engagement visits and schemes, so demand generation is visible." },
      { title: "Huge multi-unit catalogues", body: "Sizes × pressure classes × a long tail of fittings, sold by the piece, bundle, metre and kilo. OZZO captures the exact SKU, unit and current price at the counter — offline if needed." },
      { title: "Resin-linked price volatility", body: "PVC and CPVC prices are crude-linked and move sharply. Update the price-list engine centrally and every rep quotes the new price instantly — no stale rate cards bleeding margin." },
      { title: "Dealer credit and project sales together", body: "A dealer beat on credit runs alongside long-cycle project and institutional sales. Trade levels, outstanding and an Ageing report control credit, while a CRM pipeline runs projects — on one record." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for pipe & fittings companies",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software for pipe and fittings companies — CPVC, PVC, uPVC, HDPE, stainless-steel and cast-iron. It combines multi-unit order booking, resin-linked price-list control, plumber and contractor engagement, dealer credit and secondary-sales visibility and a CRM project pipeline in one field app, with GPS attendance, live location and geo-tagged visits.",
        "So \"SFA for pipe companies\", \"pipe dealer management software\", \"order booking app for pipe distributors\" and \"salesman tracking software\" are one system. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for pipe companies", "sales force automation software for pipes", "pipe dealer management software", "salesman tracking software for pipe distribution", "order booking app for pipe distributors", "field sales software for pipe brands"],
    },
    faqs: [
      { q: "Is OZZO built for pipe and fittings companies?", a: "Yes. OZZO handles what makes pipe field sales hard — huge multi-unit SKU catalogues, resin-linked price changes pushed to the field, plumber/contractor engagement, dealer credit and secondary-sales visibility, and a CRM pipeline for project sales — in one system." },
      { q: "Which pipe industries does OZZO support?", a: "Dedicated pages exist for CPVC & PVC pipes, HDPE pipes, stainless-steel pipes and cast-iron pipes — each with the specific pain points and OZZO capabilities of that trade." },
      { q: "How does OZZO deal with resin price volatility?", a: "Update the price-list engine centrally and every rep quotes the new price instantly, so resin swings don't leave stale rate cards in the field. Trade schemes help move stock when dealers hesitate on price dips." },
    ],
  },

  // ─────────────────────────────────────────── AGRICULTURE
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: "Sprout",
    metaTitle: "Field sales software for agriculture & agri-input companies | OZZO",
    metaDescription:
      "OZZO is field-sales software for agri-input brands — seed, fertilizer, agrochemical/pesticide, animal feed, poultry, aquaculture and agri-equipment. Season-timed order capture, dealer outstanding and credit control, offline rural coverage and secondary-sales visibility — in one system.",
    keywords: ["agriculture field sales software", "agri-input SFA India", "agri dealer management software", "seed fertilizer pesticide distribution software", "field sales software for agriculture", "SFA for agri-input companies"],
    tagline: "Agri-input demand lives in a short season, moves through a deep dealer network on credit, and depends on reps reaching rural belts. OZZO is built for that.",
    intro:
      "Seed, fertilizer, agrochemical, feed and agri-equipment brands share one reality: seasonal demand, a credit-heavy dealer chain, rural coverage where signal is patchy, and secondary movement you can't see from billing. OZZO gives agri-input companies visibility and control over exactly that — without a heavy enterprise rollout.",
    themes: [
      { title: "Demand is seasonal and time-critical", body: "A season's demand is compressed into a narrow window. OZZO's offline-capable order capture gets the right product to the right dealer inside that window, even in low-signal rural belts." },
      { title: "The dealer chain runs on credit", body: "Distributors, dealers and sub-dealers carry stock on credit through the season. Trade levels, self-calculating outstanding, credit limits and an Ageing report make season-end recovery predictable, not a surprise." },
      { title: "Coverage must be real, not reported", body: "Selfie + GPS attendance, beat routes and geo-tagged visits mean 'reached the dealer' means the phone was actually there, and every territory truly gets worked." },
      { title: "Liquidation and secondary are invisible from billing", body: "Primary billing says nothing about whether product reached the farmer. Automatic primary/secondary tagging shows real liquidation — early warning on next season's returns." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for agriculture & agri-input companies",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software for agri-input companies — seed, fertilizer, agrochemical/pesticide, animal feed, poultry, aquaculture and agri-equipment. It combines season-timed offline order booking, dealer credit and outstanding control, trade schemes, territory management and secondary-sales visibility in one field app, with GPS attendance, live location and geo-tagged dealer visits.",
        "So \"SFA for agriculture\", \"agri dealer management software\", \"order booking app for agri-input distributors\" and \"salesman tracking app\" are one system. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for agriculture", "sales force automation software for agri-input", "agri dealer management software", "salesman tracking app for agriculture", "order booking app for agri-input distributors", "field sales software for agriculture"],
    },
    faqs: [
      { q: "Is OZZO built for agriculture and agri-input companies?", a: "Yes. OZZO handles what makes agri-input field sales hard — season-timed offline order capture, a credit-heavy dealer chain, real rural coverage, trade schemes and secondary-sales/liquidation visibility — in one system." },
      { q: "Which agriculture industries does OZZO support?", a: "Dedicated pages exist for seed companies, fertilizer distributors, agrochemical & pesticide companies, animal-feed manufacturers, poultry-feed integrators, aquaculture & fish feed, and agriculture equipment — each with the specific pain points and OZZO capabilities of that trade." },
      { q: "Does OZZO work offline in rural areas?", a: "Yes. Reps capture dealer orders, visits and collections in the field even with no signal; everything queues and syncs when connectivity returns — essential for rural agri-input coverage." },
    ],
  },

  // ─────────────────────────────────────────── FMCG & CONSUMER GOODS
  {
    slug: "fmcg-consumer-goods",
    name: "FMCG & Consumer Goods",
    icon: "ShoppingBag",
    metaTitle: "Field sales software for FMCG & consumer goods companies | OZZO",
    metaDescription:
      "OZZO is affordable field-sales software for regional & SME FMCG and consumer-goods brands — retail execution, must-stock assortment, reorder/secondary visibility, trade schemes, outstanding, CRM and WhatsApp in one system.",
    keywords: ["FMCG field sales software", "FMCG SFA India", "FMCG distributor management software", "retail execution software", "field sales software for consumer goods", "SFA for regional FMCG brands"],
    tagline: "FMCG lives or dies on retail execution across a wide outlet universe. OZZO gives regional and SME brands that execution — affordably.",
    intro:
      "For FMCG and consumer-goods brands, the game is coverage, must-stock assortment on the shelf, reorders that actually happen, schemes that land and secondary you can see — across a wide outlet universe. OZZO gives regional and SME brands enterprise-grade retail execution, with CRM and WhatsApp, in one affordable system.",
    themes: [
      { title: "Coverage and productive calls", body: "Beat routes, GPS attendance and geo-tagged visits make coverage real and every call productive — an assortment check and an order, not just a face-shown visit." },
      { title: "Assortment and reorders on the shelf", body: "Must-stock assortment checks flag out-of-stock lines at the counter, and automatic primary/secondary tagging shows whether product is actually reordering — the regional-brand blindspot." },
      { title: "Schemes and outstanding", body: "Central trade schemes and slabs apply at the counter, while self-calculating outstanding, credit limits and an Ageing report keep retailer credit under control." },
      { title: "CRM and WhatsApp in one", body: "Field sales, CRM and WhatsApp run together, so leads, follow-ups and customer messaging aren't a separate stack of tools and subscriptions." },
    ],
    seo: {
      heading: "Sales force automation (SFA) & field tracking for FMCG & consumer-goods companies",
      body: [
        "OZZO is a sales force automation (SFA) and field-force tracking (WFA) software for regional and SME FMCG and consumer-goods brands and distributors. It combines beat routes and productive coverage, must-stock assortment, offline order capture, reorder/secondary visibility, trade schemes and outstanding with CRM and WhatsApp in one affordable field app — with GPS attendance, live location and geo-tagged visits.",
        "So \"SFA for FMCG\", \"FMCG distributor management software\", \"order booking app\" and \"salesman tracking software\" are one system, not four separate subscriptions. Pick your sub-industry below to see the specific field-sales pressures of that trade and exactly how OZZO handles them.",
      ],
      keywords: ["SFA for FMCG", "sales force automation software for FMCG", "FMCG distributor management software", "salesman tracking software for FMCG", "order booking app for FMCG distributors", "retail execution software for regional brands"],
    },
    faqs: [
      { q: "Is OZZO built for FMCG and consumer-goods brands?", a: "Yes — especially regional and SME brands. OZZO handles retail execution across a wide outlet universe: coverage, must-stock assortment, reorder/secondary visibility, trade schemes and outstanding, with CRM and WhatsApp in one affordable system." },
      { q: "Which FMCG industries does OZZO support?", a: "Dedicated pages exist for food & beverage companies and FMCG companies, each with the specific retail-execution pain points and OZZO capabilities of that trade." },
      { q: "How does OZZO fix the 'retailers don't reorder' problem?", a: "Automatic primary/secondary tagging and outstanding show whether product is actually reaching and reordering at the retailer — the regional-brand blindspot — so you can act where reorders stall." },
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

export function sectorSlugs(): string[] {
  return sectors.map((s) => s.slug);
}

/** The sub-industry spokes that belong to a sector overview page. */
export function industriesInSector(sector: Sector): Industry[] {
  return industries.filter((i) => i.sector === sector.name);
}

/** Find the overview sector for a given sub-industry (for breadcrumbs/links). */
export function sectorForIndustry(industry: Industry): Sector | undefined {
  return sectors.find((s) => s.name === industry.sector);
}
