export type ArticleVote = "up" | "down";

/**
 * Type aligné sur la réponse de POST /public/docs/article-feedback
 */
export type APIArticleFeedback = {
  id: string;
  articleKey: string;
  vote: ArticleVote;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
};