import { useState } from "react";
import { Check, Copy, Facebook, Linkedin, Mail, MessageCircle, Share2, X } from "lucide-react";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  url: string;
}

export function ShareModal({ open, onOpenChange, title, description, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);

  const targets = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      className: "text-emerald",
    },
    {
      label: "X (Twitter)",
      icon: Share2,
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      className: "text-foreground",
    },
    {
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "text-info",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      className: "text-info",
    },
    {
      label: "E-mail",
      icon: Mail,
      href: `mailto:?subject=${encodedText}&body=${encodeURIComponent(`${description ?? ""}\n\n${url}`)}`,
      className: "text-amber",
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  const more = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description ?? title, url });
      }
    } catch {
      /* partage annulé */
    }
  };

  return (
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
            className="rounded-md p-1 text-muted-foreground hover:text-foreground"
            aria-label="Fermer"
          >
            <X className="size-4" />
          </button>
        </div>

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

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-muted px-3 py-2">
          <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
            {url}
          </span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-xs font-medium text-brand-foreground"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copié" : "Copier"}
          </button>
        </div>

        <button
          type="button"
          onClick={more}
          className="mt-3 w-full rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
        >
          Plus d'options de partage…
        </button>
      </div>
    </div>
  );
}
