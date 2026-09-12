import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("dpi-calculator",
  "Calculateur de DPI & diagnostic de résolution",
  "Vérification de la qualité des images en fonction du format et de la distance de lecture.",
  ["toolkit", "dpi", "resolution", "pixel", "prepresse"],
  "new",
  "12 septembre 2026",
  `# Calculateur de DPI & diagnostic de résolution

Le [Diagnostic Résolution DPI](https://toolkit.stafprint.com/dpi-calculator) évalue si la définition de vos images est suffisante pour garantir un tirage net sans pixellisation.

---

## Règles d'analyse et diagnostics

* **Saisie des dimensions :** Renseignez la largeur/hauteur en cm et la résolution en pixels.
* **Diagnostic instantané :**
  * **300 DPI et plus :** Qualité optimale pour petit format (cartes de visite, flyers, dépliants).
  * **150 à 250 DPI :** Qualité adaptée au grand format et à la signalétique (bâches, kakémonos).
  * **Moins de 150 DPI :** Risque de flou ou de pixellisation visible.
* **Distance de vue :** Prenez en compte le recul de lecture (un affichage urbain 4x3 m requiert moins de DPI qu'une brochure).
`,);

export default article;