import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { brand, contact, productLines } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: contact.social.linkedin },
  { label: "Twitter", href: contact.social.twitter },
  { label: "Instagram", href: contact.social.instagram },
  { label: "YouTube", href: contact.social.youtube },
].filter((s) => s.href);

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-8 text-white">
      <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top band — closing line + CTA */}
        <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="ozzo-display max-w-xl text-3xl text-white md:text-4xl">
            Put the whole field day{" "}
            <span className="ozzo-gradient-text">in one place.</span>
          </h2>
          <Link
            href="/book-demo"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Book a free demo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <span className="flex items-center">
              {/* Footer sits on the dark ink background — use the neon dark variant. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-dark.png"
                alt={brand.name}
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              CRM, workforce and field-sales automation in one platform — a web
              dashboard for managers and a mobile app for reps, powered by
              WhatsApp and AI.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneE164}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
            {socialLinks.length > 0 && (
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/60 transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-4 font-bold text-white">Products</h2>
            <ul className="space-y-3">
              {productLines.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products#${p.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {p.name} — {p.sub}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/plans"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Plans &amp; packages
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  All features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-white">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/book-demo"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Book a demo
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made for growing field-sales teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
