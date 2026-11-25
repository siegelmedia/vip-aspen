import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-st-regis.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "st-regis-aspen-transportation",
  seo: {
    title: "St. Regis Aspen Transportation & Car Service",
    description:
      "Private car service for St. Regis Aspen guests. Airport transfers, rides to all four ski mountains, hourly chauffeur & event transport. Call (970) 452-6636.",
    keywords:
      "St Regis Aspen car service, St Regis Aspen airport transfer, St Regis Aspen transportation, luxury car service St Regis, Aspen St Regis chauffeur",
    canonicalUrl: "/st-regis-aspen-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "St. Regis Aspen",
    bgImage: heroBg,
    headline: "Private Transportation for {{St. Regis Aspen}} Guests",
    description:
      "Private car service for guests of The St. Regis Aspen Resort on Dean Street, at the base of Aspen Mountain. Airport transfers, an hourly chauffeur, and rides to Aspen Highlands, Buttermilk, and Snowmass.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Beyond Walking Distance of {{Dean Street}}",
    body: `<p>The St. Regis Aspen Resort is at 315 East Dean Street, at the base of Aspen Mountain between the Silver Queen Gondola and Lift 1A. Aspen Mountain and the downtown core are a short walk from the door, and <a href="/aspen-airport-transfer">Aspen-Pitkin County Airport</a> is 5 to 10 minutes away by car. VIP Aspen provides private car service for guests staying there.</p>
<p>Where a car matters is everything beyond walking distance. Three of Aspen Snowmass's four mountains are a drive away: Aspen Highlands and Buttermilk are each about 10 minutes from the hotel, and Snowmass is about 20. Our <a href="/hourly-chauffeur">hourly chauffeur service</a> keeps one driver and vehicle on your schedule, so you can ski a different mountain each day, switch at lunch, and have a warm car waiting at the base instead of relying on ride-share or driving a rental on winter roads.</p>
<p>Choose the vehicle by group size: the <a href="/cadillac-escalade">Cadillac Escalade</a> for up to 5 passengers with luggage and skis, the <a href="/executive-sprinter">Executive Sprinter</a> for up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for up to 3 passengers with standard luggage. The Cullinan does not carry ski equipment. Every airport transfer includes flight tracking and complimentary wait time, and <a href="/membership">VIP Members</a> receive priority booking during peak weeks.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Flight-tracked transfers from ASE (5 to 10 minutes), Eagle, Rifle, and Denver airports to The St. Regis Aspen Resort on Dean Street.",
    },
    {
      icon: MapPin,
      title: "All Four Mountains",
      description:
        "Aspen Mountain is a short walk from the hotel. We drive you and your gear to Aspen Highlands, Buttermilk, or Snowmass and pick you up at the base.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated vehicle and driver on your schedule for ski days, spa appointments, dinner reservations, and shopping.",
    },
    {
      icon: Star,
      title: "Planned Around Your Stay",
      description:
        "Send us your itinerary, or have your assistant or concierge book for you, and we schedule each ride around it.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade for up to 5 with luggage and skis, Executive Sprinter for up to 13, and the Rolls Royce Cullinan for up to 3 with standard luggage.",
    },
  ],
  faqs: [
    {
      question: "How far is ASE airport from The St. Regis Aspen?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is 5 to 10 minutes from The St. Regis Aspen Resort. Complimentary wait time is included on airport transfers to cover flight delays and baggage claim.",
    },
    {
      question: "Where does my driver meet me at the airport?",
      answer:
        "At Aspen airport, your chauffeur meets you in the Ground Transportation Circle directly outside baggage claim and loads your luggage at the vehicle. Private jet arrivals are met at the FBO. For Eagle, Rifle and Denver, we confirm the meeting point with your booking.",
    },
    {
      question: "Where is The St. Regis Aspen, and do I need a car there?",
      answer:
        "The St. Regis Aspen Resort is at 315 East Dean Street, at the base of Aspen Mountain between the Silver Queen Gondola and Lift 1A. You can walk to Aspen Mountain and downtown. A car is useful for the airport, for Aspen Highlands, Buttermilk and Snowmass, and for evenings when you would rather not walk in the cold.",
    },
    {
      question: "What's the best vehicle for a family at The St. Regis?",
      answer:
        "The Cadillac Escalade fits 5 passengers with luggage and ski gear and is the most popular choice for families. For larger groups or multi-family trips, the Executive Sprinter seats up to 13. Car seats and boosters are available on request. The Rolls Royce Cullinan seats 3 and does not carry ski equipment.",
    },
    {
      question: "Can you handle ski day transportation?",
      answer:
        "Yes. We drop you at any mountain base, keep your spare bags in the vehicle, and pick you up when you are ready. Skis and boards travel in the Escalade or Sprinter, and you can switch mountains during the day.",
    },
    {
      question: "Can I book a driver for my entire stay?",
      answer:
        "Yes. Our hourly and multi-day chauffeur service gives you a dedicated driver and vehicle for your visit. Use the booking form on this page for an instant quote, or call (970) 452-6636. VIP Aspen is an independent car service, so you or your assistant book directly with us.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Hotel Jerome Transportation", href: "/hotel-jerome-transportation" },
    { label: "Little Nell Transportation", href: "/little-nell-transportation" },
  ],
};

export default data;
