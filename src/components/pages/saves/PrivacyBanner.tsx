import { ShieldCheck } from "lucide-react";
import { RETENTION_DAYS } from "@/hooks/useSavedArticles";

export function SavedPrivacyBanner() {
  return (
    <div className="mt-6 rounded-xl border border-info/25 bg-info/8 p-4 text-sm">
      <p className="mb-1 flex items-center gap-2 font-medium text-foreground">
        <ShieldCheck className="size-4 text-info" />
        Comment vos données sont traitées
      </p>
      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
        <li>
          Les enregistrements sont stockés <strong>uniquement dans votre navigateur</strong>{" "}
          (localStorage). Aucun envoi vers nos serveurs, aucun compte requis.
        </li>
        <li>
          Nous conservons seulement le titre, la description courte et le lien de l'article.
        </li>
        <li>
          Durée de conservation : <strong>{RETENTION_DAYS} jours</strong>, puis suppression
          automatique — sauf si vous les retirez manuellement avant.
        </li>
        <li>Vider le cache de votre navigateur supprime aussi cette liste.</li>
      </ul>
    </div>
  );
}