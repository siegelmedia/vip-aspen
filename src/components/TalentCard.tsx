import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { TalentProfile } from "@/data/talentProfiles";

interface TalentCardProps {
  profile: TalentProfile;
  index: number;
  onSelect: (profile: TalentProfile) => void;
}

const TalentCard = ({ profile, index, onSelect }: TalentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted/30">
        <img
          src={profile.portraitPlaceholder}
          alt={profile.firstName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {profile.firstName}
        </h3>
        <p className="flex items-center gap-1 text-foreground/50 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          {profile.originCity}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {profile.categories.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
          {profile.categories.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{profile.categories.length - 2}
            </Badge>
          )}
        </div>
        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2 mb-4">
          {profile.bio}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onSelect(profile)}
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};

export default TalentCard;
