import { Link } from "@tanstack/react-router";
import { BookOpen, Bookmark, LifeBuoy, LucideIcon } from "lucide-react";
import { firstArticleParams } from "@/data/content/docs";

export interface NavLinkItem {
  key: string;
  to: string;
  params?: Record<string, string>;
  icon: LucideIcon;
  label: string;
  hideOnDocs?: boolean;
}

export const NAV_ITEMS: NavLinkItem[] = [
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

interface NavLinksProps {
  isDocs?: boolean;
  mobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({ isDocs = false, mobile = false, onItemClick }: NavLinksProps) {
  const activeNavLinks = NAV_ITEMS.filter((link) => !(isDocs && link.hideOnDocs));

  if (mobile) {
    return (
      <div className="absolute left-0 right-0 top-full z-40 border-b border-border bg-background p-4 shadow-xl space-y-2 sm:hidden">
        {activeNavLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.key}
              to={link.to}
              params={link.params}
              onClick={onItemClick}
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
    );
  }

  return (
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
  );
}