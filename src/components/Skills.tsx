import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

// Une compétence est soit un texte simple, soit un objet pour la mettre en avant ou la marquer "à venir"
type Skill = string | { name: string; featured?: boolean; upcoming?: boolean };
const normalize = (skill: Skill) => (typeof skill === "string" ? { name: skill } : skill);

const pill = "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm leading-none";
const styles = {
  base: `${pill} border-border text-foreground/80`,
  featured: `${pill} border-primary/50 bg-primary/10 text-primary`,
  upcoming: `${pill} border-dashed border-border text-muted-foreground`,
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="competences" className="px-6 py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={`${t.skills.title} ${t.skills.titleAccent}`} />

        <dl className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((category) => (
            <div key={category.title}>
              <dt className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="w-6 h-px bg-primary" />
                <span className="font-serif text-2xl text-foreground">{category.title}</span>
              </dt>
              <dd className="flex flex-wrap gap-2">
                {(category.skills as Skill[]).map(normalize).map((skill) => (
                  <span
                    key={skill.name}
                    className={skill.upcoming ? styles.upcoming : skill.featured ? styles.featured : styles.base}
                  >
                    {skill.name}
                    {skill.upcoming && (
                      <span className="font-serif italic text-primary/80">{t.work.status.upcoming.toLowerCase()}</span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
