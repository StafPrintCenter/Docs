import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("rgb-to-cmyk",
  "Convertisseur RVB vers CMJN & simulateur papier",
  "Conversion de couleurs écran, extraction depuis une image et simulation du rendu papier.",
  ["toolkit", "couleur", "cmjn", "rvb", "simulation", "pipette"],
  "updated",
  "13 septembre 2026",
  `# Convertisseur RVB vers CMJN & simulateur papier

L'outil [Convertisseur RVB vers CMJN](http://localhost:3001/rgb-to-cmyk) traduit les couleurs d'écran en pourcentages d'encres d'impression et simule leur rendu sur papier.

---

## Fonctionnalités principales

* **Conversion de couleur :** Saisissez un code hexadécimal ou ajustez les curseurs R, V, B pour obtenir la conversion exacte en CMJN.
* **Extraction depuis une image :** Importez une image (JPG, PNG, WebP) et cliquez n'importe où dessus avec la pipette interactive pour analyser la couleur sélectionnée.
* **Simulateur Avant / Après :** Comparez l'affichage d'origine avec le rendu imprimé grâce à un curseur de comparaison interactif.
* **Simulation de support :** Visualisez l'absorption et la finition selon le type de papier (*Papier Mat* ou *Papier Brillant*).
* **Indicateur de gamut :** Alerte visuelle lorsque les valeurs de couleur dépassent les capacités standard d'impression.
`,);

export default article;