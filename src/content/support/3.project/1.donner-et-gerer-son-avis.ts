import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("donner-et-gerer-son-avis",
  "Donner et gérer son avis sur un projet",
  "Remplir le formulaire dynamique après livraison, délai d'expiration et modification.",
  `# Donner et gérer son avis sur un projet

## Accès au formulaire

Après la livraison d'un projet, vous recevez un e-mail contenant un lien unique vers votre formulaire d'évaluation personnalisé.

* **Données pré-remplies :** Votre Nom et votre Email sont renseignés automatiquement.
* **Champs dynamiques :** Questions de notation, texte libre et téléchargement de fichiers selon le projet.
* **Consentement :** La politique de confidentialité doit être acceptée avant validation. L'accord pour l'affichage public est optionnel.

## Expiration et modification

* **Durée de validité :** Le lien est actif pendant **30 jours** par défaut.
* **Modification :** Si l'e-mail de confirmation contient un bouton d'édition, vous pouvez modifier votre avis durant la période de validité. Sinon, la soumission est définitive.

:::tip
Le nombre de soumissions par lien d'évaluation est strictement limité.
:::`,
);

export default article;