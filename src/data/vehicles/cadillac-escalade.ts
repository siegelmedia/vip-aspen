import { Star, Shield, Clock, Users, Monitor, Car } from "lucide-react";
import nightImg from "@/assets/escalade-night.webp";
import signatureImg from "@/assets/escalade-signature.webp";
import interiorImg from "@/assets/escalade-interior.webp";
import tarmacImg from "@/assets/escalade-tarmac.webp";
import type { VehiclePageData } from "@/types";

const data: VehiclePageData = {
  slug: "cadillac-escalade",
  seo: {
    title: "Chauffeured 2025 Cadillac Escalade in Aspen",
    description:
      "Ride in a chauffeured 2025 Cadillac Escalade in Aspen, Colorado. Premium luxury SUV with professional driver for airport transfers, ski resorts, weddings & private tours. Up to 5 passengers. Book today.",
    keywords:
      "Cadillac Escalade Aspen, chauffeured Escalade Aspen, 2025 Escalade Aspen Colorado, luxury SUV Aspen, Escalade rental Aspen, Escalade chauffeur service, Aspen luxury car hire, Escalade airport transfer Aspen, black car Escalade Aspen, private chauffeur Escalade, VIP car service Aspen, Cadillac Escalade hire Aspen",
    canonicalUrl: "/cadillac-escalade",
  },
  hero: {
    tagline: "Premium SUV",
    headline: "Chauffeured {{2025 Cadillac Escalade}} in Aspen",
    description:
      "Command Aspen's roads in the iconic 2025 Cadillac Escalade. Featuring the bold new facelift design, premium leather interior, rear entertainment, and complimentary refreshments\u2014all with a professional chauffeur at your service 24/7.",
    image: nightImg,
    ctaLabel: "Book the Escalade",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Aspen's Go-To {{Luxury SUV}}",
    body: "The 2026 Cadillac Escalade is the workhorse of the VIP Aspen fleet and the perfect vehicle for life in the mountains. With seating for up to 5 passengers, full-time 4WD capability built for Colorado's mountain roads, and generous cargo space for luggage and ski equipment, the Escalade handles everything from ASE airport transfers to multi-day resort transportation with effortless composure. It's the most requested vehicle for families visiting Aspen, corporate groups attending conferences, and clients who need reliable luxury transportation in every weather condition.",
  },
  features: [
    {
      icon: Star,
      title: "2025 Facelift Design",
      description:
        "The latest Cadillac Escalade featuring the illuminated crest, vertical LED light bars, and bold new front fascia.",
    },
    {
      icon: Shield,
      title: "Professional Chauffeur",
      description:
        "Experienced, discreet chauffeurs who know every road in the Roaring Fork Valley.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Book your chauffeured Escalade any time\u2014day or night, year-round in Aspen.",
    },
    {
      icon: Users,
      title: "Up to 5 VIP Passengers",
      description:
        "Spacious cabin with premium leather seating, ample legroom, and luggage capacity for your group.",
    },
    {
      icon: Monitor,
      title: "Rear Entertainment",
      description:
        "Tablet entertainment system and premium refreshments including Saratoga spring water for every ride.",
    },
    {
      icon: Car,
      title: "Tarmac Service",
      description:
        "Direct private jet tarmac pick-up and drop-off at ASE, EGE, and regional airports.",
    },
  ],
  gallery: [signatureImg, interiorImg, tarmacImg],
  faqs: undefined,
};

export default data;
