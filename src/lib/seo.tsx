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
      price: p.price,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.price,
        priceCurrency: "INR",
        unitText: "user/month",
      },
    })),
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
