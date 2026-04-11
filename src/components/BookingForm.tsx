import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  serviceType?: string;
  talentName?: string;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
}

const BookingForm = ({
  serviceType,
  talentName,
  heading = "Request a Booking",
  subheading = "Fill out the form below and we'll get back to you promptly.",
  submitLabel = "Request a Booking",
}: BookingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceLabels: Record<string, string> = {
    "private-entertainment": "Private Entertainment",
    "promotional-services": "Promotional Services",
    "brand-ambassador": "Brand Ambassador",
    "event-staffing": "Event Staffing",
    "cocktail-service": "Cocktail Service",
    other: "Other",
  };

  return (
    <form
      className="glass-card rounded-sm p-8 md:p-10 space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const eventDate = formData.get("eventDate") as string;
        const service = formData.get("service") as string;
        const talentRequest = formData.get("talentRequest") as string;
        const message = formData.get("message") as string;

        const formattedMessage = [
          `Phone: ${phone || "Not provided"}`,
          `Event Date: ${eventDate || "Not specified"}`,
          `Service: ${serviceLabels[service] || service || "Not specified"}`,
          talentRequest ? `Talent Request: ${talentRequest}` : null,
          message ? `\nMessage:\n${message}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        try {
          const { error } = await supabase.functions.invoke("send-booking-inquiry", {
            body: {
              firstName: name.split(" ")[0] || name,
              lastName: name.split(" ").slice(1).join(" ") || "",
              email,
              service: service || "booking",
              message: formattedMessage,
            },
          });
          if (error) throw error;
          toast({
            title: "Booking request sent",
            description: "We'll be in touch shortly to confirm your booking.",
          });
          (e.target as HTMLFormElement).reset();
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to send request. Please try again.",
            variant: "destructive",
          });
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
        {heading}
      </h2>
      <p className="text-foreground/60 text-sm mb-4">{subheading}</p>

      <div>
        <label htmlFor="booking-name" className="block text-foreground/80 text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          id="booking-name"
          name="name"
          required
          className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
          placeholder="Full name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-email" className="block text-foreground/80 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="booking-email"
            name="email"
            required
            className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="block text-foreground/80 text-sm mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="booking-phone"
            name="phone"
            className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-date" className="block text-foreground/80 text-sm mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="booking-date"
            name="eventDate"
            className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-foreground/80 text-sm mb-2">
            Service Type
          </label>
          <select
            id="booking-service"
            name="service"
            defaultValue={serviceType || ""}
            className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select a service</option>
            <option value="private-entertainment">Private Entertainment</option>
            <option value="promotional-services">Promotional Services</option>
            <option value="brand-ambassador">Brand Ambassador</option>
            <option value="event-staffing">Event Staffing</option>
            <option value="cocktail-service">Cocktail Service</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-talent" className="block text-foreground/80 text-sm mb-2">
          Talent Request <span className="text-foreground/40">(optional)</span>
        </label>
        <input
          type="text"
          id="booking-talent"
          name="talentRequest"
          defaultValue={talentName || ""}
          className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
          placeholder="Preferred talent name or type"
        />
      </div>

      <div>
        <label htmlFor="booking-message" className="block text-foreground/80 text-sm mb-2">
          Message
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={4}
          className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your event or preferences..."
        />
      </div>

      <Button variant="luxury" size="xl" className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
};

export default BookingForm;
