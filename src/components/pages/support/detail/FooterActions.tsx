import { Link } from "@tanstack/react-router";
import { ArrowLeft, LifeBuoy } from "lucide-react";

export function SupportDetailFooterActions() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <Link
        to="/support"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Retour au centre d'aide
      </Link>
      <a
        href="mailto:support@stafprint.com"
        className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-sm font-medium text-brand-foreground"
      >
        <LifeBuoy className="size-4" />
        Contacter le support
      </a>
    </div>
  );
}