import { Server, Shield, Target, ExternalLink, Lock, Cloud } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Homelab Sécurisé",
    description: "Infrastructure personnelle avec focus sécurité et durcissement",
    details: ["Active Directory durci", "Segmentation réseau (VLAN)", "Supervision Wazuh", "Gestion centralisée des logs"],
    tech: ["Proxmox", "Windows Server", "Linux", "Wazuh"],
  },
  {
    icon: Cloud,
    title: "Migration Cloud Sécurisée",
    description: "Migration Google Workspace → Microsoft 365 avec sécurisation des accès",
    details: ["Audit des permissions", "MFA & Conditional Access", "Protection des données", "Formation utilisateurs"],
    tech: ["Microsoft 365", "Azure AD", "IAM"],
  },
  {
    icon: Target,
    title: "CTF & Hack The Box",
    description: "Pratique régulière sur des environnements de sécurité offensive et défensive",
    details: ["Profil : NyOne", "Challenges réseaux", "Exploitation système", "Blue team labs"],
    link: "https://app.hackthebox.com/profile/NyOne",
  },
];

const differentiators = [
  {
    number: "01",
    title: "Sécurité infrastructure native",
    description: "Approche sécurité intégrée dès la conception : durcissement, IAM, logs, supervision SIEM.",
  },
  {
    number: "02",
    title: "Expérience cloud réelle",
    description: "Migration et sécurisation d'environnements Microsoft 365 en production.",
  },
  {
    number: "03",
    title: "Passé militaire",
    description: "Rigueur procédurale, fiabilité sous pression, respect strict des consignes de sécurité.",
  },
  {
    number: "04",
    title: "Opérationnalité immédiate",
    description: "Autonome sur l'administration et la sécurisation d'infrastructures dès le premier jour.",
  },
  {
    number: "05",
    title: "Trajectoire claire",
    description: "Montée en compétences structurée vers un Master Cybersécurité – Infrastructure & Cloud.",
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

        <div className="grid md:grid-cols-3 gap-6 mb-20">
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
            Un profil mature et structuré, pas un junior débutant.
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
