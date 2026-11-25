# VIP Aspen rebuild in the Summit Black Car design

Planned 2026-11-23. Status: **built on the branch `redesign-summit-style`, not launched.** Nothing here goes live
until Andrew approves. `main` is untouched.

## Where it stands (2026-11-23)

Built and checked on the branch:

- Design system ported from Summit (`src/styles/summit.css`), with VIP Aspen's gold accents in `src/styles/vip.css`
  (Andrew: "we will keep the logo white but use gold for other areas and buttons").
- New header, menu drawer, footer and phone action bar.
- Homepage in the Summit section order, with Andrew's header video in the hero.
- Corsa booking form (`vip-aspen`) in the homepage hero and on every service, airport, vehicle and guide page.
  The BookRidesOnline widget is removed.
- Service, airport, vehicle and guide templates, plus About, Contact, Membership, Guides
  index and the 404 page.
- Checks: build and tests pass; all 41 pages have no sideways overflow at 375 px and 1440 px; titles,
  descriptions, canonicals, Open Graph tags, JSON-LD and H1 text are identical to the previous build
  (`node scripts/compare-head.mjs <old dist> dist`).

Still open:

- ~~Header video~~ Done 2026-11-24: Andrew's header edit is in `public/video/` (desktop and phone versions), with
  its first frame as the still. Notes on replacing it are beside `HERO_VIDEO` in `src/data/home.ts`.
- **Partner logos, memberships, client reviews.** Left off the homepage until real VIP Aspen ones exist.
- **Corsa settings for VIP Aspen.** The form shows no phone number yet; see "Not verified" below.
- **Membership page body.** Restyled by the new colours and type, but its layout is still the old one.
- **Launch.** See phase 9.

To review: `npm run dev`, then http://localhost:8080.

## Goal

Rebuild vipaspen.com so it looks like summitblackcar.com: same homepage layout, same typography, same
black-and-white square-edged look. Keep VIP Aspen's content, services and URLs. Replace the BookRidesOnline
widget with Corsa. Lead with the Rolls-Royce Cullinan in the imagery. Andrew supplies a new header video.

## What does not change

- All 40 URLs, page titles, meta descriptions and page copy.
- JSON-LD schema, the generated sitemap, the retired-page redirects.
- The build (Vite + React, every route rendered to HTML at build time) and the Cloudflare hosting.

## Approach

Keep the current React app and re-skin it. Port the Summit design into it rather than moving VIP Aspen onto
Summit's Python builder.

- Source of the design: `Desktop/summit-black-car-seo/new-site/` (`static/css/site.css`, `static/js/site.js`,
  `templates/_m.html`, `templates/home.html`). Read-only; nothing in that project is edited.
- Why: the 40 pages are typed data files feeding four templates. Re-skinning the templates restyles every page
  at once and cannot break a URL, a title or the schema. Moving to the Python builder would mean converting all
  page data to Markdown and changing hosting, for no visible gain.

## Safety: build without launching

- All work on a new branch, `redesign-summit-style`. A push to `main` deploys to the live site, so `main` is not
  touched until approval.
- Review on the local preview. A private preview URL can be added later if Andrew wants to review on his phone.

## Phases

### 1. Design system
- Bring over Summit's stylesheet and its two self-hosted fonts (Cormorant for headings, Inter for body).
- Black and white only, square corners, pill buttons, as on Summit. Retire the dark-and-gold theme, Space Grotesk
  and JetBrains Mono.
- White and black versions of the VIP Aspen logo and a logo mark for the watermark and marquee separators.

### 2. Shared header and footer
- Header: logo, phone, WhatsApp, Book Now pill, menu button opening the full menu (Services, Transfers, Fleet,
  Guides, About, Membership, Contact).
- Scrolling strip under the header, "Ride in Style" call to action, sitemap footer.

### 3. Homepage, section for section

| Summit section | VIP Aspen content |
|---|---|
| Video hero: highlight line, name, Corsa card, three service buttons | "VIP ASPEN", Corsa `vip-aspen` form, Airport Transfers / Hourly Chauffeur / Black Car Service |
| Scrolling strip | Current areas and trust strip |
| Intro with logo watermark and the H1 | Current H1 and hero paragraph |
| Our Services photo tiles | Current six service cards |
| Trusted partners logo strip | Needs VIP Aspen partner logos, otherwise left out |
| Law enforcement-owned panel (black, interactive list) | "Why VIP Aspen" content |
| Fleet showcase with vehicle selector | Cullinan first, then Escalade, then Sprinter |
| What to Expect, three steps | "How We Work" content |
| Meet our drivers | Chauffeur standards only, no named staff (Andrew 2026-11-24) |
| Where We Drive, black panel with map | Airports, routes and service areas; new Aspen-centred map |
| Memberships row | Only if the memberships apply to VIP Aspen |
| About band | About page summary |
| Client reviews | Needs real VIP Aspen reviews, otherwise left out |
| FAQ | Current six homepage questions (schema unchanged) |
| Blog cards | First three guides |
| SEO block and Ride in Style | Current closing copy and call to action |

### 4. Corsa booking
- Corsa already has a live `vip-aspen` brand (`/embed/book?brand=vip-aspen` responds).
- Homepage hero card and every in-page booking section use the Corsa form. Corsa's tracker script goes on every
  page so bookings carry their ad source.
- Every Book Now button goes to the Corsa booking page for VIP Aspen.
- Remove the BookRidesOnline widget and its iframe page.
- Corsa itself is not changed.

### 5. Interior pages
- Service, airport, vehicle and guide templates take Summit's interior layout: full-width photo header with the
  title on it, at-a-glance panel, text sections, FAQ, related links.
- About, Contact, Membership, Guides index, Security Assessment and the 404 page restyled to match.
- The hidden in-vehicle tablet pages are left as they are.

### 6. Imagery, Rolls-Royce first
- On file now: eight Cullinan images in this project and five Cullinan photo sets in the Summit project.
- Cullinan leads the hero poster, the fleet showcase, service tiles and the closing band.
- More Cullinan images need either Andrew's photos or Higgsfield generation (Higgsfield is not authorized in this
  session).
- Escalade rule stays: 2025 body style only.

### 7. Header video
- The hero is built video-ready with a Cullinan still as the poster.
- Andrew drops in two files: a desktop loop (1920x1080, 10 to 20 seconds, no audio, about 6 MB) and a small phone
  version.

### 8. Checks before review
- Full build, server-render tests, all 40 routes return complete HTML.
- Every page checked at phone and desktop width for overflow and clipped headings.
- Titles, descriptions, schema and sitemap compared with the current build to prove nothing changed.

### 9. Launch, only after approval
- Merge to `main`, confirm the Cloudflare deploy, recache Prerender.io, submit IndexNow.

## Decisions needed from Andrew

1. **Colour.** Summit is strictly black and white. Default: VIP Aspen goes fully black and white too, gold only
   if it is in the logo.
2. **Homepage sections that need VIP Aspen material.** Partner logos, memberships (NLA, BBB, CLA) and client
   reviews. Default: left out until real VIP Aspen ones are supplied. Summit's reviews are not reused.
3. **Drivers section.** Decided 2026-11-24: no named staff on the homepage.
4. **Booking address.** Corsa's booking page for VIP Aspen is on `ops.summitblackcar.com`, so VIP Aspen clients
   will see the Summit domain. Default: use it as is.
5. **More Rolls-Royce images.** Supply photos, or authorize Higgsfield.

## Not verified

- That the `vip-aspen` brand in Corsa has its rates set up. Its form does list five vehicle types, including the
  Rolls Royce Cullinan (read 2026-11-23), while this site presents three (Cullinan, Escalade, Sprinter). Corsa's
  owner checklist still lists open VIP Aspen items: domain-verified tick, office number, Google review link, Twilio.
- A real booking through the new form. No test booking was made, because Corsa charges real cards.
- The company's legal name. This site no longer names one (Aspen Security LLC removed 2026-11-24); Corsa's legal text says Summit Executive
  Transportation LLC doing business as VIP Aspen.
