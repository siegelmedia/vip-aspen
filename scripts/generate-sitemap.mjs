/**
 * Generates public/sitemap.xml from the route data that actually ships.
 *
 * The sitemap used to be hand-maintained, which meant every added or retired
 * page was one more chance to drift out of sync with src/data/**. This reads
 * the slugs straight out of the data folders instead, so the sitemap can only
 * ever list URLs the router really serves.
 *
 * Run via `npm run build` (prebuild) or directly: `node scripts/generate-sitemap.mjs`
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://www.vipaspen.com";

/**
 * Pull the registered slugs out of a data folder's loader map. The maps are
 * written one `"slug": () => import(...)` per line, so a line-anchored match on
 * the arrow-import shape can't pick up unrelated object literals in the file.
 */
function entriesFrom(folder) {
  const source = readFileSync(join(root, "src/data", folder, "index.ts"), "utf8");
  return [...source.matchAll(/"?([a-z0-9-]+)"?:\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)].map((m) => ({
    slug: m[1],
    file: `src/data/${folder}/${m[2]}.ts`,
  }));
}
const slugsFrom = (folder) => entriesFrom(folder).map((e) => e.slug);

const services = slugsFrom("services");
const vehicles = slugsFrom("vehicles");
const airports = slugsFrom("airports");
const guides = slugsFrom("guides");

/** Source file(s) whose last commit dates a route. */
const sourcesFor = new Map([
  ["", ["src/pages/Index.tsx", "src/components"]],
  ["about", ["src/pages/AboutPage.tsx"]],
  ["contact", ["src/pages/ContactPage.tsx"]],
  ["membership", ["src/pages/MembershipPage.tsx"]],
  ["security-assessment", ["src/pages/SecurityAssessment.tsx"]],
  ["guides", ["src/pages/GuidesIndex.tsx", "src/data/guides/index.ts"]],
]);
for (const folder of ["services", "vehicles", "airports", "guides"]) {
  for (const { slug, file } of entriesFrom(folder)) {
    sourcesFor.set(folder === "guides" ? `guides/${slug}` : slug, [file]);
  }
}

const today = new Date().toISOString().slice(0, 10);
let dirty = new Set();
try {
  dirty = new Set(
    execFileSync("git", ["status", "--porcelain", "--", "src"], { cwd: root, encoding: "utf8" })
      .split("\n").filter(Boolean).map((line) => line.slice(3).trim().replace(/\\/g, "/")),
  );
} catch {
  // not a git checkout — every URL gets today's date
}

/**
 * Real per-URL <lastmod>: the date of the last commit that touched the page's
 * source. Stamping every URL with the build date made the field meaningless,
 * and Google ignores lastmod once it sees that pattern.
 */
function lastmodFor(path) {
  const sources = sourcesFor.get(path) ?? [];
  if (sources.some((s) => [...dirty].some((d) => d === s || d.startsWith(s + "/")))) return today;
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...sources], { cwd: root, encoding: "utf8" }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : today;
  } catch {
    return today;
  }
}

// Routes defined directly in App.tsx rather than generated from data.
const staticRoutes = ["", "about", "contact", "membership", "security-assessment", "guides"];

/** Priority tiers — homepage first, then money pages, then supporting content. */
const priorityFor = (path) => {
  if (path === "") return "1.0";
  if (vehicles.includes(path) || airports.includes(path)) return "0.9";
  if (path === "black-car-service") return "0.9";
  if (services.includes(path)) return "0.8";
  if (path.startsWith("guides/")) return "0.6";
  return "0.7";
};

const changefreqFor = (path) => (path === "" ? "weekly" : "monthly");

const paths = [
  ...staticRoutes,
  ...vehicles,
  ...airports,
  ...services,
  ...guides.map((slug) => `guides/${slug}`),
];

// Guard against a slug being registered in two data folders.
const seen = new Set();
const unique = paths.filter((p) => !seen.has(p) && seen.add(p));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...unique.map((path) =>
    [
      "  <url>",
      `    <loc>${BASE}/${path}</loc>`,
      `    <lastmod>${lastmodFor(path)}</lastmod>`,
      `    <changefreq>${changefreqFor(path)}</changefreq>`,
      `    <priority>${priorityFor(path)}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml: ${unique.length} URLs (per-page lastmod from git history)`);

// Sanity check: nothing retired should ever reappear in the sitemap.
const retired = ["private-entertainment", "promotional-services", "talent"];
const leaked = retired.filter((slug) => unique.includes(slug));
if (leaked.length) {
  console.error(`Retired routes leaked into the sitemap: ${leaked.join(", ")}`);
  process.exit(1);
}

// Every data folder must actually have contributed something.
for (const [name, list] of Object.entries({ services, vehicles, airports, guides })) {
  if (list.length === 0) {
    console.error(`No slugs parsed from src/data/${name}/index.ts — check the file shape.`);
    process.exit(1);
  }
}
