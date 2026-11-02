import { Linkedin, Quote } from "lucide-react";
import { recommendations } from "@/content/recommendations";
import { letter } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";
import LetterViewer from "@/components/LetterViewer";

const formatDate = (value: string, lang: "fr" | "en") => {
  const [y, m] = value.split("-").map(Number);
  if (!y || !m) return "";
  return new Date(y, m - 1).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { month: "long", year: "numeric" });
};

/** Section masquée tant qu'il n'y a ni recommandation publiée ni lettre */
const Recommendations = () => {
  const { t, lang } = useLanguage();
  if (recommendations.length === 0 && letter.mode === "hidden") return null;

  return (
    <section id="recommandations" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">{t.recommendations.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.recommendations.subtitle}</p>
        </div>

        {letter.mode !== "hidden" && (
          <div className="flex justify-center mb-10">
            <LetterViewer />
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((r) => (
              <figure key={r.slug} className="card-elevated p-6 rounded-xl border border-border flex flex-col">
                <Quote className="w-5 h-5 text-primary/60 mb-3" aria-hidden="true" />
                <blockquote className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line flex-1">
                  {r.text[lang]}
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{r.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {r.role}, {r.company}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.recommend.relations[r.relation]}
                      {r.date && `, ${formatDate(r.date, lang)}`}
                    </p>
                  </div>
                  {r.linkedin && (
                    <a
                      href={r.linkedin}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      data-umami-event="recommendation-linkedin"
                      aria-label={`${t.recommendations.verify} ${r.name}`}
                      title={t.recommendations.verify}
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-10">
          {t.recommendations.cta}{" "}
          <a href="#recommander" className="text-primary hover:underline">
            {t.recommendations.ctaLink}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Recommendations;
