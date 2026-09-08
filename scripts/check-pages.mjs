import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { PAGE_PATHS } from '../workers/prerender/routes.js';
const base = process.argv[2] || 'http://127.0.0.1:8789';
const agent = process.argv[3] || 'Mozilla/5.0';
const get = path => fetch(base + path, { redirect: 'manual', headers: { 'User-Agent': agent } });
for (const path of PAGE_PATHS) {
  const r = await get(path); assert.equal(r.status, 200, path);
  const doc = new JSDOM(await r.text()).window.document;
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1, path);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, 'https://www.vipaspen.com' + path, path);
  assert(doc.querySelector('meta[name="description"]')?.content.length > 30, path);
  assert(!/noindex/i.test(doc.querySelector('meta[name="robots"]')?.content || ''), path);
  // Cloudflare intentionally adds noindex to version previews.
  if (!process.argv.includes('--preview')) assert(!/noindex/i.test(r.headers.get('x-robots-tag') || ''), path);
  if (/Googlebot/.test(agent)) {
    assert(r.headers.get('x-prerender-requestid'), 'Prerender missing: ' + path);
    assert(doc.querySelector('#root')?.textContent.length > 300, 'Empty rendered content: ' + path);
  }
}
for (const path of ['/vip-audit-missing-20260908', '/service/.env', '/missing.js']) {
  const r = await get(path); assert.equal(r.status, 404, path);
  assert(!r.headers.has('x-prerender-requestid'), path);
}
for (const [from,to] of [['/private-entertainment','/aspen-clubs'], ['/promotional-services','/special-event-transportation'], ['/talent','/aspen-clubs']]) {
  const r = await get(from); assert.equal(r.status, 301, from);
  assert.equal(new URL(r.headers.get('location'), base).pathname, to);
}
const tablet = await get('/summit-blackcar/andrew-siegel'); assert.equal(tablet.status, 200);
assert(/noindex/.test(await tablet.text()));
console.log(`PASS: ${PAGE_PATHS.size} public pages, three real 404s, three 301 redirects, and tablet noindex (${agent}).`);
