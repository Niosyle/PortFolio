import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

// Technologies (non traduites), alignées par index sur les projets traduits
const projectTech = [
  ["Proxmox", "Windows Server", "Active Directory", "Linux"],
  ["Wazuh", "Zabbix"],
  ["RADIUS", "NPS", "802.1X", "VLAN"],
  ["Proxmox", "Linux"],
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projets" label={t.projects.label}>
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
        {t.projects.items.map((project, index) => {
          const upcoming = "upcoming" in project && project.upcoming;
          return (
            <article key={project.title}>
              <h3 className="font-semibold text-foreground leading-snug">
                {project.title}
                {upcoming && (
                  <span className="ml-2 font-normal italic text-primary text-sm">{t.projects.upcoming}</span>
                )}
              </h3>
              <p className="mt-1.5 text-muted-foreground text-[0.95rem]">{project.description}</p>
              <ul className="mt-3 space-y-1.5 text-[0.95rem] text-foreground/85 list-disc pl-5 marker:text-primary">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{projectTech[index].join(", ")}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
