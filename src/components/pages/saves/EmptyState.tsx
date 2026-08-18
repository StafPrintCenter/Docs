import { Bookmark } from "lucide-react";

export function SavedEmptyState() {
  return (
    <div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center">
      <Bookmark className="mx-auto mb-3 size-6 text-brand" />
      <p className="text-sm text-muted-foreground">
        Aucune page enregistrée pour l'instant. Utilisez le bouton{" "}
        <span className="font-medium text-foreground">Enregistrer</span> en haut d'un article.
      </p>
    </div>
  );
}