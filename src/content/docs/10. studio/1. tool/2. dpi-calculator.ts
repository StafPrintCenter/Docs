import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("dpi-calculator",
  "Calculateur de DPI & diagnostic de résolution",
  "Analyse de la résolution d'image pour l'impression petit et grand format.",
  ["toolkit", "dpi", "resolution", "pixel", "diagnostic"],
  "updated",
  "13 septembre 2026",
  `# Calculateur de DPI & diagnostic de résolution

Le [Calculateur de DPI](https://toolkit.stafprint.com/dpi-calculator) évalue la qualité de vos images par rapport aux dimensions d'impression visées.

---

## Fonctionnalités principales

* **Importation d'image :** Déposez un fichier pour extraire automatiquement sa largeur et sa hauteur en pixels.
* **Calcul sur-mesure :** Définissez les dimensions souhaitées en centimètres (ou mm) pour obtenir le nombre exact de DPI (points par pouce).
* **Presets de formats :** Sélectionnez des dimensions courantes en un clic (*Carte de visite 85x55 mm*, *Flyer A5*, *Affiche A3*, *Kakemono 85x200 cm*, *Bâche 3x1 m*).
* **Diagnostic visuel :**
  * **Excellente (300+ DPI) :** Qualité impression offset et numérique haute définition.
  * **Correcte / Acceptable (150-300 DPI) :** Adapté selon la distance de visionnage.
  * **Faible (< 150 DPI) :** Risque de flou ou pixellisation.
* **Recommandations de distance :** Conseils d'affichage selon le type d'impression (lecture en main vs grand format à distance).
`,);

export default article;