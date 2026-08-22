import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./navigateurs-supportes";
import { article as a1 } from "./envoyer-fichiers-volumineux";

export const category: SupportCategory = {
  id: "technique",
  title: "Problèmes techniques",
  description: "Bugs, navigateurs supportés, envoi de fichiers volumineux.",
  icon: "technical",
};

export const articles: SupportArticle[] = [a0, a1];

export default { category, articles };
