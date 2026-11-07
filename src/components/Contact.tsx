import { useLanguage } from "@/i18n/LanguageContext";
import CvButton from "@/components/CvButton";

const EMAIL = "Nicolas@helt.fr";
const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-helt/";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-28 lg:py-40 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <span aria-hidden="true" className="block w-10 h-px bg-primary mb-6" />
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight text-foreground">
          {t.contact.title} {t.contact.titleAccent}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{t.contact.text}</p>

        <a
          href={`mailto:${EMAIL}`}
          data-umami-event="email-click"
          className="inline-block mt-12 font-serif text-3xl md:text-5xl text-primary underline decoration-primary/30 underline-offset-[10px] decoration-1 hover:decoration-primary transition-colors break-all"
        >
          {EMAIL}
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <CvButton variant="secondary" />
          <a
            href={LINKEDIN_URL}
            data-umami-event="linkedin-click"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground hover:border-primary/60 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
