import { Accent } from "@/components/site/Shared";
import type { ProseBlock } from "@/types";

interface ProseSectionProps {
  content: ProseBlock;
  className?: string;
  /** Larger opening paragraphs. */
  lead?: boolean;
  /** Label above the heading. */
  eyebrow?: string;
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

const ProseSection = ({ content, className = "", lead = false, eyebrow = "In Depth" }: ProseSectionProps) => {
  return (
    <div className={`prose--narrow${className ? ` ${className}` : ""}`}>
      {content.heading && (
        <div className="sec__head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">
            <Accent text={content.heading} />
          </h2>
        </div>
      )}
      <div className={`prose${lead ? " prose--lead" : ""}`} dangerouslySetInnerHTML={{ __html: toHtml(content.body) }} />
    </div>
  );
};

export default ProseSection;
