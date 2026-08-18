import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { popularSupportArticles } from "@/data/support-center";

export function SupportHomePopularAndContact() {
  return (
    <>
      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Articles les plus consultés
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {popularSupportArticles.map((article) => (
            <Link
              key={article.slug}
              to="/support/$slug"
              params={{ slug: article.slug }}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/50"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">
                  {article.title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  Lecture {article.readTime}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-brand/25 bg-brand/8 p-6">
        <p className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <ShieldCheck className="size-5 text-brand" />
          Toujours bloqué ?
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Écrivez à <strong>support@stafprint.com</strong> ou passez à l'atelier de Porto-Novo,
          du lundi au samedi de 8 h à 18 h. Réponse sous 24 h ouvrées.
        </p>
        <Link
          to="/support/$slug"
          params={{ slug: "contacter-le-support" }}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground"
        >
          Contacter le support
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}