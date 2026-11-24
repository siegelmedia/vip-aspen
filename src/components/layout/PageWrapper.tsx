import type { ReactNode } from "react";
import SiteShell from "@/components/site/SiteShell";
import SEOHead from "@/components/SEOHead";
import type { SEOData, FAQ } from "@/types";
import { combineSchema, createFAQSchema, createBreadcrumbSchema } from "@/lib/schema";

interface PageWrapperProps {
  children: ReactNode;
  seo: SEOData;
  schemaData?: object;
  faqs?: FAQ[];
  breadcrumbs?: { name: string; url: string }[];
  /** Open Graph type: guides are articles, everything else a website page */
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

const PageWrapper = ({
  children,
  seo,
  schemaData,
  faqs,
  breadcrumbs,
  ogType,
  publishedTime,
  modifiedTime,
}: PageWrapperProps) => {
  // One @graph per page: page schema + FAQPage + BreadcrumbList, all in the
  // synchronous Helmet so the build-time HTML always carries it.
  const schema = combineSchema(
    schemaData,
    faqs && faqs.length > 0 && createFAQSchema(faqs),
    breadcrumbs && breadcrumbs.length > 0 && createBreadcrumbSchema(breadcrumbs),
  );

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        ogImage={seo.ogImage}
        schemaData={schema}
        ogType={ogType}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />
      <SiteShell>{children}</SiteShell>
    </>
  );
};

export default PageWrapper;
