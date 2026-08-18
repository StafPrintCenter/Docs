import { Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { expiresAt, type SavedArticle } from "@/hooks/useSavedArticles";

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
        {items.map((item) => (
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
    </>
  );
}