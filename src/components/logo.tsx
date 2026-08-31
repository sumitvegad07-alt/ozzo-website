import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { brand } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const text = size === "sm" ? "text-lg" : "text-xl";
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2", className)}
      aria-label={`${brand.name} home`}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105",
          box,
        )}
      >
        <MessageSquare className={icon} />
      </span>
      <span className={cn("font-bold tracking-tight text-foreground", text)}>
        {brand.name}
      </span>
    </Link>
  );
}
