import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CancellationPolicyProps {
  policies: string[];
}

const CancellationPolicy = ({ policies }: CancellationPolicyProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="cancellation" className="glass-card px-6 border-none">
          <AccordionTrigger className="text-left font-display text-foreground hover:text-primary hover:no-underline py-5">
            Cancellation Policy
          </AccordionTrigger>
          <AccordionContent className="text-foreground/70 text-sm leading-relaxed pb-5">
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CancellationPolicy;
