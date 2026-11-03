import { useEffect, useMemo, useState } from "react";
import { Server, Cloud, Activity, Wifi, Shield, Network, ImageIcon, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { track } from "@/content/site";
import {
  projects,
  missions,
  type Category,
  type Mission,
  type Project,
  type Proof,
  type Text,
  type TextList,
} from "@/content/realisations";

const icons: Record<Project["icon"], LucideIcon> = {
  server: Server,
  activity: Activity,
  wifi: Wifi,
  cloud: Cloud,
  shield: Shield,
  network: Network,
};

type Tab = "projects" | "missions";
type Selected = { kind: "project"; item: Project } | { kind: "mission"; item: Mission } | null;

const hasDetail = (p: Project) => Boolean(p.context || p.actions || p.result || p.proofs?.length);

const formatDate = (value: string, lang: "fr" | "en") => {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Date(year, month - 1).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    month: "long",
    year: "numeric",
  });
};

const Tags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="text-xs px-2.5 py-1 border border-border/80 rounded-full text-muted-foreground">
        {item}
      </span>
    ))}
  </div>
);

const ProofGallery = ({ proofs, lang }: { proofs: Proof[]; lang: "fr" | "en" }) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {proofs.map((proof) => (
      <figure key={proof.src} className="space-y-1.5">
        <a href={proof.src} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={proof.src}
            alt={proof.caption[lang]}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover aspect-video bg-secondary hover:opacity-90 transition-opacity"
          />
        </a>
        <figcaption className="text-xs text-muted-foreground">{proof.caption[lang]}</figcaption>
      </figure>
    ))}
  </div>
);

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-sm font-semibold text-foreground mb-1.5">{title}</h4>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const Projects = () => {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<Tab>("projects");
  const [filter, setFilter] = useState<Category | "all">("all");
  const [selected, setSelected] = useState<Selected>(null);

  const tx = (value: Text) => value[lang];
  const tl = (value: TextList) => value[lang];

  const sortedMissions = useMemo(() => [...missions].sort((a, b) => b.date.localeCompare(a.date)), []);
  const list = tab === "projects" ? projects : sortedMissions;
  const categories = useMemo(
    () => Array.from(new Set(list.map((item) => item.category))),
    [list],
  );
  const visible = filter === "all" ? list : list.filter((item) => item.category === filter);

  // Lien direct : nhelt.fr/#projet-homelab ou nhelt.fr/#mission-xxx ouvre la fiche
  useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const project = projects.find((p) => `projet-${p.slug}` === hash && hasDetail(p));
      const mission = missions.find((m) => `mission-${m.slug}` === hash);
      if (project) {
        setTab("projects");
        setSelected({ kind: "project", item: project });
      } else if (mission) {
        setTab("missions");
        setSelected({ kind: "mission", item: mission });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const open = (next: Exclude<Selected, null>) => {
    setSelected(next);
    track(next.kind === "project" ? "open-project" : "open-mission", { slug: next.item.slug });
    const prefix = next.kind === "project" ? "projet" : "mission";
    history.replaceState(null, "", `#${prefix}-${next.item.slug}`);
  };

  const close = () => {
    setSelected(null);
    history.replaceState(null, "", "#projets");
  };

  const switchTab = (next: Tab) => {
    setTab(next);
    setFilter("all");
  };

  return (
    <section id="projets" className="px-6 py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={t.work.title}
          subtitle={`${t.work.subtitle}${missions.length > 0 || projects.some(hasDetail) ? ` ${t.work.clickHint}` : ""}`}
        />

        {/* Onglets : l'onglet Missions n'apparaît que s'il y a au moins une mission */}
        {missions.length > 0 && (
          <div role="tablist" className="flex gap-8 mb-8 border-b border-border/70">
            {(["projects", "missions"] as Tab[]).map((value) => (
              <button
                key={value}
                role="tab"
                type="button"
                aria-selected={tab === value}
                onClick={() => switchTab(value)}
                className={`-mb-px pb-3 border-b text-base transition-colors ${
                  tab === value
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.work.tabs[value]}
                <span className="ml-2 opacity-70">{value === "projects" ? projects.length : missions.length}</span>
              </button>
            ))}
          </div>
        )}

        {/* Filtres par domaine */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {(["all", ...categories] as (Category | "all")[]).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  filter === value
                    ? "border-primary/70 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {value === "all" ? t.work.all : t.work.categories[value]}
              </button>
            ))}
          </div>
        )}

        {tab === "projects" ? (
          <div className="grid md:grid-cols-2 gap-px bg-border/70 border border-border/70 rounded-sm overflow-hidden">
            {(visible as Project[]).map((project) => {
              const Icon = icons[project.icon];
              const clickable = hasDetail(project);
              const Card = clickable ? "button" : "div";
              return (
                <Card
                  key={project.slug}
                  {...(clickable ? { type: "button" as const, onClick: () => open({ kind: "project", item: project }) } : {})}
                  className={`text-left bg-background p-8 lg:p-10 transition-colors ${
                    clickable ? "hover:bg-card cursor-pointer" : ""
                  }`}
                >
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                    <Icon className="w-4 h-4 text-primary/80" aria-hidden="true" />
                    {t.work.categories[project.category]}
                  </p>

                  <h3 className="text-2xl font-normal mb-3 text-foreground flex flex-wrap items-baseline gap-3">
                    {tx(project.title)}
                    {project.status && (
                      <span className="font-serif italic text-base text-primary">
                        {t.work.status[project.status]}
                      </span>
                    )}
                  </h3>

                  <p className="text-foreground/75 leading-relaxed mb-5">{tx(project.summary)}</p>

                  <ul className="space-y-1.5 mb-4">
                    {tl(project.highlights).map((detail) => (
                      <li key={detail} className="text-sm text-muted-foreground flex items-center gap-3">
                        <span className="w-2 h-px bg-primary/70" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Tags items={project.tech} />

                  {clickable && (
                    <p className="mt-4 text-sm font-medium text-primary">
                      {t.work.seeDetail}
                      {project.proofs?.length ? ` (${project.proofs.length} ${t.work.proofs})` : ""}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(visible as Mission[]).map((mission) => (
              <button
                key={mission.slug}
                type="button"
                onClick={() => open({ kind: "mission", item: mission })}
                className="text-left card-elevated rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-video bg-secondary">
                  {mission.proofs[0] && (
                    <img
                      src={mission.proofs[0].src}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-background/90 text-foreground">
                    <ImageIcon className="w-3 h-3" aria-hidden="true" />
                    {mission.proofs.length}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {formatDate(mission.date, lang)}, {tx(mission.where)}
                  </p>
                  <h3 className="font-semibold text-foreground leading-snug mb-1.5">{tx(mission.title)}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tx(mission.result)}</p>
                  <Tags items={mission.tech} />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fiche détaillée */}
      <Dialog open={selected !== null} onOpenChange={(isOpen) => !isOpen && close()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selected?.kind === "project" && (
            <>
              <DialogHeader>
                <p className="text-xs text-muted-foreground">{t.work.categories[selected.item.category]}</p>
                <DialogTitle className="text-xl">{tx(selected.item.title)}</DialogTitle>
                <DialogDescription>{tx(selected.item.summary)}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5">
                {selected.item.context && <Block title={t.work.context}>{tx(selected.item.context)}</Block>}
                {selected.item.actions && (
                  <Block title={t.work.actions}>
                    <ul className="list-disc pl-5 space-y-1">
                      {tl(selected.item.actions).map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </Block>
                )}
                {selected.item.result && <Block title={t.work.result}>{tx(selected.item.result)}</Block>}
                {selected.item.proofs?.length ? <ProofGallery proofs={selected.item.proofs} lang={lang} /> : null}
                <Tags items={selected.item.tech} />
              </div>
            </>
          )}
          {selected?.kind === "mission" && (
            <>
              <DialogHeader>
                <p className="text-xs text-muted-foreground">
                  {formatDate(selected.item.date, lang)}, {tx(selected.item.where)}, {t.work.categories[selected.item.category]}
                </p>
                <DialogTitle className="text-xl">{tx(selected.item.title)}</DialogTitle>
                <DialogDescription className="sr-only">{tx(selected.item.result)}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  <Block title={t.work.context}>{tx(selected.item.context)}</Block>
                  <Block title={t.work.actions}>{tx(selected.item.action)}</Block>
                  <Block title={t.work.result}>{tx(selected.item.result)}</Block>
                </div>
                <ProofGallery proofs={selected.item.proofs} lang={lang} />
                <Tags items={selected.item.tech} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
