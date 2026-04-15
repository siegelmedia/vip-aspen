import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, MapPin, Phone as PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import HowItWorks from "@/components/blocks/HowItWorks";
import TrustBadges from "@/components/blocks/TrustBadges";
import { fadeInUpAnimate, fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/data/constants";

const seo = {
  title: "Free Property Security Assessment — Aspen Estate Evaluation",
  description: "Complimentary security assessment for your Aspen property. We evaluate lighting, access control, alarm systems, perimeter vulnerabilities, and emergency preparedness. Professional written report included.",
  keywords: "security assessment Aspen, property security evaluation, home security check Aspen, estate security audit Colorado",
  canonicalUrl: "/security-assessment",
};

const steps = [
  { step: 1, title: "Initial Consultation", description: "A brief phone call to understand your property, your concerns, and your schedule." },
  { step: 2, title: "On-Site Assessment", description: "One of our security professionals conducts a thorough property walkthrough, evaluating all security factors." },
  { step: 3, title: "Written Report", description: "You receive a detailed security assessment with findings and prioritized recommendations." },
  { step: 4, title: "Custom Proposal", description: "If you'd like ongoing service, we'll tailor a plan to your property's specific needs." },
];

const trustBadges = [
  { label: "Veteran & LEO Owned", icon: Shield },
  { label: "Colorado Licensed" },
  { label: "All Staff Background Checked & Under NDA" },
];

const SecurityAssessment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <PageWrapper seo={seo}>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUpAnimate} className="text-center max-w-3xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Complimentary Assessment
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Property <span className="text-gradient-gold">Security Assessment</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              A comprehensive evaluation of your Aspen property's security — lighting, access control, alarm systems, perimeter vulnerabilities, and emergency preparedness. Delivered as a professional written report.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <SectionContainer background="muted">
        <HowItWorks steps={steps} heading="What to {{Expect}}" />
      </SectionContainer>

      {/* Inquiry Form */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto">
          <SectionHeader heading="Request Your {{Assessment}}" />

          <motion.form
            {...fadeInUp}
            className="glass-card rounded-sm p-8 md:p-10 space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const formData = new FormData(e.currentTarget);

              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const phone = formData.get("phone") as string;
              const address = formData.get("address") as string;
              const referral = formData.get("referral") as string;
              const message = formData.get("message") as string;

              const formattedMessage = [
                `Phone: ${phone || "Not provided"}`,
                `Property Address: ${address || "Not provided"}`,
                `How they heard about us: ${referral || "Not specified"}`,
                message ? `\nMessage:\n${message}` : null,
              ].filter(Boolean).join("\n");

              try {
                const { error } = await supabase.functions.invoke("send-booking-inquiry", {
                  body: {
                    firstName: name.split(" ")[0] || name,
                    lastName: name.split(" ").slice(1).join(" ") || "",
                    email,
                    service: "security-assessment",
                    message: formattedMessage,
                  },
                });
                if (error) throw error;
                toast({
                  title: "Assessment request received",
                  description: "We'll be in touch within 24 hours to schedule your assessment.",
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
            <div>
              <label htmlFor="assess-name" className="block text-foreground/80 text-sm mb-2">Full Name</label>
              <input
                type="text"
                id="assess-name"
                name="name"
                required
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Full name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="assess-email" className="block text-foreground/80 text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="assess-email"
                  name="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="assess-phone" className="block text-foreground/80 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  id="assess-phone"
                  name="phone"
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="assess-address" className="block text-foreground/80 text-sm mb-2">
                Property Address <span className="text-foreground/40">(or general area, e.g. "Red Mountain")</span>
              </label>
              <input
                type="text"
                id="assess-address"
                name="address"
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Property address or neighborhood"
              />
            </div>

            <div>
              <label htmlFor="assess-referral" className="block text-foreground/80 text-sm mb-2">How did you hear about us?</label>
              <select
                id="assess-referral"
                name="referral"
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select one</option>
                <option value="referral">Referral</option>
                <option value="real-estate">Real Estate Professional</option>
                <option value="summit-black-car">Summit Black Car</option>
                <option value="online-search">Online Search</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="assess-message" className="block text-foreground/80 text-sm mb-2">
                Any specific concerns? <span className="text-foreground/40">(optional)</span>
              </label>
              <textarea
                id="assess-message"
                name="message"
                rows={3}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your property or any specific security concerns..."
              />
            </div>

            <Button variant="luxury" size="xl" className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Request Assessment"}
            </Button>

            <p className="text-foreground/40 text-xs text-center">
              Your information is confidential. We do not share client details with third parties.
            </p>
          </motion.form>

          {/* Trust elements */}
          <div className="mt-8">
            <TrustBadges badges={trustBadges} variant="inline" />
          </div>

          <div className="text-center mt-6">
            <p className="text-foreground/50 text-sm">
              Prefer to call?{" "}
              <a href={`tel:${COMPANY.phoneRaw}`} className="text-primary hover:underline">
                {COMPANY.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageWrapper>
  );
};

export default SecurityAssessment;
