import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { DocsHeader, DocsFooter } from "@/components/site";
import { resolveSupportArticle, getSupportCategory } from "@/data/content/support";
import {
  SupportDetailBreadcrumb,
  SupportDetailFooterActions
} from "@/components/pages/support/detail";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/support/$categoryId/$slug")({
  loader: ({ params }) => {
    const article = resolveSupportArticle(params.categoryId, params.slug);
    if (!article) throw notFound();
    return { title: article.title, description: article.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: `Article introuvable | ${SITE.name}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} | ${SITE.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SupportArticlePage,
});

function SupportArticlePage() {
  const { categoryId, slug } = Route.useParams();
  const article = resolveSupportArticle(categoryId, slug);
  if (!article) return null;

  const category = getSupportCategory(categoryId);

  return (
    <div className="relative min-h-screen bg-background overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10">
        <DocsHeader />

        <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <SupportDetailBreadcrumb
            categoryTitle={category?.title}
            readTime={article.readTime}
          />

          <article className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <MarkdownRenderer content={article.content} />
          </article>

          <SupportDetailFooterActions articleTitle={article.title} />
        </main>

        <DocsFooter />
      </div>
    </div>
  );
}