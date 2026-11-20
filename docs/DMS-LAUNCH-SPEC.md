# OZZO DMS — launching the third product on ozzo.co.in

**Date:** 2026-11-20
**Status:** APPROVED in design by the founder, 2026-11-20. Build from this file.
**Scope:** `ozzo-site` only. No change to the DMS app, the CRM, or the database.

---

## 0. The problem being solved

The DMS **app** has been live at `https://dms.ozzo.co.in` since 2026-11-16, with
Plans 2, 4 and 6 shipped. **Nothing on `ozzo.co.in` says it exists or that it can
be bought.** The founder's ask — "create DMS product live on our website" — is a
marketing-surface job, not a product job.

A second gap was found while reading the site, and it is the more valuable one:

> **"distributor management software" is a declared target keyword on 20+ pages
> (`layout.tsx`, `/fmcg-software`, 14 industry pages, 2 sector pages) and NO page
> on the site owns it.**

That is exactly the failure `/fmcg-software` and `/whatsapp-crm` were created to
fix — a theme sprayed across leaf pages with no pillar to rank. So this launch
ships a category pillar, not only a product page.

---

## 1. Founder rulings, 2026-11-20

| # | Decision |
|---|---|
| 1 | Blogs: **update the 4 existing posts** + hand-write 3 new + queue 8 topics for the Sunday job. Not a bulk backfill, and **no backdating** |
| 2 | **Publish the price.** ₹10,000 per 100 logins, stated plainly |
| 3 | The period is **per year**, + 18% GST. See §2 — this was previously unrecorded anywhere |
| 4 | Scope: the category pillar + 4 new compare pages + a distributor-portal row on all 13 existing compare pages |

### 1.1 Assumption flagged to the founder, not contradicted

DMS is written as an **add-on to a CRM or SFA plan**, never a standalone purchase.
Reason: the catalogue, price lists, customer hierarchy and the login-creation
screen all live in the CRM, so a DMS sold alone would have no data to stand on.

---

## 2. The price, and why this document matters

`ozzo-dms-product-v1.md` ruling 9 says only **"Charged per login: ₹10,000 for 100
logins"**. It never states a billing period — neither does any migration, any
pricing doc, or `catalog.ts`. The founder confirmed **per year** on 2026-11-20.

**This file is the only record of that.** Before quoting it anywhere else, or
building it into billing, re-read this section.

Public framing:

> **₹10,000 per year for 100 distributor and dealer logins, + 18% GST**
> — about ₹8 per login per month.

That is the strongest line on the page: every rival prices per distributor, on a
quote. Per §3 of `comparisons.ts`, **a competitor's price is never stated** — the
contrast is drawn between our number and their *quote model*, never their rupees.

---

## 3. The honesty boundary

Verified screen by screen against `C:\Wacrm\ozzo-dms` on 2026-11-20, not from the
spec — the shipped app is **wider** than `ozzo-dms-product-v1.md` v1 in two places
(payments are writable; a portal user may add a shop), so the spec alone would
have under-sold it.

### MAY be claimed — live today

- A login for a customer **at any level** (distributor, stockist, dealer); each
  sees itself and everyone below it
- **Purchase orders** on the company; **sales orders** to their own shops
- Each order priced on **that buyer's own price list and credit limit**
- **Schemes applied automatically** — the same `detect_eligible_schemes` /
  `calculate_order_pricing` SQL that prices a salesman's order
- **Payments recorded** and outstanding kept (`payments/new` is a real screen)
- **Dispatch + Pending Dispatch** — a distributor dispatches its own sales orders
- **Four reports**: orders, sales, collection, outstanding
- **Print A4/A5** of any order or dispatch
- **Per-column filter row** on every table
- **"Booked by" / "Collected by"** — the name only, no code, phone, role or territory
- **Adding their own shop**, gated by a per-tenant setting
- **Web browser, no app to install**

### MUST NOT be claimed — not built

Distributor stock & auto-replenishment · claims (damage / scheme / freight / rate
difference) · primary-vs-secondary stock reporting · delivery & delivery boys ·
scheme *management* from the portal · announcements to the portal · my-activity /
follow-ups · any distributor mobile app

**Every rival ships claims and distributor stock.** On the compare pages that
becomes an honest "choose them if…", which is what makes the rest credible — and
is already the stated contract at the top of `comparisons.ts`.

---

## 4. What gets built

### New pages
| Path | Shape |
|---|---|
| `/products/dms` | Product page. Data in `src/lib/dms-page.ts`, component `src/components/pages/dms-product.tsx`, mirroring the SFA pair |
| `/distributor-management-software` | Category pillar, modelled on `/whatsapp-crm` |
| `/compare/ozzo-vs-botree` | New `Comparison` entry |
| `/compare/ozzo-vs-marg-erp` | New `Comparison` entry |
| `/compare/ozzo-vs-salesdiary` | New `Comparison` entry |
| `/compare/ozzo-vs-bizom-dms` | New `Comparison` entry — Bizom's DMS, distinct from the existing SFA comparison |

### Edited
- `site.ts` — DMS as the third `productLine`; DMS price constants beside the store ids
- `plans.ts` — a DMS add-on row; the product model comment (two products → three)
- `comparisons.ts` — distributor-portal row added to all 13 existing entries
- `alternatives.ts` — a DMS line on all 8 pages
- `routes.ts` — the 6 new paths, so **sitemap and llms.txt both pick them up**
- `/products`, nav, footer — three products
- `blog.ts` — 3 new posts; DMS added to the 4 existing where honest
- `blog-topics.ts` — 8 DMS topics appended to the queue
- `scripts/write-weekly-post.ts` — **the prompt taught that DMS exists**
- `scripts/build-blog-images.mjs` — illustrations for the 3 new posts

### §4.1 The generator prompt is not optional

`ozzo-site-dual-platform` records the trap: when the platform fact changed, the
Sunday script's prompt kept the stale claim and would have reprinted it in every
future post. The prompt describes OZZO's products in prose; **a new product line
that is not added there is a product the blog will never mention again.**

---

## 5. Gates

`ozzo-site` runs `check-meta.mjs` and `check-blog-images.mjs` as `postbuild`, and
**a failure fails the Vercel deploy while git says the change shipped**.

1. Titles **≤ 60 rendered** chars including the ` — OZZO` suffix → **≤ 53 in source**
2. Descriptions **≤ 155**
3. Every `{type:"image"}` block needs a real file under `public/blog/<slug>/`
4. `npx tsc --noEmit`
5. `npm run build` in full — the meta check reads `.next/server/app`, so `tsc`
   passing proves nothing about it
6. Click it through, then push to `main` (Vercel deploys `main`)

---

## 6. Explicitly out of scope

No database change. No change to `ozzo-dms` or `wacrm-web`. No new domain. No
backdated posts. No competitor prices. No claim from §3's second list.
