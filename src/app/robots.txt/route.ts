import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /robots.txt
 *
 * Written by hand rather than through Next's `robots.ts` metadata export,
 * because that export can only emit the fields it knows about and we want to
 * point AI crawlers at /llms.txt. There is no standard directive for that
 * yet, so it goes in as a comment — which every parser ignores safely, and a
 * crawler that looks for it can find.
 *
 * Rules are otherwise unchanged: everything is allowed except the API routes
 * and the unlisted founder card. AI crawlers (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended and the rest) are deliberately covered by
 * the `*` rule and allowed — being quoted by them is the point.
 */
export function GET() {
  const body = [
    "# OZZO — ozzo.co.in",
    "# Structured summary of this site for AI assistants and LLMs:",
    `# ${SITE_URL}/llms.txt`,
    "",
    "User-Agent: *",
    "Allow: /",
    "Disallow: /api/",
    // Keep the unlisted founder card (and its assets) out of search engines.
    "Disallow: /card",
    "Disallow: /card-editor",
    "Disallow: /sumit-vegad.vcf",
    "",
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
