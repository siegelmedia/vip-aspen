import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionContainer from "@/components/layout/SectionContainer";
import { guideSummaries } from "@/data/guides";
import { COMPANY } from "@/data/constants";
import { fadeInUp, staggerChild } from "@/lib/animations";
import type { SEOData } from "@/types";

const seo: SEOData = {
  title: "Aspen Travel & Transportation Guides",
  description:
    "Practical guides to getting to and around Aspen: how to get from Denver, which airport to fly into (ASE vs. Eagle), whether you need a car, and more — from VIP Aspen.",
  keywords:
    "Aspen travel guide, Aspen transportation guide, how to get to Aspen, getting around Aspen, Aspen airport guide",
  canonicalUrl: "/guides",
  ogImage: "https://www.vipaspen.com/og-image.jpg",
};

const breadcrumbs = [
  { name: "Home", url: COMPANY.url },
  { name: "Guides", url: `${COMPANY.url}/guides` },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aspen Travel & Transportation Guides",
  itemListElement: guideSummaries.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.title.replace(/\{\{|\}\}/g, ""),
    url: `${COMPANY.url}/guides/${g.slug}`,
  })),
};

const GuidesIndex = () => {
  return (
    <PageWrapper seo={seo} schemaData={itemListSchema} breadcrumbs={breadcrumbs}>
      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Aspen Travel Guides
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
              Getting To &amp; Around <span className="text-gradient-gold">Aspen</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Honest, practical answers to the questions every Aspen visitor asks —
              written by a team that drives these roads every day.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionContainer className="pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guideSummaries.map((guide, index) => (
            <motion.div key={guide.slug} {...staggerChild(index)}>
              <Link
                to={`/guides/${guide.slug}`}
                className="glass-card p-7 flex flex-col h-full group hover:border-primary/30 transition-colors"
              >
                <p className="text-primary text-xs uppercase tracking-widest mb-3">
                  {guide.category}
                </p>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {guide.title.replace(/\{\{|\}\}/g, "")}
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5 flex-grow">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  {guide.readTime && (
                    <span className="flex items-center gap-1.5 text-foreground/40 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </PageWrapper>
  );
};

export default GuidesIndex;
