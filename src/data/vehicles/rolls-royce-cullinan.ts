import { Star, Shield, Clock, Users } from "lucide-react";
import heroImg from "@/assets/rr-cullinan-aspen-exit.webp";
import frontImg from "@/assets/rr-cullinan-front.webp";
import interiorImg from "@/assets/rr-cullinan-interior.webp";
import sideImg from "@/assets/rr-cullinan-side.webp";
import type { VehiclePageData } from "@/types";

const data: VehiclePageData = {
  slug: "rolls-royce-cullinan",
  seo: {
    title: "Rolls Royce Cullinan Aspen | Chauffeured Luxury SUV Hire",
    description:
      "Hire a chauffeured Rolls Royce Cullinan in Aspen, Colorado. Bespoke Mandarin interior, professional discreet chauffeur. Airport transfers, ski resorts, weddings, scenic tours & corporate travel. The most exclusive ride in the Rockies. Book (970) 452-6636.",
    keywords:
      "Rolls Royce Cullinan Aspen, Rolls Royce hire Aspen, chauffeured Rolls Royce Aspen Colorado, Rolls Royce rental Aspen, Rolls Royce airport transfer Aspen, Rolls Royce ski resort Aspen, luxury SUV chauffeur Aspen, Rolls Royce wedding Aspen, Rolls Royce Black Badge Aspen",
    canonicalUrl: "/rolls-royce-cullinan",
    ogImage: "https://www.vipaspen.com/og-rolls-royce.jpg",
  },
  hero: {
    tagline: "Aspen's Finest",
    headline: "Chauffeured {{Rolls Royce Cullinan}} in Aspen",
    description:
      "Experience Aspen from the back seat of the world's most luxurious SUV. Our Rolls Royce Cullinan with professional chauffeur delivers an unmatched ride through the Roaring Fork Valley\u2014whether you're heading to the slopes, a private dinner, or the airport.",
    image: heroImg,
    ctaLabel: "Book the Cullinan",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "The Only Rolls Royce Cullinan {{for Hire in Aspen}}",
    body: "This is not a standard luxury rental. VIP Aspen's Rolls Royce Cullinan is the only one available for chauffeured hire in Aspen, Colorado \u2014 and it is unlike any other vehicle on the road in the Roaring Fork Valley. Finished with a bespoke Mandarin orange interior, hand-stitched leather throughout, embroidered RR headrests, and an onboard champagne cooler, this Cullinan has been configured for clients who accept nothing less than the absolute pinnacle of automotive luxury. Every surface you touch has been crafted by hand at the Rolls Royce atelier in Goodwood, England.",
  },
  features: [
    {
      icon: Star,
      title: "Bespoke Mandarin Interior",
      description:
        "Hand-stitched leather with signature orange accents and RR embroidered headrests.",
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
        "Book your chauffeured Rolls Royce Cullinan any time\u2014day or night, year-round in Aspen.",
    },
    {
      icon: Users,
      title: "Up to 3 VIP Passengers",
      description:
        "Intimate rear cabin with individual seats, fold-out tables, and champagne cooler.",
    },
  ],
  gallery: [frontImg, interiorImg, sideImg],
  faqs: [
    {
      question: "How much does it cost to hire a Rolls Royce in Aspen?",
      answer:
        "Our chauffeured Rolls Royce Cullinan starts at a flat rate for airport transfers and is also available by the hour for half-day or full-day bookings. Contact us at (970) 452-6636 for current pricing and availability.",
    },
    {
      question: "Can I book the Rolls Royce for a ski resort transfer?",
      answer:
        "Absolutely. We provide door-to-door chauffeured service to Aspen Mountain, Aspen Highlands, Buttermilk, Snowmass, and beyond. Our professional driver handles all luggage and ski equipment.",
    },
    {
      question: "Is the Rolls Royce Cullinan available for weddings in Aspen?",
      answer:
        "Yes \u2014 our Rolls Royce Cullinan is one of Aspen's most requested wedding vehicles. We coordinate with your wedding planner to handle timelines, decorations, and multi-stop itineraries.",
    },
    {
      question: "Do you offer Rolls Royce service from Denver to Aspen?",
      answer:
        "Yes. We offer long-distance transfers between Denver International Airport and Aspen in the Rolls Royce Cullinan \u2014 approximately 3.5 to 4 hours of unmatched mountain scenery in ultimate comfort.",
    },
    {
      question: "Is your chauffeur discreet and professional?",
      answer:
        "Discretion is our highest priority. All VIP Aspen chauffeurs are background-checked, professionally trained, and experienced in serving high-profile clients. NDAs are available upon request.",
    },
  ],
};

export default data;
