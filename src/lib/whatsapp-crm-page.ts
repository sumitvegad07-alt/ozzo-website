/**
 * Content for the /whatsapp-crm category page.
 *
 * WHY THIS PAGE EXISTS: docs/SEO-STRATEGY.md §B4 names this the strongest
 * differentiator on the whole site and says to build it early. The reasoning
 * is worth restating, because it is the only thing keeping this page honest:
 * OZZO cannot out-authority Capterra or a competitor's blog on "best field
 * sales software", but a shared WhatsApp inbox with an AI knowledge-base
 * assistant sitting on the same customer record as leads, deals, quotations
 * and geo-tagged visits is a combination no large Indian SFA vendor ships. A
 * page can own a phrase its competitors cannot claim. That is this page.
 *
 * It must stay distinct from /products/crm. That page sells the whole CRM
 * line (leads, pipelines, quotations, reports, roles, the Android app). THIS
 * page answers the category question — what a WhatsApp CRM is, how it differs
 * from a WhatsApp broadcast tool, and what to look for — and hands the
 * product sell off to /products/crm. If it drifts into "here is all of CRM"
 * the two compete and both lose.
 *
 * HONESTY BAR: every OZZO capability named here is cross-checked against
 * src/lib/crm-page.ts, src/lib/content.ts and src/app/llms.txt/route.ts,
 * which are themselves grounded in OZZO_FEATURE_MASTER_CATALOG.md. The
 * deliberately-not-claimed list in content.ts — broadcasts, campaign
 * automations, flows, WhatsApp payment links, cart recovery — is stated
 * plainly in `whatsappLimits` below rather than left for a buyer to discover
 * in week three. People shopping for "WhatsApp CRM" are very often shopping
 * for a broadcast tool, and sending them away early is cheaper than losing
 * them late.
 */

export type WhatsappCapability = {
  /** lucide icon name (rendered via <Icon/>). */
  icon: string;
  title: string;
  body: string;
  points: string[];
};

/** What the WhatsApp side of OZZO actually does, module by module. */
export const whatsappCapabilities: WhatsappCapability[] = [
  {
    icon: "MessageSquare",
    title: "One shared team inbox",
    body: "Every conversation on your official WhatsApp Business number lands in a single inbox your whole team works from — not on one rep's personal phone. Anyone with the right permission can pick up a chat, and the next person can see what was already said.",
    points: [
      "Your official WhatsApp Business number, not a rep's personal one",
      "Unread indicators, so nothing sits unanswered by accident",
      "Reactions and message history kept against the conversation",
      "Roles and data-scoping decide who can see and reply to what",
    ],
  },
  {
    icon: "Bot",
    title: "An AI assistant on your own knowledge base",
    body: "Upload your own documents — a price list, a product sheet, your delivery and warranty terms — and the AI assistant answers routine customer questions from them. Your team only picks up the conversations that genuinely need a person.",
    points: [
      "Trained on documents you upload, not a generic internet model",
      "Answers the repeat questions: price, availability, terms, process",
      "Included with the CRM line — not a paid add-on or a separate bot tool",
      "The one AI feature OZZO claims; everything else on this page is plain software",
    ],
  },
  {
    icon: "Layers",
    title: "The same record as the deal",
    body: "This is the part a messaging tool cannot do. A WhatsApp conversation is attached to the lead or customer it belongs to, so the chat, the deal, the quotation, the task and the rep's geo-tagged visit are one timeline instead of four systems.",
    points: [
      "Chat attached to the right lead or customer automatically",
      "Deals, quotations and tasks on the same record as the messages",
      "Field visits land there too — GPS-stamped, from the Android app",
      "A handover means opening one record, not asking three people",
    ],
  },
  {
    icon: "FileText",
    title: "Templates, then a quotation",
    body: "Message templates keep replies fast and consistent instead of retyped from memory. When the conversation turns into a real enquiry, the quotation is built from that same record — a branded PDF on your letterhead, with the line items priced automatically.",
    points: [
      "Message templates for the replies you send twenty times a day",
      "Branded PDF quotation built from the customer's own record",
      "Line-item pricing calculated for you, with your terms attached",
      "A version trail kept, so you know what was offered and when",
    ],
  },
];

/**
 * How Indian teams actually run WhatsApp today. Rows are approaches, not
 * named vendors — the categories are verifiable, a claim about one company's
 * current feature list is not, and comparison pages are where named
 * competitors belong.
 */
export type WhatsappApproach = {
  approach: string;
  what: string;
  /** Does a conversation live on a shared customer record? */
  sharedRecord: string;
  /** What it is genuinely good at. */
  strength: string;
  /** Where it runs out. */
  breaks: string;
};

export const whatsappApproaches: WhatsappApproach[] = [
  {
    approach: "Reps' personal phones",
    what: "Each salesperson chats customers from their own WhatsApp, and reports back at night.",
    sharedRecord: "No",
    strength: "Free, and everyone already knows how to use it.",
    breaks:
      "The customer relationship leaves with the rep. Nobody can cover a chat, nothing is measurable, and a missed message is invisible until the customer buys elsewhere.",
  },
  {
    approach: "WhatsApp Business app",
    what: "One business number with a catalogue, quick replies and labels, used on a phone.",
    sharedRecord: "No",
    strength: "Free, official, and a real step up from a personal number.",
    breaks:
      "Built for one person on one device. No pipeline, no quotations, no reporting, and no way for a team to work the same inbox properly.",
  },
  {
    approach: "A WhatsApp broadcast / campaign tool",
    what: "A WhatsApp Business API platform for bulk template messages, campaigns and chatbot flows.",
    sharedRecord: "Partly",
    strength: "The right tool if your problem is sending at volume and measuring it.",
    breaks:
      "It is a messaging product. Your deals, quotations and field visits live somewhere else, so the conversation and the sale are still two systems.",
  },
  {
    approach: "A general CRM plus a WhatsApp add-on",
    what: "A full CRM, with WhatsApp bolted on through an integration or marketplace extension.",
    sharedRecord: "Usually",
    strength: "Deep CRM customization, and the integration does genuinely work.",
    breaks:
      "Two vendors, two bills and a connector to maintain. Field tracking is usually a third add-on, and WhatsApp often sits on a higher tier.",
  },
  {
    approach: "A WhatsApp CRM (what OZZO is)",
    what: "Shared inbox, AI assistant, leads, deals, quotations and geo-tagged visits on one customer record.",
    sharedRecord: "Yes",
    strength:
      "One login and one record for the chat and the sale, from ₹100 per user per month.",
    breaks:
      "No broadcast campaigns, flows or WhatsApp payments — if bulk marketing is the job, buy a campaign tool as well.",
  },
];

/**
 * Feature-by-feature, in OZZO or not. The `none` rows matter more than the
 * `full` ones: a buyer searching "WhatsApp CRM" is very often searching for a
 * broadcast tool, and this table is where they find that out in ten seconds.
 */
export type WhatsappFeature = {
  feature: string;
  what: string;
  ozzo: "full" | "partial" | "none";
  note?: string;
};

export const whatsappFeatures: WhatsappFeature[] = [
  {
    feature: "Shared team inbox",
    what: "One inbox on your official number that the whole team works from.",
    ozzo: "full",
  },
  {
    feature: "Chat attached to the customer record",
    what: "The conversation sits on the lead or customer it belongs to.",
    ozzo: "full",
  },
  {
    feature: "Message templates",
    what: "Saved replies for the questions you answer every day.",
    ozzo: "full",
  },
  {
    feature: "AI assistant on your own documents",
    what: "Routine questions answered from a knowledge base you upload.",
    ozzo: "full",
    note: "Included with the CRM line. This is the only AI feature OZZO claims.",
  },
  {
    feature: "Leads, deals & Kanban pipelines",
    what: "The enquiry becomes a deal and moves through stages you define.",
    ozzo: "full",
  },
  {
    feature: "Branded PDF quotations",
    what: "A quote built from the record, on your letterhead, priced automatically.",
    ozzo: "full",
  },
  {
    feature: "Geo-tagged field visits on the same record",
    what: "A rep checks in at the customer and the GPS-stamped visit joins the timeline.",
    ozzo: "full",
    note: "The part no messaging tool has. Requires a plan with the field line.",
  },
  {
    feature: "Android app, works offline",
    what: "Leads, deals, quotes and visits capture with no signal and sync later.",
    ozzo: "full",
    note: "The CRM records work offline. WhatsApp messaging needs a connection, as it must.",
  },
  {
    feature: "Bulk broadcasts & marketing campaigns",
    what: "Sending an approved template to thousands of contacts at once.",
    ozzo: "none",
    note: "OZZO does not do this. If it is your main need, buy a campaign tool — they are good at it and cheap.",
  },
  {
    feature: "Chatbot flows & journey automation",
    what: "Drag-and-drop decision trees, drip sequences and triggered journeys.",
    ozzo: "none",
    note: "The AI assistant answers questions from your documents. It is not a flow builder.",
  },
  {
    feature: "WhatsApp payment links & catalogue checkout",
    what: "Collecting money or running a storefront inside the chat.",
    ozzo: "none",
    note: "Field payment collection happens in the app on the SFA line, not inside WhatsApp.",
  },
  {
    feature: "Instagram, Facebook & email in the same inbox",
    what: "One omnichannel inbox across every messaging channel.",
    ozzo: "none",
    note: "OZZO's inbox is WhatsApp only. There is no email inbox and no social DM inbox.",
  },
];

/** What OZZO deliberately does not do. Every buyer of this category asks. */
export const whatsappLimits: { title: string; body: string }[] = [
  {
    title: "It is not a bulk-messaging or marketing tool",
    body: "There are no broadcast campaigns, no drip sequences, no chatbot flow builder and no campaign analytics. OZZO is built for the conversation that turns into a sale, not for sending to a list. If bulk marketing is the job, use a WhatsApp campaign platform alongside it.",
  },
  {
    title: "WhatsApp only — no email or social inbox",
    body: "The shared inbox covers your official WhatsApp Business number. It does not pull in email, Instagram or Facebook messages, so if you need one omnichannel inbox across every channel, OZZO is not that product.",
  },
  {
    title: "You bring your own official WhatsApp Business number",
    body: "The inbox runs on your official WhatsApp Business number, which you connect during setup. OZZO does not resell numbers, and WhatsApp's own per-conversation charges, where they apply, are between you and WhatsApp.",
  },
  {
    title: "Android today, iOS on the way",
    body: "Managers use the web dashboard in any browser, and the field app is Android. If your whole team is on iPhone, wait for the iOS build rather than buying now.",
  },
];

export const whatsappFaqs: { q: string; a: string }[] = [
  {
    q: "What is a WhatsApp CRM?",
    a: "A WhatsApp CRM is a customer relationship management system whose inbox is WhatsApp. Customer conversations on your official WhatsApp Business number land in one shared team inbox instead of on individual reps' phones, and each conversation is attached to that customer's record — so the chat sits beside the lead, the deal, the quotation and the follow-up task rather than in a separate app. It is different from a WhatsApp broadcast tool, which is built for sending bulk campaigns rather than for running a sale.",
  },
  {
    q: "How is a WhatsApp CRM different from the WhatsApp Business app?",
    a: "The WhatsApp Business app is built for one person on one phone. It gives you a business number, quick replies, labels and a catalogue, and that is a real improvement on a personal number — but there is no pipeline, no quotation, no reporting and no proper way for a team to share the inbox. A WhatsApp CRM puts the same conversations in a shared inbox on the web, attaches each one to a customer record, and carries the deal through to a quotation and a report.",
  },
  {
    q: "Is a WhatsApp CRM the same as a bulk WhatsApp sender?",
    a: "No, and it is the most common mix-up in this category. A bulk sender or campaign platform exists to push approved template messages to thousands of contacts and measure the result. A WhatsApp CRM exists to handle the replies — to route an incoming enquiry to the right person, keep it on the customer's record, and turn it into a deal. Many Indian businesses end up running one of each, because they solve different problems.",
  },
  {
    q: "Does OZZO do WhatsApp broadcasts and marketing campaigns?",
    a: "No. OZZO has no broadcast campaigns, no drip sequences and no chatbot flow builder, and we would rather say so here than in week three of your evaluation. What OZZO does is the inbound side: a shared team inbox on your official number, message templates, an AI assistant that answers routine questions from your own documents, and every conversation attached to the customer record alongside leads, deals, quotations and field visits.",
  },
  {
    q: "What makes OZZO's WhatsApp CRM different from other Indian CRMs?",
    a: "Two things on the same screen. First, the shared WhatsApp inbox and the AI knowledge-base assistant are included with the CRM line rather than sold as an add-on or reserved for a higher tier. Second, a rep's geo-tagged field visit lands on the same customer record as the WhatsApp conversation, the deal and the quotation — so the office and the field are reading one timeline. Most CRMs integrate WhatsApp; most field-sales tools do not have a WhatsApp inbox at all.",
  },
  {
    q: "How does the AI assistant actually work?",
    a: "You upload your own knowledge documents — a price list, a product sheet, delivery and warranty terms, your process. When a customer asks one of those routine questions on WhatsApp, the assistant answers from those documents instantly, so your team only handles the conversations that need a person. It is trained on what you give it, not on the open internet, and it is the only AI feature OZZO claims anywhere on this site.",
  },
  {
    q: "Do I need the WhatsApp Business API?",
    a: "You connect your official WhatsApp Business number to use the shared inbox, templates and AI assistant. They are included on any plan with the CRM line, so there is nothing extra to buy from OZZO — but the number itself is yours, and WhatsApp's own per-conversation charges, where they apply, are between you and WhatsApp.",
  },
  {
    q: "Can my whole team use one WhatsApp number?",
    a: "Yes — that is the point of a shared inbox. Everyone works the same official number from the web dashboard, with unread indicators so nothing sits unanswered, and roles and data-scoping deciding who can see and reply to which conversations. A rep leaving no longer takes the customer relationship with them, because the conversation was never on their personal phone.",
  },
  {
    q: "How much does a WhatsApp CRM cost in India?",
    a: "OZZO's CRM plan — the shared WhatsApp inbox, the AI assistant, leads, deals, Kanban pipelines and branded quotations — is ₹100 per user per month on yearly billing, plus 18% GST, with a minimum order of ₹5,000. CRM + field tracking is ₹200 and the complete platform with full field sales is ₹400. Every rate is published on the plans page; there is no \"contact us for pricing\".",
  },
  {
    q: "Does the WhatsApp inbox work offline?",
    a: "Messaging needs a connection, as it must — a message cannot send without one. Everything else on the Android app does not: leads, deals, quotations, tasks and geo-tagged visits all capture with no signal and sync themselves the moment it returns, so a rep in a market with no network is never blocked from recording the work.",
  },
];
