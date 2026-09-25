import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Play } from "lucide-react";
import { brand, contact, productLines } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: contact.social.linkedin },
  { label: "Twitter", href: contact.social.twitter },
  { label: "Instagram", href: contact.social.instagram },
  { label: "YouTube", href: contact.social.youtube },
].filter((s) => s.href);

const policies = [
  { label: "Contact Us", href: "/contact" },
  { label: "Book a demo", href: "/book-demo" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const products = [
  { label: "Sales Force Automation", href: "/products/sfa" },
  { label: "Customer Relationship Management", href: "/products/crm" },
  { label: "Plans & packages", href: "/plans" },
  { label: "Industries", href: "/industries" },
  { label: "Compare alternatives", href: "/compare" },
  { label: "All features", href: "/products" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[520px] rounded-full bg-[#7c3aed]/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 gap-y-12 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <span className="flex items-center">
              {/* Footer sits on the dark ink background — use the neon dark variant. */}
              <Image
                src="/brand/logo-dark.webp"
                alt={brand.name}
                width={440}
                height={107}
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Close every loop. CRM, field workforce and sales &amp; distribution
              in one platform — a web dashboard for managers and a mobile app for
              reps, powered by WhatsApp and AI.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#c4b5fd]">
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
              <a href={`tel:${contact.phoneE164}`} className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#c4b5fd]">
                <Phone className="h-4 w-4" /> {contact.phoneDisplay}
              </a>
              <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#c4b5fd]">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
            {socialLinks.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[11px] font-bold text-white/70 transition-colors hover:border-[#a855f7]/50 hover:text-white"
                  >
                    {s.label.slice(0, 2)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Policies */}
          <div className="md:col-span-3">
            <h2 className="ozzo-eyebrow mb-5 text-white/40">Policies</h2>
            <ul className="space-y-3.5">
              {policies.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-white/65 transition-colors hover:text-[#c4b5fd]">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h2 className="ozzo-eyebrow mb-5 text-white/40">Products</h2>
            <ul className="space-y-3.5">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-white/65 transition-colors hover:text-[#c4b5fd]">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile app */}
          <div className="col-span-2 md:col-span-2">
            <h2 className="ozzo-eyebrow mb-5 text-white/40">Mobile App</h2>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 transition-colors hover:border-[#a855f7]/50"
            >
              <Play className="h-6 w-6 fill-current text-[#a855f7]" />
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-white/50">Get it on</span>
                <span className="block text-sm font-bold text-white">Google Play</span>
              </span>
            </a>
            <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-white/45">
              OZZO Sales — check in, capture visits and update leads from the field.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">{contact.email}</a>
            <span aria-hidden>·</span>
            <a href={`tel:${contact.phoneE164}`} className="transition-colors hover:text-white">{contact.phoneDisplay}</a>
          </p>
        </div>
      </div>

      {/* Giant brand watermark */}
      <div className="pointer-events-none relative z-0 flex justify-center overflow-hidden" aria-hidden>
        <span
          className="ozzo-display select-none whitespace-nowrap leading-[0.8] tracking-tighter"
          style={{
            fontSize: "clamp(6rem, 26vw, 24rem)",
            color: "rgba(232,229,255,0.16)",
            transform: "translateY(28%)",
          }}
        >
          {brand.name}
        </span>
      </div>
    </footer>
  );
}
