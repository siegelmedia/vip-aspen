import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { configurePrerender } from "./lib/prerender";
import "./index.css";

// Must run before any framer-motion component mounts.
configurePrerender();

createRoot(document.getElementById("root")!).render(<App />);
