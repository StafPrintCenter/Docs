import { useState } from "react";
import { Bookmark, BookmarkCheck, Check, Copy, Share2 } from "lucide-react";
import { useSavedArticles } from "@/hooks/useSavedArticles";
import { ShareModal } from "@/components/docs/ShareModal";
import type { ResolvedArticle } from "@/data/docs-registry";

const BTN =
  "inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/60 hover:text-brand";

export function ArticleActions({ resolved }: { resolved: ResolvedArticle }) {
  const { space, article } = resolved;
  const key = `${space.id}/${article.slug}`;
  const { save, remove, isSaved } = useSavedArticles();
  const saved = isSaved(key);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const url =
    typeof window === "undefined"
      ? `https://docs.stafprint.com/docs/${space.id}/${article.slug}`
      : `${window.location.origin}/docs/${space.id}/${article.slug}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(article.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  const toggleSave = () => {
    if (saved) {
      remove(key);
      return;
    }
    save({
      key,
      title: article.title,
      description: article.description,
      spaceId: space.id,
      spaceName: space.name,
      slug: article.slug,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" onClick={copy} className={BTN}>
        {copied ? <Check className="size-3.5 text-emerald" /> : <Copy className="size-3.5" />}
        {copied ? "Copié !" : "Copier"}
      </button>
      <button type="button" onClick={() => setShareOpen(true)} className={BTN}>
        <Share2 className="size-3.5" />
        Partager
      </button>
      <button
        type="button"
        onClick={toggleSave}
        className={`${BTN} ${saved ? "border-brand/60 text-brand" : ""}`}
        aria-pressed={saved}
      >
        {saved ? <BookmarkCheck className="size-3.5" /> : <Bookmark className="size-3.5" />}
        {saved ? "Enregistré" : "Enregistrer"}
      </button>

      <ShareModal
        open={shareOpen}
        onOpenChange={setShareOpen}
        title={article.title}
        description={article.description}
        url={url}
      />
    </div>
  );
}
