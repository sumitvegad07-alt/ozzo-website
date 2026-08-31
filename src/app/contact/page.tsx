import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { SITE_URL, brand, contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact us — talk to the OZZO team",
  description:
    "Reach the OZZO team by email, WhatsApp or phone. For a guided walkthrough of the platform, book a free demo and we'll call you.",
  path: "/contact",
  keywords: ["contact OZZO", "OZZO support", "OZZO phone", "OZZO WhatsApp"],
});

const hasAddress = Boolean(contact.address.street && contact.address.city);

const methods = [
  {
    icon: Mail,
    label: "Email us",
    value: contact.email,
    href: `mailto:${contact.email}`,
    tint: "bg-info/10 text-info",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp us",
    value: "Chat with the team now",
    href: `https://wa.me/${contact.whatsappNumber}`,
    external: true,
    tint: "bg-success/10 text-success",
  },
  {
    icon: Phone,
    label: "Call us",
    value: contact.phoneDisplay,
    href: `tel:${contact.phoneE164}`,
    tint: "bg-primary-soft text-primary",
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${brand.name}`,
    url: `${SITE_URL}/contact`,
    description:
      "Reach OZZO by email, WhatsApp or phone — CRM, workforce and field-sales automation.",
  };

  return (
    <>
      <JsonLd
        data={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[460px] w-[700px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Talk to us</Eyebrow>
            <h1 className="ozzo-display mt-4 text-4xl leading-[1.06] text-foreground md:text-5xl">
              We&apos;re a message away
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Questions about the platform, pricing or getting set up? Reach us
              on whichever channel suits you — a real person replies.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
            {methods.map((m, i) => (
              <Reveal key={m.label} delay={i * 70}>
                <a
                  href={m.href}
                  {...(m.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col items-start rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-black/[0.05]"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${m.tint}`}
                  >
                    <m.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-lg font-bold text-foreground">
                    {m.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.value}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* hours + address */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground sm:flex-row">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> {contact.hours}
            </span>
            {hasAddress && (
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {[
                  contact.address.street,
                  contact.address.city,
                  contact.address.state,
                  contact.address.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            )}
          </div>

          {/* Book a demo banner */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-8 text-center md:p-12">
              <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
              <div className="relative">
                <h2 className="ozzo-display text-2xl text-foreground md:text-3xl">
                  Prefer a guided walkthrough?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                  Book a free demo and our team will call you, map OZZO to how
                  your field team works, and set up a refundable trial.
                </p>
                <Link
                  href="/book-demo"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Book a free demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
