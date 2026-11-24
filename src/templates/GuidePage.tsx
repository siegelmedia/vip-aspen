import { useEffect, useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import { FaqSection, RelatedLinks, plain } from "@/components/site/Shared";
import { toHtml } from "@/components/blocks/ProseSection";
import BookingCTA from "@/components/blocks/BookingCTA";
import { createArticleSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import { TEL_HREF } from "@/data/site";
import type { GuidePageData } from "@/types";

interface GuidePageProps {
  data: GuidePageData;
}

const slugify = (text: string) =>
  plain(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * A guide, laid out like the articles on summitblackcar.com: the photo header
 * with the title and byline, then a table of contents beside the text.
 */
const GuidePage = ({ data }: GuidePageProps) => {
  const schema = createArticleSchema(data);
  const cleanTitle = plain(data.title);
  const breadcrumbs = [
    { name: "Home", url: COMPANY.url },
    { name: "Guides", url: `${COMPANY.url}/guides` },
    { name: cleanTitle, url: `${COMPANY.url}/guides/${data.slug}` },
  ];
  const sections = data.sections.map((s, i) => ({ ...s, id: s.heading ? slugify(s.heading) : `section-${i + 1}` }));
  const toc = sections.filter((s) => s.heading);
  const updated = new Date(data.dateModified + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Highlight the section being read in the table of contents.
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px" },
    );
    document.querySelectorAll("article.prose > section[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [data.slug]);

  return (
    <PageWrapper
      seo={data.seo}
      schemaData={schema}
      faqs={data.faqs}
      breadcrumbs={breadcrumbs}
      ogType="article"
      publishedTime={data.datePublished}
      modifiedTime={data.dateModified}
    >
      <PageHero
        article
        data={{ tagline: data.category, headline: data.title, description: data.excerpt, bgImage: data.heroImage }}
        crumbs={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: cleanTitle }]}
        side={
          <>
            <p className="phero__lede">{data.excerpt}</p>
            <p className="byline" style={{ marginTop: ".9rem" }}>
              By {COMPANY.name} &middot; Updated <time dateTime={data.dateModified}>{updated}</time>
              {data.readTime ? <> &middot; {data.readTime}</> : null}
            </p>
          </>
        }
      />

      <section className="sec body body--article">
        <div className="wrap body__grid">
          <aside className="toc">
            <div className="toc__in">
              {toc.length > 0 && (
                <>
                  <p className="toc__label">In this guide</p>
                  <nav aria-label="In this guide">
                    {toc.map((s) => (
                      <a key={s.id} href={`#${s.id}`} className={active === s.id ? "is-on" : undefined}>
                        {plain(s.heading!)}
                      </a>
                    ))}
                    {data.faqs && data.faqs.length > 0 && <a href="#faq">Frequently asked questions</a>}
                  </nav>
                </>
              )}
              <div className="toc__cta">
                <p>Need transportation for this trip?</p>
                <a className="btn btn--dark btn--sm" href="#booking">
                  Instant Quote
                </a>
                <a className="toc__tel" href={TEL_HREF}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </aside>
          <article className="prose">
            {data.keyTakeaways && data.keyTakeaways.length > 0 && (
              <div className="takeaways">
                <h2>The short answer</h2>
                <ul>
                  {data.keyTakeaways.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="prose--lead" dangerouslySetInnerHTML={{ __html: toHtml(data.intro) }} />
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                {s.heading && <h2>{plain(s.heading)}</h2>}
                <div dangerouslySetInnerHTML={{ __html: toHtml(s.body) }} />
              </section>
            ))}
          </article>
        </div>
      </section>

      <FaqSection faqs={data.faqs} paper />

      <RelatedLinks items={data.relatedServices} />

      <BookingCTA id="booking" variant="widget" serviceType={`guide-${data.slug}`} heading="Book Your {{Aspen Car Service}}" />
    </PageWrapper>
  );
};

export default GuidePage;
