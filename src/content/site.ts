import settings from "./settings.json";

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export const cv: { fr: string | null } = {
  fr: clean(settings.cv_fr) || null,
};

export const umamiWebsiteId = clean(settings.umami_website_id);

export type LetterMode = "hidden" | "view" | "download";

const rawMode = clean(settings.letter_mode);
const pages = (Array.isArray(settings.letter_pages) ? settings.letter_pages : [])
  .map((p: unknown) => (typeof p === "string" ? p : clean((p as { src?: unknown })?.src)))
  .map(clean)
  .filter(Boolean);
const pdf = clean(settings.letter_pdf);

export const letter = {
  mode: (rawMode === "view" && pages.length) || (rawMode === "download" && (pages.length || pdf))
    ? (rawMode as LetterMode)
    : ("hidden" as LetterMode),
  author: clean(settings.letter_author),
  date: clean(settings.letter_date),
  pages,
  pdf,
};

export const formEndpoint = clean(settings.form_endpoint);

export const OWNER_EMAIL = "Nicolas@helt.fr";

export const notify = (title: string) => {
  try {
    fetch(`https://ntfy.sh/nhelt-alerte-2686e6ec3fda?title=${encodeURIComponent(title)}&tags=speech_balloon`, {
      method: "POST",
      body: "Consulte ta boîte mail puis valide ou non dans l'admin (Recommandations).",
      mode: "no-cors",
      keepalive: true,
      credentials: "omit",
    });
  } catch {
    return;
  }
};

export const track = (event: string, data?: Record<string, string>) => {
  const umami = (window as unknown as { umami?: { track: (e: string, d?: Record<string, string>) => void } }).umami;
  umami?.track(event, data);
};
