import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { getSupportArticle, supportCategories } from "@/data/support-center";
import {
  SupportDetailBreadcrumb,
  SupportDetailFooterActions,
  SupportDetailHeader,
} from "@/components/pages/support/detail";

export const Route = createFileRoute("/support/$slug")({
  loader: ({ params }) => {
    const article = getSupportArticle(params.slug);
    if (!article) throw notFound();
    return { title: article.title, description: article.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article introuvable - Centre d'aide STAF" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} - Centre d'aide STAF`;
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
  const { slug } = Route.useParams();
  const article = getSupportArticle(slug);
  if (!article) return null;

  const category = supportCategories.find((c) => c.id === article.category);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10">
        <SupportDetailHeader />

        <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <SupportDetailBreadcrumb
            categoryTitle={category?.title}
            readTime={article.readTime}
          />

          <article className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <MarkdownRenderer content={article.content} />
          </article>

          <SupportDetailFooterActions />
        </main>
      </div>
    </div>
  );
}
