import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();
  const options: Lang[] = ["fr", "en"];

  return (
    <div role="group" aria-label={t.nav.switchLabel} className="flex items-center gap-1 text-sm">
      {options.map((option, index) => (
        <span key={option} className="flex items-center gap-1">
          {index > 0 && <span className="text-border" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            lang={option}
            className={`px-1 py-0.5 rounded-sm transition-colors ${
              lang === option
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option === "fr" ? "FR" : "EN"}
          </button>
        </span>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#parcours", label: t.nav.experience },
    { href: "#projets", label: t.nav.projects },
    { href: "#competences", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between gap-6">
        <a href="#" className="font-semibold text-foreground">
          Nicolas Helt
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
