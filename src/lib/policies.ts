/**
 * The numbers every legal page on this site quotes.
 *
 * These appear in the Data Retention policy, the Refund policy, the Data
 * Security policy and the Privacy Policy. Written once here so two pages can
 * never state different figures — a contradiction between two published
 * policies is the kind of thing a customer's legal team finds, and it is
 * indefensible once found.
 *
 * Each figure must match what the software actually does. Where a number is
 * enforced in code, the source is named beside it.
 */

/** Free trial length. Enforced by migration 20260901120000 (interval '10 days'). */
export const TRIAL_DAYS = 10;

/** Days after expiry before access stops. Founder's decision, 27 Sep 2026. */
export const GRACE_DAYS = 7;

/**
 * Raw tracking data — GPS points, full-size photos — kept this long, then
 * reduced to a summary or a small copy. Founder's decision, 27 Sep 2026.
 */
export const TRACKING_RETENTION_DAYS = 365;

/** Machine logs with no business value: device health, automation events. */
export const MACHINE_LOG_RETENTION_DAYS = 90;

/** How long a cancelled account's data is kept before permanent deletion. */
export const POST_CANCELLATION_DAYS = 90;

/**
 * Statutory minimum for business records under Indian GST rules (72 months
 * from the due date of the annual return). OZZO keeps them indefinitely, which
 * exceeds this — the figure is quoted so customers can see the obligation is
 * met rather than merely asserted.
 */
export const STATUTORY_RECORD_YEARS = 6;

/**
 * Where customer data physically sits.
 *
 * MUST be kept true. Publishing an intended location as a current one is a
 * false statement on a public page, and hosting location is exactly what an
 * enterprise buyer's security review checks first.
 *
 * Moved from Singapore (ap-southeast-1) to Mumbai on 27 September 2026 and
 * verified before this line changed: the database, all 37 logins and all 322
 * stored files are in Mumbai, and app.ozzo.co.in serves from it.
 */
export const HOSTING = {
  current: "Mumbai, India (AWS ap-south-1)",
  planned: null,
  migrationInProgress: false,
} as const;

/**
 * Named contact for data-protection complaints.
 *
 * The DPDP Act, 2023 requires a published contact for grievances. Keep this in
 * sync with the Privacy Policy.
 */
export const GRIEVANCE_OFFICER = {
  name: "Sumit Vegad",
  title: "Grievance Officer",
  email: "hello@ozzo.co.in",
  responseDays: 30,
} as const;
