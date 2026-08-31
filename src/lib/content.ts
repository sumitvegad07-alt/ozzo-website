/**
 * Marketing copy grounded ONLY in production-verified capabilities
 * (per OZZO_FEATURE_MASTER_CATALOG.md). Excluded/aspirational items
 * — broadcasts, automations, flows, WhatsApp payment links, cart
 * recovery — are deliberately NOT claimed here.
 */

export const heroStats = [
  { value: "37", label: "modules, one login" },
  { value: "11", label: "built-in reports + DSR" },
  { value: "2-in-1", label: "web dashboard + Android app" },
];

/** Honest, verifiable product counters for the hero (no customer/order counts). */
export const productStats: {
  value: number;
  suffix?: string;
  label: string;
}[] = [
  { value: 37, label: "modules under one login" },
  { value: 11, label: "built-in reports + a daily DSR" },
  { value: 2, suffix: "-in-1", label: "web dashboard + mobile field app" },
];

/**
 * The differentiators — what OZZO does away with that a typical
 * field-sales stack (and heavier platforms) still make you carry.
 * Every claim is grounded in shipped, production capabilities.
 */
export const removed = [
  {
    tag: "No accounting software",
    icon: "Calculator",
    title: "Outstanding and stock keep themselves",
    body: "Every order and every collection updates the customer's balance and your stock the moment it happens. No Tally, no ERP bolt-on, no accountant re-keying orders at month-end — the numbers are already right.",
  },
  {
    tag: "No fake reporting",
    icon: "Eye",
    title: "The day can't be invented at night",
    body: "Selfie-and-GPS attendance, geo-stamped visits, and a Tracking Health screen that flags the moment a phone stops reporting. “Reached the customer” means the phone was actually at the customer.",
  },
  {
    tag: "No skipped outlets",
    icon: "Route",
    title: "Reps work the beat, in order",
    body: "A route starts with one tap and the app walks the rep customer by customer. Nobody quietly skips the shop they'd rather not visit — the outlet that kept getting missed stops getting missed.",
  },
  {
    tag: "No signal, no problem",
    icon: "WifiOff",
    title: "The market has no wifi. It still works.",
    body: "Attendance, visits, orders, quotations, payments and expenses all capture fully offline and sync themselves the moment a single bar of signal returns. The field never waits for the network.",
  },
];

/** One rep, one day — what the product is doing at each point in it. */
export const dayTimeline = [
  {
    time: "07:40",
    title: "Punch in",
    body: "On-duty with a selfie and GPS (and the odometer, if you require it). The day is on the clock from the first minute.",
    icon: "Fingerprint",
  },
  {
    time: "09:15",
    title: "Start the route",
    body: "One tap opens today's beat in order. The rep works down the list — the app knows which outlets are done and which are left.",
    icon: "Route",
  },
  {
    time: "10:30",
    title: "Visit & take the order",
    body: "Check in at the shop, GPS-stamped, then capture the order right there — even with no signal. It queues and syncs itself.",
    icon: "ShoppingCart",
  },
  {
    time: "12:00",
    title: "Collect & settle",
    body: "Record the payment on the spot. The customer's outstanding drops immediately and the credit limit is checked before the next order.",
    icon: "IndianRupee",
  },
  {
    time: "16:20",
    title: "Expenses file themselves",
    body: "Travel distance becomes the claim automatically. No end-of-day arithmetic, no shoebox of receipts to reconcile.",
    icon: "ReceiptText",
  },
  {
    time: "19:00",
    title: "It's already reported",
    body: "Attendance, visits, orders and collections have rolled into the DSR all day. No memory-based WhatsApp round-up at night.",
    icon: "PieChart",
  },
];

/** Four numbered editorial chapters — the outcomes, in second person. */
export const chapters = [
  {
    n: "01",
    kicker: "Visibility",
    title: "You stop asking what happened. You watch it.",
    body: "Today the day is reported back to you at night, from memory, on WhatsApp, in a format nobody can add up. OZZO makes the day report itself as it goes.",
    points: [
      "See who punched in, from where, with a selfie — not a message that says “reached.”",
      "Every visit is geo-stamped, so a covered outlet is one the phone was actually standing in.",
      "Tracking Health flags a dead or drifting device before it costs you a whole day of data.",
    ],
    stat: { value: "1", label: "screen — the whole field force, live" },
  },
  {
    n: "02",
    kicker: "Discipline",
    title: "The right outlets get covered — in the right order.",
    body: "A plan on paper is not coverage. OZZO turns the beat into something the rep works through, and something you can measure against what actually happened.",
    points: [
      "Plan each rep's beat once; the route runs itself, customer by customer.",
      "A route starts with one tap and closes when the work is done — not when someone remembers to say so.",
      "No silent skips — the outlet that keeps getting missed finally stops getting missed.",
    ],
    stat: { value: "0", label: "outlets quietly skipped off the beat" },
  },
  {
    n: "03",
    kicker: "Money",
    title: "The quiet leaks close — with no accounting bolt-on.",
    body: "A bill that crossed sixty days because chasing it is nobody's favourite job. Stock counted from memory. Individually harmless — together they decide how much of the month reaches your books.",
    points: [
      "Outstanding recalculates itself against every order and every collection.",
      "Stock moves as orders and dispatch move — a closing balance without a stock-take from memory.",
      "Credit limits sit on the counter, so an overdue shop can't quietly go deeper.",
    ],
    stat: { value: "₹0", label: "spent on a separate accounting integration" },
  },
  {
    n: "04",
    kicker: "One source of truth",
    title: "One login for the office and the field.",
    body: "Stop stitching a CRM, a GPS tracker, a messaging tool and a pile of spreadsheets that never agree. Customers, orders, visits and reports live in one place your whole team trusts.",
    points: [
      "Messages, leads, orders and visits share one customer record — office and field see the same thing.",
      "WhatsApp lands in a shared inbox with an AI assistant that answers routine questions from your own knowledge base.",
      "Eleven built-in reports and a per-rep Daily Sales Report — manage by facts, not the loudest update.",
    ],
    stat: { value: "37", label: "modules that already talk to each other" },
  },
];

/** Editorial one-liners for the three product lines (the suite). */
export const suiteLines: Record<string, string> = {
  crm: "Catch every enquiry and reply on WhatsApp — before it goes cold.",
  wfa: "Know your team showed up, and visited the outlets they were meant to.",
  sfa: "Take the order, collect the cash, and watch the outstanding — one flow.",
};

/** Business-owner outcomes (why), not feature names (what). */
export const benefits = [
  {
    icon: "Eye",
    title: "See your field team in real time",
    body: "Live GPS, selfie attendance and geo-tagged visits mean you always know who worked, where they went, and which customers they actually met — no more guesswork or fake reporting.",
  },
  {
    icon: "MessageSquare",
    title: "Never lose a customer message",
    body: "Every WhatsApp conversation lands in one shared team inbox with templates and an AI assistant that answers routine questions instantly — so leads get a reply in seconds, not hours.",
  },
  {
    icon: "IndianRupee",
    title: "Get paid faster, chase less",
    body: "Capture orders in the field, collect payments on the spot, and watch outstanding and credit limits per customer — so money in the market stops slipping through the cracks.",
  },
  {
    icon: "Layers",
    title: "One system, one source of truth",
    body: "Stop stitching a CRM, a tracker, a bulk-messaging tool and spreadsheets together. Customers, orders, visits and reports all live in one place that your whole team trusts.",
  },
  {
    icon: "WifiOff",
    title: "Works where your reps work",
    body: "The Android app captures attendance, visits, orders, quotations, payments and expenses offline, then syncs automatically the moment signal returns. No network, no problem.",
  },
  {
    icon: "ShieldCheck",
    title: "You stay in control",
    body: "Granular roles and per-module permissions with data-scoping decide exactly what each person can see and do — from a single rep to a national sales head.",
  },
];

/** Platform-wide capabilities that apply across product lines. */
export const platformFeatures = [
  {
    icon: "MessageSquare",
    title: "WhatsApp CRM",
    description:
      "A shared team inbox on your official WhatsApp number, message templates, and an AI assistant trained on your own knowledge base to answer routine questions.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: "GitBranch",
    title: "Leads & deal pipelines",
    description:
      "Capture leads, qualify them, and move deals across visual Kanban pipelines with products, stages, tags and custom fields.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: "MapPin",
    title: "GPS, attendance & visits",
    description:
      "Live location for field reps, punch-in with selfie and GPS, geo-tagged customer visits, expenses and beat planning — all from the mobile app.",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    icon: "ShoppingCart",
    title: "Orders & collections",
    description:
      "Capture orders offline and sync them, run dispatch, collect payments in the field, and track outstanding and customer financials.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: "FileText",
    title: "Quotations & documents",
    description:
      "Generate branded PDF quotations, orders, dispatch notes and payment receipts using your own company letterhead and templates.",
    gradient: "from-fuchsia-500 to-pink-400",
  },
  {
    icon: "PieChart",
    title: "Reports & DSR",
    description:
      "Eleven built-in reports across orders, sales, payments, leads, visits, expenses and more — plus a Daily Sales Report for every rep.",
    gradient: "from-rose-500 to-red-400",
  },
];

/** How the day flows across the platform — grounded in real modules. */
export const howItWorks = [
  {
    step: "01",
    title: "Capture the enquiry",
    body: "A customer messages your WhatsApp number or a rep adds a lead in the field. It lands in your pipeline with the source, tags and custom fields you need.",
  },
  {
    step: "02",
    title: "Work it from anywhere",
    body: "Managers work the web dashboard; reps use the Android app to check in at customers, log visits and update deals — online or offline.",
  },
  {
    step: "03",
    title: "Quote, order & collect",
    body: "Send a branded PDF quotation, capture the order, run dispatch, and record the payment against the customer's outstanding — all in one flow.",
  },
  {
    step: "04",
    title: "See the whole picture",
    body: "Attendance, visits, orders, collections and distance roll up into 11 reports and a per-rep Daily Sales Report, so you manage by facts, not hunches.",
  },
];

export const industries = [
  { name: "Distribution & FMCG", icon: "Truck" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Building materials", icon: "HardHat" },
  { name: "Pharma & healthcare", icon: "Stethoscope" },
  { name: "Real estate & agencies", icon: "Building2" },
  { name: "Retail & wholesale", icon: "ShoppingBag" },
  { name: "Agri-inputs", icon: "Sprout" },
  { name: "Field services", icon: "Wrench" },
];

export const faqs = [
  {
    q: "What exactly is OZZO?",
    a: "OZZO is one platform that combines a CRM, field-workforce tracking, and sales & distribution — with a web dashboard for managers and a mobile app for your reps. It replaces the separate CRM, GPS tracker and messaging tools most field teams juggle today.",
  },
  {
    q: "What's the difference between CRM, WFA and SFA?",
    a: "CRM is for winning and keeping customers — leads, deals, WhatsApp and quotations. WFA (Workforce Automation) runs your field team — GPS, attendance, visits, expenses and beat planning. SFA adds sales & distribution — orders, payments, financials and dealer/distributor management, and it already includes everything in Workforce.",
  },
  {
    q: "Do I have to buy the whole platform?",
    a: "No. Pick a single line (CRM, WFA or SFA) or combine them (CRM + WFA, or CRM + SFA). Every plan includes the essentials — customers, products, tasks, attendance, leave, holiday and announcements.",
  },
  {
    q: "How is it priced?",
    a: "Per user, per month, with a minimum of 3 users: CRM ₹100, WFA ₹150, SFA ₹350, CRM+WFA ₹200 and CRM+SFA ₹450. Annual is the base rate; half-yearly adds 20% and quarterly adds 30%. Share your details and our team will help you pick the right fit.",
  },
  {
    q: "Does it work without internet in the field?",
    a: "Yes. The mobile app captures attendance, visits, orders, quotations, payments and expenses offline and syncs them automatically once the rep is back online.",
  },
  {
    q: "Do you have an iOS app?",
    a: "The field app is on Android today, and an iOS version is on the way. The web dashboard runs in any modern browser, on any device — so managers are covered regardless.",
  },
  {
    q: "Do I need the WhatsApp Business API?",
    a: "WhatsApp CRM — the shared inbox, templates and the AI assistant — is included in any plan with the CRM line. You connect your official WhatsApp Business number to use it.",
  },
  {
    q: "How do we get started?",
    a: "Just share your details on this site. Our team will call you, understand your workflow, and set up a guided demo and trial so you can see OZZO working with your own team before you commit.",
  },
];
