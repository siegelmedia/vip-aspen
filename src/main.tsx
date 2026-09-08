import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// React Helmet takes ownership of metadata once the app starts.
document.querySelectorAll("[data-seo-fallback]").forEach((tag) => tag.remove());
createRoot(document.getElementById("root")!).render(<App />);
