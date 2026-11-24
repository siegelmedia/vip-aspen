import { Shield, Award, Clock, Lock } from "lucide-react";
import type { TrustBadge } from "@/types";

interface TrustBadgesProps {
  badges: TrustBadge[];
  /** Kept for callers; both render the same strip. */
  variant?: "inline" | "grid";
}

const defaultIcons = [Shield, Award, Clock, Lock];

/** A thin strip of short trust statements under the page header. */
const TrustBadges = ({ badges }: TrustBadgesProps) => {
  return (
    <ul className="badges">
      {badges.map((badge, i) => {
        const Icon = badge.icon || defaultIcons[i % defaultIcons.length];
        return (
          <li key={badge.label}>
            <Icon aria-hidden="true" strokeWidth={1.6} />
            <span>{badge.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TrustBadges;
