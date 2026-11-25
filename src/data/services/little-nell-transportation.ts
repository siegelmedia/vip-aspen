import { Building2, Plane, Clock, Star, Car, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-little-nell.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "little-nell-transportation",
  seo: {
    title: "The Little Nell Transportation & Car Service",
    description:
      "Private car service for Little Nell guests. Airport transfers, as-directed chauffeur, dinner reservations & events. Call (970) 452-6636.",
    keywords:
      "Little Nell car service, Little Nell airport transfer, Little Nell Aspen transportation, luxury car service Little Nell, Little Nell chauffeur Aspen",
    canonicalUrl: "/little-nell-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "The Little Nell",
    bgImage: heroBg,
    headline: "Luxury Transportation for {{The Little Nell}} Guests",
    description:
      "Private car service for guests of The Little Nell, the ski-in/ski-out hotel beside the Silver Queen Gondola at the base of Aspen Mountain. Airport transfers, an hourly chauffeur, and rides everywhere the gondola does not go.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
    secondaryCta: { label: "Call (970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "From the Gondola to {{Everywhere Else}}",
    body: `<p>The Little Nell is at 675 East Durant Avenue, at the base of Aspen Mountain beside the Silver Queen Gondola. It is a ski-in/ski-out hotel that holds Forbes Five-Star and AAA Five-Diamond ratings, and it is 5 to 10 minutes from <a href="/aspen-airport-transfer">Aspen-Pitkin County Airport</a>. VIP Aspen provides private car service for guests staying there.</p>
<p>Guests of The Little Nell can step onto Aspen Mountain without a car, so ours is for the rest of the trip: the airport run, a day at Aspen Highlands, Buttermilk, or Snowmass, dinner across town or in Snowmass Village, and events around the valley. Our <a href="/hourly-chauffeur">hourly chauffeur service</a> keeps a driver and vehicle on your schedule all day, with no parking to find and no ride-share uncertainty on a busy night.</p>
<p>Choose the vehicle by group size: the <a href="/cadillac-escalade">Cadillac Escalade</a> for up to 5 passengers with luggage and skis, the <a href="/executive-sprinter">Executive Sprinter</a> for up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for up to 3 passengers with standard luggage. The Cullinan does not carry ski equipment. Every airport transfer includes flight tracking and complimentary wait time, and <a href="/membership">VIP Members</a> receive priority booking during peak season.</p>
<p><strong>2027 note:</strong> The Little Nell has announced a temporary closure for renovation beginning in April 2027, with reopening planned for the 2027-28 ski season. Check your dates with the hotel before you book travel for that period.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Flight-tracked transfers from ASE (5 to 10 minutes), Eagle, Rifle, and Denver airports to The Little Nell on Durant Avenue.",
    },
    {
      icon: MapPin,
      title: "The Other Three Mountains",
      description:
        "Aspen Mountain is at the hotel's door. We drive you and your gear to Aspen Highlands, Buttermilk, or Snowmass and pick you up at the base.",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "A dedicated vehicle and driver on your schedule for dining, shopping, spa visits, and evenings out. Your car waits while you enjoy Aspen.",
    },
    {
      icon: Star,
      title: "Planned Around Your Stay",
      description:
        "Send us your reservations and plans, or have your assistant or concierge book for you, and we schedule each ride around them.",
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
      question: "How far is ASE airport from The Little Nell?",
      answer:
        "Aspen-Pitkin County Airport (ASE) is 5 to 10 minutes from The Little Nell. Complimentary wait time is included on airport transfers to cover flight delays and baggage claim.",
    },
    {
      question: "Where does my driver meet me at the airport?",
      answer:
        "At Aspen airport, your chauffeur meets you in the Ground Transportation Circle directly outside baggage claim and loads your luggage at the vehicle. Private jet arrivals are met at the FBO. For Eagle, Rifle and Denver, we confirm the meeting point with your booking.",
    },
    {
      question: "The Little Nell is ski-in/ski-out. Why would I need a car?",
      answer:
        "For everything away from Aspen Mountain. The hotel is at 675 East Durant Avenue beside the Silver Queen Gondola, so Aspen Mountain needs no ride. Aspen Highlands, Buttermilk and Snowmass, the airport, and restaurants and events elsewhere in the valley are all a drive away.",
    },
    {
      question: "What vehicle is best for a family staying at The Little Nell?",
      answer:
        "The Cadillac Escalade is our most popular choice for families: it fits 5 passengers with luggage and ski gear. For larger families or groups, the Executive Sprinter seats up to 13. Car seats and boosters are available on request. The Rolls Royce Cullinan seats 3 and does not carry ski equipment.",
    },
    {
      question: "Can you pick us up after skiing another mountain?",
      answer:
        "Yes. Your chauffeur meets you at the base of Aspen Highlands, Buttermilk or Snowmass with the vehicle warm, loads your skis into the Escalade or Sprinter, and takes you to dinner or back to the hotel.",
    },
    {
      question: "Can I book a dedicated driver for my entire Little Nell stay?",
      answer:
        "Yes. Our hourly and multi-day chauffeur service gives you a dedicated driver and vehicle by the hour, half day, full day, or week. Use the booking form on this page for an instant quote, or call (970) 452-6636. VIP Aspen is an independent car service, so you or your assistant book directly with us.",
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
