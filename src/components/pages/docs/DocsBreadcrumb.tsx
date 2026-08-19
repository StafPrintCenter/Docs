import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
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
  );
}