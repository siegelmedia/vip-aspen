import { ShieldCheck, Clock, BadgeCheck, Star } from "lucide-react";
import type { ServicePageData } from "@/types";

/**
 * How pricing works. No dollar figures are posted anywhere on the site except
 * the Membership page: the booking form shows the price for a specific trip.
 */
const data: ServicePageData = {
  slug: "rates",
  seo: {
    title: "Aspen Car Service Rates & Pricing",
    description:
      "How VIP Aspen pricing works: what affects the price, what every quote includes, and how to see your price instantly online or by phone at (970) 452-6636.",
    keywords:
      "Aspen car service rates, Aspen car service cost, Aspen limo prices, Aspen chauffeur rates, how much is a car service in Aspen, Aspen airport transfer cost, Aspen black car pricing",
    canonicalUrl: "/rates",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Rates & Pricing",
    headline: "How {{Aspen Car Service}} Pricing Works",
    description:
      "Every trip is priced for its vehicle, route, and date, and you see the price before you book. Here is what goes into a quote, what it includes, and how to get yours in about a minute.",
    ctaLabel: "Get an Instant Quote",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  trustBadges: [
    { label: "Price Shown Before You Book", icon: Star },
    { label: "Available 24/7", icon: Clock },
    { label: "Chauffeur & Fuel Included", icon: BadgeCheck },
    { label: "Law Enforcement-Owned", icon: ShieldCheck },
  ],
  intro: {
    heading: "How Our {{Pricing Works}}",
    body: `<p>VIP Aspen prices each trip individually rather than from a posted rate card. Airport transfers and point-to-point routes are quoted as <strong>one price for the trip</strong>. When you want a dedicated vehicle and chauffeur on your own schedule, service is <strong>billed by the hour</strong> with a 2-hour minimum. Every quote includes a professional chauffeur, fuel, and the vehicle.</p>
<p>The fastest way to see your price is the <a href="#booking">online booking form</a>: enter your date, route, and vehicle, and the price for that trip is shown instantly, before you reserve. You can also call or text <a href="tel:+19704526636">(970) 452-6636</a> at any hour. <a href="/membership">VIP members</a> receive preferred rates.</p>`,
  },
  howItWorks: [
    {
      step: 1,
      title: "Enter Your Trip",
      description:
        "Open the booking form on this page and enter your pickup, destination, date, and time, or the number of hours you need.",
    },
    {
      step: 2,
      title: "Choose Your Vehicle",
      description:
        "Select the Cadillac Escalade, Executive Sprinter, or Rolls-Royce Cullinan. The price for that trip is shown instantly.",
    },
    {
      step: 3,
      title: "Reserve or Call",
      description:
        "Reserve online in about a minute, or call or text (970) 452-6636 and dispatch will quote and book the trip for you, 24/7.",
    },
  ],
  pricing: [
    {
      category: "What Affects Your Price",
      note: "These five things change from trip to trip, which is why the booking form prices your exact trip instead of a rate card.",
      items: [
        {
          name: "Vehicle",
          detail: "Escalade, Sprinter, or Cullinan",
          description:
            "The Cadillac Escalade seats up to 5, the Executive Sprinter up to 13, and the Rolls-Royce Cullinan up to 3. Each vehicle is priced differently.",
        },
        {
          name: "Route",
          detail: "Distance and drive time",
          description:
            "A transfer from Aspen airport (ASE) into town is a short trip. Eagle (EGE), Rifle (RIL), Denver (DEN), Vail, Beaver Creek, and Glenwood Springs are longer drives and are priced for the full route, door to door.",
        },
        {
          name: "Date and Demand",
          detail: "Season, holidays, and events",
          description:
            "Prices vary with the date and with demand, and are higher in peak periods such as the Christmas and New Year holidays, X Games, Presidents' Day weekend, and the Food & Wine Classic.",
        },
        {
          name: "Hours",
          detail: "As-directed service",
          description:
            "Hourly service is billed for the hours you book, with a 2-hour minimum. If you need longer on the day, tell your chauffeur and the booking is extended at your hourly rate.",
        },
        {
          name: "Stops",
          detail: "Extra pickups and waiting",
          description:
            "Added stops and waiting along the way change the price. Enter them in the booking form or tell dispatch so the quote covers the whole trip.",
        },
      ],
    },
    {
      category: "What Every Quote Includes",
      note: "Gratuity is not included.",
      items: [
        {
          name: "Professional Chauffeur",
          detail: "Background-checked and trained",
          description: "Your chauffeur is part of the price on every booking, hourly or point to point.",
        },
        {
          name: "Fuel and the Vehicle",
          detail: "Included in every quote",
          description: "The quote covers the vehicle and its fuel for the trip you booked.",
        },
        {
          name: "Flight Tracking",
          detail: "Airport transfers",
          description: "Airport pickups follow your flight and include complimentary wait time.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a car service in Aspen cost?",
      answer:
        "It depends on the vehicle, the route, the date, and how long you need the car, so we do not post a rate card. Enter your trip in the online booking form and the price is shown instantly, or call or text (970) 452-6636. As-directed hourly service has a 2-hour minimum.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Every quote includes your professional chauffeur, fuel, and the vehicle, along with flight tracking and complimentary wait time on airport transfers. Gratuity is not included; standard gratuity is 15–20% and goes directly to your chauffeur.",
    },
    {
      question: "Do prices change by season or date?",
      answer:
        "Yes. Prices vary with the date and with demand, and are higher in peak periods such as the Christmas and New Year holidays, X Games, Presidents' Day weekend, and the Food & Wine Classic. You see the price for your date before you reserve.",
    },
    {
      question: "Do you require a deposit, and what is your cancellation policy?",
      answer:
        "Booking and cancellation terms depend on the service and season; peak-period and multi-vehicle bookings may require a deposit. We'll confirm the exact terms with your quote. Contact us and we'll walk you through it.",
    },
    {
      question: "How do I get an exact quote?",
      answer:
        "Use the online booking form: enter your route, date, and vehicle, and the price for that trip is shown instantly. You can also call or text (970) 452-6636, or email us with your route, date, group size, and vehicle preference, with no obligation.",
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
