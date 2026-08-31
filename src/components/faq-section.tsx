import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./reveal";
import { faqs } from "@/lib/content";

export function FaqSection({
  items = faqs,
  heading = true,
}: {
  items?: { q: string; a: string }[];
  heading?: boolean;
}) {
  return (
    <section id="faq" className="py-24">
      <Container className="max-w-3xl">
        {heading && (
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything a business owner asks before getting on a call."
          />
        )}
        <div className="space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <details className="group rounded-2xl border border-border bg-card p-5 [&_svg]:open:rotate-45">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:hidden">
                  {item.q}
                  <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
