import Link from "next/link";
// No brand icons here on purpose: lucide-react 1.x removed Linkedin/Youtube/
// Facebook, and importing them passes tsc and `next build` before failing at
// runtime. Verified against the installed package before writing this.
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container, Eyebrow, PrimaryCTA, SecondaryCTA } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  aboutPageSchema,
  founderSchema,
} from "@/lib/seo";
import { brand, contact, founder, productLines } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About OZZO Technologies",
  description:
    "OZZO is built by Sumit Vegad, who spent ten years selling CRM and SaaS tools before building the one he kept looking for. Our story, told plainly.",
  path: "/about",
  keywords: [
    "About OZZO",
    "OZZO Technologies",
    "Sumit Vegad",
    "OZZO founder",
    "field sales software company India",
  ],
});

/**
 * /about
 *
 * The 2026-10-25 audit found no about page at all — /about and /about-us both
 * 404'd — while Content E-E-A-T was the weakest movable category at 60/100.
 * This is the page a search or AI engine reads to decide what kind of company
 * this is, and the natural home for the named human that `Organization`
 * schema points at as `founder`.
 *
 * EVERYTHING HERE IS THE FOUNDER'S OWN ACCOUNT, given 2026-10-26. No customer
 * counts, no revenue, no team size, no awards, no testimonials — the same bar
 * the comparison and industry pages hold to. The honesty section below is not
 * a claim about intent; each of the three is independently checkable on this
 * site, which is the only reason it earns a place here.
 */
const PROFILES = [
  { label: "LinkedIn", href: contact.social.linkedin },
  { label: "Facebook", href: contact.social.facebook },
  { label: "YouTube", href: contact.social.youtube },
].filter((p) => p.href);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema(),
          founderSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
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
          <Eyebrow center>About us</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.04] text-white md:text-6xl">
            Built by someone who sold{" "}
            <span className="ozzo-gradient-bright">CRMs for ten years</span>
          </h1>
          {/* Answer-first: the block an engine quotes when asked who makes
              OZZO. It has to name the company, the person and the dates. */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            {brand.legalName} builds field sales and CRM software for Indian
            businesses. It was founded by {founder.name}, who spent ten years
            selling SaaS tools — CRMs most of all — before building one himself.
            Work on OZZO started in {founder.buildStarted}; about ten months
            later it is live, and companies are running their field teams on it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/products">See the products</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── Ten years ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The founder</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Ten years on the other side of the table
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {founder.name} spent a decade selling software to Indian
              companies, most of it CRM. That job teaches you something a
              product team rarely gets to see: what happens <em>after</em> the
              sale. Which features are still being used in month three. Which
              ones get quietly abandoned. What a business owner asks before they
              sign — and the very different question they ask six months later,
              when the tool has not actually changed anything.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ten years of those conversations is an unusual way to learn a
              market. You stop hearing what software is supposed to do and start
              hearing what it fails to do, repeatedly, in the same places.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────── The problem ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Why OZZO exists</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              The same gap, company after company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The CRM held the office and knew nothing about the field.
              Attendance sat in one app. Orders arrived on paper or over
              WhatsApp. Outstanding lived in a spreadsheet somebody updated on
              Saturdays. And at four in the afternoon nobody could say with any
              confidence where the field team actually was, or what the day had
              produced.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              These businesses were not short of software. They were short of
              one place where the day added up — and most of them were paying
              for three tools that each did a quarter of the job.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              So in {founder.buildStarted}, {founder.name.split(" ")[0]} started
              building the one he had spent ten years wishing he could sell.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────── How we build ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Three things we hold to
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Not values on a wall. Each of these is something you can check on
              this website in about a minute.
            </p>
            <ul className="mt-7 space-y-6">
              {[
                [
                  "Our prices are published",
                  <>
                    Every rate is on the{" "}
                    <Link href="/plans" className="font-semibold text-primary">
                      plans page
                    </Link>
                    . No &ldquo;contact us for pricing&rdquo;, no quote that
                    depends on how the call goes. You can work out what OZZO
                    costs your team before you ever speak to us.
                  </>,
                ],
                [
                  "We say what we do not do",
                  <>
                    Every product page carries a section on its limits, and our{" "}
                    <Link href="/compare" className="font-semibold text-primary">
                      comparison pages
                    </Link>{" "}
                    concede where a competitor is genuinely stronger. Finding
                    out in week three of an evaluation is worse for both of us
                    than finding out now.
                  </>,
                ],
                [
                  "We do not invent proof",
                  <>
                    No fabricated reviews, no invented customer logos, no star
                    ratings we have not earned, no statistics we have not
                    measured. When we have real reviews from real customers, we
                    will publish those — and not before.
                  </>,
                ],
              ].map(([title, body], i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
                    strokeWidth={2.5}
                  />
                  <span>
                    <span className="text-base font-bold text-foreground">
                      {title}
                    </span>
                    <span className="mt-1.5 block text-base leading-relaxed text-muted-foreground">
                      {body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─────────────── Where we are ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-7 md:p-9">
            <Eyebrow>Where we are now</Eyebrow>
            <h2 className="ozzo-display mt-3 text-2xl text-foreground md:text-3xl">
              Young company, finished product
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              OZZO went on sale in 2026. We are early, and we would rather tell
              you that than imply a decade of history we do not have.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              What we do have is a system that is built and running — not a
              prototype and not a roadmap. A web dashboard for managers, an
              Android app for reps that works offline, two products you can buy
              separately, and prices you can read without a sales call. Behind
              it, someone who has spent ten years learning what goes wrong after
              the invoice is signed.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────── What we make ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>What we make</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Two products, one customer record
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {productLines.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <p className="ozzo-eyebrow text-muted-foreground">
                    {p.fullName}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {p.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Find us ─────────────── */}
      {PROFILES.length > 0 && (
        <section className="border-t border-border py-16">
          <Container>
            <div className="text-center">
              <Eyebrow center>Elsewhere</Eyebrow>
              <h2 className="ozzo-display mt-3 text-2xl text-foreground md:text-3xl">
                Find {brand.name} online
              </h2>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                {PROFILES.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </a>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Or reach us directly at{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-primary"
                >
                  {contact.email}
                </a>{" "}
                and {contact.phoneDisplay}. {contact.hours}.
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────── CTA ─────────────── */}
      <section className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-soft p-10 text-center md:p-14">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="ozzo-display mx-auto max-w-2xl text-3xl text-foreground md:text-4xl">
                Want to see whether it fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Tell us how your field team works today. We will show you where
                OZZO fits and, just as usefully, where it does not.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
                <SecondaryCTA href="/plans">See all plans</SecondaryCTA>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
