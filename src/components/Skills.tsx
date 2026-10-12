import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <Section id="competences" label={t.skills.label}>
      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[7rem_1fr] text-[0.95rem]">
        {t.skills.categories.map((category) => (
          <div key={category.title} className="contents">
            <dt className="font-medium text-foreground">{category.title}</dt>
            <dd className="text-foreground/85 mb-2 sm:mb-0">{category.skills}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
