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
      <SectionHeader heading={heading} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            {...staggerChild(index)}
            className="glass-card p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-display font-semibold text-lg">
                {step.step}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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
