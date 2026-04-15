import { MessageSquare, Clock, CheckCircle } from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-wedding-transportation",
  seo: {
    title: "Aspen Wedding Transportation | Rolls Royce, Sprinter & Escalade",
    description:
      "Luxury wedding transportation in Aspen, Colorado. Rolls Royce Cullinan for the couple, Executive Sprinter for the bridal party, Escalade shuttles for guests. Full wedding day coordination. Book (970) 452-6636.",
    keywords:
      "Aspen wedding transportation, wedding limo Aspen, wedding car service Aspen Colorado, Rolls Royce wedding Aspen, bridal transportation Aspen, wedding shuttle Aspen",
    canonicalUrl: "/aspen-wedding-transportation",
  },
  hero: {
    tagline: "Wedding Transportation",
    headline: "Luxury Wedding Transportation in {{Aspen, Colorado}}",
    description:
      "Make your Aspen wedding unforgettable with the Rolls Royce Cullinan, Cadillac Escalade, and Executive Sprinter. From the ceremony to the reception and everywhere in between.",
    image: fleetHero,
    ctaLabel: "Plan Your Wedding Transport",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Your Aspen Wedding Deserves a {{Grand Entrance}}",
    body: `<p>Aspen is one of the most sought-after wedding destinations in the world \u2014 and for good reason. Surrounded by 14,000-foot peaks, golden aspen groves, and a town that radiates understated luxury, it\u2019s the kind of backdrop that makes every wedding feel cinematic. Whether you\u2019re exchanging vows at the Aspen Meadows Resort, The Little Nell, Hotel Jerome, the iconic Maroon Bells, or a private mountaintop estate above Castle Creek Valley, how you arrive and depart is part of the story your guests will tell for years.</p>
<p>Our <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> with its bespoke Mandarin interior creates show-stopping wedding photos and an unforgettable experience for the couple \u2014 from the first look reveal to the grand exit. The champagne cooler is stocked, the cabin is whisper-quiet, and your chauffeur ensures every transition between venues is seamless and on schedule. For the bridal party, the <a href="/executive-sprinter">Executive Sprinter</a> keeps up to 13 of your closest friends together in one luxurious cabin \u2014 with music, champagne, and celebration the entire way. Meanwhile, our fleet of <a href="/cadillac-escalade">Cadillac Escalades</a> handles guest shuttles between hotels and venues, family transport, and vendor coordination with clockwork precision.</p>
<p>We work directly with your wedding planner to coordinate timing, routes, vehicle staging, and contingency plans so that transportation is one thing you never have to worry about on your wedding day. From the rehearsal dinner to the after-party, VIP Aspen has every movement covered. For couples who want priority fleet access during peak wedding season, our <a href="/membership">membership program</a> guarantees vehicle availability and dedicated concierge coordination.</p>`,
  },
  howItWorks: [
    {
      step: 1,
      title: "Consultation",
      description:
        "Tell us your wedding timeline, venues, headcount, and vision. We'll recommend the right vehicles and logistics plan.",
    },
    {
      step: 2,
      title: "Customization",
      description:
        "We plan the fleet, map the routes, coordinate timing with your planner, and handle every logistical detail.",
    },
    {
      step: 3,
      title: "Execution",
      description:
        "Day-of coordination with professional chauffeurs. On-time, every time \u2014 so you can focus on celebrating.",
    },
  ],
  faqs: [
    {
      question: "How far in advance should I book wedding transportation in Aspen?",
      answer:
        "We recommend booking at least 3\u20136 months in advance, especially for peak wedding season (June\u2013October) and ski season weekends. The Rolls Royce Cullinan is our most requested wedding vehicle and books early.",
    },
    {
      question: "Can you coordinate transportation for the entire wedding day?",
      answer:
        "Yes. We work directly with your wedding planner to coordinate every detail \u2014 from getting-ready shuttles and ceremony arrivals to reception transport, photo stops, and late-night guest shuttles. Multiple vehicles can be scheduled simultaneously.",
    },
    {
      question: "How much does wedding transportation cost in Aspen?",
      answer:
        "Wedding transportation is customized based on your timeline, number of vehicles, and hours needed. Contact us at (970) 452-6636 for a personalized quote. We offer package pricing for full wedding day coordination.",
    },
    {
      question: "Can the Rolls Royce be used for wedding photos in Aspen?",
      answer:
        "Absolutely. Our Rolls Royce Cullinan with its bespoke Mandarin interior is stunning in wedding photography. We can position the vehicle at your preferred location and coordinate timing with your photographer.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
