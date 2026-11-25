import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import { CORSA, TEL_HREF, WHATSAPP_URL, footerColumns, footerUtilityLinks } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/site/icons";
import logo from "@/assets/vip-aspen-logo.webp";

/**
 * Footer sitemap plus the phone action bar ("dock") that slides up once the
 * visitor has scrolled past the top of the page. The dock steps aside while the
 * opened homepage booking form is on screen, so it never covers the form's
 * fields or its Continue button.
 */
const Footer = () => {
  const [dock, setDock] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const card = document.querySelector(".qb.is-open");
      let formOnScreen = false;
      if (card) {
        const r = card.getBoundingClientRect();
        formOnScreen = r.bottom > 0 && r.top < window.innerHeight;
      }
      setDock(window.scrollY > 480 && !formOnScreen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="ftr">
        <div className="wrap ftr__top">
          <div className="ftr__brand">
            <img src={logo} width={305} height={127} alt="VIP Aspen" loading="lazy" />
            <p>
              Aspen's premier luxury car service and VIP concierge. Law enforcement-owned, with professional
              chauffeurs. Available 24/7.
            </p>
            <p className="ftr__contact">
              <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a>
              <br />
              <a href={WHATSAPP_URL} rel="noopener">
                WhatsApp
              </a>
              <br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
            <div className="ftr__social">
              <a href={COMPANY.social.facebook} rel="noopener" aria-label="VIP Aspen on Facebook">
                <FacebookIcon />
              </a>
              <a href={COMPANY.social.instagram} rel="noopener" aria-label="VIP Aspen on Instagram">
                <InstagramIcon />
              </a>
            </div>
            <a className="btn btn--brass btn--sm" href={CORSA.bookUrl}>
              Get an Instant Quote
            </a>
          </div>
          {footerColumns.map((col) => (
            <div className="ftr__col" key={col.title}>
              <p className="ftr__label">{col.title}</p>
              {col.links.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="wrap ftr__seo">
          <p>
            VIP Aspen is Aspen, Colorado's premier luxury car service and VIP concierge. We provide chauffeured Rolls
            Royce Cullinan, Cadillac Escalade, and Executive Sprinter service for airport transfers from ASE, Eagle
            (EGE), Rifle, and Denver (DEN) airports, private jet and FBO tarmac transfers, and resort routes including
            Denver to Aspen and Vail to Aspen. Our services span black car and hourly chauffeur, multi-day and concierge
            driving, private ski transfers across Aspen Mountain, Highlands, Buttermilk, and Snowmass, plus wedding,
            corporate, and special-event transportation, VIP nightlife access, security drivers, and executive
            protection. Serving Aspen, Snowmass Village, Basalt, Woody Creek, Carbondale, and the Roaring Fork Valley.
            VIP Aspen is law enforcement-owned, and every chauffeur is background-checked and trained. Available
            24/7: <a href={TEL_HREF}>call {COMPANY.phoneDisplay}</a>.
          </p>
        </div>
        <div className="wrap ftr__base">
          <address itemScope itemType="https://schema.org/PostalAddress">
            &copy; {new Date().getFullYear()} {COMPANY.name} &middot;{" "}
            <span itemProp="streetAddress">{COMPANY.address.street}</span>,{" "}
            <span itemProp="addressLocality">{COMPANY.address.city}</span>,{" "}
            <span itemProp="addressRegion">{COMPANY.address.state}</span>{" "}
            <span itemProp="postalCode">{COMPANY.address.zip}</span>
          </address>
          <p>
            {footerUtilityLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link to={link.href}>{link.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </footer>

      <div className={`dock${dock ? " is-on" : ""}`} aria-label="Quick actions">
        <a href={TEL_HREF}>Call</a>
        <a href={WHATSAPP_URL} rel="noopener">
          WhatsApp
        </a>
        <a className="dock__book" href={CORSA.bookUrl}>
          Book Now
        </a>
      </div>
    </>
  );
};

export default Footer;
