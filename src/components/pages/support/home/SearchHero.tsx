import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Search } from "lucide-react";
import { getSupportCategory, SUPPORT_CATEGORY_ICONS, type SupportArticle } from "@/data/content/support";

interface SupportHomeSearchHeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: SupportArticle[];
}

const ITEMS_PER_PAGE = 5;

export function SupportHomeSearchHero({
  query,
  onQueryChange,
  results,
}: SupportHomeSearchHeroProps) {
  const [page, setPage] = useState(1);

  const handleInputChange = (value: string) => {
    setPage(1);
    onQueryChange(value);
  };

  const trimmedQuery = query.trim();
  const isQueryTooShort = trimmedQuery.length > 0 && trimmedQuery.length < 3;
  const isQueryValid = trimmedQuery.length >= 3;

  const visibleResults = results.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = visibleResults.length < results.length;

  return (
    <section className="border-b border-border bg-muted/40 py-8 sm:py-14">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Comment pouvons-nous vous aider ?
        </h1>

        <div className="relative mt-4 sm:mt-6">
          <Search className="pointer-events-none absolute left-3.5 top-3.5 size-5 text-brand" />
          <input
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Décrivez votre problème..."
            className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-brand/60"
          />
        </div>

        {isQueryTooShort && (
          <p className="mt-2 text-xs text-muted-foreground">
            Veuillez saisir au moins 3 caractères pour lancer la recherche.
          </p>
        )}

        {isQueryValid && (
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm">
            {results.length === 0 ? (
              <p className="px-4 py-5 text-center text-sm text-muted-foreground">
                Aucun résultat. Essayez un autre mot-clé ou contactez le support.
              </p>
            ) : (
              <>
                {visibleResults.map((article) => {
                  const category = getSupportCategory(article.category);
                  const CategoryIcon = category
                    ? SUPPORT_CATEGORY_ICONS[category.icon]
                    : null;

                  return (
                    <Link
                      key={article.slug}
                      to="/support/$categoryId/$slug"
                      params={{ categoryId: article.category, slug: article.slug }}
                      className="flex items-start gap-3 border-b border-border px-3.5 py-3 last:border-0 hover:bg-muted"
                    >
                      {CategoryIcon && (
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
                          <CategoryIcon className="size-3.5" />
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        {category && (
                          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {category.title}
                          </span>
                        )}
                        <span className="block truncate text-sm font-medium text-brand">
                          {article.title}
                        </span>
                        <span className="block text-xs text-muted-foreground line-clamp-1">
                          {article.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}

                {hasMore && (
                  <div className="border-t border-border bg-muted/20 p-2 text-center">
                    <button
                      type="button"
                      onClick={() => setPage((prev) => prev + 1)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand hover:underline"
                    >
                      Voir plus de résultats ({results.length - visibleResults.length} restants)
                      <ChevronDown className="size-3.5" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}