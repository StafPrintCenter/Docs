import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("rgb-to-cmyk",
  "Convertisseur RVB vers CMJN & simulateur papier",
  "Conversion des couleurs écran en encres d'impression et simulation du rendu papier.",
  ["toolkit", "couleur", "cmjn", "rvb", "simulation"],
  "new",
  "12 septembre 2026",
  `# Convertisseur RVB vers CMJN & simulateur papier

L'outil [Convertisseur RVB vers CMJN](https://toolkit.stafprint.com/rgb-to-cmyk) permet de traduire les couleurs d'écran (RVB) en pourcentages d'encres d'impression (CMJN).

---

## Fonctionnalités principales

* **Traduction de profil :** Convertit les valeurs RVB/HEX en taux Cyan, Magenta, Jaune et Noir.
* **Alerte de gamut :** Signale les couleurs vives (néons, bleus intenses) non reproductibles en quadrichromie.
* **Simulation de support :** Visualisez la variation du rendu des couleurs selon la finition du papier (*Couché brillant*, *Couché mat*, *Papier offset/recyclé*).
* **Copie rapide :** Exportez les valeurs CMJN en un clic pour vos logiciels PAO (InDesign, Illustrator, Photoshop).
`,);

export default article;