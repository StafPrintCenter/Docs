import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("screen-print",
  "Séparateur de typons pour sérigraphie (trame demi-teinte)",
  "Génération de trame demi-teinte, recommandation de maille et export des films d'insolation.",
  ["toolkit", "serigraphie", "typon", "trame", "linéature", "insolation", "film"],
  "new",
  "4 octobre 2026",
  `# Séparateur de typons pour sérigraphie (trame demi-teinte)

L'outil [Séparateur de typons pour sérigraphie](https://tools.stafprint.com/screen-print) permet de convertir vos visuels en trame demi-teinte pour la préparation des films d'insolation textile et sérigraphiques.

---

## Fonctionnalités principales

- **Réglages de la trame :**
  * **Linéature (lpi) :** Ajustement de la densité de la trame en lignes par pouce (ex: 45 lpi).
  * **Angle de trame :** Réglage de l'orientation de la trame en degrés (ex: 22°) pour éviter les effets de moirage.
  * **Couleur du textile :** Sélection de la teinte du support pour adapter le contraste et la prévisualisation.
- **Calcul automatique de la maille :**
  * Recommandation dynamique du nombre de fils par cm (ex: **71 – 89 fils/cm**) basée sur la règle : *maille environ égale à 4 à 5 fois la linéature*.
  * Indication sur l'utilisation d'une sous-couche blanche pour les textiles foncés.
- **Exportation des films :**
  * Prévisualisation haute résolution en noir opaque pour l'insolation.
  * Téléchargement individuel du film (**PNG**) ou export global sous forme d'archive (**ZIP**).
`,);

export default article;