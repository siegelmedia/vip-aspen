/**
 * One-off re-encoder for src/assets/*.webp.
 *
 * The AI-generated art was exported at 2K/q82, which put 300–550KB behind
 * every hero and made the largest-contentful-paint image the heaviest thing
 * on the page. Nothing on the site renders wider than ~1600 CSS px (full-bleed
 * hero) or ~1100 CSS px (cards and galleries at 2x DPR), so anything above
 * those widths is bytes the browser downloads and then throws away.
 *
 * Run with: node scripts/optimize-images.mjs [--dry]
 * Requires sharp (already present in node_modules).
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "src/assets");
const dry = process.argv.includes("--dry");

/** Full-bleed background images — these can legitimately fill a 1600px viewport. */
const isFullBleed = (name) =>
  name.startsWith("hero-") ||
  name.startsWith("service-") ||
  name === "fleet-tarmac-hero.webp" ||
  name === "cullinan-mountain-road.webp";

/** The logo is small and lossless-ish; leave it alone. */
const skip = (name) => name.includes("logo");

const QUALITY = 74;

const files = readdirSync(assets).filter((f) => f.endsWith(".webp") && !skip(f));

let before = 0;
let after = 0;

for (const name of files) {
  const path = join(assets, name);
  // Read into memory first: sharp keeps a handle on files it reads from disk,
  // and on Windows that handle blocks the in-place overwrite below.
  const original = readFileSync(path);
  const originalSize = original.length;
  before += originalSize;

  const maxWidth = isFullBleed(name) ? 1600 : 1100;
  // Cap height too, so tall portrait crops don't stay enormous just because
  // their width is already under the limit.
  const maxHeight = Math.round(maxWidth * 1.5);

  const buffer = await sharp(original)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
    .toBuffer();

  // Never let an "optimization" make a file bigger.
  if (buffer.length >= originalSize) {
    after += originalSize;
    console.log(`  skip  ${name} (already ${(originalSize / 1024).toFixed(0)}KB)`);
    continue;
  }

  after += buffer.length;
  const pct = (100 - (100 * buffer.length) / originalSize).toFixed(0);
  console.log(
    `  ${name.padEnd(36)} ${(originalSize / 1024).toFixed(0).padStart(4)}KB -> ${(
      buffer.length / 1024
    )
      .toFixed(0)
      .padStart(4)}KB  (-${pct}%)`,
  );

  if (!dry) {
    writeFileSync(path, buffer);
  }
}

console.log(
  `\n${files.length} images: ${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(
    2,
  )}MB  (-${(100 - (100 * after) / before).toFixed(0)}%)${dry ? "  [dry run]" : ""}`,
);
