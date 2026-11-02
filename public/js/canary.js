/*
  Détection de clone et pièges (honeypots).

  1. CLONE : si le site est affiché sur un autre domaine que nhelt.fr
     (copie pour hameçonnage, miroir non autorisé), la page devient blanche
     et une alerte est envoyée.
  2. PIÈGE : les pages leurres (/wp-admin/, /login/...) marquées data-honeypot
     restent blanches et envoient une alerte à chaque ouverture.

  Alertes : notification push via ntfy.sh (application ntfy, abonnement au sujet ci-dessous).
  Limite connue : un attaquant attentif peut retirer ce script de sa copie.
  Il détecte les clones faits à la va-vite, ce qui est le cas de la plupart des kits d'hameçonnage.
*/
(function () {
  "use strict";

  var TOPIC = "nhelt-alerte-2686e6ec3fda";
  var OFFICIAL = ["nhelt.fr", "www.nhelt.fr"];
  var DEV = ["localhost", "127.0.0.1", ""];
  // Services légitimes qui affichent le site sous leur propre domaine : pas d'alerte, pas de page blanche
  var BENIGN = [/\.translate\.goog$/, /(^|\.)web\.archive\.org$/, /^archive\.(ph|today|is)$/, /googleusercontent\.com$/];

  var host = location.hostname;
  var honeypot = document.documentElement.hasAttribute("data-honeypot");
  var benign = BENIGN.some(function (re) { return re.test(host); });
  var spoof = location.protocol !== "file:" && OFFICIAL.indexOf(host) < 0 && DEV.indexOf(host) < 0 && !benign;

  if (!spoof && !honeypot) return;

  // Page blanche immédiate, puis effacement complet du contenu
  document.documentElement.style.display = "none";
  var wipe = function () {
    document.documentElement.innerHTML = "<head></head><body></body>";
    document.documentElement.style.display = "";
    document.documentElement.style.background = "#fff";
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wipe);
  else wipe();

  // Les scripts chargés ensuite (application, CMS) ne doivent rien pouvoir réafficher
  new MutationObserver(function () {
    if (document.body && document.body.childNodes.length) document.body.innerHTML = "";
  }).observe(document.documentElement, { childList: true, subtree: true });

  // Une seule alerte par visiteur et par session, pour éviter le spam
  var key = "canary-sent:" + location.href;
  try {
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
  } catch (e) { /* stockage indisponible : on envoie quand même */ }

  var tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) {}

  var lines = [
    spoof ? "Domaine : " + host : "Page piège : " + location.pathname,
    "URL : " + location.href,
    "Provenance : " + (document.referrer || "accès direct"),
    "Navigateur : " + navigator.userAgent,
    "Langue : " + (navigator.language || "?") + " | Fuseau : " + (tz || "?"),
    "Écran : " + screen.width + "x" + screen.height,
    "Heure (visiteur) : " + new Date().toString()
  ];

  var title = spoof ? "Clone détecté : " + host : "Piège déclenché : " + location.pathname;
  var url =
    "https://ntfy.sh/" + TOPIC +
    "?title=" + encodeURIComponent(title) +
    "&priority=" + (spoof ? "urgent" : "high") +
    "&tags=" + (spoof ? "rotating_light,warning" : "eyes");

  try {
    fetch(url, { method: "POST", body: lines.join("\n"), mode: "no-cors", keepalive: true, credentials: "omit" });
  } catch (e) {
    try { navigator.sendBeacon(url, lines.join("\n")); } catch (e2) {}
  }
})();
