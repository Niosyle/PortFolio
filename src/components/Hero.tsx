import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import CvButton from "@/components/CvButton";

const EMAIL = "Nicolas@helt.fr";
const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-h-03b75438b/";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="max-w-5xl mx-auto grid gap-14 lg:grid-cols-[1fr_300px] lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <p className="flex items-center gap-3 text-sm text-primary mb-8">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.hero.badge}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.02] text-foreground">
            Nicolas HELT
          </h1>
          <p className="mt-5 font-serif italic text-2xl md:text-[1.7rem] leading-snug text-muted-foreground max-w-xl [text-wrap:balance]">
            {t.hero.role}
          </p>

          <p className="mt-10 text-[1.06rem] leading-[1.8] text-foreground/80 max-w-[38rem]">{t.hero.intro}</p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              data-umami-event="email-click"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
            </a>
            <CvButton variant="secondary" />
            <a
              href={LINKEDIN_URL}
              data-umami-event="linkedin-click"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-3 text-foreground/80 underline decoration-border underline-offset-[6px] hover:decoration-primary hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            {EMAIL}
            <span aria-hidden="true" className="mx-3 text-border">|</span>
            {t.hero.location}
          </p>
        </div>

        <figure className="order-1 lg:order-2 relative w-56 sm:w-64 lg:w-full mx-auto lg:mx-0">
          <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-primary/40 rounded-sm" />
          <img
            src={profilePhoto}
            alt="Nicolas HELT"
            width={300}
            height={375}
            className="relative w-full aspect-[4/5] object-cover rounded-sm grayscale-[15%]"
          />
        </figure>
      </div>

      <a
        href="#experience"
        aria-label={t.nav.experience}
        className="hidden lg:flex mx-auto mt-24 w-10 h-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};

export default Hero;
