import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeInUpAnimate, heroImage } from "@/lib/animations";
import { renderGoldText } from "@/lib/goldText";
import type { HeroData } from "@/types";

interface PageHeroProps {
  data: HeroData;
  /** Full-viewport dark hero (for property watch) vs standard */
  variant?: "standard" | "cinematic";
  /** Optional content rendered below the hero text (e.g. booking widget) */
  children?: ReactNode;
}

const PageHero = ({ data, variant = "standard", children }: PageHeroProps) => {
  const hasTwoColumns = !!data.image && variant === "standard" && !children;

  return (
    <section
      className={`relative ${
        variant === "cinematic"
          ? "pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh] flex items-center"
          : "pt-32 pb-16 md:pt-40 md:pb-24"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={
            hasTwoColumns
              ? "grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              : ""
          }
        >
          <motion.div
            {...fadeInUpAnimate}
            className={hasTwoColumns ? "" : "text-center max-w-3xl mx-auto"}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              {data.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
              {renderGoldText(data.headline)}
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
              {data.description}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                hasTwoColumns ? "" : "justify-center"
              }`}
            >
              {data.ctaLabel && (
                <Button variant="luxury" size="lg" asChild>
                  {data.ctaLink?.startsWith("/") ? (
                    <Link to={data.ctaLink}>{data.ctaLabel}</Link>
                  ) : (
                    <a href={data.ctaLink || "#booking"}>{data.ctaLabel}</a>
                  )}
                </Button>
              )}
              {data.secondaryCta && (
                <Button variant="outline" size="lg" asChild>
                  {data.secondaryCta.link.startsWith("/") ? (
                    <Link to={data.secondaryCta.link}>
                      {data.secondaryCta.label}
                    </Link>
                  ) : (
                    <a href={data.secondaryCta.link}>
                      {data.secondaryCta.label}
                    </a>
                  )}
                </Button>
              )}
            </div>
          </motion.div>

          {hasTwoColumns && data.image && (
            <motion.div {...heroImage} className="glass-card overflow-hidden">
              <img
                src={data.image}
                alt={data.tagline}
                className="w-full h-full object-cover aspect-[4/3] md:aspect-[3/4]"
                loading="eager"
              />
            </motion.div>
          )}
        </div>

        {children && (
          <motion.div
            {...heroImage}
            className="mt-10 max-w-4xl mx-auto"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
