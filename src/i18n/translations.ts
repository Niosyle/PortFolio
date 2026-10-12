export type Lang = "fr" | "en";

export const translations = {
  fr: {
    meta: {
      title: "Nicolas Helt, administrateur systèmes et réseaux",
      description:
        "Administrateur systèmes et réseaux en alternance, je me spécialise en sécurité du cloud : Microsoft 365, Entra ID, durcissement et supervision.",
    },
    nav: {
      experience: "Parcours",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      switchLabel: "Choix de la langue",
    },
    hero: {
      role: "Administrateur systèmes et réseaux, en route vers la sécurité du cloud.",
      intro1:
        "Depuis 2023, je travaille en alternance au service informatique d'ISC Paris : serveurs Windows et Linux, réseau Cisco, Active Directory. J'ai participé à la migration de Google Workspace vers Microsoft 365 et mis en place Wazuh pour surveiller la sécurité du parc. Avant l'informatique, j'ai passé cinq ans dans l'Armée de Terre.",
      intro2:
        "Je vise un Mastère en cybersécurité cloud à partir de septembre 2027, avec les certifications AZ-500 et SC-200 en parallèle.",
      location: "Noisy-le-Sec",
    },
    experience: {
      label: "Parcours",
      jobs: [
        {
          title: "Administrateur systèmes et réseaux",
          organization: "ISC Paris, en alternance",
          highlights: [
            "Durcissement des serveurs Windows et Linux, stratégies de groupe",
            "Déploiement et exploitation de Wazuh : collecte des logs, règles, alertes",
            "Migration de Google Workspace vers Microsoft 365 : comptes Entra ID, MFA, droits d'accès",
            "Rédaction du plan de reprise d'activité et des procédures de continuité",
            "Traitement des incidents de sécurité et documentation",
          ],
        },
        {
          title: "Technicien informatique",
          organization: "ISC Paris, en alternance",
          highlights: [
            "Maintenance et administration de l'infrastructure",
            "Configuration des équipements réseau Cisco",
            "Administration de l'environnement vSphere",
            "Mise en service de SysPass, NetAlertX et Evoko",
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
    },
    education: {
      label: "Formation",
      target: "objectif",
      items: [
        {
          title: "Mastère Cybersécurité Cloud (RNCP 7)",
          organization: "En alternance, à partir de septembre 2027",
        },
        {
          title: "Certifications Microsoft AZ-500 et SC-200",
          organization: "Sécurité Azure et Microsoft 365",
        },
        {
          title: "Administrateur systèmes et réseaux (RNCP 6)",
          organization: "IPI, groupe IGENSIA",
        },
        {
          title: "Technicien systèmes, réseaux et sécurité (RNCP 5)",
          organization: "IPI, groupe IGENSIA",
        },
      ],
    },
    projects: {
      label: "Projets",
      upcoming: "à venir",
      items: [
        {
          title: "Homelab",
          description:
            "Mon labo personnel sous Proxmox, qui me sert à tester ce que je n'ai pas le droit de casser au travail.",
          details: [
            "Domaine Active Directory durci, stratégies de groupe",
            "Réseau découpé en VLAN",
          ],
        },
        {
          title: "Supervision et SIEM",
          description: "Surveiller à la fois la disponibilité des services et les événements de sécurité.",
          details: [
            "Wazuh : agents, règles de détection, alertes",
            "Zabbix : supervision des hôtes et des services, seuils d'alerte",
            "Centralisation des logs et tableaux de bord",
          ],
        },
        {
          title: "Sécurisation d'un réseau Wi-Fi",
          description: "Authentification forte et séparation des usages sur le réseau sans fil.",
          details: [
            "Authentification 802.1X avec RADIUS (NPS)",
            "Un SSID par usage, chacun dans son VLAN",
            "Réseau invités isolé, chiffrement WPA2/WPA3-Enterprise",
          ],
        },
        {
          title: "Cloud privé en local",
          upcoming: true,
          description:
            "Monter un cloud privé sur le homelab pour comprendre ce qui se passe sous le capot d'une plateforme cloud.",
          details: [
            "Création d'instances à la demande",
            "Réseaux virtuels et groupes de sécurité",
            "Gestion des identités et des accès",
          ],
        },
      ],
    },
    skills: {
      label: "Compétences",
      categories: [
        { title: "Cloud", skills: "Microsoft 365, Entra ID (IAM, MFA), notions de sécurité GCP" },
        { title: "Sécurité", skills: "Durcissement, stratégies de groupe, VPN (WireGuard, IPSec), RADIUS" },
        { title: "Supervision", skills: "Wazuh, Zabbix, analyse de logs, gestion des alertes" },
        { title: "Systèmes", skills: "Windows Server, Active Directory, Linux (Debian, Fedora), Proxmox, vSphere, Docker" },
        { title: "Réseau", skills: "Cisco, VLAN, routage (OSPF, EIGRP), DHCP, DNS" },
        { title: "Continuité", skills: "PRA, sauvegardes et restauration, documentation" },
        { title: "Scripts", skills: "PowerShell, Python" },
      ],
    },
    contact: {
      label: "Contact",
      text: "Je cherche une alternance en sécurité du cloud à partir de septembre 2027. Le plus simple pour me joindre, c'est par mail.",
      linkedin: "Profil LinkedIn",
    },
    notFound: {
      message: "Cette page n'existe pas.",
      back: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: "Nicolas Helt, system and network administrator",
      description:
        "System and network administrator (work-study), specializing in cloud security: Microsoft 365, Entra ID, hardening and monitoring.",
    },
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      switchLabel: "Language",
    },
    hero: {
      role: "System and network administrator, moving into cloud security.",
      intro1:
        "Since 2023, I have been working in the IT department of ISC Paris as a work-study student: Windows and Linux servers, Cisco networking, Active Directory. I worked on the migration from Google Workspace to Microsoft 365 and set up Wazuh to monitor security across the network. Before IT, I served five years in the French Army.",
      intro2:
        "I am aiming for a Master's degree in cloud cybersecurity starting September 2027, alongside the AZ-500 and SC-200 certifications.",
      location: "Noisy-le-Sec, France",
    },
    experience: {
      label: "Experience",
      jobs: [
        {
          title: "System and network administrator",
          organization: "ISC Paris, work-study",
          highlights: [
            "Hardening of Windows and Linux servers, group policies",
            "Wazuh deployment and operation: log collection, rules, alerts",
            "Migration from Google Workspace to Microsoft 365: Entra ID accounts, MFA, access rights",
            "Writing the disaster recovery plan and business continuity procedures",
            "Security incident handling and documentation",
          ],
        },
        {
          title: "IT technician",
          organization: "ISC Paris, work-study",
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
    },
    education: {
      label: "Education",
      target: "target",
      items: [
        {
          title: "Master's degree in Cloud Cybersecurity (RNCP 7, EQF 7)",
          organization: "Work-study, starting September 2027",
        },
        {
          title: "Microsoft AZ-500 and SC-200 certifications",
          organization: "Azure and Microsoft 365 security",
        },
        {
          title: "System and Network Administrator (RNCP 6, bachelor's level)",
          organization: "IPI, IGENSIA group",
        },
        {
          title: "Systems, Networks and Security Technician (RNCP 5)",
          organization: "IPI, IGENSIA group",
        },
      ],
    },
    projects: {
      label: "Projects",
      upcoming: "upcoming",
      items: [
        {
          title: "Homelab",
          description: "My personal lab running on Proxmox, where I test what I am not allowed to break at work.",
          details: ["Hardened Active Directory domain, group policies", "Network split into VLANs"],
        },
        {
          title: "Monitoring and SIEM",
          description: "Watching both service availability and security events.",
          details: [
            "Wazuh: agents, detection rules, alerts",
            "Zabbix: host and service monitoring, alert thresholds",
            "Centralized logs and dashboards",
          ],
        },
        {
          title: "Securing a Wi-Fi network",
          description: "Strong authentication and separated uses on the wireless network.",
          details: [
            "802.1X authentication with RADIUS (NPS)",
            "One SSID per use, each in its own VLAN",
            "Isolated guest network, WPA2/WPA3-Enterprise encryption",
          ],
        },
        {
          title: "On-premises private cloud",
          upcoming: true,
          description: "Building a private cloud on the homelab to understand what happens under the hood of a cloud platform.",
          details: ["On-demand instances", "Virtual networks and security groups", "Identity and access management"],
        },
      ],
    },
    skills: {
      label: "Skills",
      categories: [
        { title: "Cloud", skills: "Microsoft 365, Entra ID (IAM, MFA), GCP security basics" },
        { title: "Security", skills: "Hardening, group policies, VPN (WireGuard, IPSec), RADIUS" },
        { title: "Monitoring", skills: "Wazuh, Zabbix, log analysis, alert handling" },
        { title: "Systems", skills: "Windows Server, Active Directory, Linux (Debian, Fedora), Proxmox, vSphere, Docker" },
        { title: "Networking", skills: "Cisco, VLAN, routing (OSPF, EIGRP), DHCP, DNS" },
        { title: "Continuity", skills: "Disaster recovery, backup and restore, documentation" },
        { title: "Scripting", skills: "PowerShell, Python" },
      ],
    },
    contact: {
      label: "Contact",
      text: "I am looking for a cloud security work-study position starting September 2027. Email is the easiest way to reach me.",
      linkedin: "LinkedIn profile",
    },
    notFound: {
      message: "This page does not exist.",
      back: "Back to home",
    },
  },
};

export type Translations = (typeof translations)["fr"];
