/**
 * Fails the build when a page's <title> or meta description is too long for
 * Google to show in full.
 *
 * WHY: the 2026-10-25 audit found 42 of 71 titles over 60 characters and 61
 * descriptions over 160. Google truncates the first and rewrites the second,
 * so the wording we chose never reaches the searcher — on most of the site.
 * Fixing them once is pointless if the next page added brings the problem
 * back, so this runs as `postbuild` and the deploy fails rather than
 * shipping a truncated snippet.
 *
 * Measured on the RENDERED html, after the `%s — OZZO` title template has
 * been applied, because that suffix costs 7 characters that are easy to
 * forget. Entities are decoded first: `&amp;` is one character on screen,
 * and counting it as five is what made the original audit read 54 instead
 * of 42.
 *
 * Limits are deliberately a little under the real ones — Google truncates by
 * pixel width, not character count, so a capital-heavy title can be cut at
 * 55 while a lowercase one survives past 62. These are a safe approximation.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const TITLE_MAX = 60;
const DESC_MAX = 155;

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (entry.endsWith(".html")) out.push(p);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));

let files;
try {
  files = htmlFiles(ROOT);
} catch {
  console.error(`check-meta: ${ROOT} not found — run this after \`next build\`.`);
  process.exit(1);
}

const problems = [];
let checked = 0;

for (const file of files) {
  const url = "/" + relative(ROOT, file).replace(/\\/g, "/").replace(/\.html$/, "");
  // Next's own 404 and global-error boundaries. They are noindex and carry no
  // metadata of ours, so there is nothing here to get wrong.
  if (url === "/_not-found" || url === "/_global-error") continue;
  const html = readFileSync(file, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/s);
  if (!title || title[1].startsWith("404")) continue;
  const desc = html.match(/name="description" content="(.*?)"/s);
  const t = decode(title[1]);
  const d = desc ? decode(desc[1]) : "";
  checked++;

  if (t.length > TITLE_MAX) problems.push({ url, what: "title", len: t.length, max: TITLE_MAX, text: t });
  if (!d) problems.push({ url, what: "description", len: 0, max: DESC_MAX, text: "(missing)" });
  else if (d.length > DESC_MAX) problems.push({ url, what: "description", len: d.length, max: DESC_MAX, text: d });
}

if (problems.length) {
  console.error(`\ncheck-meta: ${problems.length} problem(s) across ${checked} pages.\n`);
  for (const p of problems) {
    console.error(`  ${p.what.padEnd(11)} ${String(p.len).padStart(3)}/${p.max}  ${p.url}`);
    console.error(`              ${p.text.slice(0, 110)}${p.text.length > 110 ? "…" : ""}`);
  }
  console.error(
    `\nTitles must be <= ${TITLE_MAX} chars INCLUDING the " — OZZO" suffix (so <= ${TITLE_MAX - 7} in the source),` +
      ` and descriptions <= ${DESC_MAX}.\n`,
  );
  process.exit(1);
}

console.log(`check-meta: ${checked} pages, all titles <= ${TITLE_MAX} and descriptions <= ${DESC_MAX}.`);
