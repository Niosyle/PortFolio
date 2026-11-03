import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Polices hébergées sur le site (aucune requête vers Google Fonts)
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "./index.css";
import { umamiWebsiteId } from "./content/site";

// Statistiques de visite (Umami, sans cookies). Le script est une copie figée hébergée sur le site
// (public/js/stats.js) : aucun code tiers ne s'exécute sur nhelt.fr. Les données partent vers gateway.umami.is.
if (umamiWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "/js/stats.js";
  script.dataset.websiteId = umamiWebsiteId;
  script.dataset.domains = "nhelt.fr,www.nhelt.fr";
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
