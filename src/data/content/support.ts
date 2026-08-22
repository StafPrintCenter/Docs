import { CreditCard, LifeBuoy, Lock, Package, UserRound, Wrench } from "lucide-react";
import { articles, categories } from "@/content/support";
import type { SupportArticle, SupportCategory } from "@/types/support";

export type { SupportArticle, SupportCategory };

export const SUPPORT_CATEGORY_ICONS = {
  account: UserRound,
  billing: CreditCard,
  orders: Package,
  privacy: Lock,
  technical: Wrench,
  contact: LifeBuoy,
} as const;

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

export function totalSupportArticlesCount(): number {
  return supportArticles.length;
}

export function getRecommendedSupportArticles(limit = 4): SupportArticle[] {
  // Mélanger les catégories
  const shuffledCategories = [...supportCategories].sort(() => 0.5 - Math.random());

  const recommended: SupportArticle[] = [];

  for (const category of shuffledCategories) {
    if (recommended.length >= limit) break;

    const categoryArticles = articlesByCategory(category.id);
    if (categoryArticles.length > 0) {
      // Choisir un article au hasard dans cette catégorie
      const randomArticle = categoryArticles[Math.floor(Math.random() * categoryArticles.length)];
      recommended.push(randomArticle);
    }
  }

  return recommended;
}