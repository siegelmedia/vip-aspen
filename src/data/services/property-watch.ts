import { Shield, Moon, Users, ClipboardCheck, Briefcase, Phone } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "property-watch",
  seo: {
    title: "Aspen Residential Security & Property Watch | VIP Aspen",
    description:
      "Licensed residential security and property watch for Aspen's luxury homeowners. Unmarked patrols, armed overnight protection & trusted local contact. Call (970) 452-6636.",
    keywords:
      "Aspen residential security, property watch Aspen, armed overnight protection Aspen, Aspen security company, licensed security Aspen, unmarked patrol Aspen, executive protection residence, luxury home security Aspen",
    canonicalUrl: "/property-watch",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Residential Security & Property Watch",
    headline: "Your Aspen Estate, {{Protected.}}",
    description:
      "Residential security and property watch from the Roaring Fork Valley's trusted licensed security company. Present when you need us. Invisible when you don't.",
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
    heading: "Peace of Mind, {{On Duty.}}",
    body: `<p>Aspen is one of the safest communities in the country. But a $20 million estate — whether sitting empty for months or lived in year-round — deserves more than a hope-for-the-best approach to security. Residents and part-time homeowners alike want to know that someone professional, trained, and local is keeping watch.</p>
<p>Most property-watch services in the valley are extensions of housekeeping or property management companies. They're not security companies. They don't deploy unmarked patrol vehicles, they don't provide armed overnight protection, and they don't have the veteran and law enforcement experience to handle real residential security.</p>
<p>Aspen Security is different. We're a licensed security company providing scheduled patrols, overnight protection, and a trusted on-the-ground presence for the valley's most distinguished homeowners — both when you're here and when you're away.</p>`,
  },
  features: [
    {
      icon: Shield,
      title: "Scheduled Security Patrols",
      description:
        "Regular, documented patrols of your property and the surrounding area in unmarked, law-enforcement-inspired vehicles. Our presence is a proven deterrent — quiet, professional, and consistent. Every patrol is logged with timestamps and photo documentation, delivered to you or your family office.",
    },
    {
      icon: Moon,
      title: "Armed & Unarmed Overnight Protection",
      description:
        "On-site overnight security when you or your family are in residence. Available armed or unarmed based on your preference, staffed by veteran and law enforcement professionals. Ideal for holidays, private events, family visits, or any time you want the reassurance of a professional security presence through the night.",
    },
    {
      icon: Users,
      title: "Residential Security Details",
      description:
        "Full-time or part-time security coverage for residents who want an ongoing protective presence at home. Customized to your schedule, your property, and your lifestyle. Discreet, professional, and already trusted by some of Aspen's most high-profile full-time homeowners.",
    },
    {
      icon: ClipboardCheck,
      title: "Property Watch & Check-Ins",
      description:
        "Scheduled security check-ins for vacant properties — walking the grounds, verifying access points, confirming alarm system status, and identifying anything out of place. Photo-documented reports sent after every visit. Peace of mind for part-time owners and a professional eye on your investment.",
    },
    {
      icon: Briefcase,
      title: "Executive & Event Protection",
      description:
        "Close protection for individuals and families, advance work for travel and events, and security staffing for private gatherings, galas, and corporate retreats. Our team brings real-world law enforcement and military experience — not third-party staffing.",
    },
    {
      icon: Phone,
      title: "Your Trusted Local Contact",
      description:
        "One vetted, security-cleared point of contact for everything your property needs. Contractor access, delivery coordination, alarm company calls, emergency response during storms, vehicle management — you call Andrew, Andrew handles it. No off-hours scramble, no wondering who to trust.",
    },
  ],
  differentiators: [
    {
      title: "A Licensed Security Company, Not a Caretaker Service",
      description:
        "We are a Colorado-licensed security firm with veteran and law enforcement ownership. Our officers are trained, vetted, and equipped to provide actual security — not just checking in on a vacant home. When you hire us, you're hiring professional protection with real credentials and real accountability.",
    },
    {
      title: "Unmarked Patrol Vehicles, Professional Presence",
      description:
        "Our patrol vehicles are law-enforcement-inspired and unmarked — discreet enough to blend in, recognizable enough to deter. A professional security presence in your neighborhood is one of the most effective deterrents available, and it signals to anyone watching that your property is under active protection.",
    },
    {
      title: "Built for Part-Time and Full-Time Homeowners",
      description:
        "Whether your Aspen estate sits vacant for months or you live here year-round, we customize our services to your lifestyle. From weekly patrols on a vacant property to nightly armed protection for residents, we scale to what you need — and we're already doing this for homeowners across the valley.",
    },
  ],
  pricing: [
    {
      category: "Service Plans",
      note: "Every property and every homeowner is different. Whether you're in residence year-round or visit seasonally, we build your security plan around your specific needs. Contact us for a tailored proposal.",
      items: [
        {
          name: "Patrol Watch",
          detail: "Essential Presence",
          price: "Starting at $1,500/mo",
          description:
            "Ideal for part-time owners who want a professional security presence while their property is unoccupied.",
          features: [
            "Scheduled security patrols (2x/week) in unmarked patrol vehicles",
            "Photo-documented property check-ins",
            "Alarm system status verification",
            "On-call emergency response",
            "Monthly security status report",
          ],
        },
        {
          name: "Residential Security",
          detail: "Continuous Protection",
          price: "Starting at $3,500/mo",
          featured: true,
          description:
            "For residents or part-time owners who want an enhanced security presence when they're away and peace of mind when they're home.",
          features: [
            "Everything in Patrol Watch",
            "Increased patrol frequency (up to daily)",
            "Priority on-call response",
            "Vehicle management while you're away",
            "Trusted local contact for contractor and delivery coordination",
            "Custom security plan tailored to your schedule",
            "Direct line to Andrew",
          ],
        },
        {
          name: "Executive Security",
          detail: "Complete Coverage",
          price: "Starting at $7,500/mo",
          description:
            "For high-profile homeowners, families in residence, and those who require armed or overnight on-site protection.",
          features: [
            "Everything in Residential Security",
            "Armed or unarmed overnight on-site protection",
            "Executive and close protection details available",
            "Full security assessment with written report",
            "Event and private gathering security staffing",
            "Advance work for arrivals and departures",
            "24/7 dedicated response coordination",
          ],
        },
      ],
    },
  ],
  relatedServices: [
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Security Assessment", href: "/security-assessment" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
