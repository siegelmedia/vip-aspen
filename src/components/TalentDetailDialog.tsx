import { MapPin, Ruler, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TalentProfile } from "@/data/talentProfiles";

interface TalentDetailDialogProps {
  profile: TalentProfile | null;
  open: boolean;
  onClose: () => void;
  onRequestTalent: (name: string) => void;
}

const TalentDetailDialog = ({
  profile,
  open,
  onClose,
  onRequestTalent,
}: TalentDetailDialogProps) => {
  if (!profile) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            {profile.firstName}
          </DialogTitle>
        </DialogHeader>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {profile.galleryImages.map((img, i) => (
            <div key={i} className="aspect-[3/4] rounded-sm overflow-hidden bg-muted/30">
              <img
                src={img}
                alt={`${profile.firstName} ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <p className="flex items-center gap-1.5 text-foreground/60 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            {profile.originCity}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {profile.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="flex gap-6 text-sm text-foreground/60">
            {profile.height && (
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-primary" />
                {profile.height}
              </span>
            )}
            {profile.languages && profile.languages.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-primary" />
                {profile.languages.join(", ")}
              </span>
            )}
          </div>

          <p className="text-foreground/70 text-sm leading-relaxed">
            {profile.bio}
          </p>

          <Button
            variant="luxury"
            size="lg"
            className="w-full"
            onClick={() => {
              onRequestTalent(profile.firstName);
              onClose();
            }}
          >
            Request {profile.firstName}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TalentDetailDialog;
