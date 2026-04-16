import { Calendar, Users, MapPin, Star, Clock, Car } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "special-event-transportation",
  seo: {
    title: "Aspen Event Transportation | Food & Wine, X Games & Galas",
    description:
      "Luxury event transportation for Aspen's biggest occasions. Food & Wine Classic, X Games, galas & private events. Call (970) 452-6636.",
    keywords:
      "Aspen event transportation, Food and Wine Classic car service, X Games transportation Aspen, Aspen gala chauffeur, Aspen Ideas Festival car, luxury event transfer Aspen",
    canonicalUrl: "/special-event-transportation",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Event Transportation",
    headline: "Seamless Transportation for Aspen's {{Biggest Events}}",
    description:
      "From the Food & Wine Classic to the X Games, we provide flawless luxury transportation for Aspen's signature events, galas, and private functions.",
    ctaLabel: "Book Now",
    ctaLink: "#booking",
  },
  intro: {
    heading: "Aspen's Events Demand {{Better Transportation}}",
    body: `<p>Aspen's event calendar is one of the most packed in the country. The Food & Wine Classic takes over town every June, the X Games electrify Buttermilk each January, and the Aspen Ideas Festival draws thought leaders from around the world every summer. Add JAS Aspen Snowmass for world-class jazz and country music, World Cup ski racing on Aspen Mountain, and a year-round circuit of gallery openings, charity galas, museum fundraisers, and private estate events \u2014 and you have a town where transportation becomes the single biggest logistical headache on any event weekend. Surge pricing spikes, ride-share availability drops to zero, and downtown streets gridlock with traffic. VIP Aspen clients skip the chaos entirely with pre-booked luxury vehicles, professional chauffeurs who know the event landscape, and guaranteed availability when everyone else is scrambling for a ride.</p>
<p>For corporate groups, wedding parties, host committees, and event planners managing large-scale gatherings, we provide multi-vehicle coordination with a single point of contact. Your fleet arrives on schedule, at the correct venue entrance, with every driver briefed on event logistics, parking restrictions, and VIP staging areas. Whether you need three Escalades rotating between a hotel and a conference venue or a Sprinter shuttling guests between a rehearsal dinner and an after-party, one coordinator manages your entire transportation timeline from start to finish. For larger corporate activations and multi-day conferences, see our dedicated <a href="/aspen-corporate-transportation">corporate transportation</a> service for full fleet management capabilities.</p>
<p>Venue knowledge is what separates a professional event car service from a random ride. Our chauffeurs know every venue in the Roaring Fork Valley \u2014 The Little Nell, Hotel Jerome, Limelight Hotel, the Aspen Art Museum, Wheeler Opera House, Belly Up, Caribou Club, and dozens of private estates scattered across the mountainsides. They know where the VIP drop-off points are, where to stage vehicles between pickups, and how to route around event traffic to get you in and out without fighting the crowds. For clients heading to Aspen's most exclusive nightlife after an event, our <a href="/aspen-clubs">VIP Club Access</a> service pairs perfectly with event transportation for a seamless evening from gala to after-party.</p>`,
  },
  features: [
    {
      icon: Calendar,
      title: "Event Calendar Experts",
      description:
        "Food & Wine Classic, X Games, Aspen Ideas Festival, JAS, World Cup \u2014 we staff up and plan ahead for every major Aspen event.",
    },
    {
      icon: MapPin,
      title: "Venue Knowledge",
      description:
        "We know the VIP entrances, staging areas, and optimal drop-off points at every venue in the valley \u2014 from The Little Nell to private mountain estates.",
    },
    {
      icon: Users,
      title: "Multi-Vehicle Coordination",
      description:
        "Need 3 Escalades and a Sprinter? One point of contact, one timeline, zero confusion. We coordinate your entire fleet.",
    },
    {
      icon: Star,
      title: "Priority During Peak Events",
      description:
        "VIP Aspen members get guaranteed availability during Food & Wine, X Games, and other sold-out weekends when everyone else is scrambling.",
    },
    {
      icon: Clock,
      title: "On-Call All Evening",
      description:
        "Your driver stays on call throughout your event. Leave when you want, not when the shuttle runs. No surge pricing, no wait.",
    },
    {
      icon: Car,
      title: "Full Fleet Available",
      description:
        "Escalade for couples, Sprinter for groups, Rolls Royce for the grand entrance. Match the vehicle to the occasion.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Share Your Event Details",
      description:
        "Tell us the event, date, headcount, pickup locations, and any VIP logistics we should know about.",
    },
    {
      step: 2,
      title: "We Plan the Route",
      description:
        "Our team maps out timing, staging, and vehicle assignments. Multi-stop? Multi-vehicle? We coordinate everything.",
    },
    {
      step: 3,
      title: "Arrive Perfectly",
      description:
        "Your fleet arrives on time, at the right entrance, with drivers briefed on the venue and event flow.",
    },
    {
      step: 4,
      title: "Enjoy the Event",
      description:
        "Your driver is on call all evening. Leave when you're ready \u2014 no surge, no scramble, no stress.",
    },
  ],
  faqs: [
    {
      question: "How far in advance should I book for major Aspen events?",
      answer:
        "For Food & Wine Classic, X Games, and holiday weekends, we recommend booking 2-4 weeks in advance. These are our busiest periods and vehicles book out quickly.",
    },
    {
      question: "Can you coordinate transportation for a large group?",
      answer:
        "Yes. We routinely coordinate multi-vehicle fleets for corporate events, wedding weekends, and host committees. One point of contact manages your entire transportation plan.",
    },
    {
      question: "Do your drivers know the event venues?",
      answer:
        "Absolutely. Our chauffeurs know every venue in the valley \u2014 VIP entrances, staging areas, and the fastest routes to avoid event traffic.",
    },
    {
      question: "Is there surge pricing during events?",
      answer:
        "No. Our rates are consistent regardless of event schedules or demand. Book in advance and your price is locked.",
    },
    {
      question: "Can I keep my driver on call during an event?",
      answer:
        "Yes. For events where timing is uncertain, book our hourly service. Your driver stays nearby and is ready when you are.",
    },
  ],
  relatedServices: [
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
