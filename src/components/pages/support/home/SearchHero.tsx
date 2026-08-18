import { Link } from "@tanstack/react-router";
import { FileQuestion, Search } from "lucide-react";
import type { SupportArticle } from "@/data/support-center";

interface SupportSearchHeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: SupportArticle[];
}

export function SupportSearchHero({
  query,
  onQueryChange,
  results,
}: SupportSearchHeroProps) {
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
              results.map((article) => (
                <Link
                  key={article.slug}
                  to="/support/$slug"
                  params={{ slug: article.slug }}
                  className="flex items-start gap-3 border-b border-border px-4 py-3 last:border-0 hover:bg-muted"
                >
                  <FileQuestion className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      {article.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {article.description}
                    </span>
                  </span>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}