import { Star, Shield, Clock, Users, Monitor, Car } from "lucide-react";
import nightImg from "@/assets/escalade-hero-night.webp";
import signatureImg from "@/assets/escalade-gallery-signature.webp";
import interiorImg from "@/assets/escalade-gallery-interior.webp";
import tarmacImg from "@/assets/escalade-gallery-tarmac.webp";
import type { VehiclePageData } from "@/types";

const data: VehiclePageData = {
  slug: "cadillac-escalade",
  seo: {
    title: "Chauffeured Cadillac Escalade in Aspen | Luxury SUV Car Service",
    description:
      "Ride in a chauffeured latest-generation Cadillac Escalade in Aspen, Colorado. Premium luxury SUV with professional driver for airport transfers, ski resorts, weddings & private tours. Up to 5 passengers. Book today.",
    keywords:
      "Cadillac Escalade Aspen, luxury SUV charter Aspen, Escalade mountain roads, ski resort SUV Aspen, Escalade hire Colorado, luxury SUV chauffeur Aspen",
    canonicalUrl: "/cadillac-escalade",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Premium SUV",
    headline: "Chauffeured {{Cadillac Escalade}} in Aspen",
    description:
      "Command Aspen's roads in the latest-generation Cadillac Escalade. Featuring the bold redesigned front end, premium leather interior, rear entertainment, and complimentary refreshments\u2014all with a professional chauffeur at your service 24/7.",
    image: nightImg,
    ctaLabel: "Book the Escalade",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "Aspen's Go-To {{Luxury SUV}}",
    body: "The Cadillac Escalade is the workhorse of the VIP Aspen fleet and the perfect vehicle for life in the mountains. With seating for up to 5 passengers, full-time 4WD capability built for Colorado's mountain roads, and generous cargo space for luggage and ski equipment, the Escalade handles everything from ASE airport transfers to multi-day resort transportation with effortless composure. It's the most requested vehicle for families visiting Aspen, corporate groups attending conferences, and clients who need reliable luxury transportation in every weather condition.",
  },
  features: [
    {
      icon: Star,
      title: "Latest-Generation Design",
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
  faqs: [
    { question: "How much does it cost to hire the Escalade?", answer: "Contact us for current rates. We offer both hourly charters and flat-rate airport transfers. VIP Aspen members receive discounted rates on all Escalade bookings." },
    { question: "How many passengers fit in the Escalade?", answer: "The Escalade comfortably seats up to 5 passengers with luggage. For larger groups, consider our Executive Sprinter which accommodates up to 13 passengers." },
    { question: "Is the Escalade suitable for winter mountain roads?", answer: "Absolutely. Our Escalades feature 4WD, winter tires, and are driven by experienced mountain road professionals who know every pass and canyon in the valley." },
    { question: "What amenities are inside the Escalade?", answer: "Premium AKG sound system, rear entertainment screens, tri-zone climate control, Wi-Fi, USB charging, and complimentary bottled water. The interior is detailed before every ride." },
    { question: "Can I book the Escalade for a full day?", answer: "Yes. We offer hourly rates, half-day, and full-day charters. Full-day bookings are popular for ski days, real estate tours, and corporate retreats throughout the valley." },
  ],
  relatedServices: [
    { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
    { label: "Private Ski Transfers", href: "/private-ski-transfers" },
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
