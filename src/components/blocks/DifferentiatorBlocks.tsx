import { motion } from "framer-motion";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Differentiator } from "@/types";

interface DifferentiatorBlocksProps {
  items: Differentiator[];
  heading?: string;
}

const DifferentiatorBlocks = ({
  items,
  heading = "Why {{VIP Aspen}}",
}: DifferentiatorBlocksProps) => {
  return (
    <>
      <SectionHeader eyebrow="The Difference" heading={heading} />

      <div className="max-w-4xl mx-auto space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            {...staggerChild(index)}
            className="glass-card p-8 border-l-2 border-l-primary/50 flex gap-6 md:gap-8 transition-colors hover:border-l-primary"
          >
            <span className="hidden sm:block font-mono text-sm text-primary/50 pt-1.5 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default DifferentiatorBlocks;
