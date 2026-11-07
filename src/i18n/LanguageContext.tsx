import { createContext, useContext, useEffect, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

type LanguageContextValue = { lang: Lang; t: Translations };

const value: LanguageContextValue = { lang: "fr", t: translations.fr };
const LanguageContext = createContext<LanguageContextValue>(value);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.documentElement.lang = "fr";
    document.title = value.t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", value.t.meta.description);
  }, []);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
