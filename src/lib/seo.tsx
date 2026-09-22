import type { Metadata } from "next";
import { SITE_URL, brand, contact, productLines } from "./site";

/** Build per-page metadata with sensible OG/Twitter/canonical defaults. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      title: opts.title,
      description: opts.description,
      // OG/Twitter images are provided by the file-convention
      // opengraph-image.tsx / twitter-image.tsx at the app root.
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

const hasAddress = Boolean(contact.address.street && contact.address.city);

/** Organization schema — identifies the business to search + AI engines. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.legalName,
    alternateName: brand.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/icon.png`,
    description: brand.description,
    email: contact.email,
    telephone: contact.phoneE164,
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: contact.address.street,
            addressLocality: contact.address.city,
            addressRegion: contact.address.state,
            postalCode: contact.address.postalCode,
            addressCountry: contact.address.country,
          },
        }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phoneE164,
      email: contact.salesEmail,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: Object.values(contact.social).filter(Boolean),
  };
}

/** WebSite schema. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: SITE_URL,
    description: brand.description,
    publisher: { "@type": "Organization", name: brand.legalName },
  };
}

/** SoftwareApplication schema — each product line as an offering. */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: brand.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    description: brand.description,
    offers: productLines.map((p) => ({
      "@type": "Offer",
      name: `${brand.name} ${p.name}`,
      description: p.summary,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans`,
    })),
  };
}

/**
 * Per-product SoftwareApplication schema — describes a single product line
 * (CRM or SFA) as its own offering, so AI engines can distinguish
 * "OZZO CRM" from "OZZO SFA" as distinct products rather than only seeing
 * the whole platform. Use on the individual /products/[slug] pages.
 */
export function productSchema(slug: string) {
  const line = productLines.find((p) => p.slug === slug);
  if (!line) return softwareApplicationSchema();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${brand.name} ${line.name}`,
    alternateName: `${brand.name} ${line.fullName}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    description: line.summary,
    url: `${SITE_URL}/products/${line.slug}`,
    featureList: line.features,
    publisher: { "@type": "Organization", name: brand.legalName },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans`,
    },
  };
}

/** FAQPage schema from a Q/A list. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** BlogPosting schema for an individual article. */
export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: brand.legalName,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

/** BreadcrumbList schema. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** Render a JSON-LD <script> tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
