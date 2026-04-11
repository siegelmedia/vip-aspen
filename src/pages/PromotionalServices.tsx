import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  serviceCards,
  pricingTiers,
  howItWorks,
  cancellationPolicies,
  faqs,
} from "@/data/promotionalData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VIP Aspen Promotional & Brand Ambassador Services",
  description:
    "Elite promotional talent for Aspen's most exclusive events. Brand ambassadors, event hostesses, atmosphere models, and cocktail service professionals.",
  serviceType: "Event Staffing",
  areaServed: {
    "@type": "City",
    name: "Aspen",
    containedInPlace: { "@type": "State", name: "Colorado" },
  },
  provider: {
    "@type": "LocalBusiness",
    name: "VIP Aspen",
    telephone: "+1-970-452-6636",
  },
};

const PromotionalServices = () => {
  return (
    <>
      <SEOHead
        title="Promotional Models & Brand Ambassadors in Aspen"
        description="Elite promotional talent for Aspen events. Brand ambassadors, event hostesses, atmosphere models, and cocktail service professionals. Sourced nationally, delivered locally. Get a quote — call (970) 452-6636."
        keywords="brand ambassadors Aspen, promotional models Aspen, event hostesses Aspen, atmosphere models Colorado, event staffing Aspen, cocktail models Aspen, tradeshow staff Aspen"
        canonicalUrl="/promotional-services"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Elite Talent
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Elite Promotional Talent for Aspen's{" "}
                <span className="text-gradient-gold">Most Exclusive Events</span>
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
                Brand ambassadors, event hostesses, atmosphere models, and cocktail
                service professionals — sourced nationally, delivered locally.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <a href="#quote">Get a Quote</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our <span className="text-gradient-gold">Services</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Whatever your event needs, we have the talent to elevate it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-8"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <ul className="space-y-2">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        {pricingTiers.map((tier, tierIdx) => (
          <section
            key={tier.category}
            className={`py-16 md:py-24 ${tierIdx % 2 === 1 ? "bg-muted/20" : ""}`}
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  <span className="text-gradient-gold">{tier.category}</span>
                </h2>
              </motion.div>

              <div className={`grid ${tier.items.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 max-w-5xl mx-auto`}>
                {tier.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`glass-card p-6 ${
                      item.featured ? "border-primary/30" : ""
                    }`}
                  >
                    {item.featured && (
                      <span className="inline-block bg-gradient-gold text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-sm font-medium mb-4">
                        Popular
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-foreground/50 text-sm mb-3">{item.detail}</p>
                    <p className="font-display text-2xl font-semibold text-gradient-gold">
                      {item.price}
                    </p>
                    {item.description && (
                      <p className="text-foreground/60 text-sm mt-2">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                How It <span className="text-gradient-gold">Works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary font-display font-semibold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem
                  value="cancellation"
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-display text-foreground hover:text-primary hover:no-underline py-5">
                    Cancellation Policy
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-sm leading-relaxed pb-5">
                    <ul className="space-y-2">
                      {cancellationPolicies.map((policy) => (
                        <li key={policy} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-display text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Quote CTA */}
        <section id="quote" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <BookingForm
                  serviceType="promotional-services"
                  heading="Let's Plan Your Event"
                  subheading="Tell us about your event and we'll build the perfect team."
                  submitLabel="Request a Quote"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mt-8"
              >
                <p className="text-foreground/60 text-sm mb-4">
                  Prefer to speak with us directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:info@vipaspen.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      info@vipaspen.com
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default PromotionalServices;
