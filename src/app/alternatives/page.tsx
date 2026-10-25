import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Eyebrow, PrimaryCTA, SecondaryCTA } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { pageMetadata, JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { alternativesPages } from "@/lib/alternatives";
import { comparisons } from "@/lib/comparisons";

export const metadata = pageMetadata({
  title: "Alternatives to popular field sales software",
  description:
    "Round-ups of the real alternatives to Bizom, FieldAssist, Unolo, TrackOlap and Delta Sales App — who each tool suits, and where each one falls short.",
  path: "/alternatives",
  keywords: [
    "field sales software alternatives",
    "SFA software alternatives India",
    "field force tracking alternatives",
    "Bizom alternatives",
    "FieldAssist alternatives",
    "Unolo alternatives",
    "TrackOlap alternatives",
    "Delta Sales App alternatives",
  ],
});

/**
 * Hub above the /alternatives/[slug] round-ups.
 *
 * The 2026-10-25 audit found this URL returning 404 while five pages sat
 * underneath it — crawlable only from the /compare hub and from each other.
 * A hub is also what a reader expects to exist: landing on "Unolo
 * alternatives" and clicking up should reach the other round-ups, not a
 * dead end.
 */
const faqs = [
  {
    q: "What is the difference between these pages and the OZZO vs pages?",
    a: "A round-up lists several tools for one need and says who each one suits — OZZO is one entry among them. An “OZZO vs” page is a head-to-head on a single competitor, in much more depth. Start with a round-up to build a shortlist, then read the head-to-head on the one or two you are serious about.",
  },
  {
    q: "Is OZZO always listed first?",
    a: "No. The round-ups put the tool that suits the described need first, and each entry — OZZO included — carries a “watch out” line stating a real limitation. A page where one tool wins every row is an advert, and buyers discount it.",
  },
  {
    q: "Do you publish competitors' prices?",
    a: "No. Vendor pricing changes and much of it is quote-only, so anything we printed would be out of date or wrong, and stating a rival's price incorrectly is a real legal risk. We publish our own rates in full on the plans page and describe competitors by who they are built for.",
  },
  {
    q: "How do I shortlist field sales software?",
    a: "Decide first whether you need tracking only or tracking plus order-taking and collections — that one answer removes most of the market. Then check offline capability, whether your team is Android or iPhone, and whether pricing is published. Demo two tools, not six.",
  },
];

export default function AlternativesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Alternatives", path: "/alternatives" },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>Alternatives</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            Alternatives to the tools{" "}
            <span className="ozzo-gradient-bright">you&apos;re shortlisting</span>
          </h1>
          {/* Answer-first: the block an AI engine lifts when asked
              "what are the alternatives to <tool>". */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Each round-up below takes one field-sales tool and lists the real
            alternatives to it — what each one is built for, who it suits and
            where it falls short. OZZO is one entry among several, never
            automatically first, and every entry carries a genuine limitation.
            We do not publish competitors&apos; prices, because vendor rates
            change and most are quote-only.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/compare">See head-to-heads</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── The round-ups ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <Eyebrow>The round-ups</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            Pick the tool you are moving away from
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {alternativesPages.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  href={`/alternatives/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <p className="ozzo-eyebrow text-muted-foreground">
                    {a.targetCategory}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">
                    {a.target} alternatives
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {a.picks.length} options compared
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── How to shortlist ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Before you demo anything</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Four questions that cut the market down fast
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most shortlists are too long because they start from feature
              lists. These four answers remove most of the market before you
              book a single call.
            </p>
            <ul className="mt-7 space-y-5">
              {[
                [
                  "Do you need tracking only, or tracking plus orders?",
                  "This is the big fork. Attendance-and-GPS tools are cheaper and simpler. Order-taking, collections and outstanding are a different class of product. Buying the wrong side of this line is the most common and most expensive mistake.",
                ],
                [
                  "Does it work with no signal?",
                  "If your reps sell in markets or rural belts, an app that needs a connection means orders written on paper and re-typed at night — which is where pricing errors and lost orders come from.",
                ],
                [
                  "Android, iPhone, or both?",
                  "Several Indian field-sales apps, OZZO included, are Android-only today. If your team is on iPhone this decides the shortlist on its own.",
                ],
                [
                  "Is the price published?",
                  "Quote-only pricing is normal at the enterprise end and usually signals an implementation project rather than a sign-up. Neither is wrong — but you should know which you are buying before the third call.",
                ],
              ].map(([q, a]) => (
                <li key={q} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                    strokeWidth={2.5}
                  />
                  <span>
                    <span className="text-base font-bold text-foreground">
                      {q}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {a}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─────────────── Head-to-heads ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>Going deeper</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Once you have two names, read the head-to-head
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {comparisons.length} side-by-side comparisons, each conceding
              where the other tool is genuinely stronger.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2.5">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
              >
                OZZO vs {c.competitor}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Shopping by capability instead?{" "}
            <Link
              href="/salesman-location-tracking-software"
              className="font-bold text-primary"
            >
              Salesman location tracking software
            </Link>{" "}
            and{" "}
            <Link href="/fmcg-software" className="font-bold text-primary">
              FMCG software explained
            </Link>{" "}
            cover the two most-searched categories.
          </p>
        </Container>
      </section>

      <FaqSection items={faqs} />
    </>
  );
}
