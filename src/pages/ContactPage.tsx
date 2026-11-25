import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/layout/PageHero";
import FormErrorFallback from "@/components/FormErrorFallback";
import { trackEvent } from "@/lib/analytics";
import { CORSA, WHATSAPP_URL } from "@/data/site";
import { COMPANY } from "@/data/constants";
import { combineSchema, createBreadcrumbSchema } from "@/lib/schema";
import heroImage from "@/assets/fleet-tarmac-hero.webp";

// The business itself is declared once, site-wide, as #organization; this page only points at it.
const schemaData = combineSchema(
  {
    "@type": "ContactPage",
    "@id": `${COMPANY.url}/contact#webpage`,
    url: `${COMPANY.url}/contact`,
    name: "Contact VIP Aspen",
    mainEntity: { "@id": `${COMPANY.url}/#organization` },
  },
  createBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "Contact", url: `${COMPANY.url}/contact` },
  ]),
);

const serviceLinks = [
  { label: "Rolls Royce Cullinan", to: "/rolls-royce-cullinan" },
  { label: "Airport Transfers", to: "/aspen-airport-transfer" },
  { label: "Black Car Service", to: "/black-car-service" },
  { label: "Executive Sprinter", to: "/executive-sprinter" },
  { label: "VIP Club Access", to: "/aspen-clubs" },
  { label: "Executive Protection", to: "/executive-protection" },
  { label: "Membership", to: "/membership" },
  { label: "Wedding Transportation", to: "/aspen-wedding-transportation" },
];

const fieldClass =
  "w-full bg-white border border-input px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [failed, setFailed] = useState<{ subject: string; body: string } | null>(null);

  return (
    <>
      <SEOHead
        title="Contact VIP Aspen | Luxury Car Service, 24/7"
        description="Get in touch with VIP Aspen for luxury black car service, VIP club access, and executive protection in Aspen, Colorado. Call (970) 452-6636 or send a message."
        keywords="contact VIP Aspen, Aspen luxury service inquiry, Aspen concierge contact"
        canonicalUrl="/contact"
        schemaData={schemaData}
      />
      <SiteShell>
        <PageHero
          data={{
            tagline: "Get in Touch",
            headline: "Contact {{VIP Aspen}}",
            description:
              "Whether you're seeking transportation, VIP access, or security services, our team is ready to curate your perfect Aspen experience.",
            bgImage: heroImage,
          }}
          crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
          cta={false}
        />

        {/* How to reach us */}
        <section className="sec sec--paper">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow">Available 24/7</p>
              <h2 className="h2">How to Reach Us</h2>
            </div>
            <div className="svc svc--contact" style={{ marginTop: 0 }}>
              <a className="svc__card" href="tel:+19704526636">
                <p className="eyebrow">Call or text</p>
                <h3 className="h3">(970) 452-6636</h3>
                <p>Dispatch is staffed 24/7. The fastest way to reach us for same-day requests and changes.</p>
              </a>
              <a className="svc__card" href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hello, I'd like to learn more about VIP Aspen services.")}`} target="_blank" rel="noopener noreferrer">
                <p className="eyebrow">WhatsApp</p>
                <h3 className="h3">Message us</h3>
                <p>Message us on WhatsApp from anywhere in the world, at any hour.</p>
              </a>
              <a className="svc__card" href={CORSA.bookUrl}>
                <p className="eyebrow">Instant quote</p>
                <h3 className="h3">Book online</h3>
                <p>Select your vehicle, date, and route. Your price is shown before you book.</p>
              </a>
              <a className="svc__card" href="mailto:info@vipaspen.com">
                <p className="eyebrow">Email</p>
                <h3 className="h3">info@vipaspen.com</h3>
                <p>For itineraries, events, membership and security inquiries.</p>
              </a>
            </div>
            <dl className="facts">
              <div>
                <dt>Address</dt>
                <dd>
                  <address style={{ fontStyle: "normal" }} itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">411 E Main St, Suite 205H</span>,{" "}
                    <span itemProp="addressLocality">Aspen</span>, <span itemProp="addressRegion">CO</span>{" "}
                    <span itemProp="postalCode">81611</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Available 24/7</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>
                  Looking to book a specific service? Learn more about our offerings:{" "}
                  {serviceLinks.map((item, i) => (
                    <span key={item.to}>
                      {i > 0 && ", "}
                      <Link to={item.to}>{item.label}</Link>
                    </span>
                  ))}
                  .
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Message form */}
        <section className="sec">
          <div className="wrap wrap--narrow">
            <form
              className="glass-card p-8 md:p-10 space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                const formData = new FormData(e.currentTarget);
                const service = String(formData.get("service") || "");
                try {
                  const { error } = await supabase.functions.invoke("send-contact-inquiry", {
                    body: {
                      firstName: formData.get("firstName"),
                      lastName: formData.get("lastName"),
                      email: formData.get("email"),
                      service,
                      message: formData.get("message"),
                    },
                  });
                  if (error) throw error;
                  setFailed(null);
                  trackEvent("generate_lead", { form_name: "contact", service: service || "unspecified" });
                  toast({ title: "Inquiry sent", description: "We'll be in touch shortly." });
                  (e.target as HTMLFormElement).reset();
                } catch (err) {
                  trackEvent("form_error", { form_name: "contact", service: service || "unspecified" });
                  setFailed({
                    subject: `Inquiry — ${service || "VIP Aspen"}`,
                    body: `Name: ${formData.get("firstName")} ${formData.get("lastName")}\nEmail: ${formData.get("email")}\nInterested in: ${service || "Not specified"}\n\n${formData.get("message") || ""}`,
                  });
                  toast({ title: "Error", description: "Failed to send inquiry. Please try again.", variant: "destructive" });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div>
                <p className="eyebrow">Write to us</p>
                <h2 className="h2">Send Us a Message</h2>
                <p className="text-foreground/60 text-sm mt-3">
                  Fill out the form below and we'll get back to you promptly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-foreground/80 text-sm mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className={fieldClass} placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-foreground/80 text-sm mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className={fieldClass} placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground/80 text-sm mb-2">Email</label>
                <input type="email" id="email" name="email" required className={fieldClass} placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-foreground/80 text-sm mb-2">Interested In</label>
                <select id="service" name="service" className={fieldClass}>
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
                <textarea id="message" name="message" rows={4} className={`${fieldClass} resize-none`} placeholder="Tell us about your needs..." />
              </div>

              {failed && <FormErrorFallback subject={failed.subject} body={failed.body} />}

              <Button variant="luxury" size="xl" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </section>
      </SiteShell>
    </>
  );
};

export default ContactPage;
