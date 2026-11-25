import {
  Plane,
  Clock,
  ShieldCheck,
  Timer,
  Luggage,
  Mountain,
} from "lucide-react";
import heroBg from "@/assets/hero-rifle-airport.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "rifle-airport-transfer",
  seo: {
    title: "Rifle Airport (RIL) to Aspen Car Service",
    description:
      "Rifle Garfield County Airport (RIL) transfers to Aspen for private jet arrivals, about 75 minutes. Met at the FBO in an Escalade, Rolls-Royce or Sprinter.",
    keywords:
      "Rifle airport transfer, RIL car service Aspen, Garfield County airport, private jet transfer Rifle, RIL luxury chauffeur",
    canonicalUrl: "/rifle-airport-transfer",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "RIL Private Jet Transfers",
    headline: "Rifle Airport {{Private Jet Service}}",
    description:
      "Rifle Garfield County Airport (RIL) is a private aviation gateway about 75 minutes from Aspen, with a 7,000-foot runway at a lower elevation than Aspen's airport. Your chauffeur meets you at the FBO and drives you door to door to Aspen or Snowmass.",
    bgImage: heroBg,
    ctaLabel: "Book RIL Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "RIL",
    name: "Rifle Garfield County Airport",
    distanceToAspen: "65 miles",
    driveTime: "~75 min",
  },
  intro: {
    heading: "About RIL Airport",
    body: `<p>Rifle Garfield County Airport (RIL) is a general aviation airport about 65 miles from Aspen, used mainly by private aircraft. Its single runway is 7,000 feet long, and the field sits at roughly 5,500 feet, more than 2,000 feet lower than Aspen's airport. That combination is why many operators choose Rifle for Aspen trips, and why aircraft bound for Aspen often land here when weather closes in up the valley.</p>
<p>Your chauffeur meets you at Atlantic Aviation, the FBO at Rifle, and loads your luggage from the aircraft or the FBO to the vehicle. Planeside pickup on the ramp can be requested and depends on the FBO's approval. The drive to Aspen takes about 75 minutes: east on I-70 to Glenwood Springs, then south on Highway 82 through Carbondale and Basalt. Snowmass Village is about 65 minutes. Unlike the drive from Eagle or Denver, this route does not pass through Glenwood Canyon.</p>
<p><strong>2027 Aspen airport closure:</strong> Aspen-Pitkin County Airport (ASE) will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., with no commercial or private flights. Rifle is one of the alternates the Aspen airport lists, so private aircraft that would normally use Aspen will need another field during those months. Reserve Rifle transfers early for that period.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Private Aviation Focus",
      description: "Rifle transfers are built around private aircraft: we follow your tail number and time the vehicle to your arrival.",
    },
    {
      icon: ShieldCheck,
      title: "Met at the FBO",
      description: "Your chauffeur meets you at Atlantic Aviation, the FBO at Rifle. Planeside pickup can be requested, subject to the FBO's approval.",
    },
    {
      icon: Timer,
      title: "Complimentary Wait Time",
      description: "Complimentary wait time is included, so a late departure or a slow turn does not put pressure on your arrival.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description: "Your chauffeur loads your luggage into the vehicle. Ski equipment travels in the Escalade or Sprinter.",
    },
    {
      icon: Mountain,
      title: "Roaring Fork Valley Route",
      description: "About 75 minutes to Aspen on I-70 and Highway 82, through Glenwood Springs and Carbondale, without crossing Glenwood Canyon.",
    },
    {
      icon: Clock,
      title: "Lower-Elevation Airfield",
      description: "Rifle sits at roughly 5,500 feet with a 7,000-foot runway, and it is a frequent alternate when weather affects Aspen's airport.",
    },
  ],
  destinations: [
    { name: "Aspen", detail: "~75 min" },
    { name: "Snowmass", detail: "~65 min" },
    { name: "Glenwood Springs", detail: "~25-30 min" },
    { name: "Carbondale", detail: "~40-45 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "Step from your jet into the Rolls-Royce Cullinan for the drive up the valley. Seats three with standard luggage and does not carry ski equipment.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Spacious luxury with ample room for luggage, ski equipment, and up to five passengers.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Seats up to 13 in a first-class cabin, with room for luggage and ski equipment. Suited to larger private jet parties and groups.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "Where does my driver meet me at Rifle airport?",
      answer:
        "Your chauffeur meets you at Atlantic Aviation, the FBO at Rifle Garfield County Airport. If you would like the vehicle to meet the aircraft on the ramp, ask when you book; planeside access depends on the FBO's approval on the day.",
    },
    {
      question: "How long is the drive from Rifle Airport to Aspen?",
      answer:
        "About 75 minutes to Aspen and about 65 minutes to Snowmass Village. The route runs east on I-70 to Glenwood Springs, then south on Highway 82 through Carbondale and Basalt, roughly 65 miles in all.",
    },
    {
      question: "Why do private jet travelers choose Rifle Airport?",
      answer:
        "Rifle has a 7,000-foot runway at roughly 5,500 feet of elevation, more than 2,000 feet lower than Aspen's airport. It is a common choice when weather or traffic limits Aspen, and the drive to Aspen is about 75 minutes.",
    },
    {
      question: "Which vehicle fits my party and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment. For a larger party we can send more than one vehicle.",
    },
    {
      question: "What if my arrival time changes or my aircraft diverts to Rifle?",
      answer:
        "We follow your aircraft by tail number and move the pickup when your arrival time changes. If you were headed to Aspen and are diverted to Rifle, call dispatch at (970) 452-6636 as early as you can. We will send a vehicle to Rifle whenever one is available and drive you the rest of the way.",
    },
    {
      question: "What is the drive from Rifle like in winter?",
      answer:
        "The route stays on I-70 and Highway 82, which are plowed and open year-round, and it does not cross a mountain pass or Glenwood Canyon. Snow can still slow Highway 82 between Glenwood Springs and Aspen, so allow extra time in a storm.",
    },
    {
      question: "Can I use Rifle while Aspen airport is closed in 2027?",
      answer:
        "Yes. ASE will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., and Rifle is one of the alternate airports the Aspen airport lists. The transfer from Rifle to Aspen takes about 75 minutes. Book early for those months.",
    },
    {
      question: "How do I book a Rifle airport transfer?",
      answer:
        "Use the online booking form on this page for an instant quote, or call dispatch at (970) 452-6636 at any hour. Send us your tail number, estimated arrival time, passenger count and destination.",
    },
  ],
  relatedServices: [
    { label: "Private Jet / FBO Transfer", href: "/aspen-private-jet-transfer" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
