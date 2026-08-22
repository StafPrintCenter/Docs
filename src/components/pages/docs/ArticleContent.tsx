import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { ArticleFeedback } from "@/components/docs/ArticleFeedback";
import type { ResolvedArticle } from "@/data/content/docs";
import { ArticleMeta } from "./ArticleMeta";
import { ArticlePaginationNav } from "./ArticlePaginationNav";

interface ArticleContentProps {
  resolved: ResolvedArticle;
}

export function ArticleContent({ resolved }: ArticleContentProps) {
  const { space, article, prev, next } = resolved;

  return (
    <article className="max-w-3xl">
      <header className="mb-8 border-b border-border pb-6">
        <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {article.description}
        </p>
      </header>

      <MarkdownRenderer
        content={article.content.replace(/^#\s+.*(?:\r?\n)+/, "")}
      />

      <ArticleMeta updatedAt={article.updatedAt} tags={article.tags} />
      <ArticlePaginationNav prev={prev} next={next} />
      <ArticleFeedback articleKey={`${space.id}/${article.slug}`} />
    </article>
  );
}