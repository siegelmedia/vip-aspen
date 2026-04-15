import { Plane, Users, CheckCircle, Shield, Utensils, Tag } from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-corporate-transportation",
  seo: {
    title: "Corporate Transportation Aspen CO | Executive Car Service & Retreats",
    description:
      "Corporate transportation in Aspen, CO. Executive car service, fleet management for retreats & conferences. Sprinter shuttles. Call (970) 452-6636.",
    keywords:
      "corporate transportation Aspen, executive car service Aspen, corporate retreat transportation Aspen Colorado, business travel Aspen, conference transportation Aspen, corporate shuttle Aspen",
    canonicalUrl: "/aspen-corporate-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Corporate & Executive",
    headline: "Corporate Transportation & Executive Car Service in {{Aspen}}",
    description:
      "Professional fleet management for conferences, corporate retreats, board meetings, and executive travel throughout Aspen and the Roaring Fork Valley.",
    image: fleetHero,
    ctaLabel: "Request Corporate Quote",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Executive-Level Transportation for {{Business in Aspen}}",
    body: `<p>Aspen has long been a premier destination for corporate retreats, investor conferences, board off-sites, and executive gatherings. Fortune 500 companies, top private equity firms, and leading technology organizations regularly choose Aspen for high-stakes meetings where the setting matters as much as the agenda. VIP Aspen provides the caliber of corporate transportation these events demand \u2014 professional chauffeurs in business attire, on-time reliability measured in minutes not hours, and a fleet that makes the right impression from the moment your guests land at <a href="/aspen-airport-transfer">ASE</a>, <a href="/eagle-airport-transfer">Eagle</a>, or <a href="/denver-to-aspen-car-service">Denver</a> airports.</p>
<p>Whether you need a single <a href="/cadillac-escalade">Escalade</a> for your CEO or a fleet of <a href="/executive-sprinter">Executive Sprinters</a> for your entire team, we handle the logistics so you can focus on business. We coordinate multi-vehicle operations across multiple venues, manage last-minute schedule changes in real time, and provide dedicated fleet management for multi-day events. Our Executive Sprinter doubles as a mobile conference room with Wi-Fi, a flat-screen TV, hardwood conference table, and captain\u2019s chair seating \u2014 turning a 3.5-hour Denver to Aspen transfer into productive work time rather than dead time.</p>
<p>For companies that bring executives to Aspen regularly, our <a href="/membership">membership program</a> provides discounted corporate rates, priority fleet access during peak conference periods, and a dedicated concierge who knows your preferences and requirements. When high-profile guests require additional security, our <a href="/executive-protection">executive protection</a> team integrates seamlessly with the transportation plan.</p>`,
  },
  features: [
    {
      icon: Plane,
      title: "Airport Transfers for Attendees",
      description:
        "Coordinated arrivals and departures from ASE, EGE, RIL, and DEN for every member of your team.",
    },
    {
      icon: Users,
      title: "Multi-Day Fleet Management",
      description:
        "Dedicated vehicles and chauffeurs assigned to your event for the entire duration \u2014 on-call and on-schedule.",
    },
    {
      icon: CheckCircle,
      title: "Site-to-Site Shuttle Service",
      description:
        "Seamless transportation loops between hotels, conference venues, restaurants, and activity locations.",
    },
    {
      icon: Shield,
      title: "Executive Protection for VIPs",
      description:
        "Discreet, professional security for high-profile guests and executives.",
    },
    {
      icon: Utensils,
      title: "Nightlife & Dining Transportation",
      description:
        "After-hours service for team dinners, client entertainment, and Aspen's best restaurants.",
    },
    {
      icon: Tag,
      title: "Branded Vehicle Signage",
      description:
        "Custom branded signage available for your vehicles to reinforce your event identity.",
    },
  ],
  faqs: [
    {
      question: "Can you manage transportation for a multi-day corporate retreat in Aspen?",
      answer:
        "Yes. We provide dedicated fleet management for multi-day corporate events, including assigned vehicles and chauffeurs, real-time schedule coordination, and on-call availability throughout your event. Contact us for a custom fleet plan.",
    },
    {
      question: "How many passengers can your corporate fleet handle?",
      answer:
        "We can scale to any group size. A single Escalade seats 5, each Executive Sprinter seats 13, and we can deploy multiple vehicles simultaneously. For large conferences, we coordinate full shuttle operations between hotels and venues.",
    },
    {
      question: "Do you offer executive protection for corporate VIPs visiting Aspen?",
      answer:
        "Yes. Our executive protection team can be coordinated alongside your corporate transportation. Our specialists are former military and law enforcement professionals who provide discreet, professional security for high-profile executives and guests.",
    },
    {
      question: "Can the Executive Sprinter be used as a mobile meeting room?",
      answer:
        "Absolutely. Our Executive Sprinter features a hardwood conference table, flat-screen TV, Wi-Fi connectivity, and captain's chair seating \u2014 making it ideal for productive travel between venues or a mobile boardroom during transfers from Denver or Eagle airports.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
