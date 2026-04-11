import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import rollsRoyce from "@/assets/rolls-royce-cullinan.jpg";
import escalade from "@/assets/escalade.jpg";
import sprinter from "@/assets/sprinter.jpg";

const vehicles = [
  {
    name: "Rolls Royce Cullinan",
    description: "The pinnacle of luxury SUVs. Experience unmatched comfort and prestige.",
    image: rollsRoyce,
    alt: "Rolls Royce Cullinan luxury SUV available for chauffeured hire in Aspen Colorado",
    specs: ["3 Passengers", "Champagne Cooler", "Bespoke Interior"],
    link: "/rolls-royce-cullinan",
  },
  {
    name: "2026 Cadillac Escalade",
    description: "Modern luxury meets powerful performance. Perfect for any occasion.",
    image: escalade,
    alt: "2026 Cadillac Escalade luxury SUV for airport transfers and VIP transportation in Aspen",
    specs: ["5 Passengers", "Premium Sound", "Executive Seating"],
    link: "/cadillac-escalade",
  },
  {
    name: "2025 Executive Sprinter",
    description: "Travel with your group in first-class comfort and style.",
    image: sprinter,
    alt: "Executive Mercedes Sprinter van for group transportation in Aspen Colorado",
    specs: ["13 Passengers", "Conference Setup", "Entertainment System"],
    link: "/executive-sprinter",
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 md:py-32 bg-navy-light">
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
            The Fleet
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Aspen's <span className="text-gradient-gold">Exclusive Collection</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Our handpicked fleet of luxury vehicles ensures every journey is an experience in itself.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Link to={vehicle.link} className="block">
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={vehicle.image}
                    alt={vehicle.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {vehicle.name}
                </h3>

                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {vehicle.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;