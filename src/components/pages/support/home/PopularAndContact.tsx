import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Mail, UserRound, CreditCard, Package, Lock, Wrench, LifeBuoy, HelpCircle } from "lucide-react";
import { getRecommendedSupportArticles, getSupportCategory } from "@/data/content/support";
import { createSupportEmailLink } from "@/lib/message/support";
import { SITE } from "@/data/site";

const ICONS = {
  account: UserRound,
  billing: CreditCard,
  orders: Package,
  privacy: Lock,
  technical: Wrench,
  contact: LifeBuoy,
} as const;

export function SupportHomePopularAndContact() {
  const supportEmailLink = createSupportEmailLink();
  const recommendedArticles = useMemo(() => getRecommendedSupportArticles(4), []);

  return (
    <>
      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Meilleure sélection pour vous
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {recommendedArticles.map((article) => {
            const category = getSupportCategory(article.category);
            const Icon = category && category.icon in ICONS
              ? ICONS[category.icon as keyof typeof ICONS]
              : HelpCircle;

            return (
              <Link
                key={article.slug}
                to="/support/$categoryId/$slug"
                params={{ categoryId: article.category, slug: article.slug }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {article.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      Lecture {article.readTime}
                    </span>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-brand/25 bg-brand/8 p-6">
        <p className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <ShieldCheck className="size-5 text-brand" />
          Toujours bloqué ?
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Écrivez à <strong className="text-foreground">{SITE.email}</strong> ou passez à l'atelier,
          du lundi au samedi de 8 h à 18 h. Réponse sous 24 h ouvrées.
        </p>
        <a
          href={supportEmailLink}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" />
          Contacter le support par email
          <ArrowRight className="size-4" />
        </a>
      </section>
    </>
  );
}