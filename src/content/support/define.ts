import type { SupportArticle } from "@/types/support";

/** Helper compact pour déclarer un article du centre d'aide. */
export function defineSupportArticle(
  slug: string,
  title: string,
  description: string,
  category: string,
  readTime: string,
  content: string,
): SupportArticle {
  return { slug, title, description, category, readTime, content };
}
