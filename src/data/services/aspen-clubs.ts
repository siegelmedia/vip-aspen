import { Star, Wine, Users, Music, Shield, Clock } from "lucide-react";
import vipClub from "@/assets/service-aspen-clubs.webp";
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
    bgImage: vipClub,
    ctaLabel: "Get VIP Access",
    ctaLink: "#contact",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  trustBadges: [
    { label: "Chauffeur On Call All Night", icon: Clock },
    { label: "Discreet, Vetted Team", icon: Shield },
    { label: "Table & Bottle Arrangements" },
    { label: "Members Get Access Included" },
  ],
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
<p>Our <a href="/membership">VIP Aspen membership program</a> takes nightlife access even further. Gold and Black members receive club access included with their membership, along with bottle service discounts and priority reservations at partner venues. It\u2019s the only membership in Aspen that combines luxury transportation, nightlife access, and dedicated concierge service under one roof \u2014 because your night out should be extraordinary from start to finish.</p>
<p>A typical VIP night with us starts well before the doors open. Tell us who is in your party, where you want to be, and how late you plan to stay. We confirm your table or entry, and your chauffeur collects you from your hotel or residence in the <a href="/cadillac-escalade">Escalade</a> or Cullinan. Between venues, the car is yours: no ride-share surge pricing, no waiting in the cold on Galena Street, and no question of how everyone gets home. Larger groups move together in the <a href="/executive-sprinter">Executive Sprinter</a>, which keeps a bachelor party, a corporate team, or a table of twelve on the same schedule.</p>
<p>Aspen's calendar makes planning essential. The weeks between Christmas and New Year's, X Games weekend in late January, Presidents' Day, spring break, and the <a href="/aspen-food-and-wine-transportation">Food &amp; Wine Classic</a> in June are when tables disappear fastest and door policies tighten. We recommend reaching out as soon as your dates are set. For high-profile guests who prefer to keep a low profile, our <a href="/security-driver">security drivers</a> and <a href="/executive-protection">protection team</a> can accompany the evening quietly, so the night stays fun and private.</p>`,
  },
  differentiators: [
    {
      title: "Transportation and Access in One Booking",
      description:
        "One call arranges the table, the entry, and the car. There is no juggling a promoter, a ride-share app, and a hotel concierge who closes at midnight.",
    },
    {
      title: "Your Driver Stays On Call",
      description:
        "Hourly and as-directed service means the vehicle waits nearby all evening. Change plans, add a stop, or leave early. Your chauffeur is a text away.",
    },
    {
      title: "Discretion Comes Standard",
      description:
        "We are operated by a licensed security company. Our team is background-checked, works under NDA, and knows how to keep an evening private.",
    },
  ],
  faqs: [
    {
      question: "Which Aspen venues can you arrange access to?",
      answer:
        "We work across Aspen's nightlife scene, including the town's private clubs, hotel lounges, late-night bars, and the restaurants that double as the evening's first stop. Availability varies by night and season, so tell us your preferences and we will confirm what we can secure for your dates.",
    },
    {
      question: "Is VIP club access only for members?",
      answer:
        "No. Anyone can book a VIP night with transportation and access arrangements. Gold and Black members receive club access as part of their membership along with bottle service discounts and priority reservations, which is the most cost-effective option for frequent visitors.",
    },
    {
      question: "How far in advance should I request a table or entry?",
      answer:
        "For regular weekends, a few days is usually enough. During the holidays, X Games, Presidents' Day, spring break, and the Food & Wine Classic, reach out as soon as your travel dates are set. Peak-week tables are often committed weeks ahead.",
    },
    {
      question: "How does bottle service and minimum spend work?",
      answer:
        "Each venue sets its own table minimums and bottle pricing, and those charges are paid directly to the venue. We arrange the reservation and handle logistics. Where we have partner pricing, we pass it along to our clients and members.",
    },
    {
      question: "Can you keep a group of ten or more together for the night?",
      answer:
        "Yes. The 13-passenger Executive Sprinter keeps a large party on one schedule, and we can run multiple vehicles for bigger groups such as bachelor and bachelorette weekends, corporate teams, or birthday celebrations.",
    },
    {
      question: "Do you offer nightlife transportation without the club arrangements?",
      answer:
        "Absolutely. Many clients simply book an hourly chauffeur for the evening so the car is waiting outside every stop. See our hourly chauffeur service and rates pages for pricing.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Special Event Transportation", href: "/special-event-transportation" },
  ],
};

export default data;
