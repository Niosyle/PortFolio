(function () {
  "use strict";

  var TOPIC = "nhelt-alerte-2686e6ec3fda";
  var OFFICIAL = ["nhelt.fr", "www.nhelt.fr"];
  var DEV = ["localhost", "127.0.0.1", ""];
  var BENIGN = [/\.translate\.goog$/, /(^|\.)web\.archive\.org$/, /^archive\.(ph|today|is)$/, /googleusercontent\.com$/];

  var host = location.hostname;
  var honeypot = document.documentElement.hasAttribute("data-honeypot");
  var benign = BENIGN.some(function (re) { return re.test(host); });
  var spoof = location.protocol !== "file:" && OFFICIAL.indexOf(host) < 0 && DEV.indexOf(host) < 0 && !benign;

  if (!spoof && !honeypot) return;

  document.documentElement.style.display = "none";
  var wipe = function () {
    document.documentElement.innerHTML = "<head></head><body></body>";
    document.documentElement.style.display = "";
    document.documentElement.style.background = "#fff";
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wipe);
  else wipe();

  new MutationObserver(function () {
    if (document.body && document.body.childNodes.length) document.body.innerHTML = "";
  }).observe(document.documentElement, { childList: true, subtree: true });

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
