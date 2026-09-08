import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Car, MapPin, Star, Users, ArrowRight, Phone, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/layout/SectionHeader";
import { createBreadcrumbSchema } from "@/lib/schema";
import { fadeInUp, staggerChild } from "@/lib/animations";
import { COMPANY } from "@/data/constants";
import heroImage from "@/assets/hero-aspen.webp";
import cullinanImage from "@/assets/rolls-royce-cullinan.webp";
import escaladeImage from "@/assets/escalade.webp";
import sprinterImage from "@/assets/sprinter.webp";
import teamImage from "@/assets/rr-cullinan-aspen-exit.webp";

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${COMPANY.url}/about#webpage`,
      url: `${COMPANY.url}/about`,
      name: "About VIP Aspen",
      about: { "@id": `${COMPANY.url}/#organization` },
      isPartOf: { "@type": "WebSite", url: COMPANY.url, name: COMPANY.name },
    },
    createBreadcrumbSchema([
      { name: "Home", url: COMPANY.url },
      { name: "About", url: `${COMPANY.url}/about` },
    ]),
  ],
};

const pillars = [
  {
    icon: Shield,
    title: "A Security Company First",
    description:
      "VIP Aspen is operated by Aspen Security LLC, a Colorado-licensed security firm with veteran and law enforcement ownership. Vetting, discretion, and planning are built into every ride, not added on.",
  },
  {
    icon: Award,
    title: "Vehicles Chosen for the Mountains",
    description:
      "A Rolls-Royce Cullinan with a bespoke interior, late-model Cadillac Escalades, and a 13-passenger Executive Sprinter, all selected for Colorado winters and the expectations of our clients.",
  },
  {
    icon: MapPin,
    title: "Aspen Local Knowledge",
    description:
      "Every hotel entrance, FBO gate, valet stand, and mountain road in every season. Our team lives and works in the Roaring Fork Valley, and it shows in the details.",
  },
  {
    icon: Clock,
    title: "One Call, Around the Clock",
    description:
      "Dispatch is staffed 24/7. Transportation, VIP access, and protection are coordinated by one team, so you make one call and everything else is handled.",
  },
];

const fleet = [
  {
    name: "Rolls-Royce Cullinan",
    description:
      "Bespoke Mandarin interior, starlight headliner, and a champagne cooler. The flagship of the fleet and the vehicle Aspen's most discerning guests request by name.",
    image: cullinanImage,
    alt: "Rolls-Royce Cullinan available for chauffeured hire in Aspen",
    link: "/rolls-royce-cullinan",
  },
  {
    name: "Cadillac Escalade",
    description:
      "The latest-generation Escalade with massaging seats, a curved OLED display, and full-time four-wheel drive. Our workhorse for airport transfers, ski days, and executive travel.",
    image: escaladeImage,
    alt: "Cadillac Escalade luxury SUV for Aspen airport transfers",
    link: "/cadillac-escalade",
  },
  {
    name: "Executive Sprinter",
    description:
      "Up to 13 passengers in first-class comfort with a conference layout, entertainment system, and room for everyone's gear. Built for corporate groups, wedding parties, and group ski trips.",
    image: sprinterImage,
    alt: "Executive Mercedes Sprinter van for group transportation in Aspen",
    link: "/executive-sprinter",
  },
];

const services = [
  { label: "Black Car Service", href: "/black-car-service", icon: Car },
  { label: "ASE Airport Transfer", href: "/aspen-airport-transfer", icon: MapPin },
  { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer", icon: MapPin },
  { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer", icon: MapPin },
  { label: "Denver to Aspen", href: "/denver-to-aspen-car-service", icon: MapPin },
  { label: "VIP Club Access", href: "/aspen-clubs", icon: Star },
  { label: "Executive Protection", href: "/executive-protection", icon: Shield },
  { label: "Membership", href: "/membership", icon: Users },
];

const serviceAreas = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Woody Creek",
  "Carbondale",
  "Glenwood Springs",
  "Vail & Beaver Creek",
  "Denver & Front Range",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="About VIP Aspen | Luxury Car Service & Security Company in Aspen, CO"
        description="VIP Aspen is a veteran and law-enforcement owned luxury transportation, VIP access, and executive protection company in Aspen, Colorado. Rolls-Royce Cullinan, Cadillac Escalade, and Executive Sprinter, available 24/7 across the Roaring Fork Valley."
        keywords="about VIP Aspen, luxury car service Aspen Colorado, VIP transportation Roaring Fork Valley, Aspen car service company, executive protection Aspen, Aspen Security LLC"
        canonicalUrl="/about"
        schemaData={aboutSchema}
      />

      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aspen, Colorado, home of VIP Aspen luxury car service"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            {...{ fetchpriority: "high" }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="max-w-3xl"
          >
            <p className="eyebrow eyebrow-tick mb-6">About VIP Aspen</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
              Transportation, Access & Protection.{" "}
              <span className="text-gradient-gold">One Aspen Team.</span>
            </h1>
            <p className="text-foreground/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              VIP Aspen is a veteran and law-enforcement owned company built for the way people
              actually visit Aspen: arriving by jet, moving between mountains and dinners, and
              expecting every detail to be handled quietly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <p className="eyebrow eyebrow-tick mb-4">Our Story</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8 leading-[1.1]">
                Built for Aspen's <span className="text-gradient-gold">Most Demanding Guests</span>
              </h2>
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  VIP Aspen was founded to fill a gap in the Aspen luxury market. Most car services
                  offer a ride from A to B. The executives, athletes, entertainers, and families who
                  choose this town over anywhere else in the world need more than that: a chauffeur
                  who understands discretion, a vehicle that belongs on Main Street, and a team that
                  can arrange the table, the tarmac, and the security detail with the same phone call.
                </p>
                <p>
                  We are operated by Aspen Security LLC, a Colorado-licensed security company with
                  veteran and law enforcement ownership. That background shapes everything about how
                  we work. Every chauffeur is background-checked and trained. Every itinerary is
                  planned in advance. Confidentiality is a standing policy, not a request.
                </p>
                <p>
                  We are also unapologetically local. Our team knows every hotel entrance, every FBO
                  gate at ASE, every valet stand, and how Highway 82 behaves in a February storm. That
                  knowledge cannot be trained into a national franchise or an app. It comes from
                  living and working in the Roaring Fork Valley, and it is the reason our clients
                  come back season after season.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="accent-frame max-w-xl mx-auto lg:mx-0 w-full"
            >
              <img
                src={teamImage}
                alt="VIP Aspen chauffeur with the Rolls-Royce Cullinan in downtown Aspen"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 bg-navy-light">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="What Sets Us Apart"
            heading="The VIP Aspen {{Standard}}"
            subtitle="Four commitments that apply to every ride, every client, every season."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  {...staggerChild(index)}
                  className="glass-card p-7 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/25 mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="The Fleet"
            heading="Three Vehicles, {{Hand-Selected}}"
            subtitle="Chosen for Colorado mountain driving and the expectations of the people who ride in them."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((vehicle, i) => (
              <motion.div key={vehicle.name} {...staggerChild(i)} className="group">
                <Link to={vehicle.link} className="block">
                  <div className="relative overflow-hidden mb-6 accent-frame">
                    <img
                      src={vehicle.image}
                      alt={vehicle.alt}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    View Vehicle <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <p className="eyebrow eyebrow-tick mb-4">Where We Operate</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 leading-[1.1]">
                Aspen and the <span className="text-gradient-gold">Roaring Fork Valley</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                VIP Aspen provides luxury car service throughout Aspen and the entire Roaring Fork
                Valley, from downtown to Snowmass Village, Basalt, Woody Creek, Carbondale, and
                Glenwood Springs. We also run long-distance chauffeured service to Vail, Beaver
                Creek, and Denver, and private airport transfers from Aspen (ASE), Rifle Garfield
                County (RIL), Eagle County (EGE), and Denver International (DEN). Wherever you are
                headed in the Colorado mountains, we get you there in style.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="lg:col-span-2 glass-card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/80 mb-5">
                Service Areas
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-foreground/75 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="container mx-auto px-6 relative">
          <SectionHeader
            eyebrow="What We Do"
            heading="Explore Our {{Services}}"
            subtitle="Transportation, VIP access, and security, coordinated by one team."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.href} {...staggerChild(i)}>
                  <Link
                    to={service.href}
                    className="glass-card flex items-center gap-3 p-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group h-full"
                  >
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {service.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">
              Experience <span className="text-gradient-gold">VIP Aspen</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Tell us your dates, your flights, and your plans. We will handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <a href={`tel:${COMPANY.phoneRaw}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {COMPANY.phoneDisplay}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
