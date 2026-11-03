import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

// Données non traduites (dates), alignées par index sur les traductions
const jobPeriods = ["2025-2027", "2023-2025", "2016-2021"];
const educationMeta: { period?: string; target: boolean }[] = [
  { target: true },
  { target: true },
  { target: true },
  { period: "2025-2027", target: false },
  { period: "2023-2025", target: false },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="px-6 py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={`${t.experience.title} ${t.experience.titleAccent}`} />

        <ol className="divide-y divide-border/70">
          {t.experience.jobs.map((job, index) => (
            <li key={job.title} className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-10 py-10 first:pt-0">
              <p className="font-serif italic text-lg text-primary">{jobPeriods[index]}</p>
              <div>
                <h3 className="text-2xl font-normal text-foreground">{job.title}</h3>
                <p className="mt-1 text-muted-foreground">{job.organization}</p>
                <ul className="mt-5 space-y-2.5 max-w-[42rem]">
                  {job.highlights.map((item) => (
                    <li key={item} className="relative pl-5 text-foreground/80 leading-relaxed">
                      <span aria-hidden="true" className="absolute left-0 top-[0.8em] w-2 h-px bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-24">
          <h3 className="text-3xl font-normal text-foreground mb-8">{t.experience.educationTitle}</h3>
          <ul className="divide-y divide-border/70 border-t border-border/70">
            {t.experience.education.map((item, index) => {
              const meta = educationMeta[index];
              const description = "description" in item ? item.description : undefined;
              return (
                <li key={item.title} className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-10 py-6">
                  <p className={`text-sm ${meta.target ? "font-serif italic text-base text-primary" : "text-muted-foreground"}`}>
                    {meta.period ?? item.status}
                  </p>
                  <div>
                    <p className="text-lg text-foreground">
                      {item.title}
                      {meta.period && <span className="ml-3 text-sm text-muted-foreground">{item.status}</span>}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.organization}</p>
                    {description && <p className="mt-2 text-sm text-foreground/70 max-w-[40rem]">{description}</p>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
