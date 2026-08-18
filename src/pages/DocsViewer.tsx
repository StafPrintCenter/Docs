import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ListTree,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { SearchModal } from "@/components/docs/SearchModal";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { MarkdownRenderer, extractToc } from "@/components/docs/MarkdownRenderer";
import { ArticleFeedback } from "@/components/docs/ArticleFeedback";
import { ArticleActions } from "@/components/docs/ArticleActions";
import { CarbonAds } from "@/components/docs/CarbonAds";
import type { ResolvedArticle } from "@/data/docs-registry";

export function DocsViewer({ resolved }: { resolved: ResolvedArticle }) {
  const { space, groupTitle, article, prev, next } = resolved;
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toc = useMemo(() => extractToc(article.content), [article.content]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setSidebarOpen(false), [article.slug]);

  return (
    <div className="min-h-screen bg-background paper-grid">
      <DocsHeader
        activeSpaceId={space.id}
        onOpenSearch={() => setSearchOpen(true)}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      <div className="mx-auto flex max-w-[1600px] items-start gap-6 px-4 py-6 sm:px-6">
        {sidebarCollapsed ? (
          <button
            type="button"
            onClick={() => setSidebarCollapsed(false)}
            className="sticky top-[4.5rem] hidden shrink-0 rounded-lg border border-border bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:text-brand lg:block"
            aria-label="Déplier le sommaire"
          >
            <PanelLeftOpen className="size-4" />
          </button>
        ) : (
          <aside className="sticky top-[4.5rem] hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted/70 shadow-sm lg:block">
            <div className="flex items-center justify-between gap-2 border-b border-border/70 px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Sommaire
              </span>
              <button
                type="button"
                onClick={() => setSidebarCollapsed(true)}
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-brand"
                aria-label="Replier le sommaire"
              >
                <PanelLeftClose className="size-4" />
              </button>
            </div>
            <div className="h-[calc(100%-2.75rem)] overflow-y-auto px-3 py-4">
              <DocsSidebar space={space} activeSlug={article.slug} />
            </div>
          </aside>
        )}

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="h-full w-[85%] max-w-xs overflow-y-auto border-r border-border bg-muted p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="mb-4 ml-auto block rounded-md p-1 text-muted-foreground"
                aria-label="Fermer la navigation"
              >
                <X className="size-5" />
              </button>
              <DocsSidebar
                space={space}
                activeSlug={article.slug}
                onNavigate={() => setSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <nav
                aria-label="Fil d'Ariane"
                className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground"
              >
                <Link to="/" className="hover:text-brand">
                  STAF Docs
                </Link>
                <ChevronRight className="size-3" />
                <span>{space.name}</span>
                <ChevronRight className="size-3" />
                <span className="text-foreground">{groupTitle}</span>
              </nav>
              <ArticleActions resolved={resolved} />
            </div>

            {toc.length > 0 && (
              <details className="mb-6 rounded-xl border border-border bg-muted/60 px-4 py-3 xl:hidden">
                <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground">
                  <ListTree className="size-4 text-brand" />
                  Table des matières
                </summary>
                <div className="mt-3">
                  <TableOfContents items={toc} />
                </div>
              </details>
            )}

            <article className="max-w-3xl">
              <MarkdownRenderer content={article.content} />

              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  Mis à jour le {article.updatedAt}
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

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

              <ArticleFeedback articleKey={`${space.id}/${article.slug}`} />
            </article>
          </div>

          <div className="mt-6 xl:hidden">
            <CarbonAds />
          </div>
        </main>

        <aside className="sticky top-[4.5rem] hidden max-h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-sm xl:block">
          <TableOfContents items={toc} />
          <CarbonAds />
        </aside>
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
