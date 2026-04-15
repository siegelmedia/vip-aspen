import {
  Plane,
  Clock,
  ShieldCheck,
  Timer,
  Luggage,
  Mountain,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "rifle-airport-transfer",
  seo: {
    title: "Rifle Airport Transfer | RIL to Aspen Private Jet Service",
    description:
      "Luxury Rifle Garfield County Airport (RIL) transfer to Aspen. Premium car service for private jet arrivals. Tarmac meet & greet, Escalade, Rolls Royce & Sprinter. Book your RIL transfer.",
    keywords:
      "Rifle airport transfer, RIL airport car service, Rifle to Aspen transportation, Rifle airport limo, private jet Rifle airport, Garfield County airport car service, luxury transfer Rifle, Rifle airport to Aspen, private aviation Rifle",
    canonicalUrl: "/rifle-airport-transfer",
  },
  hero: {
    tagline: "RIL Private Jet Transfers",
    headline: "Rifle Airport {{Private Jet Service}}",
    description:
      "Rifle Garfield County Airport (RIL) is the preferred choice for private jet travelers heading to Aspen. With longer runways and fewer weather restrictions, RIL offers reliable access year-round. Our luxury fleet meets you on the tarmac for seamless, VIP-level transfers.",
    image: fleetHero,
    ctaLabel: "Book RIL Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "RIL",
    name: "Rifle Garfield County Airport",
    distanceToAspen: "60 miles",
    driveTime: "~75 min",
  },
  intro: {
    heading: "About RIL Airport",
    body: "Rifle Garfield County Airport (RIL) has become the go-to destination for discerning travelers arriving by private jet. Located 60 miles from Aspen, the airport features a 7,000-foot runway capable of handling the largest private aircraft, with fewer weather delays than higher-altitude airports.\n\nFor VIP clients, we provide tarmac meet & greet service\u2014your chauffeur will be waiting steps from your aircraft. The scenic drive along Highway 82 through Glenwood Springs and Carbondale takes approximately 75 minutes, offering stunning views of the Colorado River and Roaring Fork Valley.",
  },
  features: [
    {
      icon: Plane,
      title: "Private Jet Specialist",
      description: "Purpose-built for private aviation with tarmac-side meet & greet directly at your aircraft.",
    },
    {
      icon: ShieldCheck,
      title: "Tarmac Meet & Greet",
      description: "Your chauffeur waits steps from your aircraft on the ramp\u2014no terminals, no crowds, no waiting.",
    },
    {
      icon: Timer,
      title: "Complimentary Wait Time",
      description: "Generous wait time included so there is never any pressure on arrival.",
    },
    {
      icon: Luggage,
      title: "Ski Gear & Luggage Handling",
      description: "All luggage and ski equipment handled directly from the aircraft to your vehicle.",
    },
    {
      icon: Mountain,
      title: "Scenic Roaring Fork Route",
      description: "The 75-minute drive passes through Glenwood Springs and Carbondale with stunning valley views.",
    },
    {
      icon: Clock,
      title: "Weather Reliability",
      description: "Lower elevation means fewer weather-related delays and cancellations compared to mountain airports.",
    },
  ],
  destinations: [
    { name: "Aspen", detail: "~75 min" },
    { name: "Snowmass", detail: "~65 min" },
    { name: "Glenwood Springs", detail: "~20 min" },
    { name: "Carbondale", detail: "~40 min" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The ultimate tarmac-to-resort transfer. Your chauffeur pulls directly onto the ramp and you step from your jet into the most prestigious SUV in the world.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Spacious luxury with ample room for luggage, ski equipment, and up to five passengers.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Seats up to 13 in a first-class cabin configuration. Ideal for larger private jet parties and groups.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "Why do private jet travelers choose Rifle Airport?",
      answer:
        "RIL has a 7,000-foot runway at lower altitude that accommodates all private jet types, fewer weather delays, and our exclusive tarmac meet & greet for a truly private arrival.",
    },
    {
      question: "How long is the drive from Rifle Airport to Aspen?",
      answer:
        "Approximately 75 minutes along Highway 82 through Glenwood Springs and Carbondale.",
    },
    {
      question: "Do you meet passengers on the tarmac?",
      answer:
        "Yes. For private jet arrivals at RIL, your chauffeur is waiting on the ramp, steps from your aircraft. No terminals, no crowds.",
    },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
