import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          {t.contact.title} {t.contact.titleAccent}
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {t.contact.text1}
          <br />
          {t.contact.text2}
        </p>

        {/* Main CTA */}
        <a
          href="mailto:nicolas.nhelt@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-10"
        >
          <Mail className="w-5 h-5" />
          nicolas.nhelt@gmail.com
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/nicolas-h-03b75438b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
