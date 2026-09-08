import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  robots?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  schemaData,
  robots,
}: SEOHeadProps) => {
  const defaultOgImage = "https://www.vipaspen.com/og-image.jpg";
  const fullTitle = `${title} | VIP Aspen`;
  const baseUrl = "https://www.vipaspen.com";

  useEffect(() => {
    // This component mounts inside the resolved route, after its template/data
    // and synchronous Helmet tags have committed. Never capture an empty root
    // in the gap between starting React and resolving a lazy page.
    document.querySelectorAll("[data-seo-fallback]").forEach((tag) => tag.remove());
    (window as Window & { prerenderReady?: boolean }).prerenderReady = true;
    return () => {
      (window as Window & { prerenderReady?: boolean }).prerenderReady = false;
    };
  }, [canonicalUrl]);

  return (
    <Helmet defer={false}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {robots && <meta name="robots" content={robots} />}
      {title === "Page Not Found" && <meta name="prerender-status-code" content="404" />}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={`${baseUrl}${canonicalUrl}`} />}
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="VIP Aspen — Luxury Car Service with Rolls Royce Cullinan" />
      <meta property="og:site_name" content="VIP Aspen" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
