/**
 * Homepage content for the Summit-style layout (2026-11-23 rebuild).
 * The wording is the previous homepage's own copy, rearranged into the new
 * sections; nothing here is a new claim about the company.
 */
import heroPoster from "@/assets/hero-video-poster.webp";
import carCullinan from "@/assets/car-cullinan.webp";
import carEscalade from "@/assets/car-escalade.webp";
import carSprinter from "@/assets/car-sprinter.webp";

import tileBlackCar from "@/assets/fleet-card-cullinan-v2.webp";
import tileAirport from "@/assets/service-private-jet-transfer.webp";
import tileSki from "@/assets/hero-private-ski-transfers.webp";
import tileEvents from "@/assets/hero-special-events.webp";
import tileProtection from "@/assets/service-executive-protection.webp";
import tileClubs from "@/assets/service-aspen-clubs.webp";

import stdOwned from "@/assets/hero-security-driver.webp";
import stdChauffeur from "@/assets/service-black-car-arrival.webp";
import stdRates from "@/assets/rolls-gallery-side.webp";
import stdFlights from "@/assets/escalade-gallery-tarmac.webp";
import stdTeam from "@/assets/rr-cullinan-aspen-arrival.webp";

import cullinan1 from "@/assets/fleet-card-cullinan-v2.webp";
import cullinan2 from "@/assets/rolls-gallery-front.webp";
import cullinan3 from "@/assets/rolls-gallery-interior.webp";
import cullinan4 from "@/assets/rolls-gallery-side.webp";
import cullinan5 from "@/assets/rolls-town.webp";
import cullinan6 from "@/assets/rolls-ranch-side.webp";
import escalade1 from "@/assets/fleet-card-escalade-v2.webp";
import escalade2 from "@/assets/escalade-gallery-signature.webp";
import escalade3 from "@/assets/escalade-gallery-interior.webp";
import escalade4 from "@/assets/escalade-gallery-tarmac.webp";
import sprinter1 from "@/assets/fleet-card-sprinter-v2.webp";
import sprinter2 from "@/assets/sprinter-gallery-exterior.webp";
import sprinter3 from "@/assets/sprinter-hero-tarmac.webp";

import stepsBand from "@/assets/cullinan-mountain-road.webp";
import teamPhoto from "@/assets/rr-cullinan-aspen-exit.webp";
import aboutPhoto from "@/assets/fleet-tarmac-hero.webp";
import seoMain from "@/assets/rolls-gallery-front.webp";
import seoLeft from "@/assets/hero-wedding.webp";
import seoRight from "@/assets/rolls-gallery-interior.webp";

/**
 * Homepage video (Andrew's header edit, added 2026-11-24). Source:
 * Desktop/PREMIEREPROADCODEX/VIP_Aspen_Header_Web.mp4 (1920x1080, 16.8 s, no
 * audio). /public/video/hero.mp4 is that file with the index moved to the
 * front so it starts while downloading; hero-sm.mp4 is a 960x540 copy for
 * phones. To replace the video, overwrite both files and remake the still
 * (src/assets/hero-video-poster.webp, the video's first frame at 1600x900),
 * which shows before the video starts and for visitors who ask for reduced
 * motion or data saving. Set this to null to go back to the still alone.
 */
export const HERO_VIDEO: { mp4: string; mp4Small?: string } | null = {
  mp4: "/video/hero.mp4",
  mp4Small: "/video/hero-sm.mp4",
};

export const heroImage = {
  src: heroPoster,
  alt: "Black Rolls-Royce Cullinan driving beside a mountain lake at sunset",
};

/** The three buttons along the bottom of the hero, each with its vehicle. */
export const heroServices = [
  { label: "Black Car Service", href: "/black-car-service", car: carCullinan },
  { label: "Airport Transfers", href: "/aspen-airport-transfer", car: carEscalade },
  { label: "Hourly Chauffeur", href: "/hourly-chauffeur", car: carSprinter },
];

/** Six photo tiles: an exact fit for the two- and three-column grids. */
export const serviceTiles = [
  {
    title: "Black Car Service",
    blurb: "Chauffeured Rolls-Royce, Escalade & Sprinter for dinners, meetings, and nights out — point to point or hourly.",
    image: tileBlackCar,
    alt: "Black Rolls-Royce Cullinan waiting at a hotel entrance in Aspen",
    href: "/black-car-service",
  },
  {
    title: "Airport & Jet Transfers",
    blurb: "Flight-tracked pickups at Aspen (ASE), Eagle (EGE), Rifle, and Denver — including private jet and FBO tarmac service.",
    image: tileAirport,
    alt: "Chauffeur holding the door of a black SUV beside a private jet at Aspen airport",
    href: "/aspen-airport-transfer",
  },
  {
    title: "Private Ski Transfers",
    blurb: "Door-to-slope private SUV service across Aspen Mountain, Highlands, Buttermilk, and Snowmass — gear handled.",
    image: tileSki,
    alt: "Luxury SUV at an Aspen ski resort drop-off in winter",
    href: "/private-ski-transfers",
  },
  {
    title: "Weddings & Events",
    blurb: "Coordinated multi-vehicle transportation for weddings, galas, corporate offsites, and Aspen's marquee events.",
    image: tileEvents,
    alt: "Rolls-Royce Cullinan arriving at an evening event in Aspen",
    href: "/special-event-transportation",
  },
  {
    title: "Executive Protection",
    blurb: "Discreet protection for high-profile individuals — from security drivers to full details.",
    image: tileProtection,
    alt: "Executive protection agents beside a black SUV",
    href: "/executive-protection",
  },
  {
    title: "VIP Club Access",
    blurb: "Priority entry, tables, and bottle service at Aspen's most exclusive venues — arranged before you land.",
    image: tileClubs,
    alt: "Upscale Aspen nightlife venue interior",
    href: "/aspen-clubs",
  },
];

/** The interactive list on black: each line opens its text and shows its photo. */
export const standards = [
  {
    title: "Law Enforcement-Owned",
    text: "VIP Aspen is a law enforcement-owned company. Vetting, discretion, and planning are built into every ride.",
    image: stdOwned,
    alt: "Chauffeur standing beside a black Cadillac Escalade in Aspen",
  },
  {
    title: "Background-Checked Chauffeurs",
    text: "Chauffeurs are background-checked and trained, and discretion is standard on every ride.",
    image: stdChauffeur,
    alt: "Chauffeur opening the door of a black luxury SUV in Aspen",
  },
  {
    title: "A Clear Quote Before You Ride",
    text: "You receive an all-inclusive quote and your chauffeur's details before the ride.",
    image: stdRates,
    alt: "Black Rolls-Royce Cullinan parked outside a mountain residence",
  },
  {
    title: "Every Flight Tracked",
    text: "We track every flight, meet you curbside or on the FBO tarmac, and reposition the car if your flight diverts.",
    image: stdFlights,
    alt: "Black Cadillac Escalade waiting beside a private jet",
  },
  {
    title: "One Team, Around the Clock",
    text: "Dispatch is staffed 24/7. Transportation, VIP access, and executive protection are coordinated by one local team.",
    image: stdTeam,
    alt: "Guest stepping out of a Rolls-Royce Cullinan in downtown Aspen",
  },
];

export interface FleetVehicle {
  key: string;
  name: string;
  model: string;
  passengers: number;
  bags: number;
  summary: string;
  features: string[];
  bestFor: string;
  href: string;
  images: { src: string; alt: string }[];
}

/**
 * Fleet showcase, Rolls-Royce first. Passengers and bags match the vehicle
 * types in the Corsa booking form (read 2026-11-23).
 */
export const fleetVehicles: FleetVehicle[] = [
  {
    key: "cullinan",
    name: "Rolls-Royce Cullinan",
    model: "Ultra-luxury SUV",
    passengers: 3,
    bags: 3,
    summary:
      "The pinnacle of luxury SUVs. Experience unmatched comfort and prestige in the only Rolls-Royce Cullinan available for chauffeured hire in Aspen.",
    features: [
      "Bespoke Mandarin interior",
      "Champagne cooler",
      "Individual rear seats with fold-out tables",
      "Professional, discreet chauffeur",
    ],
    bestFor: "Weddings, airport and private jet arrivals, dinners and special occasions",
    href: "/rolls-royce-cullinan",
    images: [
      { src: cullinan1, alt: "Black Rolls-Royce Cullinan at a hotel entrance in Aspen" },
      { src: cullinan2, alt: "Rolls-Royce Cullinan above the town of Aspen in winter" },
      { src: cullinan3, alt: "Rolls-Royce Cullinan rear cabin with Mandarin orange accents" },
      { src: cullinan4, alt: "Side view of a black Rolls-Royce Cullinan outside a mountain residence" },
      { src: cullinan5, alt: "Black Rolls-Royce Cullinan parked on a snowy street in a mountain town" },
      { src: cullinan6, alt: "Black Rolls-Royce Cullinan on a ranch below autumn hillsides" },
    ],
  },
  {
    key: "escalade",
    name: "Cadillac Escalade",
    model: "Luxury SUV",
    passengers: 5,
    bags: 8,
    summary: "Modern luxury meets powerful performance. Perfect for any occasion, from airport transfers to ski days.",
    features: [
      "Premium leather seating",
      "Premium sound and rear entertainment",
      "Full-time four-wheel drive",
      "Tarmac service for private jets",
    ],
    bestFor: "Airport transfers, ski days, executive travel and nights out",
    href: "/cadillac-escalade",
    images: [
      { src: escalade1, alt: "Black Cadillac Escalade on a downtown Aspen street at dusk" },
      { src: escalade2, alt: "Black Cadillac Escalade outside a mountain lodge" },
      { src: escalade3, alt: "Cadillac Escalade rear cabin with leather captain's chairs" },
      { src: escalade4, alt: "Black Cadillac Escalade beside a private jet" },
    ],
  },
  {
    key: "sprinter",
    name: "Executive Sprinter",
    model: "Mercedes-Benz Sprinter",
    passengers: 13,
    bags: 15,
    summary: "Travel with your group in first-class comfort and style.",
    features: [
      "Conference-style leather seating",
      "Entertainment system",
      "Ambient LED lighting",
      "Room for everyone's gear",
    ],
    bestFor: "Corporate groups, wedding parties and group ski trips",
    href: "/executive-sprinter",
    images: [
      { src: sprinter1, alt: "Black Mercedes-Benz Executive Sprinter outside the Aspen airport terminal" },
      { src: sprinter2, alt: "Black Executive Sprinter at a mountain lodge entrance" },
      { src: sprinter3, alt: "Executive Sprinter with its door open beside a private jet" },
    ],
  },
];

export const steps = {
  image: stepsBand,
  alt: "Rolls-Royce Cullinan on a mountain road outside Aspen, Colorado",
  items: [
    {
      title: "Request",
      text: "Book online, call, or WhatsApp — 24/7. Tell us your route, date, and vehicle preference.",
    },
    {
      title: "Confirm",
      text: "Receive an all-inclusive quote and your chauffeur's details before the ride.",
    },
    {
      title: "Ride",
      text: "We track your flight, meet you curbside or on the tarmac, and handle every detail door to door.",
    },
  ],
};

export const teamImage = { src: teamPhoto, alt: "Guest stepping out of the VIP Aspen Rolls-Royce Cullinan in downtown Aspen" };
export const aboutImage = { src: aboutPhoto, alt: "" };
export const seoImages = [
  { src: seoMain, alt: "Rolls-Royce Cullinan above the town of Aspen in winter" },
  { src: seoLeft, alt: "Rolls-Royce Cullinan at an Aspen wedding" },
  { src: seoRight, alt: "Rolls-Royce Cullinan rear cabin" },
];
