import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="terminal-text mb-4 block">&gt; contact --init</span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Prenons <span className="text-gradient">contact</span>
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Je recherche une alternance RNCP niveau 7 en cybersécurité opérationnelle à partir de 2027.
          Ouvert aux échanges sur des opportunités ou projets techniques.
        </p>

        {/* Main CTA */}
        <a 
          href="mailto:nicolas.nhelt@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity glow-primary mb-10"
        >
          <Mail className="w-5 h-5" />
          nicolas.nhelt@gmail.com
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/nicolas-helt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://app.hackthebox.com/profile/NyOne"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover:border-accent/50 text-muted-foreground hover:text-foreground transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">Hack The Box</span>
          </a>
        </div>

        {/* Footer quote */}
        <div className="mt-16 pt-8 border-t border-border">
          <blockquote className="text-muted-foreground italic">
            "Mon objectif est clair : intégrer un parcours RNCP 7 en cybersécurité opérationnelle pour contribuer à la protection des infrastructures et des systèmes d'information."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Contact;
