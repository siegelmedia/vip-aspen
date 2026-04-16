import { Car, Clock, MapPin, Star, Building2, Users, Snowflake, Calendar, ShieldCheck, Plane, Hotel } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "black-car-service",
  seo: {
    title: "Luxury Black Car Service Aspen, Colorado",
    description:
      "Premium Aspen car service: Rolls Royce, Escalade & Sprinter. Airport transfers, hourly charters, hotel & event transport. Call (970) 452-6636.",
    keywords:
      "Aspen car service, luxury car service Aspen, Aspen airport transfer, private chauffeur Aspen, black car service Aspen Colorado, Aspen limo service, Rolls Royce Aspen, Escalade service Aspen, Sprinter van Aspen, ASE airport transfer, Eagle Vail airport transportation, Denver to Aspen car service, executive transportation Aspen",
    canonicalUrl: "/black-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Luxury Transportation",
    headline: "Aspen {{Black Car Service}}",
    description:
      "Chauffeured Rolls Royce, Escalade, and Sprinter. Airport transfers, hourly charters, hotel transport, and special events — available 24/7 across Aspen and the Roaring Fork Valley.",
    ctaLabel: "Book Your Ride",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  features: [
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description:
        "Book a dedicated SUV and driver by the hour. Ski days, shopping, dining, multi-stop itineraries — your schedule, your car.",
    },
    {
      icon: MapPin,
      title: "Airport Transfers",
      description:
        "Seamless luxury transfers from ASE, EGE, RIL, and DEN. Flight tracking, meet-and-greet, and complimentary wait time included.",
    },
    {
      icon: Star,
      title: "Special Events",
      description:
        "Weddings, galas, corporate events, Food & Wine, X Games — vehicles that match the occasion, drivers who know every venue.",
    },
    {
      icon: Building2,
      title: "Hotel Transportation",
      description:
        "Dedicated service for guests of Aspen's finest hotels. We coordinate directly with concierge teams for seamless arrivals.",
    },
    {
      icon: Users,
      title: "Group Transportation",
      description:
        "Executive Sprinter seats 13. Ideal for wedding parties, corporate groups, ski teams, and multi-family trips.",
    },
    {
      icon: Snowflake,
      title: "Winter & Mountain Roads",
      description:
        "4WD fleet with winter tires and mountain-road-trained chauffeurs. Independence Pass, McClure Pass, and every canyon between.",
    },
    {
      icon: Calendar,
      title: "Multi-Day & Weekly",
      description:
        "Dedicated vehicle and same driver for your entire Aspen stay. Priority scheduling, consistent service, weekly rates.",
    },
    {
      icon: ShieldCheck,
      title: "Security Drivers",
      description:
        "Vetted drivers with law enforcement and military backgrounds for CEOs, high-profile clients, and visiting protective details.",
    },
  ],
  linkedPageGroups: [
    {
      heading: "{{Airport}} Transfers",
      subtitle: "Door-to-door luxury transfers from every airport serving Aspen.",
      columns: 4,
      items: [
        {
          label: "Aspen Airport",
          href: "/aspen-airport-transfer",
          detail: "ASE · 5 minutes to downtown",
          description: "The closest airport, serving private and commercial traffic direct to Aspen.",
          icon: Plane,
        },
        {
          label: "Eagle Airport",
          href: "/eagle-airport-transfer",
          detail: "EGE · 90 min scenic drive",
          description: "Eagle County Regional, the alternate commercial gateway to the valley.",
          icon: Plane,
        },
        {
          label: "Rifle Airport",
          href: "/rifle-airport-transfer",
          detail: "RIL · 60 min private jet base",
          description: "A favorite for private jet arrivals with easier slot availability than ASE.",
          icon: Plane,
        },
        {
          label: "Denver Airport",
          href: "/denver-to-aspen-car-service",
          detail: "DEN · 3.5-hour luxury transfer",
          description: "Denver International to Aspen — the ultimate scenic mountain transfer.",
          icon: Plane,
        },
      ],
    },
    {
      heading: "{{Hotel}} Transportation",
      subtitle: "Dedicated service coordinated with Aspen's top luxury hotels.",
      columns: 3,
      items: [
        {
          label: "Hotel Jerome",
          href: "/hotel-jerome-transportation",
          detail: "Aspen's iconic 1889 hotel",
          description: "Seamless service from ASE to the Jerome's porte-cochère.",
          icon: Hotel,
        },
        {
          label: "The St. Regis Aspen",
          href: "/st-regis-aspen-transportation",
          detail: "Base of Aspen Mountain",
          description: "Butler-level coordination for St. Regis guests.",
          icon: Hotel,
        },
        {
          label: "The Little Nell",
          href: "/little-nell-transportation",
          detail: "Five-star, five-diamond",
          description: "Transportation matched to Aspen's only Forbes Five-Star hotel.",
          icon: Hotel,
        },
      ],
    },
    {
      heading: "Specialty {{Transportation}}",
      subtitle: "Purpose-built services for specific needs and occasions.",
      columns: 4,
      items: [
        {
          label: "Hourly Chauffeur",
          href: "/hourly-chauffeur",
          detail: "By-the-hour, your schedule",
          description: "A dedicated SUV and driver on call for as long as you need.",
          icon: Clock,
        },
        {
          label: "Security Drivers",
          href: "/security-driver",
          detail: "Protective-ops trained",
          description: "Vetted drivers with LE/military backgrounds for protective details.",
          icon: ShieldCheck,
        },
        {
          label: "Event Transportation",
          href: "/special-event-transportation",
          detail: "Food & Wine, X Games & more",
          description: "Multi-vehicle coordination for Aspen's biggest events.",
          icon: Star,
        },
        {
          label: "Wedding Transportation",
          href: "/aspen-wedding-transportation",
          detail: "Grand entrances, no friction",
          description: "Bridal parties, guest shuttles, and grand-entrance vehicles.",
          icon: Car,
        },
        {
          label: "Corporate Transportation",
          href: "/aspen-corporate-transportation",
          detail: "Retreats & executive travel",
          description: "Reliable, discreet service for corporate visits and team retreats.",
          icon: Users,
        },
        {
          label: "Snowmass Transfers",
          href: "/snowmass-village-transfer",
          detail: "Aspen to Snowmass Village",
          description: "Dedicated transfers between Aspen, Snowmass, and the valley.",
          icon: MapPin,
        },
      ],
    },
  ],
  howItWorks: [
    { step: 1, title: "Choose Your Vehicle", description: "Select from our Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter based on your occasion and group size." },
    { step: 2, title: "Book Your Ride", description: "Call, text, or book online. Share your itinerary and preferences — we handle every detail from there." },
    { step: 3, title: "Your Chauffeur Arrives", description: "Your professional driver arrives 15 minutes early with the vehicle inspected, climate-set, and stocked with complimentary water." },
    { step: 4, title: "Enjoy the Ride", description: "Sit back and experience Aspen in luxury. Door-to-door service, available 24/7 for any occasion." },
  ],
  intro: {
    heading: "Aspen's Premier {{Black Car Service}}",
    body: `<p>VIP Aspen operates the most extensive luxury car service in the Roaring Fork Valley. Our fleet includes the only <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> available for hire in Aspen, late-model <a href="/cadillac-escalade">Cadillac Escalades</a>, and 13-passenger <a href="/executive-sprinter">Executive Sprinters</a> — matched to local chauffeurs who know every back road, hotel entrance, ski drop-off, and restaurant valet in the valley.</p>
<p>We serve Aspen, Snowmass Village, Basalt, Woody Creek, Carbondale, and the entire Roaring Fork Valley with airport transfers, hourly charters, hotel transportation, security drivers, and event-based packages. For clients who visit regularly, our <a href="/membership">VIP Aspen membership</a> provides priority booking and discounted rates during peak seasons like Christmas, New Year's, X Games, and the Food &amp; Wine Classic.</p>`,
  },
  relatedServices: [
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Security Drivers", href: "/security-driver" },
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "Membership", href: "/membership" },
  ],
};

export default data;
