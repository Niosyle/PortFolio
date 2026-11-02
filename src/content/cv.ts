/*
  CV À TÉLÉCHARGER
  Déposer les PDF dans public/cv/ puis renseigner les chemins ci-dessous.
  Si une langue n'a pas de CV, laisser null : le bouton proposera l'autre langue.
  Si les deux sont à null, aucun bouton n'est affiché.
*/
export const cv: { fr: string | null; en: string | null } = {
  fr: null, // exemple : "/cv/Nicolas-HELT-CV.pdf"
  en: null, // exemple : "/cv/Nicolas-HELT-Resume.pdf"
};
