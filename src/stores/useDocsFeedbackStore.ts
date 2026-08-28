import { resolveApiUrl } from "@/lib/api-url";
import type { APIArticleFeedback, ArticleVote } from "@/data/docs-feedback";

type FeedbackResponse = { data: APIArticleFeedback };

export class DocsFeedbackApiError extends Error {
  status: number;
  fieldErrors?: Record<string, string[]>;
  constructor(message: string, status: number, fieldErrors?: Record<string, string[]>) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export interface SubmitArticleFeedbackParams {
  articleKey: string;
  vote: ArticleVote;
  comment?: string;
}

/**
 * ⚠️ Le backend n'a pas d'endpoint de mise à jour : chaque appel crée une
 * nouvelle ligne. On n'appelle donc cette fonction qu'une seule fois par
 * feedback définitif (vote "up" immédiat, ou vote "down" + commentaire
 * envoyés ensemble en un seul POST) pour éviter les doublons.
 */
export async function submitArticleFeedback(params: SubmitArticleFeedbackParams): Promise<APIArticleFeedback> {
  const formData = new FormData();
  formData.append("article_key", params.articleKey);
  formData.append("vote", params.vote);
  if (params.comment) formData.append("comment", params.comment);

  const url = resolveApiUrl(`/api/public/docs/article-feedback`);
  const response = await fetch(url, { method: "POST", body: formData });

  if (!response.ok) {
    let payload: { message?: string; errors?: Record<string, string[]> } = {};
    try {
      payload = await response.json();
    } catch {
      // corps non-JSON — repli générique
    }
    throw new DocsFeedbackApiError(
      payload.message ?? "Erreur lors de l'envoi de votre avis.",
      response.status,
      payload.errors
    );
  }

  const json: FeedbackResponse = await response.json();
  return json.data;
}