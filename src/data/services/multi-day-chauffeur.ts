import { Calendar, Star, ShieldCheck, Clock, Users } from "lucide-react";
import heroBg from "@/assets/hero-multi-day-chauffeur.webp";
import type { ServicePageData } from "@/types";

const data: ServicePageData = {
  slug: "multi-day-chauffeur",
  seo: {
    title: "Multi-Day & Weekly Chauffeur Aspen | Personal Driver",
    description:
      "Your own dedicated chauffeur and vehicle for your entire Aspen stay. Same driver every day, on call from morning to night. Weekly rates, total discretion. Call (970) 452-6636.",
    keywords:
      "multi-day chauffeur Aspen, weekly car service Aspen, personal driver Aspen, dedicated chauffeur Aspen, on-call driver Aspen, private driver for the week Aspen, concierge chauffeur Aspen, full-time driver Aspen vacation",
    canonicalUrl: "/multi-day-chauffeur",
    ogImage: "https://www.vipaspen.com/og-image.jpg",
  },
  hero: {
    tagline: "Multi-Day & Weekly",
    bgImage: heroBg,
    headline: "Your Own {{Chauffeur}}, For the Whole Stay",
    description:
      "One dedicated vehicle, one trusted driver, on call from your first morning to your last night. The seamless way to experience Aspen — no rebooking, no new faces, no logistics.",
    ctaLabel: "Arrange Your Driver",
    ctaLink: "#booking",
    secondaryCta: { label: "(970) 452-6636", link: "tel:+19704526636" },
  },
  intro: {
    heading: "A Driver Who Knows Your {{Itinerary}}",
    body: `<p>The single biggest upgrade to an Aspen trip isn't a bigger house or a better table — it's never thinking about transportation again. Our multi-day chauffeur service assigns you a dedicated vehicle and the same professional driver for the length of your stay. They learn your rhythm: the early ski drop-off, the mid-morning coffee run, the kids' schedule, the dinner reservation across the valley, the late pickup from a club in town. By day two there are no introductions, no explaining where you're staying, no re-installing car seats. Your driver is simply there, ahead of you, every time.</p>
<p>This is the service our most demanding clients rely on — families taking over a residence for the holidays, executives running their business from the mountains, and visitors who simply expect a certain standard. Because the vehicle is reserved exclusively for you, it's available on your schedule alone: spontaneous plans, last-minute changes, and "can we leave in ten minutes" are never a problem. Your driver doubles as a concierge who knows the valley intimately — which restaurant can still fit you in, the quiet trailhead, the back way around event traffic, the right entrance at every hotel and venue. For clients who want it, our <a href="/security-driver">security-trained drivers</a> bring an added layer of discretion and protection to the same dedicated arrangement.</p>
<p>Choose the <a href="/cadillac-escalade">Cadillac Escalade</a> for families and everyday flexibility, the <a href="/executive-sprinter">Executive Sprinter</a> for larger parties traveling together, or the <a href="/rolls-royce-cullinan">Rolls Royce Cullinan</a> when the occasion calls for it. Multi-day and weekly arrangements include priority scheduling during peak periods — the holidays, Food & Wine, X Games — and preferred rates versus booking day by day. Regular visitors often pair this with our <a href="/membership">VIP membership</a> for guaranteed availability and the best rates of the year.</p>`,
  },
  features: [
    {
      icon: Calendar,
      title: "Same Driver, Every Day",
      description:
        "One vetted chauffeur for your entire stay. They learn your schedule and preferences — no re-explaining, no hand-offs, no strangers.",
    },
    {
      icon: Clock,
      title: "On Call, Dawn to Late Night",
      description:
        "Your vehicle is reserved for you alone and available on your timing — early ski mornings through late dinners and nightlife.",
    },
    {
      icon: Star,
      title: "Concierge-Level Local Knowledge",
      description:
        "Your driver is an Aspen local: restaurant tables, hidden trailheads, the right venue entrance, and the route around event traffic.",
    },
    {
      icon: ShieldCheck,
      title: "Discretion & Security Option",
      description:
        "Total privacy as standard, with the option to upgrade to a security-trained protective driver for the same dedicated arrangement.",
    },
    {
      icon: Users,
      title: "Built Around Families",
      description:
        "Car seats stay installed, gear stays loaded, and the whole family travels together on its own schedule — not a shuttle's.",
    },
    {
      icon: Calendar,
      title: "Priority in Peak Season",
      description:
        "Guaranteed availability during the holidays, Food & Wine, and X Games, plus preferred weekly rates over day-by-day booking.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Share Your Dates & Style", description: "Tell us your arrival, departure, group, and the kind of trip you have planned. We match you with the right vehicle and driver." },
    { step: 2, title: "Meet Your Driver", description: "Your dedicated chauffeur greets you on arrival and stays with you for the whole stay — one point of contact, start to finish." },
    { step: 3, title: "Live On Your Schedule", description: "Ski, dine, shop, meet — your vehicle is ready whenever you are, with plans that change as freely as you like." },
    { step: 4, title: "Effortless Departure", description: "Your driver handles the airport or FBO run on the way out, with every bag managed, exactly on time." },
  ],
  faqs: [
    {
      question: "Do I get the same driver every day?",
      answer:
        "Yes. The point of the service is continuity — one vetted chauffeur dedicated to you for your entire stay, so they learn your schedule and preferences and you never have to re-explain anything.",
    },
    {
      question: "Is the vehicle reserved exclusively for me?",
      answer:
        "Yes. The vehicle is assigned to you for the duration of the booking and is not shared, so it's available on your schedule alone — including spontaneous and last-minute plans.",
    },
    {
      question: "What are the hours of availability?",
      answer:
        "Your driver is on call across a full day, from early ski mornings to late dinners and nightlife. We agree on a daily window when you book and build in flexibility for the inevitable changes.",
    },
    {
      question: "How is pricing structured for multi-day bookings?",
      answer:
        "Multi-day and weekly arrangements are quoted at preferred rates versus booking day by day, based on your dates, vehicle, and daily hours. VIP members receive the best available rates. Contact us for a tailored quote.",
    },
    {
      question: "Can my multi-day driver also handle airport and FBO transfers?",
      answer:
        "Absolutely. Your dedicated driver typically handles your arrival and departure — including private jet and FBO transfers — so the same trusted person covers your trip end to end.",
    },
    {
      question: "Can I request a security-trained driver?",
      answer:
        "Yes. We can assign a security-trained protective driver to the same dedicated, multi-day arrangement for clients who want an added layer of discretion and protection. See our security driver and executive protection services.",
    },
  ],
  relatedServices: [
    { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
    { label: "Private Ski Transfers", href: "/private-ski-transfers" },
    { label: "Security Drivers", href: "/security-driver" },
    { label: "Membership", href: "/membership" },
    { label: "Black Car Service", href: "/black-car-service" },
  ],
};

export default data;
