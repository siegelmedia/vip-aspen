import { Fragment } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import { CORSA, TEL_HREF } from "@/data/site";
import { CarIcon } from "@/components/site/icons";
import type { FAQ, RelatedService } from "@/types";
import type { GuideSummary } from "@/data/guides";

/** Removes the {{ }} accent markers used in page data. */
export const plain = (text: string) => text.replace(/\{\{|\}\}/g, "");

/**
 * A heading from page data, where {{ }} marks the accented words:
 * "Your Estate, {{Protected}}" renders "Protected" in the accent colour.
 */
export const Accent = ({ text }: { text: string }) => {
  const parts = text.split(/\{\{(.+?)\}\}/g);
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>))}
    </>
  );
};

/** An internal link through the router, or a plain link for anything else (#anchor, tel:, https:). */
export const SmartLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) =>
  href.startsWith("/") ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

/**
 * Questions as native <details>: every answer is in the HTML whether open or
 * not, and the list works without JavaScript. The first one starts open.
 */
export const FaqList = ({ faqs }: { faqs: FAQ[] }) => (
  <div className="faq">
    {faqs.map((f, i) => (
      <details key={f.question} open={i === 0}>
        <summary>
          <h3>{f.question}</h3>
          <i aria-hidden="true" />
        </summary>
        <div className="faq__a">{f.answer}</div>
      </details>
    ))}
  </div>
);

interface FaqSectionProps {
  faqs?: FAQ[];
  /** May carry {{ }} accent markers. */
  heading?: string;
  eyebrow?: string;
  paper?: boolean;
}

/** The whole FAQ section: label, heading and the questions in a narrow column. */
export const FaqSection = ({
  faqs,
  heading = "Frequently Asked {{Questions}}",
  eyebrow = "Answers",
  paper = false,
}: FaqSectionProps) => {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className={`sec${paper ? " sec--paper" : ""}`} id="faq">
      <div className="wrap wrap--narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">
          <Accent text={heading} />
        </h2>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
};

/** A page's related links as a two-column list. */
export const RelatedLinks = ({
  items,
  heading = "Related services",
  paper = false,
}: {
  items?: RelatedService[];
  heading?: string;
  paper?: boolean;
}) => {
  if (!items || items.length === 0) return null;
  return (
    <section className={`sec${paper ? " sec--paper" : ""}`}>
      <div className="wrap">
        <p className="eyebrow">Keep exploring</p>
        <h2 className="h2">{heading}</h2>
        <nav className="rel" aria-label="Related services">
          {items.map((r) => (
            <Link key={r.href} to={r.href}>
              <span>{r.label}</span>
              <i aria-hidden="true">&rarr;</i>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

/** Guide cards, three across on wide screens. */
export const GuideCards = ({
  guides,
  h = "h3",
  excerpt = false,
}: {
  guides: GuideSummary[];
  h?: "h2" | "h3";
  /** Also show each guide summary under its title. */
  excerpt?: boolean;
}) => {
  const H = h;
  return (
    <div className="cards3">
      {guides.map((g) => (
        <Link key={g.slug} className="gcard" to={`/guides/${g.slug}`}>
          <div className="gcard__img">
            <img src={g.image} alt={plain(g.title)} loading="lazy" decoding="async" />
          </div>
          <div className="gcard__body">
            <p className="gcard__meta">
              {g.category} &middot; {g.readTime}
            </p>
            <H>{plain(g.title)}</H>
            {excerpt && <p style={{ color: "var(--muted)", fontSize: ".93rem" }}>{g.excerpt}</p>}
            <span className="go">
              Read guide <i aria-hidden="true">&rarr;</i>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

/** The closing band with the round Book Online button. */
export const CtaRound = ({
  title = "Your Chauffeur Is {{One Call Away}}",
  text = "Airport pickups, ski transfers, and nights out — reserved in minutes, confirmed with a flat rate, available around the clock. Book online or call",
}: {
  title?: string;
  text?: string;
}) => (
  <section className="cta">
    <div className="wrap">
      <div className="cta__in">
        <div>
          <h2 className="h2">
            <Accent text={title} />
          </h2>
          <p className="lead">
            {text} <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a>.
          </p>
        </div>
        <a className="cta__round" href={CORSA.bookUrl}>
          <CarIcon />
          <span>Book Online</span>
        </a>
      </div>
    </div>
  </section>
);
