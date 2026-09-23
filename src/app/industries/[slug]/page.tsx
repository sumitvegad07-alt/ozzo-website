import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/pages/industry-page";
import { SectorPage } from "@/components/pages/sector-page";
import { industries, getIndustry } from "@/lib/industries";
import { sectors, getSector, industriesInSector } from "@/lib/sectors";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [
    ...industries.map((i) => ({ slug: i.slug })),
    ...sectors.map((s) => ({ slug: s.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (industry) {
    return pageMetadata({
      title: industry.metaTitle,
      description: industry.metaDescription,
      path: `/industries/${industry.slug}`,
      keywords: [...industry.keywords, ...(industry.seo?.keywords ?? [])],
    });
  }
  const sector = getSector(slug);
  if (sector) {
    return pageMetadata({
      title: sector.metaTitle,
      description: sector.metaDescription,
      path: `/industries/${sector.slug}`,
      keywords: [...sector.keywords, ...(sector.seo?.keywords ?? [])],
    });
  }
  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const industry = getIndustry(slug);
  if (industry) {
    const siblings = industries.filter(
      (i) => i.sector === industry.sector && i.slug !== industry.slug,
    );
    return <IndustryPage data={industry} siblings={siblings} />;
  }

  const sector = getSector(slug);
  if (sector) {
    return <SectorPage data={sector} members={industriesInSector(sector)} />;
  }

  notFound();
}
