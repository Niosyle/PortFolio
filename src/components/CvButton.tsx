import { Download } from "lucide-react";
import { cv } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";

type CvButtonProps = {
  variant?: "primary" | "secondary" | "compact";
};

const styles = {
  primary:
    "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity",
  secondary:
    "inline-flex items-center gap-2 px-6 py-3 text-foreground font-medium rounded-full border border-border hover:border-primary/60 transition-colors",
  compact:
    "inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors",
};

/** Affiche le bouton seulement si un CV est configuré dans l'admin (Réglages) */
const CvButton = ({ variant = "secondary" }: CvButtonProps) => {
  const { lang, t } = useLanguage();
  const href = cv[lang] ?? cv.fr ?? cv.en;
  if (!href) return null;

  return (
    <a href={href} download className={styles[variant]} data-umami-event="cv-download" data-umami-event-lang={lang}>
      <Download className="w-4 h-4" aria-hidden="true" />
      {variant === "compact" ? t.cv.short : t.cv.download}
    </a>
  );
};

export default CvButton;
