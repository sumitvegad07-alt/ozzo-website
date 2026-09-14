import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Container, PrimaryCTA, SecondaryCTA } from "@/components/ui";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  blogPostingSchema,
} from "@/lib/seo";
import { getPost, getAllPosts, formatBlogDate, type BlogBlock } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Article not found", description: "", path: `/blog/${slug}` });
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="ozzo-display mt-12 text-2xl text-foreground md:text-3xl">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-[17px] leading-relaxed text-foreground/90">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-primary/40 bg-primary-soft/40 py-4 pl-6 pr-4 text-xl font-semibold leading-snug text-foreground">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="relative overflow-hidden pt-32 md:pt-40">
        <div className="ozzo-grid pointer-events-none absolute inset-0 -z-10 text-foreground/[0.04]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="ozzo-display mt-5 text-[2.1rem] leading-[1.08] text-foreground md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span>{formatBlogDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readingMinutes} min read
            </span>
          </div>

          <div className="ozzo-grid mt-9 flex h-48 items-center justify-center rounded-3xl border border-border bg-primary-soft text-primary/20 md:h-64">
            <span className="text-7xl md:text-8xl" aria-hidden>
              {post.emoji}
            </span>
          </div>
        </Container>

        <Container className="max-w-3xl pb-8 pt-4">
          <p className="mt-8 text-xl font-medium leading-relaxed text-foreground">
            {post.description}
          </p>
          <div className="mt-2">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* In-article CTA */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-primary-soft p-8 text-center">
            <h2 className="ozzo-display text-2xl text-foreground md:text-3xl">
              See it on your own field team
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Book a free, no-pressure demo and we&apos;ll show you exactly how OZZO
              fits the way your team already works.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
              <SecondaryCTA href="/plans">Compare plans</SecondaryCTA>
            </div>
          </div>
        </Container>
      </article>

      {/* More articles */}
      {more.length > 0 && (
        <section className="border-t border-border bg-card-2 py-20 md:py-24">
          <Container>
            <h2 className="ozzo-display mb-8 text-2xl text-foreground md:text-3xl">
              More from the blog
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]"
                >
                  <div className="ozzo-grid flex h-28 items-center justify-center bg-primary-soft text-primary/20">
                    <span className="text-4xl" aria-hidden>{p.emoji}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-bold leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
