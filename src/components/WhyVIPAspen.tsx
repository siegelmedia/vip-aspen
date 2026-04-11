import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhyVIPAspen = () => {
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
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Aspen's Only <span className="text-gradient-gold">Full-Service Luxury Concierge</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-foreground/70 text-lg leading-relaxed"
        >
          <p>
            VIP Aspen is the only luxury car service in Aspen, Colorado that combines private chauffeur
            transportation, VIP nightlife access, and{" "}
            <Link to="/executive-protection" className="text-primary hover:text-primary/80 transition-colors">
              executive protection
            </Link>{" "}
            under one roof. While other services offer a single vehicle or a simple airport ride, we've built
            a complete luxury concierge experience — from the moment your wheels touch the tarmac to the
            moment you step through the velvet rope.
          </p>

          <p>
            Our fleet is unlike anything else in the Roaring Fork Valley. The centerpiece is our{" "}
            <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">
              Rolls Royce Cullinan
            </Link>{" "}
            with a bespoke Mandarin interior — the only one of its kind available for hire in Aspen. Alongside
            it, a fleet of late-model Cadillac Escalades and a 13-passenger Executive Sprinter ensure we have
            the perfect vehicle for every occasion, from intimate ski resort transfers to corporate group
            travel. We specialize in{" "}
            <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">
              airport transfers
            </Link>{" "}
            from all four airports serving Aspen: ASE (just 5 minutes to downtown), Eagle/EGE (90 minutes),
            Rifle/RIL (60 minutes for private jet arrivals), and Denver/DEN (a 3.5-hour scenic mountain transfer
            through the heart of the Rockies).
          </p>

          <p>
            Beyond VIP transportation, our private chauffeur service extends across Aspen, Snowmass Village,
            Basalt, Woody Creek, Carbondale, and the entire Roaring Fork Valley. Clients who want the full
            Aspen experience can join our{" "}
            <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">
              membership program
            </Link>
            , which includes complimentary airport transfers, discounted hourly rates across the fleet, priority
            booking, and exclusive club access. Whether you need a Rolls Royce for a wedding in Aspen, a
            discreet security detail for a high-profile event, or simply a reliable luxury car service you can
            call at any hour — VIP Aspen is the one call that covers it all.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVIPAspen;
