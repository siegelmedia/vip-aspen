import {
  Plane,
  Clock,
  Radar,
  Timer,
  Luggage,
  Mountain,
} from "lucide-react";
import heroBg from "@/assets/hero-ege-airport.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "eagle-airport-transfer",
  seo: {
    title: "Eagle Airport (EGE) to Aspen Car Service",
    description:
      "Private Eagle County Airport (EGE) transfers to Aspen, about 90 minutes, plus Vail & Beaver Creek. Escalade, Rolls Royce & Sprinter with flight tracking.",
    keywords:
      "Eagle airport transfer, EGE to Aspen car service, Eagle County Regional airport, Eagle Vail airport luxury transfer, EGE chauffeur",
    canonicalUrl: "/eagle-airport-transfer",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "EGE Airport Transfers",
    headline: "Eagle Vail {{Airport Transfer}}",
    description:
      "Eagle County Regional Airport (EGE) is about 90 minutes from Aspen and a common alternative when Aspen flights are full or affected by weather. Our chauffeurs track your flight and drive you door to door to Aspen, Snowmass, Vail, or Beaver Creek.",
    bgImage: heroBg,
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
    body: `<p>Eagle County Regional Airport (EGE) is in Gypsum, about 70 miles from Aspen and about 35 miles from Vail. Travelers bound for Aspen use it when flights into Aspen are sold out, or when weather is affecting Aspen's airport. The drive to Aspen takes about 90 minutes: west on I-70 through Glenwood Canyon to Glenwood Springs, then south on Highway 82 through the Roaring Fork Valley. Snowmass Village is about 80 minutes.</p>
<p>We track your flight, so your chauffeur is in place when you land even if the schedule moves, and complimentary wait time is included. Your chauffeur meets you at the designated pickup point outside the terminal, which we confirm with your booking, and loads your luggage at the vehicle. Private aircraft are met at the FBO.</p>
<p><strong>2027 Aspen airport closure:</strong> Aspen-Pitkin County Airport (ASE) will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., with no commercial or private flights. Eagle is one of the alternates the Aspen airport lists, so expect it to be busier in those months and reserve your transfer early.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Door-to-Door Service",
      description: "Private door-to-door transfers from EGE to Aspen, Snowmass, Vail, Beaver Creek, and the Roaring Fork Valley.",
    },
    {
      icon: Radar,
      title: "Real-Time Flight Monitoring",
      description: "We track every flight and adjust the pickup time, so your chauffeur is in place when you land.",
    },
    {
      icon: Clock,
      title: "Terminal & FBO Pickups",
      description: "Your chauffeur meets you at the designated pickup point outside the terminal, confirmed with your booking. Private arrivals are met at the FBO.",
    },
    {
      icon: Timer,
      title: "Complimentary Wait Time",
      description: "Complimentary wait time is included on airport transfers, so a late flight or a slow baggage belt is not a problem.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description: "Your chauffeur loads your luggage at the vehicle. Ski equipment travels in the Escalade or Sprinter.",
    },
    {
      icon: Mountain,
      title: "Glenwood Canyon Route",
      description: "The drive follows I-70 through Glenwood Canyon and Highway 82 up the Roaring Fork Valley, with a chauffeur who drives it in every season.",
    },
  ],
  destinations: [
    { name: "Aspen", detail: "~90 min" },
    { name: "Snowmass", detail: "~80 min" },
    { name: "Vail Village", detail: "~35-40 min" },
    { name: "Beaver Creek", detail: "~30 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "Turns the 90-minute transfer into part of the trip, with a whisper-quiet cabin and champagne cooler. Seats three with standard luggage and does not carry ski equipment.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "The go-to choice for families and small groups with ski gear. Seats up to five with generous luggage capacity.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Conference-style interior for corporate groups or wedding parties heading from EGE to Aspen. Seats up to 13, with room for luggage and ski equipment.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "Where does my driver meet me at Eagle airport?",
      answer:
        "Your chauffeur meets you at the designated ground transportation pickup point outside the terminal and loads your luggage at the vehicle. We confirm the exact meeting point with your booking. If you arrive by private aircraft, we meet you at the FBO instead.",
    },
    {
      question: "How long is the drive from Eagle Airport to Aspen?",
      answer:
        "About 90 minutes in normal conditions, and about 80 minutes to Snowmass Village. The route is roughly 70 miles: I-70 west through Glenwood Canyon to Glenwood Springs, then Highway 82 south through Carbondale and Basalt. We also drive from EGE to Vail (about 35 to 40 minutes) and Beaver Creek (about 30 minutes).",
    },
    {
      question: "Which vehicle fits my group and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so ski and snowboard bags need to travel in an Escalade or the Sprinter.",
    },
    {
      question: "What happens if my flight is delayed or diverted?",
      answer:
        "We track your flight and move the pickup to the new arrival time, with complimentary wait time included. If your flight is diverted to a different airport, call dispatch at (970) 452-6636 as soon as you know and we will send a vehicle there whenever one is available.",
    },
    {
      question: "Do you meet private jets at Eagle airport?",
      answer:
        "Yes. Private aircraft at EGE use the Signature Aviation FBO, formerly known as the Vail Valley Jet Center, and your chauffeur meets you there. Send us your tail number and estimated arrival time so we can follow the aircraft.",
    },
    {
      question: "What is the drive like in winter?",
      answer:
        "The route stays on I-70 and Highway 82, which are plowed and open year-round, but snow can slow the drive, so allow extra time in a storm. I-70 through Glenwood Canyon is occasionally closed by crashes, rockfall or weather. When it is, the detour is far longer, and CDOT does not route traffic over Cottonwood Pass. We watch road conditions on the day of your transfer and plan the pickup around them.",
    },
    {
      question: "Aspen airport is closed in 2027. Can I fly into Eagle instead?",
      answer:
        "Yes. ASE will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., and Eagle is one of the alternate airports the Aspen airport lists. The transfer from EGE to Aspen takes about 90 minutes. Book early for travel in those months, since more Aspen visitors will be arriving through Eagle.",
    },
    {
      question: "How do I book an Eagle airport transfer?",
      answer:
        "Use the online booking form on this page for an instant quote, or call dispatch at (970) 452-6636 at any hour. Have your flight number, passenger count and destination address ready.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Vail to Aspen Car Service", href: "/vail-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
