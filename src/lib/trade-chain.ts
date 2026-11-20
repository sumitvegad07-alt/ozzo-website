/**
 * THE TRADE CHAIN — the one story that ties CRM, SFA and DMS together.
 *
 * ───────────────────────────── WHY IT EXISTS ─────────────────────────────
 *
 * Until DMS launched, the site told a one-actor story: "a day in the field",
 * following a single rep. That story is still true and still on the home page,
 * but it cannot hold DMS, because DMS's user is not an employee — it is the
 * customer. A third product card bolted onto a one-rep narrative reads as
 * three things sold by the same company rather than one system.
 *
 * So this is the three-actor story. Your rep in the market (SFA), your
 * distributor at their own desk (DMS), and you watching both (CRM + reports).
 * The point it has to land is that these are not three systems that integrate.
 * They are three doors into one database, which is why the handovers below
 * involve no file, no export and nobody retyping anything.
 *
 * ──────────────────── IT IS SHARED, AND THAT IS THE POINT ────────────────────
 *
 * Rendered on BOTH the home page and /fmcg-software by
 * `src/components/trade-chain.tsx`. One definition, because the alternative is
 * the failure this repo keeps hitting: the same claim hand-written in two
 * places, then drifting. See the `heroStats`/`productStats` dead-duplicate note
 * in docs and the "Android only in fourteen places" history.
 *
 * The two pages differ ONLY in their framing copy (`chainIntro` below), never
 * in the stages. The home page must stay industry-neutral — the founder's
 * instruction was to shape the story around how FMCG works WITHOUT telling a
 * non-FMCG reader this is not for them. /fmcg-software names the industry
 * outright, because that is the page's whole job.
 *
 * ───────────────────────────── HONESTY ─────────────────────────────
 *
 * Every stage is a shipped screen, verified against the apps on 2026-11-20.
 * `chainNotCovered` is on the page with the stages, not in a footnote: the
 * chain stops at the distributor's dispatch, and it does NOT continue into
 * their godown stock, their claims or a delivery boy's route. A story that
 * implies an unbroken line from factory to shelf would be a lie of omission,
 * and it is the exact gap the enterprise DMS suites sell against.
 */

export type ChainStage = {
  /** 01-06, shown as the step number. */
  step: string;
  /** Who is acting. Drives the actor pill on each card. */
  actor: "rep" | "distributor" | "you";
  /** Which product line does this. Shown as a small badge. */
  line: "SFA" | "DMS" | "CRM";
  title: string;
  body: string;
  /** lucide icon name, registered in src/components/icon.tsx. */
  icon: string;
  /** What reaches the office the moment this happens. */
  youSee: string;
};

export const chainActors: Record<
  ChainStage["actor"],
  { label: string; where: string; toneClass: string; dotClass: string }
> = {
  rep: {
    label: "Your rep",
    where: "In the market, on a phone",
    toneClass: "text-emerald-400",
    dotClass: "bg-emerald-400",
  },
  distributor: {
    label: "Your distributor",
    where: "At their own desk, in a browser",
    toneClass: "text-sky-400",
    dotClass: "bg-sky-400",
  },
  you: {
    label: "You",
    where: "In the office, on the dashboard",
    toneClass: "text-violet-400",
    dotClass: "bg-violet-400",
  },
};

/**
 * The six stages, in the order they happen on a real day.
 *
 * Deliberately NOT grouped by product. Grouping by product gives you a
 * brochure; grouping by time gives you a story, and it is the only way the
 * handover at stage 03 — where the actor changes from your employee to your
 * customer — reads as natural rather than as a different product being sold.
 */
export const tradeChainStages: ChainStage[] = [
  {
    step: "01",
    actor: "rep",
    line: "SFA",
    title: "The day goes on the clock",
    body: "Your rep punches in with a selfie and GPS — and the odometer, if you require it. From that minute their location is recorded on an interval in the background, so the day is something you can watch rather than ask about.",
    icon: "Fingerprint",
    youSee: "Who is on duty, and where they are right now",
  },
  {
    step: "02",
    actor: "rep",
    line: "SFA",
    title: "The beat gets walked, and proved",
    body: "One tap opens today's route. Every check-in is GPS-stamped against the outlet, so coverage is measured rather than claimed — and the shop that keeps getting skipped stops getting skipped.",
    icon: "Route",
    youSee: "Outlets covered against outlets planned, per rep",
  },
  {
    step: "03",
    actor: "rep",
    line: "SFA",
    title: "The order is taken at the counter",
    body: "Built from your catalogue with the right price list and schemes applied, fully offline if there is no signal. It queues on the phone and syncs itself the moment a bar of signal returns.",
    icon: "ShoppingCart",
    youSee: "The order, priced and in the system, with no re-entry",
  },
  {
    step: "04",
    actor: "distributor",
    line: "DMS",
    title: "Your distributor orders without you",
    body: "Here the actor changes. Your distributor opens a browser, sees their own price list and credit limit, and places their own order — with schemes detected as they build it. Nobody on your payroll reads a photograph of a handwritten list.",
    icon: "Store",
    youSee: "A real order the moment they place it, already typed",
  },
  {
    step: "05",
    actor: "distributor",
    line: "DMS",
    title: "They dispatch what they have sold",
    body: "A distributor raises sales orders for their own shops, works their own Pending Dispatch queue, and records what those shops pay them. Their onward selling becomes data as it happens instead of a number you chase at month-end.",
    icon: "Truck",
    youSee: "Secondary movement and collections, as they happen",
  },
  {
    step: "06",
    actor: "you",
    line: "CRM",
    title: "All of it lands on one record",
    body: "The visit your rep made, the order your distributor placed, the payment that came back, the WhatsApp conversation your office had and the enquiry that started it — all on the same customer, in one system, with no integration keeping them in step.",
    icon: "Layers",
    youSee: "One customer, one timeline, one source of truth",
  },
];

/**
 * Page-specific framing. The stages above never change between pages; only
 * this does. See the note at the top of this file on why the home page is
 * industry-neutral and /fmcg-software is not.
 */
export const chainIntro = {
  home: {
    eyebrow: "How the whole thing fits",
    title: "Three people. One system.",
    titleAccent: "Nothing retyped.",
    body: "Most businesses buy field tracking from one vendor, an ordering portal from another, and a CRM from a third — then pay someone to keep the three in step. OZZO is one database with three doors into it: your reps, your distributors, and you. Here is a day moving through all three.",
  },
  fmcg: {
    eyebrow: "The FMCG chain, end to end",
    title: "From your rep's first visit",
    titleAccent: "to the distributor's dispatch.",
    body: "FMCG is the hardest version of this problem: a field team walking beats, a distributor tier ordering and selling onward, and secondary sales that nobody can see until month-end. OZZO covers that chain in one system — and stops, honestly, at the distributor's godown door.",
  },
};

/**
 * Where the chain genuinely ends.
 *
 * ON THE PAGE, beside the stages — not in a footnote and not left for week
 * three. Every enterprise DMS suite ships these, and a buyer for whom they are
 * the point should find that out here. Conceding it is also what makes the six
 * stages above believable.
 */
export const chainNotCovered: { title: string; body: string }[] = [
  {
    title: "The distributor's godown stock",
    body: "OZZO derives your own closing stock from your order and dispatch ledger. It does not hold what is sitting in your distributor's warehouse, and it does not suggest their next order from a reorder level.",
  },
  {
    title: "Claims",
    body: "Damage, scheme, freight and rate-difference claims are not in OZZO. Your distributors raise those with you the way they do now.",
  },
  {
    title: "The last mile",
    body: "A distributor records a dispatch, and the chain ends there. There is no delivery-person app, no delivery route and no proof-of-delivery capture.",
  },
];
