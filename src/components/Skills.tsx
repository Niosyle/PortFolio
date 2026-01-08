import { Server, Network, Shield, Cloud, Monitor, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Shield,
    title: "Sécurité Infrastructure",
    skills: ["Durcissement systèmes", "Gestion des accès (IAM)", "Politiques de sécurité (GPO)", "Audit & conformité"],
    highlight: true,
  },
  {
    icon: Monitor,
    title: "SIEM & Supervision",
    skills: ["Wazuh (déploiement & exploitation)", "Analyse de logs", "Détection d'incidents", "Alerting & corrélation"],
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Sécurité Cloud",
    skills: ["Microsoft 365 Security", "Migration sécurisée", "Gestion des identités cloud", "Bonnes pratiques Azure/GCP"],
    highlight: true,
  },
  {
    icon: Server,
    title: "Systèmes",
    skills: ["Windows Server", "Linux (Debian, Ubuntu)", "Active Directory", "Virtualisation (Proxmox, vSphere)"],
  },
  {
    icon: Network,
    title: "Réseaux",
    skills: ["LAN / VLAN", "DHCP / DNS", "Équipements Cisco", "Segmentation réseau"],
  },
  {
    icon: Database,
    title: "Continuité & PRA",
    skills: ["Plan de reprise d'activité", "Sauvegardes & restauration", "Haute disponibilité", "Documentation technique"],
  },
];

const Skills = () => {
  return (
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="terminal-text mb-4 block">&gt; cat /skills</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Compétences <span className="text-gradient">Sécurité & Infra</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focus sur la sécurisation des infrastructures, la supervision et la protection des environnements cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-elevated p-6 rounded-xl border transition-all duration-300 hover:border-primary/30 group ${
                category.highlight ? 'border-primary/20' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                category.highlight 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10'
              } transition-colors`}>
                <category.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/60 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
