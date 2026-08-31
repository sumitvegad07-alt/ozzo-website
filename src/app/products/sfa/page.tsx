import { SfaProductPage } from "@/components/pages/sfa-product";
import { pageMetadata } from "@/lib/seo";
import { sfaMeta } from "@/lib/sfa-page";

export const metadata = pageMetadata({
  title: sfaMeta.metaTitle,
  description: sfaMeta.metaDescription,
  path: "/products/sfa",
  keywords: sfaMeta.keywords,
});

export default function Page() {
  return <SfaProductPage />;
}
