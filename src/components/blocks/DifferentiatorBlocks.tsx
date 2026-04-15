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
      <SectionHeader heading={heading} />

      <div className="max-w-4xl mx-auto space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            {...staggerChild(index)}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
              {item.title}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default DifferentiatorBlocks;
