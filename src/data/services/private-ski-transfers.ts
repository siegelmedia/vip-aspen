import { Snowflake, Clock, Mountain, Luggage, Users, Car } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "private-ski-transfers",
  seo: {
    title: "Private Ski Transfers Aspen | Door-to-Slope Car Service",
    description:
      "Private door-to-slope ski transfers across Aspen's four mountains — Ajax, Highlands, Buttermilk & Snowmass. Skip the shuttle: a dedicated SUV and chauffeur for your ski day. Call (970) 452-6636.",
    keywords:
      "private ski transfer Aspen, Aspen ski shuttle private, door to slope car service Aspen, Aspen Highlands transfer, Buttermilk transfer, Snowmass ski transfer, ski day chauffeur Aspen, Aspen Snowmass private ski transportation",
    canonicalUrl: "/private-ski-transfers",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Ski Transfers",
    headline: "Private {{Door-to-Slope}} Ski Transfers",
    description:
      "Four mountains, one chauffeur, zero hassle. A dedicated luxury SUV drops you at the gondola, holds your après gear, and is waiting at the base when you're done — across Ajax, Highlands, Buttermilk, and Snowmass.",
    ctaLabel: "Book Your Ski Day",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Skip the Shuttle. Keep Your {{Ski Day}}.",
    body: `<p>Aspen Snowmass is really four distinct mountains — Aspen Mountain (Ajax), Aspen Highlands, Buttermilk, and Snowmass — spread across a valley that the free public buses serve well enough if you have time to spare and don't mind crowds, transfers, and ski racks shared with strangers. For travelers who'd rather spend that time skiing, a private transfer changes the day entirely. Your chauffeur drops you at the gondola or lift you choose, keeps the vehicle warm with your boots and après layers inside, and is waiting at the base the moment your legs are done — so you can chase fresh snow from Highlands in the morning to Snowmass in the afternoon without a single logistics decision in between.</p>
<p>This is not a shared ski shuttle. It's a dedicated <a href="/cadillac-escalade">Cadillac Escalade</a> or <a href="/executive-sprinter">Executive Sprinter</a> — 4WD, winter-tired, and driven by a chauffeur who knows every drop-off, valet, and back route in the valley — assigned to you for the day. Families love it because car seats stay installed, gear stays in the vehicle, and tired kids ride home warm instead of waiting in a lift-line of a bus queue. Groups love it because everyone travels together and nobody's stuck coordinating meet-up points. And because your driver is on call, a long lunch at Cloud Nine or an unplanned stop in town never costs you your ride.</p>
<p>Private ski transfers pair naturally with our <a href="/hourly-chauffeur">hourly chauffeur</a> service for full-day flexibility and with <a href="/aspen-airport-transfer">airport transfers</a> for the day you arrive and the day you leave. For regular visitors, a <a href="/multi-day-chauffeur">multi-day chauffeur</a> arrangement keeps the same driver and vehicle for your entire ski trip — the smoothest way to experience an Aspen winter.</p>`,
  },
  features: [
    {
      icon: Mountain,
      title: "All Four Mountains",
      description:
        "Ajax, Aspen Highlands, Buttermilk, and Snowmass — switch mountains mid-day without missing a run or hunting for a bus.",
    },
    {
      icon: Snowflake,
      title: "Warm Vehicle, Gear Stowed",
      description:
        "Your chauffeur holds boots, jackets, and après layers in a warm cabin while you ski. Step off the slope and straight into comfort.",
    },
    {
      icon: Clock,
      title: "On Call All Day",
      description:
        "Long lunch, early finish, one more run — your driver is standing by at the base whenever you're ready. No schedules, no surge pricing.",
    },
    {
      icon: Users,
      title: "Families & Groups",
      description:
        "Car seats stay installed, gear stays loaded, and everyone rides together. The easy way to manage a family ski day.",
    },
    {
      icon: Luggage,
      title: "Ski Valet Coordination",
      description:
        "We coordinate with mountain ski valets and your lodging so your equipment is where it needs to be each morning.",
    },
    {
      icon: Car,
      title: "4WD Mountain Fleet",
      description:
        "Escalade and Sprinter with winter tires and chauffeurs trained on Aspen's mountain roads in every condition.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Plan Your Day", description: "Tell us your mountains, timing, group size, and lodging. We build the day around your skiing, not a timetable." },
    { step: 2, title: "Morning Drop-Off", description: "Your chauffeur delivers you to the gondola or lift of your choice, gear in hand, ready to ski first chair." },
    { step: 3, title: "Ride On Call", description: "Switch mountains, break for lunch, or finish early — your driver repositions and waits at the base for you." },
    { step: 4, title: "Home Warm", description: "End the day with a warm cabin, your gear loaded, and a direct ride back to your residence or hotel." },
  ],
  faqs: [
    {
      question: "How is this different from the free Aspen ski shuttles?",
      answer:
        "The free RFTA and city shuttles are shared, run on fixed routes and schedules, and can be crowded at peak times. Our private ski transfer is a dedicated SUV and chauffeur assigned to you alone — door to slope, on your timing, with your gear kept warm in the vehicle all day.",
    },
    {
      question: "Can I ski more than one mountain in a day?",
      answer:
        "Yes — that's the point. Ski Highlands in the morning and Snowmass in the afternoon, or finish on Ajax for après in town. Your chauffeur repositions between mountains so you never lose time to transit.",
    },
    {
      question: "Do you provide car seats and handle ski equipment?",
      answer:
        "Yes. Car seats and boosters are available at no charge and stay installed for the day, and your chauffeur loads, secures, and stows all ski and snowboard equipment.",
    },
    {
      question: "Can the driver wait while we ski?",
      answer:
        "We offer on-call service where your driver stays nearby and meets you at the base when you're ready, and full hourly dedicated service where the vehicle is reserved exclusively for your day. We'll recommend the best fit for your plans.",
    },
    {
      question: "Which vehicle is best for a ski day?",
      answer:
        "The Cadillac Escalade suits most families and small groups with room for gear; the Executive Sprinter carries groups of up to 13 with maximum equipment capacity. Both are 4WD with winter tires.",
    },
    {
      question: "Do you serve lodging in Snowmass as well as Aspen?",
      answer:
        "Yes. We provide private ski transfers throughout Aspen, Snowmass Village, and the surrounding valley, including ski-in/ski-out residences and all major hotels.",
    },
  ],
  relatedServices: [
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
