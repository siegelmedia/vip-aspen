// @vitest-environment node
// Under jsdom react-helmet-async takes its browser path and never fills the
// server context, so this file runs where the build script does: plain Node.
import { describe, expect, it } from 'vitest';
import { render } from '../entry-server';

/**
 * The build-time server render (scripts/build-static-pages.mjs calls this for
 * every route). These guard the properties the static HTML exists for: a
 * complete, visible page body and that page's own head tags.
 */
describe('server render', () => {
  it('renders a data-driven page with its content visible and its Helmet head', async () => {
    const { html, head } = await render('/snowmass-village-transfer');
    expect(html).toMatch(/<h1[\s>]/);
    expect(html).toContain('Snowmass Village');
    // framer-motion entrance states must resolve to their targets, not opacity: 0.
    expect(html).not.toMatch(/opacity:\s*0[;"]/);
    expect(head).toMatch(/<title[^>]*>Snowmass Village Car Service/);
    expect(head).toContain('rel="canonical" href="https://www.vipaspen.com/snowmass-village-transfer"');
    expect(head).toContain('type="application/ld+json"');
  });

  it('keeps the booking iframe out of the static markup', async () => {
    const { html } = await render('/');
    expect(html).toMatch(/<h1[\s>]/);
    expect(html).not.toContain('<iframe');
  });

  it('renders the 404 page for unknown routes', async () => {
    const { html, head } = await render('/404');
    expect(html).toContain('Page');
    expect(head).toContain('name="robots" content="noindex, nofollow"');
    expect(head).toContain('name="prerender-status-code" content="404"');
    expect(head).not.toContain('rel="canonical"');
  });
});
