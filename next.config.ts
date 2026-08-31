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
  async redirects() {
    return [
      // Workforce Automation is no longer a separate product — it is the entry
      // tier ("WFA Starter") of Sales Force Automation. Preserve any inbound
      // links / SEO with a permanent redirect.
      { source: "/products/wfa", destination: "/products/sfa", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
