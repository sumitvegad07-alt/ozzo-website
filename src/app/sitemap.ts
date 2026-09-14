import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "weekly" },
    // Two products only — Workforce Automation is a tier of SFA, so
    // /products/wfa permanently redirects and is not listed here.
    { path: "/products/crm", priority: 0.9, freq: "weekly" },
    { path: "/products/sfa", priority: 0.9, freq: "weekly" },
    { path: "/plans", priority: 0.9, freq: "weekly" },
    { path: "/book-demo", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
