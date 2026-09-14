import { CheckCircle2, Monitor, Smartphone, WifiOff } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { pageMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { brand } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Book a free demo",
  description:
    "Book a free, no-pressure OZZO demo. Share a few details and our team will call you, map OZZO to how your field team works, and show you exactly how it fits.",
  path: "/book-demo",
  keywords: ["OZZO demo", "book a CRM demo", "field sales software demo", "sales force automation demo"],
});

const reassurances = [
  "A real walkthrough built around your workflow — no generic tour",
  "Straight answers on plans and setup",
  "Guided onboarding and data migration, done with you",
];

export default function BookDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book a demo", path: "/book-demo" },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container className="relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: pitch */}
            <div>
              <Eyebrow>See it on your own workflow</Eyebrow>
              <h1 className="ozzo-display mt-4 max-w-lg text-4xl leading-[1.06] text-foreground md:text-5xl">
                Book a free, no-pressure demo
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Share a few details and our team will call you, understand how
                your field team actually works, and show you exactly how{" "}
                {brand.name} fits — with guided onboarding to get you live. It
                takes under a minute.
              </p>

              <ul className="mt-8 space-y-4">
                {reassurances.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-foreground">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Monitor className="h-4 w-4 text-primary" /> Web dashboard
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4 text-primary" /> Mobile app
                  <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                    iOS soon
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <WifiOff className="h-4 w-4 text-primary" /> Works offline
                </span>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:pl-4">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
