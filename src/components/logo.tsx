import Link from "next/link";
import { brand } from "@/lib/site";
import { cn } from "@/lib/utils";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-light.png"
        alt={brand.name}
        className={cn(
          "w-auto transition-transform group-hover:scale-105",
          height,
        )}
      />
    </Link>
  );
}
