import { Link } from "@tanstack/react-router";
import { CreditCard, LifeBuoy, Lock, Package, UserRound, Wrench } from "lucide-react";
import { articlesByCategory, supportCategories } from "@/data/support-center";

const ICONS = {
  account: UserRound,
  billing: CreditCard,
  orders: Package,
  privacy: Lock,
  technical: Wrench,
  contact: LifeBuoy,
} as const;

export function SupportCategories() {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">
        Parcourir par sujet
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {supportCategories.map((category) => {
          const Icon = ICONS[category.icon];
          const count = articlesByCategory(category.id).length;
          const first = articlesByCategory(category.id)[0];
          return (
            <div
              key={category.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-4.5" />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="mt-3 space-y-1">
                {articlesByCategory(category.id).map((article) => (
                  <li key={article.slug}>
                    <Link
                      to="/support/$slug"
                      params={{ slug: article.slug }}
                      className="text-sm text-brand hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {count === 0 && first === undefined && (
                <p className="mt-3 text-xs text-muted-foreground">Bientôt disponible.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}