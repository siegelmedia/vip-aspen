import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Get in Touch
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to Experience <span className="text-gradient-gold">Luxury?</span>
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              Whether you're seeking transportation, VIP access, or security services, our team is ready to curate your perfect Aspen experience.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-foreground font-medium mb-1">Address</p>
                  <p className="text-foreground/60 text-sm">
                    <span itemProp="streetAddress">411 E Main St, Suite 205H</span><br />
                    <span itemProp="addressLocality">Aspen</span>, <span itemProp="addressRegion">CO</span> <span itemProp="postalCode">81611</span>
                  </p>
                </address>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Phone</p>
                  <a
                    href="tel:+19704526636"
                    className="text-foreground/60 text-sm hover:text-primary transition-colors"
                    itemProp="telephone"
                  >
                    (970) 452-6636
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Email</p>
                  <a
                    href="mailto:info@vipaspen.com"
                    className="text-foreground/60 text-sm hover:text-primary transition-colors"
                  >
                    info@vipaspen.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-foreground/40 text-sm">
              Available 24/7 for our members
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              className="glass-card rounded-sm p-8 md:p-10 space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                const formData = new FormData(e.currentTarget);
                try {
                  const { data, error } = await supabase.functions.invoke("send-contact-inquiry", {
                    body: {
                      firstName: formData.get("firstName"),
                      lastName: formData.get("lastName"),
                      email: formData.get("email"),
                      service: formData.get("service"),
                      message: formData.get("message"),
                    },
                  });
                  if (error) throw error;
                  toast({ title: "Inquiry sent", description: "We'll be in touch shortly." });
                  (e.target as HTMLFormElement).reset();
                } catch (err) {
                  toast({ title: "Error", description: "Failed to send inquiry. Please try again.", variant: "destructive" });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-foreground/80 text-sm mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-foreground/80 text-sm mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground/80 text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-foreground/80 text-sm mb-2"
                >
                  Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="membership">VIP Membership</option>
                  <option value="black-car">Black Car Service</option>
                  <option value="vip-access">VIP Club Access</option>
                  <option value="protection">Personal Protection</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground/80 text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button variant="luxury" size="xl" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
