import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY } from "@/data/constants";
import {
  CORSA,
  TEL_HREF,
  WHATSAPP_URL,
  companyLinks,
  featuredServices,
  fleetLinks,
  moreServices,
  transferGroups,
} from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/site/icons";
import logo from "@/assets/vip-aspen-logo.webp";

/**
 * Site header in the Summit Black Car layout: logo, wide menus from 1300 px,
 * phone and WhatsApp, a Book Now pill, and a menu button that opens the full
 * drawer on smaller screens.
 *
 * Every menu link is in the HTML at all times (the panels are shown and hidden
 * with CSS), so crawlers and the build-time render see the whole navigation.
 */
const Header = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  /** After a menu link is followed the pointer is still over the menu: keep the panels shut until it leaves. */
  const [suppress, setSuppress] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A new page: close the drawer.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // While the drawer is open the page behind is inert, so keyboard focus stays in the header and the drawer.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const behind = document.querySelectorAll<HTMLElement>("#main, .ftr, .dock");
    behind.forEach((el) => (open ? el.setAttribute("inert", "") : el.removeAttribute("inert")));
    if (!open) return;
    const first = drawer.current?.querySelector<HTMLElement>("summary, a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 1300px)");
    const onWide = (m: MediaQueryListEvent) => m.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  useEffect(
    () => () => {
      document.body.classList.remove("menu-open");
      document.querySelectorAll("#main, .ftr, .dock").forEach((el) => el.removeAttribute("inert"));
    },
    [],
  );

  const followed = () => {
    setSuppress(true);
    (document.activeElement as HTMLElement | null)?.blur?.();
  };

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`hdr${solid || open ? " is-solid" : ""}`} id="hdr">
        <div className="hdr__in">
          <Link className="hdr__logo" to="/" aria-label="VIP Aspen home">
            <img src={logo} width={305} height={127} alt="VIP Aspen" />
          </Link>

          <nav
            className={`nav${suppress ? " is-suppressed" : ""}`}
            aria-label="Main"
            onMouseLeave={() => setSuppress(false)}
            onClick={(e) => (e.target as Element).closest("a") && followed()}
          >
            <div className="nav__item has-panel">
              <Link className="nav__link" to="/black-car-service" aria-haspopup="true">
                Services
              </Link>
              <div className="panel panel--wide">
                <div className="panel__cols">
                  <div className="panel__core">
                    <p className="panel__label">Most requested</p>
                    {featuredServices.map((s) => (
                      <Link key={s.href} className="panel__big" to={s.href}>
                        <strong>{s.label}</strong>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="panel__label">More services</p>
                    <div className="panel__list">
                      {moreServices.map((s) => (
                        <Link key={s.href} to={s.href}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav__item has-panel">
              <Link className="nav__link" to="/aspen-airport-transfer" aria-haspopup="true">
                Transfers
              </Link>
              <div className="panel panel--wide">
                <div className="panel__cols panel__cols--3">
                  {transferGroups.map((g) => (
                    <div key={g.heading}>
                      <p className="panel__label">{g.heading}</p>
                      <div className="panel__list">
                        {g.links.map((l) => (
                          <Link key={l.href} to={l.href}>
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav__item has-panel has-panel--own">
              <Link className="nav__link" to="/rolls-royce-cullinan" aria-haspopup="true">
                Fleet
              </Link>
              <div className="panel panel--own">
                <div className="panel__list">
                  {fleetLinks.map((l) => (
                    <Link key={l.href} to={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav__item">
              <Link className="nav__link" to="/guides">
                Guides
              </Link>
            </div>

            <div className="nav__item has-panel has-panel--own">
              <Link className="nav__link" to="/about" aria-haspopup="true">
                About
              </Link>
              <div className="panel panel--own">
                <div className="panel__list">
                  {companyLinks.map((l) => (
                    <Link key={l.href} to={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hdr__cta">
            <a className="hdr__contact" href={TEL_HREF} aria-label={`Call ${COMPANY.phoneDisplay}`}>
              <PhoneIcon />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
            <a
              className="hdr__contact hdr__contact--wa"
              href={WHATSAPP_URL}
              rel="noopener"
              aria-label="Message us on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
            <a className="btn btn--brass btn--sm hdr__book" href={CORSA.bookUrl}>
              Book Now
            </a>
            <button
              ref={burger}
              className="burger"
              id="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer" ref={drawer} hidden={!open}>
        <nav aria-label="Mobile">
          <details>
            <summary>Services</summary>
            {[...featuredServices, ...moreServices].map((s) => (
              <Link key={s.href} to={s.href}>
                {s.label}
              </Link>
            ))}
          </details>
          <details>
            <summary>Transfers</summary>
            {transferGroups.map((g) => (
              <div key={g.heading}>
                <p>{g.heading}</p>
                {g.links.map((l) => (
                  <Link key={l.href} to={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </details>
          <details>
            <summary>Fleet</summary>
            {fleetLinks.map((l) => (
              <Link key={l.href} to={l.href}>
                {l.label}
              </Link>
            ))}
          </details>
          <Link className="drawer__top" to="/guides">
            Guides
          </Link>
          <Link className="drawer__top" to="/about">
            About
          </Link>
          <Link className="drawer__top" to="/membership">
            Membership
          </Link>
          <Link className="drawer__top" to="/contact">
            Contact
          </Link>
        </nav>
        <div className="drawer__cta">
          <a className="btn btn--brass" href={CORSA.bookUrl}>
            Get an Instant Quote
          </a>
          <a className="btn btn--line" href={TEL_HREF}>
            Call {COMPANY.phoneDisplay}
          </a>
          <a className="btn btn--line" href={WHATSAPP_URL} rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
