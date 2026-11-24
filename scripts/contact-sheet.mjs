import sharp from "sharp";
import path from "node:path";
const [,, out, ...files] = process.argv;
const W = 420, H = 300, cols = 4;
const rows = Math.ceil(files.length / cols);
const tiles = await Promise.all(files.map(async (f, i) => {
  const img = await sharp(f).resize(W, H - 26, { fit: "cover" }).toBuffer();
  const label = Buffer.from(`<svg width="${W}" height="26"><rect width="100%" height="100%" fill="#111"/><text x="6" y="18" font-family="Arial" font-size="14" fill="#fff">${path.basename(f).replace(/&/g, "")}</text></svg>`);
  return [
    { input: img, left: (i % cols) * W, top: Math.floor(i / cols) * H },
    { input: label, left: (i % cols) * W, top: Math.floor(i / cols) * H + H - 26 },
  ];
}));
await sharp({ create: { width: cols * W, height: rows * H, channels: 3, background: "#333" } }).composite(tiles.flat()).jpeg({ quality: 78 }).toFile(out);
console.log("ok", out);
