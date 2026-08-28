import { useMemo, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { CheckCircle2, ThumbsDown, ThumbsUp, Loader2, AlertCircle } from "lucide-react";
import { useArticleFeedback } from "@/hooks/useArticleFeedback";
import { submitArticleFeedback, DocsFeedbackApiError } from "@/stores/useDocsFeedbackStore";
import { SITE } from "@/data/site";

interface ArticleFeedbackProps {
  /** Optionnel — si absent, déduit automatiquement de l'URL courante (/docs/$space/$slug → "space/slug") */
  articleKey?: string;
}

type Step = "idle" | "askComment" | "submitting" | "submitted";

export function ArticleFeedback({ articleKey: articleKeyProp }: ArticleFeedbackProps) {
  // Déduction automatique depuis l'URL — strict:false pour ne pas exiger
  // d'être exactement sur /docs/$space/$slug si le composant est réutilisé ailleurs.
  const routeParams = useParams({ strict: false }) as { space?: string; slug?: string };
  const articleKey = articleKeyProp ?? (routeParams.space && routeParams.slug ? `${routeParams.space}/${routeParams.slug}` : "");

  const { feedback, save } = useArticleFeedback(articleKey);

  const [pendingVote, setPendingVote] = useState<"down" | null>(null);
  const [comment, setComment] = useState("");
  const [step, setStep] = useState<Step>("idle");
  const [error, setError] = useState<string | null>(null);

  const hasVoted = feedback !== null;

  const submit = async (vote: "up" | "down", commentValue?: string) => {
    if (!articleKey) return;
    setError(null);
    setStep("submitting");
    try {
      const result = await submitArticleFeedback({ articleKey, vote, comment: commentValue });
      save({ vote: result.vote, comment: result.comment ?? undefined, at: result.createdAt });
      setStep("submitted");
    } catch (err) {
      const message = err instanceof DocsFeedbackApiError ? err.message : "Une erreur est survenue lors de l'envoi.";
      setError(message);
      setStep(vote === "down" ? "askComment" : "idle");
    }
  };

  const handleUp = () => submit("up");

  const handleDownClick = () => {
    setPendingVote("down");
    setStep("askComment");
  };

  const handleSendComment = () => submit("down", comment.trim() || undefined);
  const handleSkipComment = () => submit("down");

  const thankYouMessage = useMemo(() => {
    if (feedback?.vote === "up") {
      return "Merci pour votre retour positif ! Ravi que cet article vous ait été utile.";
    }
    if (feedback?.vote === "down") {
      return feedback.comment
        ? "Merci pour votre retour détaillé, il nous aide à améliorer cet article."
        : "Merci pour votre retour, nous allons revoir cet article.";
    }
    return "Merci, votre retour a bien été enregistré.";
  }, [feedback]);

  if (!articleKey) return null;

  return (
    <section className="mt-14 rounded-2xl border border-border bg-card p-6">
      {step === "idle" && !hasVoted && (
        <>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Cet article vous a-t-il été utile ?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Votre retour nous aide à améliorer la documentation {SITE.name}.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleUp}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-emerald/50 hover:bg-emerald/8 hover:text-emerald"
            >
              <ThumbsUp className="size-4" /> Oui
            </button>
            <button
              type="button"
              onClick={handleDownClick}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-coral/50 hover:bg-coral/8 hover:text-coral"
            >
              <ThumbsDown className="size-4" /> Non
            </button>
          </div>
        </>
      )}

      {step === "askComment" && (
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Comment pouvons-nous améliorer cet article ?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Facultatif, mais très apprécié.</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            maxLength={2000}
            placeholder="Information manquante, exemple peu clair, capture obsolète…"
            className="mt-3 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSendComment}
              className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-strong"
            >
              Envoyer mon retour
            </button>
            <button
              type="button"
              onClick={handleSkipComment}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Passer, envoyer sans commentaire
            </button>
          </div>
        </div>
      )}

      {step === "submitting" && (
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Envoi en cours…
        </p>
      )}

      {(step === "submitted" || (step === "idle" && hasVoted)) && (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald">
          <CheckCircle2 className="size-4" /> {thankYouMessage}
        </p>
      )}

      {error && (
        <p className="mt-3 flex items-center gap-2 text-xs text-destructive">
          <AlertCircle className="size-3.5 shrink-0" /> {error}
        </p>
      )}
    </section>
  );
}
