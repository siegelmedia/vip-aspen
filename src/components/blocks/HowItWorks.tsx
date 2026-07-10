import { motion } from "framer-motion";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Step } from "@/types";

interface HowItWorksProps {
  steps: Step[];
  heading?: string;
}

const HowItWorks = ({
  steps,
  heading = "How It {{Works}}",
}: HowItWorksProps) => {
  return (
    <>
      <SectionHeader eyebrow="The Process" heading={heading} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            {...staggerChild(index)}
            className="relative glass-card p-6 pt-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
          >
            <span className="absolute -top-4 left-6 inline-flex items-center justify-center w-9 h-9 bg-gradient-gold text-primary-foreground font-mono text-sm shadow-gold">
              {step.step}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 mt-2">
              {step.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default HowItWorks;
