import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "little-nell-transportation",
  seo: {
    title: "Little Nell Transportation | Luxury Car Service Aspen",
    description:
      "Private car service for Little Nell guests. Airport transfers, as-directed chauffeur, dinner reservations & events. Call (970) 452-6636.",
    keywords:
      "Little Nell car service, Little Nell airport transfer, Little Nell Aspen transportation, luxury car service Little Nell, Little Nell chauffeur Aspen",
    canonicalUrl: "/little-nell-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "The Little Nell",
    headline: "Luxury Transportation for {{The Little Nell}} Guests",
    description:
      "Dedicated car service for guests of Aspen's only five-star, five-diamond hotel. Airport transfers, hourly chauffeur, après-ski rides, and on-demand luxury transportation — matched to the standard The Little Nell is known for.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Five-Star Hotel, {{Five-Star Transportation}}",
    body: `<p>The Little Nell is Aspen's only Forbes Five-Star, AAA Five-Diamond hotel — a distinction earned through relentless attention to detail and a guest experience that leaves nothing to chance. Located at the base of Aspen Mountain adjacent to the Silver Queen Gondola, The Little Nell is the epicenter of luxury in the valley. VIP Aspen provides the transportation to match that standard: professional chauffeurs, impeccable vehicles, and a service philosophy built on anticipating what guests need before they ask.</p>
<p>For Little Nell guests, having a dedicated car means the luxury never pauses. Step from the hotel into a waiting <a href="/cadillac-escalade">Cadillac Escalade</a> for a day on the mountain, then straight to a reservation at element 47 — The Little Nell's acclaimed restaurant and one of Aspen's finest dining destinations — without a moment's friction. Our <a href="/hourly-chauffeur">hourly chauffeur service</a> keeps a driver and vehicle on your schedule all day, so you can explore the valley, visit Snowmass Village, shop downtown, and return to the hotel on your own timeline. No parking, no waiting, no ride-share uncertainty.</p>
<p>We serve Little Nell guests with every vehicle in our fleet: the <a href="/cadillac-escalade">Cadillac Escalade</a> for families and small groups, the <a href="/executive-sprinter">Executive Sprinter</a> for larger parties and events, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for guests who want the most exclusive arrival in Aspen. Every <a href="/aspen-airport-transfer">airport transfer</a> includes real-time flight tracking, meet-and-greet service, and complimentary wait time. <a href="/membership">VIP Members</a> receive priority booking during peak season — essential during Christmas, New Year's, and the Food & Wine Classic when luxury vehicles book out weeks in advance.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Direct service from ASE, Eagle, Rifle, and Denver airports to The Little Nell's front entrance. Flight tracking and meet-and-greet included with every transfer.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated vehicle and driver on your schedule. Ski days, dining, shopping, spa visits — your car waits while you enjoy the best of Aspen.",
    },
    {
      icon: Star,
      title: "Five-Star Coordination",
      description:
        "We coordinate directly with The Little Nell's concierge team to align pickups, special occasions, and multi-day itineraries with the hotel's exceptional standards.",
    },
    {
      icon: MapPin,
      title: "Après-Ski Service",
      description:
        "Your driver meets you at the base of Aspen Mountain with a warm vehicle, holds your gear, and takes you wherever the evening leads — dinner, drinks, or back to the hotel.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade, Executive Sprinter, and Rolls Royce Cullinan. Choose the vehicle that matches your group size and the moment.",
    },
  ],
  faqs: [
    {
      question: "How far is ASE airport from The Little Nell?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is approximately 5 minutes from The Little Nell. We include 60 minutes of complimentary wait time for flight delays and baggage claim.",
    },
    {
      question: "What vehicle is best for a family staying at The Little Nell?",
      answer:
        "The Cadillac Escalade is our most popular choice for families — it fits 5 passengers comfortably with luggage and ski gear. For larger families or groups, the Executive Sprinter seats up to 13. Car seats and boosters are available on request at no charge.",
    },
    {
      question: "Do you work with The Little Nell's concierge team?",
      answer:
        "Yes. We coordinate regularly with The Little Nell's concierge to align pickup times, manage special requests, and plan multi-day transportation itineraries for guests.",
    },
    {
      question: "Can you handle après-ski pickups at Aspen Mountain?",
      answer:
        "Absolutely. Your driver waits at the base of Aspen Mountain with the vehicle warm and ready. We hold your gear and take you to dinner, back to the hotel, or wherever the evening goes.",
    },
    {
      question: "Can I book a dedicated driver for my entire Little Nell stay?",
      answer:
        "Yes. Our hourly and multi-day chauffeur options give you the same driver and vehicle for your entire visit — by the hour, half-day, full day, or the full week. VIP Members receive discounted rates and priority booking.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Hotel Jerome Transportation", href: "/hotel-jerome-transportation" },
    { label: "St. Regis Transportation", href: "/st-regis-aspen-transportation" },
  ],
};

export default data;
