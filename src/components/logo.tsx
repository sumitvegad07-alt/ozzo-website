import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site";
import { cn } from "@/lib/utils";

// Intrinsic size of the WebP wordmark. It is authored at 440px wide — 3x the
// largest on-screen render (h-9 / 36px) — so it stays crisp on retina while
// costing ~10KB instead of the 268KB PNG it replaced.
const LOGO_W = 440;
const LOGO_H = 107;

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  // Navbar sits on the light cream background, so we use the light-background
  // wordmark variant (the two Z's recoloured navy so they read on light).
  const height = size === "sm" ? "h-7" : "h-8";
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label={`${brand.name} home`}
    >
      <Image
        src="/brand/logo-light.webp"
        alt={brand.name}
        width={LOGO_W}
        height={LOGO_H}
        priority
        className={cn(
          "w-auto transition-transform group-hover:scale-105",
          height,
        )}
      />
    </Link>
  );
}
