import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, ArrowRight, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const airports = [
  {
    code: "ASE",
    name: "Aspen Airport",
    detail: "5 minutes to downtown",
    link: "/aspen-airport-transfer",
  },
  {
    code: "RIL",
    name: "Rifle Airport",
    detail: "60 min, private jets",
    link: "/rifle-airport-transfer",
  },
  {
    code: "EGE",
    name: "Eagle Airport",
    detail: "90 min scenic drive",
    link: "/eagle-airport-transfer",
  },
  {
    code: "DEN",
    name: "Denver Airport",
    detail: "3.5 hour luxury transfer",
    link: "/denver-to-aspen-car-service",
  },
];

const routes = [
  { label: "Vail to Aspen", detail: "~2 hrs", link: "/vail-to-aspen-car-service" },
  { label: "Beaver Creek to Aspen", detail: "~2 hrs", link: "/beaver-creek-to-aspen-car-service" },
  { label: "Glenwood Springs to Aspen", detail: "~1 hr", link: "/glenwood-springs-to-aspen-car-service" },
  { label: "Snowmass Village", detail: "20 min", link: "/snowmass-village-transfer" },
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
          <p className="eyebrow mb-4">Airport Transfers</p>
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
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-luxury transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 border border-primary/25 mb-4">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-mono text-2xl tracking-tight mb-1">
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

        {/* Popular routes: a compact strip so the section covers airports AND
            the intercity transfers people search for, without a second grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-12 border-t border-border/40 pt-8"
        >
          <p className="eyebrow text-center mb-5">Popular Routes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {routes.map((route) => (
              <Link
                key={route.link}
                to={route.link}
                className="group inline-flex items-center gap-2.5 glass-card px-4 py-2.5 hover:border-primary/40 transition-colors"
              >
                <Route className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/85 group-hover:text-primary transition-colors">
                  {route.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/45">
                  {route.detail}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AirportTransfers;
