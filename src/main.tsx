import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { umamiWebsiteId } from "./content/site";

// Statistiques de visite (Umami, sans cookies). Ignoré en local et tant qu'aucun identifiant n'est configuré.
if (umamiWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.dataset.websiteId = umamiWebsiteId;
  script.dataset.domains = "nhelt.fr,www.nhelt.fr";
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
