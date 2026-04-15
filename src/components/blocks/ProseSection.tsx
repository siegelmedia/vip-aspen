import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { renderGoldText } from "@/lib/goldText";
import type { ProseBlock } from "@/types";

interface ProseSectionProps {
  content: ProseBlock;
  className?: string;
}

const ProseSection = ({ content, className = "" }: ProseSectionProps) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <motion.div {...fadeInUp}>
        {content.heading && (
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            {renderGoldText(content.heading)}
          </h2>
        )}
        <div
          className="prose prose-lg max-w-none text-foreground/70 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </motion.div>
    </div>
  );
};

export default ProseSection;
