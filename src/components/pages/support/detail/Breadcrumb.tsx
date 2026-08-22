import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, Home, LifeBuoy } from "lucide-react";

interface SupportDetailBreadcrumbProps {
  categoryId: string;
  categoryTitle?: string;
  readTime: string;
}

export function SupportDetailBreadcrumb({
  categoryId,
  categoryTitle,
  readTime,
}: SupportDetailBreadcrumbProps) {
  return (
    <>
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

        <Link
          to="/support"
          className="inline-flex items-center gap-1 transition-colors hover:text-brand"
        >
          <LifeBuoy className="size-3.5 text-brand" />
          <span>Centre d'aide</span>
        </Link>

        <ChevronRight className="size-3 shrink-0 text-muted-foreground/60" />

        <Link
          to="/support/$categoryId"
          params={{ categoryId }}
          className="font-medium text-foreground transition-colors hover:text-brand"
        >
          {categoryTitle ?? "Catégorie"}
        </Link>
      </nav>

      <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="size-3.5 text-brand" />
        <span>Lecture {readTime}</span>
      </p>
    </>
  );
}