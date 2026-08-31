# OZZO Marketing Website

A standalone, SEO- and AI-search-ready marketing site for **OZZO** — CRM,
Workforce & Field Sales in one platform. Built with Next.js 16 (App Router),
React 19 and Tailwind v4, matching the product's dark violet theme and Inter
font.

Pages: **Home** (`/`), **Products** (`/products`), **Contact** (`/contact`),
plus Privacy and Terms. There is **no sign-up flow** — every call to action
drives visitors to the inquiry form, and your team calls them back.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev                        # http://localhost:3100
```

## Before you launch — fill these in

1. **`src/lib/site.ts`** — the single source of truth. Replace the `TODO`
   values: `legalName`, all of `contact` (email, phone, WhatsApp, address,
   hours, social links).
2. **`.env.local`**
   - `NEXT_PUBLIC_SITE_URL` — your real domain (used for canonical URLs,
     sitemap, OG tags). No trailing slash.
   - `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — already set
     to the wacrm project.
   - `RESEND_API_KEY` + `INQUIRY_NOTIFY_EMAIL` + `INQUIRY_FROM_EMAIL` — enable
     email alerts for new inquiries (optional; inquiries still save to the DB
     without them). Get a key at https://resend.com and verify your sending
     domain.

## How lead capture works

The contact form posts to `POST /api/inquiry`, which:

1. Validates the input (zod) and drops bot submissions (honeypot).
2. Inserts a row into `public.website_inquiries` in the **wacrm** Supabase
   project (RLS allows anonymous insert only — no public reads).
3. Sends a best-effort email alert to your team via Resend (if configured).

View incoming leads in the Supabase dashboard → Table editor →
`website_inquiries`, or build an admin screen later.

## SEO & AI-search features

- Server-rendered pages with per-page `<title>`, meta description and canonical.
- JSON-LD structured data: Organization, WebSite, SoftwareApplication (with
  offers), FAQPage, BreadcrumbList, ContactPage.
- `sitemap.xml` and `robots.txt` generated automatically.
- Dynamic Open Graph / Twitter card image (`opengraph-image.tsx`).
- `/llms.txt` — a clean, structured brief for AI search engines and assistants.
- Semantic HTML, skip-link, reduced-motion support, responsive + accessible.

## Deploy (Vercel)

1. Push this folder to a new Git repo.
2. Import into Vercel; set the environment variables from `.env.local`.
3. Point your domain at it. Set `NEXT_PUBLIC_SITE_URL` to that domain.

## Content integrity

All marketing copy is grounded in **production-verified** capabilities per
`OZZO_FEATURE_MASTER_CATALOG.md`. Aspirational/unshipped items (WhatsApp
broadcasts, automations, flows, cart recovery, WhatsApp payment links) are
deliberately **not** claimed. Keep it that way when editing copy.
