/**
 * Every indexable URL on the site, in one place.
 *
 * WHY THIS EXISTS: sitemap.ts and llms.txt/route.ts each used to keep their
 * own hand-written list of pages, and they drifted. The 2026-10-25 audit
 * caught llms.txt missing all five /alternatives pages, the /fmcg-software
 * pillar and five of the six sector hubs — the newest, highest-intent
 * commercial pages were exactly the ones an AI engine could not see. The
 * sitemap had its own gap: /cookie-policy, linked from the footer of every
 * page, was never listed.
 *
 * Both files now derive from `siteRoutes()`, so a new page added here reaches
 * the sitemap AND llms.txt at once. A page cannot be in one and missing from
 * the other, which is a structural guarantee rather than a rule someone has
 * to remember.
 *
 * ADDING A PAGE: add it to `staticRoutes` below (or to the data file its
 * group is generated from) and both consumers pick it up.
 */
import type { MetadataRoute } from "next";
import { getAllPosts } from "./blog";
import { comparisons } from "./comparisons";
import { industries } from "./industries";
import { sectors } from "./sectors";
import { alternativesPages } from "./alternatives";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type RouteGroup =
  | "core"
  | "legal"
  | "blog"
  | "alternatives"
  | "compare"
  | "sector"
  | "industry";

export type SiteRoute = {
  path: string;
  priority: number;
  freq: Freq;
  /**
   * Only set where we track a genuine edit date. See the note in
   * `sitemap.ts` — stamping every URL with the build time tells Google that
   * every page changed on every deploy, which is false.
   */
  lastModified?: Date;
  group: RouteGroup;
  /** Human label, used in the generated page index in llms.txt. */
  label: string;
};

const staticRoutes: SiteRoute[] = [
  { path: "/", priority: 1, freq: "weekly", group: "core", label: "Home" },
  { path: "/products", priority: 0.9, freq: "weekly", group: "core", label: "Products overview" },
  // Two products only — Workforce Automation is a tier of SFA, so
  // /products/wfa permanently redirects and is not listed here.
  { path: "/products/crm", priority: 0.9, freq: "weekly", group: "core", label: "CRM" },
  { path: "/products/sfa", priority: 0.9, freq: "weekly", group: "core", label: "Sales Force Automation (SFA)" },
  { path: "/plans", priority: 0.9, freq: "weekly", group: "core", label: "Plans & packages" },
  // Hub for the site's primary target term. The 27 industry pages that
  // mention "salesman location tracking" all link up to this page.
  {
    path: "/salesman-location-tracking-software",
    priority: 0.9,
    freq: "monthly",
    group: "core",
    label: "Salesman location tracking software",
  },
  // Category pillar for the site's strongest non-brand search theme.
  { path: "/fmcg-software", priority: 0.9, freq: "monthly", group: "core", label: "FMCG software (category guide)" },
  { path: "/compare", priority: 0.8, freq: "weekly", group: "core", label: "Compare (OZZO vs alternatives)" },
  { path: "/alternatives", priority: 0.8, freq: "weekly", group: "core", label: "Alternatives to the tools you are shortlisting" },
  { path: "/industries", priority: 0.8, freq: "weekly", group: "core", label: "Industries" },
  { path: "/blog", priority: 0.7, freq: "weekly", group: "core", label: "Blog" },
  { path: "/book-demo", priority: 0.8, freq: "monthly", group: "core", label: "Book a demo" },
  { path: "/contact", priority: 0.7, freq: "monthly", group: "core", label: "Contact" },
  { path: "/privacy", priority: 0.3, freq: "yearly", group: "legal", label: "Privacy Policy" },
  { path: "/terms", priority: 0.3, freq: "yearly", group: "legal", label: "Terms of Service" },
  // Footer-linked on every page, so it was always crawlable — it was simply
  // missing from the sitemap until the 2026-10-25 audit.
  { path: "/cookie-policy", priority: 0.3, freq: "yearly", group: "legal", label: "Cookie Policy" },
];

/** Every indexable URL, in the order the sitemap should list them. */
export function siteRoutes(): SiteRoute[] {
  const blog: SiteRoute[] = getAllPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    freq: "monthly",
    lastModified: new Date(`${post.date}T00:00:00`),
    group: "blog",
    label: post.title,
  }));

  // "<Competitor> alternatives" — same buyer intent as /compare, without our
  // brand name in the query, which is the version people actually search.
  const alternatives: SiteRoute[] = alternativesPages.map((p) => ({
    path: `/alternatives/${p.slug}`,
    priority: 0.8,
    freq: "monthly",
    group: "alternatives",
    label: `${p.target} alternatives`,
  }));

  const compare: SiteRoute[] = comparisons.map((c) => ({
    path: `/compare/${c.slug}`,
    priority: 0.75,
    freq: "monthly",
    group: "compare",
    label: `OZZO vs ${c.competitor}`,
  }));

  // Sector overview pages (parent-category hubs above the sub-industries).
  const sector: SiteRoute[] = sectors.map((s) => ({
    path: `/industries/${s.slug}`,
    priority: 0.8,
    freq: "monthly",
    group: "sector",
    label: s.name,
  }));

  const industry: SiteRoute[] = industries.map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.75,
    freq: "monthly",
    group: "industry",
    label: i.name,
  }));

  return [...staticRoutes, ...blog, ...alternatives, ...compare, ...sector, ...industry];
}

/** Routes in one group, for the grouped index in llms.txt. */
export function routesInGroup(group: RouteGroup): SiteRoute[] {
  return siteRoutes().filter((r) => r.group === group);
}
