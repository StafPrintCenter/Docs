import { articles, categories } from "@/content/support";
import type { SupportArticle, SupportCategory } from "@/types/support";

/**
 * Le contenu vit dans `src/content/support/<categorie>/<article>.ts`.
 */
export type { SupportArticle, SupportCategory };

export const supportCategories: SupportCategory[] = categories;
export const supportArticles: SupportArticle[] = articles;

export function getSupportArticle(slug: string): SupportArticle | undefined {
  return supportArticles.find((a) => a.slug === slug);
}

export function getSupportCategory(categoryId: string): SupportCategory | undefined {
  return supportCategories.find((category) => category.id === categoryId);
}

export function resolveSupportArticle(
  categoryId: string,
  slug: string,
): SupportArticle | undefined {
  return supportArticles.find((article) => article.category === categoryId && article.slug === slug);
}

export function articlesByCategory(categoryId: string): SupportArticle[] {
  return supportArticles.filter((a) => a.category === categoryId);
}

export const popularSupportArticles = [
  "suivre-ou-recuperer-sa-commande",
  "mot-de-passe-oublie",
  "moyens-de-paiement",
  "donnees-personnelles",
]
  .map((slug) => getSupportArticle(slug))
  .filter((a): a is SupportArticle => Boolean(a));
