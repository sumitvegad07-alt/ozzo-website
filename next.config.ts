import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Pin the workspace root so the parent repo's lockfile isn't picked up.
  turbopack: { root: projectRoot },
  async rewrites() {
    return [
      // Founder digital visiting card — served as a standalone static page
      // (no site chrome) for instant load. Clean URL: ozzo.co.in/card
      { source: "/card", destination: "/card.html" },
      { source: "/card-editor", destination: "/card-editor.html" },
    ];
  },
  async redirects() {
    return [
      // Workforce Automation is no longer a separate product — it is the entry
      // tier ("WFA Starter") of Sales Force Automation. Preserve any inbound
      // links / SEO with a permanent redirect.
      { source: "/products/wfa", destination: "/products/sfa", permanent: true },
    ];
  },
  async headers() {
    const noindex = { key: "X-Robots-Tag", value: "noindex, nofollow" };
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Unlisted founder card + its assets: reachable by direct link only,
      // never indexed by search engines.
      { source: "/card", headers: [noindex] },
      { source: "/card.html", headers: [noindex] },
      { source: "/card-editor", headers: [noindex] },
      { source: "/card-editor.html", headers: [noindex] },
      { source: "/card-cover.png", headers: [noindex] },
      { source: "/sumit-vegad.vcf", headers: [noindex] },
    ];
  },
};

export default nextConfig;
