import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { configurePrerender } from "./lib/prerender";
import "./index.css";

// Must run before any framer-motion component mounts.
configurePrerender();

const root = document.getElementById("root")!;

// Production HTML arrives with the page already rendered (see
// scripts/build-static-pages.mjs), so attach React to that markup. The dev
// server's index.html has an empty root and renders from scratch as before.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App hydrating />);
} else {
  createRoot(root).render(<App />);
}
