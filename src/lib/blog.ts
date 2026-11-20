/**
 * Blog content model for OZZO — a lightweight, data-driven blog.
 *
 * To publish a new article, add a `BlogPost` object to the `posts` array below.
 * Newest `date` shows first automatically; the slug becomes the URL
 * (/blog/<slug>) and feeds the sitemap and BlogPosting schema. Body is a list
 * of typed blocks so a post can be written without touching any JSX.
 *
 * Keep every claim grounded in what OZZO actually ships — the blog is a
 * marketing surface, held to the same honesty as the rest of the site.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  /**
   * An internal link on its own line. Added for the weekly generated posts,
   * which are required to link to specific product and comparison pages —
   * section 5 of docs/SEO-STRATEGY.md calls weak internal linking out by name.
   * `href` is always site-relative and is checked against the real route list
   * before a generated post is accepted.
   */
  | { type: "link"; href: string; label: string }
  /**
   * An illustration, as a real file under public/blog/<slug>/ drawn by
   * scripts/build-blog-images.mjs.
   *
   * It is a FILE and not inline SVG on purpose: Google Images only indexes an
   * image it can fetch at its own URL, so inline markup is invisible to image
   * search and the alt text below never gets to do its job.
   *
   * `alt` is required, not optional. An image with no alt text is useless to
   * image search and to anyone using a screen reader, and the one way to stop
   * it being forgotten is to make it impossible to leave out. Describe what
   * the picture SHOWS, in a sentence — not "chart" or the post's title again.
   *
   * Width and height are deliberately absent: they come from
   * src/content/blog-image-sizes.json, which the generator writes, so they
   * cannot drift away from the file they describe.
   */
  | { type: "image"; src: string; alt: string; caption?: string }
  /** Side-by-side comparison graphic — renders as branded cards, no image files. */
  | {
      type: "compare";
      columns: { label: string; tagline: string; points: string[] }[];
    }
  /** "Pick by your situation" panel — situation on the left, recommendation badge on the right. */
  | { type: "decision"; rows: { when: string; pick: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  /**
   * Shorter <title> for search results, when the headline is too long to
   * survive Google's ~60-character cut (the " — OZZO" suffix costs 7 of
   * them). The headline on the page itself stays `title` — a good headline
   * should not be shortened just to fit a SERP.
   */
  metaTitle?: string;
  /** One-sentence summary — used on the card, meta description and OG. */
  description: string;
  /** ISO date, e.g. "2026-09-14". */
  date: string;
  author: string;
  tags: string[];
  /** Emoji shown on the card and article header (brand-safe, no image files). */
  emoji: string;
  readingMinutes: number;
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "ozzo-dms-live-distributor-portal",
    title: "OZZO DMS is live — your distributors can order themselves",
    metaTitle: "OZZO DMS is live",
    description:
      "The OZZO distributor portal is live. Give any customer a browser login to order on their own price list. ₹10,000 a year for 100 logins.",
    date: "2026-11-20",
    author: "Team OZZO",
    tags: ["DMS", "Distributor management", "Product update", "Secondary sales"],
    emoji: "🏪",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "OZZO DMS is live. It is a third product alongside CRM and Sales Force Automation, and it does one thing: it gives your distributors, stockists and dealers their own login so they place their own orders instead of sending them to your team. They order on their own price list, with their schemes applied and their credit limit enforced. They see what they owe you. They dispatch what they have sold onward. It runs in a browser at dms.ozzo.co.in, so there is nothing for them to install, and it costs ₹10,000 a year for 100 logins plus GST, on top of any CRM or SFA plan.",
      },
      {
        type: "h2",
        text: "What it does, and what it does not",
      },
      {
        type: "p",
        text: "The second half of that heading matters more than the first. Every competitor in this category ships distributor stock and claims handling, and OZZO DMS does not. We would rather you knew that now than discovered it in week three, so both lists are on the product page and both are below.",
      },
      {
        type: "image",
        src: "/blog/ozzo-dms-live-distributor-portal/01-in-and-out.svg",
        alt: "Two columns listing what OZZO DMS ships today — logins at any customer level, purchase and sales orders, per-customer price lists, automatic schemes, outstanding and dispatch, four reports — against what it does not ship, which is distributor godown stock, auto-replenishment, claims, stock reconciliation, delivery tracking and a mobile app",
        caption:
          "Both columns describe the product as it ships today. The right-hand one is on the product page too.",
      },
      {
        type: "p",
        text: "What is in: a login for a customer at any level of your hierarchy, not distributors only. Purchase orders on you and sales orders to their own shops. Pricing from that buyer's own price list, calculated in the database rather than in their browser. Automatic scheme detection, using the same engine that prices an order typed by your own salesman. Outstanding and payments. A Pending Dispatch queue they work themselves. Four reports, and a filter on every column of every table.",
      },
      {
        type: "p",
        text: "What is out: distributor godown stock, auto-replenishment from reorder levels, claims of any kind, primary-versus-secondary stock reconciliation, delivery boys, and scheme management from inside the portal. If one of those is why you are buying, an enterprise distribution suite is the better product and we will say so on the call.",
      },
      {
        type: "h2",
        text: "Why a browser and not an app",
      },
      {
        type: "p",
        text: "This was the design decision that mattered most, because adoption is the only real risk in this category. A distributor portal that nobody uses is worse than no portal at all — you keep the WhatsApp orders and you pay for software as well.",
      },
      {
        type: "p",
        text: "An app has to be found in a store, installed on a phone that may be short of space, updated when it breaks, and password-reset when the owner's nephew who set it up has moved on. Each of those steps loses some of your network. A link and a password loses almost none. So OZZO DMS is a web page, it works on a phone browser, and it is deliberately not in any app store.",
      },
      {
        type: "image",
        src: "/blog/ozzo-dms-live-distributor-portal/02-switching-it-on.svg",
        alt: "A four-step flow showing how DMS is switched on: OZZO grants the add-on to the account, the tenant admin turns on DMS access for a customer and sets an email and password, the customer signs in to a browser with nothing to install, and their first order arrives already typed and priced on their own list",
      },
      {
        type: "h2",
        text: "Your margin stays yours",
      },
      {
        type: "p",
        text: "The first question every manufacturer asks is whether a distributor will be able to see what everyone else pays. The answer is no, and the reason is worth understanding rather than taking on trust.",
      },
      {
        type: "p",
        text: "Each order is priced on that buyer's own price list, and the pricing is calculated by the database, not by their browser — so it cannot be tampered with and it cannot drift from your own rules. The visibility rule is enforced in the database too: a login sees itself and everyone below it in your hierarchy, and nothing sideways or above. Typing a different customer's id into the address bar changes nothing, because the check does not live in the page.",
      },
      {
        type: "ul",
        items: [
          "A distributor cannot see any other customer's rates, orders, balances or customers",
          "They cannot edit an existing customer's master record",
          "They can add a new shop only if you switch that on — it is off by default",
          "Switching their access off ends it immediately and frees the seat for someone else",
          "There is no public sign-up page and no forgotten-password email; your admin sets passwords",
        ],
      },
      {
        type: "h2",
        text: "What it costs",
      },
      {
        type: "p",
        text: "₹10,000 per year for 100 distributor and dealer logins, plus 18% GST. That works out at roughly ₹8 per login per month. It is priced per login rather than per user because the people signing in are your customers, not your staff — your own team is already licensed on your CRM or SFA plan, and adding DMS does not change that.",
      },
      {
        type: "image",
        src: "/blog/ozzo-dms-live-distributor-portal/03-the-price.svg",
        alt: "A breakdown of the DMS price showing ₹10,000 per year for 100 distributor and dealer logins, about ₹8 per login per month, all 100 logins included with unused seats costing nothing extra, 18% GST on top, no extra per-user charges, and that it is an add-on rather than a standalone product",
      },
      {
        type: "p",
        text: "The login limit is enforced by the database rather than by an invoice, so when all 100 are in use the next one is refused as your admin creates it, with a clear message. Nobody ends up with a half-working account and nobody is billed for seats they did not switch on.",
      },
      {
        type: "h2",
        text: "Where to start",
      },
      {
        type: "p",
        text: "You do not have to switch on your whole network at once, and the brands that do this well usually do not. Start with the customers where the retyping is worst — the ones who order most often, the ones who send photographs of handwritten lists, and the ones who call your accounts desk about balances. Those are the logins that pay for themselves in the first month.",
      },
      {
        type: "image",
        src: "/blog/ozzo-dms-live-distributor-portal/04-who-gets-a-login.svg",
        alt: "Two columns advising who to give a DMS login to first — the distributors who order most often, those sending photo or voice-note orders, those who call about balances, those whose schemes get argued about — and who to leave for later, such as customers ordering once a year or shops with no reliable internet",
      },
      {
        type: "decision",
        rows: [
          {
            when: "Your staff retype orders that arrived on WhatsApp",
            pick: "DMS",
          },
          {
            when: "You need distributor stock, replenishment or claims",
            pick: "A specialist DMS",
          },
          {
            when: "Your own reps need attendance, GPS, visits and beats",
            pick: "SFA",
          },
          {
            when: "You want the trade portal and the field team together",
            pick: "SFA + DMS",
          },
        ],
      },
      {
        type: "link",
        href: "/products/dms",
        label: "See everything OZZO DMS does",
      },
      {
        type: "link",
        href: "/distributor-management-software",
        label: "Not sure what a DMS is? Start with the category guide",
      },
      {
        type: "p",
        text: "If you already run OZZO, DMS switches on against the customers, price lists and schemes you have — there is no master-data project, because the masters are already there. Book a demo and we will turn it on and create the first distributor login with you on the call.",
      },
    ],
  },
  {
    slug: "what-is-a-distributor-management-system-dms",
    title: "What is a Distributor Management System (DMS)?",
    description:
      "A plain explanation of what a DMS is, how it differs from CRM and SFA, what it must do at a minimum, and how to tell which tier you need.",
    date: "2026-11-20",
    author: "Team OZZO",
    tags: ["DMS", "Distributor management", "Buying guide", "FMCG"],
    emoji: "📦",
    readingMinutes: 8,
    body: [
      {
        type: "p",
        text: "A Distributor Management System (DMS) is software that connects a brand or manufacturer to the distributors, stockists and dealers who sell its products onward. Its job is to replace the phone calls, WhatsApp messages and spreadsheets that normally carry trade orders, stock positions and outstanding balances between a company and its channel. In practice that means each trade customer gets their own login, places their own orders against the price list and credit limit that apply to them, sees what they owe, and records what they sold onward.",
      },
      {
        type: "p",
        text: "That is the whole idea. The rest of this article is about the three things buyers get wrong: confusing a DMS with a CRM or an SFA, not knowing what the minimum is, and not realising that three quite different kinds of product are sold under this one name at wildly different prices.",
      },
      {
        type: "h2",
        text: "It is not a CRM, and not an SFA",
      },
      {
        type: "p",
        text: "These three terms are used interchangeably in sales conversations, and buying the wrong one is the most expensive mistake in this category. The difference is not really about features. It is about who logs in.",
      },
      {
        type: "image",
        src: "/blog/what-is-a-distributor-management-system-dms/01-who-logs-in.svg",
        alt: "Three columns separating CRM, SFA and DMS by who logs in — CRM is your own salespeople managing leads, deals and pipelines for business not yet won; SFA is your own field reps with attendance, GPS, visits and beat routes; DMS is your distributors and dealers self-ordering on their own price lists",
        caption:
          "A CRM manages business you have not won. An SFA manages your staff. A DMS manages the channel in between.",
      },
      {
        type: "compare",
        columns: [
          {
            label: "CRM",
            tagline: "Your team, chasing business",
            points: [
              "Leads, deals, pipelines and quotations",
              "Users are your own salespeople",
              "About business that has not closed yet",
              "The customer never logs in",
            ],
          },
          {
            label: "SFA",
            tagline: "Your staff, in the field",
            points: [
              "Attendance, GPS, geo-tagged visits, beats",
              "Users are your own reps, on a phone",
              "About the execution of your team's day",
              "Orders typed by your employee at a counter",
            ],
          },
          {
            label: "DMS",
            tagline: "Your customers, ordering",
            points: [
              "Trade logins and self-service ordering",
              "Users are distributors and dealers",
              "About what your channel buys and owes",
              "Orders typed by the person who wants the stock",
            ],
          },
        ],
      },
      {
        type: "p",
        text: "Most brands that genuinely need a DMS eventually need an SFA too, because they are the two halves of the same trade: your reps walking the market, and your distributors supplying it. What they rarely need is two vendors for those halves.",
      },
      {
        type: "h2",
        text: "Do you actually need one?",
      },
      {
        type: "p",
        text: "Nobody searches for distributor management software first. They search for it after one of these has been annoying them for a year. If none of them is familiar, you probably do not need a DMS yet, and WhatsApp is genuinely fine.",
      },
      {
        type: "ul",
        items: [
          "Somebody on your payroll retypes orders that arrived as a photo or a voice note",
          "Your accounts desk answers “how much do I owe you?” by opening a report and reading it out",
          "Secondary sales arrives once a month, late, in a format nobody can total",
          "Schemes get argued about after the fact, and settled as credit notes",
          "Saturday orders ship on Tuesday — not because of stock, but because of a keying queue",
          "A rate depends on which copy of the price-list spreadsheet somebody opened",
        ],
      },
      {
        type: "h2",
        text: "What changes when the buyer types the order",
      },
      {
        type: "p",
        text: "The gain is not mainly the saved keystrokes, though those are real. It is that several checks which currently depend on a person remembering them become automatic, and that the order exists at the moment it is placed rather than a day later.",
      },
      {
        type: "image",
        src: "/blog/what-is-a-distributor-management-system-dms/02-what-changes.svg",
        alt: "A four-step flow of the same order placed by the distributor instead of relayed through the order desk: they build it on their own price list with their credit limit applied, schemes are detected as it is built, it lands as a real order already typed, and they check their own balance whenever they like",
      },
      {
        type: "h2",
        text: "The minimum that makes it a DMS",
      },
      {
        type: "p",
        text: "Vendors will show you a great deal. Three things decide whether what you are looking at is a DMS or just an order form with a login.",
      },
      {
        type: "ul",
        items: [
          "A trade customer can place their own order, unaided, and it is priced correctly for them",
          "Their credit limit is enforced rather than advisory",
          "They can see their own outstanding without telephoning anybody",
        ],
      },
      {
        type: "p",
        text: "Then there is the expensive half of this category, and this is the decision that most changes what you will pay: distributor stock, auto-replenishment, and claims. Decide before your first demo whether you are buying ordering and visibility, or stock and claims. They are different products at different prices, and a vendor who sells one will happily demo it against a need for the other.",
      },
      {
        type: "image",
        src: "/blog/what-is-a-distributor-management-system-dms/03-must-do-need-not.svg",
        alt: "Two columns separating the minimum that makes software a DMS — self-service ordering priced correctly, enforced credit limits, visible outstanding, data that lands without re-entry — from the expensive half, which is distributor godown stock, auto-replenishment, claims, stock reconciliation and van sales",
      },
      {
        type: "h2",
        text: "Three kinds of product wear this name",
      },
      {
        type: "p",
        text: "This is where buyers lose months. The same two words describe an enterprise suite sized for a national FMCG network, an accounting system with an ordering module bolted on, and a trade portal built on top of a field-sales platform. Placing yourself here is most of the buying decision.",
      },
      {
        type: "image",
        src: "/blog/what-is-a-distributor-management-system-dms/04-three-tiers.svg",
        alt: "Three columns comparing enterprise DMS suites with distributor stock and claims but quote-based contracts and long rollouts, ERP-led distribution strong on GST billing but with secondary trade-facing screens, and ordering portals on an SFA platform with self-service ordering and per-login pricing but no distributor stock or claims",
      },
      {
        type: "p",
        text: "Enterprise suites are the right answer above a certain size and genuinely heavy below it. ERP-led distribution modules are right when billing and the books must live in the same system as stock, but their distributor-facing screens were built for your back office rather than for your customer's phone. Ordering portals on an SFA platform cover ordering and visibility and usually do not hold distributor stock at all.",
      },
      {
        type: "decision",
        rows: [
          {
            when: "Distributor stock and claims decide the purchase",
            pick: "Enterprise DMS suite",
          },
          {
            when: "GST billing and the books must be in the same system",
            pick: "ERP-led distribution",
          },
          {
            when: "Your staff retype orders and answer balance calls",
            pick: "Ordering portal",
          },
          {
            when: "You also need your own reps tracked and routed",
            pick: "Portal on an SFA",
          },
        ],
      },
      {
        type: "h2",
        text: "Questions worth asking any vendor",
      },
      {
        type: "p",
        text: "A short version of the list on our category page. These are the questions that actually separate these tools, whichever one you buy.",
      },
      {
        type: "ul",
        items: [
          "Is the order priced by the server, or by the distributor's browser?",
          "Can one distributor see another's rates or customers? Ask them to prove it in the address bar",
          "Does the price list follow the individual customer, or is there one shared list?",
          "Are schemes applied automatically on a portal order, or only when your staff type it?",
          "What does the distributor have to install — and who resets a forgotten password?",
          "Does it hold distributor stock, and do you actually need it to?",
          "How is it priced: per login, per user, per order, or on a quote?",
        ],
      },
      {
        type: "quote",
        text: "Adoption is the only real risk in this category. A distributor portal nobody uses is worse than no portal — you keep the WhatsApp orders and pay for software too.",
      },
      {
        type: "p",
        text: "That is why the install question matters more than it looks. A link with a password gets used. An app that must be found, installed, updated and password-reset across a whole network loses some of that network at every step, and the orders drift back to WhatsApp within a month.",
      },
      {
        type: "link",
        href: "/distributor-management-software",
        label: "The full category guide, with all ten buyer questions",
      },
      {
        type: "link",
        href: "/products/dms",
        label: "What OZZO DMS does — and what it does not",
      },
      {
        type: "link",
        href: "/compare/ozzo-vs-botree",
        label: "OZZO vs Botree — where a specialist is the better buy",
      },
    ],
  },
  {
    slug: "distributor-orders-on-whatsapp-what-it-costs",
    title: "Your distributor WhatsApps the order. What does that cost?",
    metaTitle: "What WhatsApp ordering really costs",
    description:
      "Trade orders arriving as photos and voice notes feel free. Here is the real cost, worked through on one order desk — and what removes it.",
    date: "2026-11-20",
    author: "Team OZZO",
    tags: ["Distributor management", "DMS", "Order management", "Operations"],
    emoji: "💬",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "WhatsApp ordering feels free. There is no licence, no training and no rollout — a distributor sends a photo of a handwritten list and somebody on your side types it in. The cost is real, it is just spread thinly enough across your week that nobody adds it up. This article adds it up, with a worked example you can redo with your own numbers.",
      },
      {
        type: "h2",
        text: "Follow one order through",
      },
      {
        type: "p",
        text: "The order itself takes a distributor thirty seconds to send. What happens next takes rather longer, and five of the seven steps are done by someone you pay.",
      },
      {
        type: "image",
        src: "/blog/distributor-orders-on-whatsapp-what-it-costs/01-journey-of-an-order.svg",
        alt: "A seven-step flow following one WhatsApp order: the distributor sends a photo of a handwritten list at 9pm, someone reads it the next morning, types eleven lines matched by hand to SKUs, looks up the right rate for that customer, checks whether a scheme applies, checks the outstanding and credit limit, and only then does the order exist",
        caption:
          "The distributor thinks the order was placed last night. In your system it was placed today.",
      },
      {
        type: "p",
        text: "Notice where the mistakes live. Not in the sending — in the reading and the retyping. A short product name matched to the wrong SKU. A rate taken from whichever copy of the price list was open. A scheme nobody remembered until the distributor asked about it three weeks later.",
      },
      {
        type: "h2",
        text: "The arithmetic",
      },
      {
        type: "p",
        text: "Take a business with 60 trade customers who order roughly twice a month. That is about 120 orders being typed by hand every month. Time one honestly, start to finish — reading the message, keying the lines, looking up the rate, checking the scheme, checking the balance — and twelve minutes is a fair figure. Many desks are slower.",
      },
      {
        type: "image",
        src: "/blog/distributor-orders-on-whatsapp-what-it-costs/02-the-cost.svg",
        alt: "A worked example of the monthly cost on one order desk: 120 orders typed by hand from 60 customers ordering twice a month, about 12 minutes per order, totalling 24 hours or three working days of keying, a typical one-day order delay, 2 to 5 percent of orders needing a correction, and none of it adding value",
        caption:
          "A worked example rather than a survey. Put your own customer count and timing into the same shape.",
      },
      {
        type: "p",
        text: "Twenty-four hours a month. Three working days, every month, spent re-entering decisions somebody else had already made. And that is only the part you can see on a clock.",
      },
      {
        type: "h2",
        text: "The costs that never reach an invoice",
      },
      {
        type: "p",
        text: "The keying time is the figure people count, because it is the only one that looks like a number. These are the ones that actually damage the business.",
      },
      {
        type: "image",
        src: "/blog/distributor-orders-on-whatsapp-what-it-costs/03-hidden-costs.svg",
        alt: "Two columns comparing what WhatsApp ordering really costs — orders stuck in one person's chat while they are on leave, missed schemes becoming credit notes, accounts reading balances over the phone, late secondary sales, no record of why an order waited — against what a portal removes on day one",
      },
      {
        type: "p",
        text: "The one that catches businesses out is the first. An order living in one person's chat history is an order that stops moving when that person is on leave, off sick, or has left. Nobody else can find it, because it was never anywhere except a conversation.",
      },
      {
        type: "p",
        text: "The second is subtler and more expensive. Because the order is placed in your system a day after the distributor placed it with you, your lead time secretly contains a queue. Your distributor measures you from when they sent the message. You measure yourself from when it was keyed. Both of you are right, and only one of you is annoyed.",
      },
      {
        type: "h2",
        text: "Where the week actually goes",
      },
      {
        type: "image",
        src: "/blog/distributor-orders-on-whatsapp-what-it-costs/04-where-the-week-goes.svg",
        alt: "A bar chart of one order desk's 40-hour week showing 12 hours reading and keying orders, 7 hours on rate and scheme lookups, 5 hours answering balance questions, 9 hours chasing collections and 7 hours actually serving customers",
        caption:
          "The first three bars are work a portal removes. The last two are what you actually want that desk doing.",
      },
      {
        type: "p",
        text: "Twenty-four of those forty hours go on work that exists only because the order arrived as a message. Chasing collections and serving customers — the two things you would choose to pay for — get what is left.",
      },
      {
        type: "h2",
        text: "What actually removes it",
      },
      {
        type: "p",
        text: "Only one thing: the person who wants the stock types the order. Everything else is a workaround. A shared mailbox, a Google Form, a dedicated WhatsApp number, a junior hired to do the keying — each of those moves the work without removing it.",
      },
      {
        type: "p",
        text: "When the buyer places the order directly, the checks that currently depend on somebody remembering them stop depending on anybody. Pricing follows the customer automatically. The credit limit is applied before the order is saved rather than discovered afterwards by accounts. Schemes are detected as the order is built, so there is nothing to argue about later. And the order exists at the moment it is placed.",
      },
      {
        type: "quote",
        text: "The fix is not a faster order desk. It is not having one in the middle of the order at all.",
      },
      {
        type: "h2",
        text: "What it does not fix",
      },
      {
        type: "p",
        text: "Being straight about this, because a portal is sometimes sold as though it solves the whole channel. It does not give you your distributor's godown stock, it does not reorder for them, and it does not handle damage, scheme, freight or rate-difference claims. Those need a stock-tracking distribution suite, and they are a bigger project that assumes your trade will keep data up to date. Start where the pain is.",
      },
      {
        type: "decision",
        rows: [
          {
            when: "Your staff retype trade orders every day",
            pick: "A portal fixes this",
          },
          {
            when: "You want your distributor's godown stock",
            pick: "A specialist suite",
          },
          {
            when: "Distributors never adopt new apps",
            pick: "Use a browser portal",
          },
          {
            when: "Only a few customers order, rarely",
            pick: "WhatsApp is fine",
          },
        ],
      },
      {
        type: "link",
        href: "/products/dms",
        label: "See how OZZO DMS removes the retyping",
      },
      {
        type: "link",
        href: "/distributor-management-software",
        label: "What a DMS is, and the ten questions to ask a vendor",
      },
      {
        type: "p",
        text: "Time one order on your own desk this week, honestly, from the message landing to the order existing. Multiply by how many you take a month. That figure is what the habit costs you, and it is usually the first time anybody in the business has seen it.",
      },
    ],
  },
  {
    slug: "ozzo-sales-iphone-app-live-ios",
    title: "OZZO SALES is now on iPhone — and why that changes your shortlist",
    metaTitle: "OZZO SALES is now on iPhone",
    description:
      "The OZZO field app is live on the Apple App Store as well as Google Play. What it means for mixed Android and iPhone field teams, and what it costs.",
    date: "2026-11-14",
    author: "Team OZZO",
    tags: ["Mobile app", "iOS", "Field sales", "Sales force automation"],
    emoji: "📱",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "OZZO SALES, the field app your reps use, is now live on the Apple App Store as well as on Google Play. It went public on the App Store on 10 November 2026. It is free to download, it needs iOS 16.4 or later, it runs on iPhone and iPad, and it is the same app as the Android one — same features, same login, same data. If you had put OZZO aside because part of your team carries an iPhone, that reason is gone.",
      },
      {
        type: "image",
        src: "/blog/ozzo-sales-iphone-app-live-ios/01-both-stores.svg",
        alt: "A side-by-side comparison of the two OZZO SALES store listings: Google Play for Android, live since 27 October 2026, and the Apple App Store for iPhone and iPad, live since 10 November 2026, both free and both carrying attendance, visits, offline orders and collections",
        caption:
          "Both listings are the same product, built from one codebase and signing in to the same account.",
      },
      {
        type: "h2",
        text: "Why platform decides so many software shortlists",
      },
      {
        type: "p",
        text: "In Indian field sales, Android is the overwhelming majority of handsets, and most field-sales apps are built for it alone. That works until you look at who else needs the app. The area sales manager who reviews the beat. The owner's son who runs two territories. The senior rep who has carried an iPhone for six years. Field software that only runs on Android quietly excludes exactly the people whose numbers matter most.",
      },
      {
        type: "p",
        text: "So teams work around it, and every workaround costs something. A second handset bought for one rep. A manager left off the system because nobody wants to tell them to change phones. Visits typed into the web dashboard the next morning, which defeats the point of a geo-tagged visit entirely — a visit logged from the office proves nothing about where anyone was.",
      },
      {
        type: "image",
        src: "/blog/ozzo-sales-iphone-app-live-ios/02-mixed-team-cost.svg",
        alt: "Two columns comparing the old workarounds for a mixed-phone field team — buying a second Android handset, leaving senior staff off the system, managers logging visits afterwards — against what applies now, where every rep installs on the phone they already carry",
      },
      {
        type: "h2",
        text: "What is actually in the iPhone app",
      },
      {
        type: "p",
        text: "Everything that is in the Android app. It is worth being specific, because \"now on iOS\" sometimes means a cut-down viewer:",
      },
      {
        type: "ul",
        items: [
          "Punch in and out with a selfie and GPS, with an optional odometer reading",
          "Today's beat route, worked outlet by outlet",
          "Geo-tagged check-in and check-out at customers and leads, with visit photo and feedback",
          "Order capture with your catalogue, schemes and price lists — fully offline",
          "Payment collection against outstanding, with photo proof",
          "Expenses with proof, leave requests and attendance history",
          "Leads, deals and quotations for teams on the CRM line",
        ],
      },
      {
        type: "p",
        text: "All of it captures with no signal and syncs itself when a bar returns — the same offline engine, because it is the same code. One codebase means a feature does not land on one platform months before the other.",
      },
      {
        type: "h2",
        text: "What it costs: nothing extra",
      },
      {
        type: "p",
        text: "OZZO is priced per user per month, not per platform. A rep on an iPhone costs exactly what a rep on Android costs. Both downloads are free; the subscription sits on your account, and the rates are published in full rather than quoted on a call.",
      },
      {
        type: "link",
        href: "/plans",
        label: "Compare every plan, module by module",
      },
      {
        type: "h2",
        text: "Moving one rep across, start to finish",
      },
      {
        type: "p",
        text: "There is no migration and nothing for an administrator to switch on. The user record you already created works on both platforms, because the data lives on the account rather than on the handset.",
      },
      {
        type: "image",
        src: "/blog/ozzo-sales-iphone-app-live-ios/03-rollout.svg",
        alt: "A four-step flow for putting an iPhone rep on the app: the administrator does nothing, the rep installs OZZO SALES from the App Store, signs in with the same credentials as the web dashboard, and allows location and camera permissions",
      },
      {
        type: "ul",
        items: [
          "The rep opens the App Store, searches OZZO SALES, and installs it — about 54 MB.",
          "They sign in with the same email and password they would use on the web dashboard.",
          "Their customers, routes and past visits are already there.",
          "iOS asks for location and camera permission once each. Location drives punch-in and geo-tagged visits; the camera takes the attendance selfie and payment proof.",
        ],
      },
      {
        type: "quote",
        text: "Pick field software for what it does, not for which handsets your team happens to own. Platform should never be the thing that decides it.",
      },
      {
        type: "h2",
        text: "One honest limit",
      },
      {
        type: "p",
        text: "Every rep needs a smartphone. The app cannot run on a feature phone, and an iPhone needs iOS 16.4 or later — which covers every iPhone 8 and newer. A very old Android handset will also struggle with continuous GPS and camera capture, whatever the software. Managers are fine on any modern browser; the web dashboard needs no app at all.",
      },
      {
        type: "image",
        src: "/blog/ozzo-sales-iphone-app-live-ios/04-questions-before-switching.svg",
        alt: "Two answer panels: does it cost extra — no, pricing is per user and not per platform; and is the iPhone version cut down — no, one codebase ships attendance, visits, routes, orders, collections and full offline capture on both platforms",
      },
      {
        type: "h2",
        text: "If platform was your reason to wait",
      },
      {
        type: "p",
        text: "Then there is nothing left to wait for. The honest summary is this: OZZO runs the whole field operation — attendance, GPS, visits, beat routes, offline orders, collections and self-calculating outstanding — from a web dashboard for managers and one app that is now live on both stores.",
      },
      {
        type: "link",
        href: "/products/sfa",
        label: "See everything in OZZO Sales Force Automation",
      },
      {
        type: "link",
        href: "/salesman-location-tracking-software",
        label: "How salesman location tracking works in OZZO",
      },
      {
        type: "h2",
        text: "Your distributors need no app at all",
      },
      {
        type: "p",
        text: "Worth separating, because “does it work on my phone” gets asked about two different groups of people. OZZO SALES is for your own staff — the reps and managers who punch in, visit outlets and take orders — and that is the app now on both stores. Your distributors and dealers are not on it, and do not need to be: OZZO DMS, the portal where they place their own orders and see their outstanding, runs in an ordinary web browser. There is nothing for them to install on any platform, which is deliberate — trade adoption dies at the install step.",
      },
      {
        type: "link",
        href: "/products/dms",
        label: "OZZO DMS — the distributor portal, in a browser",
      },
      {
        type: "p",
        text: "If you want to see it on your own phone with your own products and routes in it, book a demo and we will walk through it with you — on whichever handset you are holding.",
      },
    ],
  },
  {
    slug: "crm-or-sfa-which-does-your-field-team-need",
    title: "CRM or SFA: which does your field team actually need?",
    description:
      "CRM and SFA solve two different problems. The plain-English difference, who each one is for, and how to choose without paying for more than you need.",
    date: "2026-09-19",
    author: "Team OZZO",
    tags: ["CRM", "Sales force automation", "Field sales"],
    emoji: "🧭",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "When a growing sales business first looks for software, the same question comes up: do we need a CRM, or one of those field-tracking apps? The honest answer is that they solve two different problems, and the right choice depends on where your team spends its day — at a desk working enquiries, or out on the road in front of customers. OZZO's two team-facing products exist for exactly this reason: CRM and SFA. (There is a third, DMS, but its users are your distributors rather than your own team — more on that at the end.) This is the plain-English guide to telling them apart.",
      },
      {
        type: "compare",
        columns: [
          {
            label: "CRM",
            tagline: "Your front office",
            points: [
              "Capture and work every enquiry in a visual pipeline",
              "One shared WhatsApp inbox with an AI assistant for routine questions",
              "Branded quotations and one shared customer record",
            ],
          },
          {
            label: "SFA",
            tagline: "Your field office",
            points: [
              "Selfie-and-GPS attendance, live location and geo-tagged visits",
              "Offline order capture, dispatch and field payment collection",
              "Outstanding and stock that keep themselves up to date",
            ],
          },
        ],
      },
      {
        type: "h2",
        text: "CRM is for winning and keeping customers",
      },
      {
        type: "p",
        text: "A CRM is your front office. Its job is to make sure no enquiry is forgotten, every deal is moving, and every customer conversation lives somewhere the whole team can see — not on one person's phone.",
      },
      {
        type: "ul",
        items: [
          "Capture every lead and work it through a visual pipeline, so nothing goes cold unnoticed",
          "Reply to customers on WhatsApp from one shared team inbox, with templates and an AI assistant that answers routine questions from your own knowledge base",
          "Send branded quotations as clean PDFs",
          "Keep one shared customer record — enquiries, chats, tasks and quotes on a single timeline",
        ],
      },
      {
        type: "image",
        src: "/blog/crm-or-sfa-which-does-your-field-team-need/01-where-each-product-works.svg",
        alt:
          "Six-step journey from enquiry to payment, showing CRM covering enquiry, deal and quotation, and SFA covering the visit, the order and the collection.",
        caption: "CRM owns the first half of the journey. SFA owns the second.",
      },
      {
        type: "p",
        text: "If your team mostly chases enquiries, quotes and follow-ups — and the pain is leads slipping through the cracks or customer history walking out when a rep leaves — CRM is where you start.",
      },
      {
        type: "image",
        src: "/blog/crm-or-sfa-which-does-your-field-team-need/02-start-here-by-symptom.svg",
        alt:
          "Five common symptoms of a sales business, each matched to whether to start with CRM, the SFA Field line, or full SFA.",
        caption: "Start from the symptom that sounds most like this month.",
      },
      {
        type: "h2",
        text: "SFA is for running a team that sells on the road",
      },
      {
        type: "p",
        text: "SFA — Sales Force Automation — is your field office. Its job is to give you an honest picture of what your reps are doing, then turn each visit into an order, a collection and up-to-date books, without anyone re-keying anything at night.",
      },
      {
        type: "ul",
        items: [
          "Selfie-and-GPS attendance and live location, so \"reached the customer\" means the phone was actually there",
          "Geo-tagged visits, beat routes and territories that make coverage measurable instead of a hope",
          "Offline order capture — the app (on Android and on iPhone) works with no signal and syncs when it's back",
          "Field payment collection with outstanding that recalculates itself, and closing stock derived from actual movement",
        ],
      },
      {
        type: "p",
        text: "One thing that trips people up: the light \"field tracking\" tier — attendance, location and visits — is not a separate product. In OZZO it's simply the entry level of SFA (the Field line). You grow from starter tracking up to full sales-and-distribution on the same system, rather than switching apps later.",
      },
      {
        type: "image",
        src: "/blog/crm-or-sfa-which-does-your-field-team-need/03-sfa-is-one-ladder.svg",
        alt:
          "Three rungs showing field tracking growing into full sales and distribution: attendance and visits, then beat routes and orders, then collection, outstanding and stock.",
        caption: "Field tracking is the first rung of SFA, not a different product.",
      },
      {
        type: "h2",
        text: "A quick way to decide",
      },
      {
        type: "decision",
        rows: [
          {
            when: "Team mostly at a desk, working enquiries and quotes",
            pick: "CRM",
          },
          {
            when: "Team mostly on the road, and you can't verify what happened in the field",
            pick: "SFA (Field line)",
          },
          {
            when: "Reps take actual orders and collect payments at the counter",
            pick: "Full SFA",
          },
          {
            when: "You need both the front office and the field team on one login",
            pick: "CRM + SFA",
          },
        ],
      },
      {
        type: "h2",
        text: "You don't have to choose forever",
      },
      {
        type: "p",
        text: "These two aren't a fork in the road. They sit on one customer record, so a WhatsApp conversation your office had and a visit your rep made in the field land on the same customer. Many businesses begin with the one problem that's costing them most and add the other line when they're ready — no migration, no second database.",
      },
      {
        type: "image",
        src: "/blog/crm-or-sfa-which-does-your-field-team-need/05-one-customer-record.svg",
        alt:
          "Three panels showing office activity from CRM and field activity from SFA landing on one shared customer record with a single timeline.",
        caption: "One customer record underneath both products — so there is nothing to migrate later.",
      },
      {
        type: "quote",
        text: "Pick by where the pain is today, not by the longest feature list. You can always grow into the rest on the same data.",
      },
      {
        type: "image",
        src: "/blog/crm-or-sfa-which-does-your-field-team-need/04-what-every-plan-includes.svg",
        alt:
          "Eight features included in every OZZO plan whichever line you choose: customers, products, tasks, attendance, leave, holiday, announcements and custom fields.",
        caption: "These eight come with every plan, so the choice is about the specialist half only.",
      },
      {
        type: "p",
        text: "If you're not sure which side your pain sits on, that's a normal place to be — it's the quickest thing to work out on a short demo call, using your own team as the example.",
      },
      {
        type: "h2",
        text: "There is now a third option: DMS",
      },
      {
        type: "p",
        text: "This article was written as a two-way choice, and for most teams it still is. But there is a third product worth knowing about, because a good number of people who arrive here asking “CRM or SFA?” actually have a channel problem rather than a team problem. A Distributor Management System (DMS) gives your distributors and dealers their own login so they place their own orders, instead of sending them to your staff to retype.",
      },
      {
        type: "p",
        text: "The quick test is who you wish would behave differently. If it is your own salespeople, you want SFA. If it is the enquiries you keep losing track of, you want CRM. If it is your distributors — the WhatsApp orders, the balance phone calls, the schemes argued about afterwards — that is DMS, and it is an add-on to either of the other two rather than a replacement for them.",
      },
      {
        type: "link",
        href: "/products/dms",
        label: "What OZZO DMS does",
      },
      {
        type: "link",
        href: "/distributor-management-software",
        label: "CRM, SFA and DMS compared properly",
      },
    ],
  },
  {
    slug: "signs-field-sales-team-outgrown-spreadsheets-whatsapp",
    title: "5 signs your field sales team has outgrown spreadsheets and WhatsApp",
    metaTitle: "5 signs you have outgrown spreadsheets",
    description:
      "Spreadsheets and WhatsApp groups get a small field team going, then quietly start costing you orders, coverage and cash. Five signs it is time to move on.",
    date: "2026-09-14",
    author: "Team OZZO",
    tags: ["Field sales", "Sales force automation", "Distribution"],
    emoji: "📈",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Almost every field-sales business starts the same way: a spreadsheet for customers and orders, a couple of WhatsApp groups for the team, and a lot of trust. It works — until it doesn't. The tools don't fail loudly; they leak quietly, and by the time you feel it, a month of orders and coverage has already slipped through the cracks.",
      },
      {
        type: "p",
        text: "Here are five signs your field team has outgrown the spreadsheet-and-WhatsApp stack — and what a purpose-built system does about each.",
      },
      {
        type: "image",
        src: "/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp/01-five-signs.svg",
        alt:
          "Six cards summarising the five signs a field sales team has outgrown spreadsheets and WhatsApp, plus what the combination actually costs the business.",
        caption: "None of these fail loudly. They leak quietly, and you feel it a month later.",
      },
      {
        type: "h2",
        text: "1. The day gets reported at night, from memory",
      },
      {
        type: "p",
        text: "If you find out what happened in the field from a WhatsApp round-up after 8pm — a list of shops \"visited\" that nobody can verify — you're managing a story, not a day. A message that says \"reached the customer\" is not the same as the rep actually being at the counter.",
      },
      {
        type: "p",
        text: "A real system makes the day report itself as it happens: selfie-and-GPS attendance, geo-tagged visits, and a live feed you watch instead of reconstruct. \"Reached\" means the phone was actually there.",
      },
      {
        type: "image",
        src: "/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp/02-night-report-vs-live-day.svg",
        alt:
          "Two columns comparing an 8pm WhatsApp round-up written from memory with a field day that records itself through GPS attendance and geo-tagged visits.",
        caption: "Sign one, side by side: a story you assemble, or a day that reports itself.",
      },
      {
        type: "h2",
        text: "2. The same outlets keep getting skipped",
      },
      {
        type: "p",
        text: "A beat plan in a spreadsheet is a suggestion. On a busy day the shop that's hard to park near, or the one that always argues, quietly drops off the route — and you never see the pattern until sales in that pocket dip.",
      },
      {
        type: "p",
        text: "Route planning that the rep works in order — where a skip needs a reason, not silence — turns coverage from a hope into something you can measure. The outlet that kept getting missed stops getting missed.",
      },
      {
        type: "image",
        src: "/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp/03-coverage-leak.svg",
        alt:
          "Bar chart of five beats showing 22, 21, 19, 13 and 20 outlets visited out of 24 planned, with the Thursday beat falling well behind the rest.",
        caption: "Worked example. In a spreadsheet, the Thursday beat shows as done like every other.",
      },
      {
        type: "h2",
        text: "3. Outstanding and stock live in someone's head",
      },
      {
        type: "p",
        text: "When a rep books an order, does the customer's balance update? When goods move, does your stock? In a spreadsheet world the answer is \"at month-end, if the accountant re-keys everything.\" Until then, orders go out to shops that already owe you, and you're selling stock you don't have.",
      },
      {
        type: "ul",
        items: [
          "Outstanding that recalculates itself against every order and collection",
          "Credit limits that sit on the counter and block an over-limit order before it's booked",
          "Closing stock derived from actual movement — no separate inventory tool, no stock-take from memory",
        ],
      },
      {
        type: "image",
        src: "/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp/04-outstanding-and-stock.svg",
        alt:
          "Four steps showing what should happen when a field rep books an order: the balance updates, the credit limit is checked, and closing stock follows actual movement.",
        caption: "In a spreadsheet, none of this happens until somebody re-keys it at month-end.",
      },
      {
        type: "h2",
        text: "4. Customer knowledge walks out with the rep",
      },
      {
        type: "p",
        text: "If your customer history lives in a rep's personal WhatsApp and their private notebook, then the database belongs to the rep, not the business. When they leave, the relationships and the context leave too.",
      },
      {
        type: "p",
        text: "One shared customer record — messages, visits, orders and quotations on a single timeline — means the whole team sees the same story, and the business keeps its own data when people move on.",
      },
      {
        type: "h2",
        text: "5. You can't answer \"what happened this week?\" with numbers",
      },
      {
        type: "p",
        text: "If a simple question — how many productive visits, how much collected, which reps are behind — takes an afternoon of copy-pasting between sheets, you're flying on hunches. Growth makes that worse, not better.",
      },
      {
        type: "quote",
        text: "The goal isn't more software. It's being able to manage by facts instead of the loudest update on the group.",
      },
      {
        type: "p",
        text: "Reports that build themselves as the day happens — visits, orders, collections and a per-rep daily summary — turn management from detective work into a glance.",
      },
      {
        type: "image",
        src: "/blog/signs-field-sales-team-outgrown-spreadsheets-whatsapp/05-week-at-a-glance.svg",
        alt:
          "Six figures answering what happened this week in field sales: 95 visits, 23 productive, Rs 2.4 lakh collected, 79% coverage and two reps behind plan.",
        caption: "The questions that should take seconds, not an afternoon of copy-pasting.",
      },
      {
        type: "h2",
        text: "None of this needs a big-bang rollout",
      },
      {
        type: "p",
        text: "You don't have to replace everything at once. Start with the pain that's costing you most — field visibility, or order-and-collection control — and grow into the rest on the same data. Whatever phones your team carries, the app is live on both Google Play and the Apple App Store, so nobody is left out of the rollout. If two or three of these signs sounded familiar, it's worth a conversation.",
      },
      {
        type: "h2",
        text: "One more sign, if your orders come from distributors",
      },
      {
        type: "p",
        text: "Every sign above is about your own team. There is a sixth that belongs to your channel, and it is the one businesses selling through distributors feel most: somebody on your payroll retypes orders that arrived as a photograph, a voice note or eleven lines in a chat. That is not a spreadsheet problem and it is not a field-visibility problem — it is fixed by letting the buyer type their own order, which is what a Distributor Management System does.",
      },
      {
        type: "link",
        href: "/blog/distributor-orders-on-whatsapp-what-it-costs",
        label: "What WhatsApp ordering actually costs, worked through",
      },
      {
        type: "link",
        href: "/products/dms",
        label: "OZZO DMS — let your distributors order themselves",
      },
    ],
  },
];

/**
 * Posts written by the weekly job (see scripts/write-weekly-post.mjs).
 *
 * They live in their own JSON file rather than in the array above for one
 * reason: a script that edits a hand-maintained TypeScript file by pattern
 * matching will eventually corrupt it. The script only ever rewrites this
 * JSON, whole, and never touches blog.ts.
 *
 * The cast is checked, not assumed — assertBlogPost below validates every
 * record at module load, so a malformed entry fails the build loudly instead
 * of rendering a broken page.
 */
import generated from "../content/generated-posts.json";

function assertBlogPost(value: unknown, index: number): BlogPost {
  const p = value as Partial<BlogPost>;
  const missing = (["slug", "title", "description", "date", "author", "emoji"] as const).filter(
    (k) => typeof p[k] !== "string" || !p[k],
  );
  if (missing.length) {
    throw new Error(
      `generated-posts.json[${index}] is missing: ${missing.join(", ")}. ` +
        `Fix or remove the entry — a half-written post must not reach the site.`,
    );
  }
  if (!Array.isArray(p.body) || p.body.length === 0) {
    throw new Error(`generated-posts.json[${index}] (${p.slug}) has no body blocks.`);
  }
  return p as BlogPost;
}

export const generatedPosts: BlogPost[] = (generated as unknown[]).map(assertBlogPost);

/** Hand-written and generated posts together, with slug collisions rejected. */
function allPosts(): BlogPost[] {
  const merged = [...posts, ...generatedPosts];
  const seen = new Set<string>();
  for (const p of merged) {
    if (seen.has(p.slug)) {
      throw new Error(
        `Duplicate blog slug "${p.slug}". Two posts cannot share a URL — ` +
          `rename one, or drop it from content/generated-posts.json.`,
      );
    }
    seen.add(p.slug);
  }
  return merged;
}

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  /**
   * Newest first, with an EXPLICIT tie-break.
   *
   * This used to be `a.date < b.date ? 1 : -1`, which never returns 0 — so for
   * two posts sharing a date it claimed both "a after b" and "b after a". That
   * is an inconsistent comparator, its result is undefined behaviour, and in
   * practice V8 reversed same-day posts. Three DMS posts published on
   * 2026-11-20 came out with the launch announcement last.
   *
   * Returning 0 on equal dates makes it consistent, and Array#sort has been
   * stable since ES2019, so same-day posts now appear in the order they are
   * written in the `posts` array above. To choose which of two same-day posts
   * leads the blog, order them there.
   */
  return allPosts().sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return allPosts().find((p) => p.slug === slug);
}

/** Human date, e.g. "14 Sep 2026". */
export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
