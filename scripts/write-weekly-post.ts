/**
 * Writes one blog post, from the next unpublished topic in the approved queue.
 *
 * Run every Sunday by .github/workflows/weekly-blog.yml. It appends to
 * src/content/generated-posts.json; the workflow commits and pushes, and
 * Vercel deploys from main.
 *
 * Design notes, because the obvious shortcuts here are all wrong:
 *
 * - It cannot choose a subject. Topics come from src/lib/blog-topics.ts, which
 *   a person wrote. When the queue is exhausted it stops and says so rather
 *   than inventing filler. Google's spam policy on "scaled content abuse" is
 *   aimed squarely at bulk generated pages published with no human judgement,
 *   and a site with no domain authority yet cannot afford to look like that.
 * - It never edits blog.ts. Scripts that pattern-match their way into a
 *   hand-maintained source file eventually corrupt it. This one rewrites a
 *   JSON array, whole.
 * - It validates before writing. A post that is too short, is missing blocks,
 *   reuses a slug or links somewhere that does not exist fails the run. A
 *   failed run publishes nothing, which is the right failure.
 *
 * Usage:
 *   npx tsx scripts/write-weekly-post.ts          # write the next post
 *   npx tsx scripts/write-weekly-post.ts --dry-run # print it, change nothing
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { blogTopics, type BlogTopic } from "../src/lib/blog-topics";
import { posts as handWrittenPosts, type BlogPost } from "../src/lib/blog";
import { siteRoutes } from "../src/lib/routes";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const STORE = path.join(ROOT, "src", "content", "generated-posts.json");

const MODEL = "claude-sonnet-5-5";
const MIN_WORDS = 700;
const AUTHOR = "Sumit Vegad";
const DRY_RUN = process.argv.includes("--dry-run");
const CHECK_ONLY = process.argv.includes("--check");

/** Exit code 2 means "nothing to do", which the workflow treats as success. */
const EXIT_QUEUE_EMPTY = 2;

function fail(message: string): never {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

function readStore(): BlogPost[] {
  const raw = readFileSync(STORE, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) fail(`${STORE} must contain a JSON array.`);
  return parsed as BlogPost[];
}

/** Every slug already live, from both sources. */
function publishedSlugs(store: BlogPost[]): Set<string> {
  return new Set([...handWrittenPosts, ...store].map((p) => p.slug));
}

function nextTopic(store: BlogPost[]): BlogTopic | null {
  const done = publishedSlugs(store);
  return blogTopics.find((t) => !done.has(t.slug)) ?? null;
}

/**
 * Site-relative paths that actually resolve. Checked so a generated post can
 * never ship a dead internal link — the one error that would quietly undo the
 * internal-linking work the SEO plan asks for.
 */
function knownPaths(store: BlogPost[]): Set<string> {
  const paths = new Set<string>(siteRoutes().map((r) => r.path));
  for (const p of [...handWrittenPosts, ...store]) paths.add(`/blog/${p.slug}`);
  return paths;
}

function buildPrompt(topic: BlogTopic): string {
  return `You are writing one article for the OZZO blog. OZZO is an Indian B2B software company selling CRM and field sales (SFA) software to small and mid-sized businesses. Readers are owners and sales managers in India running field teams.

WRITE ABOUT THIS, AND ONLY THIS
Headline: ${topic.title}
What it must answer: ${topic.angle}
Search phrase to serve: ${topic.targetKeyword}

HOUSE RULES
1. Answer the headline's question in the first three sentences. Do not open with throat-clearing or a scene. That opening block is what AI search engines quote, so it must stand alone.
2. Plain, short sentences. Define any term the moment you use it. Write for someone running a business, not for other marketers.
3. Ground every claim. Do NOT invent customer counts, revenue, team sizes, awards, case studies, named customers, survey results or statistics. If you would need a number you do not have, make the point without one.
4. You may describe what OZZO does only in general terms: CRM with leads, deals and a shared WhatsApp inbox with an AI assistant; field sales with selfie and GPS attendance, geo-tagged visits, beat routes, offline order capture, payment collection, outstanding, stock and distributor/dealer/retailer levels. Mobile app is Android only today. Do not state prices.
5. Include at least one original table or checklist that a reader could act on.
6. Mention OZZO sparingly — at most twice in the body before the closing call to action. The article must be genuinely useful to someone who never buys anything.
7. Indian English. Use ₹ for money. No American spellings.
8. End with one short closing paragraph inviting the reader to book a demo.

INTERNAL LINKS
Work these naturally into the body text, each at least once, using a "link" block: ${topic.internalLinks.join(", ")}

LENGTH
At least ${MIN_WORDS} words of body text. Aim for 900 to 1200.

OUTPUT
Return ONLY a JSON object, no markdown fence, no commentary, matching exactly:
{
  "title": string,            // may refine the headline wording, same subject
  "metaTitle": string,        // at most 53 characters, " — OZZO" is appended
  "description": string,      // at most 150 characters, one sentence
  "body": Block[]
}
Block is one of:
  { "type": "p", "text": string }
  { "type": "h2", "text": string }
  { "type": "ul", "items": string[] }
  { "type": "quote", "text": string }
  { "type": "link", "href": string, "label": string }   // href must be one of the internal links above
Use "link" blocks on their own line where the link belongs. Every other block type is plain text — no markdown syntax inside any string.`;
}

type RawBlock = { type: string; text?: string; items?: string[]; href?: string; label?: string };
type Draft = { title: string; metaTitle: string; description: string; body: RawBlock[] };

async function callClaude(prompt: string): Promise<Draft> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) fail("ANTHROPIC_API_KEY is not set. Add it as a repository secret.");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) fail(`Anthropic API returned ${res.status}: ${await res.text()}`);

  const data = (await res.json()) as { content: { type: string; text?: string }[] };
  const text = data.content.find((c) => c.type === "text")?.text?.trim();
  if (!text) fail("Anthropic API returned no text block.");

  // Tolerate a stray ```json fence even though the prompt forbids it.
  const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  try {
    return JSON.parse(cleaned) as Draft;
  } catch {
    fail(`Model did not return valid JSON. First 400 chars:\n${cleaned.slice(0, 400)}`);
  }
}

function wordCount(body: RawBlock[]): number {
  return body
    .flatMap((b) => [b.text ?? "", b.label ?? "", ...(b.items ?? [])])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function validate(draft: Draft, topic: BlogTopic, store: BlogPost[]): void {
  for (const field of ["title", "metaTitle", "description"] as const) {
    if (typeof draft[field] !== "string" || !draft[field].trim()) {
      fail(`Draft is missing "${field}".`);
    }
  }
  if (!Array.isArray(draft.body) || draft.body.length < 4) {
    fail("Draft body must have at least four blocks.");
  }

  // The build's own check-meta.mjs enforces these too; catching them here
  // means a bad draft never reaches a commit.
  if (draft.metaTitle.length > 53) {
    fail(`metaTitle is ${draft.metaTitle.length} chars; the " — OZZO" suffix needs it at 53 or under.`);
  }
  if (draft.description.length > 150) {
    fail(`description is ${draft.description.length} chars; limit is 150.`);
  }

  const words = wordCount(draft.body);
  if (words < MIN_WORDS) fail(`Draft is ${words} words; minimum is ${MIN_WORDS}. Not publishing thin content.`);

  const allowed = new Set(["p", "h2", "ul", "quote", "link"]);
  const valid = knownPaths(store);
  const linked = new Set<string>();
  draft.body.forEach((b, i) => {
    if (!allowed.has(b.type)) fail(`Block ${i} has unknown type "${b.type}".`);
    if (b.type === "ul" && (!Array.isArray(b.items) || !b.items.length)) {
      fail(`Block ${i} is a list with no items.`);
    }
    if (b.type === "link") {
      if (!b.href || !b.label) fail(`Block ${i} is a link missing href or label.`);
      if (!valid.has(b.href)) fail(`Block ${i} links to "${b.href}", which is not a page on this site.`);
      linked.add(b.href);
    } else if (typeof b.text !== "string" || !b.text.trim()) {
      fail(`Block ${i} (${b.type}) has no text.`);
    }
  });

  const missed = topic.internalLinks.filter((l) => !linked.has(l));
  if (missed.length) fail(`Draft never links to: ${missed.join(", ")}.`);

  if (publishedSlugs(store).has(topic.slug)) fail(`Slug "${topic.slug}" is already published.`);
}

/**
 * Validates the queue itself, without calling the API. Run it after editing
 * blog-topics.ts: a topic pointing at a page that does not exist would fail
 * its run every week, silently, until someone noticed the blog had stopped.
 */
function checkQueue(store: BlogPost[]): void {
  const valid = knownPaths(store);
  const seen = new Set<string>();
  const published = publishedSlugs(store);
  let problems = 0;

  for (const t of blogTopics) {
    if (seen.has(t.slug)) {
      console.error(`✗ duplicate topic slug: ${t.slug}`);
      problems++;
    }
    seen.add(t.slug);
    for (const link of t.internalLinks) {
      if (!valid.has(link)) {
        console.error(`✗ ${t.slug} links to ${link}, which is not a page on this site`);
        problems++;
      }
    }
  }

  const remaining = blogTopics.filter((t) => !published.has(t.slug)).length;
  console.log(
    `\n${blogTopics.length} topics, ${remaining} unpublished ` +
      `(~${remaining} weeks of posts left).`,
  );
  if (problems) fail(`${problems} problem(s) in the topic queue.`);
  console.log("✓ Every topic links only to real pages.\n");
}

async function main(): Promise<void> {
  const store = readStore();

  if (CHECK_ONLY) {
    checkQueue(store);
    return;
  }

  const topic = nextTopic(store);

  if (!topic) {
    console.log(
      "\nTopic queue is empty — every approved topic has been published.\n" +
        "Nothing was written. Add topics to src/lib/blog-topics.ts to continue.\n",
    );
    process.exit(EXIT_QUEUE_EMPTY);
  }

  console.log(`Writing: ${topic.title}\n  slug: ${topic.slug}`);
  const draft = await callClaude(buildPrompt(topic));
  validate(draft, topic, store);

  const words = wordCount(draft.body);
  const post = {
    slug: topic.slug,
    title: draft.title,
    metaTitle: draft.metaTitle,
    description: draft.description,
    date: new Date().toISOString().slice(0, 10),
    author: AUTHOR,
    tags: topic.tags,
    emoji: topic.emoji,
    readingMinutes: Math.max(3, Math.round(words / 200)),
    body: draft.body,
  };

  if (DRY_RUN) {
    console.log(`\n--- dry run, nothing written (${words} words) ---\n`);
    console.log(JSON.stringify(post, null, 2));
    return;
  }

  writeFileSync(STORE, `${JSON.stringify([...store, post], null, 2)}\n`, "utf8");
  console.log(`\n✓ Wrote ${words} words to src/content/generated-posts.json`);
  console.log(`  ${blogTopics.length - publishedSlugs(readStore()).size + handWrittenPosts.length} topics left in the queue.`);
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)));
