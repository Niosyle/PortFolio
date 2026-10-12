import { Briefcase, GraduationCap, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Données non traduites (dates, type), alignées par index sur les traductions
const jobMeta = [
  { type: "work", period: "2025-2027", current: true },
  { type: "work", period: "2023-2025", current: false },
  { type: "military", period: "2016-2021", current: false },
];

const educationMeta: { period?: string; target: boolean }[] = [
  { target: true },
  { target: true },
  { period: "2025-2027", target: false },
  { period: "2023-2025", target: false },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="terminal-text mb-4 block">&gt; history --all</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t.experience.title} <span className="text-gradient">{t.experience.titleAccent}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expériences */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              {t.experience.jobsTitle}
            </h3>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border" />

              {t.experience.jobs.map((exp, index) => {
                const meta = jobMeta[index];
                return (
                  <div key={index} className="relative pl-8">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      meta.current
                        ? 'bg-primary/20 border-primary'
                        : meta.type === 'military'
                          ? 'bg-accent/20 border-accent'
                          : 'bg-secondary border-border'
                    }`}>
                      {meta.type === 'military' ? (
                        <Shield className="w-3 h-3 text-accent" />
                      ) : (
                        <div className={`w-2 h-2 rounded-full ${meta.current ? 'bg-primary' : 'bg-muted-foreground'}`} />
                      )}
                    </div>

                    <div className="card-elevated p-5 rounded-lg border border-border hover:border-primary/20 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-sm text-muted-foreground">{exp.organization}</p>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          meta.current
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-muted-foreground'
                        }`}>
                          {meta.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
              <GraduationCap className="w-5 h-5 text-accent" />
              {t.experience.educationTitle}
            </h3>

            <div className="space-y-4">
              {t.experience.education.map((formation, index) => {
                const meta = educationMeta[index];
                const description = "description" in formation ? formation.description : undefined;
                return (
                  <div
                    key={index}
                    className={`card-elevated p-5 rounded-lg border transition-colors ${
                      meta.target
                        ? 'border-primary/30 bg-gradient-to-r from-primary/5 to-transparent'
                        : 'border-border hover:border-accent/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{formation.title}</h4>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                            meta.target
                              ? 'bg-primary/10 text-primary'
                              : 'bg-accent/10 text-accent'
                          }`}>
                            {formation.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{formation.organization}</p>
                        {description && (
                          <p className="text-sm text-muted-foreground mt-2">{description}</p>
                        )}
                      </div>
                      {meta.period && (
                        <span className="text-xs text-muted-foreground">{meta.period}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
