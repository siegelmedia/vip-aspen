import { render, cleanup } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

afterEach(cleanup);
it('keeps fallback metadata until the page commits, then marks the snapshot ready', () => {
  const pageWindow = window as Window & { prerenderReady?: boolean };
  pageWindow.prerenderReady = false;
  const fallback = document.createElement('link');
  fallback.rel = 'canonical'; fallback.href = 'https://www.vipaspen.com/about';
  fallback.setAttribute('data-seo-fallback', ''); document.head.append(fallback);
  const view = render(<HelmetProvider><SEOHead title="About" description="About VIP Aspen" keywords="Aspen" canonicalUrl="/about" /><main><h1>About VIP Aspen</h1></main></HelmetProvider>);
  expect(document.querySelectorAll('[data-seo-fallback]')).toHaveLength(0);
  expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.querySelector('main h1')?.textContent).toBe('About VIP Aspen');
  expect(pageWindow.prerenderReady).toBe(true);
  view.unmount();
  expect(pageWindow.prerenderReady).toBe(false);
});
