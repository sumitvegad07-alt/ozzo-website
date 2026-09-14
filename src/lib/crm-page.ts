/**
 * Content for the bespoke OZZO CRM product page.
 *
 * Every capability named here is grounded in OZZO_FEATURE_MASTER_CATALOG.md
 * (production-verified). Nothing aspirational is claimed as shipped:
 *   - The AI "knowledge-base assistant" (answers routine WhatsApp questions
 *     from uploaded docs) is real and live — it is the ONLY AI feature claimed.
 *   - No email inbox, call recording, automation engine, or auto lead-source
 *     integrations are claimed (OZZO does not ship those).
 */

export const crmMeta = {
  metaTitle: "OZZO CRM — WhatsApp inbox, pipelines & quotations",
  metaDescription:
    "OZZO CRM turns every enquiry into a structured sales process: capture leads, work them across visual Kanban pipelines, reply from one shared WhatsApp inbox with an AI assistant, and send branded PDF quotations — with field visits on the same customer timeline. Web + Android, works offline.",
  keywords: [
    "CRM software India",
    "WhatsApp CRM",
    "shared WhatsApp inbox",
    "sales pipeline software",
    "lead management software",
    "quotation software",
    "sales CRM for small business",
    "CRM with mobile app",
    "best CRM for field sales",
  ],
};

/** SECTION 2 — Problems we solve. */
export const crmProblems: { icon: string; title: string; body: string }[] = [
  {
    icon: "MailX",
    title: "Follow-ups fall through",
    body: "An enquiry lands in one person's WhatsApp or inbox, nobody sets the next action, and the deal quietly goes cold. The lead was never lost on price — it was lost to silence.",
  },
  {
    icon: "FolderX",
    title: "Customer data is scattered",
    body: "Numbers in a phone, notes in a diary, prices in Excel, chats on WhatsApp. There is no single record, so every handover starts from zero and nothing is ever really up to date.",
  },
  {
    icon: "EyeOff",
    title: "No sales visibility",
    body: "You find out how the pipeline is really doing at month-end — from memory, on a call. By then the deals that stalled in week two are already gone.",
  },
  {
    icon: "FileWarning",
    title: "Quotations go missing",
    body: "Quotes get typed by hand, sent late, and forgotten. No version trail, no reminder, no idea which ones are still open or what was last offered.",
  },
  {
    icon: "UsersRound",
    title: "Nobody is accountable",
    body: "Who owns this lead? Who dropped it? When a rep leaves, their pipeline leaves with them — on their phone. There is no honest answer, because there is no shared system.",
  },
];

/** SECTION 3 — How OZZO CRM works (5-step workflow). */
export const crmWorkflow: {
  step: string;
  title: string;
  body: string;
  icon: string;
  module: string;
}[] = [
  {
    step: "01",
    title: "Lead",
    body: "Every enquiry becomes a lead with its source, industry, tags and your own custom fields — from the web, the field app, or a rep on the ground.",
    icon: "UserPlus",
    module: "Leads",
  },
  {
    step: "02",
    title: "Follow-up",
    body: "Set the next action as a task, log activity, and reply on WhatsApp. Nothing waits on someone remembering — the follow-up is on the record.",
    icon: "MessageSquare",
    module: "Tasks · WhatsApp · Activities",
  },
  {
    step: "03",
    title: "Opportunity",
    body: "Qualified leads become deals on a visual Kanban pipeline — with the products on the deal, the stage, and rules that match how you actually sell.",
    icon: "GitBranch",
    module: "Deals & pipelines",
  },
  {
    step: "04",
    title: "Quotation",
    body: "Build a branded PDF quote straight from the customer's record, with automatic line-item pricing and your terms — and keep the full activity trail.",
    icon: "FileText",
    module: "Quotations",
  },
  {
    step: "05",
    title: "Customer",
    body: "The deal closes into a customer whose whole history — messages, visits, quotes and tasks — lives on one timeline the whole team shares.",
    icon: "CircleCheck",
    module: "Customers",
  },
];

/** SECTION 4 — Complete customer journey (timeline). */
export const crmJourney: {
  title: string;
  body: string;
  icon: string;
  tag?: string;
}[] = [
  {
    title: "Lead capture",
    body: "The enquiry enters the pipeline with its source, tags and custom fields — from a rep in the field or your team on the web.",
    icon: "UserPlus",
  },
  {
    title: "Calls & tasks",
    body: "Log the call, set the next step, and let the activity feed keep the record of every touch — so no conversation is only in someone's head.",
    icon: "Phone",
  },
  {
    title: "WhatsApp",
    body: "Chat from one shared team inbox on your official number, with templates and an AI assistant answering routine questions instantly.",
    icon: "MessageCircle",
  },
  {
    title: "Meetings & visits",
    body: "Reps check in on site — GPS-stamped — so a meeting on the timeline is one the phone was actually standing in.",
    icon: "MapPin",
  },
  {
    title: "Quotations",
    body: "A branded PDF quote built from the record, with automatic pricing, your terms, and a version trail kept against the customer.",
    icon: "FileText",
  },
  {
    title: "Orders",
    body: "Capture the order — even offline — and watch it land on the same customer record as everything else.",
    icon: "ShoppingCart",
    tag: "with SFA",
  },
];

/** SECTION 5 — Core capabilities (premium cards). */
export const crmCapabilities: { icon: string; title: string; body: string }[] = [
  {
    icon: "GitBranch",
    title: "Leads & Kanban pipelines",
    body: "Capture leads with configurable statuses, sources and industries, then move deals across as many visual pipelines as you need — each with its own stages and the products on every deal.",
  },
  {
    icon: "MessageSquare",
    title: "WhatsApp shared inbox",
    body: "Every conversation on your official WhatsApp number in one team inbox — attached to the right lead, with reactions, unread indicators and message templates for fast, consistent replies.",
  },
  {
    icon: "Bot",
    title: "AI knowledge-base assistant",
    body: "Upload your own knowledge documents and the AI assistant answers routine customer questions from them instantly — so your team only handles the conversations that truly need a person.",
  },
  {
    icon: "FileText",
    title: "Branded quotations",
    body: "Build quotes from the customer's record with automatic line-item calculation, terms & conditions templates, and a PDF on your own company letterhead — with the full activity trail kept.",
  },
  {
    icon: "Layers",
    title: "One customer timeline",
    body: "Messages, leads, deals, quotes, tasks and geo-tagged visits all live on a single customer record. Office and field see the same thing — nothing stuck on one person's phone.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Custom fields & catalogue",
    body: "Add your own fields to leads, deals, customers, quotations and more, grouped into sections that match your process — over a product catalogue with categories, units, tax slabs and HSN.",
  },
  {
    icon: "PieChart",
    title: "Lead, Deal & Quotation reports",
    body: "A report engine where you choose the dimensions, measures and filters, save a default view, and export — with Lead, Deal and Quotation reports ready out of the box.",
  },
  {
    icon: "ShieldCheck",
    title: "Roles & data-scoping",
    body: "Granular per-module permissions decide exactly who can see and do what — with data scope from a single rep's own records up to the whole company.",
  },
  {
    icon: "Smartphone",
    title: "Web + Android, offline",
    body: "A full admin console on the web and a field app in the pocket. Leads, deals, quotations and visits capture offline and sync themselves the moment signal returns.",
  },
];

/** Field-force (WFA) capabilities that pair with the CRM — geo visits land on
 * the same customer/lead record. All grounded in the WORKFORCE catalog. */
export const crmFieldForce: { icon: string; title: string; body: string }[] = [
  {
    icon: "Fingerprint",
    title: "Selfie + GPS attendance",
    body: "Reps punch in from the app with a selfie and GPS (and the odometer, if you require it). The day classifies itself — present, late, short — and queues offline.",
  },
  {
    icon: "Navigation",
    title: "Live location & history",
    body: "A Live Feed of current positions, an All-Locations map for any rep and day, and a per-rep Track Report — so you know who's out and where they've been.",
  },
  {
    icon: "MapPin",
    title: "Geo-tagged visits on the record",
    body: "Reps check in at a customer or lead on site; the GPS-stamped visit lands on the same CRM record as the messages, deals and quotes.",
  },
  {
    icon: "Route",
    title: "Beat & route planning",
    body: "Plan each rep's beat, assign it for the period, and they work it in order from the app — the outlet that keeps getting missed stops getting missed.",
  },
  {
    icon: "Building2",
    title: "Territory & assignment",
    body: "Model your geography country → state → city → area, and route customers and leads to the right rep area-wise instead of one by one.",
  },
  {
    icon: "ReceiptText",
    title: "Expenses & tracking health",
    body: "Field expense claims with approval, plus a Tracking Health screen that flags a phone with a dead battery or GPS off — before it costs you a day of data.",
  },
];

/** SECTION 6 — Role-based benefits (tabs). */
export const crmRoles: {
  role: string;
  tagline: string;
  icon: string;
  points: string[];
}[] = [
  {
    role: "Business Owner",
    tagline: "See the whole pipeline — and own the data",
    icon: "Briefcase",
    points: [
      "One live view of leads, deals and quotations across the whole team — not a month-end recollection.",
      "The customer database belongs to the business, not to whoever's phone it was on when a rep left.",
      "Lead, Deal and Quotation reports you can slice, save and export — decisions on facts, not the loudest update.",
      "Roles and data-scoping keep sensitive customer and financial data in exactly the right hands.",
    ],
  },
  {
    role: "Sales Manager",
    tagline: "Assign, track and never let a deal stall",
    icon: "Users",
    points: [
      "Build the process once: multiple pipelines with the stages and custom fields your sales actually follow.",
      "Watch the shared WhatsApp inbox so no customer message sits unanswered on one rep's phone.",
      "Every quotation carries an activity trail — what was offered, when, and what's still open.",
      "Tasks and follow-ups make the next step explicit, so deals move instead of quietly ageing.",
    ],
  },
  {
    role: "Sales Executive",
    tagline: "Everything for the deal, in one app",
    icon: "UserRound",
    points: [
      "Reply to customers on WhatsApp with templates and an AI assistant that handles the routine questions.",
      "Build a branded quotation from the customer's record in minutes — pricing calculates itself.",
      "Check in at meetings on the mobile app; the visit is GPS-stamped onto the customer timeline.",
      "Works offline in the field — capture the lead, deal or quote now, it syncs itself later.",
    ],
  },
];

/** SECTION 9 — Comparison table. */
export const crmComparison: {
  feature: string;
  spreadsheet: boolean | string;
  generic: boolean | string;
  ozzo: boolean | string;
}[] = [
  { feature: "One shared customer record", spreadsheet: false, generic: true, ozzo: true },
  { feature: "WhatsApp shared inbox built in", spreadsheet: false, generic: "Add-on", ozzo: true },
  { feature: "AI assistant on your knowledge base", spreadsheet: false, generic: "Rarely", ozzo: true },
  { feature: "Visual Kanban pipelines", spreadsheet: false, generic: true, ozzo: true },
  { feature: "Branded PDF quotations", spreadsheet: "Manual", generic: "Sometimes", ozzo: true },
  { feature: "Field visits on the same record", spreadsheet: false, generic: false, ozzo: true },
  { feature: "Android app that works offline", spreadsheet: false, generic: "Limited", ozzo: true },
  { feature: "Custom fields & roles / data-scoping", spreadsheet: false, generic: "Higher tiers", ozzo: true },
  { feature: "Built for Indian field-sales teams", spreadsheet: "Generic", generic: "Global-first", ozzo: true },
  { feature: "Set up with a guided demo", spreadsheet: false, generic: "Self-serve", ozzo: true },
];

/** SECTION 10 — 20 SEO-focused FAQs. */
export const crmFaqs: { q: string; a: string }[] = [
  {
    q: "What is OZZO CRM?",
    a: "OZZO CRM is the customer-facing side of the OZZO platform. It captures every enquiry as a lead, works it across visual Kanban pipelines, lets you reply from one shared WhatsApp inbox with an AI assistant, and turns deals into branded PDF quotations — all on a single customer timeline that also shows field visits. It runs on a web dashboard for managers and an Android app for your team.",
  },
  {
    q: "Who is OZZO CRM for?",
    a: "It's built for sales-led businesses in India that win customers through calls, WhatsApp and field meetings — distributors, manufacturers, building-material suppliers, agencies, service and B2B teams — anyone tired of chasing leads across spreadsheets, notebooks and personal phones.",
  },
  {
    q: "How is OZZO CRM better than managing leads in Excel or spreadsheets?",
    a: "A spreadsheet can't reply to a customer, remind a rep to follow up, or show who dropped a deal. OZZO gives every lead a single record with its next action, keeps WhatsApp conversations attached to it, moves deals across a visual pipeline, and produces reports automatically — so nothing lives only in one person's head or on their phone.",
  },
  {
    q: "How is OZZO CRM different from a generic CRM?",
    a: "OZZO is built around how Indian field-sales teams actually work: a shared WhatsApp inbox with an AI assistant is core (not a paid add-on), geo-tagged field visits sit on the same customer record, quotations print on your letterhead, and the Android app works fully offline. You also get a guided setup instead of being left to configure everything yourself.",
  },
  {
    q: "Does OZZO CRM work with WhatsApp?",
    a: "Yes. Every conversation on your official WhatsApp Business number lands in one shared team inbox, attached to the right lead — with reactions, unread indicators and message templates. An AI assistant can answer routine questions from your own knowledge base.",
  },
  {
    q: "Do I need the WhatsApp Business API?",
    a: "The shared WhatsApp inbox, templates and AI assistant are included on any plan with the CRM line. You connect your official WhatsApp Business number to use them.",
  },
  {
    q: "What does the AI assistant actually do?",
    a: "You upload your own knowledge documents, and the AI assistant answers routine customer questions from them instantly — things like lead times, specs or policies. It handles the repetitive queries so your team focuses on the conversations that need a person. It only answers from what you give it.",
  },
  {
    q: "Can I run more than one sales pipeline?",
    a: "Yes. Create as many pipelines as you need, each with its own stages, so different products, teams or customer types follow their own process. Deals move across a visual Kanban board and carry the products on each deal.",
  },
  {
    q: "Can I add custom fields to leads and deals?",
    a: "Yes. Add your own fields to leads, deals, customers, quotations, tasks, products and more — 12 record types in all — and group them into sections that match your process. Custom fields also render on the mobile app forms.",
  },
  {
    q: "Can I create and send quotations from OZZO CRM?",
    a: "Yes. Build a quotation straight from the customer's record with line items that price themselves, add your terms-and-conditions template, and export a branded PDF. Every quotation keeps an activity trail against the customer.",
  },
  {
    q: "Are quotations branded with my company letterhead?",
    a: "Yes. Quotations use your own company letterhead and document templates, so everything a customer receives looks like it came from your business.",
  },
  {
    q: "Can field visits show up in the CRM?",
    a: "Yes. Geo-tagged customer and lead visits from the Android app appear on the same customer record as your messages, deals and quotations — so a meeting on the timeline is one the phone was actually at.",
  },
  {
    q: "Does OZZO CRM have a mobile app?",
    a: "Yes. There's a full Android field app alongside the web dashboard, so reps can manage leads, deals, quotations and visits on the ground. An iOS version is on the way; the web dashboard runs in any modern browser meanwhile.",
  },
  {
    q: "Does OZZO CRM work offline?",
    a: "Yes. The mobile app captures leads, deals, quotations, visits and more offline and syncs them automatically once the phone is back online — so reps in low-signal areas never wait for the network.",
  },
  {
    q: "Can I control who sees which leads and customers?",
    a: "Yes. Granular per-module roles and permissions decide who can view, create, edit or delete each record type, and data-scoping limits each person to their own records, their team, their department or the whole company.",
  },
  {
    q: "What reports does OZZO CRM include?",
    a: "A report engine lets you choose dimensions, measures and filters, save a default view per report, and export. Out of the box you get Lead, Deal and Quotation reports — part of a wider suite of 11 built-in reports across the platform.",
  },
  {
    q: "Can I import my existing leads and customers?",
    a: "Yes — our team helps move your existing customer and lead data across during onboarding, so you start with your real pipeline rather than a blank slate. Share what you have when you book a demo and we'll map it.",
  },
  {
    q: "Is OZZO CRM suitable for small businesses?",
    a: "Yes. Even a small team gets a real CRM — WhatsApp, pipelines, quotations and reports — without a long implementation. Plans are flexible and start with the essentials, so you're not paying for modules you won't switch on.",
  },
  {
    q: "How much does OZZO CRM cost?",
    a: "OZZO doesn't publish per-user rates publicly — pricing is matched to your team size and the plan you choose (CRM on its own, or CRM plus the field team). Book a demo or request a callback and our team will put together a package for you.",
  },
  {
    q: "How do I get started?",
    a: "Share a few details to book a demo. Our team will call you, understand your workflow, help set it up with your own data, and migrate your existing customers and leads before you decide.",
  },
];
