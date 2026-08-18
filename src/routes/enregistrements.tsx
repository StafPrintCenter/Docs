import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, ShieldCheck, Trash2 } from "lucide-react";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { SearchModal } from "@/components/docs/SearchModal";
import { RETENTION_DAYS, expiresAt, useSavedArticles } from "@/hooks/useSavedArticles";

export const Route = createFileRoute("/enregistrements")({
  head: () => {
    const title = "Pages enregistrées — STAF Docs";
    const description =
      "Retrouvez les articles STAF Docs que vous avez enregistrés localement pour une consultation rapide.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SavedPage,
});

function SavedPage() {
  const { items, remove, clear } = useSavedArticles();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grid">
      <DocsHeader onOpenSearch={() => setSearchOpen(true)} />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Pages enregistrées
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vos articles favoris, disponibles pour une consultation rapide.
          </p>

          <div className="mt-6 rounded-xl border border-info/25 bg-info/8 p-4 text-sm">
            <p className="mb-1 flex items-center gap-2 font-medium text-foreground">
              <ShieldCheck className="size-4 text-info" />
              Comment vos données sont traitées
            </p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                Les enregistrements sont stockés <strong>uniquement dans votre navigateur</strong>{" "}
                (localStorage). Aucun envoi vers nos serveurs, aucun compte requis.
              </li>
              <li>
                Nous conservons seulement le titre, la description courte et le lien de l'article.
              </li>
              <li>
                Durée de conservation : <strong>{RETENTION_DAYS} jours</strong>, puis suppression
                automatique — sauf si vous les retirez manuellement avant.
              </li>
              <li>Vider le cache de votre navigateur supprime aussi cette liste.</li>
            </ul>
          </div>

          {items.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center">
              <Bookmark className="mx-auto mb-3 size-6 text-brand" />
              <p className="text-sm text-muted-foreground">
                Aucune page enregistrée pour l'instant. Utilisez le bouton{" "}
                <span className="font-medium text-foreground">Enregistrer</span> en haut d'un
                article.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-8 mb-3 flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {items.length} page{items.length > 1 ? "s" : ""}
                </p>
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs font-medium text-coral hover:underline"
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
                      onClick={() => remove(item.key)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-coral/60 hover:text-coral"
                    >
                      <Trash2 className="size-3.5" />
                      Retirer
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
