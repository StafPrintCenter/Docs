import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("spot-finish",
  "Studio Vernis Sélectif UV & Dorure à chaud",
  "Prévisualisation d'effets de finition et génération automatique du masque technique K100 %.",
  ["toolkit", "vernis", "dorure", "argent", "masque", "k100", "prepresse"],
  "new",
  "4 octobre 2026",
  `# Studio Vernis Sélectif UV & Dorure à chaud

L'outil [Studio Vernis Sélectif UV & Dorure à chaud](https://tools.stafprint.com/spot-finish) permet de préparer et valider les fichiers de finition spéciale avant le départ en impression.

---

## Fonctionnalités principales

* **Sélection du type de finition :**
  * **Vernis UV Sélectif :** Apporte de la brillance et du relief localisé.
  * **Vernis UV $3\text{D}$ (Gonflant) :** Crée une surépaisseur tactile prononcée.
  * **Dorure à chaud (Or) :** Effet métallisé doré haut de gamme.
  * **Dorure à chaud (Argent) :** Rendu métallisé argenté réfléchissant.
* **Seuil de détection du masque :** Ajustement par curseur ($0\,\%$ à $100\,\%$) de la sensibilité d'isolation des zones à recouvrir.
* **Génération & Export du masque technique :**
  * Conversion automatique des éléments de finition en **Noir pur $100\,\%$** ($K = 100\,\%$) sur fond blanc.
  * Bouton **Télécharger le masque** pour obtenir le fichier de calque conforme aux exigences prépresse.
`,);

export default article;