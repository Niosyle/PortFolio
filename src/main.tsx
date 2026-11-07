import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "./index.css";
import { umamiWebsiteId } from "./content/site";

if (umamiWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "/js/stats.js";
  script.dataset.websiteId = umamiWebsiteId;
  script.dataset.domains = "nhelt.fr,www.nhelt.fr";
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
