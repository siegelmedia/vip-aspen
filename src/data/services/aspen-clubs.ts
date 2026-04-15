import { Star, Wine, Users, Music } from "lucide-react";
import vipClub from "@/assets/vip-club.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-clubs",
  seo: {
    title: "VIP Club Access & Nightlife in Aspen, Colorado",
    description:
      "Skip the line at Aspen's best clubs and lounges. Priority entry, bottle service, reserved tables & exclusive nightlife access. Call (970) 452-6636.",
    keywords:
      "Aspen nightlife, VIP club access Aspen, Aspen nightclubs, bottle service Aspen, VIP tables Aspen, Aspen apr\u00e8s-ski, Aspen bars, exclusive venues Aspen Colorado, Aspen party, Aspen VIP experience, nightlife concierge Aspen, restaurant reservations Aspen, private club access Aspen",
    canonicalUrl: "/aspen-clubs",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "VIP Access",
    headline: "Aspen {{Nightlife}} & Clubs",
    description:
      "Experience Aspen after dark like never before. Skip the lines, secure the best tables, and enjoy exclusive access to the mountain town's most coveted venues and experiences.",
    image: vipClub,
    ctaLabel: "Get VIP Access",
    ctaLink: "#contact",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  features: [
    {
      icon: Star,
      title: "Priority Entry",
      description:
        "Skip the line at Aspen's hottest clubs and venues. Our members receive immediate VIP access.",
    },
    {
      icon: Wine,
      title: "Bottle Service",
      description:
        "Enjoy complimentary upgrades and discounted bottle service at partner establishments.",
    },
    {
      icon: Users,
      title: "Reserved Tables",
      description:
        "Guaranteed table reservations at peak times when others are turned away.",
    },
    {
      icon: Music,
      title: "Exclusive Events",
      description:
        "Access to private events, album release parties, and celebrity appearances.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Tell Us Your Plans", description: "Share your group size, preferred venues, dates, and any special requests for your night out." },
    { step: 2, title: "We Handle Access", description: "We secure priority entry, reserved tables, and bottle service arrangements at Aspen's top venues." },
    { step: 3, title: "Arrive in Style", description: "Your chauffeur delivers you to the door in a luxury vehicle — no lines, no waiting, no hassle." },
    { step: 4, title: "VIP All Night", description: "Enjoy exclusive access and dedicated service all evening. Your driver is on call for the ride home." },
  ],
  intro: {
    heading: "Aspen's Nightlife Demands {{VIP Access}}",
    body: `<p>Aspen\u2019s nightlife scene is exclusive by nature. The best venues have limited capacity, VIP-only areas, and guest lists that fill up fast \u2014 especially during peak winter season and marquee events like the X Games, Food &amp; Wine Classic, and New Year\u2019s Eve. Without the right connections, even well-connected travelers can find themselves waiting in line or turned away at the door. VIP Aspen\u2019s club access service changes that equation entirely, getting our members and clients past the velvet rope at Aspen\u2019s top nightclubs, lounges, and restaurants.</p>
<p>What sets our service apart is the seamless integration of VIP entry with <a href="/black-car-service">chauffeured luxury transportation</a>. You arrive at the door in the <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a>, skip the line, and have your table waiting \u2014 the entire experience curated from pickup to last call. Whether it\u2019s bottle service at a private event, a reserved table at a packed restaurant, or entry to an exclusive after-party, we handle every detail so you can simply enjoy the evening.</p>
<p>Our <a href="/membership">VIP Aspen membership program</a> takes nightlife access even further. Gold and Black members receive club access included with their membership, along with bottle service discounts and priority reservations at partner venues. It\u2019s the only membership in Aspen that combines luxury transportation, nightlife access, and dedicated concierge service under one roof \u2014 because your night out should be extraordinary from start to finish.</p>`,
  },
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Private Entertainment", href: "/private-entertainment" },
  ],
};

export default data;
