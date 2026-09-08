import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { staggerChild, fadeInUp } from "@/lib/animations";
import SectionHeader from "@/components/layout/SectionHeader";
import { guideSummaries } from "@/data/guides";

/** Three most-timely guides — internal links to the long-form content that
 *  ranks for informational "how do I get to Aspen" searches. */
const HomeGuides = () => {
  const featured = guideSummaries.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Aspen Travel Guides"
          heading="Plan Your Trip Like a {{Local}}"
          subtitle="Honest answers to the questions every Aspen visitor asks, written by the team that drives these roads every day."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((guide, index) => (
            <motion.div key={guide.slug} {...staggerChild(index)}>
              <Link
                to={`/guides/${guide.slug}`}
                className="group glass-card flex flex-col h-full overflow-hidden hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-luxury transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={guide.image}
                    alt={guide.title.replace(/\{\{|\}\}/g, "")}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow -mt-8 relative">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                    {guide.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title.replace(/\{\{|\}\}/g, "")}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-foreground/40 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read Guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="text-center mt-10">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-primary/80 transition-colors"
          >
            All Aspen Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGuides;
