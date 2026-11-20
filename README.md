# VIP Aspen

Premier luxury car service in Aspen, Colorado. Chauffeured Rolls Royce Cullinan, Cadillac Escalade, and Executive Sprinter with professional chauffeurs.

## Tech Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS + shadcn/ui
- Framer Motion
- Supabase (contact form)

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

`npm run build` runs three steps:

1. `vite build` — the browser bundle, into `dist/`.
2. `vite build --ssr src/entry-server.tsx --outDir dist-ssr` — a Node bundle of
   the same app that can render any route to a string.
3. `node scripts/build-static-pages.mjs` — renders every sitemap route (plus the
   noindex in-vehicle pages and a real 404) with that bundle and writes one
   complete `dist/<route>.html` per page: the full page markup inside
   `<div id="root">` and that page's own `<head>` (title, description, canonical,
   Open Graph, Twitter, JSON-LD `@graph`) from react-helmet-async, plus a preload
   for the hero image. It also writes `dist/llms.txt`, `dist/llms-full.txt` and
   `workers/prerender/routes.js`.

Every public route is therefore static HTML at the edge. Googlebot, AI crawlers
and visitors all receive the same finished page; the browser bundle then
hydrates it (`src/main.tsx` uses `hydrateRoot` when `#root` already has content,
`createRoot` on the empty dev-server page).

Two things make the server render and the hydration render agree:

- `src/components/layout/HydrationGate.tsx` resolves framer-motion entrance
  states (`initial={{ opacity: 0 }}`) to their targets during the server render
  and the hydration pass, so the static HTML is visible and nothing jumps when
  React attaches. The gate lifts once the hydrated route has committed, so
  pages reached by in-app navigation animate exactly as before. The trade-off:
  the first page a visitor lands on no longer plays its entrance fade.
- The BookRidesOnline iframe (`src/components/BookingWidget.tsx`) is client-only.
  The static HTML carries an empty box of the same size, and the iframe is
  mounted after hydration, so crawlers never load the AngularJS widget.

`src/test/ssr.test.tsx` renders routes through `src/entry-server.tsx` and guards
these properties; the build script also fails if a page renders without an
`<h1>`, with an `opacity: 0` style, or with an asset URL the browser bundle did
not emit.

## Deployment

The public domain uses the `vipaspen-prerender` Cloudflare Worker, which
canonicalises the host, issues the 301s for retired pages, and proxies requests
to the `vip-aspen` Worker Static Assets deployment (the `dist/` folder). The
legacy Pages project is not the current origin.

The Worker can still send listed crawler user agents to Prerender.io, but since
the static HTML already contains the full page this is optional: Prerender now
snapshots a page that is complete before any script runs. Removing the
`PRERENDER_TOKEN` secret makes the Worker serve the static HTML to everyone.

See [deployment and validation instructions](workers/prerender/README.md).
