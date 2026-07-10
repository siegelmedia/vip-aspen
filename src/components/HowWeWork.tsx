import { motion } from "framer-motion";
import { CalendarCheck, MessageSquareText, CarFront } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";

const steps = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Request",
    description:
      "Book online, call, or WhatsApp — 24/7. Tell us your route, date, and vehicle preference.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Confirm",
    description:
      "Receive a flat, all-inclusive quote and your chauffeur's details. No surge pricing, ever.",
  },
  {
    icon: CarFront,
    step: "03",
    title: "Ride",
    description:
      "We track your flight, meet you curbside or on the tarmac, and handle every detail door to door.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="The Process"
          heading="Booked in {{Three Steps}}"
          subtitle="From first message to final drop-off, one team handles everything."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                {...staggerChild(index)}
                className="relative glass-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <span className="font-mono text-5xl text-primary/15 absolute top-4 right-6 select-none">
                  {item.step}
                </span>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/25 mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
