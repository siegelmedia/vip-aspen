import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Accepted so existing callers compile; no longer emitted (search engines ignore the keywords meta tag). */
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  robots?: string;
  /** Open Graph type — "article" for guides, default "website" */
  ogType?: "website" | "article";
  /** ISO dates, emitted as article:published_time / article:modified_time */
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  schemaData,
  robots,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: SEOHeadProps) => {
  const defaultOgImage = "https://www.vipaspen.com/og-image.jpg";
  // Append the brand once: titles that already name VIP Aspen stay as written.
  const fullTitle = /VIP Aspen/i.test(title) ? title : `${title} | VIP Aspen`;
  const baseUrl = "https://www.vipaspen.com";

  useEffect(() => {
    // Readiness flag for the Prerender.io fallback path (workers/prerender).
    // This component mounts inside the resolved route, after its template/data
    // and synchronous Helmet tags have committed; the build-time HTML already
    // carries these same tags (data-rh), which Helmet adopts rather than
    // duplicates. Two frames so framer-motion has applied its (instant, see
    // lib/prerender) animation end states before the renderer takes the
    // snapshot. The timer is a safety net for environments that throttle
    // requestAnimationFrame, so the flag can never stay false and stall the
    // capture.
    const w = window as Window & { prerenderReady?: boolean };
    const ready = () => {
      w.prerenderReady = true;
    };
    const timer = window.setTimeout(ready, 1500);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.clearTimeout(timer);
        ready();
      }),
    );
    return () => {
      window.clearTimeout(timer);
      (window as Window & { prerenderReady?: boolean }).prerenderReady = false;
    };
  }, [canonicalUrl]);

  return (
    <Helmet defer={false}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      {title === "Page Not Found" && <meta name="prerender-status-code" content="404" />}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
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
