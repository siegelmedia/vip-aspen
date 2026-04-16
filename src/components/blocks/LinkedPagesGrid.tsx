import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { staggerChild } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import type { LinkedPagesGroup } from "@/types";

interface LinkedPagesGridProps {
  group: LinkedPagesGroup;
}

const colClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const LinkedPagesGrid = ({ group }: LinkedPagesGridProps) => {
  const columns = group.columns || 4;

  return (
    <>
      <SectionHeader heading={group.heading} subtitle={group.subtitle} />

      <div className={`grid ${colClasses[columns]} gap-6`}>
        {group.items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.href} {...staggerChild(index)}>
              <Link
                to={item.href}
                className="glass-card p-6 flex flex-col h-full group hover:border-primary/30 transition-colors block"
              >
                {Icon && (
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                {item.detail && (
                  <p className="text-primary text-sm mb-2">{item.detail}</p>
                )}
                {item.description && (
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default LinkedPagesGrid;
