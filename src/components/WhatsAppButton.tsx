import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: "default" | "outline" | "luxury";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showText?: boolean;
}

const WhatsAppButton = ({
  phoneNumber = "19704526636",
  message = "Hello, I'm interested in VIP Aspen services.",
  variant = "outline",
  size = "lg",
  className = "",
  showText = true,
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        {showText && "WhatsApp"}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
