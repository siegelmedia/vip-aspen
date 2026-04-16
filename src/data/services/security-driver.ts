import { Shield, UserCheck, Eye, Lock, Radio, Briefcase } from "lucide-react";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "security-driver",
  seo: {
    title: "Security Drivers Aspen | Trained Protective Drivers",
    description:
      "Security-trained drivers for CEOs, high-profile clients, and visiting protective details. Law enforcement and military backgrounds. Call (970) 452-6636.",
    keywords:
      "security driver Aspen, protective driver Aspen, executive security driver, CEO driver Aspen, evasive driving Aspen, security chauffeur Aspen, trained security driver Colorado",
    canonicalUrl: "/security-driver",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Security Drivers",
    headline: "Trained Drivers for {{Those Who Demand More}}",
    description:
      "When a standard chauffeur isn't enough. Security-trained drivers with law enforcement and military backgrounds — for CEOs, high-profile clients, and visiting protective details that require a vetted driver who understands protective operations.",
    ctaLabel: "Request a Security Driver",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  trustBadges: [
    { label: "Colorado Licensed", icon: Shield },
    { label: "Veteran & LEO Backgrounds" },
    { label: "NDA on Every Engagement" },
    { label: "Integrates with Your Detail" },
  ],
  intro: {
    heading: "Beyond the {{Chauffeur}}",
    body: `<p>Most luxury car services hire drivers for appearance and etiquette. VIP Aspen's security drivers are trained for something different. These are vetted professionals with law enforcement or military backgrounds — selected and trained to operate as part of a protective detail, not just behind the wheel.</p>
<p>Our security drivers are the right choice when your visit requires more than a polished chauffeur. CEOs traveling with corporate security, celebrities with existing protective details, family offices requiring vetted transportation, or high-profile guests who want a driver cleared to coordinate with their security team. We integrate directly with your detail leader, follow your protocols, and operate at the level your team expects.</p>
<p>For clients who need a standalone protective presence, we also offer <a href="/executive-protection">executive protection services</a> and <a href="/property-watch">residential security</a>. Our security drivers work seamlessly alongside either — or on their own as a single layer of protection for clients who want a trained, cleared driver without a full detail.</p>`,
  },
  features: [
    {
      icon: UserCheck,
      title: "Vetted & Background-Checked",
      description:
        "Every security driver goes through full background checks, drug screening, and credential verification. Most come from active or former law enforcement and military service with protective operations experience.",
    },
    {
      icon: Shield,
      title: "Protective-Driving Trained",
      description:
        "Trained in defensive and evasive driving, route planning, surveillance detection, and threat response. Skills you hope are never needed, and the reason clients hire us when they are.",
    },
    {
      icon: Radio,
      title: "Integrates With Your Detail",
      description:
        "Comfortable working under the direction of your existing security team. Your detail leader briefs our driver, our driver follows your protocols. One seamless operation — not competing chains of command.",
    },
    {
      icon: Eye,
      title: "Advance Work & Route Planning",
      description:
        "Pre-event venue reconnaissance, route surveys, alternate routes, and coordination with venue security. Your driver arrives briefed on the plan, not discovering it when you step in the car.",
    },
    {
      icon: Lock,
      title: "Absolute Discretion",
      description:
        "NDA on every engagement. Our drivers do not discuss clients, destinations, or itineraries — ever. We already serve clients who require this level of confidentiality and they continue to use us because of it.",
    },
    {
      icon: Briefcase,
      title: "Standalone or Supplemental",
      description:
        "Hire a security driver as your only protective layer, or as part of a larger detail. We scale to what your situation requires — from a single trained driver for a corporate visit to a full transportation team for a multi-day event.",
    },
  ],
  differentiators: [
    {
      title: "A Security Company, Not a Car Service Subcontractor",
      description:
        "VIP Aspen is operated by Aspen Security LLC — a Colorado-licensed security firm with veteran and law enforcement ownership. Our security drivers are our own trained personnel, not gig-economy drivers with a clean suit. When you hire a security driver from us, you're hiring a security professional who happens to be driving.",
    },
    {
      title: "Trained for the Job You Hope They Never Have to Do",
      description:
        "Our drivers complete defensive-driving, evasive-driving, and protective-operations training. They know how to recognize a threat before it develops, how to break contact if it does, and how to get you out of a situation that a standard chauffeur would escalate. Every one of them hopes these skills stay unused. All of them are ready.",
    },
    {
      title: "The Difference Your Detail Leader Will Notice",
      description:
        "If you travel with corporate security, you already know the difference between a car service and an integrated protective transportation asset. Your detail leader will recognize the difference within the first five minutes of briefing our driver. That's the level we operate at.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Confidential Inquiry",
      description:
        "Contact us directly. Share as much or as little as you're comfortable with up front — we'll work through logistics under NDA if required.",
    },
    {
      step: 2,
      title: "Driver Match",
      description:
        "We match you with a driver whose background and experience fit your situation. CEO transport, celebrity detail, family office, visiting protective team — the right fit matters.",
    },
    {
      step: 3,
      title: "Coordination & Briefing",
      description:
        "Our driver coordinates directly with your security team or point of contact. Routes, schedules, protocols, and contingencies are briefed before you arrive.",
    },
    {
      step: 4,
      title: "Seamless Execution",
      description:
        "Your visit runs the way it should — quietly, professionally, and without the friction of a driver who doesn't understand protective operations.",
    },
  ],
  relatedServices: [
    { label: "Executive Protection", href: "/executive-protection" },
    { label: "Property Security Watch", href: "/property-watch" },
    { label: "Black Car Service", href: "/black-car-service" },
    { label: "Security Assessment", href: "/security-assessment" },
  ],
};

export default data;
