// Cuts the white studio background away from a vehicle photo and places the
// vehicle on a 400x200 see-through canvas with the wheels on a common line,
// matching the other hero-button vehicle pictures.
//   node scripts/cutout-white.mjs <in> <out.webp>
import sharp from "sharp";
const [,, input, output] = process.argv;
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const isWhite = (i) => data[i] > 236 && data[i + 1] > 236 && data[i + 2] > 236;
const seen = new Uint8Array(w * h);
const stack = [];
for (let x = 0; x < w; x++) { stack.push(x, x + (h - 1) * w); }
for (let y = 0; y < h; y++) { stack.push(y * w, y * w + w - 1); }
while (stack.length) {
  const p = stack.pop();
  if (seen[p]) continue;
  if (!isWhite(p * 4)) continue;
  seen[p] = 1;
  data[p * 4 + 3] = 0;
  const x = p % w, y = (p - x) / w;
  if (x > 0) stack.push(p - 1);
  if (x < w - 1) stack.push(p + 1);
  if (y > 0) stack.push(p - w);
  if (y < h - 1) stack.push(p + w);
}
// soften the cut edge: a kept pixel that touches a removed one and is light becomes partly see-through
for (let p = 0; p < w * h; p++) {
  if (seen[p]) continue;
  const x = p % w, y = (p - x) / w;
  const near = (x > 0 && seen[p - 1]) || (x < w - 1 && seen[p + 1]) || (y > 0 && seen[p - w]) || (y < h - 1 && seen[p + w]);
  if (!near) continue;
  const lum = (data[p * 4] + data[p * 4 + 1] + data[p * 4 + 2]) / 3;
  if (lum > 120) data[p * 4 + 3] = Math.round(255 * (1 - (lum - 120) / 135) * 0.9);
}
const cut = await sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
const trimmed = await sharp(cut).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
const W = 400, H = 200, PAD = 8, BASE = 194;
const s = Math.min((W - 2 * PAD) / trimmed.info.width, (BASE - PAD) / trimmed.info.height);
const cw = Math.round(trimmed.info.width * s), ch = Math.round(trimmed.info.height * s);
const car = await sharp(trimmed.data).resize(cw, ch).toBuffer();
await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: car, left: Math.round((W - cw) / 2), top: BASE - ch }])
  .webp({ quality: 88, alphaQuality: 90 })
  .toFile(output);
console.log("ok", output, cw, ch);
