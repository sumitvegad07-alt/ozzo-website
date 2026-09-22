import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/pages/industry-page";
import { industries, getIndustry } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) return {};
  return pageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/industries/${data.slug}`,
    keywords: [...data.keywords, ...(data.seo?.keywords ?? [])],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) notFound();
  const siblings = industries.filter(
    (i) => i.sector === data.sector && i.slug !== data.slug,
  );
  return <IndustryPage data={data} siblings={siblings} />;
}
