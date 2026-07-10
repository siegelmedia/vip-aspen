import { MapPin, Clock, Radar, Luggage, Snowflake, Mountain } from "lucide-react";
import heroBg from "@/assets/hero-vail-to-aspen.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "vail-to-aspen-car-service",
  seo: {
    title: "Vail to Aspen Car Service | Private Luxury Transfer",
    description:
      "Private car service from Vail to Aspen and Aspen to Vail. Rolls Royce, Escalade & Sprinter for the ~2-hour mountain transfer. Door-to-door, flight-tracked, 24/7. Call (970) 452-6636.",
    keywords:
      "Vail to Aspen car service, Aspen to Vail shuttle, Vail to Aspen private transfer, Beaver Creek to Aspen car service, Eagle Vail to Aspen, luxury car Vail Aspen, resort to resort transfer Colorado",
    canonicalUrl: "/vail-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Vail ↔ Aspen",
    bgImage: heroBg,
    headline: "Private Car Service {{Vail to Aspen}}",
    description:
      "The two-hour drive between Vail and Aspen, done right. Skip shared shuttles and unreliable ride-share — travel resort to resort in a chauffeured Rolls Royce, Escalade, or Sprinter, door to door.",
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Resort to Resort, the {{Right Way}}",
    body: `<p>Vail and Aspen are Colorado's two crown-jewel resort towns, separated by roughly 100 miles of spectacular — and demanding — mountain highway. Many travelers split a trip between the two, or fly into Eagle County Airport (EGE) near Vail and continue on to Aspen. The standard options are unappealing: shared shuttle vans that stop repeatedly and run on someone else's schedule, or ride-share that is scarce and wildly priced once you leave the I-70 corridor. VIP Aspen offers the alternative the route deserves — a private, chauffeured transfer that goes directly from your door in Vail or Beaver Creek to your door in Aspen, in about two hours, with no stops you didn't ask for.</p>
<p>The drive itself follows I-70 west from Vail through Glenwood Canyon — a breathtaking twelve-mile corridor carved into the walls of the Colorado River gorge — before turning south at Glenwood Springs onto Highway 82 along the Roaring Fork River into Aspen. In summer, Independence Pass over the Continental Divide offers a shorter but slower and far more dramatic alternative; in winter the Pass closes and the I-70 route is the only way through. Either way, this is a drive defined by altitude, weather, and switchbacks. Our chauffeurs run these roads year-round in a 4WD fleet with winter tires, so black ice and sudden whiteouts are routine, not adventures.</p>
<p>Whether you're heading to Aspen for the weekend, connecting from a flight into <a href="/eagle-airport-transfer">Eagle County Airport</a>, or making the reverse trip from Aspen back to Vail, we tailor the vehicle to your group. The <a href="/cadillac-escalade">Cadillac Escalade</a> handles families and ski gear with ease, the <a href="/executive-sprinter">Executive Sprinter</a> carries groups of up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> turns the transfer itself into part of the trip. Stops in Vail, Beaver Creek, or Glenwood Springs along the way are easy to arrange.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door, No Stops",
      description:
        "Direct from your Vail or Beaver Creek lodging to your Aspen destination. No shared vans, no detours, no waiting on other passengers.",
    },
    {
      icon: Snowflake,
      title: "Winter-Ready Fleet",
      description:
        "4WD vehicles with winter tires and chauffeurs who run the I-70 and Glenwood Canyon corridor year-round in every condition.",
    },
    {
      icon: Mountain,
      title: "Independence Pass in Season",
      description:
        "When the Pass is open in summer, we can take the scenic Continental Divide route — one of the most spectacular drives in Colorado.",
    },
    {
      icon: Radar,
      title: "Flight Tracking from EGE",
      description:
        "Connecting through Eagle County Airport? We track your flight and meet you at the FBO or terminal for the onward drive to Aspen.",
    },
    {
      icon: Luggage,
      title: "Ski & Luggage Handled",
      description:
        "Every bag and every pair of skis loaded and secured by your chauffeur. Travel between resorts without touching your gear.",
    },
    {
      icon: Clock,
      title: "Round-Trip & On-Demand",
      description:
        "Book a one-way transfer, a round trip, or keep the vehicle on call for your stay. Aspen to Vail return legs always available.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Tell Us the Route", description: "Vail to Aspen, Beaver Creek to Aspen, or the reverse — share your pickup, destination, date, and group size." },
    { step: 2, title: "Choose Your Vehicle", description: "Escalade for families, Sprinter for groups, Cullinan for the ultimate transfer. We match the car to your party." },
    { step: 3, title: "Door-to-Door Pickup", description: "Your chauffeur arrives at your lodging, loads every bag, and departs on your schedule." },
    { step: 4, title: "Arrive Relaxed", description: "A direct ~2-hour transfer with optional stops, refreshments aboard, and zero logistics to manage." },
  ],
  faqs: [
    {
      question: "How long is the drive from Vail to Aspen?",
      answer:
        "About two hours, roughly 100 miles via I-70 west to Glenwood Springs, then Highway 82 south into Aspen. In summer, the Independence Pass route over the Continental Divide is an alternative but takes longer.",
    },
    {
      question: "Is Independence Pass open year-round?",
      answer:
        "No. Independence Pass (Highway 82 over the Continental Divide) closes in winter, typically from early November until late May. During those months the I-70 and Glenwood Springs route is the only way between Vail and Aspen.",
    },
    {
      question: "Can you pick me up from Eagle County Airport (EGE) instead?",
      answer:
        "Yes. EGE near Vail is a common arrival point for travelers heading to Aspen. We track your flight, meet you at the terminal or FBO, and handle the roughly 90-minute drive to Aspen. See our Eagle Airport Transfer page for details.",
    },
    {
      question: "Do you serve Beaver Creek as well as Vail?",
      answer:
        "Absolutely. We provide door-to-door transfers from Vail Village, Beaver Creek, Avon, and the surrounding Eagle Valley to Aspen and Snowmass, and back.",
    },
    {
      question: "Can we make stops along the way?",
      answer:
        "Yes. Stops in Vail, Beaver Creek, Glenwood Springs, or for a meal along the route are easy to arrange — just let us know when you book.",
    },
    {
      question: "Do you offer the return trip from Aspen to Vail?",
      answer:
        "Of course. We handle Aspen to Vail and Aspen to Beaver Creek transfers just as readily as the inbound trip, including round-trip and multi-day arrangements.",
    },
  ],
  relatedServices: [
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Denver to Aspen Car Service", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
  ],
};

export default data;
