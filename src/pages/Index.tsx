import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Recommendations from "@/components/Recommendations";
import RecommendForm from "@/components/RecommendForm";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <RecommendForm />

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-border/60">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-serif text-base text-foreground/80">Nicolas HELT</p>
          <p>
            © {new Date().getFullYear()} | {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
