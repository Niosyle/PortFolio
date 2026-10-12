import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-h-03b75438b/";
const EMAIL = "nicolas.nhelt@gmail.com";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" label={t.contact.label}>
      <p className="text-foreground/85 max-w-[56ch]">{t.contact.text}</p>
      <p className="mt-5 text-xl md:text-2xl">
        <a href={`mailto:${EMAIL}`} className="text-link break-all">
          {EMAIL}
        </a>
      </p>
      <p className="mt-3 text-[0.95rem]">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">
          {t.contact.linkedin}
        </a>
      </p>
    </Section>
  );
};

export default Contact;
