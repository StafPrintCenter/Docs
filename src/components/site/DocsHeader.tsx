import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, BookOpen, Check, ChevronsUpDown, LifeBuoy, SquareMenu, PanelLeftOpen, Search, X } from "lucide-react";
import logos from "@/assets/logos.json";
import { spaceNav, firstArticleParams } from "@/data/content/docs";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface HeaderProps {
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

  // Liens de navigation
  const navLinks = [
    {
      key: "docs",
      to: "/docs/$space/$slug",
      params: firstArticleParams("landing"),
      icon: BookOpen,
      label: "Documentation",
      hideOnDocs: true,
    },
    {
      key: "support",
      to: "/support",
      icon: LifeBuoy,
      label: "Centre d'aide",
      hideOnDocs: false,
    },
    {
      key: "saves",
      to: "/saves",
      icon: Bookmark,
      label: "Enregistrés",
      hideOnDocs: false,
    },
  ];

  // Filtrer les liens selon la variante
  const activeNavLinks = navLinks.filter((link) => !(isDocs && link.hideOnDocs));

  const goToSpace = (id: string) => {
    const entry = spaceNav.find((p) => p.id === id);
    if (!entry) return;
    void navigate({
      to: "/docs/$space/$slug",
      params: { space: entry.id, slug: entry.slug },
    });
    setSpacePickerOpen(false);
  };

  const activeSpaceLabel = spaceNav.find((e) => e.id === activeSpaceId)?.label ?? "Choisir un espace";

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
              {/* Variant DOCS - Mobile */}
              <img src={logos.mc} alt="SPC Docs" className="h-10 w-auto object-contain dark:hidden sm:hidden" />
              <img src={logos.mw} alt="SPC Docs" className="hidden h-10 w-auto object-contain dark:block dark:sm:hidden" />

              {/* Variant DOCS - Desktop */}
              <img src={logos.dc} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:hidden sm:block" />
              <img src={logos.dw} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:sm:block" />
            </>
          ) : (
            <>
              {/* Variant DEFAULT - Clair */}
              <img src={logos.dc} alt="SPC Docs" className="h-12 w-auto object-contain dark:hidden" />
              {/* Variant DEFAULT - Sombre */}
              <img src={logos.dw} alt="SPC Docs" className="hidden h-12 w-auto object-contain dark:block" />
            </>
          )}
        </Link>

        {/* Sélecteur d'Espace Docs (Variant Docs - Desktop) — combobox recherchable */}
        {isDocs && (
          <Popover open={spacePickerOpen} onOpenChange={setSpacePickerOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="ml-2 hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/50 xl:flex"
              >
                <span className="max-w-44 truncate">{activeSpaceLabel}</span>
                <ChevronsUpDown className="size-3.5 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-0">
              <Command>
                <CommandInput placeholder="Rechercher un espace…" />
                <CommandList>
                  <CommandEmpty>Aucun espace trouvé.</CommandEmpty>
                  <CommandGroup>
                    {spaceNav.map((entry) => {
                      const isActive = entry.id === activeSpaceId;
                      return (
                        <CommandItem
                          key={entry.id}
                          value={entry.label}
                          onSelect={() => goToSpace(entry.id)}
                          className="cursor-pointer"
                        >
                          <Check className={`mr-2 size-4 ${isActive ? "opacity-100" : "opacity-0"}`} />
                          {entry.label}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}

        {/* Zone d'actions Droite */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Navigation Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {activeNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.key}
                  to={link.to}
                  params={link.params}
                  activeOptions={{ exact: false }}
                  activeProps={{
                    className: "border-brand/60 bg-brand/10 text-brand hover:border-brand",
                  }}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                >
                  <Icon className="size-4 text-brand" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

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
        <div className="absolute left-0 right-0 top-full z-40 border-b border-border bg-background p-4 shadow-xl space-y-2 sm:hidden">
          {activeNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.key}
                to={link.to}
                params={link.params}
                onClick={() => setMobileMenuOpen(false)}
                activeOptions={{ exact: false }}
                activeProps={{ className: "border-brand/60 bg-brand/10 text-brand" }}
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-brand/50"
              >
                <Icon className="size-4 text-brand" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Select Espaces Mobile (Variant Docs) */}
      {isDocs && (
        <div className="border-t border-border/70 px-4 py-2 xl:hidden">
          <select
            aria-label="Choisir un espace"
            value={activeSpaceId ?? ""}
            onChange={(e) => goToSpace(e.target.value)}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground"
          >
            <option value="" disabled>
              Choisir un espace
            </option>
            {spaceNav.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </header>
  );
}
