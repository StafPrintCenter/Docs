import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import type { DocSpace } from "@/types/docs";

interface DesktopSidebarProps {
  space: DocSpace;
  activeSlug: string;
  collapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

export function DesktopSidebar({
  space,
  activeSlug,
  collapsed,
  onToggleCollapse,
}: DesktopSidebarProps) {
  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => onToggleCollapse(false)}
        className="sticky top-18 hidden shrink-0 rounded-lg border border-border bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:text-brand lg:block cursor-pointer"
        aria-label="Déplier le sommaire"
      >
        <PanelLeftOpen className="size-4" />
      </button>
    );
  }

  return (
    <aside className="sticky top-18 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted/70 shadow-sm lg:block">
      <div className="flex items-center justify-between gap-2 border-b border-border/70 px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Sommaire
        </span>
        <button
          type="button"
          onClick={() => onToggleCollapse(true)}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-brand cursor-pointer"
          aria-label="Replier le sommaire"
        >
          <PanelLeftClose className="size-4" />
        </button>
      </div>
      <div className="h-[calc(100%-2.75rem)] overflow-y-auto px-3 py-4">
        <DocsSidebar space={space} activeSlug={activeSlug} />
      </div>
    </aside>
  );
}

interface MobileSidebarProps {
  space: DocSpace;
  activeSlug: string;
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ space, activeSlug, open, onClose }: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
      onClick={onClose}
    >
      <div
        className="h-full w-[85%] max-w-xs overflow-y-auto border-r border-border bg-muted p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="mb-4 ml-auto block rounded-md p-1 text-muted-foreground cursor-pointer"
          aria-label="Fermer la navigation"
        >
          <X className="size-5" />
        </button>
        <DocsSidebar space={space} activeSlug={activeSlug} onNavigate={onClose} />
      </div>
    </div>
  );
}