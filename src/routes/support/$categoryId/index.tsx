import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { DocsShell } from "@/components/site/DocsShell";
import { Button } from "@/components/ui/button";
import { articlesByCategory, getSupportCategory, SUPPORT_CATEGORY_ICONS } from "@/data/content/support";
import { SITE } from "@/data/site";

const ITEMS_PER_PAGE = 5;

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
  const [currentPage, setCurrentPage] = useState(1);

  const category = getSupportCategory(categoryId);
  if (!category) return null;

  const Icon = SUPPORT_CATEGORY_ICONS[category.icon];
  const articles = articlesByCategory(categoryId);
  const articleCount = articles.length;

  const totalPages = Math.ceil(articleCount / ITEMS_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(start, start + ITEMS_PER_PAGE);
  }, [articles, currentPage]);

  const startItem = articleCount > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, articleCount);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <DocsShell>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Link
          to="/support"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Retour au centre d'aide
        </Link>

        <header className="mt-4 border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <Icon className="size-5" />
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {category.title}
              </h1>
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                {articleCount} {articleCount > 1 ? "articles" : "article"}
              </span>
            </div>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            {category.description}
          </p>
        </header>

        <div className="mt-8 grid gap-3">
          {paginatedArticles.map((article) => (
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

        {/* Bloc de Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Affichage de <span className="font-medium text-foreground">{startItem}</span> à{" "}
              <span className="font-medium text-foreground">{endItem}</span> sur{" "}
              <span className="font-medium text-foreground">{articleCount}</span>{" "}
              {articleCount > 1 ? "articles" : "article"}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="mr-1 size-4" />
                Précédent
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Suivant
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        )}
      </main>
    </DocsShell>
  );
}
