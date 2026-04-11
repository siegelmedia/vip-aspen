import { motion } from "framer-motion";
import { Check, Crown, Star, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    tagline: "Perfect for Vacationers",
    description: "Ideal for short-term visitors looking to experience Aspen in style.",
    price: "Contact Us",
    priceNote: "for seasonal rates",
    benefits: [
      "10% off black car service",
      "1 round-trip ASE airport transfer",
      "Access to partner venues",
      "Concierge support during your stay",
    ],
    featured: false,
  },
  {
    name: "Gold",
    icon: Crown,
    tagline: "For Frequent Visitors",
    description: "Designed for those who return to Aspen regularly and demand consistent excellence.",
    price: "Contact Us",
    priceNote: "for annual membership",
    benefits: [
      "20% off all black car services",
      "Priority booking for all services",
      "Exclusive access to private events",
      "Complimentary bottle service upgrades",
      "Personal concierge available 24/7",
      "VIP entry to partner clubs & venues",
    ],
    featured: true,
  },
  {
    name: "Black",
    icon: Gem,
    tagline: "Ultimate Exclusivity",
    description: "The pinnacle of luxury for Aspen's most discerning residents and elite guests.",
    price: "By Invitation",
    priceNote: "exclusive application",
    benefits: [
      "30% off all VIP Aspen services",
      "Guaranteed availability 24/7/365",
      "Private jet & helicopter coordination",
      "Dedicated personal protection team",
      "Unlimited bottle service at partners",
      "Access to ultra-exclusive experiences",
      "Private chef & event planning",
      "White-glove concierge on retainer",
    ],
    featured: false,
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Membership
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Join the <span className="text-gradient-gold">Inner Circle</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the membership tier that fits your Aspen lifestyle. All services remain available to non-members at standard rates.
          </p>
        </motion.div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    ? "glass-card border-primary/30"
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

                <div className="p-8 md:p-10">
                  {/* Tier Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      tier.featured ? "bg-gradient-gold" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-8 h-8 ${tier.featured ? "text-primary-foreground" : "text-primary"}`} />
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                      {tier.name}
                    </h3>

                    <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">
                      {tier.tagline}
                    </p>

                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="luxury-divider mb-8" />

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <p className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold mb-1">
                      {tier.price}
                    </p>
                    <p className="text-foreground/50 text-xs">
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={tier.featured ? "luxury" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">
                      {tier.name === "Black" ? "Request Invitation" : "Apply Now"}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Membership;
