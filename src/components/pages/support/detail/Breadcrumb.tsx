import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock } from "lucide-react";

interface SupportDetailBreadcrumbProps {
  categoryTitle?: string;
  readTime: string;
}

export function SupportDetailBreadcrumb({
  categoryTitle,
  readTime,
}: SupportDetailBreadcrumbProps) {
  return (
    <>
      <nav
        aria-label="Fil d'Ariane"
        className="flex items-center gap-1 text-xs text-muted-foreground"
      >
        <Link to="/support" className="hover:text-brand">
          Aide
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-foreground">{categoryTitle ?? "Article"}</span>
      </nav>

      <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="size-3.5 text-brand" />
        Lecture {readTime}
      </p>
    </>
  );
}