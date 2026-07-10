import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { renderGoldText } from "@/lib/goldText";

interface SectionHeaderProps {
  /** Use {{gold}} markers for accent text. E.g. "Our {{Services}}" */
  heading: string;
  subtitle?: string;
  /** Short mono label rendered above the heading */
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeader = ({
  heading,
  subtitle,
  eyebrow,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  return (
    <motion.div
      {...fadeInUp}
      className={`${isCenter ? "text-center" : "text-left"} mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${isCenter ? "" : "eyebrow-tick"} mb-4`}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground mb-4 text-balance">
        {renderGoldText(heading)}
      </h2>
      {subtitle && (
        <p
          className={`text-foreground/70 max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
