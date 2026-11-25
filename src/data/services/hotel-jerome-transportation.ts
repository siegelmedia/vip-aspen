import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-hotel-jerome.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "hotel-jerome-transportation",
  seo: {
    title: "Hotel Jerome Transportation & Car Service",
    description:
      "Private car service for Hotel Jerome guests. Airport transfers, hourly chauffeur, dinner reservations & ski transfers. Call (970) 452-6636.",
    keywords:
      "Hotel Jerome car service, Hotel Jerome airport transfer, Hotel Jerome Aspen transportation, luxury car service Hotel Jerome, Hotel Jerome chauffeur",
    canonicalUrl: "/hotel-jerome-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Hotel Jerome",
    bgImage: heroBg,
    headline: "Luxury Transportation for {{Hotel Jerome}} Guests",
    description:
      "Airport transfers, hourly chauffeur service, and on-demand private cars for guests staying at Hotel Jerome on Main Street in downtown Aspen, 5 to 10 minutes from Aspen airport.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "A Private Car for Your Stay on {{Main Street}}",
    body: `<p>Hotel Jerome has stood at 330 East Main Street since 1889, in the middle of downtown Aspen. It is 5 to 10 minutes from <a href="/aspen-airport-transfer">Aspen-Pitkin County Airport</a>, and the Silver Queen Gondola on Aspen Mountain is about a third of a mile away, roughly a 10-minute walk. VIP Aspen provides private car service for guests staying there, from the airport pickup to the last ride back after dinner.</p>
<p>Because the Jerome sits on Main Street rather than at the base of a lift, a car earns its keep on ski days. We drive you and your gear to the gondola in a couple of minutes, or to Aspen Highlands, Buttermilk, or Snowmass, and collect you when you come off the mountain. Our <a href="/hourly-chauffeur">hourly chauffeur service</a> keeps one vehicle and driver on call for the day, so there is no parking to find downtown and no waiting in the cold for a ride.</p>
<p>Choose the vehicle by group size: the <a href="/cadillac-escalade">Cadillac Escalade</a> for up to 5 passengers with luggage and skis, the <a href="/executive-sprinter">Executive Sprinter</a> for up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for up to 3 passengers with standard luggage. The Cullinan does not carry ski equipment. <a href="/membership">VIP Members</a> get priority booking during peak season.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Flight-tracked transfers from ASE (5 to 10 minutes), Eagle, Rifle, and Denver airports to the Hotel Jerome entrance on Main Street.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated SUV and driver on your schedule. Ski resorts, restaurants, shopping, events: your car waits while you enjoy Aspen.",
    },
    {
      icon: MapPin,
      title: "Rides to the Lifts",
      description:
        "The Silver Queen Gondola is about a 10-minute walk from the Jerome. We drive you and your gear there, or to Aspen Highlands, Buttermilk, or Snowmass.",
    },
    {
      icon: Star,
      title: "Planned Around Your Stay",
      description:
        "Send us your dinner reservations and ski plans, or have your assistant or concierge book for you, and we schedule the car around them.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade for up to 5 with luggage and skis, Sprinter for up to 13, and the Rolls Royce Cullinan for up to 3 with standard luggage.",
    },
  ],
  faqs: [
    {
      question: "How do I book a car from the airport to Hotel Jerome?",
      answer:
        "Use the online booking form on this page for an instant quote, or call (970) 452-6636, and include your flight details. We track your flight and drive you to the Jerome's entrance on Main Street. Commercial arrivals at Aspen airport are met in the Ground Transportation Circle directly outside baggage claim, and private jets are met at the FBO. For Eagle, Rifle and Denver, we confirm the meeting point with your booking.",
    },
    {
      question: "How far is ASE airport from Hotel Jerome?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is 5 to 10 minutes from Hotel Jerome, about 3 miles along Highway 82 and Main Street. Complimentary wait time is included on airport transfers in case your flight runs late.",
    },
    {
      question: "Where is Hotel Jerome, and how close is it to the gondola?",
      answer:
        "Hotel Jerome is at 330 East Main Street in downtown Aspen. The Silver Queen Gondola at the base of Aspen Mountain is about a third of a mile away, roughly a 10-minute walk or a couple of minutes by car. With skis and boots, most guests prefer the ride.",
    },
    {
      question: "What's the best option for a family at the Jerome?",
      answer:
        "The Cadillac Escalade fits 5 passengers with luggage and ski gear. For larger families, the Executive Sprinter seats up to 13. Car seats are available on request. The Rolls Royce Cullinan seats 3 and does not carry ski equipment.",
    },
    {
      question: "Can I keep a driver on call during my stay?",
      answer:
        "Yes. Our hourly chauffeur service gives you a dedicated driver and vehicle for as long as you need: by the hour, for a half day, or for a full day.",
    },
    {
      question: "Can my assistant or the hotel concierge book for me?",
      answer:
        "Yes. Anyone arranging your trip can book on your behalf online or by phone. VIP Aspen is an independent car service, so the reservation is made directly with us rather than through the hotel.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "St. Regis Transportation", href: "/st-regis-aspen-transportation" },
    { label: "Little Nell Transportation", href: "/little-nell-transportation" },
  ],
};

export default data;
