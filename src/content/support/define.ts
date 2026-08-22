import type { SupportArticleSource } from "@/types/support";

/** Helper compact pour déclarer un article du centre d'aide. */
export function defineSupportArticle(
  slug: string,
  title: string,
  description: string,
  content: string,
): SupportArticleSource {
  return { slug, title, description, content };
}
