import { PAGE_PATHS } from './routes.js';

const BOT_AGENTS = [
  "googlebot",
  "yahoo! slurp",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest/0.",
  "developers.google.com/+/web/snippet",
  "slackbot",
  "vkshare",
  "w3c_validator",
  "redditbot",
  "applebot",
  "whatsapp",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "pinterestbot",
  "bitrix link preview",
  "xing-contenttabreceiver",
  "chrome-lighthouse",
  "telegrambot",
  "google-inspectiontool",
  // AI answer engines / LLM search crawlers — serve them rendered HTML so VIP Aspen
  // can be read and cited in AI search results instead of seeing an empty JS shell.
  "gptbot",
  "oai-searchbot",
  "chatgpt-user",
  "perplexitybot",
  "perplexity-user",
  "claudebot",
  "anthropic-ai",
  "claude-web",
  "claude-user",
  "google-extended",
  "amazonbot",
  "applebot-extended",
  "youbot",
  "duckassistbot",
  "cohere-ai",
  "meta-externalagent",
  "bingbot-llm",
];

/**
 * Permanent redirects for retired pages. Private entertainment and promotional
 * staffing were removed from the site in Aug 2026; these 301s pass their link
 * equity to the closest live page instead of leaking it into 404s.
 * Keep in sync with RETIRED_ROUTES in src/App.tsx.
 */
const REDIRECTS = {
  "/private-entertainment": "/aspen-clubs",
  "/promotional-services": "/special-event-transportation",
  "/talent": "/aspen-clubs",
};

function isBot(userAgent) {
  const ua = (userAgent || "").toLowerCase();
  return BOT_AGENTS.some((bot) => ua.includes(bot));
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    const url = new URL(request.url);

    const path = url.pathname.replace(/\/+$/, '') || '/';
    const redirectTarget = Object.hasOwn(REDIRECTS, path) ? REDIRECTS[path] : null;
    if (['GET', 'HEAD'].includes(request.method) &&
        (url.protocol !== 'https:' || url.hostname !== 'www.vipaspen.com' || redirectTarget ||
         (PAGE_PATHS.has(path) && path !== url.pathname))) {
      return Response.redirect('https://www.vipaspen.com' + (redirectTarget || path) + url.search, 301);
    }
    // Preserve methods, request bodies and visitor queries; never let a // path
    // turn into a request to an unrelated host.
    const upstreamUrl = new URL(env.UPSTREAM_URL);
    upstreamUrl.pathname = url.pathname; upstreamUrl.search = url.search;
    const origin = () => fetch(new Request(upstreamUrl, request));
    // Only published, indexable GET routes need rendering. X-Prerender prevents
    // the rendering browser from recursively requesting itself.
    if (request.method !== 'GET' || request.headers.has('X-Prerender') ||
        !PAGE_PATHS.has(url.pathname) || !env.PRERENDER_TOKEN ||
        !(isBot(userAgent) || url.searchParams.has('_escaped_fragment_'))) {
      return origin();
    }
    // Public pages do not vary by tracking parameters. One canonical cache key.
    const prerenderUrl = `https://service.prerender.io/https://www.vipaspen.com${url.pathname}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          "X-Prerender-Token": env.PRERENDER_TOKEN,
          "User-Agent": userAgent,
          "X-Prerender-Int-Type": "CloudFlare",
        },
        redirect: "manual",
        signal: controller.signal,
      });
      if (prerenderResponse.status >= 500 || [401, 403, 408, 429].includes(prerenderResponse.status)) {
        console.warn({ event: 'prerender_fallback', reason: 'http_error', status: prerenderResponse.status });
        await prerenderResponse.body?.cancel();
        return origin();
      }
      // Preserve content 404s and redirects instead of turning them into 200s.
      return prerenderResponse;
    } catch {
      console.warn({ event: 'prerender_fallback', reason: controller.signal.aborted ? 'timeout' : 'network_error' });
      return origin();
    } finally {
      clearTimeout(timeout);
    }
  },
};
