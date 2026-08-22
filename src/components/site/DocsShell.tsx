import { useEffect, useState, type ReactNode } from "react";
import { DocsHeader, DocsFooter } from "@/components/site";
import { SearchModal } from "@/components/docs/SearchModal";

interface DocsShellProps {
  children: ReactNode;
  variant?: "default" | "docs";
  maxWidthClass?: string;
  activeSpaceId?: string;
  onToggleSidebar?: () => void;
}

export function DocsShell({
  children,
  variant = "default",
  maxWidthClass = "max-w-6xl",
  activeSpaceId,
  onToggleSidebar,
}: DocsShellProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  // Raccourci clavier global ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-clip">
      {/* Background papier */}
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DocsHeader
          variant={variant}
          maxWidthClass={maxWidthClass}
          activeSpaceId={activeSpaceId}
          onOpenSearch={() => setSearchOpen(true)}
          onToggleSidebar={onToggleSidebar}
        />

        {children}

        <DocsFooter />
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}