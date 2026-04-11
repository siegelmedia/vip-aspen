import { motion } from "framer-motion";
import { Car, Shield, Sparkles, Music, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import blackCarService from "@/assets/black-car-service.jpg";
import vipClub from "@/assets/vip-club.jpg";
import protectionService from "@/assets/protection-service.jpg";
import privateEntertainment from "@/assets/private-entertainment.jpg";
import promotionalServices from "@/assets/promotional-services.jpg";

const services = [
  {
    icon: Car,
    title: "Black Car Service",
    description:
      "Experience unparalleled luxury with our Aspen Exclusive fleet. From airport transfers to special events, travel in style with our Rolls Royce Cullinan, Executive Sprinter, and new Escalades.",
    image: blackCarService,
    alt: "VIP Aspen black car service with luxury Escalade on Aspen Colorado street",
    features: ["Airport Transfers", "Hourly Charters", "Special Events", "Ski Resort Transport"],
    link: "/black-car-service",
  },
  {
    icon: Sparkles,
    title: "VIP Club Access",
    description:
      "Gain exclusive entry to Aspen's most prestigious venues. Enjoy priority reservations, VIP seating, and discounted bottle service at the hottest clubs and restaurants.",
    image: vipClub,
    alt: "Exclusive VIP nightlife access at Aspen Colorado clubs and lounges",
    features: ["Priority Entry", "Reserved Tables", "Bottle Service", "Private Events"],
    link: "/aspen-clubs",
  },
  {
    icon: Shield,
    title: "Personal Protection",
    description:
      "Discrete, professional security services for high-profile individuals and families. Our trained specialists ensure your safety while maintaining the utmost discretion.",
    image: protectionService,
    alt: "Professional executive protection and bodyguard service in Aspen Colorado",
    features: ["Executive Protection", "Event Security", "Travel Security", "Risk Assessment"],
    link: "/executive-protection",
  },
  {
    icon: Music,
    title: "Private Entertainment",
    description:
      "Aspen's only dedicated private entertainment service. Elite exotic performers delivered to your private residence or venue with professional security and total discretion.",
    image: privateEntertainment,
    alt: "Private entertainment and exotic performance services in Aspen Colorado",
    features: ["Private Performances", "Security Included", "NDA Available", "Custom Packages"],
    link: "/private-entertainment",
  },
  {
    icon: Megaphone,
    title: "Promotional & Event Staffing",
    description:
      "Elite promotional talent for Aspen's most exclusive events. Brand ambassadors, event hostesses, atmosphere models, and cocktail service professionals — sourced nationally, delivered locally.",
    image: promotionalServices,
    alt: "Brand ambassadors and promotional models for events in Aspen Colorado",
    features: ["Brand Ambassadors", "Event Hostesses", "Atmosphere Models", "Cocktail Service"],
    link: "/promotional-services",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Elevate Your <span className="text-gradient-gold">Aspen Experience</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <Link
                to={service.link}
                className={`relative overflow-hidden rounded-sm group block ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </Link>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Link to={service.link}>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                </div>

                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-foreground/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;