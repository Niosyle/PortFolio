export type Lang = "fr" | "en";

// Règle : chaque information n'apparaît qu'à un seul endroit.
// En-tête = qui je suis et ce que je cherche. Expériences = réalisations chiffrées.
// Compétences = outils. Projets = ce que je fais en dehors du travail. Contact = comment me joindre.

export const translations = {
  fr: {
    meta: {
      title: "Nicolas HELT | Admin Sys & Réseaux, Sécurité Cloud",
      description:
        "Nicolas HELT, administrateur systèmes et réseaux en alternance, orienté sécurité cloud. Recherche une alternance en sécurité cloud pour septembre 2027.",
    },
    nav: {
      experience: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      switchLabel: "Switch to English",
    },
    hero: {
      role: "Administrateur Systèmes & Réseaux | Sécurité Cloud",
      badge: "Je cherche une alternance en sécurité cloud pour septembre 2027",
      intro:
        "Trois ans d'alternance au service informatique d'ISC Paris, sur un parc de 200 postes pour 150 collaborateurs et 3 000 étudiants. Avant ça, cinq ans dans l'Armée de Terre. Quand je monte ou reprends un service, je commence par la sécurité : durcissement, droits d'accès, logs. Prochaine étape : le cloud.",
      location: "93130 Noisy-le-Sec",
      cta: "Me contacter",
    },
    experience: {
      title: "Parcours",
      titleAccent: "professionnel",
      jobsTitle: "Expériences",
      educationTitle: "Formations",
      targetStatus: "Visé",
      jobs: [
        {
          title: "Administrateur Systèmes & Réseaux",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Premier de l'équipe à repérer des comptes de messagerie compromis et une connexion suspecte à l'administration Microsoft 365. Après la campagne de phishing qui a suivi depuis des comptes étudiants, participation active à la gestion de crise avec le DSI pendant 6 jours",
            "Migration de Google Workspace vers Microsoft 365 pour 150 collaborateurs et 3 000 étudiants : comptes Entra ID, MFA, gestion des droits",
            "Preuve de concept Wazuh sur 30 machines : collecte des logs, règles de détection, alertes",
            "Exploitation de l'infrastructure : Active Directory (contrôleurs principal et secondaire), DNS, DHCP, téléphonie sur site",
            "Réseau de 20 switchs Cisco, supervision du Wi-Fi, outils open source de ticketing et de gestion des impressions",
            "Durcissement des serveurs Windows et Linux, stratégies de groupe, plan de reprise d'activité",
          ],
        },
        {
          title: "Technicien Supérieur en Technologies Numériques",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Maintenance et administration de l'infrastructure",
            "Configuration des équipements réseau Cisco",
            "Administration de l'environnement vSphere",
            "Mise en production de SysPass, NetAlertX et Evoko",
          ],
        },
        {
          title: "Militaire du rang",
          organization: "Armée de Terre",
          highlights: [
            "Cinq ans de service en environnement opérationnel exigeant",
            "Application stricte des procédures et des consignes de sécurité",
          ],
        },
      ],
      education: [
        {
          title: "Mastère Cybersécurité Cloud",
          organization: "En alternance, 2027-2029",
          status: "Visé",
          description: "Titre RNCP 7 : gestion des identités, protection des workloads, architectures hybrides, conformité",
        },
        {
          title: "Certifications Microsoft AZ-500 & SC-200",
          organization: "Azure Security Engineer, Security Operations Analyst",
          status: "Visé",
          description: "Sécurité Azure et Microsoft 365 : identités, réseau, données, détection avec Defender et Sentinel",
        },
        {
          title: "Administrateur Systèmes & Réseaux",
          organization: "IPI Groupe IGENSIA",
          status: "RNCP 6",
        },
        {
          title: "Technicien Système Réseaux et Sécurité",
          organization: "IPI Groupe IGENSIA",
          status: "RNCP 5",
        },
      ],
    },
    skills: {
      title: "Compétences",
      titleAccent: "techniques",
      categories: [
        {
          title: "Cloud",
          skills: ["Microsoft 365", "Entra ID (IAM, MFA)", "Notions de sécurité GCP"],
        },
        {
          title: "Sécurité",
          skills: ["Durcissement Windows et Linux", "Stratégies de groupe (GPO)", "VPN (WireGuard, IPSec)", "RADIUS, 802.1X"],
        },
        {
          title: "Supervision",
          skills: ["Wazuh", "Zabbix", "Analyse de logs", "Gestion d'incidents"],
        },
        {
          title: "Systèmes",
          skills: ["Windows Server, Active Directory", "Linux (Debian, Fedora)", "Proxmox, vSphere", "Docker"],
        },
        {
          title: "Réseau",
          skills: ["Cisco (OSPF, EIGRP, NAT)", "VLAN et segmentation", "DHCP, DNS"],
        },
        {
          title: "Continuité et scripts",
          skills: ["Plan de reprise d'activité", "Sauvegardes et restauration", "PowerShell, Python"],
        },
      ],
    },
    projects: {
      title: "Projets",
      titleAccent: "personnels",
      items: [
        {
          title: "Homelab",
          description: "Mon labo perso sous Proxmox, pour tester ce que je n'ai pas le droit de casser au travail.",
          details: ["Domaine Active Directory de test", "Réseau découpé en VLAN", "Machines Windows et Linux pour tester le durcissement"],
        },
        {
          title: "Supervision & SIEM",
          description: "Surveiller à la fois la disponibilité des services et les événements de sécurité.",
          details: [
            "Wazuh : agents, règles, alertes",
            "Zabbix : hôtes, services, seuils",
            "Tableaux de bord communs",
          ],
        },
        {
          title: "Sécurisation d'un réseau Wi-Fi",
          description: "Authentification forte et séparation des usages sur le réseau sans fil.",
          details: [
            "Authentification 802.1X via RADIUS (NPS)",
            "Un SSID par usage, chacun dans son VLAN",
            "Réseau invités isolé, WPA2/WPA3-Enterprise",
          ],
        },
        {
          title: "Cloud privé en local",
          status: "À venir",
          description: "Monter un cloud privé sur le homelab pour voir comment fonctionne une plateforme cloud de l'intérieur.",
          details: [
            "Création d'instances à la demande",
            "Réseaux virtuels et groupes de sécurité",
            "Gestion des identités et des accès",
          ],
        },
      ],
    },
    contact: {
      title: "Prenons",
      titleAccent: "contact",
      text: "Une offre d'alternance ou une question sur mon parcours : le plus simple est de m'écrire.",
    },
    footer: "Administrateur Systèmes & Réseaux",
    notFound: {
      message: "Page introuvable",
      back: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: "Nicolas HELT | System & Network Admin, Cloud Security",
      description:
        "Nicolas HELT, system and network administrator (work-study), focused on cloud security. Looking for a cloud security work-study position from September 2027.",
    },
    nav: {
      experience: "Background",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      switchLabel: "Passer en français",
    },
    hero: {
      role: "System & Network Administrator | Cloud Security",
      badge: "Looking for a cloud security work-study position, September 2027",
      intro:
        "Three years as a work-study student in the IT department of ISC Paris, running 200 workstations for 150 staff and 3,000 students. Before that, five years in the French Army. When I set up or take over a service, I start with security: hardening, access rights, logs. Next step: the cloud.",
      location: "Noisy-le-Sec, France",
      cta: "Get in touch",
    },
    experience: {
      title: "Professional",
      titleAccent: "background",
      jobsTitle: "Experience",
      educationTitle: "Education",
      targetStatus: "Target",
      jobs: [
        {
          title: "System & Network Administrator",
          organization: "ISC Paris (work-study)",
          highlights: [
            "First on the team to spot compromised mailboxes and a suspicious sign-in to the Microsoft 365 admin center. After the phishing campaign that followed from student accounts, played an active part in the 6-day crisis response alongside the IT director",
            "Migration from Google Workspace to Microsoft 365 for 150 staff and 3,000 students: Entra ID accounts, MFA, access rights",
            "Wazuh proof of concept on 30 machines: log collection, detection rules, alerts",
            "Infrastructure operations: Active Directory (primary and secondary domain controllers), DNS, DHCP, on-premises telephony",
            "Network of 20 Cisco switches, Wi-Fi monitoring, open source ticketing and print management tools",
            "Hardening of Windows and Linux servers, group policies, disaster recovery plan",
          ],
        },
        {
          title: "IT Technician",
          organization: "ISC Paris (work-study)",
          highlights: [
            "Infrastructure maintenance and administration",
            "Cisco network equipment configuration",
            "vSphere administration",
            "Deployment of SysPass, NetAlertX and Evoko",
          ],
        },
        {
          title: "Soldier",
          organization: "French Army",
          highlights: [
            "Five years of service in demanding operational environments",
            "Strict application of procedures and safety rules",
          ],
        },
      ],
      education: [
        {
          title: "Master's degree in Cloud Cybersecurity",
          organization: "Work-study, 2027-2029",
          status: "Target",
          description: "RNCP level 7 (EQF 7): identity management, workload protection, hybrid architectures, compliance",
        },
        {
          title: "Microsoft AZ-500 & SC-200 certifications",
          organization: "Azure Security Engineer, Security Operations Analyst",
          status: "Target",
          description: "Azure and Microsoft 365 security: identity, network, data, detection with Defender and Sentinel",
        },
        {
          title: "System & Network Administrator",
          organization: "IPI Groupe IGENSIA",
          status: "RNCP 6 (Bachelor's level)",
        },
        {
          title: "Systems, Networks & Security Technician",
          organization: "IPI Groupe IGENSIA",
          status: "RNCP 5 (Associate level)",
        },
      ],
    },
    skills: {
      title: "Technical",
      titleAccent: "skills",
      categories: [
        {
          title: "Cloud",
          skills: ["Microsoft 365", "Entra ID (IAM, MFA)", "GCP security basics"],
        },
        {
          title: "Security",
          skills: ["Windows and Linux hardening", "Group policies (GPO)", "VPN (WireGuard, IPSec)", "RADIUS, 802.1X"],
        },
        {
          title: "Monitoring",
          skills: ["Wazuh", "Zabbix", "Log analysis", "Incident response"],
        },
        {
          title: "Systems",
          skills: ["Windows Server, Active Directory", "Linux (Debian, Fedora)", "Proxmox, vSphere", "Docker"],
        },
        {
          title: "Networking",
          skills: ["Cisco (OSPF, EIGRP, NAT)", "VLANs and segmentation", "DHCP, DNS"],
        },
        {
          title: "Continuity and scripting",
          skills: ["Disaster recovery plan", "Backup and restore", "PowerShell, Python"],
        },
      ],
    },
    projects: {
      title: "Personal",
      titleAccent: "projects",
      items: [
        {
          title: "Homelab",
          description: "My personal lab on Proxmox, where I test what I am not allowed to break at work.",
          details: ["Test Active Directory domain", "Network split into VLANs", "Windows and Linux machines to test hardening"],
        },
        {
          title: "Monitoring & SIEM",
          description: "Watching both service availability and security events.",
          details: ["Wazuh: agents, rules, alerts", "Zabbix: hosts, services, thresholds", "Shared dashboards"],
        },
        {
          title: "Securing a Wi-Fi network",
          description: "Strong authentication and separated uses on the wireless network.",
          details: [
            "802.1X authentication with RADIUS (NPS)",
            "One SSID per use, each in its own VLAN",
            "Isolated guest network, WPA2/WPA3-Enterprise",
          ],
        },
        {
          title: "On-premises private cloud",
          status: "Upcoming",
          description: "Building a private cloud on the homelab to see how a cloud platform works from the inside.",
          details: ["On-demand instances", "Virtual networks and security groups", "Identity and access management"],
        },
      ],
    },
    contact: {
      title: "Get in",
      titleAccent: "touch",
      text: "A work-study offer or a question about my background: email is the easiest way to reach me.",
    },
    footer: "System & Network Administrator",
    notFound: {
      message: "Page not found",
      back: "Back to home",
    },
  },
};

export type Translations = (typeof translations)["fr"];
