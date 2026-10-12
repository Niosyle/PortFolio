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
      badge: "Objectif : Mastère Cybersécurité Cloud",
      intro:
        "Profil orienté sécurité des environnements cloud et hybrides : gestion des identités (Entra ID, IAM, MFA), sécurisation Microsoft 365, durcissement des infrastructures Windows/Linux et supervision SIEM. Objectif : ingénieur sécurité cloud.",
      location: "93130 Noisy-le-Sec",
      cta: "Voir mon parcours",
    },
    experience: {
      title: "Parcours",
      titleAccent: "Professionnel",
      jobsTitle: "Expériences",
      educationTitle: "Formations",
      targetStatus: "Visé",
      jobs: [
        {
          title: "Administrateur Systèmes & Réseaux",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Sécurisation d'infrastructures Windows/Linux (durcissement, GPO)",
            "Déploiement et exploitation SIEM Wazuh (logs, alertes, corrélation)",
            "Migration cloud sécurisée Google Workspace → Microsoft 365 (Entra ID, IAM, MFA)",
            "Mise en place PRA et procédures de continuité de service",
            "Gestion des incidents de sécurité et documentation",
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
      titleAccent: "Cloud & Sécurité",
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
          skills: ["Wazuh (déploiement & exploitation)", "Analyse de logs", "Détection d'incidents", "Alerting & corrélation"],
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
      titleAccent: "Personnels",
      items: [
        {
          title: "Homelab Sécurisé",
          description: "Infrastructure personnelle avec focus sécurité et durcissement",
          details: ["Active Directory durci", "Segmentation réseau (VLAN)", "Virtualisation Proxmox", "Politiques de sécurité (GPO)"],
        },
        {
          title: "Supervision & SIEM",
          description:
            "Mise en place d'une supervision complète : disponibilité des services et détection des événements de sécurité",
          details: [
            "Déploiement Wazuh (agents, règles, alertes)",
            "Supervision Zabbix (hôtes, services, seuils)",
            "Centralisation et analyse des logs",
            "Tableaux de bord et alerting",
          ],
        },
        {
          title: "Sécurisation d'un réseau Wi-Fi",
          description: "Durcissement d'un réseau sans fil : authentification forte et cloisonnement des usages",
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
            "Déploiement d'un cloud privé sur le homelab pour comprendre le fonctionnement d'une plateforme cloud de l'intérieur",
          details: [
            "Provisionnement d'instances à la demande (IaaS)",
            "Réseaux virtuels et groupes de sécurité",
            "Gestion des identités et des accès",
            "Application des bonnes pratiques de sécurité cloud",
          ],
        },
      ],
      diffTitle: "Ce qui",
      diffTitleAccent: "me différencie",
      diffSubtitle: "Profil avec une expérience concrète en environnement de production",
      differentiators: [
        {
          title: "Sécurité infrastructure intégrée",
          description: "Approche sécurité dès la conception : durcissement, IAM, logs, supervision SIEM.",
        },
        {
          title: "Expérience cloud Microsoft 365 / Entra ID",
          description: "Migration et sécurisation d'un environnement M365 en production (IAM, MFA). Notions sécurité GCP.",
        },
        {
          title: "Rigueur militaire",
          description: "Fiabilité sous pression, respect strict des procédures et consignes de sécurité.",
        },
        {
          title: "Autonomie en environnement de production",
          description:
            "Capacité à intervenir rapidement sur des infrastructures sécurisées, dans un cadre défini et documenté.",
        },
        {
          title: "Trajectoire claire",
          description:
            "Montée en compétences vers la sécurité cloud : Master Cybersécurité Cloud, certifications AZ-500 et SC-200.",
        },
      ],
    },
    contact: {
      title: "Prenons",
      titleAccent: "contact",
      text1:
        "Je recherche une alternance en sécurité cloud dans le cadre d'un Master Cybersécurité Cloud, à partir de septembre 2027.",
      text2: "Objectif : sécuriser les identités, les workloads et les environnements cloud et hybrides.",
      quote:
        "De l'infrastructure on-premise à la sécurité cloud : une trajectoire claire vers l'ingénierie sécurité cloud.",
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
      badge: "Goal: Master's degree in Cloud Cybersecurity",
      intro:
        "Focused on securing cloud and hybrid environments: identity management (Entra ID, IAM, MFA), Microsoft 365 security, Windows/Linux infrastructure hardening and SIEM monitoring. Goal: cloud security engineer.",
      location: "Noisy-le-Sec, France",
      cta: "View my background",
    },
    experience: {
      title: "Professional",
      titleAccent: "Background",
      jobsTitle: "Experience",
      educationTitle: "Education",
      targetStatus: "Target",
      jobs: [
        {
          title: "System & Network Administrator",
          organization: "ISC Paris (work-study)",
          highlights: [
            "Windows/Linux infrastructure security (hardening, GPO)",
            "Wazuh SIEM deployment and operation (logs, alerts, correlation)",
            "Secure cloud migration from Google Workspace → Microsoft 365 (Entra ID, IAM, MFA)",
            "Disaster recovery plan and business continuity procedures",
            "Security incident handling and documentation",
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
      title: "Cloud & Security",
      titleAccent: "Skills",
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
          skills: ["Wazuh (deployment & operation)", "Log analysis", "Incident detection", "Alerting & correlation"],
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
      titleAccent: "Projects",
      items: [
        {
          title: "Secure Homelab",
          description: "Personal infrastructure built with a focus on security and hardening",
          details: ["Hardened Active Directory", "Network segmentation (VLAN)", "Proxmox virtualization", "Security policies (GPO)"],
        },
        {
          title: "Monitoring & SIEM",
          description: "End-to-end monitoring: service availability and security event detection",
          details: [
            "Wazuh deployment (agents, rules, alerts)",
            "Zabbix monitoring (hosts, services, thresholds)",
            "Log centralization and analysis",
            "Dashboards and alerting",
          ],
        },
        {
          title: "Wi-Fi Network Security",
          description: "Wireless network hardening: strong authentication and traffic isolation",
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
          description: "Deploying a private cloud on the homelab to understand how a cloud platform works from the inside",
          details: [
            "On-demand instance provisioning (IaaS)",
            "Virtual networks and security groups",
            "Identity and access management",
            "Applying cloud security best practices",
          ],
        },
      ],
      diffTitle: "What",
      diffTitleAccent: "sets me apart",
      diffSubtitle: "Hands-on experience in production environments",
      differentiators: [
        {
          title: "Security built into infrastructure",
          description: "Security by design: hardening, IAM, logging, SIEM monitoring.",
        },
        {
          title: "Microsoft 365 / Entra ID cloud experience",
          description: "Migration and security of a production M365 environment (IAM, MFA). GCP security basics.",
        },
        {
          title: "Military discipline",
          description: "Reliable under pressure, strict compliance with procedures and security instructions.",
        },
        {
          title: "Autonomy in production",
          description: "Able to act quickly on secured infrastructures, within a defined and documented framework.",
        },
        {
          title: "Clear career path",
          description:
            "Building skills toward cloud security: Master's in Cloud Cybersecurity, AZ-500 and SC-200 certifications.",
        },
      ],
    },
    contact: {
      title: "Get in",
      titleAccent: "touch",
      text1:
        "I am looking for a cloud security work-study position as part of a Master's degree in Cloud Cybersecurity, starting September 2027.",
      text2: "Goal: securing identities, workloads, and cloud and hybrid environments.",
      quote: "From on-premises infrastructure to cloud security: a clear path toward cloud security engineering.",
    },
    footer: "System & Network Administrator",
    notFound: {
      message: "Page not found",
      back: "Back to home",
    },
  },
};

export type Translations = (typeof translations)["fr"];
