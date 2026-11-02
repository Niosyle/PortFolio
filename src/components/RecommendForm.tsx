import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formEndpoint, notify, OWNER_EMAIL, track } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";

/*
  Formulaire de recommandation, ouvert par le lien nhelt.fr/#recommander (à envoyer aux collaborateurs).
  Rien n'est publié automatiquement : le texte arrive par mail, puis est validé dans l'admin.
  - Si une URL Formspree est configurée (Réglages), envoi direct.
  - Sinon, le message est préparé dans la messagerie du collaborateur.
*/

const HASH = "#recommander";
const MAX = 1200;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

const RecommendForm = () => {
  const { t, lang } = useLanguage();
  const f = t.recommend;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    role: "",
    company: "",
    relation: "colleague",
    linkedin: "",
    message: "",
    consent: false,
    website: "", // champ piège anti-robots, invisible pour les humains
  });

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === HASH);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    setOpen(false);
    if (window.location.hash === HASH) history.replaceState(null, "", window.location.pathname);
  };

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));

  const summary = () =>
    [
      `${f.name} : ${values.name}`,
      `${f.role} : ${values.role}`,
      `${f.company} : ${values.company}`,
      `${f.relation} : ${f.relations[values.relation as keyof typeof f.relations]}`,
      `LinkedIn : ${values.linkedin || "-"}`,
      `${f.consentShort} : ${values.consent ? "oui" : "non"}`,
      "",
      values.message,
    ].join("\n");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.website) return; // robot
    track("recommendation-submit", { lang });

    if (!formEndpoint) {
      const subject = `${f.mailSubject} ${values.name}`;
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary())}`;
      setStatus("sent");
      notify("Nouvelle recommandation (envoi par mail)");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${f.mailSubject} ${values.name}`,
          name: values.name,
          role: values.role,
          company: values.company,
          relation: values.relation,
          linkedin: values.linkedin,
          consent: values.consent ? "oui" : "non",
          message: values.message,
          lang,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      notify("Nouvelle recommandation reçue");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-w-xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{f.title}</DialogTitle>
          <DialogDescription>{f.intro}</DialogDescription>
        </DialogHeader>

        {status === "sent" ? (
          <p className="text-sm text-foreground py-4">{formEndpoint ? f.thanks : f.thanksMail}</p>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm">
                <span className="font-medium">{f.name}</span>
                <input required maxLength={80} autoComplete="name" className={field} value={values.name} onChange={set("name")} />
              </label>
              <label className="space-y-1 text-sm">
                <span className="font-medium">{f.role}</span>
                <input required maxLength={80} autoComplete="organization-title" className={field} value={values.role} onChange={set("role")} />
              </label>
              <label className="space-y-1 text-sm">
                <span className="font-medium">{f.company}</span>
                <input required maxLength={80} autoComplete="organization" className={field} value={values.company} onChange={set("company")} />
              </label>
              <label className="space-y-1 text-sm">
                <span className="font-medium">{f.relation}</span>
                <select className={field} value={values.relation} onChange={set("relation")}>
                  {Object.entries(f.relations).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block space-y-1 text-sm">
              <span className="font-medium">{f.linkedin}</span>
              <input
                type="url"
                maxLength={200}
                pattern="https://([a-z]+\.)?linkedin\.com/.*"
                placeholder="https://www.linkedin.com/in/..."
                className={field}
                value={values.linkedin}
                onChange={set("linkedin")}
              />
              <span className="text-xs text-muted-foreground">{f.linkedinHint}</span>
            </label>

            <label className="block space-y-1 text-sm">
              <span className="font-medium">{f.message}</span>
              <textarea
                required
                minLength={40}
                maxLength={MAX}
                rows={6}
                className={field}
                placeholder={f.messageHint}
                value={values.message}
                onChange={set("message")}
              />
              <span className="text-xs text-muted-foreground">
                {values.message.length}/{MAX}
              </span>
            </label>

            {/* Champ piège : caché aux humains, rempli par les robots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={values.website}
              onChange={set("website")}
            />

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" checked={values.consent} onChange={set("consent")} />
              <span>{f.consent}</span>
            </label>

            {status === "error" && <p className="text-sm text-destructive">{f.error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? f.sending : formEndpoint ? f.send : f.sendMail}
            </button>
            <p className="text-xs text-muted-foreground">{f.privacy}</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RecommendForm;
