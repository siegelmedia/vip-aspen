import { Shield, Thermometer, Car, Plane, Phone, CloudLightning, Users, ClipboardCheck } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "property-watch",
  seo: {
    title: "Property Security Watch — Aspen Estate Protection",
    description: "Security-first property watch for Aspen's most valuable homes. Veteran & LEO owned. Patrols, systems monitoring & emergency response. Call (970) 452-6636.",
    keywords: "property watch Aspen, estate security Aspen, property management Aspen, home watch Aspen Colorado, luxury property security, Aspen estate management, vacant home security Aspen",
    canonicalUrl: "/property-watch",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Property Security Watch",
    headline: "Your Aspen Estate, {{Protected.}}",
    description: "Security-first property watch for the Roaring Fork Valley's most valuable homes. Veteran and law enforcement owned. Trusted by those who demand discretion.",
    ctaLabel: "Request a Security Assessment",
    ctaLink: "/security-assessment",
  },
  trustBadges: [
    { label: "Colorado Licensed", icon: Shield },
    { label: "Veteran & LEO Owned" },
    { label: "Bonded & Insured" },
    { label: "24/7 Response" },
  ],
  intro: {
    heading: "A $30 Million Home Deserves More Than a {{Housekeeper Checking In.}}",
    body: `<p>Most property watch services in Aspen are extensions of housekeeping or property management companies. They'll water your plants and check your thermostat. But when it comes to the actual security of your home — the thing that keeps you up at night when you're 2,000 miles away — they're not equipped.</p>
<p>VIP Aspen is different. We're backed by Aspen Security LLC, a Colorado-licensed security company with veteran and law enforcement leadership. Property security isn't a side offering for us. It's our foundation.</p>
<p>We provide regular security patrols, documented property inspections, vehicle management, systems verification, and a single trusted point of contact for your Aspen property — so you know your home is protected, not just maintained.</p>`,
  },
  features: [
    {
      icon: Shield,
      title: "Security Patrols & Property Inspections",
      description: "Regular, documented security patrols of your property and perimeter. We check access points, verify alarm and security system status, inspect for signs of intrusion, weather damage, or wildlife activity, and provide photo-documented reports after every visit.",
    },
    {
      icon: Thermometer,
      title: "Property Systems Monitoring",
      description: "Verification of HVAC, plumbing, fire suppression, water heaters, sump pumps, and electrical systems. We catch the $500 problem before it becomes the $200,000 problem — especially critical during Aspen's freeze-thaw cycles.",
    },
    {
      icon: Car,
      title: "Vehicle Management",
      description: "Your vehicles don't sit idle. We start engines on schedule, maintain battery health, monitor tire pressure, coordinate detailing, and ensure your vehicle is ready when you arrive. For clients with multiple vehicles, we manage the full fleet.",
    },
    {
      icon: Plane,
      title: "Pre-Arrival & Post-Departure Protocols",
      description: "Before you land at ASE, your home is inspected, walkways cleared, climate set, systems verified, and security confirmed. When you leave, we secure the property, set it to away-mode configurations, and begin watch protocols. Seamless transitions every time.",
    },
    {
      icon: Phone,
      title: "Trusted Local Point of Contact",
      description: "Contractors need access? A delivery is arriving? The alarm company is calling? We're your boots on the ground — a single, vetted, security-cleared contact who handles whatever your property needs so you don't have to manage it from afar.",
    },
    {
      icon: CloudLightning,
      title: "Storm & Emergency Response",
      description: "When severe weather hits the valley, we don't wait for your call. We proactively check on your property during and after major weather events — heavy snow loads, spring flooding, wildfire smoke, power outages — and report back with conditions and any action taken.",
    },
    {
      icon: Users,
      title: "Coordination & Vendor Oversight",
      description: "We don't do the landscaping or the snow removal, but we make sure the people who do are showing up, doing the work, and not cutting corners. We serve as your on-site representative for any vendor or contractor interaction.",
    },
    {
      icon: ClipboardCheck,
      title: "Security Assessments & Recommendations",
      description: "A comprehensive evaluation of your property's security posture: lighting, sightlines, access control, alarm system effectiveness, landscaping vulnerabilities, and emergency response planning. Delivered as a professional written report with prioritized recommendations.",
    },
  ],
  differentiators: [
    {
      title: "Security Company, Not a Property Manager",
      description: "We're not a housekeeping service that added 'security checks' to the brochure. Aspen Security LLC is a Colorado-licensed security company with veteran and law enforcement ownership. When we say your property is secure, it's backed by professional training, licensing, and accountability that no property management company can offer.",
    },
    {
      title: "Already Embedded in Aspen's VIP Ecosystem",
      description: "Through our transportation and security operations, we already serve the valley's most discerning clients. We understand the expectations, the discretion, and the standard of service that high-net-worth individuals and their families require. This isn't new to us — we're extending a trust relationship that already exists.",
    },
    {
      title: "Technology-Backed Reporting",
      description: "Every patrol, every inspection, every system check is documented with photos, timestamps, and detailed notes. You'll receive regular property status reports — not a vague 'everything looks fine' text. Full transparency, full accountability, accessible from anywhere.",
    },
  ],
  pricing: [
    {
      category: "Service Plans",
      note: "Every property is unique. We customize our services to match your property's specific needs and your preferences. Contact us for a tailored proposal.",
      items: [
        {
          name: "Security Watch",
          detail: "Essential Protection",
          price: "Starting at $1,500/mo",
          features: [
            "Scheduled security patrols (2x/month)",
            "Photo-documented inspection reports",
            "Alarm and security system verification",
            "Storm and emergency response",
            "Monthly property status summary",
          ],
        },
        {
          name: "Security Watch + Property Care",
          detail: "Comprehensive Coverage",
          price: "Starting at $3,000/mo",
          featured: true,
          features: [
            "Everything in Security Watch",
            "Weekly patrol frequency",
            "Property systems monitoring (HVAC, plumbing, electrical)",
            "Vehicle management (up to 2 vehicles)",
            "Vendor coordination and oversight",
            "Pre-arrival and post-departure protocols",
          ],
        },
        {
          name: "Full Estate Security",
          detail: "Complete Protection",
          price: "Starting at $5,000/mo",
          features: [
            "Everything in Security Watch + Property Care",
            "Enhanced patrol frequency and perimeter checks",
            "Comprehensive security assessment with written report",
            "Vehicle fleet management (3+ vehicles)",
            "Dedicated point of contact (direct line)",
            "Priority emergency response",
            "Coordination with protective detail services",
          ],
        },
      ],
    },
  ],
  relatedServices: [
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Security Assessment", href: "/security-assessment" },
  ],
};

export default data;
