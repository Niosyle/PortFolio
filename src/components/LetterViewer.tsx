import { Download, FileText, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { letter, OWNER_EMAIL, track } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";

const Watermark = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'><text x='0' y='100' transform='rotate(-25 160 80)' font-family='sans-serif' font-size='16' fill='rgba(120,120,120,0.28)'>nhelt.fr | consultation uniquement</text></svg>\")",
    }}
  />
);

const LetterViewer = () => {
  const { t, lang } = useLanguage();
  if (letter.mode === "hidden") return null;

  const requestHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(t.letter.requestSubject)}`;

  return (
    <Dialog onOpenChange={(open) => open && track("letter-open", { lang })}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-colors"
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          {t.letter.open}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t.letter.title}</DialogTitle>
          <DialogDescription>
            {[letter.author, letter.date].filter(Boolean).join(", ")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4" onContextMenu={(e) => letter.mode === "view" && e.preventDefault()}>
          {letter.pages.map((src, index) => (
            <div key={src} className="relative rounded-lg overflow-hidden border border-border bg-white">
              <img
                src={src}
                alt={`${t.letter.title}, page ${index + 1}`}
                draggable={false}
                className="w-full h-auto select-none"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {letter.mode === "view" && <Watermark />}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {letter.mode === "download" && letter.pdf && (
            <a
              href={letter.pdf}
              download
              data-umami-event="letter-download"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t.letter.download}
            </a>
          )}
          <a
            href={requestHref}
            data-umami-event="letter-request"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-sm font-medium rounded-lg border border-border hover:border-primary/50"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            {t.letter.request}
          </a>
        </div>
        {letter.mode === "view" && <p className="text-xs text-muted-foreground">{t.letter.viewOnly}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default LetterViewer;
