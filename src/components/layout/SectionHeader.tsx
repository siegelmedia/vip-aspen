import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { renderGoldText } from "@/lib/goldText";

interface SectionHeaderProps {
  /** Use {{gold}} markers for accent text. E.g. "Our {{Services}}" */
  heading: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ heading, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div {...fadeInUp} className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
        {renderGoldText(heading)}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
