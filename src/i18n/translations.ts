export type Lang = "fr" | "en";

export const translations = {
  fr: {
    meta: {
      title: "Nicolas HELT | Admin Sys & Réseaux, Sécurité Cloud",
      description:
        "Nicolas HELT, Administrateur Systèmes & Réseaux en alternance, orienté sécurité cloud : Entra ID, Microsoft 365, IAM, durcissement et supervision SIEM.",
    },
    nav: {
      experience: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      switchLabel: "Switch to English",
    },
    hero: {
      status: "En alternance",
      role: "Administrateur Systèmes & Réseaux | Sécurité Cloud",
      badge: "Je cherche une alternance en sécurité cloud pour septembre 2027",
      intro:
        "Depuis 2023, je travaille en alternance au service informatique d'ISC Paris : 200 postes, 150 collaborateurs et 3 000 étudiants. J'ai participé à la migration vers Microsoft 365, participé activement à la gestion d'un incident de sécurité que j'avais repéré en premier et testé Wazuh sur une partie du parc. Je veux maintenant mettre cette expérience de terrain au service de la sécurité du cloud.",
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
            "Migration de Google Workspace vers Microsoft 365 pour 150 collaborateurs et 3 000 étudiants : comptes Entra ID, MFA, gestion des droits",
            "Incident de sécurité : premier de l'équipe à repérer des comptes de messagerie compromis et une connexion suspecte à l'administration Microsoft 365, bien avant la campagne de phishing envoyée depuis des comptes étudiants. Participation active à la gestion de crise avec le DSI pendant 6 jours",
            "Preuve de concept Wazuh sur 30 machines : collecte des logs, règles de détection, alertes",
            "Exploitation d'un parc de 200 postes : Active Directory (contrôleurs principal et secondaire), DNS, DHCP, téléphonie sur site",
            "Réseau de 20 switchs Cisco, supervision du Wi-Fi, outils open source de ticketing et de gestion des impressions",
            "Durcissement des serveurs Windows et Linux, stratégies de groupe (GPO), plan de reprise d'activité",
          ],
        },
        {
          title: "Technicien Supérieur en Technologies Numériques",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Maintenance et administration d'infrastructures",
            "Configuration réseau Cisco",
            "Virtualisation vSphere",
            "Mise en production de serveurs (SysPass, NetAlertX, Evoko)",
            "Participation à la supervision et sécurité du SI",
          ],
        },
        {
          title: "Militaire du rang",
          organization: "Armée de Terre",
          highlights: [
            "Application stricte des procédures et consignes de sécurité",
            "Travail en environnement opérationnel exigeant",
            "Rigueur, fiabilité et sens des responsabilités",
          ],
        },
      ],
      education: [
        {
          title: "Mastère Cybersécurité Cloud",
          organization: "Objectif 2027-2029",
          status: "Visé",
          description:
            "Formation en alternance (RNCP 7) orientée sécurité cloud : IAM, protection des workloads, architectures hybrides et conformité",
        },
        {
          title: "Certifications Microsoft AZ-500 & SC-200",
          organization: "Azure Security Engineer, Security Operations Analyst",
          status: "Visé",
          description:
            "Sécurité Azure et Microsoft 365 : identités, réseau, données et détection via Defender / Sentinel",
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
      titleAccent: "cloud et sécurité",
      subtitle:
        "Focus sur la sécurité des environnements cloud et hybrides : identités, infrastructures et supervision.",
      categories: [
        {
          title: "Sécurité Cloud",
          skills: ["Microsoft 365 Security", "Entra ID (IAM, MFA)", "Migration cloud sécurisée", "Notions sécurité GCP"],
        },
        {
          title: "Sécurité Infrastructure",
          skills: [
            "Durcissement systèmes",
            "Gestion des accès (IAM)",
            "Politiques de sécurité (GPO)",
            "Accès distant chiffré (WireGuard, IPSec)",
          ],
        },
        {
          title: "SIEM & Supervision",
          skills: ["Wazuh (déploiement & exploitation)", "Analyse de logs", "Détection et gestion d'incidents", "Alerting & corrélation"],
        },
        {
          title: "Systèmes",
          skills: [
            "Windows Server",
            "Linux (Debian, Fedora)",
            "Active Directory",
            "Virtualisation & conteneurs (Proxmox, vSphere, Docker)",
          ],
        },
        {
          title: "Réseaux",
          skills: ["LAN / VLAN", "DHCP / DNS", "Équipements Cisco", "Segmentation réseau"],
        },
        {
          title: "Continuité & PRA",
          skills: ["Plan de reprise d'activité", "Sauvegardes & restauration", "Haute disponibilité", "Documentation technique"],
        },
      ],
    },
    projects: {
      title: "Projets",
      titleAccent: "personnels",
      items: [
        {
          title: "Homelab Sécurisé",
          description: "Mon labo perso sous Proxmox, pour tester ce que je n'ai pas le droit de casser au travail.",
          details: ["Active Directory durci", "Segmentation réseau (VLAN)", "Virtualisation Proxmox", "Politiques de sécurité (GPO)"],
        },
        {
          title: "Supervision & SIEM",
          description:
            "Surveiller à la fois la disponibilité des services et les événements de sécurité.",
          details: [
            "Déploiement Wazuh (agents, règles, alertes)",
            "Supervision Zabbix (hôtes, services, seuils)",
            "Centralisation et analyse des logs",
            "Tableaux de bord et alerting",
          ],
        },
        {
          title: "Sécurisation d'un réseau Wi-Fi",
          description: "Authentification forte et séparation des usages sur le réseau sans fil.",
          details: [
            "Authentification 802.1X via RADIUS (NPS)",
            "Séparation des SSID par VLAN",
            "Isolation du réseau invités",
            "Chiffrement WPA2/WPA3-Enterprise",
          ],
        },
        {
          title: "Cloud privé en local",
          status: "À venir",
          description:
            "Monter un cloud privé sur le homelab pour voir comment fonctionne une plateforme cloud de l'intérieur.",
          details: [
            "Provisionnement d'instances à la demande (IaaS)",
            "Réseaux virtuels et groupes de sécurité",
            "Gestion des identités et des accès",
            "Application des bonnes pratiques de sécurité cloud",
          ],
        },
      ],
      diffTitle: "Ce que",
      diffTitleAccent: "j'apporte",
      diffSubtitle: "Trois ans d'alternance en production et cinq ans dans l'armée.",
      differentiators: [
        {
          title: "La sécurité dès le départ",
          description: "Quand je monte un serveur, je pense durcissement, droits d'accès et logs dès le début, pas après coup.",
        },
        {
          title: "Du concret sur Microsoft 365",
          description: "J'ai participé à la migration de 150 collaborateurs et 3 000 étudiants vers Microsoft 365 : comptes Entra ID, MFA, droits d'accès.",
        },
        {
          title: "Cinq ans d'armée",
          description: "J'ai l'habitude des procédures, des consignes de sécurité et de travailler sous pression.",
        },
        {
          title: "Repérer les signaux tôt",
          description:
            "Lors d'un incident de sécurité, j'ai été le premier de l'équipe à voir les comptes compromis et une connexion suspecte à l'administration Microsoft 365, bien avant l'attaque par phishing. J'ai ensuite participé activement à la gestion de la crise avec le DSI pendant 6 jours.",
        },
      ],
    },
    contact: {
      title: "Prenons",
      titleAccent: "contact",
      text1:
        "Je cherche une alternance en sécurité du cloud à partir de septembre 2027, en parallèle de mon Mastère.",
      text2: "Le plus simple pour me joindre, c'est par mail.",
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
        "Nicolas HELT, System & Network Administrator (work-study), focused on cloud security: Entra ID, Microsoft 365, IAM, hardening and SIEM monitoring.",
    },
    nav: {
      experience: "Background",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      switchLabel: "Passer en français",
    },
    hero: {
      status: "Work-study",
      role: "System & Network Administrator | Cloud Security",
      badge: "Looking for a cloud security work-study position, September 2027",
      intro:
        "Since 2023, I have been working in the IT department of ISC Paris as a work-study student: 200 workstations, 150 staff and 3,000 students. I worked on the migration to Microsoft 365, played an active part in handling a security incident I had spotted first and trialed Wazuh on part of the network. I now want to bring this hands-on experience to cloud security.",
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
            "Migration from Google Workspace to Microsoft 365 for 150 staff and 3,000 students: Entra ID accounts, MFA, access rights",
            "Security incident: first on the team to spot compromised mailboxes and a suspicious sign-in to the Microsoft 365 admin center, well before the phishing campaign sent from student accounts. Played an active part in the 6-day crisis response alongside the IT director",
            "Wazuh proof of concept on 30 machines: log collection, detection rules, alerts",
            "Running a 200-workstation environment: Active Directory (primary and secondary domain controllers), DNS, DHCP, on-premises telephony",
            "Network of 20 Cisco switches, Wi-Fi monitoring, open source ticketing and print management tools",
            "Hardening of Windows and Linux servers, group policies (GPO), disaster recovery plan",
          ],
        },
        {
          title: "IT Technician",
          organization: "ISC Paris (work-study)",
          highlights: [
            "Infrastructure maintenance and administration",
            "Cisco network configuration",
            "vSphere virtualization",
            "Server deployment (SysPass, NetAlertX, Evoko)",
            "Contribution to IT monitoring and security",
          ],
        },
        {
          title: "Soldier",
          organization: "French Army",
          highlights: [
            "Strict compliance with security procedures and instructions",
            "Work in demanding operational environments",
            "Discipline, reliability and sense of responsibility",
          ],
        },
      ],
      education: [
        {
          title: "Master's degree in Cloud Cybersecurity",
          organization: "Target 2027-2029",
          status: "Target",
          description:
            "Work-study program (RNCP level 7, EQF 7) focused on cloud security: IAM, workload protection, hybrid architectures and compliance",
        },
        {
          title: "Microsoft AZ-500 & SC-200 certifications",
          organization: "Azure Security Engineer, Security Operations Analyst",
          status: "Target",
          description:
            "Azure and Microsoft 365 security: identity, network, data and threat detection with Defender / Sentinel",
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
      title: "Cloud and security",
      titleAccent: "skills",
      subtitle: "Focused on securing cloud and hybrid environments: identity, infrastructure and monitoring.",
      categories: [
        {
          title: "Cloud Security",
          skills: ["Microsoft 365 Security", "Entra ID (IAM, MFA)", "Secure cloud migration", "GCP security basics"],
        },
        {
          title: "Infrastructure Security",
          skills: [
            "System hardening",
            "Access management (IAM)",
            "Security policies (GPO)",
            "Encrypted remote access (WireGuard, IPSec)",
          ],
        },
        {
          title: "SIEM & Monitoring",
          skills: ["Wazuh (deployment & operation)", "Log analysis", "Incident detection and response", "Alerting & correlation"],
        },
        {
          title: "Systems",
          skills: [
            "Windows Server",
            "Linux (Debian, Fedora)",
            "Active Directory",
            "Virtualization & containers (Proxmox, vSphere, Docker)",
          ],
        },
        {
          title: "Networking",
          skills: ["LAN / VLAN", "DHCP / DNS", "Cisco equipment", "Network segmentation"],
        },
        {
          title: "Continuity & DRP",
          skills: ["Disaster recovery plan", "Backup & restore", "High availability", "Technical documentation"],
        },
      ],
    },
    projects: {
      title: "Personal",
      titleAccent: "projects",
      items: [
        {
          title: "Secure Homelab",
          description: "My personal lab on Proxmox, where I test what I am not allowed to break at work.",
          details: ["Hardened Active Directory", "Network segmentation (VLAN)", "Proxmox virtualization", "Security policies (GPO)"],
        },
        {
          title: "Monitoring & SIEM",
          description: "Watching both service availability and security events.",
          details: [
            "Wazuh deployment (agents, rules, alerts)",
            "Zabbix monitoring (hosts, services, thresholds)",
            "Log centralization and analysis",
            "Dashboards and alerting",
          ],
        },
        {
          title: "Wi-Fi Network Security",
          description: "Strong authentication and separated uses on the wireless network.",
          details: [
            "802.1X authentication with RADIUS (NPS)",
            "SSIDs separated by VLAN",
            "Guest network isolation",
            "WPA2/WPA3-Enterprise encryption",
          ],
        },
        {
          title: "On-premises Private Cloud",
          status: "Upcoming",
          description: "Building a private cloud on the homelab to see how a cloud platform works from the inside.",
          details: [
            "On-demand instance provisioning (IaaS)",
            "Virtual networks and security groups",
            "Identity and access management",
            "Applying cloud security best practices",
          ],
        },
      ],
      diffTitle: "What",
      diffTitleAccent: "I bring",
      diffSubtitle: "Three years of work-study in production and five years in the army.",
      differentiators: [
        {
          title: "Security from the start",
          description: "When I set up a server, I think about hardening, access rights and logs from day one, not as an afterthought.",
        },
        {
          title: "Hands-on Microsoft 365",
          description: "I took part in migrating 150 staff and 3,000 students to Microsoft 365: Entra ID accounts, MFA, access rights.",
        },
        {
          title: "Five years in the army",
          description: "Used to procedures, safety rules and working under pressure.",
        },
        {
          title: "Spotting early signs",
          description: "During a security incident, I was the first on the team to notice compromised accounts and a suspicious Microsoft 365 admin sign-in, well before the phishing attack. I then played an active part in handling the crisis with the IT director for 6 days.",
        },
      ],
    },
    contact: {
      title: "Get in",
      titleAccent: "touch",
      text1:
        "I am looking for a cloud security work-study position starting September 2027, alongside my Master's degree.",
      text2: "Email is the easiest way to reach me.",
    },
    footer: "System & Network Administrator",
    notFound: {
      message: "Page not found",
      back: "Back to home",
    },
  },
};

export type Translations = (typeof translations)["fr"];
