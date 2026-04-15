import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import type { Feature } from "@/types";

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

const FeatureGrid = ({ items, columns = 3 }: FeatureGridProps) => {
  return (
    <div className={`grid ${colClasses[columns]} gap-6 md:gap-8`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            {...staggerChild(index)}
            className="glass-card p-6 md:p-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.features && item.features.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
