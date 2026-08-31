import { CrmProductPage } from "@/components/pages/crm-product";
import { pageMetadata } from "@/lib/seo";
import { crmMeta } from "@/lib/crm-page";

export const metadata = pageMetadata({
  title: crmMeta.metaTitle,
  description: crmMeta.metaDescription,
  path: "/products/crm",
  keywords: crmMeta.keywords,
});

export default function Page() {
  return <CrmProductPage />;
}
