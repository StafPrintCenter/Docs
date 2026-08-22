import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("demander-un-devis-en-ligne",
  "Demander un devis en ligne",
  "Compléter le formulaire de devis et gérer l'enregistrement automatique du brouillon.",
  `# Demander un devis en ligne

## Formulaire de devis

Pour obtenir une estimation sur-mesure pour vos travaux d'impression, de design ou de développement web, remplissez le formulaire de demande sur le site officiel.

* Précisez vos coordonnées directes (Nom, Email, Téléphone).
* Décrivez vos besoins techniques (dimensions, quantités, supports, délais souhaités).

## Enregistrement temporaire

Votre saisie est sauvegardée automatiquement dans le navigateur (**localStorage**) sous forme de brouillon.

:::warning
Le brouillon de demande de devis est conservé pendant **6 heures**. Pensez à finaliser votre envoi dans ce délai.
:::`,
);

export default article;