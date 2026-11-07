export type Lang = "fr";

export const translations = {
  fr: {
    meta: {
      title: "Nicolas HELT | Admin systèmes et réseaux, orienté sécurité cloud",
      description:
        "Nicolas HELT, administrateur systèmes et réseaux en alternance, certifié Microsoft Azure Fundamentals (AZ-900), orienté sécurité cloud. Recherche une alternance en sécurité cloud pour septembre 2027.",
    },
    nav: {
      experience: "Parcours",
      skills: "Compétences",
      projects: "Réalisations",
      contact: "Contact",
    },
    hero: {
      role: "Administrateur systèmes et réseaux, orienté sécurité cloud",
      badge: "Je cherche une alternance en sécurité cloud pour septembre 2027",
      intro:
        "En alternance depuis trois ans au service informatique d'ISC Paris, qui gère 200 postes pour 150 collaborateurs et 3 000 étudiants. Lors d'un incident de sécurité, j'ai repéré les premiers signes de compromission. Avant l'informatique, j'ai passé cinq ans dans l'Armée de Terre. Je veux maintenant me spécialiser dans la sécurité du cloud.",
      location: "93130 Noisy-le-Sec",
      cta: "Me contacter",
      certBadge: "Certifié Microsoft Azure Fundamentals (AZ-900), voir les certifications",
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
            "Repérage des premiers comptes compromis lors d'un incident de sécurité, puis 6 jours de gestion de crise avec le DSI",
            "Participation à la migration de Google Workspace vers Microsoft 365 pour 150 collaborateurs et 3 000 étudiants (Entra ID, MFA)",
            "Exploitation et durcissement de l'Active Directory, des stratégies de groupe, du DNS et du DHCP, suivi du plan de reprise d'activité",
          ],
        },
        {
          title: "Technicien Supérieur en Technologies Numériques",
          organization: "ISC Paris (alternance)",
          highlights: [
            "Maintenance et administration de l'infrastructure",
            "Premières configurations sur les switchs Cisco",
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
          description: "Titre RNCP 7, axé sur la gestion des identités, la protection des workloads et les architectures hybrides",
        },
        {
          title: "Certifications Microsoft AZ-500 & SC-200",
          highlight: "AZ-500 & SC-200",
          organization: "Azure Security Engineer, Security Operations Analyst",
          status: "Visé",
          description: "Pour aller plus loin sur la sécurité Azure et Microsoft 365, avec Defender et Sentinel",
        },
        {
          title: "Certification Microsoft AZ-900",
          highlight: "AZ-900",
          organization: "Microsoft Certified : Azure Fundamentals",
          status: "Obtenue",
          date: "Novembre 2026",
          description: "Les bases d'Azure, de la sécurité et de la gouvernance du cloud",
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
      levels: [
        {
          title: "Au quotidien",
          note: "En alternance à ISC Paris",
          items: [
            "Microsoft 365, Entra ID (IAM, MFA)",
            "Windows Server, Active Directory",
            "Stratégies de groupe (GPO)",
            "Durcissement Windows",
            "DHCP, DNS, VLAN",
            "Gestion d'incidents",
            "Plan de reprise d'activité, sauvegardes",
            "vSphere",
          ],
        },
        {
          title: "Pratiqué",
          note: "En formation et en projet",
          items: [
            "Linux (Debian, Fedora), durcissement",
            "Proxmox, Docker",
            "Zabbix, Wazuh (POC sur 3 postes)",
            "VPN (WireGuard, IPSec)",
            "Cisco (notions)",
            "PowerShell, Python (notions)",
          ],
        },
        {
          title: "En cours",
          note: "Prochaines étapes",
          soon: true,
          items: [
            "Sécurité Azure",
            "Cloud privé en local",
          ],
        },
      ],
    },
    work: {
      title: "Réalisations",
      subtitle: "Ce que j'ai monté et ce que je prépare, au travail et chez moi.",
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
      text: "Pour une offre d'alternance ou une question sur mon parcours, le plus simple est de m'écrire.",
    },
    footer: "Administrateur Systèmes & Réseaux",
    notFound: {
      message: "Page introuvable",
      back: "Retour à l'accueil",
    },
  },

};

export type Translations = (typeof translations)["fr"];
