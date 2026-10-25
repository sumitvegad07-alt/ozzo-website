import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

/**
 * The page list lives in src/lib/routes.ts, shared with llms.txt so the two
 * cannot drift apart. Add pages there, not here.
 *
 * NOTE: deliberately no `lastModified` on entries whose real edit date we do
 * not track. Stamping every URL with the build time told Google that all 60
 * pages changed on every deploy, which is inaccurate — Google's guidance is
 * to omit lastmod rather than supply one it will learn to distrust. Blog
 * posts carry a genuine per-post date and keep theirs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes().map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.freq,
    priority: r.priority,
    ...(r.lastModified ? { lastModified: r.lastModified } : {}),
  }));
}
