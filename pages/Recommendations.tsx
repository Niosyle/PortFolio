import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { listApprovedRecommendations, submitRecommendation } from "@/lib/recommendations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

export default function Recommendations() {
  const qc = useQueryClient();

  const { data = [], isLoading } = useQuery({
    queryKey: ["recommendations", "approved"],
    queryFn: listApprovedRecommendations,
  });

  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    relationship: "",
    linkedin: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return form.name.trim().length >= 2 && form.message.trim().length >= 20;
  }, [form.name, form.message]);

  const mutation = useMutation({
    mutationFn: () =>
      submitRecommendation({
        name: form.name,
        role: form.role,
        company: form.company,
        relationship: form.relationship,
        linkedin: form.linkedin,
        message: form.message,
      }),
    onSuccess: async () => {
      setForm({ name: "", role: "", company: "", relationship: "", linkedin: "", message: "" });
      toast({
        title: "Recommandation envoyée",
        description: "Merci. Elle sera visible après validation.",
      });
      // On ne refetch pas forcément (car status=pending), mais ça garde le pattern propre
      await qc.invalidateQueries({ queryKey: ["recommendations", "approved"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible d’envoyer la recommandation. Réessaie plus tard.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Recommandations</h1>
          <p className="mt-2 text-muted-foreground">
            Retours professionnels (publics). Les nouvelles recommandations sont publiées après validation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Ajouter une recommandation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                placeholder="Nom / Prénom"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  placeholder="Fonction"
                  value={form.role}
                  onChange={(e) => setForm((s) => ({ ...s, role: e.target.value }))}
                />
                <Input
                  placeholder="Entreprise / contexte"
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  placeholder="Relation (manager, collègue, client…)"
                  value={form.relationship}
                  onChange={(e) => setForm((s) => ({ ...s, relationship: e.target.value }))}
                />
                <Input
                  placeholder="LinkedIn (optionnel)"
                  value={form.linkedin}
                  onChange={(e) => setForm((s) => ({ ...s, linkedin: e.target.value }))}
                />
              </div>
              <Textarea
                placeholder="Message (min. 20 caractères). Factuel, lié au travail réel."
                className="min-h-[140px]"
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              />
              <Button
                className="w-full"
                disabled={!canSubmit || mutation.isPending}
                onClick={() => mutation.mutate()}
              >
                {mutation.isPending ? "Envoi…" : "Envoyer"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Anti-abus : publication après validation.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Recommandations publiées</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-muted-foreground">Chargement…</p>
              ) : data.length === 0 ? (
                <p className="text-muted-foreground">Aucune recommandation publiée pour le moment.</p>
              ) : (
                <div className="space-y-5">
                  {data.map((r, idx) => (
                    <div key={r.id}>
                      <div className="text-sm leading-relaxed">“{r.message}”</div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        — <span className="text-foreground">{r.name}</span>
                        {r.role ? `, ${r.role}` : ""}
                        {r.company ? ` (${r.company})` : ""}
                        {r.relationship ? ` • ${r.relationship}` : ""}
                        {r.linkedin ? (
                          <>
                            {" "}
                            •{" "}
                            <a className="underline" href={r.linkedin} target="_blank" rel="noreferrer">
                              LinkedIn
                            </a>
                          </>
                        ) : null}
                      </div>
                      {idx < data.length - 1 ? <Separator className="mt-5" /> : null}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
