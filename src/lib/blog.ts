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
        type: "p",
        text: "If you want to see it on your own phone with your own products and routes in it, book a demo and we will walk through it with you — on whichever handset you are holding.",
      },
    ],
  },
  {
    slug: "crm-or-sfa-which-does-your-field-team-need",
    title: "CRM or SFA: which does your field team actually need?",
    description:
      "OZZO comes in two products — CRM and SFA. The plain-English difference, who each one is for, and how to choose without paying for more than you need.",
    date: "2026-09-19",
    author: "Team OZZO",
    tags: ["CRM", "Sales force automation", "Field sales"],
    emoji: "🧭",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "When a growing sales business first looks for software, the same question comes up: do we need a CRM, or one of those field-tracking apps? The honest answer is that they solve two different problems, and the right choice depends on where your team spends its day — at a desk working enquiries, or out on the road in front of customers. OZZO is built as two products for exactly this reason: CRM and SFA. This is the plain-English guide to telling them apart.",
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
        text: "The two products aren't a fork in the road. They sit on one customer record, so a WhatsApp conversation your office had and a visit your rep made in the field land on the same customer. Many businesses begin with the one problem that's costing them most and add the other line when they're ready — no migration, no second database.",
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
  return allPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
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
