import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpDown } from "lucide-react";
import { articlesByCategory, supportCategories, SUPPORT_CATEGORY_ICONS } from "@/data/content/support";

type SortOption = "default" | "alpha-asc" | "alpha-desc" | "articles-desc" | "articles-asc";

export function SupportHomeCategories() {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const totalCategories = supportCategories.length;

  const sortedCategories = useMemo(() => {
    const categoriesWithCount = supportCategories.map((category) => {
      const articles = articlesByCategory(category.id);
      return {
        ...category,
        articles,
        articlesCount: articles.length,
      };
    });

    return [...categoriesWithCount].sort((a, b) => {
      switch (sortBy) {
        case "alpha-asc":
          return a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
        case "alpha-desc":
          return b.title.localeCompare(a.title, "fr", { sensitivity: "base" });
        case "articles-desc":
          return b.articlesCount - a.articlesCount;
        case "articles-asc":
          return a.articlesCount - b.articlesCount;
        default:
          return 0;
      }
    });
  }, [sortBy]);

  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">
          Parcourir par sujet{" "}
          <span className="text-sm font-normal text-muted-foreground">
            ({totalCategories})
          </span>
        </h2>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <label htmlFor="sort-categories" className="sr-only">
            Trier les catégories
          </label>
          <div className="relative inline-flex items-center">
            <ArrowUpDown className="pointer-events-none absolute left-2.5 size-3.5 text-muted-foreground" />
            <select
              id="sort-categories"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-8 rounded-lg border border-border bg-card pl-8 pr-3 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:border-brand focus:outline-none"
            >
              <option value="default">Ordre recommandé</option>
              <option value="alpha-asc">Nom (A → Z)</option>
              <option value="alpha-desc">Nom (Z → A)</option>
              <option value="articles-desc">Nombre d'articles (décroissant)</option>
              <option value="articles-asc">Nombre d'articles (croissant)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCategories.map((category) => {
          const Icon = SUPPORT_CATEGORY_ICONS[category.icon];
          const displayedArticles = category.articles.slice(0, 2);
          const hasMore = category.articles.length > 2;

          return (
            <div
              key={category.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm min-w-0"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Icon className="size-4.5" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {category.articlesCount} {category.articlesCount > 1 ? "articles" : "article"}
                </span>
              </div>

              <h3 className="mt-3 font-display text-base font-semibold text-foreground truncate">
                {category.title}
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {category.description}
              </p>

              <ul className="mt-3 space-y-1.5 min-w-0">
                {displayedArticles.map((article) => (
                  <li key={article.slug} className="min-w-0">
                    <Link
                      to="/support/$categoryId/$slug"
                      params={{ categoryId: category.id, slug: article.slug }}
                      className="block truncate text-sm text-brand hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {hasMore && (
                <div className="mt-3 pt-2 border-t border-border">
                  <Link
                    to="/support/$categoryId"
                    params={{ categoryId: category.id }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-brand"
                  >
                    Voir tous les articles ({category.articles.length})
                    <ArrowRight className="size-3 shrink-0" />
                  </Link>
                </div>
              )}

              {category.articles.length === 0 && (
                <p className="mt-3 text-xs text-muted-foreground">Bientôt disponible.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}