import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, FolderInput, LifeBuoy, Share2 } from "lucide-react";
import { createSupportEmailLink } from "@/lib/message/support";
import { ShareModal } from "@/components/docs/ShareModal";

interface SupportDetailFooterActionsProps {
  categoryId: string;
  categoryTitle?: string;
  articleTitle?: string;
  description?: string;
}

export function SupportDetailFooterActions({
  categoryId,
  categoryTitle,
  articleTitle,
  description,
}: SupportDetailFooterActionsProps) {
  const [shareOpen, setShareOpen] = useState(false);
  const emailLink = createSupportEmailLink(articleTitle);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Groupe 1 : Navigation (À gauche sur desktop, en haut sur mobile) */}
        <div className="flex items-center gap-2">
          <Link
            to="/support/$categoryId"
            params={{ categoryId }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
          >
            <FolderInput className="size-4 shrink-0 text-brand" />
            <span className="max-w-32.5 truncate whitespace-nowrap min-[380px]:max-w-45 sm:max-w-xs">
              {categoryTitle ?? "La catégorie"}
            </span>
          </Link>

          <Link
            to="/support"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-border bg-card/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 shrink-0" />
            <span>Centre d'aide</span>
          </Link>
        </div>

        {/* Groupe 2 : Actions (À droite sur desktop, en bas sur mobile) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShareOpen(true)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground cursor-pointer sm:flex-none"
          >
            <Share2 className="size-4 shrink-0 text-brand" />
            <span>Partager</span>
          </button>

          <a
            href={emailLink}
            className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand px-3 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 sm:flex-none"
          >
            <LifeBuoy className="size-4 shrink-0" />
            <span>Contacter le support</span>
          </a>
        </div>
      </div>

      <ShareModal
        open={shareOpen}
        onOpenChange={setShareOpen}
        title={articleTitle ?? "Article de support"}
        description={description}
        url={currentUrl}
      />
    </>
  );
}