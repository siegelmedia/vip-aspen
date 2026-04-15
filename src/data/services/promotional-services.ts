import { Megaphone, UserCheck, Wine, Building2, Sparkles } from "lucide-react";
import heroImage from "@/assets/promotional-services.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "promotional-services",
  seo: {
    title: "Promotional Models & Brand Ambassadors in Aspen",
    description:
      "Elite promotional talent for Aspen events. Brand ambassadors, event hostesses, atmosphere models, and cocktail service professionals. Sourced nationally, delivered locally. Get a quote \u2014 call (970) 452-6636.",
    keywords:
      "brand ambassadors Aspen, promotional models Aspen, event hostesses Aspen, atmosphere models Colorado, event staffing Aspen, cocktail models Aspen, tradeshow staff Aspen",
    canonicalUrl: "/promotional-services",
  },
  hero: {
    tagline: "Elite Talent",
    headline: "Elite Promotional Talent for Aspen's {{Most Exclusive Events}}",
    description:
      "Brand ambassadors, event hostesses, atmosphere models, and cocktail service professionals \u2014 sourced nationally, delivered locally.",
    image: heroImage,
    ctaLabel: "Get a Quote",
    ctaLink: "#quote",
  },
  features: [
    {
      icon: Megaphone,
      title: "Brand Ambassadors",
      description:
        "Trained promotional models for product launches, tastings, trade shows, and retail activations. Briefed on your brand before every engagement.",
      features: [
        "Product training included",
        "Lead capture support",
        "Branded wardrobe coordination",
      ],
    },
    {
      icon: UserCheck,
      title: "Event Hostesses & Greeters",
      description:
        "Professional check-in, guest registration, VIP escort within venues, coat check, and gift bag distribution for galas, fundraisers, and corporate events.",
      features: ["Guest registration", "VIP escort", "Gift bag distribution"],
    },
    {
      icon: Wine,
      title: "Cocktail & Bottle Service Models",
      description:
        "Polished service models for private parties, bottle presentations, and hospitality activations.",
      features: [
        "Bottle service presentation",
        "Private party hosting",
        "Hospitality training",
      ],
    },
    {
      icon: Building2,
      title: "Tradeshow & Convention Staff",
      description:
        "Experienced booth professionals for expos and conventions in Aspen, Vail, Denver, and surrounding areas.",
      features: [
        "Booth management",
        "Demo presentations",
        "Multi-day availability",
      ],
    },
    {
      icon: Sparkles,
      title: "Atmosphere Models",
      description:
        "Stunning talent who mingle, engage guests, and create a premium social environment. Ideal for grand openings, gallery events, and launch parties.",
      features: [
        "Guest engagement",
        "Social presence",
        "Photo-ready styling",
      ],
    },
  ],
  pricing: [
    {
      category: "Per Model Rates",
      items: [
        { name: "Hourly", detail: "2-hour minimum", price: "$150/hr" },
        { name: "Half-Day", detail: "4 Hours", price: "$500" },
        { name: "Full Day", detail: "8 Hours", price: "$900", featured: true },
      ],
    },
    {
      category: "Multi-Model Packages",
      items: [
        { name: "Starter", detail: "2 models, 4 hours", price: "$900" },
        { name: "Standard", detail: "3 models, 4 hours", price: "$1,250" },
        { name: "Premium", detail: "4 models, 6 hours", price: "$2,200", featured: true },
        { name: "Elite", detail: "6 models, 8 hours", price: "$3,600" },
        { name: "Custom Team", detail: "8+ models, custom", price: "Starting $5,000" },
      ],
    },
    {
      category: "Event Packages",
      items: [
        {
          name: "Grand Opening",
          detail: "4 hostesses, 4 hrs, branded wardrobe, registration, gift bags",
          price: "$2,500",
        },
        {
          name: "Product Launch",
          detail: "3 ambassadors, 4 hrs, product training, lead capture",
          price: "$2,000",
        },
        {
          name: "Private Party Enhancement",
          detail: "3 atmosphere + 2 cocktail models, 4 hrs",
          price: "$3,200",
          featured: true,
        },
        {
          name: "Gala & Fundraiser",
          detail: "4 hostesses + 2 VIP escorts, 6 hrs",
          price: "$3,800",
        },
        {
          name: "Ski Season Welcome",
          detail: "2 branded greeters, 4 hrs, welcome gifts",
          price: "$1,200",
        },
        {
          name: "Festival / Multi-Day",
          detail: "6+ models, rotating shifts, on-site coordinator",
          price: "Starting $8,000",
        },
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Tell Us About Your Event",
      description:
        "Share the date, location, type, headcount, and goals. We'll design the perfect talent strategy.",
    },
    {
      step: 2,
      title: "We Build Your Team",
      description:
        "Custom talent recommendation and model selection tailored to your brand and event requirements.",
    },
    {
      step: 3,
      title: "Pre-Event Prep",
      description:
        "Product training, wardrobe coordination, and full logistics planning \u2014 everything handled before the day.",
    },
    {
      step: 4,
      title: "Flawless Execution",
      description:
        "Talent arrives styled and briefed. An on-site coordinator manages everything so you can focus on your event.",
    },
  ],
  cancellationPolicy: [
    "7+ days notice: full refund minus 10% admin fee",
    "3\u20137 days notice: 50% refund",
    "Less than 72 hours: no refund",
    "One free reschedule within 30 days, then standard policy applies",
    "Weather or force majeure: full reschedule at no charge",
  ],
  faqs: [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 1\u20132 weeks in advance for most events. Large-scale activations, multi-day festivals, and peak-season events should be booked 3\u20134 weeks ahead. Rush bookings are available based on talent availability.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made 7+ days in advance receive a full refund minus a 10% admin fee. 3\u20137 days notice receives a 50% refund. Less than 72 hours: no refund. You get one free reschedule within 30 days. Weather and force majeure events receive a full reschedule at no charge.",
    },
    {
      question: "Are tips required?",
      answer:
        "Tips are not required but always appreciated by our talent. Gratuities go directly to the models and are a great way to acknowledge exceptional performance.",
    },
    {
      question: "Do you travel outside Aspen?",
      answer:
        "Absolutely. We staff events throughout Colorado including Aspen, Vail, Beaver Creek, Denver, and surrounding areas. National talent sourcing is available for larger activations. Travel fees may apply for events outside the Roaring Fork Valley.",
    },
    {
      question: "Is there a minimum booking?",
      answer:
        "The minimum booking is 2 hours per model for hourly rates. Package bookings have their own minimums as listed in the pricing section. Custom packages are available for unique requirements \u2014 contact us for a tailored quote.",
    },
  ],
  relatedServices: [
    { label: "Private Entertainment", href: "/private-entertainment" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "VIP Club Access", href: "/aspen-clubs" },
  ],
};

export default data;
