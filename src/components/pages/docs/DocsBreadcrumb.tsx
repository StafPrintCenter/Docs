import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, Folder } from "lucide-react";
import { ArticleActions } from "@/components/docs/ArticleActions";
import type { ResolvedArticle } from "@/data/content/docs";

interface DocsBreadcrumbProps {
  resolved: ResolvedArticle;
}

export function DocsBreadcrumb({ resolved }: DocsBreadcrumbProps) {
  const { space, groupTitle } = resolved;

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <nav
        aria-label="Fil d'Ariane"
        className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1 transition-colors hover:text-brand"
        >
          <Home className="size-3.5" />
          <span>Accueil</span>
        </Link>

        <ChevronRight className="size-3 shrink-0 text-muted-foreground/60" />

        <span className="inline-flex items-center gap-1">
          <Folder className="size-3.5 text-brand" />
          <span>{space.name}</span>
        </span>

        <ChevronRight className="size-3 shrink-0 text-muted-foreground/60" />

        <span className="font-medium text-foreground">{groupTitle}</span>
      </nav>

      <ArticleActions resolved={resolved} />
    </div>
  );
}