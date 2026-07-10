import { Wine, Clock, Star, Users, MapPin, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-food-wine.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-food-and-wine-transportation",
  seo: {
    title: "Aspen Food & Wine Classic Transportation | Car Service",
    description:
      "Private transportation for the Food & Wine Classic in Aspen. Pre-booked Rolls Royce, Escalade & Sprinter with on-call drivers, no surge — from Grand Tasting to after-parties. Book early: (970) 452-6636.",
    keywords:
      "Aspen Food and Wine Classic transportation, Food & Wine Classic car service, Food and Wine Aspen shuttle, Food and Wine Classic chauffeur, Aspen Food Wine private car, Grand Tasting transportation Aspen",
    canonicalUrl: "/aspen-food-and-wine-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Food & Wine Classic",
    bgImage: heroBg,
    headline: "Transportation for the {{Food & Wine Classic}}",
    description:
      "Every June, the Food & Wine Classic takes over Aspen. Skip the surge pricing and the scramble with a pre-booked private chauffeur — from the Grand Tasting at Wagner Park to seminars, dinners, and after-parties across the valley.",
    ctaLabel: "Reserve Your Car",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Aspen's Signature Weekend Deserves {{Better Transportation}}",
    body: `<p>The Food & Wine Classic is Aspen's marquee summer event — three days of Grand Tastings at Wagner Park, seminars with celebrated chefs and winemakers, and a packed calendar of private dinners, brand activations, and late-night parties spread across town and up the mountainsides. It's also one of the hardest weekends of the year to get a ride. Demand spikes, ride-share availability collapses, and surge pricing turns a five-minute hop into a small fortune. The guests who actually enjoy the weekend are the ones who arranged their transportation in advance.</p>
<p>VIP Aspen clients move through the Classic effortlessly. We pre-assign your vehicle and chauffeur, lock your rate with no surge, and keep your driver on call so you glide from a morning seminar to an afternoon tasting to a private dinner without a single logistics worry — glass of wine firmly in hand, no one in your group worried about driving. Our chauffeurs know every venue, the Wagner Park drop-off points, and the back routes around the downtown crowds. For groups and host committees, we coordinate multiple vehicles under one point of contact — see our <a href="/special-event-transportation">event transportation</a> and <a href="/aspen-corporate-transportation">corporate transportation</a> services.</p>
<p>Match the vehicle to the occasion: a <a href="/cadillac-escalade">Cadillac Escalade</a> for couples, an <a href="/executive-sprinter">Executive Sprinter</a> to keep a group together between events, or the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for an arrival worthy of the weekend. Because Food & Wine sells out the town, vehicles book out early — reserve as far ahead as you can, and <a href="/membership">VIP members</a> receive guaranteed availability.</p>`,
  },
  features: [
    {
      icon: ShieldCheck,
      title: "Guaranteed Availability",
      description:
        "Your vehicle and driver are reserved for the weekend — secured while everyone else is fighting for a ride.",
    },
    {
      icon: Star,
      title: "No Surge Pricing",
      description:
        "Your rate is locked at booking. Ride-share fares multiply during the Classic; yours never changes.",
    },
    {
      icon: Clock,
      title: "On Call All Weekend",
      description:
        "Seminars, tastings, dinners, after-parties — your driver is on call so you move on your schedule, never a shuttle's.",
    },
    {
      icon: MapPin,
      title: "Venue Knowledge",
      description:
        "Drivers who know Wagner Park drop-offs, private dinner venues, and the fastest routes around event traffic.",
    },
    {
      icon: Users,
      title: "Groups & Host Committees",
      description:
        "Multi-vehicle coordination under one point of contact for sponsors, brands, and large parties.",
    },
    {
      icon: Wine,
      title: "Designated Every Time",
      description:
        "No one in your party has to be the designated driver. Enjoy the wine; we handle the road.",
    },
  ],
  faqs: [
    {
      question: "When is the Food & Wine Classic in Aspen?",
      answer:
        "The Food & Wine Classic is held annually in Aspen in mid-June. Transportation books out well in advance for the weekend, so we recommend reserving as early as possible.",
    },
    {
      question: "How far in advance should I book transportation for Food & Wine?",
      answer:
        "As early as you can — the Classic is one of the busiest weekends of the Aspen year and vehicles book out weeks ahead. VIP members receive guaranteed availability; standard bookings are first-come, first-served.",
    },
    {
      question: "Can the driver stay on call between events?",
      answer:
        "Yes. The weekend is best booked as on-call or hourly service, so your chauffeur stays nearby and moves you between seminars, tastings, dinners, and parties on your timing.",
    },
    {
      question: "Can you coordinate transportation for a group or sponsor activation?",
      answer:
        "Absolutely. We routinely coordinate multi-vehicle fleets for host committees, brand activations, and corporate groups during the Classic, all managed through a single point of contact.",
    },
    {
      question: "Is there surge pricing during the Classic?",
      answer:
        "No. Our rates are locked at the time of booking and do not surge with demand, even on the busiest Food & Wine evenings.",
    },
  ],
  relatedServices: [
    { label: "Food & Wine Classic Guide", href: "/guides/aspen-food-and-wine-classic" },
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
