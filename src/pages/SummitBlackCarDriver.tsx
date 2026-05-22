import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { ChevronLeft, MapPin } from "lucide-react";
import { getSummitDriverBySlug } from "@/data/summitDrivers";

const REVIEW_URL = "https://g.page/r/Cej-rMSwSE4dEBM/review";

const SummitBlackCarDriver = () => {
  const { slug } = useParams<{ slug: string }>();
  const driver = slug ? getSummitDriverBySlug(slug) : undefined;

  if (!driver) {
    return <Navigate to="/summit-blackcar" replace />;
  }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-black text-white"
      style={{ userSelect: "none", overscrollBehavior: "contain", WebkitTapHighlightColor: "transparent" }}
    >
      <Helmet>
        <title>{driver.name} — Summit Black Car</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>

      {/* Background fleet image — center stays visible, edges fade to dark */}
      <div className="absolute inset-0">
        <img
          src="/summit-fleet.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Page */}
      <div className="relative z-10 flex h-full w-full flex-col px-6 py-4">
        {/* Top bar */}
        <div className="flex-shrink-0 flex items-center justify-between">
          <img
            src="/summit-logo.png"
            alt="Summit Black Car"
            className="h-10 w-auto"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <Link
            to="/summit-blackcar"
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs text-white/80 backdrop-blur-sm active:bg-white/10"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            All Drivers
          </Link>
        </div>

        {/* Main content — three columns: left driver | empty (bg visible) | right sales+QR */}
        <div className="mt-4 flex-1 min-h-0 grid grid-cols-[360px,1fr,400px] gap-6">
          {/* LEFT — photo, name, bio */}
          <div className="flex flex-col min-h-0">
            {/* Photo */}
            <div className="flex-shrink-0 overflow-hidden rounded-xl border border-white/15 bg-neutral-900">
              <img
                src={driver.photo}
                alt={driver.name}
                className="h-[260px] w-full object-cover object-top"
              />
            </div>

            {/* Name + location */}
            <div className="mt-3 flex-shrink-0">
              <h1 className="font-serif text-2xl font-bold leading-tight">
                {driver.name}
              </h1>
              <div className="mt-1 flex items-center gap-1 text-sm text-white/70">
                <MapPin className="h-3.5 w-3.5" />
                <span>{driver.location}</span>
              </div>
            </div>

            {/* Bio — larger, more readable */}
            <p className="mt-3 text-[14px] leading-[1.65] text-white/90 overflow-hidden">
              {driver.bio}
            </p>
          </div>

          {/* CENTER — empty so the fleet background shows through */}
          <div aria-hidden />

          {/* RIGHT — sales info top, QR bottom */}
          <div className="flex flex-col min-h-0">
            {/* Sales pitch */}
            <div className="flex-shrink-0 rounded-xl border border-white/15 bg-black/55 p-5 backdrop-blur-sm">
              <h2 className="font-serif text-xl font-bold leading-tight">
                More Than a Chauffeur Service
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                Summit Black Car was built by former law enforcement
                professionals to provide a higher standard of private
                transportation in Colorado.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  "Luxury Vehicles",
                  "Professional Drivers",
                  "Local Mountain Experience",
                  "Discreet Service",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center text-[11px] font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer pushes QR to bottom */}
            <div className="flex-1 min-h-[12px]" />

            {/* QR card — bottom right */}
            <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-white/15 bg-black/55 p-4 backdrop-blur-sm">
              <div className="flex-shrink-0 rounded-lg bg-white p-1.5">
                <QRCodeSVG
                  value={REVIEW_URL}
                  size={110}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-serif text-base font-semibold leading-tight">
                  Enjoyed Your Ride?
                </h3>
                <p className="mt-1.5 text-[12px] leading-snug text-white/70">
                  Scan to leave us a review on Google.
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">
                  Thank You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummitBlackCarDriver;
