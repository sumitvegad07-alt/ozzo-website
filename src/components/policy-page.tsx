import { Container } from "@/components/ui";

/**
 * Shared shell for every legal page.
 *
 * The prose styling was written out in full inside the Privacy Policy page and
 * was about to be copied into four more. Keeping it in one place means a legal
 * page cannot end up looking like a different site from its neighbours, and a
 * typography fix lands on all of them at once.
 */
export function PolicyPage({
  title,
  subtitle,
  effectiveDate,
  children,
}: {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-36 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{title}</h1>
        {subtitle && <p className="mt-2 text-lg font-semibold text-foreground">{subtitle}</p>}
        <p className="mt-3 text-sm text-muted-foreground">
          Effective date: {effectiveDate} · Last updated: {effectiveDate}
        </p>

        <div className="prose-content mt-10 space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground [&_th]:py-2 [&_td]:py-2 [&_td]:align-top [&_td]:pr-4 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
          {children}
        </div>
      </Container>
    </article>
  );
}
