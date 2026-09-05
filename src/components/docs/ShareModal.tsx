import { useEffect, useState } from "react";
import { Check, Copy, Loader2, Mail, QrCode, X } from "lucide-react";
import { WhatsAppIcon, FacebookIcon, LinkedinIcon, XIcon } from "@/components/site/icons";
import { QrCodeAutoPanel } from "@/components/pages/docs/QrCodeAutoPanel";
import { getOrCreateShortlink } from "@/stores/useShortlinksStore";
import type { APIShortlink, ShortlinkCategory } from "@/data/shortlinks";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  url: string;
  category?: ShortlinkCategory;
}

function formatTruncatedUrl(rawUrl: string, maxLength = 36): string {
  if (!rawUrl || rawUrl.length <= maxLength) return rawUrl;
  const start = rawUrl.substring(0, 20);
  const end = rawUrl.substring(rawUrl.length - 12);
  return `${start}...${end}`;
}

export function ShareModal({
  open,
  onOpenChange,
  title,
  description,
  url,
  category,
}: ShareModalProps) {
  const [shortlink, setShortlink] = useState<APIShortlink | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (!open || !url) return;

    setCopied(false);
    setShortlink(null);
    setShowQr(false);
    setIsLoading(true);

    let alive = true;

    // Raccourcissement de l'URL avec catégorie "document"
    getOrCreateShortlink(url, category)
      .then((link) => {
        if (alive && link) {
          setShortlink(link);
        }
      })
      .catch(() => {
        // Fallback transparent sur l'URL longue d'origine en cas d'erreur backend
      })
      .finally(() => {
        if (alive) setIsLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [open, url, category]);

  if (!open) return null;

  // Fallback direct sur l'URL de base si le lien court n'est pas encore prêt
  const displayUrl = shortlink?.shortUrl || url;
  const alias = shortlink?.alias ?? null;

  const encodedUrl = encodeURIComponent(displayUrl);
  const encodedText = encodeURIComponent(title);

  const targets = [
    {
      label: "WhatsApp",
      icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      className: "text-emerald",
    },
    {
      label: "X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      className: "text-foreground",
    },
    {
      label: "Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "text-info",
    },
    {
      label: "LinkedIn",
      icon: LinkedinIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      className: "text-info",
    },
    {
      label: "E-mail",
      icon: Mail,
      href: `mailto:?subject=${encodedText}&body=${encodeURIComponent(`${description ?? ""}\n\n${displayUrl}`)}`,
      className: "text-amber",
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(displayUrl);
    } catch {
      const el = document.createElement("textarea");
      el.value = displayUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const more = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description ?? title, url: displayUrl });
      }
    } catch {
      /* partage annulé */
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm sm:items-center"
        onClick={() => onOpenChange(false)}
      >
        <div
          role="dialog"
          aria-label="Partager cet article"
          className="w-full max-w-md rounded-t-2xl border border-border bg-card p-5 shadow-2xl sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="font-display text-lg font-semibold text-foreground">Partager</h2>
              <p className="truncate text-xs text-muted-foreground">{title}</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              aria-label="Fermer"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Réseaux sociaux */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {targets.map((target) => (
              <a
                key={target.label}
                href={target.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background p-3 text-[11px] text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
              >
                <target.icon className={`size-5 ${target.className}`} />
                {target.label}
              </a>
            ))}
          </div>

          {/* Input lien court & actions */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-muted px-3 py-2">
            <div className="min-w-0 flex-1">
              {isLoading ? (
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted-foreground/20" />
              ) : (
                <span
                  className="block truncate font-mono text-xs text-muted-foreground select-all"
                  title={displayUrl}
                >
                  {formatTruncatedUrl(displayUrl)}
                </span>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={copy}
                disabled={isLoading}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : copied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                <span>{isLoading ? "Génération..." : copied ? "Copié" : "Copier"}</span>
              </button>

              {!isLoading && alias && (
                <button
                  type="button"
                  onClick={() => setShowQr(true)}
                  title="Afficher le code QR"
                  aria-label="Afficher le code QR"
                  className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted cursor-pointer"
                >
                  <QrCode className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={more}
            disabled={isLoading}
            className="mt-3 w-full rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground disabled:opacity-50 cursor-pointer"
          >
            Plus d'options de partage…
          </button>
        </div>
      </div>

      {showQr && alias && <QrCodeAutoPanel alias={alias} />}
    </>
  );
}
