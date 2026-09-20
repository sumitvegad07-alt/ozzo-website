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

      <section className="relative overflow-hidden bg-ink pt-36 pb-24 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/22 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/28 blur-[150px]" />
        <Container className="relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: pitch */}
            <div>
              <Eyebrow>See it on your own workflow</Eyebrow>
              <h1 className="ozzo-display mt-4 max-w-lg text-4xl leading-[1.06] text-white md:text-5xl">
                Book a free, <span className="ozzo-gradient-bright">no-pressure demo</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
                Share a few details and our team will call you, understand how
                your field team actually works, and show you exactly how{" "}
                {brand.name} fits — with guided onboarding to get you live. It
                takes under a minute.
              </p>

              <ul className="mt-8 space-y-4">
                {reassurances.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#37e0a0]" />
                    <span className="text-white/85">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/60">
                <span className="flex items-center gap-1.5">
                  <Monitor className="h-4 w-4 text-[#a855f7]" /> Web dashboard
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4 text-[#a855f7]" /> Mobile app
                  <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#c4b5fd]">
                    iOS soon
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <WifiOff className="h-4 w-4 text-[#a855f7]" /> Works offline
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
