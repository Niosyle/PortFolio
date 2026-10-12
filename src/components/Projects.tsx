import { Server, ExternalLink, Cloud, Activity, Wifi, type LucideIcon } from "lucide-react";

type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  tech?: string[];
  link?: string;
  status?: string;
};

const projects: Project[] = [
  {
    icon: Server,
    title: "Homelab Sécurisé",
    description: "Infrastructure personnelle avec focus sécurité et durcissement",
    details: ["Active Directory durci", "Segmentation réseau (VLAN)", "Virtualisation Proxmox", "Politiques de sécurité (GPO)"],
    tech: ["Proxmox", "Windows Server", "Linux", "Active Directory"],
  },
  {
    icon: Activity,
    title: "Supervision & SIEM",
    description: "Mise en place d'une supervision complète : disponibilité des services et détection des événements de sécurité",
    details: [
      "Déploiement Wazuh (agents, règles, alertes)",
      "Supervision Zabbix (hôtes, services, seuils)",
      "Centralisation et analyse des logs",
      "Tableaux de bord et alerting",
    ],
    tech: ["Wazuh", "Zabbix", "Linux", "Windows"],
  },
  {
    icon: Wifi,
    title: "Sécurisation d'un réseau Wi-Fi",
    description: "Durcissement d'un réseau sans fil : authentification forte et cloisonnement des usages",
    details: [
      "Authentification 802.1X via RADIUS (NPS)",
      "Séparation des SSID par VLAN",
      "Isolation du réseau invités",
      "Chiffrement WPA2/WPA3-Enterprise",
    ],
    tech: ["RADIUS", "NPS", "802.1X", "VLAN"],
  },
  {
    icon: Cloud,
    title: "Cloud privé en local",
    status: "À venir",
    description: "Déploiement d'un cloud privé sur le homelab pour comprendre le fonctionnement d'une plateforme cloud de l'intérieur",
    details: [
      "Provisionnement d'instances à la demande (IaaS)",
      "Réseaux virtuels et groupes de sécurité",
      "Gestion des identités et des accès",
      "Application des bonnes pratiques de sécurité cloud",
    ],
    tech: ["Proxmox", "Linux", "IaaS"],
  },
];

const differentiators = [
  {
    number: "01",
    title: "Sécurité infrastructure intégrée",
    description: "Approche sécurité dès la conception : durcissement, IAM, logs, supervision SIEM.",
  },
  {
    number: "02",
    title: "Expérience cloud Microsoft 365 / Entra ID",
    description: "Migration et sécurisation d'un environnement M365 en production (IAM, MFA). Notions sécurité GCP.",
  },
  {
    number: "03",
    title: "Rigueur militaire",
    description: "Fiabilité sous pression, respect strict des procédures et consignes de sécurité.",
  },
  {
    number: "04",
    title: "Autonomie en environnement de production",
    description: "Capacité à intervenir rapidement sur des infrastructures sécurisées, dans un cadre défini et documenté.",
  },
  {
    number: "05",
    title: "Trajectoire claire",
    description: "Montée en compétences vers la sécurité cloud : Master Cybersécurité Cloud, certifications AZ-500 et SC-200.",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Projects */}
        <div className="text-center mb-12">
          <span className="terminal-text mb-4 block">&gt; ls -la /projects</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Projets <span className="text-gradient">Personnels</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                <project.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                {project.title}
                {project.status && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {project.status}
                  </span>
                )}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
              
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="text-center mb-12">
          <span className="terminal-text mb-4 block">&gt; diff --from=junior</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ce qui <span className="text-gradient">me différencie</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
Profil avec une expérience concrète en environnement de production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((diff) => (
            <div
              key={diff.number}
              className="group p-5 rounded-lg border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300"
            >
              <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {diff.number}
              </span>
              <h3 className="font-semibold text-foreground mt-2 mb-1">{diff.title}</h3>
              <p className="text-sm text-muted-foreground">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
