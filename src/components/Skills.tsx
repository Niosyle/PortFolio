import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="competences" className="px-6 py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={`${t.skills.title} ${t.skills.titleAccent}`} />

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {t.skills.levels.map((level) => {
            const soon = "soon" in level && level.soon;
            return (
              <div key={level.title}>
                <h3 className="font-serif text-2xl font-normal text-foreground">{level.title}</h3>
                <p className="mt-1 font-serif italic text-primary">{level.note}</p>
                <ul className="mt-6 space-y-3 border-t border-border/70 pt-6">
                  {level.items.map((item) => (
                    <li
                      key={item}
                      className={`relative pl-5 leading-relaxed ${soon ? "text-muted-foreground" : "text-foreground/80"}`}
                    >
                      <span aria-hidden="true" className="absolute left-0 top-[0.8em] w-2 h-px bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
