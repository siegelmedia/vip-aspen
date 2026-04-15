import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface Stat {
  label: string;
  value?: string;
}

interface StatsBarProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { label: "Available 24/7" },
  { label: "Veteran & LEO Owned" },
  { label: "Colorado Licensed" },
  { label: "Serving Aspen & the Roaring Fork Valley" },
];

const StatsBar = ({ stats = defaultStats }: StatsBarProps) => {
  return (
    <motion.div {...fadeInUp} className="py-8 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              {i > 0 && (
                <span className="hidden sm:inline text-primary/40">·</span>
              )}
              {stat.value && (
                <span className="font-display font-semibold text-primary">
                  {stat.value}
                </span>
              )}
              <span className="text-foreground/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsBar;
