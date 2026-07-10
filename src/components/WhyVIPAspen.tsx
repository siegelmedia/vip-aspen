import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, KeyRound } from "lucide-react";
import cullinanArrival from "@/assets/rr-cullinan-aspen-arrival.webp";

const highlights = [
  { icon: Clock, label: "24/7 Dispatch" },
  { icon: ShieldCheck, label: "Licensed Security" },
  { icon: KeyRound, label: "One Call, Full Concierge" },
];

const WhyVIPAspen = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow eyebrow-tick mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8 leading-[1.1]">
              Aspen's Only{" "}
              <span className="text-gradient-gold">Full-Service Luxury Concierge</span>
            </h2>

            <div className="space-y-5 text-foreground/70 leading-relaxed">
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
                the perfect vehicle for every occasion. We specialize in{" "}
                <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">
                  airport transfers
                </Link>{" "}
                from all four airports serving Aspen: ASE (5 minutes to downtown), Eagle/EGE (90 minutes),
                Rifle/RIL (60 minutes for private jets), and Denver/DEN (a 3.5-hour scenic mountain transfer).
              </p>

              <p>
                Our private chauffeur service extends across Aspen, Snowmass Village, Basalt, Woody Creek,
                Carbondale, and the entire Roaring Fork Valley. Clients who want the full Aspen experience can
                join our{" "}
                <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">
                  membership program
                </Link>{" "}
                — complimentary airport transfers, discounted hourly rates, priority booking, and exclusive club
                access. Whatever the occasion, VIP Aspen is the one call that covers it all.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/60"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image with offset accent frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="accent-frame max-w-xl mx-auto lg:mx-0 w-full"
          >
            <img
              src={cullinanArrival}
              alt="Rolls-Royce Cullinan arriving in downtown Aspen, Colorado"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyVIPAspen;
