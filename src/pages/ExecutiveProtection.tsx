import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Eye, UserCheck, Lock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import protectionService from "@/assets/protection-service.jpg";

const services = [
  {
    icon: UserCheck,
    title: "Executive Protection",
    description: "Close protection officers for high-net-worth individuals, executives, and public figures during their Aspen visit.",
  },
  {
    icon: Eye,
    title: "Event Security",
    description: "Comprehensive security planning and execution for private parties, corporate events, and special occasions.",
  },
  {
    icon: Lock,
    title: "Travel Security",
    description: "Secure transportation coordination, advance work, and protective intelligence for travel in and around Aspen.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Thorough security evaluations of properties, venues, and travel routes to identify and mitigate potential threats.",
  },
];

const features = [
  "Former military and law enforcement professionals",
  "Discrete, low-profile protection approach",
  "24/7 availability throughout your stay",
  "Coordination with local authorities",
  "Secure transportation integration",
  "Background-checked and vetted team",
  "Medical and emergency response trained",
  "Confidentiality guaranteed",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Protection Services Aspen",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aspen",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Aspen"
  },
  "description": "Professional executive protection and personal security services in Aspen, Colorado. Discrete bodyguard services for high-profile clients, celebrities, and executives.",
  "serviceType": "Security Services"
};

const ExecutiveProtection = () => {
  return (
    <>
      <SEOHead
        title="Executive Protection & Personal Security in Aspen, Colorado"
        description="Professional executive protection services in Aspen, CO. Discrete bodyguard and personal security for high-profile individuals, celebrities, and executives. Former military & law enforcement. Risk assessment, event security, and 24/7 protection."
        keywords="executive protection Aspen, bodyguard Aspen Colorado, personal security Aspen, VIP protection Aspen, celebrity security Aspen, close protection Colorado, private security Aspen, event security Aspen, executive security services, high-profile protection Aspen, personal bodyguard Aspen, security detail Colorado"
        canonicalUrl="/executive-protection"
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  Personal Security
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Executive <span className="text-gradient-gold">Protection</span>
                </h1>
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
                  Discrete, professional security services for high-profile individuals and families visiting Aspen. Our trained specialists ensure your safety while maintaining the utmost confidentiality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#contact">Request Consultation</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={protectionService}
                  alt="Professional executive protection and personal bodyguard service in Aspen Colorado"
                  className="rounded-sm w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-sm" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Protection <span className="text-gradient-gold">Services</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Comprehensive security solutions tailored to your specific needs and threat profile.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-sm shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-foreground/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Executive Protection in Aspen */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
                  Why Executive Protection in <span className="text-gradient-gold">Aspen</span>
                </h2>
                <div className="prose prose-lg max-w-none space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    Aspen attracts the world's most high-profile individuals — celebrities, billionaires, heads of state, and Fortune 500 executives. The town's intimate size, outdoor-oriented lifestyle, and concentrated wealth create unique security challenges that differ significantly from urban environments. Public visibility is heightened in a community of just 7,000 full-time residents, making discretion and local expertise essential components of any effective protection strategy.
                  </p>
                  <p>
                    VIP Aspen's executive protection team combines close personal protection with <Link to="/black-car-service" className="text-primary hover:underline">luxury secure transportation</Link> — your security detail doubles as your chauffeur, providing a seamless and discreet experience that eliminates the need for separate drivers and security personnel. This integrated approach means fewer people in your orbit, reduced visibility, and a more natural travel experience throughout the Roaring Fork Valley.
                  </p>
                  <p>
                    We handle advance work, venue security assessments, route planning, and real-time threat monitoring for every engagement. Whether you're attending the Aspen Ideas Festival, a private gathering at an exclusive venue, or spending a quiet week in a Starwood or Red Mountain estate, our team ensures your safety without disrupting your experience. Our <Link to="/rolls-royce-cullinan" className="text-primary hover:underline">Rolls-Royce Cullinan</Link> provides discreet luxury with armored-level presence, while our <Link to="/cadillac-escalade" className="text-primary hover:underline">Escalade fleet</Link> offers tactical flexibility for multi-vehicle security details.
                  </p>
                  <p>
                    For clients who require ongoing protection during extended stays or frequent visits, our <Link to="/membership" className="text-primary hover:underline">VIP Aspen membership program</Link> provides priority security booking, a dedicated concierge, and guaranteed availability — even during Aspen's peak seasons when demand for executive protection services is highest.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  Why Choose Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Professional <span className="text-gradient-gold">Excellence</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  Our protection specialists are selected from elite military and law enforcement backgrounds, 
                  bringing years of experience in high-threat environments to ensure your complete safety in Aspen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card p-8">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Confidential Consultation
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                All inquiries are handled with complete discretion. Contact us to discuss your security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ExecutiveProtection;
