import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import type { PricingTier } from "@/types";

interface PricingTableProps {
  tiers: PricingTier[];
}

const PricingTable = ({ tiers }: PricingTableProps) => {
  return (
    <>
      {tiers.map((tier) => (
        <div key={tier.category} className="mb-16 last:mb-0">
          <SectionHeader heading={`{{${tier.category}}}`} subtitle={tier.note} />

          <div
            className={`grid ${
              tier.items.length <= 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-6 max-w-5xl mx-auto`}
          >
            {tier.items.map((item, index) => (
              <motion.div
                key={item.name}
                {...staggerChild(index)}
                className={`glass-card p-6 ${
                  item.featured ? "border-primary/30 relative" : ""
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-foreground/50 text-sm mb-3">{item.detail}</p>

                <div className="py-3 mb-3 bg-muted/50 rounded-sm text-center">
                  <p className="font-display text-2xl font-semibold text-gradient-gold">
                    {item.price}
                  </p>
                </div>

                {item.description && (
                  <p className="text-foreground/60 text-sm mb-3">
                    {item.description}
                  </p>
                )}

                {item.features && item.features.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PricingTable;
