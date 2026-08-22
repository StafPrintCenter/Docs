import type { SupportArticle, SupportCategory } from "@/types/support";
import { article as a0 } from "./mot-de-passe-oublie";
import { article as a1 } from "./securiser-son-compte";

export const category: SupportCategory = {
  id: "compte",
  title: "Compte et connexion",
  description: "Créer un compte, se connecter, mot de passe oublié, sécurité.",
  icon: "account",
};

export const articles: SupportArticle[] = [a0, a1];

export default { category, articles };
