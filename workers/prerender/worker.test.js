import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './worker.js';
const env = { UPSTREAM_URL: 'https://origin.example', PRERENDER_TOKEN: 'test-token' };
const request = (path, init = {}) => new Request('https://www.vipaspen.com' + path, { headers: { 'User-Agent': 'Googlebot' }, ...init });
test('canonical redirects preserve query and skip rendering', async () => {
  for (const [from, to] of [['/private-entertainment','/aspen-clubs'], ['/promotional-services','/special-event-transportation'], ['/talent','/aspen-clubs'], ['/about/','/about']]) {
    const r = await worker.fetch(request(from + '?utm_source=test'), env);
    assert.equal(r.status, 301); assert.equal(r.headers.get('location'), 'https://www.vipaspen.com' + to + '?utm_source=test');
  }
  assert.equal((await worker.fetch(new Request('http://www.vipaspen.com/about'), env)).headers.get('location'), 'https://www.vipaspen.com/about');
});
test('render only known public pages, without tracking query', async t => {
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    assert.equal(url, 'https://service.prerender.io/https://www.vipaspen.com/about');
    assert.equal(init.headers['X-Prerender-Token'], 'test-token');
    assert.equal(init.redirect, 'manual');
    return new Response('rendered');
  });
  assert.equal(await (await worker.fetch(request('/about?brid=test'), env)).text(), 'rendered');
});
test('invalid paths, assets, tablet pages, renderer and HEAD bypass Prerender', async t => {
  t.mock.method(globalThis, 'fetch', async req => {
    assert.equal(new URL(req.url).origin, env.UPSTREAM_URL);
    return new Response('origin');
  });
  for (const req of [request('/missing'), request('/service/.env'), request('/sitemap.xml'), request('/summit-blackcar'), request('/about', { method: 'HEAD' }), request('/about', { headers: { 'User-Agent': 'Googlebot', 'X-Prerender': '1' } }), request('//example.net/path')]) {
    assert.equal(await (await worker.fetch(req, env)).text(), 'origin');
  }
});
test('origin keeps visitor body, method and query', async t => {
  t.mock.method(globalThis, 'fetch', async req => {
    assert.equal(req.url, 'https://origin.example/about?utm_source=test');
    assert.equal(req.method, 'POST'); assert.equal(await req.text(), 'message=example');
    return new Response('ok');
  });
  await worker.fetch(request('/about?utm_source=test', { method: 'POST', body: 'message=example' }), env);
});
test('outage fallback and content status preservation', async t => {
  for (const status of [200, 301, 404, 410, 401, 403, 429, 500, 503]) {
    const mock = t.mock.method(globalThis, 'fetch', async req => typeof req === 'string' ? new Response('rendered', { status }) : new Response('origin'));
    const r = await worker.fetch(request('/about'), env);
    const fallback = status >= 500 || [401,403,429].includes(status);
    assert.equal(r.status, fallback ? 200 : status);
    assert.equal(await r.text(), fallback ? 'origin' : 'rendered');
    mock.mock.restore();
  }
});
