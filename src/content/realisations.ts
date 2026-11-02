/*
  CONTENU DES RÉALISATIONS
  ========================
  C'est le seul fichier à modifier pour ajouter un projet ou une mission.

  Images : déposer les captures dans public/realisations/<slug>/
  puis les référencer avec le chemin "/realisations/<slug>/fichier.webp".
  Format conseillé : .webp ou .png, 1600 px de large maximum.

  AVANT DE PUBLIER UNE CAPTURE : masquer les adresses IP publiques, noms de
  serveurs, noms d'utilisateurs, adresses mail et tout ce qui identifie l'école.

  Les sections vides ne s'affichent pas : tant qu'il n'y a aucune mission,
  l'onglet « Missions » reste caché.
*/

export type Text = { fr: string; en: string };
export type TextList = { fr: string[]; en: string[] };

export type Category = "infra" | "cloud" | "securite" | "reseau" | "supervision";

export type Proof = {
  /** Chemin de l'image, par exemple "/realisations/wazuh/dashboard.webp" */
  src: string;
  /** Légende courte affichée sous l'image */
  caption: Text;
};

export type Project = {
  slug: string;
  category: Category;
  icon: "server" | "activity" | "wifi" | "cloud" | "shield" | "network";
  status?: "ongoing" | "upcoming";
  title: Text;
  summary: Text;
  highlights: TextList;
  tech: string[];
  /** Détail affiché en cliquant sur la carte (facultatif) */
  context?: Text;
  actions?: TextList;
  result?: Text;
  proofs?: Proof[];
};

export type Mission = {
  slug: string;
  category: Category;
  /** Format AAAA-MM, par exemple "2026-03" */
  date: string;
  /** Où la mission a été réalisée : "ISC Paris", "Homelab"... */
  where: Text;
  title: Text;
  context: Text;
  action: Text;
  result: Text;
  tech: string[];
  /** Au moins une capture : c'est la preuve */
  proofs: Proof[];
};

/* ------------------------------------------------------------------ */
/* PROJETS : les gros sujets, présentés comme des études de cas        */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "homelab",
    category: "infra",
    icon: "server",
    title: { fr: "Homelab", en: "Homelab" },
    summary: {
      fr: "Mon labo perso sous Proxmox, pour tester ce que je n'ai pas le droit de casser au travail.",
      en: "My personal lab on Proxmox, where I test what I am not allowed to break at work.",
    },
    highlights: {
      fr: ["Domaine Active Directory de test", "Réseau découpé en VLAN", "Machines Windows et Linux pour tester le durcissement"],
      en: ["Test Active Directory domain", "Network split into VLANs", "Windows and Linux machines to test hardening"],
    },
    tech: ["Proxmox", "Windows Server", "Linux", "Active Directory"],
  },
  {
    slug: "supervision-siem",
    category: "supervision",
    icon: "activity",
    title: { fr: "Supervision & SIEM", en: "Monitoring & SIEM" },
    summary: {
      fr: "Surveiller à la fois la disponibilité des services et les événements de sécurité.",
      en: "Watching both service availability and security events.",
    },
    highlights: {
      fr: ["Wazuh : agents, règles, alertes", "Zabbix : hôtes, services, seuils", "Tableaux de bord communs"],
      en: ["Wazuh: agents, rules, alerts", "Zabbix: hosts, services, thresholds", "Shared dashboards"],
    },
    tech: ["Wazuh", "Zabbix", "Linux", "Windows"],
  },
  {
    slug: "wifi",
    category: "reseau",
    icon: "wifi",
    title: { fr: "Sécurisation d'un réseau Wi-Fi", en: "Securing a Wi-Fi network" },
    summary: {
      fr: "Authentification forte et séparation des usages sur le réseau sans fil.",
      en: "Strong authentication and separated uses on the wireless network.",
    },
    highlights: {
      fr: [
        "Authentification 802.1X via RADIUS (NPS)",
        "Un SSID par usage, chacun dans son VLAN",
        "Réseau invités isolé, WPA2/WPA3-Enterprise",
      ],
      en: [
        "802.1X authentication with RADIUS (NPS)",
        "One SSID per use, each in its own VLAN",
        "Isolated guest network, WPA2/WPA3-Enterprise",
      ],
    },
    tech: ["RADIUS", "NPS", "802.1X", "VLAN"],
  },
  {
    slug: "cloud-prive",
    category: "cloud",
    icon: "cloud",
    status: "upcoming",
    title: { fr: "Cloud privé en local", en: "On-premises private cloud" },
    summary: {
      fr: "Monter un cloud privé sur le homelab pour voir comment fonctionne une plateforme cloud de l'intérieur.",
      en: "Building a private cloud on the homelab to see how a cloud platform works from the inside.",
    },
    highlights: {
      fr: ["Création d'instances à la demande", "Réseaux virtuels et groupes de sécurité", "Gestion des identités et des accès"],
      en: ["On-demand instances", "Virtual networks and security groups", "Identity and access management"],
    },
    tech: ["Proxmox", "Linux", "IaaS"],
  },
];

/* ------------------------------------------------------------------ */
/* MISSIONS : les petites tâches concrètes, chacune avec sa preuve     */
/* Modèle à copier :                                                   */
/*
  {
    slug: "gpo-ecran-verrouillage",
    category: "securite",
    date: "2026-02",
    where: { fr: "ISC Paris", en: "ISC Paris" },
    title: { fr: "Verrouillage automatique des postes", en: "Automatic workstation lock" },
    context: { fr: "Postes laissés ouverts en salle des profs.", en: "Unattended open sessions in the staff room." },
    action: { fr: "GPO de verrouillage après 10 min, déployée sur l'OU des postes.", en: "Lock GPO after 10 min, deployed to the workstations OU." },
    result: { fr: "200 postes couverts, aucun ticket de régression.", en: "200 workstations covered, no regression ticket." },
    tech: ["Active Directory", "GPO"],
    proofs: [
      { src: "/realisations/gpo-ecran-verrouillage/gpo.webp", caption: { fr: "Paramètre de la GPO", en: "GPO setting" } },
    ],
  },
*/
/* ------------------------------------------------------------------ */

export const missions: Mission[] = [];
