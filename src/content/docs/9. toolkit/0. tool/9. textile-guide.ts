import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("textile-guide",
  "Guide des tailles textiles & zones de flocage",
  "Visualisation des zones de marquage et équivalence des tailles du S au XXL.",
  ["toolkit", "textile", "flocage", "marquage", "dtf", "broderie"],
  "updated",
  "13 septembre 2026",
  `# Guide des tailles textiles & zones de flocage

Le [Guide Textile & Flocage](http://localhost:3001/textile-guide) définit les zones d'impression et les dimensions d'emplacements sur vêtements.

---

## Fonctionnalités principales

* **Emplacements du marquage & dimensions :**
  * **Cœur (petit logo) :** $8 \times 8\text{ cm}$ (Flocage ou broderie).
  * **A4 poitrine :** $21 \times 29,7\text{ cm}$ (Sérigraphie ou DTF).
  * **A3 dos :** $29,7 \times 42\text{ cm}$ (Sérigraphie ou DTF).
  * **Manche :** $7 \times 5\text{ cm}$ (Transfert).
  * **Dos nuque :** $10 \times 4\text{ cm}$ (Flocage).
* **Prévisualisation interactive :** Visualisation dynamique de la zone sélectionnée sur les faces Devant et Dos du vêtement.
* **Guide des tailles :** Tableau d'équivalences des mesures (largeur poitrine, hauteur) du **S au XXL**.
`,);

export default article;