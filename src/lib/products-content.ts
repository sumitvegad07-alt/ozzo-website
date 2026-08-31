/**
 * Deep product-page content for CRM / WFA / SFA.
 * Every capability claimed here is grounded in OZZO_FEATURE_MASTER_CATALOG.md
 * plus shipped work (route Start-workflow + no-skip, auto stock, Tracking
 * Health). Deliberately does NOT claim things OZZO lacks vs competitors —
 * e-mail inbox, call recording, automated workflow engines, lead-source
 * auto-integrations, n-level secondary sales, van sales, ERP/Tally sync.
 */

export type FeatureStory = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
};

export type Capability = { icon: string; title: string; body: string };

export type ProductPageData = {
  slug: "crm" | "wfa" | "sfa";
  visual: "crm" | "wfa" | "sfa";
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  sub: string;
  heroChips: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  stories: FeatureStory[];
  capabilities: Capability[];
  faqs: { q: string; a: string }[];
};

export const productPages: Record<string, ProductPageData> = {
  crm: {
    slug: "crm",
    visual: "crm",
    eyebrow: "OZZO CRM · Customer Relationship Management",
    headline: "Catch every enquiry.",
    headlineAccent: "Close more of them.",
    sub: "OZZO's CRM keeps every lead moving and every customer conversation in one place — WhatsApp, quotations, deals and field visits on a single timeline your whole team works from.",
    heroChips: ["Shared WhatsApp inbox", "Kanban pipelines", "Branded quotations"],
    metaTitle: "CRM — WhatsApp inbox, pipelines & quotations",
    metaDescription:
      "OZZO CRM captures leads, works them across visual Kanban pipelines, replies to customers from one shared WhatsApp inbox with an AI assistant, and turns them into branded PDF quotations — with field visits on the same customer timeline.",
    keywords: [
      "CRM software India",
      "WhatsApp CRM shared inbox",
      "sales pipeline Kanban",
      "lead management",
      "quotation software",
      "AI customer support assistant",
    ],
    stories: [
      {
        kicker: "Capture",
        title: "Every enquiry in one place — and worked",
        body: "Leads land in your pipeline with their source, industry, tags and the custom fields you need. Nothing gets lost in a personal inbox or a spreadsheet nobody updates.",
        points: [
          "Leads with the statuses, sources and industries you configure",
          "Notes, tags and custom fields on every lead",
          "Geo-tagged lead visits from the field, linked back to the record",
        ],
      },
      {
        kicker: "Pipelines",
        title: "Build the process once. Work it every day.",
        body: "Products don't sell like services, and dealers don't behave like walk-ins. Give each its own board, its own stages and its own rules — then move deals across a visual Kanban.",
        points: [
          "Multiple pipelines, each with its own configurable stages",
          "Kanban board with deal items — the products on each deal",
          "Custom fields on deals so the board matches how you actually sell",
        ],
      },
      {
        kicker: "Conversations",
        title: "WhatsApp, in one shared inbox",
        body: "Every conversation on your official WhatsApp number lands in one team inbox — attached to the right lead, not stuck on one person's phone — with templates and an AI assistant trained on your own knowledge base.",
        points: [
          "Shared team inbox with reactions and unread indicators",
          "Message templates for fast, consistent replies",
          "AI knowledge-base assistant answers routine questions instantly",
        ],
      },
      {
        kicker: "Quotations",
        title: "Quote in minutes, on your own letterhead",
        body: "Build a quotation straight from the customer's record with automatic line-item calculation, add your terms, and export a branded PDF — with the full activity trail kept.",
        points: [
          "Line items with automatic pricing calculation",
          "Terms & conditions templates and your document letterhead",
          "Every quotation's activity trail kept against the customer",
        ],
      },
    ],
    capabilities: [
      { icon: "GitBranch", title: "Leads & deals", body: "Leads, multiple pipelines and a visual Kanban board with deal items." },
      { icon: "MessageSquare", title: "WhatsApp CRM", body: "Shared inbox, templates and an AI assistant on your official number." },
      { icon: "FileText", title: "Quotations", body: "Branded PDF quotes with automatic calculation and version trail." },
      { icon: "Layers", title: "One timeline", body: "Leads, customers, orders, visits and tasks on one activity feed." },
      { icon: "PieChart", title: "Reports", body: "Lead, Deal and Quotation reports out of the box." },
      { icon: "ShieldCheck", title: "Custom fields & roles", body: "Your own fields on every record, with granular role-based access." },
    ],
    faqs: [
      {
        q: "What is OZZO CRM?",
        a: "It's the customer-facing side of OZZO — leads, deals and pipelines, a shared WhatsApp inbox with an AI assistant, quotations, and a single customer timeline. It works on the web dashboard and the mobile app.",
      },
      {
        q: "Do I need the WhatsApp Business API?",
        a: "The shared WhatsApp inbox, templates and AI assistant are included on plans with the CRM line. You connect your official WhatsApp Business number to use them.",
      },
      {
        q: "Can I run more than one sales pipeline?",
        a: "Yes. Create as many pipelines as you need, each with its own stages, so different products, teams or customer types follow their own process.",
      },
      {
        q: "What does the AI assistant do?",
        a: "It answers routine customer questions from a knowledge base you upload — so common queries get an instant, accurate reply while your team handles the conversations that need a person.",
      },
      {
        q: "Can field visits show up in the CRM?",
        a: "Yes. Geo-tagged customer and lead visits from the mobile app appear on the same customer record as your messages, deals and quotations.",
      },
    ],
  },

  wfa: {
    slug: "wfa",
    visual: "wfa",
    eyebrow: "OZZO WFA · Workforce Automation",
    headline: "Know they showed up.",
    headlineAccent: "And visited the right shops.",
    sub: "Live GPS, selfie attendance and geo-tagged visits from a rugged mobile app — plus a Tracking Health screen that tells you the moment a phone stops reporting. The field day, on record.",
    heroChips: ["Selfie + GPS attendance", "Route enforcement", "Tracking Health"],
    metaTitle: "Workforce Automation — GPS, attendance & beat planning",
    metaDescription:
      "OZZO WFA runs your field team: selfie + GPS attendance, live location, geo-tagged visits, beat/route planning with a start workflow reps can't skip, territory management, expenses and leave — with a Tracking Health screen and full offline capture.",
    keywords: [
      "field force tracking",
      "GPS attendance app",
      "beat plan software",
      "sales rep tracking India",
      "employee location tracking",
      "field visit management",
    ],
    stories: [
      {
        kicker: "Attendance",
        title: "The day starts on record",
        body: "Reps punch in from the mobile app with a selfie and GPS — and the odometer, if you require it. Punches queue offline and classify the day automatically.",
        points: [
          "Selfie + GPS (and optional odometer) capture at punch-in",
          "Present, Late Start, Early Leaving, Short Present, Absent — classified for you",
          "Leave and holiday lists feed the same attendance picture",
        ],
      },
      {
        kicker: "Visibility",
        title: "Where the team is, and where they've been",
        body: "One screen for the whole field force — current positions, the day's trail, and a per-user history you can open any time.",
        points: [
          "Live Feed of current positions",
          "All Locations map for a chosen day and user",
          "Track Report — the full location history per rep",
        ],
      },
      {
        kicker: "Discipline",
        title: "The beat runs itself — in order",
        body: "Plan each rep's beat once. On the ground, a route starts with one tap and the app walks them customer by customer — nobody quietly skips the shop they'd rather not visit.",
        points: [
          "Monthly route planner, approvals and per-period assignment",
          "A start workflow the rep follows — the route knows what's done and what's left",
          "Territory tree (country → state → city → area) with area-wise assignment",
        ],
      },
      {
        kicker: "Trust",
        title: "Know when a phone isn't really tracking",
        body: "Fake reporting usually hides behind a dead battery or a switched-off GPS. The Tracking Health screen surfaces device state so you catch it before it costs you a day of data.",
        points: [
          "Device health snapshots — battery, GPS and permission state",
          "Registered devices per employee",
          "Spot a drifting or dead device before the report is already wrong",
        ],
      },
    ],
    capabilities: [
      { icon: "Fingerprint", title: "Attendance", body: "Selfie + GPS punch-in, odometer option, offline queue, auto-classification." },
      { icon: "MapPin", title: "Live tracking", body: "Live Feed, All Locations and per-user Track Report." },
      { icon: "Route", title: "Beat & routes", body: "Planner, approvals, assignment and a start workflow reps can't skip." },
      { icon: "Eye", title: "Tracking Health", body: "Device battery, GPS and permission state so tracking stays honest." },
      { icon: "ReceiptText", title: "Expenses & leave", body: "Expense claims with approval, leave, holiday and announcements." },
      { icon: "WifiOff", title: "Works offline", body: "Attendance, visits and more capture offline and sync automatically." },
    ],
    faqs: [
      {
        q: "How does attendance stop fake reporting?",
        a: "Punch-in captures a selfie and GPS location (and the odometer, if you enable it). Combined with the Tracking Health screen — which shows device battery, GPS and permission state — you can tell when a phone genuinely wasn't reporting.",
      },
      {
        q: "Can reps skip customers on their route?",
        a: "The route is a beat the rep works through, in order, from a start workflow — not a list they can silently ignore. The app knows which outlets are done and which are left, so the shop that keeps getting missed stops getting missed.",
      },
      {
        q: "Does tracking run all the time?",
        a: "Location is recorded on an interval while the rep is punched in, in the background. Shift times classify attendance; they don't switch tracking off — punched in means tracked.",
      },
      {
        q: "Does the mobile app work without signal?",
        a: "Yes. Attendance, visits and other field records capture offline and sync automatically once the phone is back online. An iOS version of the app is on the way.",
      },
      {
        q: "Can I organise the team by geography?",
        a: "Yes. The Territory Master models country → state → city → area, and you can assign employees and route customers and leads by area.",
      },
    ],
  },

  sfa: {
    slug: "sfa",
    visual: "sfa",
    eyebrow: "OZZO SFA · Sales Force Automation",
    headline: "Take the order. Collect the cash.",
    headlineAccent: "No accounting software.",
    sub: "Capture orders in the field — even offline — collect payments on the spot, and watch outstanding and stock keep themselves. No Tally, no ERP bolt-on. SFA includes everything in Workforce.",
    heroChips: ["Offline order capture", "Auto outstanding", "Auto stock"],
    metaTitle: "Sales Force Automation — orders, payments & outstanding",
    metaDescription:
      "OZZO SFA captures orders offline, runs dispatch, collects payments in the field, and keeps outstanding and stock calculated automatically — no accounting software or Tally integration needed. Includes distributor/dealer hierarchy, discounts and sales analytics.",
    keywords: [
      "sales force automation software",
      "order management app",
      "payment collection app",
      "outstanding management",
      "distributor management India",
      "no Tally integration",
    ],
    stories: [
      {
        kicker: "Orders",
        title: "Capture the order anywhere — even offline",
        body: "Reps build the order at the counter with your catalogue and discounts, on or off the network. It syncs itself, then runs through dispatch and your pending-dispatch queue.",
        points: [
          "Order line items with discounts and a status workflow",
          "Offline capture that syncs the moment signal returns",
          "Dispatch, a pending-dispatch queue and a branded order PDF",
        ],
      },
      {
        kicker: "Money",
        title: "Outstanding keeps itself — nothing to wire up",
        body: "This is the difference. Every order and every collection updates the customer's balance the moment it happens — so you never re-key an order into Tally or wait for an accountant to reconcile.",
        points: [
          "Customer financials — opening balance, outstanding and credit limit",
          "Record collections in the field, with proof, approval and a backdating window",
          "Outstanding recalculates itself against every order and payment",
        ],
      },
      {
        kicker: "Stock",
        title: "A closing balance without a stock-take from memory",
        body: "Stock moves as your orders and dispatch move. The closing balance is derived from the ledger — not counted on a Sunday and typed into a spreadsheet.",
        points: [
          "Closing stock derived automatically from order and dispatch movement",
          "No separate inventory system to reconcile against",
          "One source of truth for what's actually on hand",
        ],
      },
      {
        kicker: "Trade",
        title: "Distributor, dealer, retailer — priced right",
        body: "Classify customers into your trade levels, and orders tag themselves primary or secondary. Discounts follow the rules you set, with a price floor reps can't cross.",
        points: [
          "Up to five named trade levels (Distributor, Dealer, Retailer …)",
          "Orders auto-classified primary / secondary from the customer's level",
          "Discount scope, value type, price-floor enforcement and tax mode",
        ],
      },
    ],
    capabilities: [
      { icon: "ShoppingCart", title: "Orders & dispatch", body: "Offline capture, status workflow, dispatch and pending-dispatch queue." },
      { icon: "IndianRupee", title: "Payment collection", body: "Field collections with proof, approval and a backdating window." },
      { icon: "Calculator", title: "Customer financials", body: "Opening balance, credit limit and self-calculating outstanding." },
      { icon: "Layers", title: "Stock", body: "Closing stock derived from movement — no separate inventory tool." },
      { icon: "GitBranch", title: "Trade hierarchy", body: "Distributor/dealer/retailer levels with primary/secondary orders." },
      { icon: "PieChart", title: "Sales analytics", body: "Sales, Order and Ageing reports plus a per-rep Daily Sales Report." },
    ],
    faqs: [
      {
        q: "Do I need Tally or an accounting system to use SFA?",
        a: "No — that's the point. Outstanding and stock are calculated inside OZZO from your orders, dispatch and collections. There's no accounting integration to buy or maintain, and nobody re-keys an order.",
      },
      {
        q: "How is outstanding calculated?",
        a: "Automatically. Every order raises it and every collection reduces it, per customer, against the credit limit you set — so the balance on the counter is always current.",
      },
      {
        q: "Can reps take orders without internet?",
        a: "Yes. Orders (and quotations, payments and expenses) capture fully offline on the mobile app and sync themselves once the rep is back online.",
      },
      {
        q: "Does SFA handle distributors and dealers?",
        a: "Yes. Classify customers into up to five trade levels; orders are auto-tagged primary or secondary from the customer's level, and discounts follow your rules with a price floor reps can't cross.",
      },
      {
        q: "Is Workforce included in SFA?",
        a: "Yes. SFA includes everything in Workforce — attendance, GPS, visits, routes and expenses — plus orders, payments, financials, stock and trade management.",
      },
    ],
  },
};

export const productSlugs = Object.keys(productPages);
