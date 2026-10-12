import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Strengths from "@/components/Strengths";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nicolas HELT | {t.footer}
        </p>
      </footer>
    </div>
  );
};

export default Index;
