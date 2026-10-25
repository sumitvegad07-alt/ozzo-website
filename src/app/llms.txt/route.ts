import { SITE_URL, brand, contact, productLines } from "@/lib/site";
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
  lines.push(`${brand.name} is a business software platform for field-sales teams that combines CRM, workforce automation and sales & distribution. It provides a web dashboard for managers and a mobile app for field reps (Android today, with iOS on the way), and works offline.`);
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
  lines.push("India (INR, per user per month) — 12-month / 6-month / 3-month billing:");
  for (const id of planOrder) {
    const r = PLAN_RATE.INR[id];
    const name = plans.find((p) => p.id === id)?.name ?? id;
    lines.push(`- **${name}** — ₹${r.yearly} / ₹${r.half_yearly} / ₹${r.quarterly}`);
  }
  lines.push("");
  lines.push("International (USD, per user per month) — 12-month / 6-month / 3-month billing:");
  for (const id of planOrder) {
    const r = PLAN_RATE.USD[id];
    const name = plans.find((p) => p.id === id)?.name ?? id;
    lines.push(`- **${name}** — $${r.yearly} / $${r.half_yearly} / $${r.quarterly}`);
  }
  lines.push("- **CRM** — front office: leads, deals, shared WhatsApp inbox + AI assistant, branded quotations, one customer record.");
  lines.push("- **WFA** — field visibility: selfie + GPS attendance, live location, geo-tagged visits, beat routes, territory, expenses.");
  lines.push("- **CRM + WFA** — the front office plus the field team on one login; visits land on the same customer record.");
  lines.push("- **SFA** — full field sales (includes WFA): offline orders, multi-unit ordering, field payment collection, auto outstanding, auto stock, trade schemes, price lists and distributor/dealer/retailer levels.");
  lines.push("- **CRM + SFA** — the complete platform: CRM and full field sales on one customer record, 11 reports + DSR.");
  lines.push("");
  lines.push("## Plans notes");
  lines.push("- **Every rate is public — see the table above or /plans.** Longer commitments cost less per user: 12-month billing is the base rate, 6-month and 3-month billing cost more. Minimum order ₹5,000.");
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
  lines.push("- **Selfie + GPS attendance**: the rep punches in from the Android app with a selfie, and the punch-in and punch-out locations are stored as coordinates. Measured against a configurable shift with a grace period.");
  lines.push("- **Live location**: while a rep is punched in, location is recorded on an interval in the background. The day replays as a route on a map, with a location timeline and distance travelled per rep.");
  lines.push("- **Geo-tagged customer visits**: check-in and check-out are stamped with the position they were made from, against the customer's own record, with a visit photo and feedback.");
  lines.push("- **Beat routes & territory (route management)**: routes are planned on a calendar and assigned; the rep opens today's beat in the app and works down it. Planned vs covered is reported per day. Territory hierarchy rolls areas up to a manager.");
  lines.push("- **Geo-fencing**: optionally require a rep to be within a chosen radius of the customer's saved location to check in (the phone's own GPS accuracy is added automatically), and pin attendance punch-in/punch-out to work locations you set.");
  lines.push("- **Tracking is tied to the punch, not the clock** — it starts at punch-in and stops at punch-out. It works offline and syncs when signal returns.");
  lines.push("- **Price**: the WFA plan (tracking only) is ₹150 per user per month on yearly billing + 18% GST; SFA at ₹300 adds offline orders, collections, outstanding and stock on the same app.");
  lines.push("- **Limits, stated plainly**: it is a phone app, NOT a vehicle GPS/telematics box or SIM-based tracking; the field app is Android only today (iOS on the way); it is not payroll software; and there is no AMC/warranty/service-ticket module.");
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
