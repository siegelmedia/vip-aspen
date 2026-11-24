import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import { TEL_HREF } from "@/data/site";
import { Accent, SmartLink } from "@/components/site/Shared";
import fallbackImage from "@/assets/cullinan-mountain-road.webp";
import type { HeroData } from "@/types";

export interface Crumb {
  name: string;
  /** Omit on the last crumb (the page itself). */
  href?: string;
}

interface PageHeroProps {
  data: HeroData;
  /** Breadcrumb trail; defaults to Home / the page's tagline. */
  crumbs?: Crumb[];
  /** Guides: slightly smaller title. */
  article?: boolean;
  /** Replaces the description and buttons on the right (guides show a byline there). */
  side?: ReactNode;
  /** False hides the two buttons. */
  cta?: boolean;
}

/**
 * Interior page header, as on summitblackcar.com: the photo fills the width,
 * darkened toward the bottom, and the text sits on it. From 1100 px the
 * breadcrumbs are at the top, the title on the left and the description and
 * buttons on the right, both on the bottom edge of the photo; on phones a strip
 * of photo shows under the menu bar, then the text.
 *
 * The words inside {{ }} in a headline take the gold accent.
 */
const PageHero = ({ data, crumbs, article = false, side, cta = true }: PageHeroProps) => {
  const image = data.bgImage || data.image || fallbackImage;
  const trail: Crumb[] = crumbs || [{ name: "Home", href: "/" }, { name: data.tagline }];
  const primary = { label: data.ctaLabel || "Instant Quote", href: data.ctaLink || "#booking" };
  const secondary = data.secondaryCta
    ? { label: data.secondaryCta.label, href: data.secondaryCta.link }
    : { label: `Call ${COMPANY.phoneDisplay}`, href: TEL_HREF };

  return (
    <section className={`phero${article ? " phero--article" : ""}`}>
      <div className="phero__media">
        <img src={image} alt={data.tagline} decoding="async" {...{ fetchpriority: "high" }} />
      </div>
      <div className="wrap phero__in">
        {trail.length > 1 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {trail.map((c, i) =>
              i < trail.length - 1 && c.href ? (
                <span key={c.name} style={{ display: "contents" }}>
                  <Link to={c.href}>{c.name}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ) : (
                <span key={c.name} aria-current="page">
                  {c.name}
                </span>
              ),
            )}
          </nav>
        )}
        <div className="phero__grid">
          <div className="phero__head">
            <p className="eyebrow">{data.tagline}</p>
            <h1>
              <Accent text={data.headline} />
            </h1>
          </div>
          <div className="phero__side">
            {side ?? (
              <>
                {data.description && <p className="phero__lede">{data.description}</p>}
                {cta && (
                  <div className="btns">
                    <SmartLink className="btn btn--brass" href={primary.href}>
                      <span>{primary.label}</span>
                    </SmartLink>
                    <SmartLink className="btn btn--line" href={secondary.href}>
                      <span>{secondary.label}</span>
                    </SmartLink>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
