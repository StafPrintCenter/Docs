import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./moyens-de-paiement";
import { article as a1 } from "./demander-un-remboursement";

export const category: SupportCategory = {
  id: "paiement",
  title: "Paiement et facturation",
  description: "Moyens de paiement, factures, remboursements et avoirs.",
  icon: "billing",
};

export const articles: SupportArticle[] = [a0, a1];

export default { category, articles };
