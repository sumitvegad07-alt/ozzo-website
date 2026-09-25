import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { comparisons } from "@/lib/comparisons";
import { industries } from "@/lib/industries";
import { sectors } from "@/lib/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
  // NOTE: deliberately no `lastModified` on entries whose real edit date we do
  // not track. Stamping every URL with the build time told Google that all 60
  // pages changed on every deploy, which is inaccurate — Google's guidance is
  // to omit lastmod rather than supply one it will learn to distrust. Blog
  // posts carry a genuine per-post date and keep theirs.
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "weekly" },
    // Two products only — Workforce Automation is a tier of SFA, so
    // /products/wfa permanently redirects and is not listed here.
    { path: "/products/crm", priority: 0.9, freq: "weekly" },
    { path: "/products/sfa", priority: 0.9, freq: "weekly" },
    { path: "/plans", priority: 0.9, freq: "weekly" },
    { path: "/compare", priority: 0.8, freq: "weekly" },
    { path: "/industries", priority: 0.8, freq: "weekly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/book-demo", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const staticEntries = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const compareEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Sector overview pages (parent-category hubs above the sub-industries).
  const sectorEntries: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${SITE_URL}/industries/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...compareEntries,
    ...sectorEntries,
    ...industryEntries,
  ];
}
