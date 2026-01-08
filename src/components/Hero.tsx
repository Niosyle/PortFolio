import { Mail, MapPin, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border border-border">
              <img 
                src={profilePhoto} 
                alt="Nicolas HELT" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span className="text-xs font-medium text-muted-foreground">En alternance</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="terminal-text mb-4 animate-fade-in">
              &gt; ./whoami
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-slide-up">
              Nicolas <span className="text-gradient">HELT</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Administrateur Systèmes & Réseaux
            </h2>
            
            {/* Trajectory badge */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
                Incoming: Master Cybersecurity – Infrastructure & Cloud
              </span>
            </div>

            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Profil expérimenté en sécurisation d'infrastructures Windows/Linux, durcissement systèmes, 
              gestion des identités (IAM) et supervision SIEM. Parcours structuré vers la cybersécurité 
              opérationnelle : protection des infrastructures, sécurité cloud et continuité de service.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href="mailto:nicolas.nhelt@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                nicolas.nhelt@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                91230 Montgeron
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#experience" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity glow-primary"
              >
                Voir mon parcours
              </a>
              <a 
                href="https://app.hackthebox.com/profile/NyOne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Profil HTB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
