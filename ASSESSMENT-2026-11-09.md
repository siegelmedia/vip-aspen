# VIP Aspen — Full Assessment (Website, SEO, AEO, UI/Design)

**Date:** 2026-11-09 · **Site:** https://www.vipaspen.com · **Scope:** live production site, codebase, search landscape, off-site presence

---

## 1. Executive summary

The website itself is in good shape. The design is cohesive and premium, the content is deep (40 indexable pages, long-form copy, FAQ and Service schema on every page), the technical SEO plumbing (static per-route meta, Prerender.io for bots, clean canonicals, 40/40 URLs returning 200) works, and Lighthouse scores SEO 92 / Accessibility 98.

**The lack of traction is not a website-quality problem. It is a leak-and-authority problem:**

1. **The two lead forms on the live site are broken.** The production bundle still carries the placeholder Supabase URL, so every booking inquiry and contact-form submission fails silently. Anyone who did find the site and tried to reach out through a form got nothing. This has been true since at least September 5.
2. **Nothing is measured.** GA4 fires pageviews only. There are no events for phone taps, widget submissions, form sends or WhatsApp clicks, so there is no way to know whether traffic converts.
3. **VIP Aspen has no off-site existence.** No Google Business Profile, zero reviews on any platform, zero backlinks or third-party mentions, not in the Aspen Chamber directory, WeddingWire, The Knot, Yelp, TripAdvisor, colorado.com or FlightAware's KASE ground-transport list. The @vipaspen Instagram has 57 followers and has been dormant since January 2023.
4. **Google has indexed only about 10 of the 40 pages**, and the homepage does not appear on page 1 for the branded query "VIP Aspen car service Aspen CO".
5. **The brand is split.** The same owner and fleet operate as **Summit Black Car** (summitblackcar.com), which already has a Google Business Profile, Google sitelinks and an AI Overview, a 2.6K-follower Instagram, Yelp, The Knot and local editorial coverage. Its Instagram posts advertise "the ONLY Rolls-Royce in Aspen" and tell people to book at vipaspen.com. VIP Aspen is a second brand with none of that authority, using a different phone number, while the BBB listing for Aspen Security LLC uses a third phone number and a different suite letter.

Fixing items 1 and 2 takes a day. Items 3 to 5 are the real work and are mostly owner tasks, not code.

---

## 2. What I checked

- Live HTML as a human and as 16 crawler user agents (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, ClaudeBot, GPTBot, Applebot, Google-Extended, facebookexternalhit, Twitterbot, LinkedInBot, DuckDuckBot, meta-externalagent)
- Prerender.io snapshot quality (title, H1, word count, schema, hidden elements)
- Production JS bundles for the Supabase configuration
- All 40 sitemap URLs, robots.txt, redirects, 404 handling, response headers
- Lighthouse mobile audit (local run, simulated throttling)
- Browser walkthrough of the homepage and a service page at desktop and 375px mobile widths, including the booking widget
- Google and DuckDuckGo results for `site:vipaspen.com`, the brand name and "Summit Black Car Aspen"
- A research pass over 10 target keyword SERPs, competitor review counts, directories and roundups
- Codebase: SEO head, schema generation, data files, analytics, trust constants, imagery

---

## 3. Findings by area

### 3.1 Critical traction leaks (fix first)

| # | Finding | Evidence | Fix |
|---|---|---|---|
| C1 | **Booking inquiry and contact forms fail on production** | Prod chunk `client-CBN7AVtD.js` contains `placeholder.supabase.co`; local build contains the real project URL. Forms call `supabase.functions.invoke` and fail. | Set `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID` as **build-time** variables on the Cloudflare `vip-aspen` Worker, redeploy, then submit both forms end to end. Add a visible error with the phone number if a submit fails. |
| C2 | **No conversion tracking** | `gtag` appears only in `index.html` config; no `gtag('event', …)` anywhere in `src/`. | Add GA4 events: `tel:` clicks, `mailto:`, WhatsApp, contact-form submit, booking-inquiry submit, and BookRidesOnline widget step changes (the iframe already posts height messages; add a step message). Mark them as conversions in GA4. |
| C3 | **Zero trust signals on site** | No testimonials, no review stars, no founder names or photos, `REVIEWS` and `CREDENTIALS` constants still null. `public/andrewheadshot.jpg` and `austinheadshot.jpg` exist but are unused. About page names no one. | See §4, weeks 2–4. |

### 3.2 Search visibility and authority

| # | Finding | Evidence |
|---|---|---|
| S1 | **Partial Google indexation**: ~10 of 40 URLs | Google `site:vipaspen.com` returns "10 results". Indexed: cadillac-escalade, aspen-clubs, eagle-airport-transfer, special-event-transportation, rolls-royce-cullinan, rifle-airport-transfer, multi-day-chauffeur, aspen-airport-transfer, aspen-private-jet-transfer, denver-to-aspen-car-service. **Not indexed:** homepage, all 7 guides, Vail/Beaver Creek/Glenwood routes, hotel pages, security pages, rates, about, contact. DuckDuckGo (Bing index) does list the homepage, membership, contact, rates, guides and more, so the pages are crawlable; Google is choosing not to index them, which is a quality/authority signal, not a technical block. |
| S2 | **Brand query fails** | "VIP Aspen car service Aspen CO" on Google: page 1 shows TripAdvisor, Instagram posts from @summitblackcar, Aspen Star Limo, Yelp, The Knot. vipaspen.com is absent. |
| S3 | **No Google Business Profile** for VIP Aspen; no local pack presence | No listing surfaced for "VIP Aspen", the phone number or the 411 E Main St address. Local-intent queries ("Aspen airport car service", "Aspen black car") are decided by the map pack, which VIP Aspen cannot enter without a GBP. |
| S4 | **Zero reviews, zero mentions, zero listings** | Competitors: High Mountain Taxi 871 reviews, Detailed Drivers 178, Aspen Way To Go 70, Aspen Limo Services ~45, Mr Chauffeur 38. VIP Aspen: 0. Not in Aspen Chamber directory (Aspen Transportation Co, Aspen Limo Services, Aspen Luxury Limo are), WeddingWire Aspen limos (13 vendors listed, VIP Aspen not one), The Knot, Yelp, TripAdvisor, colorado.com, FlightAware KASE services, BBB limo category. |
| S5 | **Open SERPs nobody owns** | "Rolls Royce chauffeur Aspen": no Aspen operator ranks. "Aspen security driver": zero Aspen results. "Executive protection Aspen": the #1 result is the BBB page for Aspen Security LLC, the sister company, which links to aspensecurity.com, not vipaspen.com. These are VIP Aspen's two genuinely unique differentiators and the terms are empty. |
| S6 | **Route SERPs owned by Vail operators** | Blue Sky Limo holds ~4 of the top 10 for "Vail to Aspen car service" with ~30 route pages, published seasonal prices ($750 winter Vail–Aspen, DEN from $1,250), founding year, awards, Trustpilot and chamber memberships. |

### 3.3 Brand and entity consistency (strategic)

| # | Finding |
|---|---|
| B1 | **Summit Black Car** (summitblackcar.com) is the same ownership and fleet. Google gives it sitelinks and an AI Overview citing summitblackcar.com, Instagram, Yelp, The Knot and "Best of Summit". Its Instagram (2.6K followers) posts "Reserve the ONLY Rolls-Royce in Aspen 970-485-3494" and "BOOK TODAY www.vipaspen.com". VIP Aspen gets the clicks but none of the entity authority. |
| B2 | **Three phone numbers and two suite letters** across the group: vipaspen.com uses (970) 452-6636 and Suite 205H; Summit Black Car uses (970) 485-3494; Aspen Security LLC's BBB profile uses (970) 458-5644 and Suite 205I. Google's entity graph treats this as three unrelated businesses. |
| B3 | **The hidden `/summit-blackcar` tablet pages** on vipaspen.com carry founder bios (Andrew Siegel, former Colorado State Trooper, dignitary-protection certified; Austin Dvorak; Tony Maurina; Esteban Ortega). This is exactly the E-E-A-T content the public About page lacks. |

### 3.4 AEO (answer-engine) readiness

| # | Finding | Evidence | Fix |
|---|---|---|---|
| A1 | **Cloudflare "block AI bots" is on** | Live robots.txt has a Cloudflare-managed block disallowing GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, CCBot, Bytespider, Amazonbot and ~20 others. GPTBot and ClaudeBot get **403** at the edge. | Search-mode agents (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-User) still get 200 with full prerendered HTML, so live AI search can read the site today. But the training crawlers are blocked, so VIP Aspen will never enter model knowledge, and Google-Extended being blocked removes the site from Gemini grounding. For a business that needs attention, turn this off in Cloudflare (AI Crawl Control / managed robots.txt). |
| A2 | **robots.txt is invalid** | Lighthouse: "robots.txt is not valid, 1 error". The managed block plus the site's own block produce two `User-agent: *` groups and non-standard `Content-Signal` lines. | Disabling the managed robots.txt fixes it. |
| A3 | **Prerender worker misses some AI/search bots** | Claude-SearchBot and DuckDuckBot got the 531-word JS shell, not the 1,665-word snapshot. | Add `claude-searchbot`, `duckduckbot`, `amazonbot`, `cohere`, `youbot`, `mistral` to `BOT_AGENTS` in `workers/prerender/worker.js` and redeploy the worker. |
| A4 | **Snapshots capture animations mid-fade** | Googlebot snapshot of /aspen-airport-transfer has 21 elements at `opacity: 0`; the homepage H1 is captured at `opacity: 0; transform: translateY(10px)`. `whileInView` blocks never trigger in a headless capture. | When the UA contains "Prerender", wrap the app in framer-motion `MotionConfig reducedMotion="always"` (or skip animations entirely). Then recache Prerender.io. |
| A5 | **No quotable fact blocks** | Guides and route pages are prose-first. AI engines lift short, structured facts (distance, drive time, price from, airports, response time). | Add a "Quick facts" table near the top of every airport, route and vehicle page, and a one-paragraph direct answer under each H1. |
| A6 | **No entity linkage** | Organization schema `sameAs` lists only Instagram and Facebook (the Facebook URL could not be confirmed to exist). No link to Summit Black Car, Aspen Security, LinkedIn, Yelp, BBB. Organization `logo` points at `favicon-192.png`, a cropped white "VIP ASPE" on a transparent background. No `founder`, `foundingDate`, or Person schema. | Replace the logo with a proper square PNG on a solid background; add `sameAs` to every real profile; add `founder` (Person) with the tablet-page bios; add `parentOrganization` or `brand` linkage to Summit Black Car once the brand decision is made. |
| A7 | **No llms.txt** | /llms.txt returns 404. Low cost, modest upside. | Generate it from the sitemap during `prebuild`. |

### 3.5 Technical SEO and performance

| # | Finding | Evidence | Fix |
|---|---|---|---|
| T1 | **Mobile performance 72** | Lighthouse mobile (home): FCP 3.1s, LCP 5.4s, TTI 7.6s, CLS 0, TBT 80ms. LCP element is the hero webp. | Preload the hero image (`<link rel="preload" as="image">` in the static HTML, est. 440ms), move Google Fonts off the critical path or self-host them (est. 600ms), shorten the staged hero entrance delays (currently up to 1.1s). |
| T2 | **No responsive images** | `srcset` is used nowhere. The 1600w hero is sent to 375px phones; 1.6MB of images load on the homepage. Lighthouse: 654KB savings from sizing, 713KB from delivery. | Extend `scripts/optimize-images.mjs` to emit 640/1024/1600 variants and add `srcset`/`sizes` to `PageHero`, `Hero`, cards and guide images. |
| T3 | **Titles and descriptions over length** | 11 titles exceed 65 characters once " \| VIP Aspen" is appended (aspen-winter-travel 83, snowmass-village-transfer 82, aspen-events-calendar 81, corporate-transportation 80, cadillac-escalade 75, wedding 75). 15 descriptions exceed 160 (rolls-royce-cullinan 255, executive-sprinter 250, aspen-events-calendar 233, denver 232). | Trim. Lead each description with the answer and the differentiator, not the phone number. |
| T4 | **Heading order** | Lighthouse flags non-sequential headings. | Minor. Check templates for H3s following H1s. |
| T5 | Everything else is healthy | 40/40 URLs return 200 as human and bot; non-www → www 301; real 404s with `prerender-status-code`; single canonical/description/OG per page; static per-route meta from `build-static-pages.mjs`; immutable asset caching; security headers present; zero console errors. | Keep. |

### 3.6 UI and design

**What works.** The visual system is genuinely premium and consistent: dark palette with restrained gold, Space Grotesk display type, mono eyebrows, real photography of the actual fleet (the three-vehicle tarmac hero is the strongest asset on the site), balanced mega menus, clean mobile layout with no horizontal overflow, Accessibility 98. The homepage flow (hero → areas → services → fleet → process → why → airports → guides → booking → FAQ → CTA) is logical. This is not a redesign situation.

**What hurts conversion.**

| # | Finding | Evidence | Fix |
|---|---|---|---|
| U1 | **Booking widget breaks the brand and leaves a dead zone** | The BookRidesOnline widget renders as a white Bootstrap form with a "Menu / Login" bar inside the dark luxury page. The iframe is sized to 1,819px on desktop and 1,184px on mobile; scrolling past the form shows a full viewport of empty black before the FAQ. | Inject a dark theme into `booking-widget.html` and hide the Menu/Login bar; measure the widget's real content height rather than its document height. Better: a native 4-field "Get a quote" form (route, date, passengers, phone) on every page, with the full widget on a dedicated `/book` page. |
| U2 | **No social proof anywhere on the page** | A high-net-worth buyer or their assistant sees claims ("Aspen's #1", "Aspen's Only Full-Service Luxury Concierge") with nothing behind them. Competitors show 178-review widgets, "since 2002", chamber badges, on-time guarantees. | Add a review strip (once reviews exist), founder section with photos and the law-enforcement background, licensing/insurance line, and two or three real client quotes. Replace unverifiable superlatives with verifiable facts. |
| U3 | **Hero copy is invisible for the first second** | Staged framer-motion delays of 0.2–1.1s. On mobile the first paint is the photo plus a black void until the headline fades in (captured in screenshots). | Cut first-fold animation to ≤300ms, opacity only, or none on mobile. |
| U4 | **No "text us" or floating contact on mobile** | WhatsApp exists only on the Contact page. HNW clients and concierges text. The header "Call" button disappears on scroll into the hamburger only. | Sticky bottom bar on mobile: Call · Text/WhatsApp · Quote. |
| U5 | **No price anchors where decisions happen** | /rates exists, but airport and route pages never say "from $X". Blue Sky and Detailed Drivers publish flat rates and win the comparison click. | Add "From $" flat rates to the four airport pages and four route pages (needs owner numbers). |
| U6 | **Positioning is diluted** | The hero sells "VIP Concierge" and "velvet rope" nightlife alongside executive protection and airport transfers. | Lead with the two things nobody else in the valley can say: law-enforcement-owned security drivers and the only Rolls-Royce Cullinan for hire in Aspen. Keep club access as a secondary service. |
| U7 | **OG image and logo** | `og-image.jpg` is an AI-rendered Cullinan with no text or branding; schema logo is the cropped favicon. | Make a branded 1200×630 OG image from the real fleet photo with the wordmark; export a proper square logo. |

---

## 4. Prioritized plan

### Week 1 — stop the leaks (about one developer day plus owner admin)

1. **Set the three Supabase build variables** on the Cloudflare Worker, redeploy, test both forms with a real submission. (C1)
2. **Add GA4 conversion events** for calls, forms, WhatsApp and widget steps. (C2)
3. **Create the Google Business Profile** for VIP Aspen at 411 E Main St (categories: Limousine service, Car service, Security guard service), with the real fleet photos. Reconcile suite letter and phone across the site, BBB and Instagram. Create Bing Places and Apple Business Connect at the same time. (S3, B2)
4. **Turn off Cloudflare's AI-bot block and managed robots.txt.** (A1, A2)
5. **Prerender fixes:** add the missing bots, disable animations for the Prerender UA, redeploy the worker, recache Prerender.io. (A3, A4)
6. **Google Search Console:** check Pages → "Crawled, currently not indexed" for the 30 missing URLs, request indexing on the top 10 (homepage, guides, routes), resubmit the sitemap. Add the site to Bing Webmaster Tools and enable IndexNow. (S1)

### Weeks 2–4 — build trust and authority

7. **Decide the brand relationship.** Recommended: present VIP Aspen as "the Aspen division of Summit Black Car", cross-link both sites in footers and schema (`sameAs`, `parentOrganization`), unify phone handling, and have the @summitblackcar Instagram link vipaspen.com consistently for Aspen content. Either revive @vipaspen with the same cadence or retire it. (B1)
8. **Reviews engine.** Text every client a Google review link after the ride; target 25 reviews in 60 days. Once there are 5+, fill `REVIEWS` in `constants.ts` to activate AggregateRating and add a review strip to the homepage and service pages. (S4, U2)
9. **Founders and E-E-A-T.** Publish the founder section on /about using the existing headshots and the tablet-page bios, with Person schema. Add the Colorado security license number and insurance line. (C3, A6)
10. **Listings.** Aspen Chamber Resort Association membership, colorado.com, Yelp, TripAdvisor, FlightAware KASE ground transportation, WeddingWire and The Knot (Aspen), Thumbtack, BBB (Aspen limo category). Each is a citation that Google and AI engines use to resolve the entity. (S4)
11. **Concierge outreach.** A one-page PDF for the Little Nell, Hotel Jerome, St. Regis, W Aspen, Limelight and Viceroy Snowmass concierge desks and the Atlantic Aviation FBO. These pages already exist on the site; the relationship does not.
12. **Performance pass:** preload hero, srcset, fonts, shorter animations. Target LCP under 2.5s on mobile. (T1, T2, U3)
13. **Booking UX:** theme or replace the widget, add the mobile sticky Call/Text bar, add "From $" anchors. (U1, U4, U5)

### Months 2–3 — capture demand for the winter season

14. **Own the empty SERPs:** a Rolls-Royce experiences page (proposals, anniversaries, weddings, arrivals), and expand the security cluster (secure transport, VIP security details, event security driving). (S5)
15. **Seasonal event pages:** X Games (Jan 2027), Gay Ski Week, Wintersköl, Ideas Festival; hotel pages for Limelight, W Aspen, The Gant, Viceroy Snowmass; Basalt/Carbondale route page.
16. **One honest comparison guide** ("Aspen car service options compared: Uber, shuttles, taxis, private chauffeur") and refresh the six existing guides with Quick-facts tables and current dates. (A5)
17. **Local PR:** the story is already there (former State Trooper-owned, the only Cullinan for hire in Aspen). Pitch the Aspen Times and Aspen Daily News, and local podcasts and newsletters. Summit Black Car already earned "Best of Summit" coverage; replicate in Aspen.
18. **Paid, only after steps 1–2:** Google Ads on "Aspen airport car service" and "Denver to Aspen car service" for December–March, plus Instagram ads geo-targeted to people physically in Aspen/Snowmass. Without working forms and tracking, paid spend is wasted.

---

## 5. Needs owner input (cannot be built from the code)

- Real Google rating and review count (to activate review schema)
- Colorado PUC/CPUC permit number and security license number
- Year founded (VIP Aspen and Summit Black Car)
- Flat-rate prices for ASE, EGE, RIL, DEN and the Vail/Beaver Creek/Glenwood routes
- Escalade model year (homepage says 2026; vehicle page states none)
- Brand decision on VIP Aspen vs Summit Black Car, and the one phone number to publish
- Confirmation that facebook.com/vipaspen exists (it is linked in the schema but could not be verified)

---

## 6. Raw measurements

| Metric | Value |
|---|---|
| Sitemap URLs | 40, all 200 |
| Google indexed (site:) | ~10 |
| Google brand query page 1 | not present |
| Lighthouse mobile (home) | Perf 72 · A11y 98 · BP 79 · SEO 92 |
| FCP / LCP / TTI (mobile, simulated) | 3.1s / 5.4s / 7.6s |
| Homepage transfer | 1.8MB, of which 1.6MB images |
| Prerender snapshot word count (service page) | 1,665 words to bots vs 531 to JS shell |
| Elements at opacity 0 in snapshot | 21 |
| GA4 conversion events | 0 |
| Reviews (all platforms) | 0 |
| Third-party mentions / backlinks found | 0 |
| @vipaspen Instagram | 57 followers, last post Jan 2023 |
| @summitblackcar Instagram | 2.6K followers, active |
| Forms working in production | No |
