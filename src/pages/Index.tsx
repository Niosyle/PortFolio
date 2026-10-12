import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-5 md:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="py-8 border-t border-border text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nicolas Helt
        </p>
      </footer>
    </div>
  );
};

export default Index;
