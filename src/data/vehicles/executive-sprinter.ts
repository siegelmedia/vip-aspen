import { Users, Star, Shield, Clock, Wifi, Music } from "lucide-react";
import tarmacImg from "@/assets/sprinter-hero-tarmac.webp";
import sprinterExterior from "@/assets/sprinter.webp";
import galleryExterior from "@/assets/sprinter-gallery-exterior.webp";
import type { VehiclePageData } from "@/types";

const data: VehiclePageData = {
  slug: "executive-sprinter",
  seo: {
    title: "Executive Sprinter Van Service in Aspen",
    description:
      "Executive Sprinter van service in Aspen, Colorado. Seats up to 13 with a professional chauffeur, for groups, airport transfers & events.",
    keywords:
      "Executive Sprinter Aspen, 13 passenger luxury van, group transportation Aspen, corporate shuttle Aspen, Sprinter van hire Colorado, luxury group transfer",
    canonicalUrl: "/executive-sprinter",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  vehicle: { make: "Mercedes-Benz", model: "Sprinter", passengers: 13 },
  hero: {
    tagline: "Group Luxury Travel",
    headline: "Executive {{Sprinter}} in Aspen",
    description:
      "Travel with your group in ultimate style. Our custom-built Executive Sprinter van features a luxury interior with diamond-stitched leather, ambient LED lighting, entertainment system, and seating for up to 13 passengers\u2014perfect for any Aspen occasion.",
    image: tarmacImg,
    ctaLabel: "Book the Sprinter",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Ultimate {{Group Transportation}} in Aspen",
    body: "When your party is bigger than five, the Executive Sprinter is the only way to travel together in Aspen without splitting into multiple vehicles. With seating for up to 13 passengers, a hardwood conference table, diamond-stitched leather captain's chairs, a large flat-screen TV, premium sound system, and customizable LED mood lighting, it's a mobile luxury lounge that moves at your schedule. We provide the only Executive-class Sprinter for hire in the Aspen area \u2014 there is nothing else like it in the Roaring Fork Valley.",
  },
  features: [
    {
      icon: Users,
      title: "Up to 13 VIP Passengers",
      description:
        "Spacious conference-style seating with individual leather captain's chairs for your entire group.",
    },
    {
      icon: Star,
      title: "Custom Luxury Interior",
      description:
        "Diamond-stitched leather seats, ambient LED lighting, hardwood conference table, and premium finishes throughout.",
    },
    {
      icon: Shield,
      title: "Professional Chauffeur",
      description:
        "Experienced, discreet chauffeurs who know every road in the Roaring Fork Valley.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Book your Executive Sprinter any time\u2014day or night, year-round in Aspen.",
    },
    {
      icon: Wifi,
      title: "Entertainment System",
      description:
        "Large flat-screen TV, premium sound system, and connectivity for presentations or entertainment.",
    },
    {
      icon: Music,
      title: "Ambient Lighting",
      description:
        "Customizable LED mood lighting throughout the cabin to set the perfect atmosphere for any occasion.",
    },
  ],
  gallery: [galleryExterior, sprinterExterior],
  faqs: [
    {
      question: "How much does the Executive Sprinter cost in Aspen?",
      answer:
        "The price depends on your route, date, and how long you need the vehicle. Enter your trip in the online booking form and the price for the Sprinter is shown instantly, or call (970) 452-6636. Hourly service has a two-hour minimum, and the chauffeur and fuel are included.",
    },
    {
      question: "How many passengers does the Sprinter hold?",
      answer:
        "Our Executive Sprinter accommodates up to 13 passengers comfortably.",
    },
    {
      question: "Does the Sprinter have Wi-Fi and entertainment?",
      answer:
        "Yes. Premium sound system, multiple display screens, high-speed Wi-Fi, USB charging at every seat, and ambient lighting. It's a mobile conference room or party lounge.",
    },
    { question: "Is the Sprinter more cost-effective than multiple SUVs?", answer: "For groups of 6 or more, one Sprinter usually costs less than booking two Escalades, and it keeps the whole group together. The booking form shows the price of each vehicle for your trip so you can compare." },
    { question: "Can the Sprinter be used for weddings?", answer: "Absolutely. The Executive Sprinter is one of our most popular wedding vehicles — it fits the entire bridal party or groomsmen comfortably with room for garment bags and accessories." },
    { question: "How much luggage can the Sprinter carry?", answer: "The Sprinter has ample cargo space for 13 passengers with full luggage, ski gear, golf clubs, or event equipment. It's designed for real travel, not just short transfers." },
  ],
  relatedServices: [
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
