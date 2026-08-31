import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
import { productPages, productSlugs } from "@/lib/products-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = productPages[slug];
  if (!data) return {};
  return pageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/products/${slug}`,
    keywords: data.keywords,
  });
}

export default async function ProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = productPages[slug];
  if (!data) notFound();
  return <ProductPage data={data} />;
}
