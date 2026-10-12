import { Server, Cloud, Activity, Wifi, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Icônes et technologies (non traduites), alignées par index sur les projets traduits
const projectMeta: { icon: LucideIcon; tech: string[] }[] = [
  { icon: Server, tech: ["Proxmox", "Windows Server", "Linux", "Active Directory"] },
  { icon: Activity, tech: ["Wazuh", "Zabbix", "Linux", "Windows"] },
  { icon: Wifi, tech: ["RADIUS", "NPS", "802.1X", "VLAN"] },
  { icon: Cloud, tech: ["Proxmox", "Linux", "IaaS"] },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Projects */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {t.projects.title} {t.projects.titleAccent}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {t.projects.items.map((project, index) => {
            const { icon: Icon, tech } = projectMeta[index];
            const status = "status" in project ? project.status : undefined;
            return (
              <div
                key={index}
                className="card-elevated p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                  {project.title}
                  {status && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary/10 text-primary">
                      {status}
                    </span>
                  )}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {project.details.map((detail) => (
                    <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary/60 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Differentiators */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {t.projects.diffTitle} {t.projects.diffTitleAccent}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.diffSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.projects.differentiators.map((diff) => {
            return (
              <div
                key={diff.title}
                className="group p-5 rounded-lg border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300"
              >
                <h3 className="font-semibold text-foreground mb-1">{diff.title}</h3>
                <p className="text-sm text-muted-foreground">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
