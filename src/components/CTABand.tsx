import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/data/constants";
import bandImage from "@/assets/cullinan-mountain-road.webp";

/** Full-bleed image CTA band — mid gradient overlay keeps the photo visible */
const CTABand = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bandImage}
          alt="Rolls-Royce Cullinan on a mountain road outside Aspen, Colorado"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 cta-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <motion.div {...fadeInUp} className="max-w-2xl">
          <p className="eyebrow eyebrow-tick mb-5">Reserve Your Chauffeur</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 leading-[1.1]">
            Your Chauffeur Is <span className="text-gradient-gold">One Call Away</span>
          </h2>
          <p className="text-foreground/75 text-lg mb-8 max-w-xl">
            Airport pickups, ski transfers, and nights out — reserved in minutes,
            confirmed with a flat rate, available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phoneDisplay}
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#booking">Book Online</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABand;
