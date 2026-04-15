import { Car, Clock, MapPin, Star } from "lucide-react";
import fleetHero from "@/assets/fleet-hero.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "black-car-service",
  seo: {
    title: "Luxury Black Car Service Aspen, Colorado",
    description:
      "Premium Aspen car service featuring Rolls Royce Cullinan, 2025 Cadillac Escalade & Executive Sprinter. Airport transfers from ASE, EGE & DEN. Private chauffeur, hourly charters, ski resort transport. Book your luxury ride today.",
    keywords:
      "Aspen car service, luxury car service Aspen, Aspen airport transfer, private chauffeur Aspen, black car service Aspen Colorado, Aspen limo service, Rolls Royce Aspen, Escalade service Aspen, Sprinter van Aspen, ASE airport transfer, Eagle Vail airport transportation, Denver to Aspen car service, Aspen ski resort transport, executive transportation Aspen",
    canonicalUrl: "/black-car-service",
  },
  hero: {
    tagline: "Luxury Transportation",
    headline: "Aspen {{Black Car Service}}",
    description:
      "Experience unparalleled luxury with our exclusive fleet. From airport transfers to special events, travel through Aspen and the Roaring Fork Valley in style with professional chauffeurs available 24/7.",
    image: fleetHero,
    ctaLabel: "Book Your Ride",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  features: [
    {
      icon: MapPin,
      title: "Airport Transfers",
      description:
        "Seamless luxury transportation to and from Aspen-Pitkin County Airport (ASE), Eagle County Regional Airport (EGE), and Denver International Airport (DEN).",
    },
    {
      icon: Clock,
      title: "Hourly Charters",
      description:
        "Book our vehicles by the hour for shopping trips, dinner reservations, or exploring the Roaring Fork Valley in style.",
    },
    {
      icon: Star,
      title: "Special Events",
      description:
        "Weddings, galas, corporate events, and private parties\u2014arrive in a vehicle that matches the occasion.",
    },
    {
      icon: Car,
      title: "Ski Resort Transport",
      description:
        "Daily service to Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk with gear accommodations.",
    },
  ],
  intro: {
    heading: "What Makes VIP Aspen's Black Car Service {{Different}}",
    body: `<p>In a town full of car services, VIP Aspen stands apart. Our fleet includes the only <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> available for hire in Aspen \u2014 a vehicle that turns heads on every street and creates an arrival experience unlike anything else in the valley. Our <a href="/cadillac-escalade">2026 Cadillac Escalades</a> and <a href="/executive-sprinter">Executive Sprinters</a> are the newest luxury vehicles on the road, maintained to the highest standards and equipped with premium amenities for every type of journey.</p>
<p>But it\u2019s not just about the cars. Our chauffeurs are local professionals who know every back road, every hotel entrance, every ski area drop-off, and every restaurant valet in the Roaring Fork Valley. They provide discreet, professional service whether you\u2019re a celebrity who needs privacy or a family that wants to explore Aspen in comfort. Every ride is an experience \u2014 not just a transfer \u2014 with attention to detail that national franchises and ride-share apps simply cannot replicate.</p>
<p>We offer hourly charters for flexible schedules, flat-rate <a href="/aspen-airport-transfer">airport transfers</a> from all four airports serving Aspen \u2014 <a href="/aspen-airport-transfer">ASE</a>, <a href="/eagle-airport-transfer">EGE</a>, <a href="/rifle-airport-transfer">RIL</a>, and <a href="/denver-to-aspen-car-service">DEN</a> \u2014 and event-based packages for <a href="/aspen-wedding-transportation">weddings</a>, <a href="/aspen-corporate-transportation">corporate retreats</a>, and private parties. Whether you need a single vehicle for the evening or a multi-vehicle fleet for a week-long event, we coordinate every detail so you can focus on enjoying Aspen.</p>
<p>For clients who visit regularly or want guaranteed availability, our <a href="/membership">VIP Aspen membership program</a> provides priority booking during peak seasons like Christmas, New Year\u2019s, X Games, and the Food &amp; Wine Classic \u2014 times when luxury vehicles book out weeks in advance. Members also receive discounted rates, complimentary airport transfers, and a dedicated concierge. And for high-profile clients requiring an additional layer of security, our <a href="/executive-protection">executive protection services</a> integrate seamlessly with our transportation fleet.</p>`,
  },
  relatedServices: [
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
