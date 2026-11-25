/**
 * Site-wide facts for the Summit-style layout (2026-11-23 rebuild): the Corsa
 * booking addresses, the menus, the scrolling strip and the homepage sections.
 * Change them here and the header, footer and homepage follow.
 */
import { COMPANY, WHATSAPP_NUMBER } from "./constants";

/**
 * Corsa is the booking software (ops.summitblackcar.com), shared with Summit
 * Black Car; "vip-aspen" is this brand in it.
 *  - embedUrl: the form on its own, for the frames on this site.
 *  - bookUrl:  the hosted booking page every "Book Now" button opens.
 *  - script:   Corsa's embed script (index.html). It remembers which ad or link
 *              brought the visitor and adds that to the frames and the links.
 *  - height:   height of the first step, used until the form reports its own.
 * Corsa itself is never changed from this site.
 */
export const CORSA = {
  origin: "https://ops.summitblackcar.com",
  embedUrl: "https://ops.summitblackcar.com/embed/book?brand=vip-aspen",
  bookUrl: "https://ops.summitblackcar.com/book/vip-aspen",
  script: "https://ops.summitblackcar.com/embed/form.js",
  height: 990,
} as const;

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const TEL_HREF = `tel:${COMPANY.phoneRaw}`;

export interface NavLinkItem {
  label: string;
  href: string;
}

/** Top line of the homepage hero, above the name. */
export const heroHighlights = ["Law Enforcement-Owned", "Rolls-Royce Fleet", "Professional Chauffeurs"];

/** Scrolling strip under the headers. */
export const marqueeItems = [
  "Law Enforcement-Owned",
  "Rolls-Royce Cullinan · Escalade · Sprinter",
  "Available 24/7",
  "Instant Online Quotes",
  "Professional Chauffeurs",
  "Aspen · Snowmass · Roaring Fork Valley",
  "ASE · EGE · RIL · DEN Airports",
];

// ─── Menus ──────────────────────────────────────────────────────────────────

/** The six large links in the Services menu. */
export const featuredServices: NavLinkItem[] = [
  { label: "Black Car Service", href: "/black-car-service" },
  { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
  { label: "Private Ski Transfers", href: "/private-ski-transfers" },
  { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
  { label: "Executive Protection", href: "/executive-protection" },
  { label: "VIP Club Access", href: "/aspen-clubs" },
];

export const moreServices: NavLinkItem[] = [
  { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
  { label: "Event Transportation", href: "/special-event-transportation" },
  { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
  { label: "Food & Wine Classic", href: "/aspen-food-and-wine-transportation" },
  { label: "New Year's Eve & Holiday", href: "/aspen-new-years-eve-transportation" },
  { label: "Security Drivers", href: "/security-driver" },
  { label: "VIP Membership", href: "/membership" },
  { label: "Rates & Pricing", href: "/rates" },
];

export const transferGroups: { heading: string; links: NavLinkItem[] }[] = [
  {
    heading: "Airports",
    links: [
      { label: "Aspen Airport (ASE)", href: "/aspen-airport-transfer" },
      { label: "Eagle Airport (EGE)", href: "/eagle-airport-transfer" },
      { label: "Rifle Airport (RIL)", href: "/rifle-airport-transfer" },
      { label: "Private Jet / FBO", href: "/aspen-private-jet-transfer" },
    ],
  },
  {
    heading: "Routes",
    links: [
      { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
      { label: "Vail to Aspen", href: "/vail-to-aspen-car-service" },
      { label: "Beaver Creek to Aspen", href: "/beaver-creek-to-aspen-car-service" },
      { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
    ],
  },
  {
    heading: "Resorts & Hotels",
    links: [
      { label: "Snowmass Village", href: "/snowmass-village-transfer" },
      { label: "Hotel Jerome", href: "/hotel-jerome-transportation" },
      { label: "St. Regis Aspen", href: "/st-regis-aspen-transportation" },
      { label: "The Little Nell", href: "/little-nell-transportation" },
    ],
  },
];

export const fleetLinks: NavLinkItem[] = [
  { label: "Rolls-Royce Cullinan", href: "/rolls-royce-cullinan" },
  { label: "Cadillac Escalade", href: "/cadillac-escalade" },
  { label: "Executive Sprinter", href: "/executive-sprinter" },
];

export const companyLinks: NavLinkItem[] = [
  { label: "About us", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

/**
 * Footer sitemap. Every indexable route is covered between these four columns
 * and the utility links in the bottom bar.
 */
export const footerColumns: { title: string; links: NavLinkItem[] }[] = [
  {
    title: "Car service",
    links: [
      { label: "Black Car Service", href: "/black-car-service" },
      { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
      { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
      { label: "Private Ski Transfers", href: "/private-ski-transfers" },
      { label: "Event Transportation", href: "/special-event-transportation" },
      { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
      { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
      { label: "Rates & Pricing", href: "/rates" },
    ],
  },
  {
    title: "Airports & routes",
    links: [
      { label: "Aspen Airport (ASE)", href: "/aspen-airport-transfer" },
      { label: "Eagle Airport (EGE)", href: "/eagle-airport-transfer" },
      { label: "Rifle Airport (RIL)", href: "/rifle-airport-transfer" },
      { label: "Private Jet / FBO", href: "/aspen-private-jet-transfer" },
      { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
      { label: "Vail to Aspen", href: "/vail-to-aspen-car-service" },
      { label: "Beaver Creek to Aspen", href: "/beaver-creek-to-aspen-car-service" },
      { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
    ],
  },
  {
    title: "Resorts & occasions",
    links: [
      { label: "Snowmass Village", href: "/snowmass-village-transfer" },
      { label: "Hotel Jerome", href: "/hotel-jerome-transportation" },
      { label: "St. Regis Aspen", href: "/st-regis-aspen-transportation" },
      { label: "The Little Nell", href: "/little-nell-transportation" },
      { label: "Food & Wine Classic", href: "/aspen-food-and-wine-transportation" },
      { label: "New Year's Eve & Holiday", href: "/aspen-new-years-eve-transportation" },
      { label: "VIP Club Access", href: "/aspen-clubs" },
      { label: "Travel Guides", href: "/guides" },
    ],
  },
  {
    title: "Fleet & company",
    links: [
      { label: "Rolls-Royce Cullinan", href: "/rolls-royce-cullinan" },
      { label: "Cadillac Escalade", href: "/cadillac-escalade" },
      { label: "Executive Sprinter", href: "/executive-sprinter" },
      { label: "Security Drivers", href: "/security-driver" },
      { label: "Executive Protection", href: "/executive-protection" },
      { label: "VIP Membership", href: "/membership" },
      { label: "About VIP Aspen", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerUtilityLinks: NavLinkItem[] = [
  { label: "Travel Guides", href: "/guides" },
];

// ─── Where We Drive ─────────────────────────────────────────────────────────

/** Airports and routes linked from the black "Where We Drive" panel. */
export const driveLinks: (NavLinkItem & { detail: string })[] = [
  { label: "Aspen Airport (ASE)", detail: "5 minutes to downtown", href: "/aspen-airport-transfer" },
  { label: "Rifle Airport (RIL)", detail: "60 min, private jets", href: "/rifle-airport-transfer" },
  { label: "Eagle Airport (EGE)", detail: "90 min scenic drive", href: "/eagle-airport-transfer" },
  { label: "Denver Airport (DEN)", detail: "3.5 hour luxury transfer", href: "/denver-to-aspen-car-service" },
  { label: "Vail to Aspen", detail: "~2 hrs", href: "/vail-to-aspen-car-service" },
  { label: "Beaver Creek to Aspen", detail: "~2 hrs", href: "/beaver-creek-to-aspen-car-service" },
  { label: "Glenwood Springs to Aspen", detail: "~1 hr", href: "/glenwood-springs-to-aspen-car-service" },
  { label: "Snowmass Village", detail: "20 min", href: "/snowmass-village-transfer" },
];

export type MapSide = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export interface MapPlace {
  name: string;
  /** Shown instead of the name on a small map. */
  short?: string;
  kind: "home" | "town" | "airport";
  /** Position on the map image, in percent (from Summit's data/map-geo.json projection). */
  x: number;
  y: number;
  /** Side of the dot the name sits on; `phonePos` below 640 px. */
  pos: MapSide;
  phonePos?: MapSide;
  /** "dot" = a plain dot with no name on that size of map, "hide" = left out. */
  small?: "dot" | "hide";
  phone?: "dot" | "hide";
  href: string;
}

/**
 * Places on the regional map (Rifle to Denver). The image and its projection
 * come from the Summit Black Car project (tools/make_map.py); x is linear in
 * longitude across -107.85..-104.50 and y follows the same map, so a new place
 * can be added from its coordinates. Aspen is the home marker here.
 */
export const mapPlaces: MapPlace[] = [
  { name: "Rifle (RIL)", short: "RIL", kind: "airport", x: 3.68, y: 50.91, pos: "e", phonePos: "s", href: "/rifle-airport-transfer" },
  { name: "Glenwood Springs", kind: "town", x: 15.68, y: 49.97, pos: "n", phone: "dot", href: "/glenwood-springs-to-aspen-car-service" },
  { name: "Eagle (EGE)", short: "EGE", kind: "airport", x: 27.83, y: 46.4, pos: "n", href: "/eagle-airport-transfer" },
  { name: "Beaver Creek", kind: "town", x: 39.81, y: 47.89, pos: "s", phone: "dot", href: "/beaver-creek-to-aspen-car-service" },
  { name: "Vail", kind: "town", x: 44.06, y: 46.49, pos: "n", href: "/vail-to-aspen-car-service" },
  { name: "Aspen (ASE)", short: "ASE", kind: "airport", x: 29.29, y: 62.61, pos: "n", href: "/aspen-airport-transfer" },
  { name: "Aspen", kind: "home", x: 30.83, y: 63.84, pos: "e", href: "/black-car-service" },
  { name: "Snowmass Village", kind: "town", x: 27.23, y: 63.0, pos: "sw", small: "dot", href: "/snowmass-village-transfer" },
  { name: "Denver", kind: "town", x: 85.38, y: 42.66, pos: "s", phonePos: "w", href: "/denver-to-aspen-car-service" },
  { name: "Denver Intl. (DEN)", short: "DEN", kind: "airport", x: 94.83, y: 38.11, pos: "sw", phonePos: "n", href: "/denver-to-aspen-car-service" },
];

export const mapRoadLabels = [
  { text: "I-70", x: 74.34, y: 43.98 },
  { text: "I-70", x: 15.82, y: 46.2 },
  { text: "Hwy 82", x: 20.3, y: 56.17 },
];
