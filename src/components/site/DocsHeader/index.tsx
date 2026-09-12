import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { PanelLeftOpen, Search, SquareMenu, X } from "lucide-react";
import logos from "@/assets/logos.json";
import { spaceNav } from "@/data/content/docs";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { SpacePicker } from "./SpacePicker";
import { NavLinks } from "./NavLinks";

export interface HeaderProps {
  variant?: "default" | "docs";
  title?: string;
  subtitle?: string;
  hideSubtitle?: boolean;
  maxWidthClass?: string;
  activeSpaceId?: string;
  sticky?: boolean;
  onOpenSearch?: () => void;
  onToggleSidebar?: () => void;
}

export function DocsHeader({
  variant = "default",
  maxWidthClass = "max-w-6xl",
  activeSpaceId,
  sticky = true,
  onOpenSearch,
  onToggleSidebar,
}: HeaderProps) {
  const navigate = useNavigate();
  const isDocs = variant === "docs";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spacePickerOpen, setSpacePickerOpen] = useState(false);

  const goToSpace = (id: string) => {
    const entry = spaceNav.find((p) => p.id === id);
    if (!entry) return;
    void navigate({
      to: "/docs/$space/$slug",
      params: { space: entry.id, slug: entry.slug },
    });
    setSpacePickerOpen(false);
  };

  return (
    <header
      className={`border-b border-border bg-background/95 backdrop-blur-md z-30 ${sticky ? "sticky top-0" : "relative"
        }`}
    >
      <div className={`mx-auto flex h-16 items-center gap-3 px-4 sm:px-6 ${maxWidthClass}`}>
        {/* Bouton Sidebar Mobile */}
        {isDocs && onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="shrink-0 rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden cursor-pointer"
            aria-label="Ouvrir la navigation"
          >
            <PanelLeftOpen className="size-5" />
          </button>
        )}

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          {isDocs ? (
            <>
              <img src={logos.mc} alt="SPC Docs" className="h-10 w-auto object-contain dark:hidden sm:hidden" />
              <img src={logos.mw} alt="SPC Docs" className="hidden h-10 w-auto object-contain dark:block dark:sm:hidden" />
              <img src={logos.dc} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:hidden sm:block" />
              <img src={logos.dw} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:sm:block" />
            </>
          ) : (
            <>
              <img src={logos.dc} alt="SPC Docs" className="h-12 w-auto object-contain dark:hidden" />
              <img src={logos.dw} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:block" />
            </>
          )}
        </Link>

        {/* Sélecteur d'Espace Desktop */}
        {isDocs && (
          <SpacePicker
            activeSpaceId={activeSpaceId}
            open={spacePickerOpen}
            onOpenChange={setSpacePickerOpen}
            onSelectSpace={goToSpace}
          />
        )}

        {/* Zone d'actions Droite */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <NavLinks isDocs={isDocs} />

          {/* Recherche */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground cursor-pointer sm:w-48"
            >
              <Search className="size-4 text-brand" />
              <span className="hidden flex-1 text-left sm:inline">Rechercher…</span>
              <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline">⌘K</kbd>
            </button>
          )}

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted sm:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <SquareMenu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile Hamburger */}
      {mobileMenuOpen && (
        <NavLinks isDocs={isDocs} mobile onItemClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Select Espaces Mobile */}
      {isDocs && (
        <SpacePicker
          activeSpaceId={activeSpaceId}
          open={false}
          onOpenChange={() => { }}
          onSelectSpace={goToSpace}
          mobile
        />
      )}
    </header>
  );
}