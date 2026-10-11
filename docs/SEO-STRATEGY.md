# OZZO Organic Lead Engine — SEO + AI SEO Strategy

**Owner:** Sumit Vegad
**Site:** https://ozzo.co.in
**Written:** 2026-10-11
**Status:** Approved plan — source of truth. If a later brief contradicts this file, flag it.

---

## 0. Where we actually are (audited 2026-10-11)

I checked the live site, not assumptions.

### What is already good — do not rebuild this

| Thing | Status |
|---|---|
| Server-side rendering | Real text in HTML. AI crawlers can read it. |
| Schema markup | Organization, WebSite, BreadcrumbList, FAQPage, SoftwareApplication, Offer, AggregateOffer |
| Canonical tags | Present and correct on every page checked |
| One H1 per page | Correct |
| robots.txt | Open. No AI bot is blocked. |
| llms.txt | Present, 18 KB, genuinely well written |
| Page count | 61 pages in sitemap |
| Industry pages | 36 pages, 1,400–1,700 words each, **8% overlap** = genuinely unique, not spun |
| Compare pages | 13 pages. Honest, with a "where they win" section, FAQ schema, and **zero outbound links to competitors** |

This is a better technical foundation than most Indian B2B SaaS sites. The build quality is not the problem.

### What is actually wrong

| Problem | Evidence |
|---|---|
| **Zero search visibility** | Searched for OZZO + field sales software India. Zero results. Not one page. |
| **Zero third-party presence** | Not on Capterra India, SourceForge, G2, or any "best field sales software" listicle |
| **Blog has stalled** | Only 2 posts, both September 2026 |
| **No "alternatives" pages** | All 13 compare pages are "OZZO vs X". None are "X alternatives". |
| **Title tag bug** | 36 industry pages render `… \| OZZO — OZZO` |
| **Meta descriptions too long** | 218–311 characters. Google cuts at ~160. |
| **Weak internal linking** | Industry pages link to generic `/compare`, not to the relevant comparison |
| **No published pricing** | Deliberate decision. It has a real cost — see §6. |

---

## 1. The one thing blocking everything else

**Google has not discovered the site, because nothing on the internet links to it.**

Google finds pages by following links. OZZO has effectively no inbound links and no brand mentions. So:

- The 36 industry pages cannot rank — Google barely knows they exist
- The 13 comparison pages cannot rank — same reason
- More content will not fix this. Writing page 62 changes nothing.

**This means content is not the bottleneck. Discovery and trust are.**

### Why this changes the order of work

The plan was: do SEO now, directories at the end of the month.

That order is backwards. Directory listings are not a marketing nice-to-have — they are the crawl path and the trust signal that makes all 61 existing pages start working. They are also, separately, the single biggest AI-SEO lever (see §4).

**Directories move to Week 1.** They take a few hours, not weeks, and everything else depends on them.

---

## 2. The strategy in one line

> Make OZZO discoverable and credible off-site first, then convert that into rankings and AI citations using the 61 pages that already exist — and only then add new content.

Four engines, run in this order:

| # | Engine | Purpose | Starts |
|---|---|---|---|
| A | Discovery & Trust | Get crawled, get cited, get found | Week 1 |
| B | Demand Capture | Convert high-intent searches into demos | Week 1 |
| C | Demand Creation | Reach buyers before they know the category | Week 4 |
| D | AI Citation Layer | Be the answer inside ChatGPT / Perplexity / AI Overviews | Ongoing |

---

## 3. Engine A — Discovery & Trust (Week 1, highest priority)

### A1. Directory listings

Claim and fully complete every profile. Use identical product names, feature lists, and category wording everywhere — inconsistency confuses both Google and AI models about what OZZO is.

**India-first (do these first — they rank for Indian buyers):**
- SoftwareSuggest
- Techjockey
- Capterra India
- GoodFirms
- SaaSworthy

**Global (AI models cite these heavily):**
- G2
- GetApp
- SourceForge
- Crunchbase
- Product Hunt

**Also:**
- Google Business Profile (OZZO Technologies)
- LinkedIn company page, kept active

### A2. Reviews

Target **10–15 genuine reviews** across SoftwareSuggest, Capterra India and G2 within 60 days.

Send existing customers the direct review link. Not a request to "leave a review somewhere" — one link, one platform, one person at a time.

Why this matters more than it looks: reviews are the single strongest signal for "best field sales software India" listicles, and those listicles are what AI models read when someone asks for recommendations.

### A3. Entity consistency

Make these identical everywhere — site, llms.txt, every directory, LinkedIn:

- Legal name: **OZZO Technologies**
- Category: **Sales Force Automation / Field Sales CRM**
- Products: **CRM** and **SFA** (two products only — field tracking is the "Field" tier of SFA)
- Contact: hello@ozzo.co.in · +91 92271 26301

---

## 4. Engine D — AI Citation Layer (run alongside everything)

For a brand with no search volume, **AI search is the bigger opportunity than Google.** Here is why.

Google needs volume + rankings + clicks. An AI assistant answering *"what are affordable alternatives to FieldAssist for a small Indian manufacturer?"* just needs to find a clear, factual page. A comparison page can be cited with zero Google traffic.

This flips the usual advice. For OZZO, comparison content is a **first** priority, not a last one.

### What actually drives AI citations

1. **Brand mentions on third-party sites** — correlates roughly 3× stronger than backlinks for AI visibility. This is why §3 is Week 1.
2. **Answer-first writing.** Open each section with a direct 2–3 sentence answer, then explain. That block is what gets quoted.
3. **Plain HTML tables.** Already done correctly. Never convert comparison tables to images.
4. **FAQ schema with real buyer questions.** Already done — extend it.
5. **Facts an AI can verify.** Specific numbers, named integrations, named industries. Vague marketing copy does not get cited.
6. **llms.txt** — already strong. Update whenever products or plans change.

### Already correct — keep it that way

- robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Content is server-rendered
- Comparison pages name competitors in plain text with no outbound link

---

## 5. Engine B — Demand Capture (Week 1–6)

### B1. Fix the technical bugs first (half a day)

| Fix | Detail |
|---|---|
| **Double brand suffix** | `src/app/layout.tsx:20` adds `— OZZO`. All 36 `metaTitle` values in `src/lib/industries.ts` already end in `\| OZZO`. Strip `\| OZZO` from the data. |
| **Meta descriptions** | Trim every description to 150–160 characters. Currently 218–311. |
| **Internal linking** | Every industry page should link to 2–3 *specific* comparison pages and the relevant product page — not just generic `/compare`. |
| **Compare page depth** | Currently ~916 words. Target 1,400+. Add a "Switching from X" section (see B3). |

### B2. Add "alternatives" pages — the missing keyword class

Every current comparison page contains the word "OZZO". Nobody searches a brand they have never heard of. Those pages have near-zero search demand today.

The high-volume version of the same intent drops our name:

| New page | Why |
|---|---|
| `/alternatives/delta-sales-app-alternatives` | SME-focused, real Indian search volume |
| `/alternatives/unolo-alternatives` | Direct SME competitor |
| `/alternatives/fieldassist-alternatives` | High brand awareness = high alternative searches |
| `/alternatives/bizom-alternatives` | Enterprise refugees are our ideal buyer |
| `/alternatives/trackolap-alternatives` | SME field tracking |

Same research, same honest structure, different framing — and 10× the addressable searches. Point each one at the matching `/compare/ozzo-vs-*` page.

### B3. Add a "Switching from X" section to every comparison page

Targets people **already using** a competitor. Pure upside, no risk of introducing anyone to anything.

Cover: what carries over, how data import works, how long it takes, what it costs.

### B4. Category pages we do not own yet

| Page | Target search |
|---|---|
| `/best-field-sales-app-india` | best field sales app India |
| `/whatsapp-crm` | WhatsApp CRM India — **strongest differentiator, build this early** |
| `/beat-plan-route-planning-software` | beat plan software / route planning |
| `/field-force-tracking-app` | field force tracking app India |
| `/sfa-software-for-small-business` | SFA for small business |

WhatsApp CRM is the one genuinely hard to copy. No large SFA competitor has a shared WhatsApp inbox with an AI assistant on the same customer record. Own that phrase.

---

## 6. The pricing decision

Pricing was deliberately removed site-wide. The plans page now says "from ₹5,000" with no per-user rate.

This is a real trade-off, and it costs us:

- **Google:** "<competitor> pricing" is one of the highest-intent searches in B2B SaaS. We cannot compete for it.
- **AI search:** when someone asks an AI "how much does OZZO cost", the AI cannot answer, so it recommends a vendor that publishes pricing instead. This is the most common reason a vendor gets skipped in an AI answer.
- **Buyers:** a large share of SME buyers filter out vendors who hide price.

**My recommendation:** publish a price *range* per plan ("₹X–Y per user/month, billed yearly") rather than exact figures. It keeps negotiation room but makes OZZO answerable.

This is your call, not mine. Flagging the cost so the decision is made with eyes open.

---

## 7. Engine C — Demand Creation (Week 4 onward)

Two posts in a month is not a blog. Target **4 posts per month**, every month.

Write for the buyer *before* they know software exists. Each post links to one product page and one industry page.

**First 8 topics, in order:**

1. How to track field sales reps without micromanaging them
2. Beat plan vs route plan — what Indian FMCG teams actually need
3. Excel and WhatsApp groups vs field sales software — the real cost
4. How to calculate and collect outstanding from distributors
5. What is secondary sales, and why primary sales numbers lie
6. How to set territory and beat coverage for a 10-person field team
7. Offline order capture — why it matters in rural India
8. How to pick field sales software: a 12-question checklist

**Rules for every post:**
- Answer the title question in the first 3 sentences
- Add an author byline with a real name and role (E-E-A-T)
- Include one original table, checklist or number
- End with one CTA: book a demo

---

## 8. Measurement

Track demos, not traffic. Build it into OZZO's own CRM.

On the `/book-demo` form, capture and store on the lead record:
- `landing_page` — first page of the session
- `referrer` / `utm_source`
- `first_touch_date`

Then report monthly:

| Metric | Question it answers |
|---|---|
| Demos per landing page | Which content earns meetings |
| Demo → customer rate per page | Are those buyers real |
| Assisted conversions | Which pages helped but didn't close |
| AI referral sessions | Traffic from chatgpt.com, perplexity.ai, gemini |
| Indexed pages (GSC) | Is discovery actually fixed |

**Review gate:** judge any new page only after **60 days indexed**. Earlier than that is noise.

---

## 9. 90-day calendar

### Days 1–14 — Unblock discovery
- [ ] Claim 10 directory profiles with identical wording
- [ ] Set up Google Business Profile
- [ ] Ship the technical fix batch (titles, meta descriptions, internal links)
- [ ] Submit sitemap in Google Search Console and request indexing on 10 key pages
- [ ] Ask 10 customers for reviews — one direct link each

### Days 15–30 — Capture demand
- [ ] Publish 3 "alternatives" pages
- [ ] Publish `/whatsapp-crm`
- [ ] Add "Switching from X" to the top 5 comparison pages
- [ ] Add landing-page capture to the demo form
- [ ] 2 blog posts

### Days 31–60 — Build authority
- [ ] 2 more alternatives pages + 2 category pages
- [ ] 4 blog posts
- [ ] First 3 guest articles or industry publication mentions
- [ ] Reach 10 reviews
- [ ] Check GSC: are pages moving from Discovered to Indexed?

### Days 61–90 — Measure and double down
- [ ] 4 blog posts
- [ ] Review demos-per-page; kill or rewrite anything with zero qualified leads
- [ ] Test actual AI answers: ask ChatGPT, Perplexity and Gemini for "best field sales software India" and record whether OZZO appears
- [ ] Decide on publishing a price range
- [ ] Expand whichever page type produced real demos

---

## 10. What is NOT in this plan, and why

- **Paid ads** — different budget, different decision. This plan is organic only.
- **Backlink buying** — risk outweighs benefit, and AI models weight genuine mentions higher anyway.
- **More industry pages** — 36 is already plenty. Make the existing ones rank before adding page 37.
- **iOS app content** — not shipped yet, so no page.

---

## 11. Success definition at day 90

Not "we rank #1". Realistic targets:

| Measure | Day 0 | Day 90 target |
|---|---|---|
| Pages indexed in Google | ~0 | 50+ |
| Third-party directory listings | 0 | 10 |
| Verified reviews | 0 | 10–15 |
| Blog posts | 2 | 12 |
| Qualified demo requests from organic | 0 | 5–10 / month |
| Appears in an AI answer for a category query | No | Yes, for at least one query |

Rankings and leads follow discovery and trust. Those come first.
