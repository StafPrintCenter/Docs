import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./suivre-ou-recuperer-sa-commande";
import { article as a1 } from "./commande-en-retard";

export const category: SupportCategory = {
  id: "commandes",
  title: "Commandes et livraison",
  description: "Suivi, retrait à l'atelier, retards et réclamations.",
  icon: "orders",
};

export const articles: SupportArticle[] = [a0, a1];

export default { category, articles };
