import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const airports = [
  {
    code: "ASE",
    name: "Aspen Airport",
    detail: "5 minutes to downtown",
    link: "/aspen-airport-transfer",
  },
  {
    code: "EGE",
    name: "Eagle Airport",
    detail: "90 min scenic drive",
    link: "/eagle-airport-transfer",
  },
  {
    code: "RIL",
    name: "Rifle Airport",
    detail: "60 min, private jets",
    link: "/rifle-airport-transfer",
  },
  {
    code: "DEN",
    name: "Denver Airport",
    detail: "3.5 hour luxury transfer",
    link: "/denver-to-aspen-car-service",
  },
];

const AirportTransfers = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Airport Transfers
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Airport Transfers from <span className="text-gradient-gold">Every Airport Serving Aspen</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            No matter which airport you fly into, VIP Aspen provides seamless luxury transfers with
            flight tracking, meet-and-greet service, and door-to-door delivery to your Aspen property.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {airports.map((airport, index) => (
            <motion.div
              key={airport.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-sm mb-4">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-display text-2xl font-semibold mb-1">
                {airport.code}
              </span>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {airport.name}
              </h3>
              <p className="text-foreground/60 text-sm mb-6">{airport.detail}</p>
              <Button variant="luxury" size="sm" className="mt-auto" asChild>
                <Link to={airport.link} className="flex items-center gap-2">
                  Book Transfer <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportTransfers;
