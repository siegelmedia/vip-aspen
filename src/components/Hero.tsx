import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/constants";
import heroImage from "@/assets/fleet-tarmac-hero.webp";

/**
 * Optional hero video. Drop an H.264 MP4 (ideally 1920x1080, a 10-20s loop,
 * under ~6MB, no audio) into /public/video/ and set the path here, e.g.
 * { mp4: "/video/hero.mp4" }. A WebM alongside it improves compression on
 * Chrome. Leave null to render the still image. The image is always used as
 * the poster and as the fallback while the video buffers.
 */
export const HERO_VIDEO: { mp4: string; webm?: string } | null = null;

const stats = [
  { value: "24/7", label: "Dispatch & availability" },
  {
    value: (
      <>
        ASE·RIL·<wbr />EGE·DEN
      </>
    ),
    label: "Airports served",
  },
  { value: "3", label: "Flagship vehicles" },
  { value: "VET/LEO", label: "Veteran & LEO owned" },
];

const trustChips = [
  { icon: ShieldCheck, label: "Colorado Licensed Security" },
  { icon: Clock, label: "No Surge Pricing" },
  { icon: MapPin, label: "Aspen Local" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92svh] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="VIP Aspen luxury fleet — Mercedes Sprinter, Cadillac Escalade, and Rolls-Royce Cullinan on the tarmac with Aspen's snow-capped mountains behind"
          className="w-full h-full object-cover"
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
        {HERO_VIDEO && (
          <video
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroImage}
            aria-hidden
          >
            {HERO_VIDEO.webm && <source src={HERO_VIDEO.webm} type="video/webm" />}
            <source src={HERO_VIDEO.mp4} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center pt-32 pb-16 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="eyebrow eyebrow-tick mb-6"
          >
            Aspen's Premier Luxury Transportation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-[1.05]"
          >
            <span className="text-gradient-gold">Luxury Car Service</span>
            <span className="block">& VIP Concierge</span>
            <span className="block text-foreground/90">in Aspen, Colorado</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-foreground/75 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Chauffeured Rolls-Royce Cullinan, Cadillac Escalade & Executive
            Sprinter. Airport transfers, private ski transfers, and executive
            protection — for Aspen's most discerning clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#booking">Book Your Ride</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {COMPANY.phoneDisplay}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustChips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/60"
              >
                <Icon className="w-3.5 h-3.5 text-primary/80" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stat bar — in normal flow so it never overlaps content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        className="relative z-10 border-t border-border/40 bg-background/70 backdrop-blur-md"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 md:py-6 px-4 md:px-8 first:pl-0">
                <p className="font-mono text-primary text-lg md:text-xl tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground/55 text-[11px] md:text-xs uppercase tracking-[0.14em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
