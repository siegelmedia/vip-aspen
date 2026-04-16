import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "st-regis-aspen-transportation",
  seo: {
    title: "St. Regis Aspen Transportation | Private Car Service",
    description:
      "Private car service for St. Regis Aspen guests. Airport transfers, ski resort shuttles, hourly chauffeur & event transport. Call (970) 452-6636.",
    keywords:
      "St Regis Aspen car service, St Regis Aspen airport transfer, St Regis Aspen transportation, luxury car service St Regis, Aspen St Regis chauffeur",
    canonicalUrl: "/st-regis-aspen-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "St. Regis Aspen",
    headline: "Private Transportation for {{St. Regis Aspen}} Guests",
    description:
      "Dedicated luxury car service for guests of The St. Regis Aspen Resort. Airport transfers, hourly chauffeur, ski mountain shuttles, and on-demand transportation — all coordinated with your hotel's standards in mind.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Transportation That Matches the {{St. Regis Standard}}",
    body: `<p>The St. Regis Aspen Resort sits at the base of Aspen Mountain, steps from the Silver Queen Gondola and in the heart of one of the most exclusive resort settings in North America. With its legendary butler service, Remède Spa, and slope-side location, the St. Regis delivers a caliber of hospitality that demands equally refined transportation. VIP Aspen provides that match — dedicated luxury vehicles and professional chauffeurs who understand the standards your stay requires.</p>
<p>Having a dedicated car at the St. Regis means seamless transitions between the mountain, the town, and the resort. Your driver handles the ski valet logistics, waits while you enjoy a treatment at Remède Spa, and has the vehicle warm and ready when you're heading to dinner downtown. Our <a href="/hourly-chauffeur">hourly chauffeur service</a> is especially popular with St. Regis guests — a single driver and vehicle on your schedule all day, eliminating the unreliability of ride-shares and the hassle of rental cars on winter mountain roads.</p>
<p>We serve St. Regis guests with our complete fleet: the <a href="/cadillac-escalade">Cadillac Escalade</a> for families and groups of up to 5, the <a href="/executive-sprinter">Executive Sprinter</a> for larger parties of up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for guests who want the ultimate luxury arrival. Every <a href="/aspen-airport-transfer">airport transfer</a> includes flight tracking, meet-and-greet, and complimentary wait time. <a href="/membership">VIP Members</a> receive priority booking during peak weeks when vehicles book out fast.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Direct service from ASE, Eagle, Rifle, and Denver airports to The St. Regis Aspen Resort. Flight tracking and meet-and-greet included with every transfer.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated vehicle and driver on your schedule. Ski days, spa appointments, dinner reservations, shopping — your car is always waiting.",
    },
    {
      icon: Star,
      title: "Butler-Level Coordination",
      description:
        "We coordinate directly with The St. Regis concierge and butler teams to align pickup times, special requests, and multi-day transportation plans.",
    },
    {
      icon: MapPin,
      title: "Ski Day Logistics",
      description:
        "Drop-off at the Silver Queen Gondola or any of Aspen's four mountains. Your driver handles gear, holds your après-ski bags, and picks you up at the base.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade, Executive Sprinter, and Rolls Royce Cullinan. Choose the vehicle that fits your group size and the occasion.",
    },
  ],
  faqs: [
    {
      question: "How far is ASE airport from The St. Regis Aspen?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is approximately 5 minutes from The St. Regis Aspen Resort. We include 60 minutes of complimentary wait time for flight delays and baggage claim.",
    },
    {
      question: "What's the best vehicle for a family at The St. Regis?",
      answer:
        "The Cadillac Escalade comfortably fits 5 passengers with luggage and ski gear — the most popular choice for families. For larger groups or multi-family trips, the Executive Sprinter seats up to 13. Car seats and boosters available on request.",
    },
    {
      question: "Do you coordinate with The St. Regis concierge?",
      answer:
        "Yes. We work directly with The St. Regis concierge and butler teams to coordinate pickups, drop-offs, timing, and any special requests for your transportation.",
    },
    {
      question: "Can you handle ski day transportation?",
      answer:
        "Absolutely. We drop you at the gondola or any mountain base, hold your gear and après-ski bags in the vehicle, and pick you up when you're ready. Switch mountains mid-day without any hassle.",
    },
    {
      question: "Can I book a driver for my entire stay?",
      answer:
        "Yes. Our multi-day and weekly booking options give you the same dedicated driver and vehicle for your entire visit. VIP Members receive discounted multi-day rates and priority scheduling.",
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
