import { Music, Shield, Eye, Clock, Sparkles, Users, DollarSign, Star } from "lucide-react";

export const howItWorks = [
  {
    step: 1,
    title: "Choose Your Experience",
    description: "Select your package, number of performers, and duration. We'll tailor every detail to your preferences.",
  },
  {
    step: 2,
    title: "Browse Talent",
    description: "Review our roster and select your preferred performer(s). Every artist is vetted and professional.",
  },
  {
    step: 3,
    title: "We Handle the Rest",
    description: "Your performer arrives accompanied by security. Logistics, wardrobe, and sound are all taken care of.",
  },
  {
    step: 4,
    title: "Enjoy the Show",
    description: "A private, professional performance on your terms. Total discretion guaranteed.",
  },
];

export const whatsIncluded = [
  {
    icon: Shield,
    title: "Security Escort",
    description: "All talent accompanied by professional security for the duration of the booking.",
  },
  {
    icon: Eye,
    title: "NDA Available",
    description: "Non-disclosure agreements available upon request for complete confidentiality.",
  },
  {
    icon: Sparkles,
    title: "Camera-Ready Arrival",
    description: "Performers arrive with professional wardrobe and sound equipment — ready to perform.",
  },
  {
    icon: Clock,
    title: "Discreet Service",
    description: "Discreet arrival and departure. No branding, no attention — just a seamless experience.",
  },
];

export interface PricingTier {
  category: string;
  items: {
    name: string;
    duration: string;
    price: string;
    description?: string;
    featured?: boolean;
  }[];
}

export const pricingTiers: PricingTier[] = [
  {
    category: "Standard Bookings",
    items: [
      { name: "The Introduction", duration: "60 Minutes", price: "$1,000" },
      { name: "The Extended Set", duration: "90 Minutes", price: "$1,400" },
      { name: "The Full Experience", duration: "120 Minutes", price: "$1,800", featured: true },
    ],
  },
  {
    category: "Multi-Performer Packages",
    items: [
      { name: "Double Feature", duration: "60 Min", price: "$1,800", description: "Two performers" },
      { name: "Double Feature Extended", duration: "90 Min", price: "$2,500", description: "Two performers, duo choreography" },
      { name: "The Grand Show", duration: "120 Min", price: "$3,200", description: "Two performers, full premium experience", featured: true },
      { name: "The Aspen Elite", duration: "120 Min", price: "$5,000", description: "Three performers" },
    ],
  },
  {
    category: "Event & Party Packages",
    items: [
      { name: "Bachelor / Bachelorette", duration: "2 Hours", price: "$3,500" },
      { name: "The Penthouse Party", duration: "3 Hours", price: "$6,000", featured: true },
      { name: "All Night Aspen", duration: "4 Hours", price: "$8,500" },
      { name: "Custom Event", duration: "Custom", price: "Starting $10,000" },
    ],
  },
];

export const cancellationPolicies = [
  "72+ hours notice: full refund minus 10% admin fee",
  "24–72 hours notice: 50% refund",
  "Less than 24 hours: no refund",
  "Same-day cancellation by performer: full refund or reschedule",
];

export const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 48–72 hours in advance to ensure your preferred talent is available. During peak season (Christmas, New Year's, X Games, Food & Wine), we suggest booking 1–2 weeks ahead. Same-day bookings are possible based on availability.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations made 72+ hours in advance receive a full refund minus a 10% admin fee. 24–72 hours notice receives a 50% refund. Less than 24 hours: no refund. If a performer cancels same-day, you receive a full refund or free reschedule.",
  },
  {
    question: "Are tips required?",
    answer: "Tips are never required but always appreciated. Gratuities go directly to the performer. High-tipping clients receive priority access to top-tier talent and peak-season availability.",
  },
  {
    question: "Do you travel outside Aspen?",
    answer: "Yes. We serve Aspen, Snowmass Village, Basalt, Carbondale, and the greater Roaring Fork Valley. Travel to Vail, Beaver Creek, and Denver is available with advance notice and may include a travel fee.",
  },
  {
    question: "Is there a minimum booking?",
    answer: "The minimum booking is 60 minutes. Performers may extend up to 120 minutes at their sole discretion based on comfort, client behavior, and gratuity. Extensions are $500 per 30-minute block, payable immediately.",
  },
];
