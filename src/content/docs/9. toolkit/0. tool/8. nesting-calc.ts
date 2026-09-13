import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("nesting-calc",
  "Calculateur de calepinage bâche et vinyle",
  "Optimisation de la disposition des visuels sur laizes grand format et calcul des chutes.",
  ["toolkit", "calepinage", "bache", "vinyle", "laize", "grandformat"],
  "updated",
  "13 septembre 2026",
  `# Calculateur de calepinage bâche et vinyle

Le [Calculateur de Calepinage](http://localhost:3001/nesting-calc) optimise le placement de visuels sur rouleaux d'impression grand format.

---

## Fonctionnalités principales

* **Dimensions du visuel & Quantité :** Saisie de la largeur, hauteur (en cm) et du nombre d'exemplaires à imprimer.
* **Choix de la laize de rouleau :** Sélection de la largeur du support d'impression (*106 cm*, *137 cm*, *160 cm*, ou laize sur-mesure).
* **Calcul d'imposition :** Détermine l'orientation la plus économique (rotation automatique pour réduire la perte).
* **Bilan de consommation :**
  * **Métrage linéaire :** Longueur totale de rouleau consommée (en mètres).
  * **Taux de gâche / perte :** Pourcentage de surface vierge perdue.
* **Schéma d'agencement :** Visualisation graphique de la disposition des poses sur la largeur du support.
`,);

export default article;