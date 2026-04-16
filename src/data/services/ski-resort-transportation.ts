import { Mountain, Snowflake, Clock, Users, Shield, Car } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "ski-resort-transportation",
  seo: {
    title: "Aspen Ski Resort Transportation | Private Mountain Transfers",
    description:
      "Private ski transfers to Aspen Mountain, Snowmass, Highlands & Buttermilk. Door-to-door luxury service with gear handling. Call (970) 452-6636.",
    keywords:
      "Aspen ski resort car service, ski shuttle Aspen private, Aspen Mountain transportation, Snowmass ski transfer, Aspen Highlands car service, Buttermilk ski shuttle, private ski transportation Aspen",
    canonicalUrl: "/ski-resort-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Ski Resort Transfers",
    headline: "Private Ski Transfers to {{Every Aspen Mountain}}",
    description:
      "Door-to-door luxury transfers to Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk. Your driver handles the gear, keeps the car warm, and picks you up at the base when you're ready.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
  },
  intro: {
    heading: "Skip the Bus. {{Ski in Style.}}",
    body: `<p>Public ski shuttles in Aspen run on fixed schedules, pack riders into crowded buses with no dedicated gear storage, and leave you standing in sub-zero temperatures waiting for the next departure. For families juggling ski boots, poles, and restless children, the shuttle experience can turn a great ski day into a logistical ordeal before you even reach the mountain. Private ski transfers eliminate every pain point \u2014 your chauffeur arrives at your door on your schedule, loads every piece of gear into a warm luxury SUV, and delivers you directly to the base lodge entrance without a single minute spent waiting in the cold.</p>
<p>Aspen's four mountains each offer a distinct experience, and your driver knows exactly how to get you to each one. Aspen Mountain is just 8 minutes from downtown \u2014 the classic Aspen ski experience with Silver Queen Gondola access right from the base. Snowmass is roughly 20 minutes away and is Aspen's largest resort, with over 3,300 acres of terrain and a dedicated base village. Aspen Highlands is a 10-minute drive and is beloved by expert skiers for its steep terrain and legendary Highland Bowl. Buttermilk is only 7 minutes out and is the most family-friendly mountain, home to beginner terrain and the X Games. Your chauffeur knows the optimal drop-off locations, VIP staging areas, and the fastest routes to each resort \u2014 including the shortcuts that save precious minutes on busy mornings.</p>
<p>Families with young children benefit the most from private ski transfers. Traveling with kids means car seats, extra gear, early morning departures, and exhausted legs at the end of the day. Your SUV stays warm at the base with boots, jackets, and snacks inside. When the kids are done skiing, you walk to your vehicle and you're back at the hotel in minutes \u2014 not standing at a shuttle stop with tired, cold children. For full-day coverage where your driver stays with you from first chair to last run and handles mid-day mountain switches, pair your transfer with our <a href="/hourly-chauffeur">hourly chauffeur service</a> for a completely seamless ski day.</p>`,
  },
  features: [
    {
      icon: Mountain,
      title: "All Four Mountains",
      description:
        "Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk. We know the optimal drop-off and pickup points at every resort.",
    },
    {
      icon: Snowflake,
      title: "Gear Handling",
      description:
        "Your driver loads and unloads skis, boards, poles, and boots. Gear stays secure in the vehicle while you're on the mountain.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description:
        "No fixed schedule. Your driver picks you up when you're ready \u2014 whether that's first chair or after one more run.",
    },
    {
      icon: Users,
      title: "Family Ready",
      description:
        "Car seats and boosters available. Your kids' gear stays warm in the SUV. Door-to-door means no cold waits at shuttle stops.",
    },
    {
      icon: Shield,
      title: "Multi-Mountain Days",
      description:
        "Hit Highlands in the morning and Snowmass after lunch. Your driver handles the transition while you stay in ski mode.",
    },
    {
      icon: Car,
      title: "Apr\u00e8s-Ski Service",
      description:
        "After the last run, your driver takes you directly to dinner, drinks, or back to your lodge \u2014 warm, dry, and relaxed.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Tell Us Your Plan",
      description:
        "Which mountain, what time, how many people. We match you with the right vehicle.",
    },
    {
      step: 2,
      title: "Morning Pickup",
      description:
        "Your chauffeur arrives at your door with the vehicle warmed up and ready for gear.",
    },
    {
      step: 3,
      title: "Ski All Day",
      description:
        "Your driver waits or returns at your preferred time. Switch mountains mid-day if you want.",
    },
    {
      step: 4,
      title: "Ride Home Happy",
      description:
        "After the last run, step into a warm SUV. No buses, no parking lots, no hassle.",
    },
  ],
  faqs: [
    {
      question: "How far is each ski resort from downtown Aspen?",
      answer:
        "Aspen Mountain is 8 minutes, Buttermilk is 7 minutes, Aspen Highlands is 10 minutes, and Snowmass is about 20 minutes from downtown Aspen.",
    },
    {
      question: "Can you handle a family with young children and gear?",
      answer:
        "Absolutely. We provide car seats on request, load all gear, and keep the vehicle warm while you ski. It's the easiest way to ski with kids in Aspen.",
    },
    {
      question: "Can I switch mountains during the day?",
      answer:
        "Yes. Book our hourly chauffeur service for maximum flexibility. Your driver will shuttle you between mountains on your schedule.",
    },
    {
      question: "Do you wait at the resort or come back?",
      answer:
        "Your choice. For single transfers, we drop off and return at your requested time. For hourly bookings, your driver stays nearby all day.",
    },
    {
      question: "What vehicles are available for ski transfers?",
      answer:
        "Cadillac Escalade (5 passengers, ideal for families), Executive Sprinter (13 passengers, great for groups), and Rolls Royce Cullinan (3 passengers, ultimate luxury).",
    },
  ],
  relatedServices: [
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
  ],
};

export default data;
