import { SITE_URL, brand, contact, productLines, sfaTiers, combinedPlans } from "@/lib/site";
import { faqs } from "@/lib/content";

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
  lines.push("## Products (priced per user, per month, min 3 users)");
  lines.push("There are TWO products only: CRM, and Sales Force Automation (SFA). Field-force tracking (formerly 'WFA / Workforce Automation') is NOT a separate product — it is the entry tier ('WFA Starter') of SFA.");
  for (const p of productLines) {
    const price = p.priceFrom ? `from ₹${p.price}` : `₹${p.price}`;
    lines.push(`- **${p.name} — ${p.fullName}** (${price}/user/mo): ${p.summary} Key features: ${p.features.join("; ")}.`);
  }
  lines.push("");
  lines.push("### Sales Force Automation tiers");
  for (const t of sfaTiers) {
    const price = t.price === null ? (t.priceNote ?? "custom") : `₹${t.price}/user/mo`;
    lines.push(`- **${t.name}** (${price}): ${t.tagline}. ${t.features.join("; ")}.`);
  }
  for (const c of combinedPlans) {
    lines.push(`- **${c.name}** (₹${c.price}/user/mo): ${c.tagline}. ${c.features.join("; ")}.`);
  }
  lines.push("");
  lines.push("## Pricing notes");
  lines.push("- Annual billing is the base rate; half-yearly adds 20%; quarterly adds 30%.");
  lines.push("- 10-day and 30-day refundable trials are available.");
  lines.push("- Every plan includes: customers, products, tasks, attendance, leave, holiday and announcements.");
  lines.push("");
  lines.push("## Key pages");
  lines.push(`- Home: ${SITE_URL}/`);
  lines.push(`- Products overview: ${SITE_URL}/products`);
  lines.push(`- CRM: ${SITE_URL}/products/crm`);
  lines.push(`- Sales Force Automation (SFA): ${SITE_URL}/products/sfa`);
  lines.push(`- Book a demo: ${SITE_URL}/book-demo`);
  lines.push(`- Contact: ${SITE_URL}/contact`);
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
