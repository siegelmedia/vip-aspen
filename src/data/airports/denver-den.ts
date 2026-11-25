import {
  MapPin,
  Clock,
  Radar,
  Luggage,
  Wifi,
  Baby,
} from "lucide-react";
import heroBg from "@/assets/hero-denver-airport.webp";
import cullinan from "@/assets/rolls-royce-cullinan.webp";
import escalade from "@/assets/escalade.webp";
import sprinter from "@/assets/sprinter.webp";
import type { AirportPageData } from "@/types";

const data: AirportPageData = {
  slug: "denver-to-aspen-car-service",
  seo: {
    title: "Denver to Aspen Car Service | DEN Transfers",
    description:
      "Private car service from Denver International Airport (DEN) to Aspen. Rolls-Royce, Escalade & Sprinter, about 3.5 to 4 hours with a professional chauffeur.",
    keywords:
      "Denver to Aspen car service, DEN airport transfer, Denver International to Aspen, private car Denver Aspen, mountain transfer DEN",
    canonicalUrl: "/denver-to-aspen-car-service",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Denver International → Aspen",
    headline: "Private Luxury Car Service {{Denver to Aspen}}",
    description:
      "Skip the shuttle van. Your Aspen trip begins the moment you land at DEN. Choose the Rolls-Royce Cullinan, Cadillac Escalade, or Executive Sprinter for the 3.5 to 4 hour drive through the Rocky Mountains, door to door with a professional chauffeur.",
    bgImage: heroBg,
    ctaLabel: "Book Your Transfer",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  airport: {
    code: "DEN",
    name: "Denver International Airport",
    distanceToAspen: "225 miles",
    driveTime: "~3.5-4 hours",
  },
  intro: {
    heading: "What to Expect on the {{Denver to Aspen Drive}}",
    body: `<p>The drive from Denver International Airport to Aspen covers about 225 miles and takes about 3.5 to 4 hours in normal conditions. The route follows Interstate 70 west from Denver through the foothills, climbing to the Eisenhower-Johnson Memorial Tunnel at 11,158 feet before descending past Vail and Beaver Creek. From there the highway drops into Glenwood Canyon, a roughly 12-mile corridor where the road is built into the walls of the Colorado River gorge, before exiting at Glenwood Springs and turning south on Highway 82 along the Roaring Fork River into Aspen.</p>
<p>In winter, Independence Pass (Highway 82 over the Continental Divide) is closed, so the I-70 corridor through Glenwood Springs is the route between Denver and Aspen. High passes, ice, sudden whiteouts, and weekend ski traffic all make this a drive that rewards an experienced hand. Our professional chauffeurs drive these roads year-round, and you spend the hours working, resting, or watching the scenery instead of watching the road.</p>
<p>At DEN, pre-arranged car services pick up on Level 5 of the Jeppesen Terminal, the same level as baggage claim. We track your flight and confirm the terminal side and door with your booking, and your chauffeur loads your luggage at the vehicle. Ski equipment travels in the <a href="/cadillac-escalade">Cadillac Escalade</a> or the <a href="/executive-sprinter">Executive Sprinter</a>.</p>`,
  },
  features: [
    {
      icon: Radar,
      title: "Flight Tracking & Wait Time",
      description: "We monitor your flight in real time and provide complimentary wait time for delayed arrivals.",
    },
    {
      icon: MapPin,
      title: "Pickup Outside Baggage Claim",
      description: "Pre-arranged car services pick up on Level 5 of the Jeppesen Terminal, the baggage claim level. We confirm the terminal side and door with your booking.",
    },
    {
      icon: Luggage,
      title: "Luggage & Ski Gear Loaded",
      description: "Your chauffeur loads your luggage at the vehicle. Ski equipment travels in the Escalade or Sprinter.",
    },
    {
      icon: Clock,
      title: "Door-to-Door Delivery",
      description: "A private transfer directly to your Aspen property, hotel, or resort. No shared rides, and no stops you did not ask for.",
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
    { name: "Downtown Aspen", detail: "~3.5-4 hours" },
    { name: "Snowmass Village", detail: "~3.5-4 hours" },
    { name: "Vail Village", detail: "~2 hours" },
    { name: "Glenwood Springs", detail: "~2.5-3 hours" },
  ],
  fleetOptions: [
    {
      name: "Rolls Royce Cullinan",
      image: cullinan,
      description:
        "The ultimate Denver to Aspen transfer for up to three passengers with standard luggage, complete with champagne cooler and bespoke interior. It does not carry ski equipment.",
      link: "/rolls-royce-cullinan",
    },
    {
      name: "Cadillac Escalade",
      image: escalade,
      description:
        "Ideal for families and small groups with ski equipment. Seats up to five with generous luggage capacity.",
      link: "/cadillac-escalade",
    },
    {
      name: "Executive Sprinter",
      image: sprinter,
      description:
        "Accommodates up to 13 passengers with luggage and ski equipment for corporate retreats and group travel through the Rockies.",
      link: "/executive-sprinter",
    },
  ],
  faqs: [
    {
      question: "Where does my driver meet me at Denver airport?",
      answer:
        "Your chauffeur meets you at the limousine pickup area outside baggage claim, on Level 5 of the Jeppesen Terminal. The airport's limousine check-in is on Island 2, outside doors 505-507 and 511-513 on the east side and doors 504-506 and 510-512 on the west side. We confirm which side and door with your booking, and your luggage is loaded at the vehicle.",
    },
    {
      question: "How long is the drive from Denver to Aspen?",
      answer:
        "About 3.5 to 4 hours in normal conditions, covering roughly 225 miles. The route runs west on I-70 to Glenwood Springs, then south on Highway 82. Weekend ski traffic and winter storms on I-70 can add time, so leave a cushion before any fixed commitment in Aspen.",
    },
    {
      question: "Which vehicle should I book for my group and ski gear?",
      answer:
        "The Cadillac Escalade carries up to 5 passengers with luggage and skis, and the Executive Sprinter carries up to 13. The Rolls-Royce Cullinan seats 3 with standard luggage and does not carry ski equipment, so ski and snowboard bags need to travel in an Escalade or the Sprinter.",
    },
    {
      question: "What if my flight is delayed or my connection to Aspen is cancelled?",
      answer:
        "We track your inbound flight and move the pickup to the new arrival time, with complimentary wait time included. If your connecting flight from Denver to Aspen is cancelled, call dispatch at (970) 452-6636. A same-day drive to Aspen depends on vehicle availability, so call as soon as you know.",
    },
    {
      question: "Is Independence Pass open in winter?",
      answer:
        "No. Independence Pass on Highway 82 closes each winter, usually from early November until around Memorial Day weekend, weather permitting. While it is closed, the route from Denver is I-70 west to Glenwood Springs and then Highway 82 south to Aspen. That I-70 route is also the standard route in summer.",
    },
    {
      question: "What should I know about winter road conditions?",
      answer:
        "Expect a longer drive when it snows. I-70 crosses the Eisenhower Tunnel and Vail Pass and runs through Glenwood Canyon, and any of them can slow or close in a storm. Colorado's Traction Law applies to passenger vehicles on I-70 between Morrison and Dotsero from September 1 through May 31. With a chauffeur who drives the corridor year-round, the weather is not yours to manage.",
    },
    {
      question: "Can you meet a private aircraft instead of a commercial flight?",
      answer:
        "Yes. Private arrivals are met at the FBO rather than at the commercial terminal. Tell us the airport, the FBO, your tail number and your estimated arrival time when you book. If you are landing at a Denver-area airport other than Denver International, call dispatch at (970) 452-6636 to arrange the pickup.",
    },
    {
      question: "Can I make stops along the way, and how do I book?",
      answer:
        "Yes, stops in Vail, Glenwood Springs, or elsewhere on the route are easy to arrange; mention them when you book. Use the online booking form on this page for an instant quote, or call dispatch at (970) 452-6636 at any hour with your flight number, passenger count and destination.",
    },
  ],
  relatedServices: [
    { label: "Denver to Aspen: Every Option Compared", href: "/guides/denver-to-aspen" },
    { label: "Vail to Aspen Car Service", href: "/vail-to-aspen-car-service" },
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
    { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
    { label: "Snowmass Village Transfer", href: "/snowmass-village-transfer" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
