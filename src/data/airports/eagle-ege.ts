import {
  Plane,
  Clock,
  Radar,
  Timer,
  Luggage,
  Mountain,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "eagle-airport-transfer",
  seo: {
    title: "Eagle Vail Airport Transfer | EGE to Aspen Car Service",
    description:
      "Luxury Eagle County Airport (EGE) transfer to Aspen, Vail & Beaver Creek. Premium Escalade, Rolls Royce & Sprinter service. Flight tracking, meet & greet, ski equipment handling. Book your EGE transfer.",
    keywords:
      "Eagle airport transfer, EGE airport car service, Eagle Vail airport to Aspen, Eagle airport limo, EGE to Vail transportation, Eagle airport to Beaver Creek, luxury airport transfer Eagle, private car Eagle airport, Vail airport shuttle",
    canonicalUrl: "/eagle-airport-transfer",
  },
  hero: {
    tagline: "EGE Airport Transfers",
    headline: "Eagle Vail {{Airport Transfer}}",
    description:
      "Eagle County Regional Airport (EGE) offers the most reliable flight options to the Vail Valley. Our luxury fleet provides comfortable transfers to Aspen, Vail, Beaver Creek, and beyond\u2014turning your 90-minute journey into a first-class experience.",
    image: fleetHero,
    ctaLabel: "Book EGE Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "EGE",
    name: "Eagle County Regional Airport",
    distanceToAspen: "70 miles",
    driveTime: "~90 min",
  },
  intro: {
    heading: "About EGE Airport",
    body: "Eagle County Regional Airport (EGE) is the primary gateway for travelers heading to the Vail Valley and Aspen area. Located 70 miles from Aspen and just 35 miles from Vail, EGE offers more reliable flight schedules than smaller mountain airports, especially during winter weather.\n\nThe scenic drive through Glenwood Canyon on I-70 is spectacular, and our professional chauffeurs ensure you arrive relaxed and refreshed. We track all flights in real-time and provide complimentary wait time for delayed arrivals.",
  },
  features: [
    {
      icon: Plane,
      title: "Door-to-Door Service",
      description: "Luxury door-to-door transfers from EGE to Aspen, Vail, Beaver Creek, and the entire Roaring Fork Valley.",
    },
    {
      icon: Radar,
      title: "Real-Time Flight Monitoring",
      description: "We track every flight and adjust pickup timing automatically, so your chauffeur is always waiting.",
    },
    {
      icon: Clock,
      title: "Meet & Greet at Arrivals",
      description: "Your professionally dressed chauffeur greets you at the arrivals terminal with a name sign.",
    },
    {
      icon: Timer,
      title: "Complimentary 60-Min Wait",
      description: "Generous complimentary wait time ensures no stress from flight delays or baggage claim.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description: "All luggage and ski equipment are handled by your chauffeur from carousel to vehicle.",
    },
    {
      icon: Mountain,
      title: "Scenic I-70 Corridor Route",
      description: "Enjoy the spectacular Glenwood Canyon drive in the comfort of a luxury cabin.",
    },
  ],
  destinations: [
    { name: "Vail Village", detail: "~30 min" },
    { name: "Beaver Creek", detail: "~25 min" },
    { name: "Aspen", detail: "~90 min" },
    { name: "Snowmass", detail: "~80 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "Transforms the 90-minute transfer into a first-class experience with its whisper-quiet cabin, massaging seats, and champagne cooler.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "The go-to choice for families and groups with ski gear, offering premium comfort with generous luggage capacity.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Conference-style interior perfect for corporate groups or wedding parties heading from EGE to Aspen. Seats up to 13.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "How long is the drive from Eagle Airport to Aspen?",
      answer:
        "Approximately 90 minutes via I-70 and Highway 82 through the scenic Roaring Fork Valley.",
    },
    {
      question: "Do you also serve Vail from Eagle Airport?",
      answer:
        "Yes, we provide transfers from EGE to both Aspen and Vail/Beaver Creek.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
