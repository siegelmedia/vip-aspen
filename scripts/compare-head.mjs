// Compares the SEO-relevant head of every page in two builds:
//   node scripts/compare-head.mjs <before dir> <after dir>
// Reports any page whose title, description, canonical, robots, Open Graph tags or JSON-LD changed,
// and the visible word count of each page body, so a redesign can prove it left search data alone.
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { JSDOM } from "jsdom";

const [, , beforeDir, afterDir] = process.argv;

async function pages(dir, prefix = "") {
  const out = [];
  for (const entry of await readdir(join(dir, prefix), { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (["assets", "fonts", "video"].includes(entry.name)) continue;
      out.push(...(await pages(dir, [prefix, entry.name].filter(Boolean).join("/"))));
    } else if (entry.name.endsWith(".html")) out.push([prefix, entry.name].filter(Boolean).join("/"));
  }
  return out;
}

async function head(file) {
  const doc = new JSDOM(await readFile(file, "utf8")).window.document;
  const meta = (sel) => doc.querySelector(sel)?.getAttribute("content") ?? null;
  const og = {};
  doc.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[property^="article:"]').forEach((m) => {
    og[m.getAttribute("property") || m.getAttribute("name")] = m.getAttribute("content");
  });
  const ld = [...doc.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.stringify(JSON.parse(s.textContent)));
  const root = doc.querySelector("#root");
  root?.querySelectorAll("script, style, noscript").forEach((n) => n.remove());
  const words = (root?.textContent || "").split(/\s+/).filter(Boolean).length;
  return {
    title: doc.title,
    description: meta('meta[name="description"]'),
    robots: meta('meta[name="robots"]'),
    canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
    og,
    ld,
    h1: [...doc.querySelectorAll("#root h1")].map((h) => h.textContent.replace(/\s+/g, " ").trim()),
    words,
  };
}

const before = await pages(beforeDir);
const after = new Set(await pages(afterDir));
let changed = 0;
for (const page of before.sort()) {
  if (!after.has(page)) {
    console.log(`MISSING in new build: ${page}`);
    changed++;
    continue;
  }
  const a = await head(join(beforeDir, page));
  const b = await head(join(afterDir, page));
  const diffs = [];
  for (const key of ["title", "description", "robots", "canonical"]) if (a[key] !== b[key]) diffs.push(`${key}: "${a[key]}" -> "${b[key]}"`);
  if (JSON.stringify(a.og) !== JSON.stringify(b.og)) diffs.push("og/twitter tags differ");
  if (JSON.stringify(a.ld) !== JSON.stringify(b.ld)) diffs.push("JSON-LD differs");
  if (b.h1.length !== 1) diffs.push(`h1 count ${b.h1.length}`);
  if (JSON.stringify(a.h1) !== JSON.stringify(b.h1)) diffs.push(`h1: ${JSON.stringify(a.h1)} -> ${JSON.stringify(b.h1)}`);
  const pct = a.words ? Math.round(((b.words - a.words) / a.words) * 100) : 0;
  console.log(`${diffs.length ? "CHANGED" : "same   "} ${page.padEnd(52)} words ${String(a.words).padStart(5)} -> ${String(b.words).padStart(5)} (${pct >= 0 ? "+" : ""}${pct}%)${diffs.length ? "\n   " + diffs.join("\n   ") : ""}`);
  if (diffs.length) changed++;
}
for (const page of after) if (!before.includes(page)) console.log(`NEW in new build: ${page}`);
console.log(`\n${changed} page(s) with head or h1 changes out of ${before.length}`);
