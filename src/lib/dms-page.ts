/**
 * Content for the bespoke OZZO DMS (Distributor Management System) product page.
 *
 * WHAT THIS PRODUCT IS, in one line: your distributors and dealers get their own
 * login and place their own orders, instead of WhatsApping them to your team.
 *
 * ───────────────────────── THE HONESTY BOUNDARY ─────────────────────────
 *
 * Every capability below was verified screen by screen against the shipped app
 * in the ozzo-dms repo on 2026-11-20 — NOT against
 * `ozzo-dms-product-v1.md`. That matters in both directions:
 *
 *   - The spec UNDER-sells the product in two places. Its ruling 6 says
 *     "payments are view only in v1", but `app/(portal)/payments/new/page.tsx`
 *     is a real screen, so a portal customer records collections. Its scope
 *     list omits a portal user adding their own shop, which
 *     `app/(portal)/customers/new/page.tsx` does (gated by a tenant setting).
 *   - The spec also lists Announcements and Activity management as v1 screens.
 *     NEITHER IS BUILT. They are not in the app and are not claimed here.
 *
 * So the rule for editing this file: check the app, not the spec. The spec is
 * a design document that the build has moved past in both directions.
 *
 * `dmsLimits` below is the not-claimed list, and it is on the page on purpose
 * rather than left for a buyer to find in week three. Every rival ships
 * distributor stock and claims; a buyer who needs those should learn it here,
 * because the ones who do not need them will trust everything else on the page
 * more for having been told.
 *
 * NEVER state a competitor's price (the contract at the top of comparisons.ts).
 * The DMS price contrast is ours-vs-their-quote-model, never rupees-vs-rupees.
 */

import { DMS_SEATS, dms } from "./site";

export const dmsMeta = {
  /**
   * 35 characters. The rendered <title> adds " — OZZO" (7), and
   * scripts/check-meta.mjs FAILS THE VERCEL BUILD past 60 rendered — so the
   * budget here is 53. Measure before changing it.
   */
  metaTitle: "Distributor Management System (DMS)",
  metaDescription:
    "Give distributors and dealers their own login. They order on their own price list, see outstanding and dispatch. ₹10,000/year per 100 logins.",
  keywords: [
    "distributor management system",
    "distributor management software",
    "DMS software India",
    "distributor ordering portal",
    "dealer management software",
    "distributor portal software",
    "B2B ordering portal India",
    "secondary sales software",
    "FMCG distributor management software",
    "distributor order management system",
  ],
};

/**
 * SECTION 1 — the problem, as the buyer already experiences it.
 *
 * Deliberately written about the ORDER DESK, not about distributors. The person
 * who buys this is the one whose staff retype orders, and the cost they feel is
 * their own team's day, not their distributor's convenience.
 */
export const dmsPain: { icon: string; title: string; body: string }[] = [
  {
    icon: "MessageSquare",
    title: "The order arrives as a message",
    body: "A photo of a handwritten list. A voice note. Eleven lines typed into WhatsApp at 9pm. Somebody on your side reads it and types it into the system again — and that retyping is where the wrong SKU, the wrong rate and the missed scheme come from.",
  },
  {
    icon: "Clock",
    title: "Your desk is the bottleneck",
    body: "Nothing moves until a person on your payroll has keyed it in. Orders that land on Saturday wait for Monday, and the distributor who ordered on time is told their stock is late because of a queue they cannot see.",
  },
  {
    icon: "Phone",
    title: "“How much do I owe you?” is a phone call",
    body: "Your distributor cannot see their own ledger, so every balance question becomes a call to your accounts person — who stops what they were doing, opens a report and reads a number out loud.",
  },
  {
    icon: "EyeOff",
    title: "Secondary sales is a guess",
    body: "You know what you sold to the distributor. What the distributor sold onward to their shops is a number you ask for, chase, and eventually receive in a format nobody can total.",
  },
];

/**
 * SECTION 2 — how it works, in the order the buyer has to do it.
 *
 * Step 1 is deliberately "you switch it on", because the most common objection
 * is "my distributors will never use new software" and the real answer is that
 * there is nothing for them to install or learn.
 */
export const dmsHowItWorks: {
  step: string;
  title: string;
  body: string;
  icon: string;
}[] = [
  {
    step: "01",
    title: "Switch a customer on",
    body: "Open any customer already in OZZO — distributor, stockist or dealer — and turn on DMS access. Give them an email and a password. That is the whole setup: no import, no separate master list, no onboarding project.",
    icon: "ToggleRight",
  },
  {
    step: "02",
    title: "They sign in to a browser",
    body: "They open dms.ozzo.co.in on a phone or a laptop and sign in. There is no app to install, no store to find it in, and no update to chase — which is why distributors actually use it.",
    icon: "Globe",
  },
  {
    step: "03",
    title: "They place their own order",
    body: "They build the order from your catalogue, priced on their own price list, with their schemes applied and their credit limit respected. It lands in your system as a real order — already typed, by them.",
    icon: "ShoppingCart",
  },
  {
    step: "04",
    title: "They sell onward, and you can see it",
    body: "A distributor raises sales orders for their own shops, dispatches them, and records what those shops pay. Their onward selling stops being a number you ask for once a month.",
    icon: "TrendingUp",
  },
];

/**
 * SECTION 3 — what the portal actually does. Every point is a shipped screen.
 *
 * The `verified` note on each entry is the route in the ozzo-dms repo that
 * backs it, so a future editor can re-check a claim in one step instead of
 * re-reading the whole app.
 */
export const dmsCapabilities: {
  icon: string;
  title: string;
  body: string;
  points: string[];
  /** The shipped route this claim rests on. Not rendered — for editors. */
  verified: string;
}[] = [
  {
    icon: "Users",
    title: "A login for any customer, at any level",
    body: "Not distributors only. A distributor, a stockist or a single dealer can each have a login, and each one sees itself and everyone below it in your customer hierarchy — never sideways, and never upward.",
    verified: "lib/portal/api.ts → portal_visible_contact_ids()",
    points: [
      "Distributor, stockist or dealer — your choice, customer by customer",
      "Each login sees its own sub-tree and nothing else",
      "Switching access off ends it immediately and frees the seat",
      "Signing in is an email and a password, exactly like an employee",
    ],
  },
  {
    icon: "ShoppingCart",
    title: "Purchase orders on you, sales orders to their shops",
    body: "Two order types, because a distributor does two jobs. They buy from you, and they sell onward. Both are real orders in your system from the moment they are saved.",
    verified: "app/(portal)/purchase-orders/new, app/(portal)/sales-orders/new",
    points: [
      "Purchase order — what they are buying from you",
      "Sales order — what they are selling to their own dealers and shops",
      "They may order for themselves and for anyone below them",
      "Every order prints A4 or A5 on your letterhead",
    ],
  },
  {
    icon: "IndianRupee",
    title: "Their price list. Never your margin.",
    body: "This is the question every manufacturer asks first, and the answer is the reason this is safe to switch on. Each order is priced on that buyer's own price list and their own credit limit. A distributor cannot see what any other customer pays, and cannot see what you make.",
    verified: "calculate_order_pricing (SQL, migration 077) via portal_place_order",
    points: [
      "Priced on the buyer's own price list, not a shared one",
      "Their credit limit is enforced on their order",
      "No other customer's rate is visible anywhere in the portal",
      "The price is calculated by the database, not by their browser",
    ],
  },
  {
    icon: "Gift",
    title: "Schemes apply themselves",
    body: "A portal order gets the same scheme detection as an order typed by your own salesman — the identical logic, not a second copy of it. So a distributor ordering at midnight is not quoted worse than the same order taken at the counter.",
    verified: "detect_eligible_schemes (SQL) — shared with the rep app",
    points: [
      "Quantity and value schemes detected automatically",
      "The same engine that prices your field team's orders",
      "No scheme claimed by hand, and none missed by hand",
      "Free goods and slabs shown on the order before they confirm",
    ],
  },
  {
    icon: "Wallet",
    title: "Outstanding, in their hands instead of yours",
    body: "They see what they owe you, invoice by invoice, without calling anybody. They can record what their own shops have paid them. The balance question stops arriving at your accounts desk.",
    verified: "app/(portal)/payments, app/(portal)/payments/new, reports/outstanding",
    points: [
      "Their own outstanding and payment history, self-service",
      "They record collections from their own customers",
      "Every payment shows the name of who collected it",
      "No month-end statement to prepare and email",
    ],
  },
  {
    icon: "Truck",
    title: "They dispatch what they have sold",
    body: "A distributor works their own Pending Dispatch queue and dispatches their own sales orders — so the goods moving out of their godown are on the record, not in a notebook.",
    verified: "app/(portal)/dispatches, app/(portal)/pending-dispatch",
    points: [
      "A Pending Dispatch queue of their own sales orders",
      "Dispatch recorded against the order it belongs to",
      "A printable dispatch note, A4 or A5",
      "Their onward movement becomes data you can report on",
    ],
  },
  {
    icon: "BarChart3",
    title: "Four reports, and a filter on every column",
    body: "Orders, sales, collection and outstanding — each one scoped to what that login is allowed to see. Every table filters column by column rather than through one search box that matches everything and nothing.",
    verified: "app/(portal)/reports/{orders,sales,collection,outstanding}",
    points: [
      "Order, Sales, Collection and Outstanding reports",
      "A searchable filter on each column of each table",
      "“Booked by” and “Collected by” show who did it, by name",
      "Scoped to their own sub-tree, enforced in the database",
    ],
  },
  {
    icon: "Store",
    title: "They can add their own shops — if you let them",
    body: "Switch it on and a distributor registers a new retailer themselves, so a shop they opened this week can be ordered for this week. Leave it off and only your team creates customers. It is your call, per account.",
    verified: "app/(portal)/customers/new (gated by portal_can_create_customer)",
    points: [
      "Off by default — your masters stay yours until you decide",
      "The database enforces the setting, not just the screen",
      "A new shop is a normal customer in your system, not a portal-only record",
      "They can never edit an existing customer's master record",
    ],
  },
];

/**
 * SECTION 4 — what the company keeps control of.
 *
 * Exists because the objection to any customer-facing portal is loss of
 * control, and the honest answer is a list, not a reassurance.
 */
export const dmsControls: { title: string; body: string }[] = [
  {
    title: "You create the logins",
    body: "A distributor cannot sign themselves up, and there is no public registration page. Access is a toggle on the customer record inside your own OZZO, and only your admin can turn it on.",
  },
  {
    title: "There is no forgotten-password email",
    body: "Deliberately. The login address need not be a real mailbox, so a reset link would have nowhere to go. If a distributor loses their password your admin sets a new one — which also means nobody outside your company can start a reset on their account.",
  },
  {
    title: "Switching it off is immediate",
    body: "Turn DMS access off and that login stops reading anything at once, and the seat returns to your pool for someone else. Their order history stays — you lose the access, not the record.",
  },
  {
    title: "They see down, never sideways",
    body: "The visibility rule is enforced inside the database, not in the browser. One distributor cannot reach another distributor's customers, orders, rates or balances, whatever they type into the address bar.",
  },
  {
    title: "Sales credit is your decision",
    body: "When a distributor types an order for one of their dealers, you choose whether that counts for the portal or for the salesman who owns that dealer. It is a setting, because both answers are right in different businesses.",
  },
  {
    title: "The seat count is enforced, not trusted",
    body: `Your plan's login limit is checked by the database itself. When ${DMS_SEATS} of ${DMS_SEATS} are used, the next one is refused at creation time — your admin is told, and the distributor never sees a half-working account.`,
  },
];

/**
 * SECTION 5 — what DMS does NOT do.
 *
 * On the page, not in a footnote. See the honesty note at the top of this file.
 * Each entry says plainly where that need is met today, so the list reads as
 * guidance rather than as a list of failures.
 */
export const dmsLimits: { title: string; body: string }[] = [
  {
    title: "Distributor stock and auto-replenishment",
    body: "DMS does not hold your distributor's own godown stock, and it does not suggest their next order from a reorder level. If your buying decision rests on stock-based replenishment across a distributor network, the enterprise DMS specialists do this and OZZO does not — a straight answer is worth more to you than a demo.",
  },
  {
    title: "Claims",
    body: "Damage, scheme, freight and rate-difference claims are not in DMS. Distributors raise these with you the way they do now. It is planned, and it is not built, so it is not sold.",
  },
  {
    title: "Primary-versus-secondary stock reporting",
    body: "You get the orders a distributor placed on you and the sales orders they raised onward. What you do not get is a reconciled stock-movement view across both. The order data is there; the stock ledger behind it is not.",
  },
  {
    title: "Delivery boys and delivery tracking",
    body: "A distributor records a dispatch, but there is no delivery-person app, no delivery route and no proof-of-delivery capture in DMS today.",
  },
  {
    title: "Scheme management from the portal",
    body: "Schemes are applied to a distributor's order automatically. They are created and managed by you, in OZZO — a distributor cannot build their own scheme.",
  },
  {
    title: "A mobile app for distributors",
    body: "DMS is a web portal. Nothing for your distributors to install, and it works on a phone browser — but it is not in any app store.",
  },
];

/** SECTION 6 — who this is for, and who it is not for. */
export const dmsFitFor: string[] = [
  "Manufacturers and brands selling through distributors, stockists or dealers",
  "FMCG, food, beverage, agri-input, building-material and electrical brands",
  "Anyone whose order desk retypes orders that arrived on WhatsApp or by phone",
  "Teams already running OZZO CRM or SFA who want the trade to self-serve",
  "Businesses with 10 to 500 trade customers who each order repeatedly",
];

export const dmsFitNotFor: string[] = [
  "Businesses selling direct to consumers — this is a B2B trade portal, not a webshop",
  "Anyone who needs distributor stock, replenishment or claims on day one",
  "A single-location retailer with no trade network beneath them",
  "Teams wanting it without OZZO — DMS is an add-on to a CRM or SFA plan",
];

/** SECTION 7 — SEO / AI-search FAQs. */
export const dmsFaqs: { q: string; a: string }[] = [
  {
    q: "What is a Distributor Management System (DMS)?",
    a: "A Distributor Management System is software that connects a brand to the distributors, stockists and dealers who sell its products onward. Instead of orders and balances travelling by phone, WhatsApp and spreadsheet, each trade customer gets their own login and places their own orders, sees what they owe, and records what their own shops buy from them. OZZO DMS is the distributor-facing portal of the OZZO platform, at dms.ozzo.co.in.",
  },
  {
    q: "What does OZZO DMS cost?",
    a: `${dms.priceLine}, plus 18% GST — about ₹${dms.perLoginPerMonth} per distributor login per month. It is an add-on to an OZZO CRM or SFA plan, not a separate purchase, and the login count is enforced by the system so you are never billed for more than you switched on.`,
  },
  {
    q: "Is DMS sold separately from CRM and SFA?",
    a: "No. DMS is an add-on to a CRM or SFA plan. Your product catalogue, price lists, schemes, customer hierarchy and the screen that creates the distributor logins all live in OZZO, so DMS on its own would have no data to work with. If you already run OZZO, DMS switches on against what you have.",
  },
  {
    q: "Do my distributors have to install an app?",
    a: "No. DMS runs in a web browser at dms.ozzo.co.in — on a laptop or on a phone. There is nothing to download, nothing to find in an app store and nothing to update, which is the main reason trade customers actually use it rather than going back to WhatsApp.",
  },
  {
    q: "Can a distributor see my margin or another distributor's prices?",
    a: "No. Every order is priced on that buyer's own price list and their own credit limit, and the pricing is calculated in the database rather than in their browser. A distributor cannot see any other customer's rates, orders, balances or customers — the visibility rule is enforced in the database, so typing a different address changes nothing.",
  },
  {
    q: "Which of my customers can have a login?",
    a: "Any of them, at any level of your hierarchy — a distributor, a stockist or a single dealer. Each login sees itself and everyone below it. You decide customer by customer, with a toggle on that customer's record in OZZO.",
  },
  {
    q: "Can a distributor place an order for one of their dealers?",
    a: "Yes. A login may order for itself and for anyone below it, so a distributor can raise a sales order for one of their shops. Whether that order credits the portal or the salesman who owns that dealer is a setting you choose, because both answers are correct in different businesses.",
  },
  {
    q: "Are schemes and discounts applied to portal orders?",
    a: "Yes, automatically, by the same scheme-detection engine that prices an order typed by your own field rep. It is the identical logic rather than a second copy of it, so a distributor ordering at midnight gets exactly the same treatment as the same order taken at the counter.",
  },
  {
    q: "Can distributors see their outstanding balance?",
    a: "Yes — their own outstanding and payment history, invoice by invoice, whenever they want it. They can also record the payments their own shops have made to them. The effect on your side is that the “how much do I owe you” call stops arriving at your accounts desk.",
  },
  {
    q: "Does OZZO DMS handle distributor stock and auto-replenishment?",
    a: "No, and this is worth knowing before a demo rather than after. DMS does not hold your distributor's godown stock and does not suggest their next order from a reorder level. If stock-based replenishment across your distributor network is what you are buying, the enterprise DMS specialists do that and OZZO does not. What OZZO does is ordering, pricing, outstanding and dispatch.",
  },
  {
    q: "Does it handle claims — damage, scheme, freight or rate difference?",
    a: "Not today. Claims are planned and not built, so they are not sold. Your distributors raise those with you the way they do now.",
  },
  {
    q: "How does the secondary-sales picture improve?",
    a: "When a distributor raises their sales orders and dispatches inside DMS, what they sold onward becomes data at the moment it happens instead of a number you chase at month-end. It is not a reconciled stock-movement report — DMS gives you the orders and the dispatches, not a distributor stock ledger.",
  },
  {
    q: "What happens if a distributor forgets their password?",
    a: "Your admin sets a new one. There is no forgotten-password email, on purpose: the login address need not be a real mailbox, so a reset link would have nowhere to go — and it also means nobody outside your company can start a password reset on a distributor's account.",
  },
  {
    q: "How many logins do I get, and what if I need more?",
    a: `${dms.priceLine}. The limit is enforced by the database, so when all of them are in use the next one is refused as your admin creates it, with a clear message. Switching a customer's access off returns their seat to the pool immediately. If you need more than ${DMS_SEATS}, book a demo and we will size it with you.`,
  },
  {
    q: "Can distributors add their own retailers?",
    a: "Only if you switch it on, and it is off by default. With it on, a distributor can register a new shop themselves so they can order for it the same week. They can never edit an existing customer's master record, and the setting is enforced in the database rather than only on the screen.",
  },
  {
    q: "Is OZZO DMS actually live, or is this a roadmap?",
    a: "It is live and in use at dms.ozzo.co.in. Everything described on this page is a shipped screen. The things that are not built — distributor stock, claims, delivery tracking and scheme management from the portal — are listed plainly on this page rather than implied to exist.",
  },
  {
    q: "How do I get DMS switched on?",
    a: "Book a demo. The DMS add-on is granted per account by OZZO rather than being a switch inside your own settings, so we turn it on for you, set your login count, and walk your team through creating the first distributor login.",
  },
];
