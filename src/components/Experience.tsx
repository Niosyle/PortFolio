import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

// Dates non traduites, alignées par index sur les traductions
const jobPeriods = ["2025-2027", "2023-2025", "2016-2021"];
const educationPeriods: (string | null)[] = [null, null, "2025-2027", "2023-2025"];

const Entry = ({
  period,
  periodIsTarget = false,
  title,
  organization,
  highlights,
}: {
  period: string;
  periodIsTarget?: boolean;
  title: string;
  organization: string;
  highlights?: string[];
}) => (
  <li className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6">
    <span
      className={`text-sm tabular-nums sm:pt-0.5 ${
        periodIsTarget ? "text-primary italic" : "text-muted-foreground"
      }`}
    >
      {period}
    </span>
    <div>
      <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
      <p className="text-muted-foreground text-[0.95rem]">{organization}</p>
      {highlights && (
        <ul className="mt-3 space-y-1.5 text-[0.95rem] text-foreground/85 list-disc pl-5 marker:text-primary">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </li>
);

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <Section id="parcours" label={t.experience.label}>
        <ol className="space-y-10">
          {t.experience.jobs.map((job, index) => (
            <Entry
              key={job.title}
              period={jobPeriods[index]}
              title={job.title}
              organization={job.organization}
              highlights={job.highlights}
            />
          ))}
        </ol>
      </Section>

      <Section id="formation" label={t.education.label}>
        <ul className="space-y-6">
          {t.education.items.map((item, index) => {
            const period = educationPeriods[index];
            return (
              <Entry
                key={item.title}
                period={period ?? t.education.target}
                periodIsTarget={period === null}
                title={item.title}
                organization={item.organization}
              />
            );
          })}
        </ul>
      </Section>
    </>
  );
};

export default Experience;
