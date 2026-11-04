export type Lang = "fr" | "en";

// Règle : chaque information n'apparaît qu'à un seul endroit.
// En-tête = qui je suis et ce que je cherche. Expériences = réalisations chiffrées.
// Compétences = outils. Réalisations = projets et missions avec preuves (src/content/realisations.ts). Contact = comment me joindre.

export const translations = {
  fr: {
    meta: {
      title: "Nicolas HELT | Admin systèmes et réseaux, orienté sécurité cloud",
      description:
        "Nicolas HELT, administrateur systèmes et réseaux en alternance, orienté sécurité cloud. Recherche une alternance en sécurité cloud pour septembre 2027.",
    },
    nav: {
      experience: "Parcours",
      skills: "Compétences",
      projects: "Réalisations",
      contact: "Contact",
      switchLabel: "Switch to English",
    },
    hero: {
      role: "Administrateur systèmes et réseaux, orienté sécurité cloud",
      badge: "Je cherche une alternance en sécurité cloud pour septembre 2027",
      intro:
        "Trois ans d'alternance au service informatique d'ISC Paris : 200 postes, 150 collaborateurs, 3 000 étudiants. Lors d'un incident de sécurité, j'ai repéré les premiers signes de compromission. Avant l'informatique, cinq ans dans l'Armée de Terre. Prochaine étape : la sécurité du cloud.",
      location: "93130 Noisy-le-Sec",
      cta: "Me contacter",
    },
    experience: {
      title: "Parcours",
      titleAccent: "professionnel",
      jobsTitle: "Expériences",
      educationTitle: "Formations et certifications",
      targetStatus: "Visé",
      jobs: [
        {
          title: "Administrateur Systèmes & Réseaux",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Incident de sécurité : détection des premiers comptes compromis, puis 6 jours de gestion de crise avec le DSI",
            "Participation à la migration de Google Workspace vers Microsoft 365 : 150 collaborateurs, 3 000 étudiants, Entra ID et MFA",
            "Exploitation et durcissement : Active Directory, stratégies de groupe, DNS, DHCP, 20 switchs Cisco, Wi-Fi, plan de reprise d'activité",
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
          highlight: "Cybersécurité Cloud",
          organization: "En alternance, 2027-2029",
          status: "Visé",
          description: "Titre RNCP 7 : gestion des identités, protection des workloads, architectures hybrides, conformité",
        },
        {
          title: "Certification Microsoft AZ-900",
          highlight: "AZ-900",
          organization: "Azure Fundamentals",
          status: "Novembre 2026",
          description: "Bases du cloud Azure : services, sécurité, identités, gouvernance et coûts",
        },
        {
          title: "Certifications Microsoft AZ-500 & SC-200",
          highlight: "AZ-500 & SC-200",
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
          skills: ["Analyse de logs", "Gestion d'incidents", "Wazuh, Zabbix (homelab, à venir)"],
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
    work: {
      title: "Réalisations",
      subtitle: "Ce que j'ai monté, au travail et chez moi.",
      clickHint: "Cliquez sur une fiche pour le détail et les captures.",
      tabs: { projects: "Projets", missions: "Missions" },
      all: "Tout",
      categories: {
        infra: "Infrastructure",
        cloud: "Cloud",
        securite: "Sécurité",
        reseau: "Réseau",
        supervision: "Supervision",
      },
      status: { ongoing: "En cours", upcoming: "À venir" },
      seeDetail: "Voir le détail",
      proofs: "captures",
      context: "Contexte",
      actions: "Ce que j'ai fait",
      result: "Résultat",
    },
    cv: {
      download: "Télécharger mon CV",
      short: "CV",
    },
    recommendations: {
      title: "Recommandations",
      subtitle: "Ce qu'en disent les personnes avec qui j'ai travaillé.",
      verify: "Voir le profil LinkedIn de",
      cta: "Vous avez travaillé avec moi ?",
      ctaLink: "Laisser une recommandation",
    },
    letter: {
      open: "Lire la lettre de recommandation",
      title: "Lettre de recommandation",
      download: "Télécharger le PDF",
      request: "Demander l'original",
      requestSubject: "Demande de la lettre de recommandation originale",
      viewOnly: "Version de consultation. L'original signé est transmis sur demande.",
    },
    recommend: {
      title: "Recommander Nicolas",
      intro: "Quelques lignes suffisent. Rien n'est publié sans validation, et vous pouvez demander le retrait à tout moment.",
      name: "Nom et prénom",
      role: "Poste",
      company: "Entreprise ou établissement",
      relation: "Votre relation",
      relations: {
        manager: "Responsable",
        colleague: "Collègue",
        teacher: "Formateur",
        client: "Utilisateur ou client",
        other: "Autre",
      },
      linkedin: "Profil LinkedIn (facultatif)",
      linkedinHint: "Permet aux recruteurs de vérifier que la recommandation vient bien de vous.",
      message: "Votre recommandation",
      messageHint: "Sur quoi avez-vous travaillé ensemble ? Qu'est-ce qui vous a marqué ?",
      consent: "J'accepte que ce texte soit publié sur nhelt.fr avec mon nom, mon poste et mon entreprise.",
      consentShort: "Accord de publication",
      send: "Envoyer",
      sendMail: "Préparer l'envoi par mail",
      sending: "Envoi en cours...",
      thanks: "Merci ! Votre recommandation a bien été reçue. Elle sera publiée après relecture.",
      thanksMail: "Votre messagerie s'est ouverte avec le message prérempli. Il ne reste qu'à l'envoyer. Merci !",
      error: "L'envoi a échoué. Réessayez ou écrivez directement à Nicolas@helt.fr.",
      privacy: "Vos informations servent uniquement à publier cette recommandation. Retrait sur simple demande à Nicolas@helt.fr.",
      mailSubject: "Recommandation pour nhelt.fr de",
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
      title: "Nicolas HELT | System and network admin, moving into cloud security",
      description:
        "Nicolas HELT, system and network administrator (work-study), focused on cloud security. Looking for a cloud security work-study position from September 2027.",
    },
    nav: {
      experience: "Background",
      skills: "Skills",
      projects: "Work",
      contact: "Contact",
      switchLabel: "Passer en français",
    },
    hero: {
      role: "System and network administrator, moving into cloud security",
      badge: "Looking for a cloud security work-study position, September 2027",
      intro:
        "Three years as a work-study student in the IT department of ISC Paris: 200 workstations, 150 staff, 3,000 students. During a security incident, I spotted the early signs of compromise. Before IT, five years in the French Army. Next step: cloud security.",
      location: "Noisy-le-Sec, France",
      cta: "Get in touch",
    },
    experience: {
      title: "Professional",
      titleAccent: "background",
      jobsTitle: "Experience",
      educationTitle: "Education and certifications",
      targetStatus: "Target",
      jobs: [
        {
          title: "System & Network Administrator",
          organization: "ISC Paris (work-study)",
          highlights: [
            "Security incident: detected the first compromised accounts, then 6 days of crisis response alongside the IT director",
            "Took part in the migration from Google Workspace to Microsoft 365: 150 staff, 3,000 students, Entra ID and MFA",
            "Operations and hardening: Active Directory, group policies, DNS, DHCP, 20 Cisco switches, Wi-Fi, disaster recovery plan",
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
          highlight: "Cloud Cybersecurity",
          organization: "Work-study, 2027-2029",
          status: "Target",
          description: "RNCP level 7 (EQF 7): identity management, workload protection, hybrid architectures, compliance",
        },
        {
          title: "Microsoft AZ-900 certification",
          highlight: "AZ-900",
          organization: "Azure Fundamentals",
          status: "November 2026",
          description: "Azure cloud fundamentals: services, security, identity, governance and pricing",
        },
        {
          title: "Microsoft AZ-500 & SC-200 certifications",
          highlight: "AZ-500 & SC-200",
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
          skills: ["Log analysis", "Incident response", "Wazuh, Zabbix (homelab, upcoming)"],
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
    work: {
      title: "Work",
      subtitle: "What I have built, at work and at home.",
      clickHint: "Click a card for details and screenshots.",
      tabs: { projects: "Projects", missions: "Tasks" },
      all: "All",
      categories: {
        infra: "Infrastructure",
        cloud: "Cloud",
        securite: "Security",
        reseau: "Networking",
        supervision: "Monitoring",
      },
      status: { ongoing: "In progress", upcoming: "Upcoming" },
      seeDetail: "See details",
      proofs: "screenshots",
      context: "Context",
      actions: "What I did",
      result: "Result",
    },
    cv: {
      download: "Download my resume",
      short: "Resume",
    },
    recommendations: {
      title: "Recommendations",
      subtitle: "What the people I have worked with say.",
      verify: "See the LinkedIn profile of",
      cta: "Have we worked together?",
      ctaLink: "Leave a recommendation",
    },
    letter: {
      open: "Read the recommendation letter",
      title: "Recommendation letter",
      download: "Download the PDF",
      request: "Request the original",
      requestSubject: "Request for the original recommendation letter",
      viewOnly: "Viewing copy. The signed original is available on request.",
    },
    recommend: {
      title: "Recommend Nicolas",
      intro: "A few lines are enough. Nothing is published without review, and you can ask for removal at any time.",
      name: "Full name",
      role: "Job title",
      company: "Company or organization",
      relation: "How you know Nicolas",
      relations: {
        manager: "Manager",
        colleague: "Colleague",
        teacher: "Instructor",
        client: "User or client",
        other: "Other",
      },
      linkedin: "LinkedIn profile (optional)",
      linkedinHint: "Lets recruiters check that the recommendation really comes from you.",
      message: "Your recommendation",
      messageHint: "What did you work on together? What stood out to you?",
      consent: "I agree that this text may be published on nhelt.fr with my name, job title and company.",
      consentShort: "Publication consent",
      send: "Send",
      sendMail: "Prepare the email",
      sending: "Sending...",
      thanks: "Thank you! Your recommendation has been received. It will be published after review.",
      thanksMail: "Your email app has opened with the message prefilled. You just need to send it. Thank you!",
      error: "Sending failed. Please try again or write directly to Nicolas@helt.fr.",
      privacy: "Your information is only used to publish this recommendation. Removal on request at Nicolas@helt.fr.",
      mailSubject: "Recommendation for nhelt.fr from",
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
