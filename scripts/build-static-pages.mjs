import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { dirname, basename } from 'node:path';
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
const text = node => (node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : undefined);

/** Hashed build assets, so a page can preload its own hero image. */
const builtAssets = await readdir('dist/assets');
const builtAsset = sourcePath => {
  if (!sourcePath) return undefined;
  const base = basename(sourcePath).replace(/\.[a-z0-9]+$/i, '');
  const ext = sourcePath.match(/\.[a-z0-9]+$/i)?.[0] ?? '';
  const re = new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-[A-Za-z0-9_-]+${ext.replace('.', '\\.')}$`);
  const match = builtAssets.find(name => re.test(name));
  return match ? `/assets/${match}` : undefined;
};

const pages = new Map();
let notFound;
/**
 * Reads one data file or page: SEO fields, its FAQ pairs (for llms-full.txt)
 * and the hero image it imports (for the LCP preload tag).
 */
function collect(file, section) {
  const imports = new Map();
  const faqs = [];
  let hero;
  const visitor = node => {
    if (ts.isImportDeclaration(node) && node.importClause?.name) {
      imports.set(node.importClause.name.text, node.moduleSpecifier.text);
    }
    if (ts.isObjectLiteralExpression(node)) {
      const prop = key => node.properties.find(p => p.name?.getText() === key)?.initializer;
      if (prop('canonicalUrl') && prop('title') && prop('description')) {
        pages.set(literal(prop('canonicalUrl')), {
          title: literal(prop('title')), description: literal(prop('description')),
          image: prop('ogImage') ? literal(prop('ogImage')) : undefined, file, section, faqs,
          hero: () => hero,
        });
      }
      if (prop('question') && prop('answer')) {
        const q = text(prop('question')), a = text(prop('answer'));
        if (q && a) faqs.push({ q, a });
      }
      for (const key of ['bgImage', 'heroImage', 'image']) {
        const value = node.properties.find(p => p.name?.getText() === key);
        const ident = value && (ts.isShorthandPropertyAssignment(value) ? value.name.text
          : ts.isPropertyAssignment(value) && ts.isIdentifier(value.initializer) ? value.initializer.text : undefined);
        // hero: { bgImage | image } and top-level heroImage are the LCP candidates; ignore gallery/fleet cards.
        if (ident && imports.has(ident) && !hero && (key !== 'image' || node.properties.some(p => p.name?.getText() === 'tagline'))) {
          hero = imports.get(ident);
        }
      }
    }
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === 'SEOHead') {
      const attr = key => node.attributes.properties.find(p => p.name?.getText() === key)?.initializer;
      const metadata = { title: literal(attr('title')), description: literal(attr('description')),
        image: attr('ogImage') ? literal(attr('ogImage')) : undefined, file, section, faqs, hero: () => hero };
      if (metadata.title === 'Page Not Found') notFound = metadata;
      else pages.set(literal(attr('canonicalUrl')), metadata);
    }
  };
  // Pages that render their hero with a plain <img> (About, the homepage's
  // Hero component) have no hero object literal: their first image import is it.
  visitor.hero = () => hero ?? [...imports.values()].find(path => /\.(webp|jpe?g|png|avif)$/i.test(path));
  return visitor;
}
const SECTIONS = { vehicles: 'Fleet', airports: 'Airports & Routes', services: 'Services', guides: 'Travel Guides' };
for (const folder of ['services', 'vehicles', 'airports', 'guides']) {
  const loaders = await readFile(`src/data/${folder}/index.ts`, 'utf8');
  const registered = new Set([...loaders.matchAll(/import\("\.\/([^"/]+)"\)/g)].map(m => m[1] + '.ts'));
  for (const name of await readdir(`src/data/${folder}`)) {
    const file = `src/data/${folder}/${name}`;
    if (registered.has(name)) visit(await source(file), collect(file, SECTIONS[folder]));
  }
}
for (const name of ['Index', 'AboutPage', 'ContactPage', 'MembershipPage', 'SecurityAssessment', 'GuidesIndex', 'NotFound']) {
  const file = `src/pages/${name}.tsx`;
  const visitor = collect(file, 'Company');
  visit(await source(file), visitor);
  for (const page of pages.values()) if (page.file === file) page.hero = visitor.hero;
}
// The homepage hero lives in a component, not the page file.
{
  const visitor = collect('src/components/Hero.tsx', 'Company');
  visit(await source('src/components/Hero.tsx'), visitor);
  pages.get('/').hero = visitor.hero;
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
  doc.title = /VIP Aspen/i.test(metadata.title) ? metadata.title : metadata.title + ' | VIP Aspen';
  function meta(key, value, property = false) {
    const el = doc.createElement('meta'); el.setAttribute('data-seo-fallback', '');
    el.setAttribute(property ? 'property' : 'name', key); el.content = value; doc.head.append(el);
  }
  meta('description', metadata.description);
  const article = metadata.section === 'Travel Guides' && path !== '/guides';
  for (const [key, value] of Object.entries({ 'og:title': doc.title, 'og:description': metadata.description,
    'og:type': article ? 'article' : 'website', 'og:site_name': 'VIP Aspen', 'og:image': metadata.image || base + '/og-image.jpg' })) meta(key, value, true);
  meta('twitter:card', 'summary_large_image'); meta('twitter:title', doc.title);
  meta('twitter:description', metadata.description); meta('twitter:image', metadata.image || base + '/og-image.jpg');
  if (noindex || status === 404) meta('robots', 'noindex, nofollow');
  if (status === 404) meta('prerender-status-code', '404');
  else if (!noindex) {
    const el = doc.createElement('link'); el.setAttribute('data-seo-fallback', '');
    el.rel = 'canonical'; el.href = base + path; doc.head.append(el); meta('og:url', base + path, true);
  }
  // Let the browser fetch the hero (the LCP image) before any script has run.
  const hero = builtAsset(metadata.hero?.());
  if (hero) {
    const el = doc.createElement('link'); el.rel = 'preload'; el.as = 'image'; el.href = hero;
    el.setAttribute('fetchpriority', 'high'); doc.head.append(el);
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

// llms.txt — a plain-text index for AI answer engines, grouped by intent.
const shortTitle = m => m.title.split('|')[0].trim();
const byPath = (a, b) => (a[0] === '/' ? -1 : b[0] === '/' ? 1 : a[0].localeCompare(b[0]));
const sections = ['Company', 'Fleet', 'Airports & Routes', 'Services', 'Travel Guides'];
const grouped = sections.map(section => [section, [...pages].filter(([, m]) => m.section === section).sort(byPath)]);
const header = [
  '# VIP Aspen',
  '',
  '> Luxury chauffeured car service and executive protection in Aspen, Colorado. Rolls-Royce Cullinan,',
  '> Cadillac Escalade and Executive Sprinter with professional chauffeurs. Airport transfers (ASE, EGE, RIL, DEN),',
  '> Vail/Beaver Creek/Glenwood route transfers, private ski transfers, security drivers. Operated by Aspen Security LLC,',
  '> veteran and law-enforcement owned, available 24/7. Phone +1 970-452-6636. 411 E Main St, Suite 205H, Aspen, CO 81611.',
  '',
  '## Quick Facts',
  '',
  '- Fleet: Rolls-Royce Cullinan (3 passengers, the only one for chauffeured hire in Aspen), Cadillac Escalade (5 passengers), Executive Sprinter (13 passengers).',
  '- As-directed hourly rates from $200/hr (Escalade), $300/hr (Sprinter), $400/hr (Rolls-Royce); 2-hour minimum; chauffeur and fuel included; no surge pricing.',
  '- Airport transfers are flat-rate: Aspen ASE (3 miles, ~5-10 min to downtown), Eagle EGE (~70 miles, ~90 min), Rifle RIL (~60 miles, ~75 min), Denver DEN (~225 miles, ~3.5 hours).',
  '- Flight tracking, meet-and-greet and ski/luggage handling on every airport pickup. Dispatch staffed 24/7.',
  '- Memberships: Silver $1,000/mo, Gold $2,500/mo, Black $6,000/mo, including airport transfers, hourly service and a personal concierge.',
  '',
];
const llms = [
  ...header,
  ...grouped.flatMap(([section, list]) => [`## ${section}`, '',
    ...list.map(([path, m]) => `- [${shortTitle(m)}](${base}${path}): ${m.description}`), '']),
  '- [Full details (llms-full.txt)](' + base + '/llms-full.txt): every page with its FAQ answers.',
  '',
].join('\n');
await writeFile('dist/llms.txt', llms);

// llms-full.txt — the same index with each page's FAQ answers inline, so one
// fetch gives an LLM the site's factual ground truth.
const full = [
  ...header,
  ...grouped.flatMap(([section, list]) => [`## ${section}`, '',
    ...list.flatMap(([path, m]) => [`### ${shortTitle(m)}`, `URL: ${base}${path}`, '', m.description, '',
      ...(m.faqs.length ? m.faqs.flatMap(({ q, a }) => [`Q: ${q}`, `A: ${a}`, '']) : [])])]),
].join('\n');
await writeFile('dist/llms-full.txt', full);

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
const preloaded = [...pages.values()].filter(m => builtAsset(m.hero?.())).length;
console.log(`Generated metadata for ${pages.size} public pages (${preloaded} with hero preloads), ${tabletPaths.length} noindex tablet pages, llms.txt, llms-full.txt and a real 404.`);
