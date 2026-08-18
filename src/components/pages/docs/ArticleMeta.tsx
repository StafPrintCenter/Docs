import { CalendarDays } from "lucide-react";

interface ArticleMetaProps {
  updatedAt: string;
  tags: string[];
}

export function ArticleMeta({ updatedAt, tags }: ArticleMetaProps) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-5">
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <CalendarDays className="size-3.5" />
        Mis à jour le {updatedAt}
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}