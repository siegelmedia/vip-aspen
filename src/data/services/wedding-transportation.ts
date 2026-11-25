import { Gem, Users, Car, Camera, CalendarCheck, Clock } from "lucide-react";
import heroBg from "@/assets/hero-wedding.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "aspen-wedding-transportation",
  seo: {
    title: "Aspen Wedding Transportation | Rolls-Royce",
    description:
      "Luxury wedding transportation in Aspen: Rolls Royce Cullinan for the couple, Executive Sprinter for the party, Escalade shuttles for guests. Book (970) 452-6636.",
    keywords:
      "Aspen wedding transportation, wedding limo Aspen, wedding car service Aspen Colorado, Rolls Royce wedding Aspen, bridal transportation Aspen, wedding shuttle Aspen",
    canonicalUrl: "/aspen-wedding-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Wedding Transportation",
    headline: "Luxury Wedding Transportation in {{Aspen, Colorado}}",
    description:
      "Make your Aspen wedding unforgettable with the Rolls Royce Cullinan, Cadillac Escalade, and Executive Sprinter. From the ceremony to the reception and everywhere in between.",
    bgImage: heroBg,
    ctaLabel: "Plan Your Wedding Transport",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Your Aspen Wedding Deserves a {{Grand Entrance}}",
    body: `<p>Aspen is one of the most sought-after wedding destinations in the world, and for good reason. Surrounded by 14,000-foot peaks, golden aspen groves, and a town that radiates understated luxury, it’s the kind of backdrop that makes every wedding feel cinematic. Whether you’re exchanging vows at the Aspen Meadows Resort, The Little Nell, Hotel Jerome, the Maroon Bells, or a private estate above Castle Creek, how you arrive and depart is part of the story your guests will tell for years.</p>
<p>Each vehicle has a job. The <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> is the couple’s car: it seats up to 3 passengers, and its bespoke Mandarin interior, champagne cooler, and whisper-quiet cabin make it the vehicle for the first look, the photos, and the grand exit. The <a href="/executive-sprinter">Executive Sprinter</a> keeps the wedding party together, with seats for up to 13. <a href="/cadillac-escalade">Cadillac Escalades</a>, each seating up to 5, move family and guests between hotels and venues.</p>
<p>We work from your wedding timeline, and with your planner if you have one, to set pickup times, routes, and vehicle staging so that transportation is one thing you never have to think about on the day. We cover the rehearsal dinner, the ceremony and reception, and the late-night rides home. <a href="/membership">VIP Members</a> receive priority booking, which helps on peak wedding weekends.</p>`,
  },
  features: [
    {
      icon: Gem,
      title: "Rolls-Royce for the Couple",
      description:
        "The Rolls Royce Cullinan seats up to 3 passengers, so the couple rides alone or with one guest. Bespoke Mandarin interior and champagne cooler.",
    },
    {
      icon: Users,
      title: "Sprinter for the Wedding Party",
      description:
        "The Executive Sprinter seats up to 13, keeping the wedding party together between getting ready, the ceremony, photos, and the reception.",
    },
    {
      icon: Car,
      title: "Escalades for Family & Guests",
      description:
        "Each Cadillac Escalade seats up to 5 passengers. Use them for parents and grandparents, VIP guests, and shuttle runs between hotels and venues.",
    },
    {
      icon: CalendarCheck,
      title: "Built on Your Timeline",
      description:
        "Send us the day-of schedule or connect us with your planner. We set pickup times, routes, and staging for every vehicle.",
    },
    {
      icon: Camera,
      title: "Photo-Ready Arrivals",
      description:
        "The Cullinan can be positioned for portraits and the send-off, with timing agreed in advance with your photographer.",
    },
    {
      icon: Clock,
      title: "The Whole Weekend",
      description:
        "Airport arrivals, the welcome party, the rehearsal dinner, the wedding day, and the late-night rides home, all on one plan.",
    },
  ],
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
        "Professional chauffeurs run the plan on the day, so you can focus on celebrating.",
    },
  ],
  faqs: [
    {
      question: "How many people fit in each wedding vehicle?",
      answer:
        "The Rolls Royce Cullinan seats up to 3 passengers, the Cadillac Escalade seats up to 5, and the Executive Sprinter seats up to 13. Most weddings use the Cullinan for the couple, the Sprinter for the wedding party, and one or more Escalades for family and guests.",
    },
    {
      question: "How far in advance should I book wedding transportation in Aspen?",
      answer:
        "We recommend booking 3 to 6 months in advance, especially for peak wedding season (June through October) and ski season weekends. The Rolls Royce Cullinan is our most requested wedding vehicle and books early.",
    },
    {
      question: "Can you coordinate transportation for the entire wedding day?",
      answer:
        "Yes. We work from your timeline, and with your wedding planner, to schedule getting-ready pickups, ceremony arrivals, reception transport, photo stops, and late-night guest rides. Multiple vehicles can run at the same time.",
    },
    {
      question: "How much does wedding transportation cost in Aspen?",
      answer:
        "It depends on your timeline, the number of vehicles, and the hours you need them. Use the booking form on this page for an instant quote on a single transfer, or call (970) 452-6636 for a quote built around your full wedding schedule.",
    },
    {
      question: "Can the Rolls Royce be used for wedding photos in Aspen?",
      answer:
        "Yes. Our Rolls Royce Cullinan with its bespoke Mandarin interior photographs beautifully. We can position the vehicle at your chosen location and agree the timing with your photographer.",
    },
    {
      question: "Can you bring our guests in from the airport?",
      answer:
        "Yes. We run flight-tracked transfers from Aspen airport (5 to 10 minutes to downtown), Eagle (about 90 minutes), Rifle (about 75 minutes), and Denver (about 3.5 to 4 hours). The Escalade carries up to 5 guests and the Sprinter up to 13.",
    },
    {
      question: "Our wedding is in summer or fall 2027. Is Aspen airport open?",
      answer:
        "No. Aspen-Pitkin County Airport is closed for runway reconstruction from April 4, 2027 at 11 p.m. until November 19, 2027 at 7 p.m., with no commercial or private flights. Guests for weddings in that window will arrive through other airports such as Eagle, Rifle, or Denver, so plan for longer transfers and reserve vehicles early.",
    },
  ],
  relatedServices: [
    { label: "Rolls Royce Cullinan", href: "/rolls-royce-cullinan" },
    { label: "Executive Sprinter", href: "/executive-sprinter" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
