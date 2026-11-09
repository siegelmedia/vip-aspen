/**
 * Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver share one
 * endpoint). Run after a deploy that changes content: `npm run indexnow`.
 * The key file public/<key>.txt must be live on the domain before this works.
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "www.vipaspen.com";
const KEY = "94282ec82b14207ba743c46521b5215e";

const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status} ${res.statusText}`);
if (!res.ok) { console.error(await res.text()); process.exit(1); }
