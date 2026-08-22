import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Clock, CornerDownLeft, FileText, Search, X } from "lucide-react";
import { useDocsSearch, useSearchHistory } from "@/hooks/useDocsSearch";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const trimmedQuery = query.trim();
  const isQueryTooShort = trimmedQuery.length > 0 && trimmedQuery.length < 3;
  const isQueryValid = trimmedQuery.length >= 3;
  const results = useDocsSearch(isQueryValid ? query : "");
  const { history, push, clear } = useSearchHistory();
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (index: number) => {
    if (!isQueryValid) return;
    const hit = results[index];
    if (!hit) return;
    push(query);
    onOpenChange(false);
    void navigate({
      to: "/docs/$space/$slug",
      params: { space: hit.spaceId, slug: hit.article.slug },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 px-4 pt-[10vh] backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="dialog"
        aria-label="Recherche dans la documentation"
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 shrink-0 text-brand" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (!isQueryValid && e.key === "Enter") return;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                go(active);
              } else if (e.key === "Escape") {
                onOpenChange(false);
              }
            }}
            placeholder="Rechercher un article, une plateforme, un tag…"
            className="h-14 w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-1 text-muted-foreground hover:text-foreground"
            aria-label="Fermer la recherche"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2">
          {/* Historique : affiché uniquement si le champ est vide */}
          {trimmedQuery === "" && (
            <div className="p-2">
              <div className="mb-2 flex items-center justify-between px-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Recherches récentes
                </span>
                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={clear}
                    className="text-xs text-muted-foreground hover:text-brand"
                  >
                    Effacer
                  </button>
                )}
              </div>
              {history.length === 0 ? (
                <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                  Aucune recherche récente. Essayez « devis », « API » ou « modération ».
                </p>
              ) : (
                history.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-foreground/80 hover:bg-muted"
                  >
                    <Clock className="size-3.5 text-muted-foreground" />
                    {term}
                  </button>
                ))
              )}
            </div>
          )}

          {/* Indication si la requête contient moins de 3 caractères */}
          {isQueryTooShort && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Veuillez saisir au moins 3 caractères pour lancer la recherche.
            </p>
          )}

          {/* Aucun résultat */}
          {isQueryValid && results.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-muted-foreground">
              Aucun résultat pour « {query} ».
            </p>
          )}

          {/* Affichage des résultats */}
          {isQueryValid &&
            results.map((hit, index) => (
              <button
                key={`${hit.spaceId}-${hit.article.slug}`}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => go(index)}
                className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${index === active ? "bg-brand/10" : "hover:bg-muted"
                  }`}
              >
                <FileText
                  className={`mt-0.5 size-4 shrink-0 ${index === active ? "text-brand" : "text-muted-foreground"}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium text-foreground">
                      {hit.article.title}
                    </span>
                    <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {hit.spaceName}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {hit.groupTitle}
                  </span>
                </span>
                {index === active && <CornerDownLeft className="mt-1 size-3.5 text-brand" />}
              </button>
            ))}
        </div>

        <div className="flex items-center gap-4 border-t border-border bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
          <span>↑ ↓ naviguer</span>
          <span>↵ ouvrir</span>
          <span>Esc fermer</span>
        </div>
      </div>
    </div>
  );
}
