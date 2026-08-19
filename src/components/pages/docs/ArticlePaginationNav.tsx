import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ResolvedArticle } from "@/data/content/docs";

interface ArticlePaginationNavProps {
  prev: ResolvedArticle["prev"];
  next: ResolvedArticle["next"];
}

export function ArticlePaginationNav({ prev, next }: ArticlePaginationNavProps) {
  return (
    <nav
      aria-label="Navigation entre articles"
      className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          to="/docs/$space/$slug"
          params={{ space: prev.space, slug: prev.slug }}
          className="group flex flex-col rounded-xl border border-border p-4 transition-colors hover:border-brand/50"
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
            <ArrowLeft className="size-3.5" />
            Précédent
          </span>
          <span className="mt-1 font-display text-sm font-semibold text-foreground group-hover:text-brand">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to="/docs/$space/$slug"
          params={{ space: next.space, slug: next.slug }}
          className="group flex flex-col items-end rounded-xl border border-border p-4 text-right transition-colors hover:border-brand/50"
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
            Suivant
            <ArrowRight className="size-3.5" />
          </span>
          <span className="mt-1 font-display text-sm font-semibold text-foreground group-hover:text-brand">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}