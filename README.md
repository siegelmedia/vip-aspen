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

## Deployment

The public domain uses the `vipaspen-prerender` Cloudflare Worker, which proxies
visitors to the `vip-aspen` Worker Static Assets deployment and sends supported
crawlers to Prerender. The legacy Pages project is not the current origin.

`npm run build` generates initial metadata for every sitemap route, noindex
in-vehicle pages, real 404 HTML, and the Prerender route allowlist. The full page
body still renders with React; this is not a full static-rendering migration.

See [deployment and validation instructions](workers/prerender/README.md).
