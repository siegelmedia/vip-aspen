import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Shield, Sparkles, Music, Megaphone, Home, ArrowRight } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";

const transportationServices = [
  {
    icon: Car,
    title: "Black Car Service",
    description: "Chauffeured Rolls Royce, Escalade & Sprinter for any occasion.",
    link: "/black-car-service",
  },
  {
    icon: Shield,
    title: "Executive Protection",
    description: "Discreet, professional security for high-profile individuals.",
    link: "/executive-protection",
  },
  {
    icon: Home,
    title: "Property Security Watch",
    description: "Security-first estate protection for vacant luxury properties.",
    link: "/property-watch",
  },
];

const conciergeServices = [
  {
    icon: Sparkles,
    title: "VIP Club Access",
    description: "Priority entry and bottle service at Aspen's top venues.",
    link: "/aspen-clubs",
  },
  {
    icon: Music,
    title: "Private Entertainment",
    description: "Elite private performers delivered with security and discretion.",
    link: "/private-entertainment",
  },
  {
    icon: Megaphone,
    title: "Promotional Staffing",
    description: "Brand ambassadors, event hostesses, and atmosphere models.",
    link: "/promotional-services",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof transportationServices)[number];
  index: number;
}) => {
  const Icon = service.icon;
  return (
    <motion.div {...staggerChild(index)}>
      <Link
        to={service.link}
        className="glass-card p-6 flex flex-col h-full group hover:border-primary/30 transition-colors block"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader
          heading="Elevate Your {{Aspen Experience}}"
          subtitle="Transportation, security, entertainment, and concierge — all under one roof."
        />

        {/* Transportation & Security */}
        <p className="text-xs uppercase tracking-wider text-primary mb-4 font-medium text-center">
          Transportation & Security
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {transportationServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Entertainment & Events */}
        <p className="text-xs uppercase tracking-wider text-primary mb-4 font-medium text-center">
          Entertainment & Events
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conciergeServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
