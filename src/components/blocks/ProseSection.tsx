import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { renderGoldText } from "@/lib/goldText";
import type { ProseBlock } from "@/types";

interface ProseSectionProps {
  content: ProseBlock;
  className?: string;
}

/**
 * Bodies are HTML. Some data files pass plain text with blank-line paragraph
 * breaks instead; HTML collapses those into one run-on block, so wrap each
 * paragraph in <p> when no block-level markup is present.
 */
export const toHtml = (body: string) =>
  /<(p|ul|ol|h[1-6]|table|blockquote|div)[\s>]/i.test(body)
    ? body
    : body
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p) => `<p>${p}</p>`)
        .join("\n");

const ProseSection = ({ content, className = "" }: ProseSectionProps) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <motion.div {...fadeInUp}>
        {content.heading && (
          <>
            <p className="eyebrow text-center mb-4">In Depth</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center text-balance">
              {renderGoldText(content.heading)}
            </h2>
          </>
        )}
        <div
          className="prose prose-lg max-w-none text-foreground/70 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: toHtml(content.body) }}
        />
      </motion.div>
    </div>
  );
};

export default ProseSection;
