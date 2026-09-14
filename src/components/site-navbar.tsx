"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { Icon } from "./icon";
import { productLines } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const productsActive = pathname.startsWith("/products");

  function openProducts() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }
  function closeProductsSoon() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-5",
          scrolled
            ? "border border-border bg-card/80 shadow-lg shadow-black/[0.04] backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Home
          </Link>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={closeProductsSoon}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                productsActive
                  ? "bg-primary-soft text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              Products
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  productsOpen && "rotate-180",
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/[0.08]">
                  {productLines.map((line) => (
                    <Link
                      key={line.slug}
                      href={`/products/${line.slug}`}
                      className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                    >
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted ${line.accentClass}`}
                      >
                        <Icon
                          name={
                            line.slug === "crm"
                              ? "MessageSquare"
                              : line.slug === "wfa"
                                ? "MapPin"
                                : "ShoppingCart"
                          }
                          className="h-4 w-4"
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">
                          {line.name}
                          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                            {line.fullName}
                          </span>
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {line.sub}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="mt-1 flex items-center justify-between rounded-xl border-t border-border px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
                  >
                    Compare all products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/plans"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname.startsWith("/plans")
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Plans
          </Link>

          <Link
            href="/blog"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname.startsWith("/blog")
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname.startsWith("/contact")
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Contact
          </Link>

          <Link
            href="/book-demo"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="rounded-full p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-border bg-card p-4 shadow-xl md:hidden">
          <Link
            href="/"
            className="rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Home
          </Link>
          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Products
          </p>
          {productLines.map((line) => (
            <Link
              key={line.slug}
              href={`/products/${line.slug}`}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <span className={cn("font-semibold", line.accentClass)}>
                {line.name}
              </span>
              <span className="text-sm text-muted-foreground">— {line.sub}</span>
            </Link>
          ))}
          <Link
            href="/products"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
          >
            Compare all products
          </Link>
          <Link
            href="/plans"
            className="mt-1 rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Plans &amp; packages
          </Link>
          <Link
            href="/blog"
            className="rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/book-demo"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-bold text-primary-foreground"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
