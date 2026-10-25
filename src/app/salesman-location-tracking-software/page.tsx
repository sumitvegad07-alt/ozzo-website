import Link from "next/link";
import Image from "next/image";
import { Check, X, ArrowRight } from "lucide-react";
import { Container, PrimaryCTA, SecondaryCTA, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { FaqSection } from "@/components/faq-section";
import { CurrencyScript } from "@/components/pricing-shell";
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import {
  trackingCapabilities,
  trackingLimits,
  trackingFaqs,
} from "@/lib/salesman-tracking-page";

export const metadata = pageMetadata({
  title: "Salesman Location Tracking Software in India",
  description:
    "Track your salesmen live: selfie + GPS attendance, geo-tagged customer visits and beat routes, on one Android app. From ₹150 per user/month.",
  path: "/salesman-location-tracking-software",
  keywords: [
    "salesman location tracking software",
    "salesman tracking software India",
    "salesman tracking app",
    "field staff location tracking",
    "GPS attendance app for sales team",
    "sales team location tracking software",
    "employee location tracking app India",
    "geo-tagged visit tracking",
    "beat route tracking software",
    "field force tracking app India",
  ],
});

export default function SalesmanLocationTrackingPage() {
  return (
    <>
      <CurrencyScript />
      <JsonLd
        data={[
          softwareApplicationSchema(),
          faqSchema(trackingFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Salesman location tracking software",
              path: "/salesman-location-tracking-software",
            },
          ]),
        ]}
      />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-16 text-white md:pt-44">
        <div className="ozzo-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <div className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[140px]" />
        <div className="animate-drift-b pointer-events-none absolute right-0 -top-16 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/30 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        <Container className="relative z-10 text-center">
          <Eyebrow center>Salesman location tracking</Eyebrow>
          <h1 className="ozzo-display mx-auto mt-4 max-w-4xl text-[2.5rem] leading-[1.04] text-white md:text-6xl">
            Salesman location tracking software for{" "}
            <span className="ozzo-gradient-bright">Indian field teams</span>
          </h1>
          {/* Answer-first: this paragraph is the block an AI engine quotes. It
              has to stand alone, without the rest of the page. */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Salesman location tracking software records where your field
            salesmen are during the working day. The rep punches in from an
            Android app with a selfie and GPS; while they are punched in, their
            location is recorded in the background and every customer visit is
            stamped with the place it happened. Managers see the day drawn on a
            map — route travelled, visits made, distance covered — from a web
            dashboard. OZZO does this from ₹150 per user per month, and adds
            order booking and payment collection on the same app when you need
            them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="#what-you-see">What you see</SecondaryCTA>
          </div>

          <Reveal>
            <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl ring-1 ring-inset ring-white/10">
              <Image
                src="/product/live-location-tracking.webp"
                alt="OZZO Location Tracking dashboard showing a salesman's GPS route across Rajkot for the month, with visit pins and a location timeline beside the map"
                width={1293}
                height={862}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[13px] text-white/45">
              A real OZZO screen — one rep&apos;s tracked route, visits and
              location timeline.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────── The four capabilities ─────────────── */}
      <section id="what-you-see" className="py-16 md:py-20">
        <Container>
          <Eyebrow>What you actually see</Eyebrow>
          <h2 className="ozzo-display mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
            Four things a manager wants, and where each one lands
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tracking is only useful if it answers a question you actually have.
            These are the four, and each is a module you can switch on.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trackingCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 md:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon name={c.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[13px] text-foreground"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
                          strokeWidth={2.5}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────── Attendance screenshot ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>Attendance</Eyebrow>
                <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
                  Punch in time, punch out time, and the coordinates of both
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Attendance is measured against the shift you configure, with a
                  grace period you set. Every row carries the time in, the time
                  out, the duration and the exact location each punch was made
                  from — so &ldquo;I was at the market by ten&rdquo; is a record,
                  not a claim.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Day, user and month views sit on the same screen, with leave
                  and holidays on the same calendar.
                </p>
                <Link
                  href="/products/sfa"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
                >
                  See the whole field product
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src="/product/gps-attendance.webp"
                  alt="OZZO User Attendance screen listing each rep's punch in time, punch out time, duration and the GPS coordinates of both punches, measured against the configured shift"
                  width={1620}
                  height={655}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── Geo-fencing ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={80} className="lg:order-2">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src="/product/geo-fencing-settings.webp"
                  alt="OZZO geo-fencing settings: fence a rep's visit check-in and check-out to the customer's saved location with an allowed radius, and fence attendance punch-in and punch-out to pinned work locations"
                  width={1099}
                  height={580}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal className="lg:order-1">
              <div>
                <Eyebrow>Geo-fencing</Eyebrow>
                <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
                  Stop the visit that never happened
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Tracking tells you where someone was. Geo-fencing decides what
                  they are allowed to do from there. Turn it on and a rep must be
                  within a radius you choose of the customer&apos;s saved
                  location to check in — otherwise the app tells them they are
                  not in range.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Fence visit check-in, check-out, or both",
                    "Choose the radius; the phone's own GPS accuracy is added automatically so honest reps aren't wrongly blocked",
                    "Fence attendance too — pin punch-in and punch-out to work locations you set",
                    "Anyone with no location assigned keeps punching from anywhere, so it can never lock your team out of its own attendance",
                  ].map((x) => (
                    <li
                      key={x}
                      className="flex items-start gap-2.5 text-sm leading-snug text-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────── Visits + the field app ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>In the field</Eyebrow>
            <h2 className="ozzo-display mx-auto mt-3 max-w-3xl text-3xl text-foreground md:text-4xl">
              One app for the rep, one dashboard for you
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              The rep gets a single home screen: punch in, today&apos;s route,
              visits and distance so far. Every visit they record lands on the
              customer&apos;s own history with its time, duration, photo and
              feedback.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
            <Reveal>
              <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-border shadow-xl">
                <Image
                  src="/product/app-punch-in.webp"
                  alt="The OZZO Android app home screen: a Punch In button to start the shift, with tiles for visits today, distance today, orders, collection and today's route"
                  width={720}
                  height={1600}
                  sizes="280px"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src="/product/customer-visits.webp"
                  alt="OZZO Customer Visits list showing each visit's customer, check-in and check-out time, duration, the photo captured on site and the rep's feedback, with a map link per row"
                  width={1620}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            It all works offline. Reps punch in, record visits and capture orders
            in markets with no signal, and everything syncs itself when the
            connection comes back.
          </p>
        </Container>
      </section>

      {/* ─────────────── Tracking only, or tracking + orders ─────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Eyebrow center>What it costs</Eyebrow>
            <h2 className="ozzo-display mt-3 text-3xl text-foreground md:text-4xl">
              Buy tracking on its own, or the whole field day
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <p className="ozzo-eyebrow text-muted-foreground">
                  Tracking only
                </p>
                <h3 className="ozzo-display mt-2 text-3xl text-foreground">
                  WFA{" "}
                  <span data-cur-only data-c="INR">
                    ₹150
                  </span>
                  <span data-cur-only data-c="USD">
                    $4
                  </span>
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    / user / month
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Selfie + GPS attendance, live location, geo-tagged visits, beat
                  routes, territory and expenses. Everything on this page.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-primary/30 bg-card p-7 ring-1 ring-primary/10">
                <p className="ozzo-eyebrow text-primary">
                  Tracking + sales
                </p>
                <h3 className="ozzo-display mt-2 text-3xl text-foreground">
                  SFA{" "}
                  <span data-cur-only data-c="INR">
                    ₹300
                  </span>
                  <span data-cur-only data-c="USD">
                    $10
                  </span>
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    / user / month
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Everything in WFA, plus offline order capture, field payment
                  collection, automatic outstanding and stock, schemes, price
                  lists and distributor levels.
                </p>
              </div>
            </Reveal>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            <span data-cur-only data-c="INR">
              Yearly billing, plus 18% GST. Minimum order ₹5,000. Every rate is
              published — no &ldquo;contact us for pricing&rdquo;.
            </span>
            <span data-cur-only data-c="USD">
              Yearly billing. Every rate is published — no &ldquo;contact us for
              pricing&rdquo;.
            </span>
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="/book-demo">Book a demo</PrimaryCTA>
            <SecondaryCTA href="/plans">See all plans</SecondaryCTA>
          </div>
        </Container>
      </section>

      {/* ─────────────── Honest limits ─────────────── */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/25 bg-amber-500/[0.04] p-7 md:p-9">
            <Eyebrow>Before you buy</Eyebrow>
            <h2 className="ozzo-display mt-3 text-2xl text-foreground md:text-3xl">
              Four things OZZO does not do
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Worth knowing now rather than in week three of an evaluation.
            </p>
            <ul className="mt-5 space-y-3">
              {trackingLimits.map((l) => (
                <li key={l.title} className="flex items-start gap-3">
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-amber-500"
                    strokeWidth={2.5}
                  />
                  <span>
                    <span className="text-sm font-bold text-foreground">
                      {l.title}
                    </span>
                    <span className="block text-[13px] leading-snug text-muted-foreground">
                      {l.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                ["ozzo-vs-unolo", "OZZO vs Unolo"],
                ["ozzo-vs-fieldsense", "OZZO vs FieldSense"],
                ["ozzo-vs-trackolap", "OZZO vs TrackOlap"],
              ].map(([slug, label]) => (
                <Link
                  key={slug}
                  href={`/compare/${slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
                >
                  {label}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={trackingFaqs} />

      {/* ─────────────── Spokes ─────────────── */}
      <section className="border-t border-border bg-card-2 py-16">
        <Container>
          <p className="ozzo-eyebrow mb-2 text-center text-muted-foreground">
            Built for your trade
          </p>
          <h2 className="ozzo-display mb-7 text-center text-2xl text-foreground md:text-3xl">
            Tracking, tuned to how your industry sells
          </h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              ["fmcg-companies", "FMCG"],
              ["pharmaceutical-companies", "Pharmaceutical"],
              ["cpvc-pvc-pipe-companies", "Pipes & fittings"],
              ["paint-companies", "Paints"],
              ["seed-companies", "Seeds"],
              ["auto-components-spare-parts-companies", "Auto components"],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30"
              >
                {label}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            <Link href="/industries" className="font-bold text-primary">
              All 28 industries
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
