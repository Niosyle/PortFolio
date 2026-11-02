/*
  Chargement du contenu des réalisations.

  Le contenu se modifie depuis l'espace admin (nhelt.fr/admin) :
  chaque projet est un fichier de src/content/projects/,
  chaque mission un fichier de src/content/missions/.
  Les captures sont enregistrées dans public/realisations/.
*/

export type Text = { fr: string; en: string };
export type TextList = { fr: string[]; en: string[] };

export type Category = "infra" | "cloud" | "securite" | "reseau" | "supervision";

export type Proof = { src: string; caption: Text };

export type Project = {
  slug: string;
  order: number;
  category: Category;
  icon: "server" | "activity" | "wifi" | "cloud" | "shield" | "network";
  status?: "ongoing" | "upcoming";
  title: Text;
  summary: Text;
  highlights: TextList;
  tech: string[];
  context?: Text;
  actions?: TextList;
  result?: Text;
  proofs?: Proof[];
};

export type Mission = {
  slug: string;
  category: Category;
  date: string;
  where: Text;
  title: Text;
  context: Text;
  action: Text;
  result: Text;
  tech: string[];
  proofs: Proof[];
};

/* ---------- Normalisation : l'admin peut laisser des champs vides ---------- */

type Raw = Record<string, unknown>;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const text = (value: unknown): Text => {
  const v = (value ?? {}) as Raw;
  const fr = str(v.fr);
  const en = str(v.en);
  // Si une langue manque, on affiche l'autre plutôt qu'un vide
  return { fr: fr || en, en: en || fr };
};

const optionalText = (value: unknown): Text | undefined => {
  const t = text(value);
  return t.fr ? t : undefined;
};

const list = (value: unknown): string[] =>
  Array.isArray(value) ? value.map(str).filter(Boolean) : [];

const textList = (value: unknown): TextList => {
  const v = (value ?? {}) as Raw;
  const fr = list(v.fr);
  const en = list(v.en);
  return { fr: fr.length ? fr : en, en: en.length ? en : fr };
};

const optionalTextList = (value: unknown): TextList | undefined => {
  const t = textList(value);
  return t.fr.length ? t : undefined;
};

const proofs = (value: unknown): Proof[] =>
  Array.isArray(value)
    ? value
        .map((p) => ({ src: str((p as Raw)?.src), caption: text((p as Raw)?.caption) }))
        .filter((p) => p.src)
    : [];

const slugFromPath = (path: string) => path.split("/").pop()!.replace(/\.json$/, "");

/* ---------- Projets ---------- */

const projectFiles = import.meta.glob("./projects/*.json", { eager: true, import: "default" });

export const projects: Project[] = Object.entries(projectFiles)
  .map(([path, data]) => {
    const raw = data as Raw;
    const status = str(raw.status);
    const p = proofs(raw.proofs);
    return {
      slug: str(raw.id) || slugFromPath(path),
      order: Number(raw.order) || 99,
      category: (str(raw.category) || "infra") as Category,
      icon: (str(raw.icon) || "server") as Project["icon"],
      status: status === "ongoing" || status === "upcoming" ? status : undefined,
      title: text(raw.title),
      summary: text(raw.summary),
      highlights: textList(raw.highlights),
      tech: list(raw.tech),
      context: optionalText(raw.context),
      actions: optionalTextList(raw.actions),
      result: optionalText(raw.result),
      proofs: p.length ? p : undefined,
    } satisfies Project;
  })
  .filter((p) => p.title.fr)
  .sort((a, b) => a.order - b.order);

/* ---------- Missions ---------- */

const missionFiles = import.meta.glob("./missions/*.json", { eager: true, import: "default" });

export const missions: Mission[] = Object.entries(missionFiles)
  .map(([path, data]) => {
    const raw = data as Raw;
    return {
      slug: str(raw.id) || slugFromPath(path),
      category: (str(raw.category) || "infra") as Category,
      date: str(raw.date).slice(0, 7),
      where: text(raw.where),
      title: text(raw.title),
      context: text(raw.context),
      action: text(raw.action),
      result: text(raw.result),
      tech: list(raw.tech),
      proofs: proofs(raw.proofs),
    } satisfies Mission;
  })
  // Une mission sans capture n'est pas une preuve : elle n'est pas affichée
  .filter((m) => m.title.fr && m.proofs.length > 0);
