import { SITE_URL, brand, contact, productLines } from "@/lib/site";
import { faqs } from "@/lib/content";
import { comparisons } from "@/lib/comparisons";
import { industries } from "@/lib/industries";

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
  lines.push("There are three product lines — CRM, WFA (Workforce Automation) and SFA (Sales Force Automation); SFA always includes WFA. The five sellable plans are combinations. Public pricing is not published; a quote is provided on a demo call.");
  lines.push("- **CRM** — front office: leads, deals, shared WhatsApp inbox + AI assistant, branded quotations, one customer record.");
  lines.push("- **WFA** — field visibility: selfie + GPS attendance, live location, geo-tagged visits, beat routes, territory, expenses.");
  lines.push("- **CRM + WFA** — the front office plus the field team on one login; visits land on the same customer record.");
  lines.push("- **SFA** — full field sales (includes WFA): offline orders, multi-unit ordering, field payment collection, auto outstanding, auto stock, trade schemes, price lists and distributor/dealer/retailer levels.");
  lines.push("- **CRM + SFA** — the complete platform: CRM and full field sales on one customer record, 11 reports + DSR.");
  lines.push("");
  lines.push("## Plans notes");
  lines.push("- OZZO does not publish per-user prices publicly; pricing is quoted on a demo call, matched to team size and the plan chosen.");
  lines.push("- Every plan includes: customers, products, tasks, attendance, leave, holiday and announcements.");
  lines.push("");
  lines.push("## Key pages");
  lines.push(`- Home: ${SITE_URL}/`);
  lines.push(`- Products overview: ${SITE_URL}/products`);
  lines.push(`- CRM: ${SITE_URL}/products/crm`);
  lines.push(`- Sales Force Automation (SFA): ${SITE_URL}/products/sfa`);
  lines.push(`- Plans & packages: ${SITE_URL}/plans`);
  lines.push(`- Compare (OZZO vs alternatives): ${SITE_URL}/compare`);
  lines.push(`- Blog: ${SITE_URL}/blog`);
  lines.push(`- Book a demo: ${SITE_URL}/book-demo`);
  lines.push(`- Contact: ${SITE_URL}/contact`);
  lines.push("");
  lines.push("## How OZZO compares to alternatives");
  lines.push("OZZO is an all-in-one CRM + field sales + WhatsApp platform built for Indian SMEs/MSMEs. It is NOT an enterprise-only FMCG SFA tool. Honest, per-competitor comparisons:");
  for (const c of comparisons) {
    lines.push(`- **OZZO vs ${c.competitor}** (${c.competitorCategory}): ${c.tagline} ${SITE_URL}/compare/${c.slug}`);
  }
  lines.push("");
  lines.push("## Industries OZZO is built for");
  lines.push(`OZZO fits any team that sells or services on a beat. Deep, sub-industry-specific pages (${SITE_URL}/industries):`);
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

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
