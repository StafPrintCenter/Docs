import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { articlesByCategory, supportCategories, SUPPORT_CATEGORY_ICONS } from "@/data/content/support";

export function SupportHomeCategories() {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">
        Parcourir par sujet
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {supportCategories.map((category) => {
          const Icon = SUPPORT_CATEGORY_ICONS[category.icon];
          const allArticles = articlesByCategory(category.id);
          const displayedArticles = allArticles.slice(0, 2);
          const hasMore = allArticles.length > 2;

          return (
            <div
              key={category.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm min-w-0"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                <Icon className="size-4.5" />
              </span>
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
                    Voir tous les articles ({allArticles.length})
                    <ArrowRight className="size-3 shrink-0" />
                  </Link>
                </div>
              )}

              {allArticles.length === 0 && (
                <p className="mt-3 text-xs text-muted-foreground">Bientôt disponible.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}