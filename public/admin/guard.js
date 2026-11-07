
if (window.top !== window.self) {
  window.top.location.href = window.self.location.href;
}

const allowedHosts = ["nhelt.fr", "www.nhelt.fr", "localhost", "127.0.0.1"];
if (!allowedHosts.includes(window.location.hostname)) {
  document.documentElement.innerHTML = "";
  throw new Error("Domaine non autorisé");
}
if (window.location.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(window.location.hostname)) {
  window.location.replace("https://" + window.location.host + window.location.pathname);
}

const IDLE_LIMIT_MS = 30 * 60 * 1000;
let idleTimer;

const wipeSession = async () => {
  try {
    localStorage.clear();
    sessionStorage.clear();
    if (indexedDB.databases) {
      const dbs = await indexedDB.databases();
      await Promise.all(dbs.map((db) => db.name && indexedDB.deleteDatabase(db.name)));
    }
  } finally {
    window.location.reload();
  }
};

const resetIdle = () => {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(wipeSession, IDLE_LIMIT_MS);
};

["pointerdown", "keydown", "scroll", "visibilitychange"].forEach((event) =>
  window.addEventListener(event, resetIdle, { passive: true }),
);
resetIdle();
