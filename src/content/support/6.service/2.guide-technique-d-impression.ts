import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("guide-technique-d-impression",
  "Guide technique de préparation des fichiers",
  "Normes colorimétriques, résolution minimales et fonds perdus requis.",
  `# Guide technique de préparation des fichiers

## Consignes de préparation

Pour garantir une qualité d'impression optimale et éviter toute erreur de tirage, respectez les normes suivantes :

* **Mode colorimétrique :** Configurez vos fichiers en **CMJN** (Cyan, Magenta, Jaune, Noir) et non en RVB.
* **Résolution minimale :** **300 DPI** pour les documents de petit format (cartes, flyers) et **150 DPI minimum** pour le grand format.
* **Fonds perdus & Marge de sécurité :** Intégrez **2 mm à 3 mm de fond perdu** tout autour de votre visuel.
* **Formats acceptés :** PDF haute définition, AI, PSD ou TIFF.

:::warning Vectorisation
Pensez à vectoriser l'ensemble de vos typographies avant l'exportation définitive de vos fichiers.
:::`,
);

export default article;