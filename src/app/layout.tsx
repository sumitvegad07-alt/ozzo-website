import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, brand } from "@/lib/site";
import { JsonLd, OG_IMAGE, organizationSchema, websiteSchema } from "@/lib/seo";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { ExitIntentPopup } from "@/components/exit-intent-popup";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.metaDescription,
  applicationName: brand.name,
  authors: [{ name: brand.legalName }],
  creator: brand.legalName,
  publisher: brand.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  keywords: [
    "CRM software",
    "WhatsApp CRM",
    "field sales app",
    "field force tracking",
    "sales force automation",
    "workforce automation",
    "GPS attendance app",
    "beat planning software",
    "order management app",
    "distributor management software",
    "sales team tracking India",
  ],
  // The home page has no metadata of its own, so it inherits this block.
  // Without it, the one page that DID carry an og:image was also the only
  // page missing og:url and og:type — the file-convention image supplies
  // neither. Sub-pages override this through pageMetadata().
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.metaDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.metaDescription,
    images: [OG_IMAGE.url],
  },
  // Favicon + apple-touch icon come from the file-based convention
  // (src/app/icon.png and src/app/apple-icon.png) — the OZZO brand mark.
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: <CurrencyScript/> sets data-ozzo-currency on
    // <html> before paint, so the pricing pages never flash the wrong currency.
    // React otherwise reports that attribute as a server/client mismatch on
    // every load. It only suppresses the warning for this element's own
    // attributes, not for any child content.
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteNavbar />
        <main id="main">{children}</main>
        <SiteFooter />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
