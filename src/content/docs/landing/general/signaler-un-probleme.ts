import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("signaler-un-probleme",
  "Signaler un problème sur un contenu",
  "Déclarer une information incorrecte, un lien cassé ou un souci technique directement depuis une page de détail.",
  ["signalement", "support", "erreur"],
  "stable",
  "20 août 2026",
  `# Signaler un problème sur un contenu

Vous avez la possibilité de signaler tout dysfonctionnement ou erreur directement depuis la page de détail de la ressource concernée (article de blog, service, formation ou réalisation).

---

## Fonctionnement du formulaire

Le formulaire s'ouvre sous forme de fenêtre modale sans vous faire quitter la page consultée :

1. **Remplissage automatique :**
   * **Type de ressource :** Sélectionne automatiquement la catégorie (ex: *Article*, *Service*, *Formation*).
   * **Identifiant de la ressource :** L'identifiant unique (UUID) de la page est automatiquement extrait et pré-rempli.
2. **Choix du motif (obligatoire) :** Sélectionnez la raison de votre signalement dans la liste (*Information incorrecte*, *Lien cassé*, *Contenu inapproprié*, *Spam*, *Autre*).
3. **Message explicatif (optionnel) :** Apportez des précisions complémentaires sur l'erreur constatée pour faciliter sa correction.
4. **Adresse email (optionnelle) :** Renseignez votre e-mail si vous souhaitez être informé du traitement de votre remarque.
5. **Envoi :** Cliquez sur **Envoyer le signalement** pour transmettre l'alerte à l'équipe technique.

:::tip
Privilégiez l'envoi du signalement directement depuis la page concernée pour garantir que l'identifiant exact de la ressource soit correctement transmis.
:::`,);

export default article;