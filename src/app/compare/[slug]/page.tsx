import { notFound } from "next/navigation";
import { ComparisonPage } from "@/components/pages/comparison-page";
import { comparisons, getComparison } from "@/lib/comparisons";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) return {};
  return pageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/compare/${data.slug}`,
    keywords: data.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) notFound();
  return <ComparisonPage data={data} />;
}
