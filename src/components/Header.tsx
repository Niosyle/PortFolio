import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import CvButton from "@/components/CvButton";
import { track } from "@/content/site";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();
  const options: Lang[] = ["fr", "en"];

  return (
    <div
      role="group"
      aria-label={t.nav.switchLabel}
      className="flex items-center gap-1 text-xs font-medium tracking-wide"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            setLang(option);
            track("lang-switch", { lang: option });
          }}
          aria-pressed={lang === option}
          className={`px-1.5 py-1 uppercase transition-colors ${
            lang === option
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#experience", label: t.nav.experience },
    { href: "#competences", label: t.nav.skills },
    { href: "#projets", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-xl text-foreground hover:text-primary transition-colors">
            Nicolas HELT
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <CvButton variant="compact" />
            <LanguageSwitch />
          </div>

          {/* Mobile: language + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitch />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
