import { Link } from "@tanstack/react-router";

export interface NavLinkItem {
  key: string;
  to: string;
  params?: Record<string, string>;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface DocsNavProps {
  links: NavLinkItem[];
  mobile?: boolean;
  onItemClick?: () => void;
}

export function DocsNav({ links, mobile = false, onItemClick }: DocsNavProps) {
  if (mobile) {
    return (
      <div className="absolute left-0 right-0 top-full z-40 border-b border-border bg-background p-4 shadow-xl space-y-2 sm:hidden">
        {links.map((link) => {
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
      {links.map((link) => {
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