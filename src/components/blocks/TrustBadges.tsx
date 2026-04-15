import { motion } from "framer-motion";
import { Shield, Award, Clock, Lock } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { TrustBadge } from "@/types";

interface TrustBadgesProps {
  badges: TrustBadge[];
  variant?: "inline" | "grid";
}

const defaultIcons = [Shield, Award, Clock, Lock];

const TrustBadges = ({ badges, variant = "inline" }: TrustBadgesProps) => {
  if (variant === "inline") {
    return (
      <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
        {badges.map((badge, i) => {
          const Icon = badge.icon || defaultIcons[i % defaultIcons.length];
          return (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-foreground/50">
              <Icon className="w-4 h-4 text-primary/60" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div {...fadeInUp} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {badges.map((badge, i) => {
        const Icon = badge.icon || defaultIcons[i % defaultIcons.length];
        return (
          <div key={badge.label} className="glass-card p-4 text-center">
            <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-foreground/70 text-sm font-medium">{badge.label}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default TrustBadges;
