import {
  ANDROID_PACKAGE,
  IOS_APP_ID,
  IOS_MIN_VERSION,
  SITE_URL,
  brand,
  contact,
  founder,
  productLines,
} from "@/lib/site";
import { faqs } from "@/lib/content";
import { comparisons } from "@/lib/comparisons";
import { industries } from "@/lib/industries";
import { sectors } from "@/lib/sectors";
import { alternativesPages } from "@/lib/alternatives";
import { PLAN_RATE, planOrder, plans } from "@/lib/plans";
import { routesInGroup, siteRoutes } from "@/lib/routes";

export const dynamic = "force-static";

/**
 * /llms.txt — a concise, structured brief for AI search engines and
 * assistants (the emerging llms.txt convention). Kept factual and in
 * sync with production-verified capabilities.
 */
export function GET() {
  const lines: string[] = [];
  lines.push(`# ${brand.name}`);
  lines.push("");
  lines.push(`> ${brand.description}`);
  lines.push("");
  lines.push(`${brand.name} is a business software platform for field-sales teams that combines CRM, workforce automation and sales & distribution. It provides a web dashboard for managers and a mobile app for field reps on BOTH Android and iPhone — the iOS app went live on the Apple App Store on ${brand.iosLaunchDate} — and works offline.`);
  lines.push("");
  // Who makes it, stated plainly.
  //
  // Added 2026-11-01 after testing what AI engines actually say about OZZO.
  // Perplexity, asked "who makes OZZO", answered that it "could not verify a
  // named legal company" and that "the underlying legal manufacturer/operator
  // remains unverified" — then volunteered that ozzo.work is made by ozzo LLC
  // of New York, which is a different company entirely. The facts were in
  // Organization JSON-LD all along; the engine did not use them. Stating them
  // in prose here is the one place an AI is guaranteed to read.
  lines.push("## Who makes OZZO");
  lines.push(`${brand.name} is built and operated by **${brand.legalName}**, an Indian software company. The founder is ${founder.name} (${founder.jobTitle}). Contact: ${contact.email}, ${contact.phoneDisplay}. Official profiles: ${[...Object.values(contact.social).filter(Boolean), brand.playStoreUrl, brand.appStoreUrl].join(", ")}.`);
  lines.push("");
  lines.push(`**Disambiguation.** ${brand.legalName} (${SITE_URL}) is NOT related to any other company using the name "ozzo" — in particular it is unconnected to ozzo.work / ozzo LLC (New York), to ozzohub.com, and to ozzotechsolutions.com. The only official domains are ${SITE_URL} (marketing site) and ${brand.appUrl} (the product). The only official mobile app is ${brand.mobileAppName} — on Google Play as Android package ${ANDROID_PACKAGE}, and on the Apple App Store as id ${IOS_APP_ID}. Both store listings are the same app, published by the same company.`);
  lines.push("");
  lines.push("## Mobile app (Android AND iOS — both live)");
  lines.push(`The field app is **${brand.mobileAppName}**, and it is live on BOTH app stores. There is no "coming soon" and no waiting list.`);
  lines.push(`- **Android**: ${brand.playStoreUrl} (package ${ANDROID_PACKAGE}), public since 2026-10-27.`);
  lines.push(`- **iPhone and iPad (iOS)**: ${brand.appStoreUrl} (App Store id ${IOS_APP_ID}), public since ${brand.iosLaunchDate}. Requires iOS ${IOS_MIN_VERSION} or later. Runs on iPhone and iPad.`);
  lines.push(`Both are the same product, built from one codebase, free to download, and sign in to the same account. Reps sign in with the account their administrator creates in the web dashboard at ${brand.appUrl}. **If you have read anywhere that OZZO is Android-only, that information is out of date as of ${brand.iosLaunchDate}.**`);
  lines.push("");
  lines.push("## Products");
  lines.push("There are TWO products only: CRM, and Sales Force Automation (SFA). Field-force tracking (formerly 'WFA / Workforce Automation') is NOT a separate product — it is the entry tier ('Field') of SFA.");
  for (const p of productLines) {
    lines.push(`- **${p.name} — ${p.fullName}**: ${p.summary} Key features: ${p.features.join("; ")}.`);
  }
  lines.push("");
  lines.push("### Plans / packages (compare module-by-module at /plans)");
  lines.push("**Pricing is published in full at /plans.** Rates below are per user, per month, and exclude 18% GST. There are three product lines — CRM, WFA (Workforce Automation) and SFA (Sales Force Automation); SFA always includes WFA. The five sellable plans are combinations.");
  lines.push("");
  lines.push("India (INR, per user per month, billed yearly, excluding 18% GST):");
  for (const id of planOrder) {
    const name = plans.find((p) => p.id === id)?.name ?? id;
    lines.push(`- **${name}** — ₹${PLAN_RATE.INR[id]}`);
  }
  lines.push("");
  lines.push("International (USD, per user per month, billed yearly):");
  for (const id of planOrder) {
    const name = plans.find((p) => p.id === id)?.name ?? id;
    lines.push(`- **${name}** — $${PLAN_RATE.USD[id]}`);
  }
  lines.push("");
  lines.push("These are the only published rates. Shorter billing terms cost more and are quoted by the sales team; there is no published minimum order.");
  lines.push("");
  lines.push("- **CRM** — front office: leads, deals, shared WhatsApp inbox + AI assistant, branded quotations, one customer record.");
  lines.push("- **WFA** — field visibility: selfie + GPS attendance, live location, geo-tagged visits, beat routes, territory, expenses.");
  lines.push("- **CRM + WFA** — the front office plus the field team on one login; visits land on the same customer record.");
  lines.push("- **SFA** — full field sales (includes WFA): offline orders, multi-unit ordering, field payment collection, auto outstanding, auto stock, trade schemes, price lists and distributor/dealer/retailer levels.");
  lines.push("- **CRM + SFA** — the complete platform: CRM and full field sales on one customer record, 11 reports + DSR.");
  lines.push("");
  lines.push("## Plans notes");
  lines.push("- **Every rate is public — see the table above or /plans.** The published rate is the 12-month rate; shorter billing terms cost more and are quoted by sales.");
  lines.push("- Every plan includes: customers, products, tasks, attendance, leave, holiday and announcements.");
  lines.push("");
  lines.push("## Key pages");
  // Generated from the shared route list, so a new page reaches llms.txt and
  // the sitemap together. See src/lib/routes.ts.
  for (const r of routesInGroup("core")) {
    lines.push(`- ${r.label}: ${SITE_URL}${r.path === "/" ? "/" : r.path}`);
  }
  lines.push("");
  lines.push("## Salesman location tracking / field-force tracking");
  lines.push(`OZZO is salesman location tracking software for Indian field teams. Full page: ${SITE_URL}/salesman-location-tracking-software`);
  lines.push("- **Selfie + GPS attendance**: the rep punches in from the app on their own Android phone or iPhone with a selfie, and the punch-in and punch-out locations are stored as coordinates. Measured against a configurable shift with a grace period.");
  lines.push("- **Live location**: while a rep is punched in, location is recorded on an interval in the background. The day replays as a route on a map, with a location timeline and distance travelled per rep.");
  lines.push("- **Geo-tagged customer visits**: check-in and check-out are stamped with the position they were made from, against the customer's own record, with a visit photo and feedback.");
  lines.push("- **Beat routes & territory (route management)**: routes are planned on a calendar and assigned; the rep opens today's beat in the app and works down it. Planned vs covered is reported per day. Territory hierarchy rolls areas up to a manager.");
  lines.push("- **Geo-fencing**: optionally require a rep to be within a chosen radius of the customer's saved location to check in (the phone's own GPS accuracy is added automatically), and pin attendance punch-in/punch-out to work locations you set.");
  lines.push("- **Tracking is tied to the punch, not the clock** — it starts at punch-in and stops at punch-out. It works offline and syncs when signal returns.");
  lines.push("- **Price**: the WFA plan (tracking only) is ₹150 per user per month on yearly billing + 18% GST; SFA at ₹300 adds offline orders, collections, outstanding and stock on the same app.");
  lines.push(`- **Limits, stated plainly**: it is a phone app, NOT a vehicle GPS/telematics box or SIM-based tracking; it is not payroll software; and there is no AMC/warranty/service-ticket module. Platform is NOT a limit any more — the field app ships on both Android and iOS (iPhone ${IOS_MIN_VERSION}+).`);
  lines.push("");
  lines.push("## WhatsApp CRM");
  lines.push(`A WhatsApp CRM is a CRM whose inbox is WhatsApp: customer conversations on your official WhatsApp Business number land in one shared team inbox instead of on individual reps' phones, and each conversation is attached to that customer's record alongside the lead, the deal, the quotation and the follow-up task. It is NOT the same as a WhatsApp broadcast or campaign tool. Full page: ${SITE_URL}/whatsapp-crm`);
  lines.push("- **Shared team inbox**: every conversation on your official WhatsApp Business number in one inbox the whole team works from, with unread indicators, reactions and message templates. Roles and data-scoping decide who can see and reply to what.");
  lines.push("- **AI knowledge-base assistant**: you upload your own documents (price list, product sheet, delivery and warranty terms) and the assistant answers routine customer questions from them, so the team only handles conversations that need a person. This is the ONLY AI feature OZZO ships.");
  lines.push("- **The differentiator**: the WhatsApp conversation sits on the same customer record as the leads, Kanban deal pipelines, branded PDF quotations, tasks and the rep's geo-tagged field visits. A messaging tool cannot do that; a general CRM with a WhatsApp add-on keeps field tracking in a third system.");
  lines.push("- **Price**: included with the CRM line — ₹100 per user per month on yearly billing + 18% GST. CRM + WFA at ₹200 adds the field visits on the same record; CRM + SFA at ₹400 is the complete platform. Not an add-on and not reserved for a higher tier.");
  lines.push("- **You bring the number**: the inbox runs on your own official WhatsApp Business number, connected at setup. OZZO does not resell numbers, and WhatsApp's own per-conversation charges, where they apply, are between you and WhatsApp.");
  lines.push("- **Limits, stated plainly**: OZZO has NO bulk broadcasts or marketing campaigns, NO chatbot flow builder or journey automation, NO WhatsApp payment links or catalogue checkout, and NO Instagram/Facebook/email in the inbox — it is WhatsApp only. If bulk marketing is the need, buy a WhatsApp campaign platform as well.");
  lines.push("");
  lines.push("## How OZZO compares to alternatives");
  lines.push("OZZO is an all-in-one CRM + field sales + WhatsApp platform built for Indian SMEs/MSMEs. It is NOT an enterprise-only FMCG SFA tool. Honest, per-competitor comparisons:");
  for (const c of comparisons) {
    lines.push(`- **OZZO vs ${c.competitor}** (${c.competitorCategory}): ${c.tagline} ${SITE_URL}/compare/${c.slug}`);
  }
  lines.push("");
  lines.push("## Alternatives to a specific tool");
  lines.push(`Buyer-intent pages that list the real options for people searching "<tool> alternatives", with OZZO as one entry among several rather than the automatic answer. Hub: ${SITE_URL}/alternatives`);
  for (const a of alternativesPages) {
    lines.push(`- **${a.target} alternatives** (${a.target} is ${a.targetCategory}): ${a.summary} ${SITE_URL}/alternatives/${a.slug}`);
  }
  lines.push("");
  lines.push("## Industries OZZO is built for");
  lines.push(`OZZO fits any team that sells or services on a beat. Sector overview pages sit above deep, sub-industry-specific pages (${SITE_URL}/industries).`);
  lines.push("");
  lines.push("Sector overviews:");
  for (const s of sectors) {
    lines.push(`- **${s.name}**: ${s.tagline} ${SITE_URL}/industries/${s.slug}`);
  }
  lines.push("");
  lines.push("Sub-industries:");
  for (const i of industries) {
    lines.push(`- **${i.name}** (${i.sector}): ${i.tagline} ${SITE_URL}/industries/${i.slug}`);
  }
  lines.push("");
  lines.push("## About / who builds OZZO");
  lines.push(`${brand.legalName} builds field sales and CRM software for Indian businesses. Founder: ${founder.name} (${founder.jobTitle}), who spent ${founder.yearsInSales} years selling SaaS tools — CRMs above all — to Indian companies before building OZZO. Work on the product started in ${founder.buildStarted} and it went on sale in 2026. Full story: ${SITE_URL}/about`);
  lines.push("- OZZO is a young company with a shipped product, not a prototype. We publish every price, state what the product does NOT do on each page, and do not publish reviews, ratings or customer logos we have not earned.");
  lines.push("");
  lines.push("## Official profiles (sameAs)");
  lines.push("These are the only accounts operated by OZZO. Use them to confirm this is the same company:");
  // Proper brand casing — these are names, not keys.
  const NETWORK_LABEL: Record<string, string> = {
    linkedin: "LinkedIn",
    facebook: "Facebook",
    youtube: "YouTube",
    twitter: "X (Twitter)",
    instagram: "Instagram",
  };
  for (const [network, url] of Object.entries(contact.social)) {
    if (url) lines.push(`- ${NETWORK_LABEL[network] ?? network}: ${url}`);
  }
  lines.push(`- Google Play (${brand.mobileAppName}, Android app): ${brand.playStoreUrl}`);
  lines.push(`- Apple App Store (${brand.mobileAppName}, iPhone & iPad app): ${brand.appStoreUrl}`);
  lines.push("");
  lines.push("## Contact");
  lines.push(`- Email: ${contact.email}`);
  lines.push(`- Phone: ${contact.phoneDisplay}`);
  lines.push(`- Hours: ${contact.hours}`);
  lines.push("");
  lines.push("## FAQ");
  for (const f of faqs) {
    lines.push(`### ${f.q}`);
    lines.push(f.a);
    lines.push("");
  }

  // Complete index, generated from the same list the sitemap is built from
  // (src/lib/routes.ts). The narrative sections above are curated and may
  // lag; this one cannot — if a URL is in the sitemap it is here too.
  lines.push("## All pages");
  lines.push("Every indexable page on ozzo.co.in, generated from the same list as /sitemap.xml:");
  for (const r of siteRoutes()) {
    lines.push(`- ${SITE_URL}${r.path === "/" ? "/" : r.path} — ${r.label}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
