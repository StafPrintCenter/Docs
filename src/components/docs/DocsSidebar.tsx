import { Link } from "@tanstack/react-router";
import { BookmarkCheck, ExternalLink } from "lucide-react";
import { useSavedArticles } from "@/hooks/useSavedArticles";
import type { DocSpace, ArticleStatus } from "@/types/docs";

const STATUS_STYLE: Record<Exclude<ArticleStatus, "stable">, { label: string; className: string }> =
{
  new: { label: "Nouveau", className: "bg-emerald/12 text-emerald" },
  updated: { label: "Maj", className: "bg-info/12 text-info" },
  beta: { label: "Bêta", className: "bg-amber/15 text-amber" },
};

interface DocsSidebarProps {
  space: DocSpace;
  activeSlug?: string;
  onNavigate?: () => void;
}

export function DocsSidebar({ space, activeSlug, onNavigate }: DocsSidebarProps) {
  const { isSaved } = useSavedArticles();

  return (
    <nav aria-label={`Sommaire ${space.name}`} className="pb-16 text-sm">
      <div className="mb-5">
        <div className="flex items-center">
          {space.url ? (
            <a
              href={space.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Ouvrir ${space.name}`}
              aria-label={`Ouvrir ${space.name} dans un nouvel onglet`}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <h2 className="font-display text-base font-semibold text-foreground transition-colors group-hover:underline">
                {space.name}
              </h2>
              <ExternalLink className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
            </a>
          ) : (
            <h2 className="font-display text-base font-semibold text-foreground">
              {space.name}
            </h2>
          )}
        </div>
        <p className="mt-0.5 text-[11px] uppercase tracking-wide text-brand">{space.tagline}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{space.description}</p>
      </div>

      {space.groups.map((group) => (
        <div key={group.id} className="mb-4">
          <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {group.title}
          </p>
          <ul className="space-y-0.5 border-l border-border pl-2">
            {group.articles.map((article) => {
              const isActive = article.slug === activeSlug;
              const status = article.status === "stable" ? null : STATUS_STYLE[article.status];
              const saved = isSaved(`${space.id}/${article.slug}`);
              return (
                <li key={article.slug}>
                  <Link
                    to="/docs/$space/$slug"
                    params={{ space: space.id, slug: article.slug }}
                    onClick={onNavigate}
                    className={`flex items-center justify-between gap-2 rounded-md px-2 py-1.5 transition-colors ${isActive
                      ? "bg-brand/10 font-medium text-brand-strong"
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                      }`}
                  >
                    <span className="flex min-w-0 items-center gap-1.5">
                      {saved && (
                        <BookmarkCheck
                          className="size-3.5 shrink-0 text-brand"
                          aria-label="Enregistré"
                        />
                      )}
                      <span className="truncate">{article.title}</span>
                    </span>
                    {status && (
                      <span
                        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${status.className}`}
                      >
                        {status.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
