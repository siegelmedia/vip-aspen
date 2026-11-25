import { MapPin, Clock, Snowflake, Luggage, Radar, Mountain } from "lucide-react";
import heroBg from "@/assets/hero-beaver-creek-to-aspen.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "beaver-creek-to-aspen-car-service",
  areaServed: ["Beaver Creek", "Aspen"],
  seo: {
    title: "Beaver Creek to Aspen Car Service",
    description:
      "Private car service between Beaver Creek and Aspen. Chauffeured Rolls Royce, Escalade & Sprinter for the ~2-hour transfer, with EGE pickups. Call (970) 452-6636.",
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
      "Connect two of Colorado's finest resorts in first-class comfort. A chauffeured transfer of about two hours between Beaver Creek, Bachelor Gulch, Arrowhead, or Avon and Aspen, door to door, with Eagle Airport pickups on the way.",
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Resort to Resort, in {{Comfort}}",
    body: `<p>Beaver Creek sits above Avon, a few miles west of Vail, which puts it slightly closer to Aspen than Vail is: about 95 miles and about two hours in normal conditions. The route is the same in every season. From Avon you take I-70 west past Eagle and through Glenwood Canyon to Glenwood Springs, then Highway 82 south through Carbondale and Basalt into Aspen. Independence Pass is not a practical option from Beaver Creek, since reaching it means driving east first, and it is closed in winter in any case.</p>
<p>We pick you up at your door, whether that is a hotel or residence in Beaver Creek Village, Bachelor Gulch, or Arrowhead, or an address in Avon or Edwards. The route passes the exit for <a href="/eagle-airport-transfer">Eagle County Airport (EGE)</a> about half an hour into the drive, so collecting an arriving traveler on the way, or starting the transfer at the airport, is straightforward.</p>
<p>Pick the <a href="/cadillac-escalade">Cadillac Escalade</a> for up to 5 passengers with luggage and skis, or the <a href="/executive-sprinter">Executive Sprinter</a> for up to 13. The <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> seats 3 with standard luggage and does not carry ski equipment. Return trips from Aspen to Beaver Creek are available, and if you are starting in Vail, see our <a href="/vail-to-aspen-car-service">Vail to Aspen</a> service.</p>`,
  },
  features: [
    {
      icon: MapPin,
      title: "Door-to-Door, No Stops",
      description:
        "Direct from your lodging in Beaver Creek, Bachelor Gulch, Arrowhead, or Avon to your Aspen destination. No shared vans, no detours.",
    },
    {
      icon: Radar,
      title: "Eagle Airport (EGE) Pickups",
      description:
        "EGE is on the route, about 30 minutes from Beaver Creek. We track your flight and drive you the rest of the way to Aspen.",
    },
    {
      icon: Mountain,
      title: "Glenwood Canyon Route",
      description:
        "I-70 west through Glenwood Canyon, then Highway 82 up the Roaring Fork Valley: the same route in every season.",
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
        "Your chauffeur loads and secures your luggage. Skis and snowboards travel in the Escalade or Sprinter.",
    },
    {
      icon: Clock,
      title: "Round-Trip & On-Demand",
      description:
        "One-way, round-trip, or on call for your stay, including Aspen to Beaver Creek return legs.",
    },
  ],
  faqs: [
    {
      question: "How far is Beaver Creek from Aspen?",
      answer:
        "About 95 miles, which is about a two-hour drive in normal conditions. The route runs I-70 west from Avon to Glenwood Springs, then Highway 82 south into Aspen. Snowmass Village is about 10 minutes closer than downtown Aspen.",
    },
    {
      question: "Where do you pick up in Beaver Creek?",
      answer:
        "At the door of your hotel, condominium or residence in Beaver Creek Village, Bachelor Gulch or Arrowhead, or at an address in Avon or Edwards. Give us the property name or address when you book, along with any entry instructions your lodging has provided.",
    },
    {
      question: "Can you pick me up from Eagle Airport (EGE)?",
      answer:
        "Yes. EGE is about 30 minutes west of Beaver Creek and directly on the way to Aspen. We track your flight and handle the roughly 90-minute drive from the airport to Aspen.",
    },
    {
      question: "Which vehicle fits my group and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so ski and snowboard bags need to travel in an Escalade or the Sprinter.",
    },
    {
      question: "Is Independence Pass an option from Beaver Creek?",
      answer:
        "Not a practical one. The Pass route starts east of Beaver Creek, so it adds distance, and the Pass is closed each winter from roughly early November until around Memorial Day weekend. We use the I-70 and Glenwood Springs route year-round. If you want the scenic summer drive over the Pass, ask when you book and we will plan the extra time.",
    },
    {
      question: "What is the drive like in winter?",
      answer:
        "The route stays on I-70 and Highway 82, which are plowed and open year-round, but snow can slow both. I-70 through Glenwood Canyon is occasionally closed by crashes, rockfall or weather, and when it is the detour is far longer. We watch road conditions on the day of your transfer and plan the pickup around them.",
    },
    {
      question: "Do you serve Avon, Edwards and Vail on this route?",
      answer:
        "Yes. We provide door-to-door transfers to Aspen and Snowmass from Beaver Creek, Avon, Edwards and Vail, and back again, with optional stops along the way.",
    },
    {
      question: "How do I book a Beaver Creek to Aspen transfer?",
      answer:
        "Use the online booking form on this page for an instant quote: enter your pickup, destination, date and vehicle. You can also call dispatch at (970) 452-6636 at any hour.",
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
