import { Suspense } from "react";
import type { ComponentType, ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RouteFallback from "@/components/layout/RouteFallback";
import HydrationGate from "@/components/layout/HydrationGate";
import AnalyticsListener from "@/components/AnalyticsListener";
import { lazyRoute } from "@/lib/lazyRoute";

// Homepage — direct import (not lazy)
import Index from "./pages/Index";

// Route tables — slugs only. The page data itself sits behind dynamic imports
// so a visitor downloads one page's copy, not all forty.
import { serviceLoaders } from "./data/services";
import { vehicleLoaders } from "./data/vehicles";
import { airportLoaders } from "./data/airports";
import { guideLoaders } from "./data/guides";

const queryClient = new QueryClient();

/**
 * Pages that no longer exist, mapped to their closest live equivalent.
 * Keep this in sync with REDIRECTS in workers/prerender/worker.js, which
 * issues the real 301s for crawlers and non-JS clients.
 */
const RETIRED_ROUTES: Record<string, string> = {
  "/private-entertainment": "/aspen-clubs",
  "/promotional-services": "/special-event-transportation",
  "/talent": "/aspen-clubs",
};

// Custom pages — lazy in the browser, eager for the build-time server render (see lib/lazyRoute)
const AboutPage = lazyRoute("about", () => import("./pages/AboutPage"));
const ContactPage = lazyRoute("contact", () => import("./pages/ContactPage"));
const MembershipPage = lazyRoute("membership", () => import("./pages/MembershipPage"));
const SecurityAssessment = lazyRoute("security-assessment", () => import("./pages/SecurityAssessment"));
const SummitBlackCar = lazyRoute("summit-blackcar", () => import("./pages/SummitBlackCar"));
const SummitBlackCarDriver = lazyRoute("summit-blackcar-driver", () => import("./pages/SummitBlackCarDriver"));
const GuidesIndex = lazyRoute("guides", () => import("./pages/GuidesIndex"));
const NotFound = lazyRoute("not-found", () => import("./pages/NotFound"));

/**
 * Builds a route component that fetches its template and its page data in
 * parallel, then renders one from the other.
 */
function dataRoute<TData>(
  key: string,
  loadTemplate: () => Promise<{ default: ComponentType<never> }>,
  loadData: () => Promise<{ default: TData }>,
  props: (data: TData) => Record<string, unknown> = (data) => ({ data }),
) {
  return lazyRoute(key, async () => {
    const [template, data] = await Promise.all([loadTemplate(), loadData()]);
    const Template = template.default as ComponentType<Record<string, unknown>>;
    const resolved = props(data.default);
    return { default: () => <Template {...resolved} /> };
  });
}

/** Bookable transportation pages embed the reservation widget inside the hero. */
const HERO_BOOKING_PAGES = new Set([
  "black-car-service",
  "hourly-chauffeur",
  "multi-day-chauffeur",
  "private-ski-transfers",
  "aspen-private-jet-transfer",
  "vail-to-aspen-car-service",
  "glenwood-springs-to-aspen-car-service",
  "beaver-creek-to-aspen-car-service",
  "aspen-food-and-wine-transportation",
  "aspen-new-years-eve-transportation",
  "security-driver",
  "special-event-transportation",
  "aspen-wedding-transportation",
  "aspen-corporate-transportation",
  "hotel-jerome-transportation",
  "st-regis-aspen-transportation",
  "little-nell-transportation",
]);

/**
 * Security and access services are not a car pickup, so their booking section
 * is the inquiry form rather than the ride-reservation widget.
 */
const INQUIRY_FORM_PAGES = new Set(["executive-protection", "aspen-clubs", "property-watch"]);

const serviceRoutes = Object.entries(serviceLoaders).map(([slug, load]) => {
  const Page = dataRoute(`service:${slug}`, () => import("./templates/ServicePage"), load, (data) => ({
    data,
    bookingPosition: HERO_BOOKING_PAGES.has(slug) ? "hero" : "bottom",
    bookingVariant: INQUIRY_FORM_PAGES.has(slug) ? "form" : "widget",
  }));
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const vehicleRoutes = Object.entries(vehicleLoaders).map(([slug, load]) => {
  const Page = dataRoute(`vehicle:${slug}`, () => import("./templates/VehiclePage"), load);
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const airportRoutes = Object.entries(airportLoaders).map(([slug, load]) => {
  const Page = dataRoute(`airport:${slug}`, () => import("./templates/AirportPage"), load);
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const guideRoutes = Object.entries(guideLoaders).map(([slug, load]) => {
  const Page = dataRoute(`guide:${slug}`, () => import("./templates/GuidePage"), load);
  return <Route key={slug} path={`/guides/${slug}`} element={<Page />} />;
});

/**
 * Everything the app needs that is not the router or Helmet. Shared by the
 * browser entry (src/main.tsx) and the build-time server render
 * (src/entry-server.tsx), which supply their own router and HelmetProvider.
 */
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

/**
 * The route table. `hydrating` is true when the markup already exists — the
 * server render and the browser hydrating that render — so framer-motion
 * entrance states resolve to their final values instead of `opacity: 0`.
 */
export const AppRoutes = ({ hydrating = false }: { hydrating?: boolean }) => (
  <>
    <AnalyticsListener />
    <Suspense fallback={<RouteFallback />}>
      <HydrationGate hydrating={hydrating}>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Custom pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/security-assessment" element={<SecurityAssessment />} />

          {/* Retired services — client-side redirects so old links and stale
              search results land somewhere useful instead of a 404. The
              authoritative 301s live in workers/prerender/worker.js. */}
          {Object.entries(RETIRED_ROUTES).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          {/* Summit Black Car — hidden in-vehicle tablet display */}
          <Route path="/summit-blackcar" element={<SummitBlackCar />} />
          <Route path="/summit-blackcar/:slug" element={<SummitBlackCarDriver />} />

          {/* Template-driven pages */}
          {serviceRoutes}
          {vehicleRoutes}
          {airportRoutes}

          {/* Guides — index + articles */}
          <Route path="/guides" element={<GuidesIndex />} />
          {guideRoutes}

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HydrationGate>
    </Suspense>
  </>
);

const App = ({ hydrating = false }: { hydrating?: boolean }) => (
  <HelmetProvider>
    <AppProviders>
      <BrowserRouter>
        <AppRoutes hydrating={hydrating} />
      </BrowserRouter>
    </AppProviders>
  </HelmetProvider>
);

export default App;
