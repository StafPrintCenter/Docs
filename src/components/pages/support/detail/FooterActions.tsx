import { Link } from "@tanstack/react-router";
import { ArrowLeft, FolderInput, LifeBuoy } from "lucide-react";
import { createSupportEmailLink } from "@/lib/message/support";

interface SupportDetailFooterActionsProps {
  categoryId: string;
  categoryTitle?: string;
  articleTitle?: string;
}

export function SupportDetailFooterActions({
  categoryId,
  categoryTitle,
  articleTitle,
}: SupportDetailFooterActionsProps) {
  const emailLink = createSupportEmailLink(articleTitle);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Link
          to="/support/$categoryId"
          params={{ categoryId }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
        >
          <FolderInput className="size-4 text-brand" />
          <span>Retour à {categoryTitle ?? "la catégorie"}</span>
        </Link>

      <Link
        to="/support"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Retour au centre d'aide
      </Link>

      <a
        href={emailLink}
        className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
      >
        <LifeBuoy className="size-4" />
        Contacter le support
      </a>
    </div>
  );
}