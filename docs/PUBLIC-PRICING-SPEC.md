# Public Pricing Page — Spec (awaiting approval)

**Status:** PROPOSED — do not build until Sumit approves §3 and §4.
**Date:** 2026-10-11
**Source of truth for INR:** `wacrm-web/src/lib/plans/catalog.ts` (`PLAN_PRICE`) and `wacrm-web/src/lib/plans/pricing.ts` (`MIN_USERS`, `TERM_UPLIFT`). Nothing here is invented.

---

## 1. The commercial model (already decided, 27 Sep 2026)

- **Yearly is the base price.** Shorter terms cost more because the customer commits less.
- **Half-yearly +20%. Quarterly +40%.**
- Every plan has a **recommended user count**. These are *not* hard floors — the founder's ruling is "never block a deal on this." A quote for fewer users must still price out.
- GST 18% is charged on top, and must be stated on the page.

## 2. Why every plan starts at the same number

This is the elegant part of the existing model, and the page should lead with it.

For all five plans, `rate × recommended users = ₹1,200/month`. So the entry ticket is identical no matter which plan you pick:

| Term | Entry ticket (every plan) |
|---|---|
| Quarterly | **₹5,040** |
| Half-yearly | **₹8,640** |
| Yearly | **₹14,400** |

That is what makes the existing "Plans start from ₹5,000 only" headline honest. Keep the headline; now we can show the arithmetic behind it.

---

## 3. INR pricing — CONFIRMED from code

Per user, per month. GST extra.

| Plan | Recommended users | Yearly (base) | Half-yearly (+20%) | Quarterly (+40%) |
|---|---|---|---|---|
| **CRM** | 12 | ₹100 | ₹120 | ₹140 |
| **WFA** | 8 | ₹150 | ₹180 | ₹210 |
| **CRM + WFA** | 6 | ₹200 | ₹240 | ₹280 |
| **SFA** | 4 | ₹300 | ₹360 | ₹420 |
| **CRM + SFA** | 3 | ₹400 | ₹480 | ₹560 |

**FSM, CRM+FSM and SFA+FSM are excluded.** `catalog.ts` marks their prices as unapproved placeholders and says "Do not publish these prices until they are confirmed." The FSM product is also not built yet.

---

## 4. USD pricing — PROPOSED, needs approval

Brief was "double the Indian price, show in USD."

A straight 2× of the INR figure converts to ~$2.27–$9.09, which are untidy numbers and would break the uniform entry ticket that makes the INR page work.

**Recommendation:** keep the same internal ratio (1 : 1.5 : 2 : 3 : 4) with a base unit of **$2.50**. That lands at roughly **2.2× the INR price** — meeting the "double" brief — while preserving a single clean international entry ticket.

| Plan | Recommended users | Yearly (base) | Half-yearly (+20%) | Quarterly (+40%) |
|---|---|---|---|---|
| **CRM** | 12 | $2.50 | $3.00 | $3.50 |
| **WFA** | 8 | $3.75 | $4.50 | $5.25 |
| **CRM + WFA** | 6 | $5.00 | $6.00 | $7.00 |
| **SFA** | 4 | $7.50 | $9.00 | $10.50 |
| **CRM + SFA** | 3 | $10.00 | $12.00 | $14.00 |

| Term | Entry ticket (every plan) |
|---|---|
| Quarterly | **$126** |
| Half-yearly | **$216** |
| Yearly | **$360** |

### Open concern on the USD level

At $2.50–$10 per user per month, OZZO would be at the very bottom of the international market. Zoho CRM runs roughly $14–52, Salesforce $25+. For buyers in South Asia, Africa and South-East Asia this reads as good value. For US and EU buyers, a price this low often reads as *low capability* rather than *good deal*, and can cost the deal it was meant to win.

This is a commercial call, not a technical one. Flagging it once; the table above implements the brief as given.

---

## 5. How the page must work (SEO-critical)

The earlier idea was to hide price outside India. That would have hidden it from **Googlebot, GPTBot, ClaudeBot and PerplexityBot too** — they all crawl from US IPs — which defeats the entire point of publishing.

**The design that avoids this:**

- Render **both** currencies and **all three terms** into the HTML on every request. No geo-hiding, no cloaking risk.
- A **currency toggle (₹ / $)** and a **term toggle (3 / 6 / 12 months)** switch what is *visible*, client-side.
- Default the currency toggle from the visitor's country (`x-vercel-ip-country`): India → INR, everywhere else → USD.
- Because every price is in the HTML, Google and every AI crawler index the full matrix regardless of where they crawl from.

**Schema:** emit an `Offer` per plan per currency inside the existing `AggregateOffer`, with `priceCurrency: "INR"` and `"USD"`, and `lowPrice` set to the yearly per-user rate. This is what lets an AI answer "how much does OZZO cost" with a real number.

## 6. Page structure

1. H1 + the honest headline: every plan starts at ₹5,040 a quarter
2. Currency toggle · Term toggle
3. Five plan cards — per-user rate, recommended team size, entry ticket on the selected term
4. **Full feature × plan comparison table** (all 12 feature groups from `plans.ts`)
5. "+ 18% GST" stated plainly for INR
6. FAQ block, extended with: what does it cost / is there a minimum / what happens if my team is smaller / do you charge in USD
7. CTA: book a demo

## 7. Wording on minimum users

`pricing.ts` is explicit that these counts are **recommended, not enforced**, and that sales must never lose a deal over them.

So the page should not say "minimum 12 users" — that turns an internal guideline into a public barrier, and would turn away the small CRM buyer we most want.

**Use:** *"Usually sold from 12 users — smaller team? We'll still quote you."*

Honest, matches the internal ruling, and removes the barrier instead of advertising it.
