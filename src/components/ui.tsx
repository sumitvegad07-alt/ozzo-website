import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)}>{children}</div>
  );
}

/** Small-caps hairline label with a leading rule — the editorial eyebrow. */
export function Eyebrow({
  children,
  className,
  center = false,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <p
      className={cn(
        "ozzo-eyebrow flex items-center gap-3 text-primary",
        center && "justify-center",
        className,
      )}
    >
      <span className="h-px w-6 bg-primary/50" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        center && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="ozzo-display mt-4 text-4xl text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function PrimaryCTA({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SecondaryCTA({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      {children}
    </Link>
  );
}
