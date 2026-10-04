import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("spot-finish",
  "Studio Vernis Sélectif UV & Dorure à chaud",
  "Prévisualisation d'effets de finition et génération automatique du masque technique K100 %.",
  ["toolkit", "vernis", "dorure", "argent", "masque", "k100", "prepresse"],
  "new",
  "4 octobre 2026",
  `# Studio Vernis Sélectif UV & Dorure à chaud

L'outil [Studio Vernis Sélectif UV & Dorure à chaud](https://tools.stafprint.com/spot-finish) permet de préparer et de valider les fichiers de finition spéciale avant leur départ en impression.

---

## Fonctionnalités principales

  - ** Sélection du type de finition :**
  - ** Vernis UV Sélectif:** apporte de la brillance et du relief sur des zones précises.
  - ** Vernis UV 3D(Gonflant) :** crée une surépaisseur tactile prononcée.
  - ** Dorure à chaud(Or) :** produit un effet métallisé doré haut de gamme.
  - ** Dorure à chaud(Argent) :** produit un rendu métallisé argenté et réfléchissant.

- ** Seuil de détection du masque:** ajustez la sensibilité d'isolation des zones à recouvrir avec un curseur de 0 % à 100 %.

  - ** Génération et export du masque technique:**
    - Conversion automatique des éléments de finition en ** Noir 100 % (K100) ** sur fond blanc.
  - Bouton ** Télécharger le masque ** pour obtenir le fichier de calque destiné au prépresse.
`,
);

export default article;
