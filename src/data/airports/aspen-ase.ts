import {
  Plane,
  Clock,
  Radar,
  Timer,
  Luggage,
  ShieldCheck,
} from "lucide-react";
import heroBg from "@/assets/hero-ase-airport.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "aspen-airport-transfer",
  seo: {
    title: "Aspen Airport Transfer | ASE Luxury Car Service",
    description:
      "Aspen-Pitkin County Airport (ASE) luxury transfers to downtown Aspen, Snowmass & resorts. Flight-tracked pickup outside baggage claim or at the FBO, 24/7.",
    keywords:
      "Aspen airport transfer, ASE car service, Aspen-Pitkin County airport, ASE private car, Aspen airport chauffeur, luxury airport pickup ASE",
    canonicalUrl: "/aspen-airport-transfer",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "ASE Airport Transfers",
    headline: "Aspen-Pitkin {{Airport Transfer}}",
    description:
      "Aspen-Pitkin County Airport (ASE) is 5 to 10 minutes from downtown Aspen. Your chauffeur tracks your flight and is waiting in the Ground Transportation Circle outside baggage claim, or at the FBO for private arrivals, in a Rolls-Royce Cullinan, Cadillac Escalade or Executive Sprinter.",
    bgImage: heroBg,
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
    body: `<p>Aspen-Pitkin County Airport (ASE) is the closest airport to Aspen, about 3 miles from downtown. The drive takes 5 to 10 minutes to downtown Aspen and 15 to 20 minutes to Snowmass Village. The airport sits at roughly 7,800 feet in a narrow mountain valley, so winter weather regularly delays flights and sometimes sends them to another airport. We track every flight and adjust the pickup when the schedule changes.</p>
<p>Airport rules require ground transportation drivers to stay with their vehicles, and drivers may not enter the terminal, even to help with luggage. Your chauffeur therefore waits in the Ground Transportation Circle directly outside baggage claim and loads your bags at the vehicle. If you arrive by private aircraft, we meet you at Atlantic Aviation, the FBO at ASE. See <a href="/aspen-private-jet-transfer">private jet and FBO transfers</a> for details.</p>
<p><strong>2027 closure:</strong> ASE will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m. No commercial or private flights will operate during that period. If you are traveling to Aspen in those months, plan to land at <a href="/eagle-airport-transfer">Eagle (EGE)</a>, <a href="/rifle-airport-transfer">Rifle (RIL)</a> or <a href="/denver-to-aspen-car-service">Denver (DEN)</a> and book the transfer from there.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "5 to 10 Minutes to Downtown",
      description: "ASE is about 3 miles from downtown Aspen, the shortest airport transfer in the valley. Snowmass Village is 15 to 20 minutes away.",
    },
    {
      icon: ShieldCheck,
      title: "Met Outside Baggage Claim",
      description: "Your chauffeur waits with the vehicle in the Ground Transportation Circle, directly outside baggage claim. Private jet arrivals are met at the FBO.",
    },
    {
      icon: Radar,
      title: "Flight Tracking",
      description: "We monitor every flight in real time and adjust pickup accordingly, including weather delays.",
    },
    {
      icon: Timer,
      title: "Complimentary Wait Time",
      description: "Complimentary wait time is included on airport transfers, so you can collect your luggage at your own pace.",
    },
    {
      icon: Luggage,
      title: "Ski & Luggage Assistance",
      description: "Your chauffeur loads your luggage at the vehicle, steps from baggage claim. Ski equipment travels in the Escalade or Sprinter.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Early morning or late-night arrival, we operate around the clock, every day of the year.",
    },
  ],
  destinations: [
    { name: "Downtown Aspen", detail: "~5-10 min" },
    { name: "Snowmass Village", detail: "~15-20 min" },
    { name: "Aspen Highlands", detail: "~10 min" },
    { name: "Buttermilk", detail: "~5 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The ultimate VIP arrival for up to three passengers with standard luggage. The only Rolls Royce Cullinan available for hire in Aspen, featuring a bespoke Mandarin interior and champagne cooler. It does not carry ski equipment.",
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
        "Seats up to 13 passengers in a first-class cabin with captain's chairs, conference setup, and entertainment system. Room for group luggage and ski equipment.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "Where does my driver meet me at Aspen airport?",
      answer:
        "Your chauffeur meets you in the Ground Transportation Circle directly outside baggage claim at Aspen-Pitkin County Airport (ASE). Airport rules require car service drivers to stay with their vehicles and do not allow them inside the terminal, even to help with luggage, so your chauffeur is waiting at the car and loads your bags there. Private jet arrivals are met at the FBO.",
    },
    {
      question: "How long is the drive from Aspen airport to downtown Aspen and Snowmass?",
      answer:
        "Downtown Aspen is 5 to 10 minutes from ASE, and Snowmass Village is 15 to 20 minutes. The airport is about 3 miles from downtown Aspen on Highway 82. Buttermilk is about 5 minutes from the airport, and Aspen Highlands is roughly 10 minutes away.",
    },
    {
      question: "Which vehicle should I book for my group and ski gear?",
      answer:
        "Book the Cadillac Escalade for up to 5 passengers with luggage and skis, or the Executive Sprinter for up to 13. Both carry skis and snowboards. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so if you want the Cullinan and are traveling with ski gear, add an Escalade for the equipment.",
    },
    {
      question: "What happens if my flight is delayed, cancelled or diverted?",
      answer:
        "We track your flight and move the pickup to match the new arrival time, with complimentary wait time included. If weather sends your flight to another airport, call dispatch at (970) 452-6636 as soon as you know. We will send a vehicle to the airport you actually land at whenever one is available and drive you to Aspen from there.",
    },
    {
      question: "Do you meet private jets at Aspen airport?",
      answer:
        "Yes. Private aircraft at ASE are handled by Atlantic Aviation, the airport's FBO, and your chauffeur meets you there instead of at the commercial terminal. Send us your tail number and estimated arrival time when you book so we can follow the aircraft and coordinate with the FBO.",
    },
    {
      question: "Is Aspen airport closing in 2027?",
      answer:
        "Yes. ASE will be closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., with no commercial or private flights during that period. The alternates the airport lists include Eagle (EGE), Rifle (RIL), Grand Junction, Montrose and Denver (DEN). We run transfers to Aspen from Eagle (about 90 minutes), Rifle (about 75 minutes) and Denver (about 3.5 to 4 hours); call dispatch about other airports.",
    },
    {
      question: "Does winter weather affect the transfer from ASE?",
      answer:
        "The drive itself is short and stays on Highway 82, so snow usually adds only a few minutes. The bigger winter factor is the flight: ASE delays and diversions are common in storms. That is why we track flights rather than working from the scheduled time, and why the Escalade, with four-wheel drive and winter tires, is our most requested vehicle.",
    },
    {
      question: "How do I book an Aspen airport transfer?",
      answer:
        "Use the online booking form on this page for an instant quote: enter your pickup, destination, date and vehicle. You can also call dispatch at (970) 452-6636, 24 hours a day. Have your airline and flight number ready, or your tail number for a private arrival.",
    },
  ],
  relatedServices: [
    { label: "Private Jet / FBO Transfer", href: "/aspen-private-jet-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
