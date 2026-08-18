import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Clock, LifeBuoy, Printer } from "lucide-react";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { getSupportArticle, supportCategories } from "@/data/support-center";

export const Route = createFileRoute("/support/$slug")({
  loader: ({ params }) => {
    const article = getSupportArticle(params.slug);
    if (!article) throw notFound();
    return { title: article.title, description: article.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article introuvable — Centre d'aide STAF" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} — Centre d'aide STAF`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SupportArticlePage,
});

function SupportArticlePage() {
  const { slug } = Route.useParams();
  const article = getSupportArticle(slug);
  if (!article) return null;
  const category = supportCategories.find((c) => c.id === article.category);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/support" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-foreground">
              <Printer className="size-4.5" />
            </span>
            <span className="font-display text-[15px] font-semibold text-foreground">
              Centre d'aide
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center gap-1 text-xs text-muted-foreground"
        >
          <Link to="/support" className="hover:text-brand">
            Aide
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{category?.title ?? "Article"}</span>
        </nav>

        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5 text-brand" />
          Lecture {article.readTime}
        </p>

        <article className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <MarkdownRenderer content={article.content} />
        </article>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/support"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
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
      </main>
    </div>
  );
}
