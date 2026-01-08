import { Briefcase, GraduationCap, Shield } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Administrateur Systèmes & Réseaux",
    organization: "ISC Paris – Alternance",
    period: "2025 – 2027",
    current: true,
    highlights: [
      "Administration infrastructures Windows/Linux",
      "Déploiement et exploitation SIEM (Wazuh)",
      "Migration Google Workspace → Microsoft 365",
      "Mise en place PRA et continuité de service",
      "Supervision SI et gestion des incidents de sécurité",
    ],
  },
  {
    type: "work",
    title: "Technicien Supérieur en Technologies Numériques",
    organization: "ISC Paris – Alternance",
    period: "2023 – 2025",
    highlights: [
      "Maintenance et administration d'infrastructures",
      "Configuration réseau Cisco",
      "Virtualisation vSphere",
      "Mise en production de serveurs (SysPass, NetAlertX, Evoko)",
      "Participation à la supervision et sécurité du SI",
    ],
  },
  {
    type: "military",
    title: "Militaire du rang",
    organization: "Armée de Terre",
    period: "2016 – 2021",
    highlights: [
      "Application stricte des procédures et consignes de sécurité",
      "Travail en environnement opérationnel exigeant",
      "Rigueur, fiabilité et sens des responsabilités",
    ],
  },
];

const formations = [
  {
    title: "RNCP Niveau 7 – Cybersécurité",
    organization: "Objectif 2027-2029",
    status: "Visé",
    description: "Contrat de professionnalisation orienté cybersécurité opérationnelle (SOC, blue team)",
  },
  {
    title: "Administrateur Systèmes & Réseaux",
    organization: "IPI Groupe IGENSIA",
    period: "2025 – 2027",
    status: "RNCP 6",
  },
  {
    title: "Technicien Système Réseaux et Sécurité",
    organization: "IPI Groupe IGENSIA",
    period: "2023 – 2025",
    status: "RNCP 5",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="terminal-text mb-4 block">&gt; history --all</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Parcours <span className="text-gradient">Professionnel</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expériences */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              Expériences
            </h3>
            
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    exp.current 
                      ? 'bg-primary/20 border-primary' 
                      : exp.type === 'military'
                        ? 'bg-accent/20 border-accent'
                        : 'bg-secondary border-border'
                  }`}>
                    {exp.type === 'military' ? (
                      <Shield className="w-3 h-3 text-accent" />
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-primary' : 'bg-muted-foreground'}`} />
                    )}
                  </div>
                  
                  <div className="card-elevated p-5 rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        exp.current 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {exp.period}
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
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
              <GraduationCap className="w-5 h-5 text-accent" />
              Formations
            </h3>
            
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <div 
                  key={index}
                  className={`card-elevated p-5 rounded-lg border transition-colors ${
                    formation.status === 'Visé' 
                      ? 'border-primary/30 bg-gradient-to-r from-primary/5 to-transparent' 
                      : 'border-border hover:border-accent/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{formation.title}</h4>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          formation.status === 'Visé'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {formation.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{formation.organization}</p>
                      {formation.description && (
                        <p className="text-sm text-muted-foreground mt-2">{formation.description}</p>
                      )}
                    </div>
                    {formation.period && (
                      <span className="text-xs text-muted-foreground">{formation.period}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
