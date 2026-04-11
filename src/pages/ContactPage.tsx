import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@id": "https://www.vipaspen.com/#organization",
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "telephone": "+1-970-452-6636",
    "email": "info@vipaspen.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "411 E Main St, Suite 205H",
      "addressLocality": "Aspen",
      "addressRegion": "CO",
      "postalCode": "81611",
      "addressCountry": "US"
    }
  }
};

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <SEOHead
        title="Contact VIP Aspen | Luxury Concierge & Black Car Service"
        description="Get in touch with VIP Aspen for luxury black car service, VIP club access, and executive protection in Aspen, Colorado. Call (970) 452-6636 or send us a message."
        keywords="contact VIP Aspen, Aspen luxury service inquiry, Aspen concierge contact"
        canonicalUrl="/contact"
        schemaData={schemaData}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-navy-light">
          <div className="container mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-[0.3em] text-sm mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6"
            >
              Contact <span className="text-gradient-gold">VIP Aspen</span> | Book Luxury Car Service in Aspen, CO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground/70 text-lg max-w-2xl mx-auto"
            >
              Whether you're seeking transportation, VIP access, or security services, our team is ready to curate your perfect Aspen experience.
            </motion.p>
          </div>
        </section>

        {/* Service Links */}
        <section className="py-10 border-b border-border/30">
          <div className="container mx-auto px-6">
            <p className="text-foreground/70 text-sm mb-4">Looking to book a specific service? Learn more about our offerings:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Rolls Royce Cullinan", to: "/rolls-royce-cullinan" },
                { label: "Airport Transfers", to: "/aspen-airport-transfer" },
                { label: "Black Car Service", to: "/black-car-service" },
                { label: "Executive Sprinter", to: "/executive-sprinter" },
                { label: "VIP Club Access", to: "/aspen-clubs" },
                { label: "Executive Protection", to: "/executive-protection" },
                { label: "Membership", to: "/membership" },
                { label: "Wedding Transportation", to: "/aspen-wedding-transportation" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-primary hover:underline text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  How to Reach Us
                </h2>

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

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                  <WhatsAppButton message="Hello, I'd like to learn more about VIP Aspen services." />
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
                      const { error } = await supabase.functions.invoke("send-contact-inquiry", {
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
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-foreground/60 text-sm mb-4">Fill out the form below and we'll get back to you promptly.</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-foreground/80 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-foreground/80 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground/80 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-foreground/80 text-sm mb-2">Interested In</label>
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
                    <label htmlFor="message" className="block text-foreground/80 text-sm mb-2">Message</label>
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

        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
