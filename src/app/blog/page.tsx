import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container, SectionHeading, PrimaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
} from "@/lib/seo";
import { getAllPosts, formatBlogDate } from "@/lib/blog";

export const metadata = pageMetadata({
  title: "Blog — field sales, CRM & distribution insights",
  description:
    "Practical guides and playbooks for field-sales teams — attendance and GPS tracking, beat routes, order and payment collection, outstanding, stock, schemes, distribution and WhatsApp CRM.",
  path: "/blog",
  keywords: [
    "field sales blog",
    "sales force automation guide",
    "field force tracking tips",
    "distribution management",
    "beat planning",
    "WhatsApp CRM",
  ],
});

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const [featured, ...rest] = allPosts;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12 md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>The OZZO blog</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-foreground md:text-6xl">
            Field sales, made <span className="ozzo-gradient-text">simpler</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides and playbooks for teams that sell, service and deliver
            on the ground — coverage, collections, distribution and the systems that
            keep them honest.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-28">
        <Container>
          {allPosts.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">
                New articles are on the way
              </h2>
              <p className="mt-3 text-muted-foreground">
                We&apos;re writing practical guides for field-sales teams. In the
                meantime, book a demo and we&apos;ll walk you through it live.
              </p>
              <div className="mt-6 flex justify-center">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              </div>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Reveal>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05] md:grid-cols-2"
                  >
                    <div className="ozzo-grid relative flex min-h-[220px] items-center justify-center bg-primary-soft text-primary/20">
                      <span className="text-7xl md:text-8xl" aria-hidden>
                        {featured.emoji}
                      </span>
                      <span className="absolute left-5 top-5 rounded-full bg-card px-3 py-1 text-xs font-bold text-primary shadow-sm">
                        Latest
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-7 md:p-9">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {featured.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {featured.description}
                      </p>
                      <div className="mt-5 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                        <span>{formatBlogDate(featured.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {featured.readingMinutes} min read
                        </span>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* The rest */}
              {rest.length > 0 && (
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <Reveal key={post.slug} delay={i * 60}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]"
                      >
                        <div className="ozzo-grid flex h-32 items-center justify-center bg-primary-soft text-primary/20">
                          <span className="text-5xl" aria-hidden>
                            {post.emoji}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 2).map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg font-bold leading-snug text-foreground">
                            {post.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {post.description}
                          </p>
                          <div className="mt-4 flex items-center gap-3 text-xs font-medium text-muted-foreground">
                            <span>{formatBlogDate(post.date)}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}
