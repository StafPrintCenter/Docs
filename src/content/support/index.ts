import type {
  SupportArticle,
  SupportArticleSource,
  SupportCategory,
} from "@/types/support";

const categoryModules = import.meta.glob<{ category: SupportCategory }>("./*/index.ts", {
  eager: true,
});
const articleModules = import.meta.glob<{ article: SupportArticleSource }>("./*/*.ts", {
  eager: true,
});

function orderOf(segment: string): number {
  const match = /^(\d+)\s*\.\s*/.exec(segment);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function segments(path: string): string[] {
  return path.replace(/^\.\//, "").replace(/\.ts$/, "").split("/");
}

function readingTime(content: string): string {
  const plainText = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>|[#>*_`|:[\]()-]/g, " ")
    .trim();
  const words = plainText ? plainText.split(/\s+/u).length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

const articlesByDirectory = new Map<
  string,
  { order: number; article: SupportArticleSource }[]
>();

for (const [path, mod] of Object.entries(articleModules)) {
  const [categoryDir, fileName] = segments(path);
  if (!categoryDir || !fileName || fileName === "index" || !mod.article) continue;
  const bucket = articlesByDirectory.get(categoryDir) ?? [];
  bucket.push({ order: orderOf(fileName), article: mod.article });
  articlesByDirectory.set(categoryDir, bucket);
}

export const categories: SupportCategory[] = Object.entries(categoryModules)
  .map(([path, mod]) => ({ directory: segments(path)[0] ?? "", category: mod.category }))
  .sort((a, b) => orderOf(a.directory) - orderOf(b.directory))
  .map(({ category }) => category);

export const articles: SupportArticle[] = Object.entries(categoryModules)
  .map(([path, mod]) => ({ directory: segments(path)[0] ?? "", category: mod.category }))
  .sort((a, b) => orderOf(a.directory) - orderOf(b.directory))
  .flatMap(({ directory, category }) =>
    (articlesByDirectory.get(directory) ?? [])
      .sort((a, b) => a.order - b.order)
      .map(({ article }) => ({
        ...article,
        category: category.id,
        readTime: readingTime(article.content),
      })),
  );
