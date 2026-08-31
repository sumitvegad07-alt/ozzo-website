# OZZO Marketing Website

A standalone, SEO- and AI-search-ready marketing site for **OZZO** — CRM,
Workforce & Field Sales in one platform. Next.js 16 (App Router), React 19,
Tailwind v4. Light/premium editorial theme, Inter font, violet accent.

**This is a separate project from the wacrm product app.** It has its own
Vercel project and its own URL — it must never be deployed over the product
app (which owns `/login`, `/dashboard`, etc.).

## Pages

- `/` — Home
- `/products` — overview of the three lines
- `/products/crm`, `/products/wfa`, `/products/sfa` — per-product deep pages
- `/book-demo` — the lead-capture form
- `/contact` — contact methods (email / WhatsApp / phone), no form
- `/privacy`, `/terms`

## Getting started (local)

```bash
npm install
npm run dev        # http://localhost:3100
```

`.env.local` is already present locally (git-ignored). If missing, copy
`.env.local.example` and fill it in.

## Deploy (Vercel)

1. Create a **new** Vercel project from this GitHub repo (do **not** reuse the
   `wacrm` product project).
2. Framework preset: **Next.js** (auto-detected). No custom build settings.
3. Add these **Environment Variables** (values are in your local `.env.local`):

   | Variable | Required | Notes |
   |---|---|---|
   | `NEXT_PUBLIC_SITE_URL` | yes | The site's own URL, no trailing slash (e.g. the `*.vercel.app` URL Vercel assigns, or a custom domain). Feeds canonical URLs, sitemap and OG tags. |
   | `NEXT_PUBLIC_SUPABASE_URL` | yes | wacrm Supabase project URL — needed for the lead form. |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | wacrm Supabase anon key. |
   | `RESEND_API_KEY` | optional | Email alerts for new leads. Inquiries still save to the DB without it. |
   | `INQUIRY_NOTIFY_EMAIL` | optional | Where lead alerts are sent. |
   | `INQUIRY_FROM_EMAIL` | optional | Verified Resend sender. |

4. Deploy. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the real URL
   and redeploy so canonicals/sitemap are correct.
5. Point a custom domain at this project later if you want.

## Lead capture

The `/book-demo` form posts to `POST /api/inquiry`, which validates input
(zod + honeypot) and inserts a row into `public.website_inquiries` in the
**wacrm** Supabase project (RLS allows anonymous insert only). View leads in
Supabase → Table editor → `website_inquiries`. Required fields: name, phone,
email, team size.

## Still to do before a "real" launch

- Fill real contact details in `src/lib/site.ts` (`legalName`, `contact.*` are
  placeholders like `+91 00000 00000`, `hello@ozzo.app`).
- Add a Resend key for email alerts (optional).
- Point a custom domain and update `NEXT_PUBLIC_SITE_URL`.

## Content integrity

All copy is grounded in **production-verified** capabilities per
`OZZO_FEATURE_MASTER_CATALOG.md`. Unshipped items (WhatsApp broadcasts,
automations, flows, etc.) are deliberately **not** claimed. Keep it that way.
