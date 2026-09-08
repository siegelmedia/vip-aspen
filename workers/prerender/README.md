# VIP Aspen rendering and deployment

Public site: https://www.vipaspen.com

Origin: `vip-aspen.silent-sun-bae4.workers.dev` (Worker Static Assets).
Routing Worker: `vipaspen-prerender`, on both apex and www.

## Build and validate

Keep the existing public Supabase build variables available in your local `.env`
or build environment. Never commit credentials.

```sh
npm ci
npm run build
npm test
npm exec tsc -- --noEmit -p tsconfig.app.json
node --test workers/prerender/worker.test.js
npx wrangler dev --port 8789
# In another terminal:
node scripts/check-pages.mjs
```

The build reads the same SEO metadata as React. It fails if the sitemap does not
match published page metadata. It generates `workers/prerender/routes.js`; commit
that file when routes change, and deploy both the site and routing Worker.

## Preview, deploy, verify

```sh
npx wrangler versions upload --preview-alias seo-review --keep-vars
node scripts/check-pages.mjs https://seo-review-vip-aspen.silent-sun-bae4.workers.dev Mozilla/5.0 --preview
# Inspect the browser preview, then deploy the returned version ID:
npx wrangler versions deploy VERSION_ID@100% --yes
npx wrangler deploy --config workers/prerender/wrangler.toml --keep-vars
node scripts/check-pages.mjs https://www.vipaspen.com
node scripts/check-pages.mjs https://www.vipaspen.com Googlebot
```

Preserve `PRERENDER_TOKEN` as the existing secret. Do not paste it into source.
Prerender only handles known public GET pages. Asset, missing, in-vehicle,
non-GET, and `X-Prerender` requests bypass rendering. Browser requests preserve
their body, method, and query string. Render cache keys use canonical public URLs
without tracking parameters. Rendering times out at 25 seconds, falls back to
origin on infrastructure failures, and preserves content 404/redirect responses.

When publishing content changes, refresh the corresponding Prerender snapshots.
The sitemap is registered for weekly imports and cached content expires at three
days. Prerender's daily 404 check guards against accidental soft-404 regressions.
Test with mobile Googlebot as well as desktop. User-agent tests demonstrate the
HTTP behavior; they do not prove actual Google indexing or rankings.

## Rollback baseline before September 8, 2026

Origin version: `a51b9b71-bcc1-4a5d-816d-fee572c86328`.
Routing Worker version: `74e1d2a9-16d5-49f9-82c5-1b199766bc7a`.
Use Cloudflare version rollback and restore the matching source/config together.
The earlier version returns 200 for missing pages, so rollback should only be used
to recover from a confirmed deployment problem.
