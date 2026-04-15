import { Users, Star, Shield, Clock, Wifi, Music } from "lucide-react";
import tarmacImg from "@/assets/sprinter-tarmac.webp";
import sprinterExterior from "@/assets/sprinter.webp";
import interiorSideImg from "@/assets/sprinter-interior-side.webp";
import interiorFullImg from "@/assets/sprinter-interior-full.webp";
import type { VehiclePageData } from "@/types";

const data: VehiclePageData = {
  slug: "executive-sprinter",
  seo: {
    title: "Executive Sprinter Van Service in Aspen",
    description:
      "Luxury Executive Sprinter van service in Aspen, Colorado. Custom interior with seating for up to 13 passengers, ambient LED lighting, entertainment system & professional chauffeur. Airport transfers, group transportation & private events. Book today.",
    keywords:
      "Executive Sprinter Aspen, luxury Sprinter van Aspen, Sprinter van service Aspen Colorado, group transportation Aspen, luxury van hire Aspen, Mercedes Sprinter Aspen, party bus Aspen, corporate transportation Aspen, Sprinter airport transfer Aspen, luxury group travel Aspen, private Sprinter van Aspen, VIP group transport Aspen, Aspen ski shuttle luxury, wedding transportation Aspen",
    canonicalUrl: "/executive-sprinter",
  },
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
  gallery: [sprinterExterior, interiorSideImg, interiorFullImg],
  faqs: [
    {
      question: "How many passengers does the Sprinter hold?",
      answer:
        "Our Executive Sprinter accommodates up to 13 passengers comfortably.",
    },
    {
      question: "Is there Wi-Fi in the Sprinter?",
      answer:
        "Yes, the Sprinter features Wi-Fi, a flat-screen TV, and a premium sound system.",
    },
  ],
};

export default data;
