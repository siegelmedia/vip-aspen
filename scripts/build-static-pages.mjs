import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { JSDOM } from 'jsdom';

async function source(path) {
  return ts.createSourceFile(path, await readFile(path, 'utf8'), ts.ScriptTarget.Latest, true);
}
function visit(node, callback) {
  callback(node);
  ts.forEachChild(node, child => visit(child, callback));
}
const literal = node => {
  assert(node && ts.isStringLiteral(node), 'SEO fields must be literal strings');
  return node.text;
};
const pages = new Map();
let notFound;
function collect(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const prop = key => node.properties.find(p => p.name?.getText() === key)?.initializer;
    if (prop('canonicalUrl') && prop('title') && prop('description')) {
      pages.set(literal(prop('canonicalUrl')), {
        title: literal(prop('title')), description: literal(prop('description')),
        image: prop('ogImage') ? literal(prop('ogImage')) : undefined,
      });
    }
  }
  if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === 'SEOHead') {
    const attr = key => node.attributes.properties.find(p => p.name?.getText() === key)?.initializer;
    const metadata = { title: literal(attr('title')), description: literal(attr('description')),
      image: attr('ogImage') ? literal(attr('ogImage')) : undefined };
    if (metadata.title === 'Page Not Found') notFound = metadata;
    else pages.set(literal(attr('canonicalUrl')), metadata);
  }
}
for (const folder of ['services', 'vehicles', 'airports', 'guides']) {
  const loaders = await readFile(`src/data/${folder}/index.ts`, 'utf8');
  const registered = new Set([...loaders.matchAll(/import\("\.\/([^"/]+)"\)/g)].map(m => m[1] + '.ts'));
  for (const name of await readdir(`src/data/${folder}`)) {
    if (registered.has(name)) visit(await source(`src/data/${folder}/${name}`), collect);
  }
}
for (const name of ['Index', 'AboutPage', 'ContactPage', 'MembershipPage', 'SecurityAssessment', 'GuidesIndex', 'NotFound']) {
  visit(await source(`src/pages/${name}.tsx`), collect);
}
const base = 'https://www.vipaspen.com';
const sitemap = new JSDOM(await readFile('public/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const paths = [...sitemap.window.document.querySelectorAll('loc')].map(el => {
  const url = new URL(el.textContent); assert.equal(url.origin, base); return url.pathname;
}).sort();
assert.deepEqual([...pages.keys()].sort(), paths, 'Every sitemap URL must have matching page metadata');
assert(notFound, 'Missing 404 metadata');
const template = await readFile('dist/index.html', 'utf8');
function render(path, metadata, status = 200, noindex = false) {
  const dom = new JSDOM(template);
  const doc = dom.window.document;
  doc.title = metadata.title + ' | VIP Aspen';
  function meta(key, value, property = false) {
    const el = doc.createElement('meta'); el.setAttribute('data-seo-fallback', '');
    el.setAttribute(property ? 'property' : 'name', key); el.content = value; doc.head.append(el);
  }
  meta('description', metadata.description);
  for (const [key, value] of Object.entries({ 'og:title': doc.title, 'og:description': metadata.description,
    'og:type': 'website', 'og:site_name': 'VIP Aspen', 'og:image': metadata.image || base + '/og-image.jpg' })) meta(key, value, true);
  meta('twitter:card', 'summary_large_image'); meta('twitter:title', doc.title);
  meta('twitter:description', metadata.description); meta('twitter:image', metadata.image || base + '/og-image.jpg');
  if (noindex || status === 404) meta('robots', 'noindex, nofollow');
  if (status === 404) meta('prerender-status-code', '404');
  else if (!noindex) {
    const el = doc.createElement('link'); el.setAttribute('data-seo-fallback', '');
    el.rel = 'canonical'; el.href = base + path; doc.head.append(el); meta('og:url', base + path, true);
  }
  const fallback = doc.querySelector('noscript');
  fallback.querySelector('h1').textContent = metadata.title.split('|')[0].trim();
  fallback.querySelector('p').textContent = metadata.description;
  return dom.serialize();
}
async function output(path, html) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  assert(/^dist\/[a-z0-9\/-]+\.html$/.test(file));
  await mkdir(dirname(file), { recursive: true }); await writeFile(file, html);
}
for (const [path, metadata] of pages) await output(path, render(path, metadata));
await output('/404', render(null, notFound, 404));

// Preserve the existing in-vehicle pages while keeping them out of search.
const tabletPaths = ['/summit-blackcar'];
visit(await source('src/data/summitDrivers.ts'), node => {
  if (!ts.isObjectLiteralExpression(node)) return;
  const slug = node.properties.find(p => p.name?.getText() === 'slug')?.initializer;
  if (slug) tabletPaths.push('/summit-blackcar/' + literal(slug));
});
for (const path of tabletPaths) await output(path, render(path, { title: 'Summit Black Car', description: 'In-vehicle driver information.' }, 200, true));
await writeFile('workers/prerender/routes.js', '// Generated by scripts/build-static-pages.mjs.\n' +
  `export const PAGE_PATHS = new Set(${JSON.stringify(paths, null, 2)});\n`);
console.log(`Generated metadata for ${pages.size} public pages, ${tabletPaths.length} noindex tablet pages, and a real 404.`);
