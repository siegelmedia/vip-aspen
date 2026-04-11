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
];

const STATIC_EXTENSIONS = [
  ".js", ".css", ".xml", ".less", ".png", ".jpg", ".jpeg", ".gif",
  ".pdf", ".doc", ".txt", ".ico", ".rss", ".zip", ".mp3", ".rar",
  ".exe", ".wmv", ".avi", ".ppt", ".mpg", ".mpeg", ".tif", ".wav",
  ".mov", ".psd", ".ai", ".xls", ".mp4", ".m4a", ".swf", ".dat",
  ".dmg", ".iso", ".flv", ".m4v", ".torrent", ".ttf", ".woff",
  ".woff2", ".svg", ".webp", ".webm", ".avif",
];

function isBot(userAgent) {
  const ua = (userAgent || "").toLowerCase();
  return BOT_AGENTS.some((bot) => ua.includes(bot));
}

function isStaticFile(url) {
  const pathname = new URL(url).pathname.toLowerCase();
  return STATIC_EXTENSIONS.some((ext) => pathname.endsWith(ext));
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    const url = new URL(request.url);

    if (!isBot(userAgent) || isStaticFile(url.href)) {
      const upstreamUrl = new URL(url.pathname + url.search, env.UPSTREAM_URL);
      const upstreamRequest = new Request(upstreamUrl.toString(), {
        method: request.method,
        headers: request.headers,
      });
      return fetch(upstreamRequest);
    }

    const prerenderUrl = `https://service.prerender.io/${url.toString()}`;

    try {
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          "X-Prerender-Token": env.PRERENDER_TOKEN,
          "User-Agent": userAgent,
        },
        redirect: "manual",
      });

      if (prerenderResponse.status >= 400) {
        const upstreamUrl = new URL(url.pathname + url.search, env.UPSTREAM_URL);
        return fetch(new Request(upstreamUrl.toString(), {
          method: request.method,
          headers: request.headers,
        }));
      }

      const response = new Response(prerenderResponse.body, {
        status: prerenderResponse.status,
        headers: prerenderResponse.headers,
      });

      return response;
    } catch (e) {
      const upstreamUrl = new URL(url.pathname + url.search, env.UPSTREAM_URL);
      return fetch(new Request(upstreamUrl.toString(), {
        method: request.method,
        headers: request.headers,
      }));
    }
  },
};
