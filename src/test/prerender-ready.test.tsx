import { render, cleanup, waitFor } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

afterEach(cleanup);
it('adopts the build-time head tags without duplicating them, then marks the snapshot ready', async () => {
  const pageWindow = window as Window & { prerenderReady?: boolean };
  pageWindow.prerenderReady = false;
  // What scripts/build-static-pages.mjs puts in <head>: Helmet's own server output.
  const prerendered = document.createElement('link');
  prerendered.rel = 'canonical'; prerendered.href = 'https://www.vipaspen.com/about';
  prerendered.setAttribute('data-rh', 'true'); document.head.append(prerendered);
  const view = render(<HelmetProvider><SEOHead title="About" description="About VIP Aspen" keywords="Aspen" canonicalUrl="/about" /><main><h1>About VIP Aspen</h1></main></HelmetProvider>);
  expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe('https://www.vipaspen.com/about');
  expect(document.querySelector('main h1')?.textContent).toBe('About VIP Aspen');
  // Readiness is flagged two animation frames after commit (see SEOHead), so it is async.
  await waitFor(() => expect(pageWindow.prerenderReady).toBe(true));
  view.unmount();
  expect(pageWindow.prerenderReady).toBe(false);
});
