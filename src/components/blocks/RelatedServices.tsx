import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";
import type { RelatedService } from "@/types";

interface RelatedServicesProps {
  items?: RelatedService[];
}

/**
 * Renders a page's related-service links as a row of pills.
 * Keeps internal linking dense for SEO and gives visitors a clear next step.
 */
const RelatedServices = ({ items }: RelatedServicesProps) => {
  if (!items || items.length === 0) return null;

  return (
    <SectionContainer className="py-10 md:py-14">
      <p className="eyebrow text-center mb-3">Keep Exploring</p>
      <h2 className="text-center font-display text-2xl font-semibold text-foreground mb-8">
        Related <span className="text-gradient-gold">Services</span>
      </h2>
      <nav className="flex flex-wrap justify-center gap-3" aria-label="Related services">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="group inline-flex items-center gap-1.5 border border-border/60 bg-card/40 px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            {item.label}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </nav>
    </SectionContainer>
  );
};

export default RelatedServices;
