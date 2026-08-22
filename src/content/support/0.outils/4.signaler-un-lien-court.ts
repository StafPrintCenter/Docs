import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("signaler-un-lien-court",
  "Signaler un problème sur un lien court",
  "Signaler un lien cassé, désactivé ou un contenu inapproprié à l'équipe support.",
  `# Signaler un problème sur un lien court

## Ouvrir le formulaire de signalement

Depuis la page d'aperçu d'un lien court, cliquez sur le lien **Signaler un problème** pour ouvrir la fenêtre de déclaration.

## Informations transmises

1. **Identifiant unique (UUID) :** Pré-rempli automatiquement pour cibler le lien exact.
2. **Motif (Obligatoire) :** Sélectionnez la raison (*Lien cassé*, *Information incorrecte*, *Contenu inapproprié*, *Spam*, *Autre*).
3. **Message & Email (Optionnels) :** Précisez le problème constaté et votre e-mail pour recevoir un retour.

:::tip
Les signalements sont traités sous 24 h ouvrées par l'équipe technique.
:::`,
);

export default article;