import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { summitDrivers } from "@/data/summitDrivers";

const SummitBlackCar = () => {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-black text-white"
      style={{ userSelect: "none", overscrollBehavior: "contain", WebkitTapHighlightColor: "transparent" }}
    >
      <Helmet>
        <title>Summit Black Car — In-Vehicle Display</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>

      {/* Background fleet image */}
      <div className="absolute inset-0">
        <img
          src="/summit-fleet.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col px-8 py-5">
        {/* Header */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src="/summit-logo.png"
            alt="Summit Black Car"
            className="h-14 w-auto"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight">
            Meet Your Driver
          </h1>
          <p className="mt-0.5 text-sm text-white/60">
            Tap a card to learn more about who's driving you today.
          </p>
        </div>

        {/* Driver grid — flex-1 fills remaining height */}
        <div className="mt-4 flex-1 min-h-0">
          <div
            className="mx-auto grid h-full gap-3"
            style={{
              gridTemplateColumns: `repeat(${summitDrivers.length}, minmax(0, 1fr))`,
              maxWidth: `${summitDrivers.length * 220 + (summitDrivers.length - 1) * 12}px`,
            }}
          >
            {summitDrivers.map((driver) => (
              <Link
                key={driver.slug}
                to={`/summit-blackcar/${driver.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] active:bg-white/10"
              >
                <div className="flex-1 min-h-0 overflow-hidden bg-neutral-900">
                  <img
                    src={driver.photo}
                    alt={driver.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-shrink-0 px-3 py-2.5">
                  <h2 className="font-serif text-base font-semibold leading-tight">
                    {driver.name}
                  </h2>
                  <p className="mt-0.5 text-[11px] text-white/50">
                    {driver.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 mt-3 text-center text-[10px] text-white/40 tracking-widest uppercase">
          Summit Black Car · Colorado
        </div>
      </div>
    </div>
  );
};

export default SummitBlackCar;
