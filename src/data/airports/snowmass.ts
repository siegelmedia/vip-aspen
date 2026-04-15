import {
  MapPin,
  Plane,
  Clock,
  ShieldCheck,
  Luggage,
  Star,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "snowmass-village-transfer",
  seo: {
    title:
      "Snowmass Village Car Service | Luxury Transfers from Aspen & Airports",
    description:
      "Private luxury car service to Snowmass Village, CO. Chauffeured Rolls Royce, Escalade & Sprinter from ASE, Eagle, Rifle & Denver airports. Door-to-door service to all Snowmass resorts. Book (970) 452-6636.",
    keywords:
      "Snowmass Village car service, Snowmass Village transportation, Aspen to Snowmass transfer, Snowmass airport shuttle, luxury car Snowmass Colorado, Snowmass Village limo",
    canonicalUrl: "/snowmass-village-transfer",
  },
  hero: {
    tagline: "Snowmass Village Transfers",
    headline: "Luxury Car Service to {{Snowmass Village}}, Colorado",
    description:
      "Private chauffeured transfers from Aspen, ASE Airport, Eagle Airport, and Denver to Snowmass Village resorts, hotels, and residences.",
    image: fleetHero,
    ctaLabel: "Book Snowmass Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "ASE",
    name: "Aspen-Pitkin County Airport",
    distanceToAspen: "9 miles",
    driveTime: "~20 min",
  },
  intro: {
    heading: "Getting to Snowmass Village {{in Style}}",
    body: "Snowmass Village is just 15 minutes from downtown Aspen and 20 minutes from Aspen-Pitkin County Airport (ASE), but getting there with luggage, ski equipment, and family in a standard taxi or rideshare isn't the luxury experience you came to the mountains for. VIP Aspen provides private, door-to-door Snowmass Village car service in the Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter \u2014 directly to the front entrance of your Snowmass hotel, condominium, or private residence with every piece of luggage and ski gear handled for you.\n\nWe know every property in Snowmass Village intimately \u2014 from the slope-side luxury of the Viceroy and the modern energy of the Limelight Snowmass to the refined comfort of the Westin, the condos scattered through Base Village, and the private homes tucked into the mountainside above the village center. Our chauffeurs pull up to the correct entrance, know where the bellhops are, and ensure your arrival is seamless regardless of which property you call home during your stay.",
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description:
        "Direct transfers to every property in Snowmass Village \u2014 hotels, condos, and private residences.",
    },
    {
      icon: Plane,
      title: "All Airports Covered",
      description:
        "Luxury transfers from ASE (20 min), EGE (80 min), RIL (50 min), and DEN (3.5 hours) to Snowmass.",
    },
    {
      icon: ShieldCheck,
      title: "Meet & Greet Service",
      description:
        "Flight tracking and meet-and-greet at every airport arrival for a seamless pickup.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description:
        "All luggage and ski equipment handled from terminal to your Snowmass property doorstep.",
    },
    {
      icon: Clock,
      title: "Local Knowledge",
      description:
        "Our chauffeurs know every property entrance in Snowmass Village for seamless arrivals.",
    },
    {
      icon: Star,
      title: "Peak Season Priority",
      description:
        "Membership holders enjoy complimentary Snowmass transfers and priority booking during peak season.",
    },
  ],
  destinations: [
    { name: "The Viceroy Snowmass", detail: "Slope-side luxury" },
    { name: "Limelight Hotel Snowmass", detail: "Modern mountain energy" },
    { name: "Westin Snowmass", detail: "Refined comfort" },
    { name: "Snowmass Base Village", detail: "Condos & residences" },
    { name: "Snowmass Club", detail: "Golf & recreation" },
    { name: "Snowmass Ski Area", detail: "3,300+ acres of terrain" },
    { name: "Anderson Ranch Arts Center", detail: "Arts & culture" },
    { name: "Private Residences", detail: "Door-to-door service" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The only Rolls Royce Cullinan for hire in Aspen. Bespoke Mandarin interior and champagne cooler for the ultimate Snowmass arrival.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Premium comfort with generous space for families, luggage, and ski equipment. Our most popular Snowmass transfer vehicle.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "First-class cabin for groups up to 13. Perfect for corporate retreats, wedding parties, and group ski trips to Snowmass.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "How far is Snowmass Village from Aspen Airport (ASE)?",
      answer:
        "Snowmass Village is approximately 20 minutes from Aspen-Pitkin County Airport (ASE). VIP Aspen provides door-to-door luxury transfers directly to your Snowmass hotel, condo, or residence.",
    },
    {
      question: "What is the best way to get to Snowmass Village from Denver?",
      answer:
        "The most comfortable option is a private luxury transfer from Denver International Airport (DEN). The 3.5-hour scenic drive through the Rocky Mountains can be made in a Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter with a professional chauffeur.",
    },
    {
      question:
        "Do you provide car service to all Snowmass Village hotels and resorts?",
      answer:
        "Yes. We provide door-to-door service to every property in Snowmass Village including the Viceroy, Limelight Snowmass, Westin Snowmass, Snowmass Base Village condos, Snowmass Club, and all private residences.",
    },
    {
      question: "Can I book a Snowmass transfer from Eagle Airport (EGE)?",
      answer:
        "Absolutely. Eagle County Regional Airport is approximately 80 minutes from Snowmass Village. We offer luxury transfers in our full fleet with flight tracking and meet-and-greet service at EGE arrivals.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
