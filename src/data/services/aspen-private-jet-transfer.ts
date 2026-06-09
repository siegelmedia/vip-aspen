import { Plane, Clock, ShieldCheck, Luggage, Radar, MapPin } from "lucide-react";
import heroBg from "@/assets/service-private-jet-transfer.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-private-jet-transfer",
  seo: {
    title: "Aspen Private Jet & FBO Transfer | Tarmac Car Service",
    description:
      "Planeside private jet transfers in Aspen. Tarmac pickup at Atlantic Aviation (ASE), Eagle & Rifle FBOs. Rolls Royce, Escalade & Sprinter coordinated with your flight crew. Call (970) 452-6636.",
    keywords:
      "Aspen private jet transfer, FBO car service Aspen, Atlantic Aviation Aspen, tarmac transfer Aspen, planeside pickup ASE, private aviation ground transportation Aspen, Aspen jet ground transport, Eagle FBO transfer, Rifle FBO car service",
    canonicalUrl: "/aspen-private-jet-transfer",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Private Aviation",
    headline: "Aspen Private Jet & {{FBO Transfers}}",
    description:
      "Planeside ground transportation coordinated directly with your flight crew and schedulers. Step off the jet and into a chilled Rolls Royce, Escalade, or Sprinter — at Atlantic Aviation (ASE), Eagle (EGE), or Rifle (RIL).",
    bgImage: heroBg,
    ctaLabel: "Arrange Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Ground Service That Matches the {{Aircraft}}",
    body: `<p>For clients arriving by private aircraft, the experience on the ground should be indistinguishable from the experience in the air. VIP Aspen coordinates directly with your flight department, scheduler, or FBO to deliver planeside service at Aspen-Pitkin County Airport (ASE) and the surrounding private-aviation gateways — Eagle County (EGE) and Rifle (RIL). When tail numbers and slot times change, we adjust in real time. Your chauffeur is staged and waiting before your wheels touch the tarmac, the cabin is pre-warmed or cooled to your preference, and your luggage moves from the aircraft hold to the vehicle without you lifting a bag.</p>
<p>Aspen's Atlantic Aviation is one of the busiest private-jet FBOs in the United States during peak season, and ASE's single-runway, high-altitude operation means schedules shift constantly with weather and traffic. Our chauffeurs work this environment year-round. They know the ramp protocols, the staging areas, and the difference between a quick turn and a tech stop. For arrivals diverted to Rifle or Eagle — common when ASE closes for weather — we reposition vehicles to meet you wherever you actually land, then handle the onward drive to Aspen, Snowmass, or your private residence.</p>
<p>Discretion is the default. Our security-trained chauffeurs routinely handle high-profile principals, family offices, and protective details, and our <a href="/security-driver">security driver</a> and <a href="/executive-protection">executive protection</a> services extend seamlessly from the FBO to your destination. Whether you need a single <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for a principal, a fleet of <a href="/cadillac-escalade">Cadillac Escalades</a> for a family and staff, or an <a href="/executive-sprinter">Executive Sprinter</a> for a full traveling party, we build the ground plan around your itinerary.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Planeside Tarmac Pickup",
      description:
        "Direct ramp access at Atlantic Aviation (ASE) and regional FBOs. Your vehicle meets the aircraft — no terminal, no waiting.",
    },
    {
      icon: Radar,
      title: "Flight & Tail Tracking",
      description:
        "We monitor your aircraft in real time and coordinate with your flight crew and scheduler so timing is exact, even when slots shift.",
    },
    {
      icon: MapPin,
      title: "Diversion Coverage",
      description:
        "When ASE closes for weather, we reposition to Rifle or Eagle and handle the onward drive to Aspen — no scrambling for a ride.",
    },
    {
      icon: Luggage,
      title: "Full Baggage Handling",
      description:
        "Luggage, ski equipment, and gear moved from aircraft hold to vehicle by your chauffeur. Nothing for you to manage.",
    },
    {
      icon: ShieldCheck,
      title: "Discreet & Security-Trained",
      description:
        "Vetted chauffeurs experienced with high-profile principals, family offices, and protective details. Discretion guaranteed.",
    },
    {
      icon: Clock,
      title: "24/7 Slot Flexibility",
      description:
        "Pre-dawn departures, late arrivals, last-minute changes — we operate around the clock to match private-aviation schedules.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Share Your Flight Details", description: "Send us your tail number, FBO, slot time, passenger count, and destination — or connect us directly with your scheduler." },
    { step: 2, title: "We Coordinate Planeside", description: "We confirm ramp access with the FBO, track your aircraft, and stage your vehicle before you land." },
    { step: 3, title: "Step Off & Go", description: "Your chauffeur meets the aircraft, handles all luggage, and departs the moment you're settled — no terminal detour." },
    { step: 4, title: "Door to Destination", description: "Non-stop, discreet transfer to your Aspen residence, hotel, or resort. Return legs and multi-day coverage available." },
  ],
  faqs: [
    {
      question: "Can you pick me up directly on the tarmac at Aspen Airport?",
      answer:
        "Yes. We provide planeside service at Atlantic Aviation (the FBO at ASE) and coordinate ramp access with the FBO so your vehicle meets the aircraft directly, weather and ramp permitting.",
    },
    {
      question: "What happens if my flight is diverted to Rifle or Eagle?",
      answer:
        "ASE closes for weather more often than any other airport serving Aspen. If you're diverted to Rifle (RIL) or Eagle (EGE), we reposition a vehicle to meet you where you land and handle the onward drive to Aspen — typically 60 minutes from Rifle or about 90 minutes from Eagle.",
    },
    {
      question: "Do you coordinate with our flight department or scheduler?",
      answer:
        "Absolutely. We work directly with flight crews, schedulers, and family offices. Share the trip once and we manage the ground side end to end, including last-minute slot and tail changes.",
    },
    {
      question: "Which vehicles are available for private jet transfers?",
      answer:
        "Our full fleet: the Rolls Royce Cullinan for principals, Cadillac Escalades for families and staff, and the 13-passenger Executive Sprinter for full traveling parties. We can stage multiple vehicles for larger groups.",
    },
    {
      question: "Is the service discreet for high-profile clients?",
      answer:
        "Yes. Discretion is standard. Our chauffeurs are security-trained and experienced with high-profile principals, and our security driver and executive protection services extend seamlessly from the FBO to your destination.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "During peak periods — the winter holidays, Food & Wine Classic, and major events — we recommend arranging FBO transfers as early as possible. For members and established clients we hold availability even on sold-out weekends.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer (ASE)", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Security Drivers", href: "/security-driver" },
    { label: "Rolls Royce Cullinan", href: "/rolls-royce-cullinan" },
  ],
};

export default data;
