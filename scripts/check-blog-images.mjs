/**
 * Fails the build when a blog post does not carry its illustrations properly.
 *
 * WHY THIS EXISTS: "add images to the posts" is the kind of decision that
 * holds for exactly as long as somebody remembers it. A post written in three
 * months will be written in a hurry, and the picture is the first thing to be
 * left out. A rule the build enforces is the only kind that survives.
 *
 * Three things are checked, on the RENDERED html rather than the source data,
 * so what ships is what gets measured:
 *
 *   1. Every article carries at least MIN_IMAGES illustrations.
 *   2. Every one of them has real alt text. An image with an empty alt is
 *      invisible to Google Images and to anyone using a screen reader, which
 *      makes it decoration rather than content.
 *   3. Every file an article points at actually exists in public/. A post
 *      referencing a renamed or deleted image would otherwise ship a broken
 *      picture and nobody would notice until a reader did.
 *
 * Run by `postbuild`, after check-meta.mjs.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app/blog";
const PUBLIC = "public";
const MIN_IMAGES = 4;
/** Alt text shorter than this is a label, not a description. */
const MIN_ALT = 25;

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
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));

let files;
try {
  files = htmlFiles(ROOT);
} catch {
  console.error(`check-blog-images: ${ROOT} not found — run after \`next build\`.`);
  process.exit(1);
}

const problems = [];
let posts = 0;
let images = 0;

for (const file of files) {
  const url = "/blog/" + relative(ROOT, file).replace(/\\/g, "/").replace(/\.html$/, "");
  if (url === "/blog/page" || url === "/blog") continue; // the index lists posts, it is not one
  posts++;

  const html = readFileSync(file, "utf8");
  // Only the article's own illustrations. Anything served from elsewhere is
  // not what this rule is about.
  const tags = [...html.matchAll(/<img\b[^>]*src="(\/blog\/[^"]+)"[^>]*>/g)];

  if (tags.length < MIN_IMAGES) {
    problems.push(`${url} — ${tags.length} image(s); every post needs at least ${MIN_IMAGES}.`);
  }

  for (const [tag, src] of tags) {
    images++;
    const alt = decode((tag.match(/\balt="([^"]*)"/) ?? [, ""])[1]).trim();
    if (!alt) {
      problems.push(`${url} — ${src} has no alt text.`);
    } else if (alt.length < MIN_ALT) {
      problems.push(
        `${url} — alt text for ${src} is only ${alt.length} characters ("${alt}"). ` +
          `Describe what the picture shows.`,
      );
    }
    if (!existsSync(join(PUBLIC, src))) {
      problems.push(`${url} — ${src} does not exist. Run \`npm run blog:images\`.`);
    }
  }
}

if (problems.length) {
  console.error(`\ncheck-blog-images: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(
    `\nEvery article needs at least ${MIN_IMAGES} illustrations with real alt text.\n` +
      `Add a spec to scripts/build-blog-images.mjs, run \`npm run blog:images\`,\n` +
      `then reference each file from the post with an \`image\` block.\n`,
  );
  process.exit(1);
}

console.log(
  `check-blog-images: ${posts} posts, ${images} images, all with alt text and a real file.`,
);
