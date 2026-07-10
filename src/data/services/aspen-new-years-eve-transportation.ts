import { Sparkles, Clock, Star, Users, ShieldCheck, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-new-years-eve.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-new-years-eve-transportation",
  seo: {
    title: "Aspen New Year's Eve & Holiday Transportation",
    description:
      "Guaranteed luxury transportation for Aspen's New Year's Eve and Christmas holiday season. Pre-booked Rolls Royce, Escalade & Sprinter with on-call drivers — no surge, no scramble. Book early: (970) 452-6636.",
    keywords:
      "Aspen New Year's Eve transportation, Aspen NYE car service, Aspen holiday car service, Aspen Christmas transportation, Aspen winter holiday chauffeur, New Year's Eve limo Aspen, holiday season car service Aspen",
    canonicalUrl: "/aspen-new-years-eve-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Holiday & New Year's Eve",
    bgImage: heroBg,
    headline: "Aspen's {{Holiday Season}}, Without the Scramble",
    description:
      "The week between Christmas and New Year's is the busiest — and most gridlocked — stretch of the Aspen year. Lock in a pre-booked luxury vehicle with an on-call chauffeur and skip the surge pricing, the no-show ride-share, and the wait.",
    ctaLabel: "Reserve Holiday Service",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Busiest Week in {{Aspen}}",
    body: `<p>From Christmas through New Year's Day, Aspen runs at full capacity. Every restaurant is booked, every hotel is full, and the streets around downtown and the gondola turn to gridlock by late afternoon. It is precisely when ground transportation is hardest to find and easiest to get wrong: ride-share availability collapses, surge pricing multiplies a short fare several times over, and the few cars on the road are already taken. New Year's Eve itself is the peak of the peak — dinner reservations, parties scattered across the valley, and a midnight crowd all moving at once. The travelers who enjoy the night are the ones who arranged their transportation weeks in advance.</p>
<p>VIP Aspen clients skip the entire problem. We pre-assign your vehicle and chauffeur for the holiday stretch, with rates locked at booking — no surge, ever — and your driver on call through the evening so you leave when you want, not when a shuttle runs or an app finally finds a car. Our chauffeurs know the holiday choke points cold: where to stage near a packed restaurant, the back route around the downtown crawl, and the right drop-off for every party venue, private estate, and hotel in the valley. Because demand far outstrips supply this week, availability is genuinely limited and books out early.</p>
<p>Match the vehicle to the night: the <a href="/cadillac-escalade">Cadillac Escalade</a> for couples and families, the <a href="/executive-sprinter">Executive Sprinter</a> for groups moving together between dinner and a party, or the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> for a New Year's entrance worth remembering. Pair holiday transportation with our <a href="/aspen-airport-transfer">airport transfers</a> for arrival and departure, our <a href="/multi-day-chauffeur">multi-day chauffeur</a> service for the full stay, or <a href="/aspen-clubs">VIP club access</a> for the after-party. <a href="/membership">VIP members</a> receive guaranteed holiday availability and priority over standard bookings.</p>`,
  },
  features: [
    {
      icon: ShieldCheck,
      title: "Guaranteed Availability",
      description:
        "Your vehicle and driver are reserved in advance for the holiday week — secured when everyone else is scrambling for a ride.",
    },
    {
      icon: Star,
      title: "No Surge Pricing, Ever",
      description:
        "Rates are locked at booking. While ride-share fares multiply on New Year's Eve, your price never changes.",
    },
    {
      icon: Clock,
      title: "On Call All Evening",
      description:
        "Dinner, parties, midnight, and the ride home — your driver stays on call so you leave on your schedule, not a shuttle's.",
    },
    {
      icon: Sparkles,
      title: "Venue & Party Knowledge",
      description:
        "Drivers who know every restaurant, private estate, and party venue in the valley — and the back routes around holiday gridlock.",
    },
    {
      icon: Users,
      title: "Groups Moving Together",
      description:
        "Keep your party together between dinner and the after-party in an Escalade or 13-passenger Sprinter — no splitting up, no meet-up points.",
    },
    {
      icon: Calendar,
      title: "Full Holiday Coverage",
      description:
        "Christmas through New Year's Day, including airport runs, ski days, and dinners — one provider for the entire stretch.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Book Early", description: "Holiday-week vehicles book out fast. Reserve as far ahead as possible — ideally weeks in advance — to lock in availability." },
    { step: 2, title: "Share Your Plans", description: "Give us your dinner reservations, parties, and timing. We map the evening, including staging and the smartest routes." },
    { step: 3, title: "Ride On Your Schedule", description: "Your chauffeur is on call all night. Move between venues effortlessly and leave exactly when you're ready." },
    { step: 4, title: "Home Safely", description: "End the night — and the year — with a safe, warm, direct ride home. No surge, no wait, no worry." },
  ],
  faqs: [
    {
      question: "How far in advance should I book New Year's Eve transportation?",
      answer:
        "As early as you can. The Christmas-to-New-Year's week is the highest-demand period of the Aspen year and vehicles book out weeks ahead. Members receive guaranteed availability; standard bookings are first-come, first-served.",
    },
    {
      question: "Is there surge or holiday pricing?",
      answer:
        "No. Our rates are locked at the time of booking and do not surge with demand, even on New Year's Eve. You'll know your price up front.",
    },
    {
      question: "Can the driver stay on call between dinner and a party?",
      answer:
        "Yes. Holiday evenings are best booked as on-call or hourly service so your driver stays nearby and moves you between venues on your timing — no re-booking and no waiting for a ride at midnight.",
    },
    {
      question: "Do you cover the whole holiday stay, not just New Year's Eve?",
      answer:
        "Absolutely. We provide transportation throughout the Christmas and New Year's season — airport and FBO transfers, ski days, dinners, and parties. Many clients book a multi-day chauffeur for the full stretch.",
    },
    {
      question: "What vehicles are available for the holidays?",
      answer:
        "The full fleet: Cadillac Escalade for couples and families, the 13-passenger Executive Sprinter for groups, and the Rolls Royce Cullinan for a memorable New Year's entrance. Reserve early, as holiday inventory is limited.",
    },
  ],
  relatedServices: [
    { label: "Event Transportation", href: "/special-event-transportation" },
    { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
    { label: "Airport Transfers", href: "/aspen-airport-transfer" },
    { label: "Membership", href: "/membership" },
  ],
};

export default data;
