import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { dirname, basename } from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { JSDOM } from 'jsdom';

/**
 * Writes one complete HTML document per route into dist/.
 *
 * `vite build` leaves a single dist/index.html whose <div id="root"> is empty.
 * This script renders every route with the server bundle that
 * `vite build --ssr src/entry-server.tsx --outDir dist-ssr` produced, and
 * writes dist/<route>.html with the page markup inside #root and that page's
 * Helmet tags (title, description, canonical, Open Graph, JSON-LD) in <head>.
 * Googlebot, AI crawlers and first-paint visitors all get the same finished
 * page from the static host; the browser hydrates it (src/main.tsx).
 *
 * It also emits llms.txt / llms-full.txt, the noindex in-vehicle pages, a real
 * 404 page and workers/prerender/routes.js.
 */
// The server bundle imports React from node_modules at run time; without this
// Node would load React's development build (slower, and noisy about effects).
process.env.NODE_ENV ??= 'production';
const { render: renderRoute } = await import('../dist-ssr/entry-server.js');

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
  visitor.faqs = faqs;
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
// The homepage hero and FAQs live in components, not the page file.
{
  const visitor = collect('src/components/Hero.tsx', 'Company');
  visit(await source('src/components/Hero.tsx'), visitor);
  pages.get('/').hero = visitor.hero;
  const faqs = collect('src/components/HomeFAQ.tsx', 'Company');
  visit(await source('src/components/HomeFAQ.tsx'), faqs);
  pages.get('/').faqs.push(...faqs.faqs);
  assert(pages.get('/').faqs.length > 0, 'Homepage FAQs (HomeFAQ.tsx) not found');
}
const base = 'https://www.vipaspen.com';
const sitemap = new JSDOM(await readFile('public/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const paths = [...sitemap.window.document.querySelectorAll('loc')].map(el => {
  const url = new URL(el.textContent); assert.equal(url.origin, base); return url.pathname;
}).sort();
assert.deepEqual([...pages.keys()].sort(), paths, 'Every sitemap URL must have matching page metadata');
assert(notFound, 'Missing 404 metadata');
const template = await readFile('dist/index.html', 'utf8');
assert(template.includes('<div id="root"></div>'), 'dist/index.html must have an empty #root to fill');
/**
 * Renders one route to a complete HTML document: the Vite-built shell, the
 * page's Helmet head tags in place of the shell's default title, a preload for
 * its hero image, the no-JS fallback text, and the full page markup in #root.
 */
async function render(path, metadata, status = 200, noindex = false) {
  const { html, head } = await renderRoute(path);
  const dom = new JSDOM(template);
  const doc = dom.window.document;
  // Helmet's own tags replace the shell's default <title>; in the browser
  // react-helmet-async adopts them (data-rh) rather than adding duplicates.
  const defaultTitle = doc.querySelector('title');
  defaultTitle.insertAdjacentHTML('afterend', head);
  defaultTitle.remove();
  // Let the browser fetch the hero (the LCP image) before any script has run.
  const hero = builtAsset(metadata.hero?.());
  if (hero) {
    // setAttribute: jsdom's HTMLLinkElement has no `as` property, so `el.as = ...` would be dropped.
    const el = doc.createElement('link'); el.rel = 'preload'; el.setAttribute('as', 'image'); el.href = hero;
    el.setAttribute('fetchpriority', 'high'); doc.head.append(el);
  }
  // The shell's <noscript> link index was the no-JS fallback for an empty root.
  // #root now holds the whole page, so drop it: kept, it would add a second <h1>
  // and a duplicate link list for HTML-only crawlers and audit tools.
  doc.querySelector('noscript')?.remove();

  // The page must carry its own metadata and a visible body.
  assert(doc.title.includes(metadata.title.split('|')[0].trim()), `${path}: title missing from Helmet output`);
  assert.equal(doc.querySelectorAll('title').length, 1, `${path}: exactly one <title>`);
  const canonical = doc.querySelectorAll('link[rel="canonical"]');
  if (status === 200 && !noindex) {
    assert.equal(doc.querySelector('meta[name="description"]')?.content, metadata.description, `${path}: description`);
    assert.equal(canonical.length, 1, `${path}: exactly one canonical`);
    assert.equal(canonical[0].href, base + path, `${path}: canonical URL`);
    assert(doc.querySelector('script[type="application/ld+json"][data-rh]'), `${path}: page JSON-LD missing`);
  } else {
    assert.equal(canonical.length, 0, `${path}: noindex pages carry no canonical`);
    assert(/noindex/.test(doc.querySelector('meta[name="robots"]')?.content), `${path}: robots noindex missing`);
  }
  if (status === 404) assert.equal(doc.querySelector('meta[name="prerender-status-code"]')?.content, '404');
  assert(/<h1[\s>]/.test(html), `${path}: rendered page has no <h1>`);
  assert(!/opacity:\s*0[;"]/.test(html), `${path}: markup rendered invisible (framer-motion initial state leaked)`);
  // Hashed asset URLs in the server render must be the ones the client build emitted.
  for (const [, asset] of html.matchAll(/\/assets\/([A-Za-z0-9._-]+\.(?:webp|jpe?g|png|avif|svg))/g)) {
    assert(builtAssets.includes(asset), `${path}: references /assets/${asset}, which the client build did not emit`);
  }
  // Callback form: a string replacement would interpret `$&`, `$$` etc. inside the page HTML.
  return dom.serialize().replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
}
async function output(path, html) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  assert(/^dist\/[a-z0-9\/-]+\.html$/.test(file));
  await mkdir(dirname(file), { recursive: true }); await writeFile(file, html);
}
for (const [path, metadata] of pages) await output(path, await render(path, metadata));
await output('/404', await render('/404', notFound, 404));

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
for (const path of tabletPaths) await output(path, await render(path, { title: 'Summit Black Car', description: 'In-vehicle driver information.' }, 200, true));
await writeFile('workers/prerender/routes.js', '// Generated by scripts/build-static-pages.mjs.\n' +
  `export const PAGE_PATHS = new Set(${JSON.stringify(paths, null, 2)});\n`);
const preloaded = [...pages.values()].filter(m => builtAsset(m.hero?.())).length;
console.log(`Rendered ${pages.size} public pages (${preloaded} with hero preloads), ${tabletPaths.length} noindex tablet pages and a real 404 to static HTML; wrote llms.txt, llms-full.txt and workers/prerender/routes.js.`);
// The rendered app pulls in browser libraries (supabase-js among them) that
// leave timers running in Node; nothing is pending, so end the process here.
process.exit(0);
