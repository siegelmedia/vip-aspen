import { Shield, Eye, UserCheck, Lock } from "lucide-react";
import protectionService from "@/assets/service-executive-protection.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "executive-protection",
  seo: {
    title: "Executive Protection & Personal Security in Aspen, Colorado",
    description:
      "Executive protection in Aspen, CO. Discreet bodyguard & personal security for celebrities and executives. Former military & LEO. Call (970) 452-6636.",
    keywords:
      "executive protection Aspen, bodyguard Aspen Colorado, personal security Aspen, VIP protection Aspen, celebrity security Aspen, close protection Colorado, private security Aspen, event security Aspen, executive security services, high-profile protection Aspen, personal bodyguard Aspen, security detail Colorado",
    canonicalUrl: "/executive-protection",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Personal Security",
    headline: "Executive {{Protection}}",
    description:
      "Discreet, professional security services for high-profile individuals and families visiting Aspen. Our trained specialists ensure your safety while maintaining the utmost confidentiality.",
    bgImage: protectionService,
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
  howItWorks: [
    { step: 1, title: "Initial Consultation", description: "We assess your security needs, travel plans, and any specific risk factors for your Aspen stay." },
    { step: 2, title: "Threat Assessment", description: "Our team evaluates routes, venues, accommodations, and logistics to develop a comprehensive security plan." },
    { step: 3, title: "Detail Assignment", description: "A vetted protection specialist with relevant experience is matched to your specific requirements." },
    { step: 4, title: "Seamless Protection", description: "Discreet, professional security that integrates with your schedule — letting you focus on your experience." },
  ],
  intro: {
    heading: "Why Executive Protection in {{Aspen}}",
    body: `<p>Aspen attracts the world\u2019s most high-profile individuals \u2014 celebrities, billionaires, heads of state, and Fortune 500 executives. The town\u2019s intimate size, outdoor-oriented lifestyle, and concentrated wealth create unique security challenges that differ significantly from urban environments. Public visibility is heightened in a community of just 7,000 full-time residents, making discretion and local expertise essential components of any effective protection strategy.</p>
<p>VIP Aspen\u2019s executive protection team combines close personal protection with <a href="/black-car-service">luxury secure transportation</a> \u2014 your security detail doubles as your chauffeur, providing a seamless and discreet experience that eliminates the need for separate drivers and security personnel. This integrated approach means fewer people in your orbit, reduced visibility, and a more natural travel experience throughout the Roaring Fork Valley.</p>
<p>We handle advance work, venue security assessments, route planning, and real-time threat monitoring for every engagement. Whether you\u2019re attending the Aspen Ideas Festival, a private gathering at an exclusive venue, or spending a quiet week in a Starwood or Red Mountain estate, our team ensures your safety without disrupting your experience. Our <a href="/rolls-royce-cullinan">Rolls-Royce Cullinan</a> offers discreet, low-key luxury for principals who prefer not to draw attention, while our <a href="/cadillac-escalade">Escalade fleet</a> offers the flexibility to run lead, principal, and follow vehicles for multi-vehicle details.</p>
<p>For clients who require ongoing protection during extended stays or frequent visits, our <a href="/membership">VIP Aspen membership program</a> provides priority security booking, a dedicated concierge, and guaranteed availability \u2014 even during Aspen\u2019s peak seasons when demand for executive protection services is highest.</p>`,
  },
  differentiators: [
    {
      title: "Former Military & Law Enforcement",
      description:
        "Every protection specialist comes from a military or law enforcement background and is selected for judgment and composure, not size. VIP Aspen is operated by Aspen Security LLC, a Colorado-licensed security firm with veteran and LEO ownership.",
    },
    {
      title: "Discreet by Design",
      description:
        "Our agents dress for the room, not the movie. In a town of 7,000 residents where everyone notices everything, a low-profile posture is the most effective protection there is.",
    },
    {
      title: "Protection & Transportation in One Team",
      description:
        "Your agent can double as your security driver, so there is one fewer stranger in your orbit. Vehicles, routes, and personnel are all coordinated by the same people.",
    },
    {
      title: "Advance Work Before You Land",
      description:
        "Venue walk-throughs, route surveys, and residence checks happen before your arrival, so nothing about your Aspen itinerary is improvised.",
    },
    {
      title: "Local Coordination",
      description:
        "We maintain working relationships with local law enforcement, hotel security teams, and venue managers across the Roaring Fork Valley and coordinate with them when a detail calls for it.",
    },
    {
      title: "Medical & Emergency Response Trained",
      description:
        "Agents hold current first-aid and emergency response certifications and plan for mountain-specific contingencies, from altitude issues to winter road closures.",
    },
    {
      title: "Vetted, Background-Checked, Under NDA",
      description:
        "Every team member is background-checked and works under a signed confidentiality agreement. We do not discuss clients, itineraries, or engagements, ever.",
    },
    {
      title: "Available Around the Clock",
      description:
        "Details can run from a single evening to a full season. Dispatch is staffed 24/7, including holidays and Aspen's peak weeks.",
    },
  ],
  faqs: [
    {
      question: "What does executive protection in Aspen typically include?",
      answer:
        "A typical engagement pairs a close-protection agent with secure transportation. We handle advance work on venues and residences, route planning, coordination with hotel and venue security, and a discreet protective presence throughout your itinerary. Details scale from one agent-driver to a multi-agent, multi-vehicle team.",
    },
    {
      question: "Are your protection agents armed?",
      answer:
        "Armed and unarmed options are available depending on the threat assessment, the venues involved, and applicable Colorado law. We discuss this during the confidential consultation and recommend the posture that fits your situation rather than defaulting to a visible presence.",
    },
    {
      question: "How far in advance should I book a protection detail?",
      answer:
        "For a single agent-driver, a few days' notice is usually enough outside of peak weeks. For multi-agent details, event security, or engagements during the holidays, X Games, or the Food & Wine Classic, two to three weeks lets us complete proper advance work. We do accommodate short-notice requests whenever staffing allows.",
    },
    {
      question: "Can you work alongside my existing security team?",
      answer:
        "Yes. Many of our clients travel with a corporate or personal detail. We integrate under your detail leader's direction, provide local knowledge and vetted vehicles, and follow your protocols. We can also serve as the full detail when your team does not travel with you.",
    },
    {
      question: "How is pricing structured for executive protection?",
      answer:
        "Protection is quoted per engagement based on the number of agents, hours, vehicles, and any advance work required. Every quote is flat and all-inclusive, with no surge pricing. Contact us for a confidential consultation and a written proposal.",
    },
    {
      question: "Do you provide event and residential security as well?",
      answer:
        "Yes. We staff private events, galas, and corporate gatherings, and provide residential security and property checks for homes in Aspen, Snowmass, Starwood, and Red Mountain. See our security assessment page to start a conversation about your property or event.",
    },
  ],
  relatedServices: [
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
    { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
  ],
};

export default data;
