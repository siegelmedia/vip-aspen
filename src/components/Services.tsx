import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import blackCarImg from "@/assets/service-black-car-arrival.webp";
import airportImg from "@/assets/escalade-tarmac.webp";
import protectionImg from "@/assets/service-executive-protection.webp";
import clubsImg from "@/assets/service-aspen-clubs.webp";
import entertainmentImg from "@/assets/private-entertainment.webp";
import promoImg from "@/assets/service-promotional-events.webp";

const services = [
  {
    title: "Black Car Service",
    description:
      "Chauffeured Rolls-Royce, Escalade & Sprinter for dinners, meetings, and nights out — point to point or hourly.",
    image: blackCarImg,
    alt: "Chauffeur opening the door of a black luxury SUV in Aspen",
    link: "/black-car-service",
    tag: "Transportation",
  },
  {
    title: "Airport Transfers",
    description:
      "Flight-tracked pickups at Aspen (ASE), Eagle (EGE), Rifle, and Denver — including private jet and FBO tarmac service.",
    image: airportImg,
    alt: "Black Cadillac Escalade waiting on the Aspen airport tarmac",
    link: "/aspen-airport-transfer",
    tag: "Transportation",
  },
  {
    title: "Executive Protection",
    description:
      "Discreet, Colorado-licensed protection for high-profile individuals — from security drivers to full details.",
    image: protectionImg,
    alt: "Executive protection agent beside a black SUV",
    link: "/executive-protection",
    tag: "Security",
  },
  {
    title: "VIP Club Access",
    description:
      "Priority entry, tables, and bottle service at Aspen's most exclusive venues — arranged before you land.",
    image: clubsImg,
    alt: "Upscale Aspen nightlife venue interior",
    link: "/aspen-clubs",
    tag: "Concierge",
  },
  {
    title: "Private Entertainment",
    description:
      "Elite private performers and event talent delivered with security and total discretion.",
    image: entertainmentImg,
    alt: "Private entertainment setting in a luxury Aspen residence",
    link: "/private-entertainment",
    tag: "Concierge",
  },
  {
    title: "Promotional Staffing",
    description:
      "Brand ambassadors, event hostesses, and atmosphere models for launches and corporate events.",
    image: promoImg,
    alt: "Event staff at an upscale Aspen promotional event",
    link: "/promotional-services",
    tag: "Concierge",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => (
  <motion.div {...staggerChild(index)}>
    <Link
      to={service.link}
      className="group glass-card flex flex-col h-full overflow-hidden hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-luxury transition-all duration-300 block"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Bottom gradient only — keeps the top of the image clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow -mt-10 relative">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
          {service.tag}
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="What We Do"
          heading="Elevate Your {{Aspen Experience}}"
          subtitle="Transportation, security, entertainment, and concierge — all under one roof."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
