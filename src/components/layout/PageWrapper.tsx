import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import type { SEOData, FAQ } from "@/types";
import { createFAQSchema, createBreadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";

interface PageWrapperProps {
  children: ReactNode;
  seo: SEOData;
  schemaData?: object;
  faqs?: FAQ[];
  breadcrumbs?: { name: string; url: string }[];
}

const PageWrapper = ({
  children,
  seo,
  schemaData,
  faqs,
  breadcrumbs,
}: PageWrapperProps) => {
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        ogImage={seo.ogImage}
        schemaData={schemaData}
      />
      {faqs && faqs.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(createFAQSchema(faqs))}
          </script>
        </Helmet>
      )}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(createBreadcrumbSchema(breadcrumbs))}
          </script>
        </Helmet>
      )}

      <main className="min-h-screen bg-background">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PageWrapper;
