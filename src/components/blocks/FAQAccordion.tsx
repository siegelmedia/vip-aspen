import { FaqList } from "@/components/site/Shared";
import SectionHeader from "@/components/layout/SectionHeader";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
}

/**
 * Questions and answers for use inside a section a page builds itself.
 * Templates use FaqSection (components/site/Shared), which is the whole section.
 */
const FAQAccordion = ({ faqs, heading = "Frequently Asked {{Questions}}" }: FAQAccordionProps) => {
  return (
    <div style={{ maxWidth: 860, marginInline: "auto" }}>
      <SectionHeader eyebrow="Answers" heading={heading} align="left" />
      <FaqList faqs={faqs} />
    </div>
  );
};

export default FAQAccordion;
