import {
  MapPin,
  Clock,
  Radar,
  Luggage,
  Wifi,
  Baby,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "denver-to-aspen-car-service",
  seo: {
    title: "Denver to Aspen Car Service | Luxury Private Transfer",
    description:
      "Luxury private car service from Denver International Airport (DEN) to Aspen, Colorado. Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. 3.5-hour scenic mountain transfer with professional chauffeur. Book (970) 452-6636.",
    keywords:
      "Denver to Aspen car service, DEN airport transfer, Denver International to Aspen, private car Denver Aspen, mountain transfer DEN",
    canonicalUrl: "/denver-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Denver International \u2192 Aspen",
    headline: "Private Luxury Car Service {{Denver to Aspen}}",
    description:
      "Skip the shuttle van. Your Aspen experience begins the moment you land at DEN. Choose between the Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter for a 3.5-hour transfer through some of the most spectacular mountain scenery in the world.",
    image: fleetHero,
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "DEN",
    name: "Denver International Airport",
    distanceToAspen: "225 miles",
    driveTime: "~3.5 hours",
  },
  intro: {
    heading: "What to Expect on the {{Denver to Aspen Drive}}",
    body: "The 225-mile journey from Denver International Airport to Aspen is one of the most spectacular drives in the state of Colorado \u2014 and one of the most demanding. The route follows Interstate 70 west from Denver through the foothills, climbing to the Eisenhower-Johnson Memorial Tunnel at 11,158 feet before descending past the world-famous ski resorts of Vail and Beaver Creek. From there, the highway drops into Glenwood Canyon \u2014 a breathtaking 12-mile corridor where the road is carved into the walls of the Colorado River gorge \u2014 before exiting at Glenwood Springs and turning south on Highway 82 along the Roaring Fork River into Aspen.\n\nIn winter, Independence Pass (Highway 82 over the Continental Divide) is closed, making the I-70 corridor the only route between Denver and Aspen. Mountain passes, black ice, sudden whiteouts, and altitude all make this a drive that demands an experienced hand. Our professional chauffeurs navigate these roads year-round and know exactly how to handle Colorado's unpredictable mountain weather.",
  },
  features: [
    {
      icon: Radar,
      title: "Flight Tracking & Wait Time",
      description: "We monitor your flight in real time and provide complimentary wait time for delayed arrivals.",
    },
    {
      icon: MapPin,
      title: "Meet & Greet at Baggage Claim",
      description: "Your chauffeur meets you at baggage claim with a name sign for a seamless handoff.",
    },
    {
      icon: Luggage,
      title: "All Luggage & Ski Gear Handled",
      description: "Every piece of luggage and ski equipment is handled by your chauffeur from carousel to vehicle.",
    },
    {
      icon: Clock,
      title: "Door-to-Door Delivery",
      description: "Non-stop transfer directly to your Aspen property, hotel, or resort\u2014no shared rides, no stops.",
    },
    {
      icon: Wifi,
      title: "Wi-Fi & Refreshments",
      description: "Chilled water and refreshments onboard. Wi-Fi available in select vehicles.",
    },
    {
      icon: Baby,
      title: "Child Seats Available",
      description: "Child seats available on request. Return trip scheduling also available.",
    },
  ],
  destinations: [
    { name: "Downtown Aspen", detail: "~3.5 hours" },
    { name: "Snowmass Village", detail: "~3.5 hours" },
    { name: "Vail Village", detail: "~2 hours" },
    { name: "Glenwood Springs", detail: "~2.5 hours" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The ultimate Denver to Aspen luxury transfer experience \u2014 complete with champagne cooler and bespoke interior.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Ideal for families and groups with ski equipment. Premium comfort with generous luggage capacity.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Accommodates up to 13 passengers for corporate retreats and group travel through the Rockies.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "How long is the drive from Denver to Aspen?",
      answer:
        "Approximately 3.5 hours (225 miles) via I-70 through the Rocky Mountains.",
    },
    {
      question: "Is Independence Pass open in winter?",
      answer:
        "No, Independence Pass closes in winter. The I-70 route through Glenwood Springs is used year-round.",
    },
    {
      question: "Can I make stops along the way?",
      answer:
        "Yes, we can arrange stops in Vail, Glenwood Springs, or other locations along the route.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
