import {
  Plane,
  Clock,
  Radar,
  Timer,
  Luggage,
  ShieldCheck,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "aspen-airport-transfer",
  seo: {
    title: "Aspen Airport Transfer | ASE Luxury Car Service",
    description:
      "Premium Aspen-Pitkin County Airport (ASE) transfer service. Luxury Escalade, Rolls Royce & Sprinter rides to downtown Aspen, Snowmass & resorts. Flight tracking, meet & greet, 24/7 availability. Book now.",
    keywords:
      "Aspen airport transfer, ASE airport car service, Aspen-Pitkin airport transportation, Aspen airport limo, ASE airport shuttle, Aspen airport to downtown, Aspen airport to Snowmass, luxury airport transfer Aspen, private car Aspen airport",
    canonicalUrl: "/aspen-airport-transfer",
  },
  hero: {
    tagline: "ASE Airport Transfers",
    headline: "Aspen-Pitkin {{Airport Transfer}}",
    description:
      "Just 5 minutes from downtown Aspen, our luxury fleet provides seamless transfers from ASE airport to your destination. Professional chauffeurs, flight tracking, and first-class service guaranteed.",
    image: fleetHero,
    ctaLabel: "Book ASE Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "ASE",
    name: "Aspen-Pitkin County Airport",
    distanceToAspen: "3 miles",
    driveTime: "5-10 min",
  },
  intro: {
    heading: "About ASE Airport",
    body: "Aspen-Pitkin County Airport (ASE) is the closest airport to downtown Aspen, located just 3 miles from the heart of town. Despite its convenience, the airport's high-altitude location (7,820 ft) means weather-related delays are common during winter months.\n\nOur experienced chauffeurs monitor all flights in real-time, ensuring we're there when you land\u2014even when schedules change. We provide complimentary wait time and assist with all luggage, including ski equipment.",
  },
  features: [
    {
      icon: Plane,
      title: "5-Minute Drive",
      description: "Just 5 minutes from downtown Aspen\u2014the closest airport transfer in the valley.",
    },
    {
      icon: ShieldCheck,
      title: "Meet & Greet",
      description: "Your professionally dressed chauffeur greets you at arrivals with a name sign.",
    },
    {
      icon: Radar,
      title: "Flight Tracking",
      description: "We monitor every flight in real time and adjust pickup accordingly, including weather delays.",
    },
    {
      icon: Timer,
      title: "Complimentary Wait Time",
      description: "No rush\u2014we wait for you at no extra charge so you can collect luggage at your pace.",
    },
    {
      icon: Luggage,
      title: "Ski & Luggage Assistance",
      description: "All luggage and ski equipment handled by your chauffeur from carousel to vehicle.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Early morning or late-night arrival\u2014we operate around the clock, every day of the year.",
    },
  ],
  destinations: [
    { name: "Downtown Aspen", detail: "~5 min" },
    { name: "Snowmass Village", detail: "~15 min" },
    { name: "Aspen Highlands", detail: "~8 min" },
    { name: "Buttermilk", detail: "~5 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The ultimate VIP arrival. The only Rolls Royce Cullinan available for hire in Aspen, featuring a bespoke Mandarin interior and champagne cooler.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Our most popular ASE transfer vehicle. Seating for up to five passengers with generous cargo space for luggage and ski equipment.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Seats up to 13 passengers in a first-class cabin with captain's chairs, conference setup, and entertainment system.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "How far is Aspen Airport from downtown?",
      answer:
        "ASE is just 3 miles from downtown Aspen, approximately a 5-minute drive.",
    },
    {
      question: "Do you track my flight?",
      answer:
        "Yes, we monitor every flight in real time and adjust pickup accordingly, including weather delays.",
    },
    {
      question: "Can you fit ski equipment?",
      answer:
        "Yes, all our vehicles accommodate ski and snowboard equipment with dedicated cargo space.",
    },
  ],
  relatedServices: [
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
