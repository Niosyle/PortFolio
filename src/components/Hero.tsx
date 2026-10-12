import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-h-03b75438b/";
const EMAIL = "nicolas.nhelt@gmail.com";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-14 pb-14 md:pt-24 md:pb-20">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="max-w-[40rem]">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Nicolas Helt
          </h1>
          <p className="mt-3 text-xl md:text-2xl leading-snug text-foreground/80 max-w-[30ch]">
            {t.hero.role}
          </p>

          <p className="mt-8 text-muted-foreground max-w-[62ch]">{t.hero.intro1}</p>
          <p className="mt-4 text-muted-foreground max-w-[62ch]">{t.hero.intro2}</p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            <li>
              <a href={`mailto:${EMAIL}`} className="text-link">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn
              </a>
            </li>
            <li className="text-muted-foreground">{t.hero.location}</li>
          </ul>
        </div>

        <img
          src={profilePhoto}
          alt="Nicolas Helt"
          width={176}
          height={176}
          className="w-28 h-28 md:w-44 md:h-44 rounded-md object-cover border border-border shrink-0"
        />
      </div>
    </section>
  );
};

export default Hero;
