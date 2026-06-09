import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionContainer from "@/components/layout/SectionContainer";
import ProseSection from "@/components/blocks/ProseSection";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import RelatedServices from "@/components/blocks/RelatedServices";
import BookingCTA from "@/components/blocks/BookingCTA";
import { createArticleSchema } from "@/lib/schema";
import { renderGoldText } from "@/lib/goldText";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/data/constants";
import type { GuidePageData } from "@/types";

interface GuidePageProps {
  data: GuidePageData;
}

const GuidePage = ({ data }: GuidePageProps) => {
  const schema = createArticleSchema(data);
  const cleanTitle = data.title.replace(/\{\{|\}\}/g, "");
  const breadcrumbs = [
    { name: "Home", url: COMPANY.url },
    { name: "Guides", url: `${COMPANY.url}/guides` },
    { name: cleanTitle, url: `${COMPANY.url}/guides/${data.slug}` },
  ];

  return (
    <PageWrapper
      seo={data.seo}
      schemaData={schema}
      faqs={data.faqs}
      breadcrumbs={breadcrumbs}
    >
      {/* Article header */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-1.5 text-sm text-foreground/50 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/guides" className="hover:text-primary transition-colors">Guides</Link>
            </nav>
            <motion.div {...fadeInUp}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                {data.category}
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 leading-tight">
                {renderGoldText(data.title)}
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-5">
                {data.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
                {data.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    {data.readTime}
                  </span>
                )}
                <span>Updated {new Date(data.dateModified + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      {data.keyTakeaways && data.keyTakeaways.length > 0 && (
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto glass-card p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              The short answer
            </h2>
            <ul className="space-y-3">
              {data.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      {/* Intro */}
      <SectionContainer className="py-10 md:py-14">
        <ProseSection content={{ body: data.intro }} />
      </SectionContainer>

      {/* Body sections */}
      {data.sections.map((section, i) => (
        <SectionContainer
          key={section.heading || i}
          className="py-8 md:py-10"
          background={i % 2 === 1 ? "muted" : "default"}
        >
          <ProseSection content={{ heading: section.heading, body: section.body }} />
        </SectionContainer>
      ))}

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <SectionContainer background="muted">
          <FAQAccordion faqs={data.faqs} />
        </SectionContainer>
      )}

      <RelatedServices items={data.relatedServices} />

      {/* Conversion CTA */}
      <SectionContainer id="booking" background="gradient">
        <BookingCTA
          variant="widget"
          serviceType={`guide-${data.slug}`}
          heading="Book Your {{Aspen Car Service}}"
        />
      </SectionContainer>
    </PageWrapper>
  );
};

export default GuidePage;
