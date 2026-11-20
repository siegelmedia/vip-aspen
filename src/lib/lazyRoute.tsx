import { lazy } from "react";
import type { ComponentType } from "react";

type PageModule = { default: ComponentType };
const loaders = new Map<string, () => Promise<PageModule>>();
const preloaded = new Map<string, ComponentType>();

/**
 * A route component that is lazy in the browser and eager at build time.
 *
 * In the browser every page except the homepage is a React.lazy chunk, so a
 * visitor downloads one page's template and copy. The build-time server render
 * (src/entry-server.tsx) cannot wait for a chunk — renderToString would emit the
 * Suspense fallback — so it calls preloadRoutes() first and the same component
 * then renders the resolved page synchronously. Call at module scope, once per
 * route, so neither the lazy wrapper nor the component is re-created per render.
 */
export function lazyRoute(key: string, load: () => Promise<PageModule>): ComponentType {
  loaders.set(key, load);
  const Lazy = lazy(load);
  return function RoutePage() {
    const Eager = preloaded.get(key);
    return Eager ? <Eager /> : <Lazy />;
  };
}

/** Resolves every route's chunk and data so the next render needs no Suspense. Server only. */
export async function preloadRoutes(): Promise<void> {
  await Promise.all(
    [...loaders].map(async ([key, load]) => {
      preloaded.set(key, (await load()).default);
    }),
  );
}
