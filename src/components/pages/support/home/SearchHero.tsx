import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { getSupportCategory, SUPPORT_CATEGORY_ICONS, type SupportArticle } from "@/data/content/support";

interface SupportHomeSearchHeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: SupportArticle[];
}

export function SupportHomeSearchHero({
  query,
  onQueryChange,
  results,
}: SupportHomeSearchHeroProps) {
  return (
    <section className="border-b border-border bg-muted/40 py-14">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Comment pouvons-nous vous aider ?
        </h1>
        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Décrivez votre problème (ex : facture, retard, mot de passe)"
            className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm text-foreground shadow-sm outline-none focus:border-brand/60"
          />
        </div>

        {query.trim() !== "" && (
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm">
            {results.length === 0 ? (
              <p className="px-4 py-5 text-sm text-muted-foreground">
                Aucun résultat. Essayez un autre mot-clé ou contactez le support.
              </p>
            ) : (
              results.map((article) => {
                const category = getSupportCategory(article.category);
                const CategoryIcon = category
                  ? SUPPORT_CATEGORY_ICONS[category.icon]
                  : null;

                return (
                  <Link
                    key={article.slug}
                    to="/support/$categoryId/$slug"
                    params={{ categoryId: article.category, slug: article.slug }}
                    className="flex items-start gap-3 border-b border-border px-4 py-3 last:border-0 hover:bg-muted"
                  >
                    {CategoryIcon && (
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
                        <CategoryIcon className="size-3.5" />
                      </span>
                    )}
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {article.title}
                      </span>
                      <span className="block text-xs text-muted-foreground line-clamp-1">
                        {article.description}
                      </span>
                    </span>
                  </Link>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}