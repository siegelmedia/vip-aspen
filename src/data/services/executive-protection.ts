import { Shield, Eye, UserCheck, Lock } from "lucide-react";
import protectionService from "@/assets/protection-service.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "executive-protection",
  seo: {
    title: "Executive Protection & Personal Security in Aspen, Colorado",
    description:
      "Professional executive protection services in Aspen, CO. Discrete bodyguard and personal security for high-profile individuals, celebrities, and executives. Former military & law enforcement. Risk assessment, event security, and 24/7 protection.",
    keywords:
      "executive protection Aspen, bodyguard Aspen Colorado, personal security Aspen, VIP protection Aspen, celebrity security Aspen, close protection Colorado, private security Aspen, event security Aspen, executive security services, high-profile protection Aspen, personal bodyguard Aspen, security detail Colorado",
    canonicalUrl: "/executive-protection",
  },
  hero: {
    tagline: "Personal Security",
    headline: "Executive {{Protection}}",
    description:
      "Discrete, professional security services for high-profile individuals and families visiting Aspen. Our trained specialists ensure your safety while maintaining the utmost confidentiality.",
    image: protectionService,
    ctaLabel: "Request Consultation",
    ctaLink: "#contact",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  features: [
    {
      icon: UserCheck,
      title: "Executive Protection",
      description:
        "Close protection officers for high-net-worth individuals, executives, and public figures during their Aspen visit.",
    },
    {
      icon: Eye,
      title: "Event Security",
      description:
        "Comprehensive security planning and execution for private parties, corporate events, and special occasions.",
    },
    {
      icon: Lock,
      title: "Travel Security",
      description:
        "Secure transportation coordination, advance work, and protective intelligence for travel in and around Aspen.",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Thorough security evaluations of properties, venues, and travel routes to identify and mitigate potential threats.",
    },
  ],
  intro: {
    heading: "Why Executive Protection in {{Aspen}}",
    body: `<p>Aspen attracts the world\u2019s most high-profile individuals \u2014 celebrities, billionaires, heads of state, and Fortune 500 executives. The town\u2019s intimate size, outdoor-oriented lifestyle, and concentrated wealth create unique security challenges that differ significantly from urban environments. Public visibility is heightened in a community of just 7,000 full-time residents, making discretion and local expertise essential components of any effective protection strategy.</p>
<p>VIP Aspen\u2019s executive protection team combines close personal protection with <a href="/black-car-service">luxury secure transportation</a> \u2014 your security detail doubles as your chauffeur, providing a seamless and discreet experience that eliminates the need for separate drivers and security personnel. This integrated approach means fewer people in your orbit, reduced visibility, and a more natural travel experience throughout the Roaring Fork Valley.</p>
<p>We handle advance work, venue security assessments, route planning, and real-time threat monitoring for every engagement. Whether you\u2019re attending the Aspen Ideas Festival, a private gathering at an exclusive venue, or spending a quiet week in a Starwood or Red Mountain estate, our team ensures your safety without disrupting your experience. Our <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> provides discreet luxury with armored-level presence, while our <a href="/cadillac-escalade">Escalade fleet</a> offers tactical flexibility for multi-vehicle security details.</p>
<p>For clients who require ongoing protection during extended stays or frequent visits, our <a href="/membership">VIP Aspen membership program</a> provides priority security booking, a dedicated concierge, and guaranteed availability \u2014 even during Aspen\u2019s peak seasons when demand for executive protection services is highest.</p>`,
  },
  differentiators: [
    {
      title: "Former military and law enforcement professionals",
      description: "Former military and law enforcement professionals",
    },
    {
      title: "Discrete, low-profile protection approach",
      description: "Discrete, low-profile protection approach",
    },
    {
      title: "24/7 availability throughout your stay",
      description: "24/7 availability throughout your stay",
    },
    {
      title: "Coordination with local authorities",
      description: "Coordination with local authorities",
    },
    {
      title: "Secure transportation integration",
      description: "Secure transportation integration",
    },
    {
      title: "Background-checked and vetted team",
      description: "Background-checked and vetted team",
    },
    {
      title: "Medical and emergency response trained",
      description: "Medical and emergency response trained",
    },
    {
      title: "Confidentiality guaranteed",
      description: "Confidentiality guaranteed",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
  ],
};

export default data;
