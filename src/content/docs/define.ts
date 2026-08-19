import type { DocArticle } from "@/types/docs";

/** Helper compact pour déclarer un article de documentation. */
export function defineArticle(
  slug: string,
  title: string,
  description: string,
  tags: string[],
  status: DocArticle["status"],
  updatedAt: string,
  content: string,
): DocArticle {
  return { slug, title, description, tags, status, updatedAt, content };
}
