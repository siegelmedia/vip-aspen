import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Crown, Star, Gem, Phone, Clock, Plane, Users, Shield, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const membershipFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does VIP Aspen membership include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Membership includes airport transfers, hourly service, discounted rates, VIP club access, and dedicated concierge support. Three tiers: Silver, Gold, and Black."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, memberships are month-to-month with no long-term commitment."
      }
    }
  ]
};
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    tagline: "Best for Short Stays & Light Use",
    description: "Ideal for vacationers seeking a taste of VIP Aspen luxury during their visit.",
    price: "$1,000",
    priceNote: "per month",
    includedBenefits: [
      "1 round-trip ASE airport transfer (Escalade)",
      "3 hours of Escalade hourly service",
    ],
    discounts: [
      "Partner venue bottle service: $100 discount",
      "Exclusive club access: $150/person",
    ],
    memberRates: [
      { vehicle: "Escalade", rate: "$180/hr" },
      { vehicle: "Executive Sprinter", rate: "$275/hr" },
      { vehicle: "Rolls-Royce", rate: "$325/hr" },
    ],
    concierge: [
      "Reservation assistance",
      "Transportation coordination",
      "On-demand support during stay",
    ],
    featured: false,
  },
  {
    name: "Gold",
    icon: Crown,
    tagline: "Best for Frequent Visitors & Seasonal Stays",
    description: "Designed for those who return to Aspen regularly and demand consistent excellence.",
    price: "$2,500",
    priceNote: "per month",
    includedBenefits: [
      "2 ASE airport transfers (Escalade or Sprinter)",
      "6 hours of Escalade hourly service",
    ],
    discounts: [
      "Partner venue bottle service: $250 discount",
      "Exclusive club access included for member",
    ],
    memberRates: [
      { vehicle: "Escalade", rate: "$170/hr" },
      { vehicle: "Executive Sprinter", rate: "$260/hr" },
      { vehicle: "Rolls-Royce", rate: "$300/hr" },
    ],
    concierge: [
      "Dedicated concierge contact",
      "Advance reservation planning",
      "Multi-day itinerary coordination",
    ],
    featured: true,
  },
  {
    name: "Black",
    icon: Gem,
    tagline: "Best for High-Use Clients & Extended Stays",
    description: "The pinnacle of luxury for Aspen's most discerning guests seeking uncompromising service.",
    price: "$6,000",
    priceNote: "per month",
    includedBenefits: [
      "4 ASE airport transfers (any vehicle)",
      "12 hours of hourly service (any vehicle)",
    ],
    discounts: [
      "Partner venue bottle service: $500 discount",
      "Exclusive club access included for member",
    ],
    memberRates: [
      { vehicle: "Escalade", rate: "$160/hr" },
      { vehicle: "Executive Sprinter", rate: "$240/hr" },
      { vehicle: "Rolls-Royce", rate: "$275/hr" },
    ],
    concierge: [
      "Dedicated personal concierge",
      "Proactive planning for events & travel",
      "White-glove coordination",
    ],
    featured: false,
  },
];

const keyFeatures = [
  {
    icon: ArrowRightLeft,
    title: "Rollover Benefits",
    description: "Unused airport transfers and hourly service roll over month to month while membership is active. Stack hours and transfers—no expiration while you're a member.",
  },
  {
    icon: Plane,
    title: "Airport Coverage",
    description: "All transfers include 1 hour of complimentary wait time. Covered airports: ASE, RIL, EGE, and DEN. We monitor your flight and accommodate delays automatically.",
  },
  {
    icon: Users,
    title: "Personal Concierge",
    description: "Every membership includes a personal concierge for reservations, transportation coordination, and itinerary building throughout your stay.",
  },
  {
    icon: Shield,
    title: "Priority Booking",
    description: "Members receive priority black car booking over non-members. All services subject to vehicle availability, weather, and safety considerations.",
  },
];

const faqs = [
  {
    question: "How do memberships work?",
    answer: "VIP Aspen memberships are billed monthly unless prepaid. Each tier includes free transportation services, discounted rates, and a personal concierge. Unused benefits roll over month to month while membership is active.",
  },
  {
    question: "What airports are covered for transfers?",
    answer: "All airport transfers cover Aspen–Pitkin County Airport (ASE), Rifle Garfield County Airport (RIL), Eagle County Regional Airport (EGE), and Denver International Airport (DEN). Each transfer includes 1 hour of complimentary wait time.",
  },
  {
    question: "What happens if my flight is delayed or diverted?",
    answer: "VIP Aspen monitors flights when details are provided. Delays within the 1-hour wait time are automatically accommodated. If a flight diverts, we attempt immediate rebooking when vehicles are available. Extra mileage or time may be billed at member rates.",
  },
  {
    question: "Can I upgrade my membership?",
    answer: "Yes, members may upgrade tiers at any time. Rolled-over benefits move with you when you upgrade. All benefits end immediately if membership is cancelled or unpaid.",
  },
  {
    question: "Do unused benefits expire?",
    answer: "Unused airport transfers and hourly service do not expire while membership is active. They are not transferable and have no cash value. All unused benefits are lost if membership is cancelled or unpaid.",
  },
  {
    question: "Is there a fair use policy?",
    answer: "Memberships are designed for personal and guest use. Excessive or abusive usage may require upgrading to a higher tier or billing at standard charter rates.",
  },
  {
    question: "Can non-members use VIP Aspen services?",
    answer: "Yes! All services are available to non-members at standard rates. Membership provides included transportation, discounted rates, priority booking, and concierge services.",
  },
  {
    question: "What about safety and service decisions?",
    answer: "Chauffeurs control vehicle operation and routing for safety. VIP Aspen may refuse or modify service to ensure safety. Peak periods may require advance notice for booking.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VIP Aspen Membership",
  "description": "Monthly memberships including free transportation, discounted rates, personal concierge, and priority booking for luxury black car service in Aspen, Colorado.",
  "serviceType": "Transportation Membership",
  "areaServed": {
    "@type": "City",
    "name": "Aspen",
    "containedInPlace": {
      "@type": "State",
      "name": "Colorado"
    }
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "telephone": "+19704526636"
  },
  "additionalType": "https://schema.org/MemberProgramTier",
  "termsOfService": "https://www.vipaspen.com/membership"
};

const MembershipPage = () => {
  return (
    <>
      <SEOHead
        title="VIP Aspen Memberships – Monthly Luxury Transportation"
        description="VIP Aspen monthly memberships include free airport transfers, hourly service, discounted rates, and personal concierge. Silver $1,000/mo, Gold $2,500/mo, Black $6,000/mo. Rollover benefits. Priority booking."
        keywords="VIP Aspen membership, Aspen luxury membership, monthly car service Aspen, Aspen concierge membership, luxury lifestyle Aspen, private member club Aspen, Aspen VIP benefits, Aspen transportation membership, Escalade membership Aspen"
        canonicalUrl="/membership"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(membershipFaqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
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
                Membership
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                VIP Aspen <span className="text-gradient-gold">Memberships</span>
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-4">
                Monthly memberships that include free transportation services, discounted rates, and a personal concierge. Members receive priority booking and can roll over unused benefits month to month.
              </p>
              <p className="text-foreground/50 text-sm">
                Memberships are billed monthly unless prepaid.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Become a Member */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
                  Why Become a <span className="text-gradient-gold">VIP Aspen Member</span>
                </h2>
                <div className="prose prose-lg max-w-none space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    Our membership program isn't just about discounts — it's about access and priority. Aspen's peak seasons are among the most competitive in luxury travel. During Christmas and New Year's, FIS World Cup ski races, X Games, and the Food &amp; Wine Classic, demand for luxury transportation surges and vehicles book out weeks in advance. VIP Aspen members receive guaranteed availability during these critical periods, ensuring your plans are never disrupted by last-minute booking shortages.
                  </p>
                  <p>
                    Beyond priority booking, members enjoy exclusive access to <Link to="/aspen-clubs" className="text-primary hover:underline">Aspen's top nightlife venues</Link>, dedicated concierge service for every aspect of your stay, and significantly discounted rates on every ride across our entire fleet. Whether you need a <Link to="/black-car-service" className="text-primary hover:underline">black car for a dinner reservation</Link>, a Sprinter for your group, or <Link to="/executive-protection" className="text-primary hover:underline">executive protection services</Link> for a high-profile visit, your membership ensures you're always first in line.
                  </p>
                  <p>
                    We offer three tiers designed to match every Aspen lifestyle: <strong>Silver at $1,000/month</strong> is perfect for vacationers and short-stay visitors looking to experience VIP service. <strong>Gold at $2,500/month</strong> is built for frequent visitors and seasonal residents who return to Aspen regularly. <strong>Black at $6,000/month</strong> delivers the ultimate experience — unlimited-feel access, a personal concierge on retainer, discounted rates on our <Link to="/rolls-royce-cullinan" className="text-primary hover:underline">chauffeured Rolls Royce Cullinan</Link>, and the highest level of service VIP Aspen offers. Every tier includes complimentary airport transfers, hourly service, and benefits that roll over month to month while your membership remains active.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className={`relative rounded-sm ${
                      tier.featured
                        ? "glass-card border-primary/30 lg:scale-[1.02]"
                        : "glass-card"
                    }`}
                  >
                    {tier.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-gold text-primary-foreground text-xs uppercase tracking-wider px-4 py-1.5 rounded-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Tier Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                          tier.featured ? "bg-gradient-gold" : "bg-primary/10"
                        }`}>
                          <Icon className={`w-7 h-7 ${tier.featured ? "text-primary-foreground" : "text-primary"}`} />
                        </div>

                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">
                          {tier.name}
                        </h2>

                        <p className="text-primary uppercase tracking-[0.15em] text-xs mb-3">
                          {tier.tagline}
                        </p>

                        <p className="text-foreground/60 text-sm leading-relaxed">
                          {tier.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center mb-6 py-4 bg-muted/50 rounded-sm">
                        <p className="font-display text-3xl font-semibold text-gradient-gold">
                          {tier.price}
                        </p>
                        <p className="text-foreground/50 text-xs">
                          {tier.priceNote}
                        </p>
                      </div>

                      {/* Included Each Month */}
                      <div className="mb-5">
                        <p className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                          Included Each Month
                        </p>
                        <ul className="space-y-2">
                          {tier.includedBenefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Member Discounts */}
                      <div className="mb-5">
                        <p className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                          Member Discounts
                        </p>
                        <ul className="space-y-2">
                          {tier.discounts.map((discount) => (
                            <li key={discount} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80 text-sm">{discount}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Member Rates */}
                      <div className="mb-5">
                        <p className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                          Member Rates
                        </p>
                        <div className="space-y-1.5">
                          {tier.memberRates.map((rate) => (
                            <div key={rate.vehicle} className="flex justify-between text-sm">
                              <span className="text-foreground/70">{rate.vehicle}</span>
                              <span className="text-foreground font-medium">{rate.rate}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Concierge */}
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                          Concierge Services
                        </p>
                        <ul className="space-y-2">
                          {tier.concierge.map((service) => (
                            <li key={service} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80 text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Button
                        variant={tier.featured ? "luxury" : "outline"}
                        size="lg"
                        className="w-full"
                        asChild
                      >
                        <a href="#contact">
                          Apply Now
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Member Benefits Comparison */}
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
                Member Benefits at a <span className="text-gradient-gold">Glance</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Compare membership tiers side by side to find the perfect fit for your Aspen lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto overflow-x-auto"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-4 px-4 text-foreground/60 font-medium">Benefit</th>
                    <th className="text-center py-4 px-4 font-display text-foreground">Silver</th>
                    <th className="text-center py-4 px-4 font-display text-primary font-semibold">Gold</th>
                    <th className="text-center py-4 px-4 font-display text-foreground">Black</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Monthly Price</td>
                    <td className="py-3 px-4 text-center text-foreground font-medium">$1,000</td>
                    <td className="py-3 px-4 text-center text-primary font-medium">$2,500</td>
                    <td className="py-3 px-4 text-center text-foreground font-medium">$6,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">ASE Airport Transfers</td>
                    <td className="py-3 px-4 text-center text-foreground">1 round-trip</td>
                    <td className="py-3 px-4 text-center text-primary">2 transfers</td>
                    <td className="py-3 px-4 text-center text-foreground">4 transfers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Hourly Service Included</td>
                    <td className="py-3 px-4 text-center text-foreground">3 hours</td>
                    <td className="py-3 px-4 text-center text-primary">6 hours</td>
                    <td className="py-3 px-4 text-center text-foreground">12 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Vehicle Options</td>
                    <td className="py-3 px-4 text-center text-foreground">Escalade</td>
                    <td className="py-3 px-4 text-center text-primary">Escalade / Sprinter</td>
                    <td className="py-3 px-4 text-center text-foreground">Any Vehicle</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Escalade Rate</td>
                    <td className="py-3 px-4 text-center text-foreground">$180/hr</td>
                    <td className="py-3 px-4 text-center text-primary">$170/hr</td>
                    <td className="py-3 px-4 text-center text-foreground">$160/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Sprinter Rate</td>
                    <td className="py-3 px-4 text-center text-foreground">$275/hr</td>
                    <td className="py-3 px-4 text-center text-primary">$260/hr</td>
                    <td className="py-3 px-4 text-center text-foreground">$240/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Rolls-Royce Rate</td>
                    <td className="py-3 px-4 text-center text-foreground">$325/hr</td>
                    <td className="py-3 px-4 text-center text-primary">$300/hr</td>
                    <td className="py-3 px-4 text-center text-foreground">$275/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Bottle Service Discount</td>
                    <td className="py-3 px-4 text-center text-foreground">$100</td>
                    <td className="py-3 px-4 text-center text-primary">$250</td>
                    <td className="py-3 px-4 text-center text-foreground">$500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70"><Link to="/aspen-clubs" className="text-primary hover:underline">Exclusive Club Access</Link></td>
                    <td className="py-3 px-4 text-center text-foreground">$150/person</td>
                    <td className="py-3 px-4 text-center text-primary">Included</td>
                    <td className="py-3 px-4 text-center text-foreground">Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Rollover Benefits</td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Priority Booking</td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70">Dedicated Concierge</td>
                    <td className="py-3 px-4 text-center text-foreground/50">On-demand</td>
                    <td className="py-3 px-4 text-center text-primary">Dedicated</td>
                    <td className="py-3 px-4 text-center text-foreground">Personal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/70"><Link to="/executive-protection" className="text-primary hover:underline">Executive Protection</Link></td>
                    <td className="py-3 px-4 text-center text-foreground/50">Standard rates</td>
                    <td className="py-3 px-4 text-center text-primary">Priority</td>
                    <td className="py-3 px-4 text-center text-foreground">Priority + Discounted</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Rollover & Airport Rules */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Membership <span className="text-gradient-gold">Policies</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Rollover Rules */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Transportation Rollover Rules
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Unused transfers and hours roll over month to month
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Stack hours and transfers while membership is active
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Benefits do not expire while membership is active
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 shrink-0" />
                      Benefits are not transferable and have no cash value
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 shrink-0" />
                      All unused benefits lost if membership ends
                    </li>
                  </ul>
                </div>

                {/* Airport Rules */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Airport Transfer Rules
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      1 hour complimentary wait time included
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Wait time applies to commercial & private flights
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Covered: ASE, RIL, EGE, DEN
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Additional wait time billed at member hourly rate
                    </li>
                    <li className="flex items-start gap-2">
                      <Plane className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Flight diversions: rebooking attempted when available
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Ready to Join?
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Contact us today to discuss membership options and find the perfect tier for your Aspen lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I'm interested in VIP Aspen membership options." />
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

export default MembershipPage;
