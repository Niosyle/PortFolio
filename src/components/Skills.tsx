import { Server, Network, Shield, Cloud, Monitor, Database } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Icônes et mise en avant, alignées par index sur les catégories traduites
const categoryMeta = [
  { icon: Cloud, highlight: true },
  { icon: Shield, highlight: true },
  { icon: Monitor, highlight: true },
  { icon: Server, highlight: false },
  { icon: Network, highlight: false },
  { icon: Database, highlight: false },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {t.skills.title} {t.skills.titleAccent}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((category, index) => {
            const { icon: Icon, highlight } = categoryMeta[index];
            return (
              <div
                key={index}
                className={`card-elevated p-6 rounded-xl border transition-all duration-300 hover:border-primary/30 group ${
                  highlight ? 'border-primary/20' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  highlight
                    ? 'bg-primary/10 text-primary'
                    : 'bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10'
                } transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary/60 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
