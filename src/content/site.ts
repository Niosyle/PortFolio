import settings from "./settings.json";

/* Réglages modifiables depuis l'espace admin (src/content/settings.json) */

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export const cv: { fr: string | null; en: string | null } = {
  fr: clean(settings.cv_fr) || null,
  en: clean(settings.cv_en) || null,
};

export const umamiWebsiteId = clean(settings.umami_website_id);

/** Envoie un événement à Umami s'il est chargé (sinon ne fait rien) */
export const track = (event: string, data?: Record<string, string>) => {
  const umami = (window as unknown as { umami?: { track: (e: string, d?: Record<string, string>) => void } }).umami;
  umami?.track(event, data);
};
