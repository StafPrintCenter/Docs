import { useEffect, useMemo, useState } from "react";
import { ListTree } from "lucide-react";
import { DocsHeader, DocsFooter } from "@/components/site";
import { SearchModal } from "@/components/docs/SearchModal";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { extractToc } from "@/components/docs/MarkdownRenderer";
import { CarbonAds } from "@/components/docs/CarbonAds";
import type { ResolvedArticle } from "@/data/content/docs";
import {
  DocsBreadcrumb,
  DesktopSidebar,
  MobileSidebar,
  ArticleContent,
} from "@/components/pages/docs";

export function DocsViewer({ resolved }: { resolved: ResolvedArticle }) {
  const { space, article } = resolved;
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
    <div className="relative min-h-screen bg-background overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DocsHeader
          variant="docs"
          maxWidthClass="max-w-[1600px]"
          activeSpaceId={space.id}
          onOpenSearch={() => setSearchOpen(true)}
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
        />

        <div className="mx-auto flex w-full max-w-[1600px] flex-1 items-start gap-6 px-4 py-6 sm:px-6">
          <DesktopSidebar
            space={space}
            activeSlug={article.slug}
            collapsed={sidebarCollapsed}
            onToggleCollapse={setSidebarCollapsed}
          />

          <MobileSidebar
            space={space}
            activeSlug={article.slug}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="min-w-0 flex-1">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
              <DocsBreadcrumb resolved={resolved} />

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

              <ArticleContent resolved={resolved} />
            </div>

            <div className="mt-6 xl:hidden">
              <CarbonAds />
            </div>
          </main>

          <aside className="sticky top-18 hidden max-h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-sm xl:block">
            <TableOfContents items={toc} />
            <CarbonAds />
          </aside>
        </div>

        <DocsFooter />
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
