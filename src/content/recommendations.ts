
export type Recommendation = {
  slug: string;
  name: string;
  role: string;
  company: string;
  relation: "manager" | "colleague" | "teacher" | "client" | "other";
  date: string;
  text: { fr: string; en: string };
  linkedin?: string;
};

type Raw = Record<string, unknown>;
const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const files = import.meta.glob("./recommendations/*.json", { eager: true, import: "default" });

export const recommendations: Recommendation[] = Object.entries(files)
  .map(([path, data]) => {
    const raw = data as Raw;
    const text = (raw.text ?? {}) as Raw;
    const fr = str(text.fr);
    const en = str(text.en);
    const linkedin = str(raw.linkedin);
    return {
      published: raw.published === true && raw.consent === true,
      item: {
        slug: str(raw.id) || path.split("/").pop()!.replace(/\.json$/, ""),
        name: str(raw.name),
        role: str(raw.role),
        company: str(raw.company),
        relation: (str(raw.relation) || "other") as Recommendation["relation"],
        date: str(raw.date).slice(0, 7),
        text: { fr: fr || en, en: en || fr },
        linkedin: /^https:\/\/([a-z]+\.)?linkedin\.com\//.test(linkedin) ? linkedin : undefined,
      } satisfies Recommendation,
    };
  })
  .filter(({ published, item }) => published && item.name && item.text.fr)
  .map(({ item }) => item)
  .sort((a, b) => b.date.localeCompare(a.date));
