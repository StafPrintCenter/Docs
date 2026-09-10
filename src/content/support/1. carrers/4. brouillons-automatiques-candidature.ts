import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("brouillons-automatiques-candidature",
  "Brouillons automatiques de candidature",
  "Conservation temporaire des saisies en cours dans le navigateur.",
  `# Brouillons automatiques de candidature

## Sauvegarde automatique

Pendant que vous remplissez un formulaire de candidature ou de stage, vos réponses textuelles sont sauvegardées automatiquement dans votre navigateur (**localStorage**).

## Durée de conservation

* **Offre d'emploi :** Brouillon conservé pendant **24 heures**.
* **Demande de stage :** Brouillon conservé pendant **2 jours**.

:::warning
Les fichiers joints (CV, lettres) et les cases de consentement ne sont jamais enregistrés dans le brouillon local pour des raisons de sécurité.
:::`,
);

export default article;