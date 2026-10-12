import { Mail, MapPin, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 px-6">

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="relative group">
                        <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-xl overflow-hidden border border-border">
              <img
                src={profilePhoto}
                alt="Nicolas HELT"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-medium text-muted-foreground">{t.hero.status}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Nicolas HELT
            </h1>

            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2">
              {t.hero.role}
            </h2>

            {/* Trajectory badge */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-md text-sm font-medium text-primary">
                                {t.hero.badge}
              </span>
            </div>

            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {t.hero.intro}
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:nicolas.nhelt@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                nicolas.nhelt@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {t.hero.location}
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.hero.cta}
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-h-03b75438b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
