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
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="h-1 w-1 bg-primary rotate-45 shrink-0" aria-hidden />
              {stat.value && (
                <span className="font-mono text-primary text-sm">
                  {stat.value}
                </span>
              )}
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsBar;
