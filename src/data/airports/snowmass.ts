import {
  MapPin,
  Plane,
  Clock,
  ShieldCheck,
  Luggage,
  Star,
} from "lucide-react";
import heroBg from "@/assets/hero-snowmass.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "snowmass-village-transfer",
  seo: {
    title: "Snowmass Village Car Service & Transfers",
    description:
      "Private luxury car service to Snowmass Village, CO. Rolls Royce, Escalade & Sprinter from all airports. Door-to-door resort service. Call (970) 452-6636.",
    keywords:
      "Snowmass Village transfer, Snowmass ski resort car service, Snowmass transportation, Snowmass Village luxury shuttle, Aspen to Snowmass",
    canonicalUrl: "/snowmass-village-transfer",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Snowmass Village Transfers",
    headline: "Luxury Car Service to {{Snowmass Village}}, Colorado",
    description:
      "Private chauffeured transfers from Aspen, ASE Airport, Eagle Airport, Rifle Airport, and Denver to Snowmass Village resorts, hotels, and residences.",
    bgImage: heroBg,
    ctaLabel: "Book Snowmass Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "ASE",
    name: "Aspen-Pitkin County Airport",
    distanceToAspen: "9 miles",
    driveTime: "~15-20 min",
  },
  destination: "Snowmass Village",
  intro: {
    heading: "Getting to Snowmass Village {{in Style}}",
    body: `<p>Snowmass Village is 15 to 20 minutes from Aspen-Pitkin County Airport (ASE) and about 20 minutes from downtown Aspen. VIP Aspen provides private, door-to-door Snowmass Village car service in the Rolls-Royce Cullinan, Cadillac Escalade, or Executive Sprinter, directly to the entrance of your hotel, condominium, or private residence.</p>
<p>Choose the vehicle by headcount and gear. The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so ski and snowboard bags travel in the Escalade or Sprinter. At <a href="/aspen-airport-transfer">Aspen airport</a> your chauffeur meets you in the Ground Transportation Circle directly outside baggage claim and loads your luggage at the vehicle.</p>
<p>We drive to every part of the village: the Viceroy, the Limelight Snowmass, Viewline Resort Snowmass, the condominiums in Base Village, and the private homes on the mountainside above the village center. Tell us the property name or address when you book and your chauffeur will pull up to the right entrance. We also run transfers to Snowmass from <a href="/eagle-airport-transfer">Eagle (EGE)</a>, <a href="/rifle-airport-transfer">Rifle (RIL)</a> and <a href="/denver-to-aspen-car-service">Denver (DEN)</a>.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description:
        "Direct transfers to every property in Snowmass Village: hotels, condos, and private residences.",
    },
    {
      icon: Plane,
      title: "All Airports Covered",
      description:
        "Transfers to Snowmass from ASE (15 to 20 minutes), RIL (about 65 minutes), EGE (about 80 minutes), and DEN (about 3.5 to 4 hours).",
    },
    {
      icon: ShieldCheck,
      title: "Flight-Tracked Pickups",
      description:
        "We track your flight and meet you at the airport's pickup point: the Ground Transportation Circle outside baggage claim at ASE, or the FBO for private jets.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description:
        "Your chauffeur loads your luggage at the vehicle and unloads it at your Snowmass door. Ski equipment travels in the Escalade or Sprinter.",
    },
    {
      icon: Clock,
      title: "Local Knowledge",
      description:
        "Our chauffeurs know Snowmass Village: the hotel entrances, Base Village, and the residential roads above it.",
    },
    {
      icon: Star,
      title: "Peak Season Priority",
      description:
        "Members receive priority booking over non-members, which matters most during holiday and peak ski weeks.",
    },
  ],
  destinations: [
    { name: "The Viceroy Snowmass", detail: "Slope-side luxury" },
    { name: "Limelight Hotel Snowmass", detail: "Base Village" },
    { name: "Viewline Resort Snowmass", detail: "Formerly the Westin" },
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
        "The only Rolls Royce Cullinan for hire in Aspen. Bespoke Mandarin interior and champagne cooler for up to three passengers with standard luggage. It does not carry ski equipment.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Premium comfort for up to five passengers, with generous space for luggage and ski equipment. Our most popular Snowmass transfer vehicle.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "First-class cabin for groups up to 13, with room for luggage and ski equipment. Suited to corporate retreats, wedding parties, and group ski trips to Snowmass.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "How far is Snowmass Village from Aspen Airport (ASE)?",
      answer:
        "Snowmass Village is 15 to 20 minutes from Aspen-Pitkin County Airport (ASE). VIP Aspen provides door-to-door transfers directly to your Snowmass hotel, condo, or residence.",
    },
    {
      question: "Where does my driver meet me at the airport?",
      answer:
        "At Aspen airport your chauffeur meets you in the Ground Transportation Circle directly outside baggage claim. Airport rules require drivers to stay with their vehicles and do not allow them inside the terminal, so your luggage is loaded at the car. Private jet arrivals are met at the FBO. For Eagle, Rifle and Denver, we confirm the meeting point with your booking.",
    },
    {
      question: "Which vehicle fits my group and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment. If you want the Cullinan for a ski trip, book an Escalade alongside it for the gear.",
    },
    {
      question: "Can I book a Snowmass transfer from Denver, Eagle or Rifle?",
      answer:
        "Yes. Snowmass Village is about 3.5 to 4 hours from Denver International Airport (DEN), about 80 minutes from Eagle County Regional Airport (EGE) and about 65 minutes from Rifle Garfield County Airport (RIL). The Denver and Eagle routes follow I-70 west to Glenwood Springs and then Highway 82. We track your flight or aircraft and have the vehicle waiting when you land.",
    },
    {
      question: "Do you provide car service to all Snowmass Village hotels and resorts?",
      answer:
        "Yes. We drive to every property in Snowmass Village, including the Viceroy, Limelight Snowmass, Viewline Resort Snowmass, Base Village condominiums, the Snowmass Club, and private residences.",
    },
    {
      question: "What happens if my flight is delayed or diverted?",
      answer:
        "We track your flight and adjust the pickup to the new arrival time, with complimentary wait time included on airport transfers. If your flight is diverted to another airport, call dispatch at (970) 452-6636 and we will send a vehicle there whenever one is available.",
    },
    {
      question: "Will Aspen airport be open in 2027?",
      answer:
        "Not for most of the year. ASE will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., with no commercial or private flights. During that period, Snowmass transfers start from Eagle (about 80 minutes), Rifle (about 65 minutes) or Denver (about 3.5 to 4 hours).",
    },
    {
      question: "How do I book a Snowmass transfer?",
      answer:
        "Use the online booking form on this page for an instant quote, or call dispatch at (970) 452-6636 at any hour. Give us your flight number and the name or address of your Snowmass property.",
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
