/**
 * The site's quoting engine — one plan, a user count and a billing term in,
 * rupees out.
 *
 * This mirrors `wacrm-web/src/lib/plans/pricing.ts`, which is the real engine
 * the app and the proposal builder quote from. Only the parts a public
 * calculator needs are here: the term uplifts, GST and the DMS add-on. The
 * per-user rates themselves are NOT redefined — they are read from
 * `PLAN_RATE.INR` in `./plans`, which already mirrors the app's catalog, so a
 * rate can only ever be changed in one place on this site.
 *
 * WHY THE TERM RATES ARE BACK ON THE SITE. They were deliberately removed on
 * 1 November 2026: <PlanPrice/> used to server-render all three terms in both
 * currencies, and a crawler reads markup rather than CSS, so Perplexity saw
 * thirty numbers on one page and reported OZZO's pricing as "incomplete and
 * inconsistent". Founder's instruction, 20 November 2026, is to reveal
 * quarterly, half-yearly and yearly in the calculator. That does not bring the
 * old problem back, because the calculator is a client component: it computes
 * its figures in the browser from a plan and a user count the visitor chose, so
 * none of them exist in the HTML a crawler receives. The static markup still
 * states exactly one rate per plan — the yearly one — which stays the single
 * number an AI quotes back.
 *
 * INR ONLY, on purpose. The USD list in `plans.ts` has no quoting engine
 * behind it and its term uplifts are a separate, uneven set that was never
 * written down anywhere. Applying +40% / +20% to dollars would invent prices
 * the business cannot honour, so an international visitor is pointed at a demo
 * instead of shown a number nobody agreed to.
 */

import { PLAN_RATE, GST_RATE_PCT, planById, type PlanId } from "./plans";
import { DMS_PRICE_INR, DMS_SEATS } from "./site";

export type BillingTerm = "quarterly" | "half_yearly" | "yearly";

/**
 * Cheapest last. The yearly column is the one we want chosen, and putting it
 * at the end means the eye lands on it after reading the two dearer options
 * rather than before.
 */
export const termOrder: BillingTerm[] = ["quarterly", "half_yearly", "yearly"];

export const TERM_LABEL: Record<BillingTerm, string> = {
  quarterly: "Quarterly",
  half_yearly: "Half-yearly",
  yearly: "Yearly",
};

/** How many months one invoice covers. */
export const TERM_MONTHS: Record<BillingTerm, number> = {
  quarterly: 3,
  half_yearly: 6,
  yearly: 12,
};

/**
 * Yearly is the base price; shorter terms cost more.
 *
 * Founder's commercial model, 27 September 2026, unchanged since: quarterly
 * +40%, half-yearly +20%. These two multipliers are the whole reason this file
 * exists — they were previously written as literals (`*1.3`, `*1.2`) inside a
 * page, where they drifted out of step with the app and quietly charged a
 * different price than the one advertised.
 *
 * Worth knowing when writing campaign copy: yearly against quarterly is a 36%
 * saving, not 50%. Uplift and discount multiply (1.4 × 0.9 = 1.26); they do
 * not add.
 */
export const TERM_UPLIFT: Record<BillingTerm, number> = {
  quarterly: 1.4,
  half_yearly: 1.2,
  yearly: 1,
};

/**
 * What one user costs per month on a given term.
 *
 * Every current combination lands on a whole rupee (₹300 → ₹420 quarterly,
 * ₹360 half-yearly), so the rounding here never actually fires today. It is
 * kept so that a future base rate ending in an odd number cannot leak a
 * fractional paisa figure onto the page.
 */
export const termRatePerMonth = (plan: PlanId, term: BillingTerm): number =>
  Math.round(PLAN_RATE.INR[plan] * TERM_UPLIFT[term]);

const gstOn = (amount: number): number =>
  Math.round((amount * GST_RATE_PCT) / 100);

export type DmsLine = {
  seats: number;
  subtotal: number;
  gst: number;
  total: number;
};

export type Quote = {
  plan: PlanId;
  term: BillingTerm;
  users: number;
  months: number;
  /** Per user, per month, on this term. Excludes GST. */
  ratePerMonth: number;
  /** What this invoice charges for the seats, before GST. */
  subtotal: number;
  gst: number;
  /** What this invoice charges for the seats, all in. */
  total: number;
  /**
   * Twelve months of seats on this term, including GST — the figure that makes
   * the three terms comparable, since each invoice covers a different span.
   */
  annualised: number;
  /**
   * What picking yearly instead of this term saves over twelve months,
   * including GST. Zero on the yearly term itself.
   */
  annualSaving: number;
};

/**
 * Price one term.
 *
 * NOTE ON MINIMUM USERS. `pricing.ts` carries a recommended minimum per plan
 * (CRM 12, WFA 8, CRM+WFA 6, SFA 4, CRM+SFA 3) and the founder's ruling of
 * 27 September 2026 is explicit that it is a sales guideline which must never
 * block a deal — *"in sales you never know what deal we need to offer"*. It is
 * therefore neither applied nor shown here: a one-user quote prices one user.
 * Do not reintroduce clamping, and do not publish the counts.
 */
export function quote(plan: PlanId, users: number, term: BillingTerm): Quote {
  const months = TERM_MONTHS[term];
  const ratePerMonth = termRatePerMonth(plan, term);
  const subtotal = ratePerMonth * users * months;
  const gst = gstOn(subtotal);

  const annualRate = ratePerMonth * users * 12;
  const annualised = annualRate + gstOn(annualRate);
  const yearlyRate = termRatePerMonth(plan, "yearly") * users * 12;
  const yearlyAnnualised = yearlyRate + gstOn(yearlyRate);

  return {
    plan,
    term,
    users,
    months,
    ratePerMonth,
    subtotal,
    gst,
    total: subtotal + gst,
    annualised,
    annualSaving: annualised - yearlyAnnualised,
  };
}

/** Every term for one plan and user count, in display order. */
export const quoteAllTerms = (plan: PlanId, users: number): Quote[] =>
  termOrder.map((term) => quote(plan, users, term));

/**
 * The distributor portal, priced per login per year.
 *
 * DMS is deliberately NOT folded into the term totals above. It is billed once
 * a year whichever term the plan is on, so adding a share of it to a quarterly
 * invoice would state a quarterly DMS price that does not exist. It is quoted
 * as its own annual line and the calculator shows it as one.
 */
export const dmsLine = (): DmsLine => {
  const subtotal = DMS_PRICE_INR;
  const gst = gstOn(subtotal);
  return { seats: DMS_SEATS, subtotal, gst, total: subtotal + gst };
};

export const formatINR = (amount: number): string =>
  `₹${Math.round(amount).toLocaleString("en-IN")}`;

/**
 * Map a typed user count onto one of the five team-size buckets the rest of
 * the lead pipeline already speaks (`teamSizeOptions`).
 *
 * The calculator asks for an exact number, which is better information than
 * the bucket — but every report, alert and Google Analytics dimension is built
 * on the buckets, so a calculator lead has to arrive wearing one or it falls
 * out of the quality reporting entirely. The exact figure is kept too, in the
 * quote text on the lead itself.
 */
export function teamSizeBucket(users: number): string {
  if (users <= 5) return "1–5";
  if (users <= 20) return "6–20";
  if (users <= 50) return "21–50";
  if (users <= 200) return "51–200";
  return "200+";
}

/**
 * The quote as labelled rows.
 *
 * ONE function builds this for both sides, on purpose. The visitor's WhatsApp
 * message and the `message` column on the lead row are the same text, so the
 * figures the founder reads on the lead are provably the figures the visitor
 * was shown — there is no second formatter that can round differently or
 * forget the add-on. It also means the quote can be re-derived from the plan,
 * users and term stored on the lead, so a disputed number is checkable.
 */
export function quoteLines(
  plan: PlanId,
  users: number,
  term: BillingTerm,
  withDms = false,
): [string, string][] {
  const q = quote(plan, users, term);
  const planName = planById(plan).name;
  const rows: [string, string][] = [
    ["Plan", planName],
    ["Users", String(users)],
    ["Billing", `${TERM_LABEL[term]} (every ${q.months} months)`],
    ["Rate", `${formatINR(q.ratePerMonth)} per user / month`],
    [
      `Each ${TERM_LABEL[term].toLowerCase()} invoice`,
      `${formatINR(q.subtotal)} + ${formatINR(q.gst)} GST = ${formatINR(q.total)}`,
    ],
    ["Over 12 months", formatINR(q.annualised)],
  ];

  if (q.annualSaving > 0) {
    rows.push([
      "Yearly billing would save",
      `${formatINR(q.annualSaving)} a year`,
    ]);
  }

  if (withDms) {
    const d = dmsLine();
    rows.push([
      "Distributor portal (DMS)",
      `${formatINR(d.subtotal)} + ${formatINR(d.gst)} GST = ${formatINR(
        d.total,
      )} per year for ${d.seats} logins`,
    ]);
  }

  return rows;
}

/** The quote as plain text — used for the lead's `message` and the chat. */
export const quoteText = (
  plan: PlanId,
  users: number,
  term: BillingTerm,
  withDms = false,
): string =>
  quoteLines(plan, users, term, withDms)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

/**
 * What the visitor sends us on WhatsApp after asking for their quote.
 *
 * Written in their voice, like `inquiryChatText` — this lands in their own
 * sent messages, where a block of third-person CRM fields reads like
 * surveillance and a short note reads like an introduction. Tapping send is
 * also what gives both sides the quote in writing, in one thread.
 */
export const quoteChatText = (
  name: string,
  plan: PlanId,
  users: number,
  term: BillingTerm,
  withDms = false,
): string =>
  [
    `Hi OZZO, I just built this quote on your pricing page.`,
    ``,
    quoteText(plan, users, term, withDms),
    ``,
    `I'm ${name}. Please confirm and get in touch.`,
  ].join("\n");
