import { useLanguage } from "@/i18n/LanguageContext";

const Strengths = () => {
  const { t } = useLanguage();

  return (
    <section id="atouts" className="pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {t.projects.diffTitle} {t.projects.diffTitleAccent}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.projects.diffSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {t.projects.differentiators.map((diff) => (
            <div key={diff.title} className="p-5 rounded-lg border border-border bg-card/50">
              <h3 className="font-semibold text-foreground mb-1">{diff.title}</h3>
              <p className="text-sm text-muted-foreground">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
