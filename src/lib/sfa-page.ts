/**
 * Content for the bespoke OZZO Sales Force Automation (SFA) product page.
 *
 * ONE product only. Field-force tracking (formerly "WFA / Workforce
 * Automation") is presented as the entry TIER of SFA — never a separate
 * product. Every capability is grounded in OZZO_FEATURE_MASTER_CATALOG.md
 * (WORKFORCE + SFA sections). Nothing excluded is claimed:
 *   - No route "execution/scheduling loop" or animated playback (planning &
 *     assignment only), no geofencing, no push notifications, no van sales,
 *     no ERP/Tally sync, no secondary-sales as a distinct module.
 */

export const sfaMeta = {
  metaTitle: "Sales Force Automation — field tracking, orders & collections",
  metaDescription:
    "OZZO Sales Force Automation shows you exactly what your field team is doing — selfie + GPS attendance, live location and geo-tagged visits — then captures orders offline, collects payments in the field, and keeps outstanding and stock calculated automatically. No Tally, no ERP. Web dashboard + Android app.",
  keywords: [
    "sales force automation software",
    "field force tracking app",
    "field sales app India",
    "GPS attendance app",
    "order booking app for sales team",
    "payment collection app",
    "beat plan software",
    "distributor management software",
    "field team monitoring",
  ],
};

/** SECTION 2 — Daily life of a sales rep (6-step timeline). */
export const sfaRepDay: {
  time: string;
  title: string;
  body: string;
  icon: string;
}[] = [
  {
    time: "07:40",
    title: "Attendance",
    body: "The rep punches in from the app with a selfie and GPS (and the odometer, if you require it). The day is on the clock — and on record — from the first minute.",
    icon: "Fingerprint",
  },
  {
    time: "09:15",
    title: "Route",
    body: "One tap opens today's beat. The rep works down the planned list of outlets, and the app knows which are covered and which are still to go.",
    icon: "Route",
  },
  {
    time: "10:30",
    title: "Visit",
    body: "Check in at the shop — GPS-stamped — so a visit on the record is one the phone was actually standing in, not a message that says “reached”.",
    icon: "MapPin",
  },
  {
    time: "11:00",
    title: "Order",
    body: "Build the order at the counter from your catalogue and discounts, even with no signal. It queues and syncs itself, then runs through dispatch.",
    icon: "ShoppingCart",
  },
  {
    time: "12:00",
    title: "Collection",
    body: "Record the payment on the spot, with proof. The customer's outstanding drops immediately and the credit limit is there before the next order.",
    icon: "IndianRupee",
  },
  {
    time: "19:00",
    title: "End day",
    body: "Attendance, visits, orders and collections have rolled into the Daily Sales Report all day. No memory-based WhatsApp round-up at night.",
    icon: "PieChart",
  },
];

/** SECTION 3 — Manager visibility (real-time monitoring screens). */
export const sfaManagerViews: { icon: string; title: string; body: string }[] = [
  {
    icon: "Navigation",
    title: "Live Feed",
    body: "Current positions of the whole field force on one screen — see who's out, who's where, right now.",
  },
  {
    icon: "MapPin",
    title: "All Locations",
    body: "Every point for a chosen rep and day, mapped — the day's movement, not a single check-in.",
  },
  {
    icon: "Route",
    title: "Track Report",
    body: "The full location history per rep, on demand — where they went and when, kept on the record.",
  },
  {
    icon: "Battery",
    title: "Tracking Health",
    body: "Device battery, GPS and permission state — so you catch a phone that isn't really reporting before it costs you a day of data.",
  },
];

/** SECTIONS 4-8 — feature stories (alternating layout). */
export const sfaStories: {
  kicker: string;
  title: string;
  body: string;
  points: string[];
  icon: string;
}[] = [
  {
    kicker: "Field activity tracking",
    title: "The whole field day, on record",
    body: "Location is recorded on an interval while a rep is punched in, in the background. Every visit is geo-stamped against the customer, so coverage is something you can see — not something you're told about after dark.",
    icon: "Navigation",
    points: [
      "Background GPS at a set interval while punched in",
      "Location history stored per rep, viewable any time",
      "Geo-tagged customer and lead visits with custom fields",
      "A productive visit is one that produced an order — measured, not assumed",
    ],
  },
  {
    kicker: "Order booking",
    title: "Capture the order anywhere — even offline",
    body: "Reps build the order at the counter from your catalogue and discount rules, on or off the network. It syncs itself, then runs through dispatch and your pending-dispatch queue — with a branded PDF at the end.",
    icon: "ShoppingCart",
    points: [
      "Order line items with discounts and a status workflow",
      "Offline capture that syncs the moment a bar of signal returns",
      "Dispatch, a pending-dispatch queue and a branded order PDF",
      "Custom fields on orders to match how you actually sell",
    ],
  },
  {
    kicker: "Collection tracking",
    title: "Outstanding keeps itself — no accounting bolt-on",
    body: "This is the difference. Every order and every collection updates the customer's balance the moment it happens — so nobody re-keys an order into Tally or waits for month-end to know who owes what.",
    icon: "Wallet",
    points: [
      "Record collections in the field, with proof, approval and a backdating window",
      "Customer financials — opening balance, outstanding and credit limit",
      "Outstanding recalculates itself against every order and payment",
      "Ageing Report surfaces the balances that have gone quiet",
    ],
  },
  {
    kicker: "Attendance management",
    title: "The day starts on record",
    body: "Reps punch in with a selfie and GPS — and the odometer, if you require it. Punches queue offline and classify the day for you, and leave and holiday lists feed the same picture.",
    icon: "Fingerprint",
    points: [
      "Selfie + GPS (and optional odometer) capture at punch-in",
      "Present, Late Start, Early Leaving, Short Present, Absent — classified automatically",
      "Leave requests and holiday lists roll into attendance",
      "Shift times classify the day; punched in always means tracked",
    ],
  },
  {
    kicker: "GPS & visit verification",
    title: "“Reached the customer” means the phone was there",
    body: "Fake reporting usually hides behind a dead battery or a switched-off GPS. Selfie-and-GPS attendance, geo-stamped visits and the Tracking Health screen make the day something you can verify, not just believe.",
    icon: "ShieldCheck",
    points: [
      "Selfie + GPS at punch-in ties the day to a face and a place",
      "Every visit check-in is GPS-stamped onto the map and Track Report",
      "Tracking Health flags a drifting or dead device before the report is wrong",
      "Registered devices per employee keep tracking honest",
    ],
  },
];

/** SECTION 9 — reports available in SFA. */
export const sfaReports: string[] = [
  "Order Report — every order, by status, rep and period",
  "Sales Report — fully-dispatched (closed) sales",
  "Payment Report — collections by approval status",
  "Ageing Report — customers and products that have gone quiet",
  "Visit Report — coverage, and which visits were productive",
  "Expense Report — claims by approval status",
  "DSR — one line per rep: visits, orders, collections and distance",
];

/** SECTION 10 — mobile app highlights. */
export const sfaMobile: string[] = [
  "Punch in with selfie, GPS and optional odometer",
  "See today's route and work it outlet by outlet",
  "Check in at customers and leads, GPS-stamped",
  "Build and dispatch orders — fully offline",
  "Record payment collections with photo proof",
  "Submit expenses; travel distance becomes the claim",
  "Everything queues offline and syncs itself",
];

/** SECTION 13 — 20 SEO-focused FAQs. */
export const sfaFaqs: { q: string; a: string }[] = [
  {
    q: "What is OZZO Sales Force Automation (SFA)?",
    a: "OZZO SFA is one product that runs your entire field-sales operation. It shows you what your team is doing — selfie + GPS attendance, live location and geo-tagged visits — and lets reps capture orders offline, collect payments in the field, and keep outstanding and stock calculated automatically. It's a web dashboard for managers and an Android app for reps.",
  },
  {
    q: "What's the difference between the Field and Sales lines?",
    a: "They aren't separate products. Field is the entry line of Sales Force Automation — field visibility: attendance, GPS, visits, routes and expenses. Sales is the full line, adding order booking, payment collection, customer financials, stock and distributor/dealer management on top. You move up a line, not across to another product.",
  },
  {
    q: "Who is OZZO SFA for?",
    a: "Businesses with a team on the road — distributors and FMCG, manufacturers with field sales, building materials, pharma, agri-inputs, and field-service teams. If you have reps visiting customers and you're chasing them for updates at night, SFA is built for you.",
  },
  {
    q: "How do I know where my field team is?",
    a: "Four screens: a Live Feed of current positions, an All-Locations map for any rep and day, a per-rep Track Report of full history, and a Tracking Health screen showing device battery, GPS and permission state. You watch the day instead of asking about it.",
  },
  {
    q: "How does attendance work?",
    a: "Reps punch in and out from the mobile app with a selfie and GPS capture — and an odometer reading if you require it. Punches queue offline and sync later, and the day is classified automatically as Present, Late Start, Early Leaving, Short Present or Absent.",
  },
  {
    q: "Does it stop fake attendance and fake reporting?",
    a: "It makes the day verifiable. Punch-in captures a selfie and GPS, visits are geo-stamped, and the Tracking Health screen shows when a phone genuinely wasn't reporting — battery, GPS and permission state. “Reached the customer” means the phone was actually at the customer.",
  },
  {
    q: "Can reps skip customers on their route?",
    a: "The beat is a planned list of outlets the rep works through, and the app shows which are covered and which are left — so the shop that keeps getting missed stops getting missed. You plan the route once and assign it for the period.",
  },
  {
    q: "Can reps take orders in the field?",
    a: "Yes. Reps build orders at the counter from your product catalogue and discount rules, with line items and a status workflow. Orders run through dispatch and a pending-dispatch queue, and print as a branded PDF on your letterhead.",
  },
  {
    q: "Does order capture work without internet?",
    a: "Yes. Orders — along with quotations, payments and expenses — capture fully offline on the Android app and sync automatically the moment signal returns. Reps in low-network markets never wait for a connection.",
  },
  {
    q: "How is payment collection tracked?",
    a: "Reps record a collection in the field with photo proof and a payment type. Collections go through approval (with a backdating window you control), and each one immediately reduces the customer's outstanding balance.",
  },
  {
    q: "How is outstanding calculated?",
    a: "Automatically. Every order raises the balance and every collection reduces it, per customer, against the credit limit you set — so the number on the counter is always current. There's nothing to reconcile by hand.",
  },
  {
    q: "Do I need Tally or accounting software to use SFA?",
    a: "No — that's the point. Outstanding and stock are calculated inside OZZO from your orders, dispatch and collections. There's no accounting integration to buy or maintain, and nobody re-keys an order at month-end.",
  },
  {
    q: "Does OZZO track stock or inventory?",
    a: "Yes, at the level field sales needs: closing stock is derived automatically from order and dispatch movement, so you get a running balance without a separate inventory system or a stock-take from memory.",
  },
  {
    q: "Does SFA handle distributors and dealers?",
    a: "Yes. Classify customers into up to five named trade levels (for example Distributor, Dealer, Retailer). Orders are auto-tagged primary or secondary from the customer's level, and discounts follow your rules with a price floor reps can't cross.",
  },
  {
    q: "Does tracking run all the time and drain the battery?",
    a: "Location is recorded on an interval you set, in the background, only while the rep is punched in. Shift times classify attendance — they don't switch tracking off — so punched in always means tracked, and off-duty means off.",
  },
  {
    q: "What reports do I get?",
    a: "A report engine plus ready reports: Order, Sales, Payment, Ageing, Visit, Expense and Task — and a Daily Sales Report that puts each rep's visits, orders, collections and distance on a single line. Choose your dimensions and filters, save a default view, and export.",
  },
  {
    q: "Is there a mobile app, and does it support iOS?",
    a: "Reps work on a full Android field app; managers use the web dashboard in any modern browser. An iOS version is on the way. Everything the rep captures works offline and syncs automatically.",
  },
  {
    q: "Can I organise the team by geography?",
    a: "Yes. The Territory Master models country → state → city → area, and you can assign employees to areas and route customers and leads area-wise instead of one by one.",
  },
  {
    q: "How much does OZZO SFA cost?",
    a: "OZZO doesn't publish per-user rates publicly. SFA comes as two lines — Field (workforce visibility) and Sales (the full sell-collect-distribute flow) — and pricing is matched to your team size and the line you choose. Book a free demo or request a callback and our team will put together a package for you; a refundable trial is available so you can try it live first.",
  },
  {
    q: "Is there a free trial, and how do I get started?",
    a: "Yes — a refundable trial (10-day and 30-day options). Share a few details to book a free demo; our team will call you, map SFA to how your field team works, and set up the trial with your own data before you commit.",
  },
];
