import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./contacter-le-support";

export const category: SupportCategory = {
  id: "contact",
  title: "Nous contacter",
  description: "Horaires, canaux et délais de réponse de l'équipe support.",
  icon: "contact",
};

export const articles: SupportArticle[] = [a0];

export default { category, articles };
