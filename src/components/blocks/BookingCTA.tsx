import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/data/constants";
import BookingForm from "@/components/BookingForm";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

interface BookingCTAProps {
  /** "form" uses the BookingForm, "widget" uses the external booking widget, "contact-only" shows call/email/WhatsApp */
  variant?: "form" | "widget" | "contact-only";
  serviceType?: string;
  talentName?: string;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
}

const BookingCTA = ({
  variant = "widget",
  serviceType,
  talentName,
  heading = "Ready to {{Book}}?",
  subheading,
  submitLabel,
}: BookingCTAProps) => {
  if (variant === "contact-only") {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div {...fadeInUp} className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {heading.replace(/\{\{(.+?)\}\}/g, (_, text) => text)}
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            {subheading || "All bookings are handled directly by our team. Call, email, or message us to get started."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="luxury" size="lg" asChild>
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call {COMPANY.phoneDisplay}
              </a>
            </Button>
            <WhatsAppButton message={`Hello, I'm interested in ${serviceType ? serviceType.replace(/-/g, " ") : "your services"}.`} />
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {COMPANY.email}
              </a>
            </Button>
          </div>

          <p className="text-foreground/40 text-sm">
            Available 24/7. All inquiries are confidential.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div {...fadeInUp}>
        {variant === "form" ? (
          <BookingForm
            serviceType={serviceType}
            talentName={talentName}
            heading={heading.replace(/\{\{(.+?)\}\}/g, "$1")}
            subheading={subheading || "Tell us about your needs and we'll get back to you promptly."}
            submitLabel={submitLabel || "Send Request"}
          />
        ) : (
          <>
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {heading.replace(/\{\{(.+?)\}\}/g, (_, text) => text)}
              </h2>
              {subheading && (
                <p className="text-foreground/70 text-lg mb-6">{subheading}</p>
              )}
            </motion.div>
            <BookingWidget />
          </>
        )}
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="text-center mt-8"
      >
        <p className="text-foreground/60 text-sm mb-4">
          Prefer to speak with us directly?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {COMPANY.phoneDisplay}
            </a>
          </Button>
          <WhatsAppButton message="Hello, I'd like to learn more about VIP Aspen services." />
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingCTA;
