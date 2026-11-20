import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { AppProviders, AppRoutes } from "./App";
import { preloadRoutes } from "./lib/lazyRoute";

/**
 * Build-time server render.
 *
 * Bundled by `vite build --ssr src/entry-server.tsx --outDir dist-ssr` and
 * called from scripts/build-static-pages.mjs once per route, so every
 * dist/<route>.html ships with the full page in `<div id="root">` and that
 * page's Helmet tags in `<head>`. The browser then hydrates the markup
 * (src/main.tsx) instead of rendering from an empty root.
 */
export interface RenderedPage {
  /** The page markup, to be placed inside `<div id="root">`. */
  html: string;
  /** Title, meta, link and JSON-LD script tags from Helmet, as HTML. */
  head: string;
}

let routesReady: Promise<void> | undefined;

export async function render(path: string): Promise<RenderedPage> {
  // renderToString cannot wait for React.lazy chunks, so resolve them all once.
  routesReady ??= preloadRoutes();
  await routesReady;

  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <AppProviders>
        <StaticRouter location={path}>
          <AppRoutes hydrating />
        </StaticRouter>
      </AppProviders>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((tags) => tags.toString()).join("\n")
    : "";
  return { html, head };
}
