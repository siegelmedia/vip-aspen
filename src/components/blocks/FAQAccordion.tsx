import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
}

const FAQAccordion = ({
  faqs,
  heading = "Frequently Asked {{Questions}}",
}: FAQAccordionProps) => {
  return (
    <>
      <SectionHeader eyebrow="Answers" heading={heading} />

      <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display text-foreground hover:text-primary hover:no-underline py-5 gap-4">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-primary/50 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-sm leading-relaxed pb-5 pl-9">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </>
  );
};

export default FAQAccordion;
