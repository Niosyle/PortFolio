import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="competences" className="px-6 py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={`${t.skills.title} ${t.skills.titleAccent}`} />

        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((category) => (
            <div key={category.title}>
              <dt className="font-serif text-xl text-foreground pb-3 mb-4 border-b border-border/70">{category.title}</dt>
              <dd className="space-y-2 text-foreground/75">
                {category.skills.map((skill) => (
                  <p key={skill}>{skill}</p>
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
