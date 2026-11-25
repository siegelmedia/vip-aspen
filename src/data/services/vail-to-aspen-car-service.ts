import { MapPin, Clock, Radar, Luggage, Snowflake, Mountain } from "lucide-react";
import heroBg from "@/assets/hero-vail-to-aspen.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "vail-to-aspen-car-service",
  areaServed: ["Vail", "Aspen"],
  seo: {
    title: "Vail to Aspen Car Service | Private Transfer",
    description:
      "Private car service between Vail and Aspen. Rolls Royce, Escalade & Sprinter for the ~2-hour mountain transfer. Door-to-door, 24/7. Call (970) 452-6636.",
    keywords:
      "Vail to Aspen car service, Aspen to Vail shuttle, Vail to Aspen private transfer, Beaver Creek to Aspen car service, Eagle Vail to Aspen, luxury car Vail Aspen, resort to resort transfer Colorado",
    canonicalUrl: "/vail-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Vail ↔ Aspen",
    bgImage: heroBg,
    headline: "Private Car Service {{Vail to Aspen}}",
    description:
      "The two-hour drive between Vail and Aspen, done right. Skip shared shuttles and unreliable ride-share — travel resort to resort in a chauffeured Rolls Royce, Escalade, or Sprinter, door to door.",
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Resort to Resort, the {{Right Way}}",
    body: `<p>Vail and Aspen are about 100 miles apart by road, and the drive takes about two hours in normal conditions. Many travelers split a trip between the two towns. The usual options are shared shuttle vans that stop repeatedly and run on someone else's schedule, or ride-share, which is scarce once you leave the I-70 corridor. VIP Aspen offers a private, chauffeured transfer that goes directly from your door in Vail Village, Lionshead, or East or West Vail to your door in Aspen or Snowmass, with no stops you didn't ask for.</p>
<p><strong>The winter route.</strong> From roughly early November until around Memorial Day weekend, Independence Pass is closed, and the only practical route is I-70 west from Vail through Glenwood Canyon to Glenwood Springs, then Highway 82 south along the Roaring Fork River into Aspen. This is also the standard route the rest of the year. Snow, ski traffic, and occasional closures in Glenwood Canyon can add time, so we plan winter departures with a cushion.</p>
<p><strong>The summer option.</strong> When Independence Pass is open, there is a second way: U.S. 24 south from the Vail Valley through Leadville, then Highway 82 west over the 12,095-foot pass and down into Aspen. It is a narrow, winding mountain road and usually takes longer than the interstate route, but it is one of the most scenic drives in Colorado. Ask for it when you book if you would like to go that way.</p>
<p>We match the vehicle to your group. The <a href="/cadillac-escalade">Cadillac Escalade</a> carries up to 5 passengers with luggage and skis, the <a href="/executive-sprinter">Executive Sprinter</a> carries groups of up to 13, and the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> seats 3 with standard luggage and does not carry ski equipment. Starting from Beaver Creek or Avon instead? See <a href="/beaver-creek-to-aspen-car-service">Beaver Creek to Aspen</a>. Flying in? See <a href="/eagle-airport-transfer">Eagle County Airport transfers</a>.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door, No Stops",
      description:
        "Direct from your Vail lodging to your Aspen or Snowmass destination. No shared vans, no detours, no waiting on other passengers.",
    },
    {
      icon: Snowflake,
      title: "Winter-Ready Fleet",
      description:
        "4WD vehicles with winter tires and chauffeurs who run the I-70 and Glenwood Canyon corridor year-round in every condition.",
    },
    {
      icon: Mountain,
      title: "Independence Pass in Season",
      description:
        "When the Pass is open in summer and early fall, we can take the scenic route over the Continental Divide through Leadville on request.",
    },
    {
      icon: Radar,
      title: "Flight Tracking from EGE",
      description:
        "Connecting through Eagle County Airport? We track your flight and meet you at the terminal pickup point or the FBO for the drive to Aspen.",
    },
    {
      icon: Luggage,
      title: "Ski & Luggage Handled",
      description:
        "Your chauffeur loads and secures every bag. Skis and snowboards travel in the Escalade or Sprinter.",
    },
    {
      icon: Clock,
      title: "Round-Trip & On-Demand",
      description:
        "Book a one-way transfer, a round trip, or keep the vehicle on call for your stay. Aspen to Vail return legs are available.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Tell Us the Route", description: "Vail to Aspen or the reverse: share your pickup, destination, date, and group size." },
    { step: 2, title: "Choose Your Vehicle", description: "Escalade for up to 5 with ski gear, Sprinter for up to 13, Cullinan for up to 3 with standard luggage." },
    { step: 3, title: "Door-to-Door Pickup", description: "Your chauffeur arrives at your lodging, loads every bag, and departs on your schedule." },
    { step: 4, title: "Arrive Relaxed", description: "A direct transfer of about two hours with optional stops and zero logistics to manage." },
  ],
  faqs: [
    {
      question: "How long is the drive from Vail to Aspen?",
      answer:
        "About two hours in normal conditions, covering roughly 100 miles via I-70 west to Glenwood Springs and then Highway 82 south into Aspen. Winter storms, ski traffic, or a delay in Glenwood Canyon can add time, so leave a cushion before any fixed commitment.",
    },
    {
      question: "Is Independence Pass open year-round?",
      answer:
        "No. Independence Pass (Highway 82 over the Continental Divide) closes each winter, usually from early November until around Memorial Day weekend, weather permitting. During those months the I-70 and Glenwood Springs route is the way between Vail and Aspen. When the Pass is open, the alternative runs south on U.S. 24 through Leadville and then west on Highway 82 over the Pass. It is more scenic and usually slower.",
    },
    {
      question: "Which vehicle fits my group and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so ski and snowboard bags need to travel in an Escalade or the Sprinter.",
    },
    {
      question: "What is the drive like in winter?",
      answer:
        "The route stays on I-70 and Highway 82, which are plowed and open year-round, but snow can slow both. I-70 through Glenwood Canyon is occasionally closed by crashes, rockfall or weather, and when it is the detour is far longer. We watch road conditions on the day of your transfer and plan the pickup around them.",
    },
    {
      question: "Can you pick me up from Eagle County Airport (EGE) instead?",
      answer:
        "Yes. EGE is about 35 miles west of Vail and is a common arrival point for travelers heading to Aspen. We track your flight and handle the roughly 90-minute drive to Aspen. See our Eagle Airport Transfer page for details.",
    },
    {
      question: "Can we make stops along the way?",
      answer:
        "Yes. A stop in Glenwood Springs or for a meal along the route is easy to arrange. Let us know when you book so the time is built into the schedule.",
    },
    {
      question: "Do you offer the return trip from Aspen to Vail?",
      answer:
        "Yes. We drive Aspen to Vail as readily as the inbound trip, including round-trip and multi-day arrangements.",
    },
    {
      question: "How do I book a Vail to Aspen transfer?",
      answer:
        "Use the online booking form on this page for an instant quote: enter your pickup, destination, date and vehicle. You can also call dispatch at (970) 452-6636 at any hour.",
    },
  ],
  relatedServices: [
    { label: "Beaver Creek to Aspen Car Service", href: "/beaver-creek-to-aspen-car-service" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Denver to Aspen Car Service", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
  ],
};

export default data;
