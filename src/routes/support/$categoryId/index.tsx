import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DocsHeader } from "@/components/site";
import { articlesByCategory, getSupportCategory } from "@/data/content/support";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/support/$categoryId/")({
  loader: ({ params }) => {
    const category = getSupportCategory(params.categoryId);
    if (!category) throw notFound();
    return { title: category.title, description: category.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: `Catégorie introuvable | ${SITE.name}` }] };
    return {
      meta: [
        { title: `${loaderData.title} | ${SITE.name}` },
        { name: "description", content: loaderData.description },
      ],
    };
  },
  component: SupportCategoryPage,
});

function SupportCategoryPage() {
  const { categoryId } = Route.useParams();
  const category = getSupportCategory(categoryId);
  if (!category) return null;

  const articles = articlesByCategory(categoryId);

  return (
    <div className="relative min-h-screen bg-background overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10">
        <DocsHeader />

        <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <Link
            to="/support"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Retour au centre d'aide
          </Link>

          <header className="mt-4 border-b border-border pb-6">
            <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {category.title}
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              {category.description}
            </p>
          </header>

          <div className="mt-8 grid gap-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/support/$categoryId/$slug"
                params={{ categoryId: category.id, slug: article.slug }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/50"
              >
                <div>
                  <h2 className="text-base font-medium text-foreground group-hover:text-brand">
                    {article.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                    {article.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}