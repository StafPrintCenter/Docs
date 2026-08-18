import { useState } from "react";
import { CheckCircle2, ThumbsDown, ThumbsUp } from "lucide-react";
import { useArticleFeedback } from "@/hooks/useArticleFeedback";

export function ArticleFeedback({ articleKey }: { articleKey: string }) {
  const { feedback, vote, addComment } = useArticleFeedback(articleKey);
  const [comment, setComment] = useState("");

  const hasVoted = feedback !== null;
  const submittedComment = Boolean(feedback?.comment);

  return (
    <section className="mt-14 rounded-2xl border border-border bg-card p-6">
      {!hasVoted && (
        <>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Cet article vous a-t-il été utile ?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Votre retour nous aide à améliorer la documentation STAF PRINT CENTER.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => vote("up")}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-emerald/50 hover:bg-emerald/8 hover:text-emerald"
            >
              <ThumbsUp className="size-4" /> Oui
            </button>
            <button
              type="button"
              onClick={() => vote("down")}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-coral/50 hover:bg-coral/8 hover:text-coral"
            >
              <ThumbsDown className="size-4" /> Non
            </button>
          </div>
        </>
      )}

      {feedback?.vote === "up" && (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald">
          <CheckCircle2 className="size-4" /> Merci pour votre retour !
        </p>
      )}

      {feedback?.vote === "down" && !submittedComment && (
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Comment pouvons-nous améliorer cet article ?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Facultatif, mais très apprécié.</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Information manquante, exemple peu clair, capture obsolète…"
            className="mt-3 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
          />
          <button
            type="button"
            onClick={() => addComment(comment.trim() || "-")}
            className="mt-3 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-strong"
          >
            Envoyer mon retour
          </button>
        </div>
      )}

      {submittedComment && (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald">
          <CheckCircle2 className="size-4" /> Merci, votre retour a bien été enregistré.
        </p>
      )}
    </section>
  );
}
