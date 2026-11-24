import { Link } from "react-router-dom";
import { COMPANY, WHATSAPP_NUMBER } from "@/data/constants";
import { TEL_HREF } from "@/data/site";
import { Accent } from "@/components/site/Shared";
import BookCard from "@/components/site/BookCard";
import BookingForm from "@/components/BookingForm";

interface BookingCTAProps {
  /**
   * "widget" = the Corsa booking form (rides), "form" = the inquiry form
   * (security and access services, which are not a car pickup),
   * "contact-only" = call, WhatsApp and email.
   */
  variant?: "form" | "widget" | "contact-only";
  serviceType?: string;
  /** May carry {{ }} accent markers. */
  heading?: string;
  subheading?: string;
  submitLabel?: string;
  /** Anchor for "Book" links on the page, usually "booking". */
  id?: string;
}

const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * The booking band: a full-width black section. For rides it holds the Corsa
 * form on a white card beside three short steps; for security and access
 * services, the inquiry form; otherwise the three ways to reach dispatch.
 */
const BookingCTA = ({
  variant = "widget",
  serviceType,
  heading = "Ready to {{Book}}?",
  subheading,
  submitLabel,
  id,
}: BookingCTAProps) => {
  const subject = serviceType ? serviceType.replace(/-/g, " ") : "your services";

  if (variant === "contact-only") {
    return (
      <section className="bookband bookband--solo" id={id}>
        <div className="wrap bookband__grid">
          <div className="bookband__copy">
            <p className="eyebrow">Reserve</p>
            <h2 className="h2">
              <Accent text={heading} />
            </h2>
            <p className="lead">
              {subheading ||
                "All bookings are handled directly by our team. Call, email, or message us to get started."}
            </p>
            <div className="reach">
              <a href={TEL_HREF}>
                <b>Call or text</b>
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <a href={whatsappLink(`Hello, I'm interested in ${subject}.`)} target="_blank" rel="noopener noreferrer">
                <b>WhatsApp</b>
                <span>Message us</span>
              </a>
              <a href={`mailto:${COMPANY.email}`}>
                <b>Email</b>
                <span>{COMPANY.email}</span>
              </a>
            </div>
            <p className="note" style={{ color: "var(--mute-d)" }}>
              Available 24/7. All inquiries are confidential.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bookband" id={id}>
      <div className="wrap bookband__grid">
        <div className="bookband__copy">
          <p className="eyebrow">{variant === "form" ? "Inquire" : "Reserve"}</p>
          <h2 className="h2">
            <Accent text={heading} />
          </h2>
          <p className="lead">
            {subheading ||
              (variant === "form"
                ? "Tell us about your needs and we'll get back to you promptly."
                : "Select your vehicle, date, and route — confirmed in minutes. No surge pricing, available 24/7.")}
          </p>
          {variant === "widget" && (
            <ol className="steps">
              <li>
                <b>Request</b>
                <span>Tell us your route, date, and vehicle preference.</span>
              </li>
              <li>
                <b>Confirm</b>
                <span>Receive a flat, all-inclusive quote and your chauffeur's details.</span>
              </li>
              <li>
                <b>Ride</b>
                <span>We track your flight and handle every detail door to door.</span>
              </li>
            </ol>
          )}
          <p className="lead">
            Prefer to speak with us directly? Call or text <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a>,{" "}
            <a href={whatsappLink("Hello, I'd like to learn more about VIP Aspen services.")} target="_blank" rel="noopener noreferrer">
              message us on WhatsApp
            </a>{" "}
            or <Link to="/contact">contact us</Link>.
          </p>
        </div>
        {variant === "form" ? (
          <div className="inq">
            <BookingForm
              serviceType={serviceType}
              heading={heading.replace(/\{\{(.+?)\}\}/g, "$1")}
              subheading={subheading || "Tell us about your needs and we'll get back to you promptly."}
              submitLabel={submitLabel || "Send Request"}
            />
          </div>
        ) : (
          <BookCard />
        )}
      </div>
    </section>
  );
};

export default BookingCTA;
