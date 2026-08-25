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
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://www.vipaspen.com";

/**
 * Pull the registered slugs out of a data folder's loader map. The maps are
 * written one `"slug": () => import(...)` per line, so a line-anchored match on
 * the arrow-import shape can't pick up unrelated object literals in the file.
 */
function slugsFrom(folder) {
  const source = readFileSync(join(root, "src/data", folder, "index.ts"), "utf8");
  return [...source.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*\(\)\s*=>\s*$|^\s*"?([a-z0-9-]+)"?:\s*\(\)\s*=>\s*import\(/gm)]
    .map((m) => m[1] ?? m[2])
    .filter(Boolean);
}

const services = slugsFrom("services");
const vehicles = slugsFrom("vehicles");
const airports = slugsFrom("airports");
const guides = slugsFrom("guides");

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

const lastmod = new Date().toISOString().slice(0, 10);

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
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreqFor(path)}</changefreq>`,
      `    <priority>${priorityFor(path)}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml: ${unique.length} URLs (lastmod ${lastmod})`);

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
