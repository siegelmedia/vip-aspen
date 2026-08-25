import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RouteFallback from "@/components/layout/RouteFallback";

// Homepage — direct import (not lazy)
import Index from "./pages/Index";

// Custom pages — lazy loaded
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MembershipPage = lazy(() => import("./pages/MembershipPage"));
const SecurityAssessment = lazy(() => import("./pages/SecurityAssessment"));
const SummitBlackCar = lazy(() => import("./pages/SummitBlackCar"));
const SummitBlackCarDriver = lazy(() => import("./pages/SummitBlackCarDriver"));
const GuidesIndex = lazy(() => import("./pages/GuidesIndex"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

/**
 * Builds a lazy route component that fetches its template and its page data in
 * parallel, then renders one from the other. Called at module scope (once per
 * route) so React.lazy isn't re-created on every render.
 */
function dataRoute<TData>(
  loadTemplate: () => Promise<{ default: ComponentType<never> }>,
  loadData: () => Promise<{ default: TData }>,
  props: (data: TData) => Record<string, unknown> = (data) => ({ data }),
) {
  return lazy(async () => {
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

const serviceRoutes = Object.entries(serviceLoaders).map(([slug, load]) => {
  const Page = dataRoute(() => import("./templates/ServicePage"), load, (data) => ({
    data,
    bookingPosition: HERO_BOOKING_PAGES.has(slug) ? "hero" : "bottom",
  }));
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const vehicleRoutes = Object.entries(vehicleLoaders).map(([slug, load]) => {
  const Page = dataRoute(() => import("./templates/VehiclePage"), load);
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const airportRoutes = Object.entries(airportLoaders).map(([slug, load]) => {
  const Page = dataRoute(() => import("./templates/AirportPage"), load);
  return <Route key={slug} path={`/${slug}`} element={<Page />} />;
});

const guideRoutes = Object.entries(guideLoaders).map(([slug, load]) => {
  const Page = dataRoute(() => import("./templates/GuidePage"), load);
  return <Route key={slug} path={`/guides/${slug}`} element={<Page />} />;
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
