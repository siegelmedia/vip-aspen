import { ShieldCheck, Clock, BadgeCheck, Star } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "rates",
  seo: {
    title: "Aspen Car Service Rates & Pricing",
    description:
      "How VIP Aspen pricing works: flat-rate airport and route transfers, as-directed hourly chauffeur rates from $200/hr, and no surge pricing — ever. Request a quote: (970) 452-6636.",
    keywords:
      "Aspen car service rates, Aspen car service cost, Aspen limo prices, Aspen chauffeur rates, how much is a car service in Aspen, Aspen airport transfer cost, Aspen black car pricing",
    canonicalUrl: "/rates",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Rates & Pricing",
    headline: "Transparent {{Aspen Car Service}} Rates",
    description:
      "Flat-rate transfers, straightforward hourly pricing, and no surge — ever. Here's exactly how VIP Aspen pricing works, with a tailored quote one call away.",
    ctaLabel: "Request a Quote",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  trustBadges: [
    { label: "No Surge Pricing", icon: Star },
    { label: "Available 24/7", icon: Clock },
    { label: "Flat-Rate Transfers", icon: BadgeCheck },
    { label: "Veteran & LEO Owned", icon: ShieldCheck },
  ],
  intro: {
    heading: "How Our {{Pricing Works}}",
    body: `<p>Luxury transportation shouldn't come with surprises. VIP Aspen prices two simple ways: <strong>flat rates</strong> for airport transfers and point-to-point routes, and an <strong>as-directed hourly rate</strong> when you want a dedicated vehicle and driver on your schedule. Every quote includes a professional chauffeur, fuel, and the vehicle — and unlike ride-share, our rates never surge, even on New Year's Eve or during the Food & Wine Classic.</p>
<p>Because every trip is different — your vehicle, route, timing, stops, and season all factor in — the most accurate price is a quick custom quote. Below are our published starting points so you know roughly what to expect. <a href="/membership">VIP members</a> receive preferred rates on everything.</p>`,
  },
  pricing: [
    {
      category: "As-Directed Hourly",
      note: "All hourly rates include a professional chauffeur, fuel, and the vehicle. 2-hour minimum. Gratuity is not included. VIP Members receive preferred rates.",
      items: [
        {
          name: "Cadillac Escalade",
          detail: "Up to 5 passengers",
          price: "From $200/hr",
          features: ["Our most-requested vehicle", "Room for luggage and ski gear", "4WD luxury SUV"],
          featured: true,
        },
        {
          name: "Executive Sprinter",
          detail: "Up to 13 passengers",
          price: "From $300/hr",
          features: ["Best value for groups", "Conference-style seating", "Maximum luggage capacity"],
        },
        {
          name: "Rolls Royce Cullinan",
          detail: "Up to 3 passengers",
          price: "From $400/hr",
          features: ["The ultimate statement", "Bespoke Mandarin interior", "Champagne cooler"],
        },
      ],
    },
    {
      category: "Airport & Route Transfers",
      note: "Transfers are quoted as flat rates based on route, vehicle, and timing — confirmed up front, with no surge. Contact us for an exact quote for your trip.",
      items: [
        {
          name: "Aspen Airport (ASE)",
          detail: "5 minutes to downtown",
          price: "Flat rate",
          description: "Short, premium transfer from Sardy Field to anywhere in Aspen or Snowmass.",
        },
        {
          name: "Eagle (EGE) & Rifle (RIL)",
          detail: "~60–90 minutes",
          price: "Flat rate",
          description: "Reliable winter gateways — quoted as a flat rate for the full drive to Aspen.",
        },
        {
          name: "Denver (DEN)",
          detail: "~3.5-hour transfer",
          price: "Flat rate",
          description: "The long scenic transfer, priced as a single flat rate with no per-stop add-ons.",
        },
        {
          name: "Vail, Beaver Creek & Glenwood",
          detail: "Resort & valley routes",
          price: "Flat rate",
          description: "Resort-to-resort and down-valley transfers, quoted door to door.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a car service in Aspen cost?",
      answer:
        "As-directed hourly service starts at $200/hr for the Cadillac Escalade, $300/hr for the Executive Sprinter, and $400/hr for the Rolls Royce Cullinan (2-hour minimum). Airport and route transfers are quoted as flat rates based on the route, vehicle, and timing. Contact us for an exact quote for your trip.",
    },
    {
      question: "Is there surge pricing during events or holidays?",
      answer:
        "No. Our rates are locked at the time of booking and never surge — including New Year's Eve, the Food & Wine Classic, X Games, and other peak periods when ride-share prices multiply.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Every quote includes your professional chauffeur, fuel, and the vehicle, along with flight tracking and complimentary wait time on airport transfers. Gratuity is not included; standard gratuity is 15–20% and goes directly to your chauffeur.",
    },
    {
      question: "Do you require a deposit, and what is your cancellation policy?",
      answer:
        "Booking and cancellation terms depend on the service and season; peak-period and multi-vehicle bookings may require a deposit. We'll confirm the exact terms with your quote. Contact us and we'll walk you through it.",
    },
    {
      question: "How do I get an exact quote?",
      answer:
        "Call or text (970) 452-6636, use the booking form, or email us with your route, date, group size, and vehicle preference. We'll send a precise flat-rate or hourly quote with no obligation.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Airport Transfers", href: "/aspen-airport-transfer" },
    { label: "Membership", href: "/membership" },
    { label: "The Fleet", href: "/cadillac-escalade" },
  ],
};

export default data;
