import { MapPin, Clock, Train, Luggage, Snowflake, Radar } from "lucide-react";
import heroBg from "@/assets/hero-glenwood-to-aspen.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "glenwood-springs-to-aspen-car-service",
  seo: {
    title: "Glenwood Springs to Aspen Car Service | Private Transfer",
    description:
      "Private car service from Glenwood Springs to Aspen — including Amtrak station and hot springs pickups. ~50-minute luxury transfer in a Rolls Royce, Escalade, or Sprinter. Call (970) 452-6636.",
    keywords:
      "Glenwood Springs to Aspen car service, Glenwood to Aspen shuttle, Amtrak Glenwood Springs to Aspen, Glenwood Springs Aspen transfer, Glenwood Springs private car Aspen",
    canonicalUrl: "/glenwood-springs-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Glenwood Springs → Aspen",
    bgImage: heroBg,
    headline: "Private Car Service {{Glenwood Springs to Aspen}}",
    description:
      "Arriving by Amtrak, spending the day at the hot springs, or connecting through Glenwood? Travel the final 42 miles into Aspen in a chauffeured Rolls Royce, Escalade, or Sprinter — door to door.",
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Gateway at the Bottom of the {{Valley}}",
    body: `<p>Glenwood Springs sits at the mouth of the Roaring Fork Valley, about 42 miles and roughly 50 minutes from Aspen on Highway 82. It's a genuine crossroads: Amtrak's California Zephyr stops here, making Glenwood one of the only rail-accessible gateways to Aspen, and the town's famous hot springs and the I-70 corridor bring a steady stream of travelers who need a smooth onward ride up the valley. The free regional bus runs the route but stops frequently and takes far longer; a private transfer gets you to Aspen directly, with your luggage handled and no waiting in the cold.</p>
<p>We time pickups to your train, your flight connection, or your hot-springs day, tracking arrivals so we're there when you are. The drive up Highway 82 follows the Roaring Fork River past Carbondale and Basalt — an easy, scenic 50 minutes in a warm cabin instead of a crowded bus. Choose the <a href="/cadillac-escalade">Cadillac Escalade</a> for families and gear, the <a href="/executive-sprinter">Executive Sprinter</a> for groups, or the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for something special. We also serve Carbondale and Basalt along the same route.</p>`,
  },
  features: [
    {
      icon: Train,
      title: "Amtrak Station Pickup",
      description:
        "Arriving on the California Zephyr? We meet your train at Glenwood Springs and handle the onward drive to Aspen.",
    },
    {
      icon: MapPin,
      title: "Door-to-Door",
      description:
        "Direct from Glenwood Springs — the station, a hotel, or the hot springs — to your Aspen address. No shared stops.",
    },
    {
      icon: Radar,
      title: "Arrival Tracking",
      description:
        "We monitor train and flight connections and adjust pickup times so a delay never leaves you stranded.",
    },
    {
      icon: Luggage,
      title: "Luggage & Ski Gear",
      description:
        "Every bag and pair of skis loaded and secured by your chauffeur for the 50-minute drive up-valley.",
    },
    {
      icon: Snowflake,
      title: "Winter-Ready",
      description:
        "4WD vehicles and chauffeurs who run Highway 82 year-round in every condition.",
    },
    {
      icon: Clock,
      title: "Carbondale & Basalt Too",
      description:
        "Same route, same service — we cover Carbondale and Basalt between Glenwood Springs and Aspen.",
    },
  ],
  faqs: [
    {
      question: "How long is the drive from Glenwood Springs to Aspen?",
      answer:
        "About 50 minutes, roughly 42 miles southeast on Highway 82 along the Roaring Fork River, passing Carbondale and Basalt.",
    },
    {
      question: "Can you pick me up from the Glenwood Springs Amtrak station?",
      answer:
        "Yes. Glenwood Springs is a stop on Amtrak's California Zephyr, and we regularly meet the train to drive guests the rest of the way to Aspen. We track the train's arrival so we're there when you step off.",
    },
    {
      question: "Do you serve Carbondale and Basalt on this route?",
      answer:
        "Absolutely. Carbondale and Basalt sit directly between Glenwood Springs and Aspen on Highway 82, and we provide door-to-door transfers to and from both.",
    },
    {
      question: "Is this better than the public bus?",
      answer:
        "The regional RFTA bus serves the route affordably but stops frequently and takes considerably longer. A private transfer is direct, on your schedule, with luggage handled and a warm, comfortable vehicle — ideal after a long train or flight.",
    },
  ],
  relatedServices: [
    { label: "Denver to Aspen Car Service", href: "/denver-to-aspen-car-service" },
    { label: "Vail to Aspen Car Service", href: "/vail-to-aspen-car-service" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
  ],
};

export default data;
