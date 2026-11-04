import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

// Données non traduites (dates), alignées par index sur les traductions
const jobPeriods = ["2025-2027", "2023-2025", "2016-2021"];
// kind : "soon" = examen daté, "target" = objectif, "done" = titre obtenu ou en cours
const educationMeta: { period?: string; kind: "soon" | "target" | "done" }[] = [
  { kind: "target" },
  { kind: "soon" },
  { kind: "target" },
  { period: "2025-2027", kind: "done" },
  { period: "2023-2025", kind: "done" },
];

/** Met en couleur la partie importante du titre (ex. AZ-900) */
const withHighlight = (title: string, highlight?: string) => {
  if (!highlight || !title.includes(highlight)) return title;
  const at = title.indexOf(highlight);
  return (
    <>
      {title.slice(0, at)}
      <span className="text-primary whitespace-nowrap">{highlight}</span>
      {title.slice(at + highlight.length)}
    </>
  );
};

const statusStyle = {
  soon: "bg-primary text-primary-foreground border-primary",
  target: "border-primary/60 text-primary",
} as const;

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
              const highlight = "highlight" in item ? item.highlight : undefined;
              const done = meta.kind === "done";
              return (
                <li key={item.title} className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-10 py-8">
                  <div className="md:pt-1.5">
                    {done ? (
                      <p className="font-serif italic text-lg text-muted-foreground">{meta.period}</p>
                    ) : (
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${statusStyle[meta.kind]}`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-foreground leading-snug">
                      {withHighlight(item.title, highlight)}
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      {item.organization}
                      {done && (
                        <span className="ml-3 inline-flex items-center rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary align-middle">
                          {item.status}
                        </span>
                      )}
                    </p>
                    {description && <p className="mt-3 text-foreground/75 leading-relaxed max-w-[40rem]">{description}</p>}
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
