import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { expiresAt, type SavedArticle } from "@/hooks/useSavedArticles";

const PER_PAGE = 5;

interface SavedArticlesListProps {
  items: SavedArticle[];
  onRemove: (key: string) => void;
  onClear: () => void;
}

export function SavedArticlesList({
  items,
  onRemove,
  onClear,
}: SavedArticlesListProps) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(items.length / PER_PAGE));

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  const visible = useMemo(
    () => items.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [items, page]
  );

  return (
    <>
      <div className="mt-8 mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {items.length} page{items.length > 1 ? "s" : ""}
        </p>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-coral hover:underline cursor-pointer"
        >
          Tout supprimer
        </button>
      </div>

      <ul className="space-y-3">
        {visible.map((item) => (
          <li
            key={item.key}
            className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-border bg-background p-4"
          >
            <div className="min-w-0">
              <Link
                to="/docs/$space/$slug"
                params={{ space: item.spaceId, slug: item.slug }}
                className="font-display text-base font-semibold text-foreground hover:text-brand"
              >
                {item.title}
              </Link>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {item.spaceName} · expire le{" "}
                {expiresAt(item).toLocaleDateString("fr-FR")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRemove(item.key)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-coral/60 hover:text-coral cursor-pointer"
            >
              <Trash2 className="size-3.5" />
              Retirer
            </button>
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
        <nav
          aria-label="Pagination des pages enregistrées"
          className="mt-6 flex items-center justify-between gap-3"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-3.5" />
            Précédent
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                aria-current={n === page ? "page" : undefined}
                className={`size-8 rounded-lg border text-xs font-medium transition-colors ${n === page
                  ? "border-brand bg-brand/10 text-brand-strong"
                  : "border-border text-muted-foreground hover:text-foreground"
                  }`}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            Suivant
            <ChevronRight className="size-3.5" />
          </button>
        </nav>
      )}
    </>
  );
}