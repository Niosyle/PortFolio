import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    // stockage indisponible : on ignore
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const t = translations[lang] as Translations;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // stockage indisponible : on ignore
    }
  }, [lang, t]);

  const toggleLang = () => setLang((current) => (current === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage doit être utilisé dans un LanguageProvider");
  return context;
};
