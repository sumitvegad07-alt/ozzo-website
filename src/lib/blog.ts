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
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
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
    slug: "signs-field-sales-team-outgrown-spreadsheets-whatsapp",
    title: "5 signs your field sales team has outgrown spreadsheets and WhatsApp",
    description:
      "Spreadsheets and WhatsApp groups get a small field team off the ground — then quietly start costing you orders, coverage and cash. Here are five signs it's time for a real system.",
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
        type: "h2",
        text: "None of this needs a big-bang rollout",
      },
      {
        type: "p",
        text: "You don't have to replace everything at once. Start with the pain that's costing you most — field visibility, or order-and-collection control — and grow into the rest on the same data. If two or three of these signs sounded familiar, it's worth a conversation.",
      },
    ],
  },
];

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
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
