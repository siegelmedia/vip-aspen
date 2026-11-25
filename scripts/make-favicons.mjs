/**
 * Builds the favicons from the white logo: the lettering and ornament, centred on a black
 * square with a margin, so nothing is cut off (the earlier icons were the wide
 * logo cropped to a square, which lost the sides of "VIP ASPEN").
 *
 *   node scripts/make-favicons.mjs
 *
 * Writes public/favicon-32.png, favicon.png (64), favicon-192.png and
 * favicon.ico (16, 32 and 48 px).
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

sharp.cache(false);

const INK = { r: 12, g: 12, b: 13, alpha: 1 };
/** Share of the square the logo's width takes; the rest is margin. */
const FILL = 0.88;

// The lettering and ornament, with the long rule cut to the width of the lettering so the mark is as large as the
// square allows (the logo file is 305 x 127; the lettering sits at x 54 to 251, the artwork at y 11 to 119).
const logo = await sharp(await readFile("src/assets/vip-aspen-logo.webp"))
  .extract({ left: 42, top: 9, width: 221, height: 112 })
  .png()
  .toBuffer();

async function icon(size) {
  const mark = await sharp(logo)
    .resize({ width: Math.round(size * FILL), kernel: "lanczos3" })
    .png()
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: INK } })
    .composite([{ input: mark, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** An .ico file holding PNG images, which every current browser reads. */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size, 0);
    e.writeUInt8(size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await writeFile("public/favicon-32.png", await icon(32));
await writeFile("public/favicon.png", await icon(64));
await writeFile("public/favicon-192.png", await icon(192));
await writeFile(
  "public/favicon.ico",
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await icon(size) })))),
);
console.log("Wrote favicon-32.png, favicon.png, favicon-192.png and favicon.ico");
