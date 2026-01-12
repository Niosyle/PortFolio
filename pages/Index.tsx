import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";

const Index = () => {
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
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Nicolas HELT — Administrateur Systèmes & Réseaux
        </p>
      </footer>
    </div>
  );
};

export default Index;
