import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import badgeAz900 from "@/assets/badge-az900.webp";

const jobPeriods = ["2025-2027", "2023-2025", "2016-2021"];
const educationMeta: { period?: string; badge?: string; kind: "target" | "earned" | "done" }[] = [
  { kind: "target" },
  { kind: "target" },
  { kind: "earned", badge: badgeAz900 },
  { period: "2025-2027", kind: "done" },
  { period: "2023-2025", kind: "done" },
];

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

        <div id="formations" className="mt-24 scroll-mt-28">
          <h3 className="text-3xl font-normal text-foreground mb-8">{t.experience.educationTitle}</h3>
          <ul className="divide-y divide-border/70 border-t border-border/70">
            {t.experience.education.map((item, index) => {
              const meta = educationMeta[index];
              const description = "description" in item ? item.description : undefined;
              const highlight = "highlight" in item ? item.highlight : undefined;
              const done = meta.kind === "done";
              const earned = meta.kind === "earned";
              const date = "date" in item ? item.date : undefined;
              return (
                <li key={item.title} className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-10 py-8">
                  <div className="md:pt-1.5">
                    {earned ? (
                      <div className="flex items-center gap-4 md:block">
                        <img
                          src={meta.badge}
                          alt={item.organization}
                          width={88}
                          height={91}
                          loading="lazy"
                          className="w-[72px] md:w-[88px] h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
                        />
                        <p className="md:mt-3 font-serif italic text-lg text-primary">{date}</p>
                      </div>
                    ) : done ? (
                      <p className="font-serif italic text-lg text-muted-foreground">{meta.period}</p>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-primary/60 px-3 py-1 text-xs font-medium tracking-wide text-primary">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-foreground leading-snug">
                      {withHighlight(item.title, highlight)}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground">
                      {item.organization}
                      {done && (
                        <span className="inline-flex items-center rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {item.status}
                        </span>
                      )}
                      {earned && (
                        <span className="inline-flex items-center rounded-full border border-primary bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
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
