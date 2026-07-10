import { MapPin, Clock, Snowflake, Luggage, Radar, Mountain } from "lucide-react";
import heroBg from "@/assets/hero-beaver-creek-to-aspen.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "beaver-creek-to-aspen-car-service",
  seo: {
    title: "Beaver Creek to Aspen Car Service | Private Transfer",
    description:
      "Private car service between Beaver Creek and Aspen. Chauffeured Rolls Royce, Escalade & Sprinter for the ~2-hour resort transfer, with Eagle (EGE) airport pickups. Call (970) 452-6636.",
    keywords:
      "Beaver Creek to Aspen car service, Avon to Aspen, Beaver Creek Aspen transfer, Aspen to Beaver Creek shuttle, resort to resort Colorado, Eagle to Aspen private car",
    canonicalUrl: "/beaver-creek-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Beaver Creek ↔ Aspen",
    bgImage: heroBg,
    headline: "Private Car Service {{Beaver Creek to Aspen}}",
    description:
      "Connect two of Colorado's finest resorts in first-class comfort. A chauffeured ~2-hour transfer between Beaver Creek, Avon, and Aspen — door to door, with Eagle Airport pickups along the way.",
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Resort to Resort, in {{Comfort}}",
    body: `<p>Beaver Creek and Aspen are about 100 miles apart — roughly two hours via I-70 and Glenwood Canyon, then south on Highway 82 into Aspen. Travelers often split a Colorado ski trip between the two, or fly into nearby <a href="/eagle-airport-transfer">Eagle County Airport (EGE)</a>, just minutes from Beaver Creek, before continuing on to Aspen. The standard options — shared shuttles and scarce ride-share — don't match the standard of either resort. We do: a private, chauffeured transfer that goes directly from your door in Beaver Creek or Avon to your door in Aspen.</p>
<p>Our chauffeurs run this corridor year-round in a 4WD fleet built for mountain weather, so the drive through Glenwood Canyon is relaxed whatever the conditions. Pick the <a href="/cadillac-escalade">Cadillac Escalade</a> for families and ski gear, the <a href="/executive-sprinter">Executive Sprinter</a> for larger parties, or the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> to make the transfer a highlight. Return trips from Aspen to Beaver Creek and stops in Vail or Glenwood Springs are easy to arrange — see also our <a href="/vail-to-aspen-car-service">Vail to Aspen</a> service.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door, No Stops",
      description:
        "Direct from your Beaver Creek or Avon lodging to your Aspen destination — no shared vans, no detours.",
    },
    {
      icon: Radar,
      title: "Eagle Airport (EGE) Pickups",
      description:
        "Flying into EGE near Beaver Creek? We track your flight and drive you the rest of the way to Aspen.",
    },
    {
      icon: Mountain,
      title: "Glenwood Canyon Route",
      description:
        "The scenic I-70 corridor through Glenwood Canyon, driven by chauffeurs who know every mile.",
    },
    {
      icon: Snowflake,
      title: "Winter-Ready Fleet",
      description:
        "4WD vehicles with winter tires for confident travel between resorts in any condition.",
    },
    {
      icon: Luggage,
      title: "Ski & Luggage Handled",
      description:
        "Your chauffeur loads and secures all luggage and ski equipment for the two-hour drive.",
    },
    {
      icon: Clock,
      title: "Round-Trip & On-Demand",
      description:
        "One-way, round-trip, or on call for your stay — including Aspen to Beaver Creek return legs.",
    },
  ],
  faqs: [
    {
      question: "How far is Beaver Creek from Aspen?",
      answer:
        "About 100 miles, roughly a 2-hour drive via I-70 west to Glenwood Springs, then Highway 82 south into Aspen.",
    },
    {
      question: "Can you pick me up from Eagle Airport (EGE)?",
      answer:
        "Yes. EGE is just minutes from Beaver Creek and Avon and is a common arrival point for travelers heading to Aspen. We track your flight and handle the roughly 90-minute drive to Aspen from the airport.",
    },
    {
      question: "Do you serve Avon and Vail on this route?",
      answer:
        "Yes. We provide door-to-door transfers from Beaver Creek, Avon, and Vail to Aspen and back, with optional stops along the way.",
    },
    {
      question: "Is Independence Pass an option in summer?",
      answer:
        "The I-70 and Glenwood route is used year-round. In summer, Independence Pass over the Continental Divide is an alternative for part of the journey, but the I-70 corridor is the standard, most reliable route.",
    },
  ],
  relatedServices: [
    { label: "Vail to Aspen Car Service", href: "/vail-to-aspen-car-service" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Denver to Aspen Car Service", href: "/denver-to-aspen-car-service" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
  ],
};

export default data;
