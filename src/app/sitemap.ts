import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { productSlugs } from "@/lib/products-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "weekly" },
    ...productSlugs.map((slug) => ({
      path: `/products/${slug}`,
      priority: 0.9,
      freq: "weekly" as const,
    })),
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
