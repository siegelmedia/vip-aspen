import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "hotel-jerome-transportation",
  seo: {
    title: "Hotel Jerome Transportation | Luxury Car Service Aspen",
    description:
      "Private car service for Hotel Jerome guests. Airport transfers, hourly chauffeur, dinner reservations & ski transfers. Call (970) 452-6636.",
    keywords:
      "Hotel Jerome car service, Hotel Jerome airport transfer, Hotel Jerome Aspen transportation, luxury car service Hotel Jerome, Hotel Jerome chauffeur",
    canonicalUrl: "/hotel-jerome-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Hotel Jerome",
    headline: "Luxury Transportation for {{Hotel Jerome}} Guests",
    description:
      "Seamless airport transfers, hourly chauffeur service, and on-demand luxury transportation for guests of Aspen's iconic Hotel Jerome. Your driver knows the property, the drop-off, and the standard of service you expect.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Aspen's Most Iconic Hotel Deserves {{Matching Transportation}}",
    body: `<p>The Hotel Jerome, built in 1889, is Aspen's most storied luxury hotel — and its guests expect a level of service that matches. VIP Aspen provides dedicated transportation for Jerome guests, from the moment you land at <a href="/aspen-airport-transfer">Aspen-Pitkin County Airport</a> to dinner reservations at Element 47 and everywhere in between. Our drivers know the Jerome's porte-cochère, the loading zones, and the concierge team by name.</p>
<p>For families staying at the Jerome, our <a href="/hourly-chauffeur">hourly chauffeur service</a> is the perfect complement — a dedicated SUV and driver on call for ski days, shopping trips to downtown, and multi-stop adventures across the valley. No hunting for parking on Galena Street, no waiting in the cold for a ride.</p>
<p>We serve Jerome guests with our full fleet: <a href="/cadillac-escalade">Cadillac Escalade</a> for families and small groups, <a href="/executive-sprinter">Executive Sprinter</a> for larger parties, and <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for the ultimate arrival. <a href="/membership">VIP Members</a> get priority booking during peak season.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Direct service from ASE, Eagle, Rifle, and Denver airports to the Hotel Jerome front entrance. Flight tracking and meet-and-greet included.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated SUV and driver on your schedule. Ski resorts, restaurants, shopping, events — your car waits while you enjoy Aspen.",
    },
    {
      icon: Star,
      title: "Concierge Coordination",
      description:
        "We work directly with the Hotel Jerome concierge team to coordinate pickups, timing, and special requests seamlessly.",
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      description:
        "Our drivers know every restaurant, trail, and venue within minutes of the Jerome. Ask for recommendations — they'll steer you right.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade, Sprinter, and Rolls Royce Cullinan. Match the vehicle to your group size and occasion.",
    },
  ],
  faqs: [
    {
      question: "How do I book a car from the airport to Hotel Jerome?",
      answer:
        "Call us or book online with your flight details. We track your flight, meet you at baggage claim (ASE) or curbside (other airports), and drive you directly to the Jerome's front entrance.",
    },
    {
      question: "Can you coordinate with the Hotel Jerome concierge?",
      answer:
        "Yes. We regularly work with the Jerome's concierge team and can coordinate pickup times, special requests, and multi-day itineraries.",
    },
    {
      question: "What's the best option for a family at the Jerome?",
      answer:
        "The Cadillac Escalade fits 5 passengers with luggage and ski gear. For larger families, the Executive Sprinter seats up to 13. Car seats available on request.",
    },
    {
      question: "How far is ASE airport from Hotel Jerome?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is approximately 5 minutes from the Hotel Jerome. We include 60 minutes of complimentary wait time for flight delays.",
    },
    {
      question: "Can I keep a driver on call during my stay?",
      answer:
        "Absolutely. Our hourly chauffeur service gives you a dedicated driver and vehicle for as long as you need — by the hour, half-day, or full day.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "St. Regis Transportation", href: "/st-regis-aspen-transportation" },
  ],
};

export default data;
