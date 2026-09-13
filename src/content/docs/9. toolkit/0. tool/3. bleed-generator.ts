import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("bleed-generator",
  "Générateur de gabarits & fonds perdus",
  "Calcul des zones de coupe, fonds perdus et marges de sécurité pour l'impression.",
  ["toolkit", "fondperdu", "coupe", "gabarit", "marge"],
  "updated",
  "13 septembre 2026",
  `# Générateur de gabarits & fonds perdus

Le [Générateur de Gabarits](https://toolkit.stafprint.com/bleed-generator) calcule les zones techniques nécessaires pour préparer vos fichiers avant la coupe au massif.

---

## Fonctionnalités principales

* **Choix des dimensions :** Sélectionnez un format standard (*A4*, *A5*, *A6*, *Carte de visite*) ou renseignez des dimensions personnalisées en mm.
* **Visualisation technique interactive :** Aperçu dynamique montrant les 3 zones de préparation :
  * **Zone de fond perdu :** Zone d’extension d’arrière-plan pour éviter les bords blancs après découpe.
  * **Ligne de coupe (Format fini) :** Dimension exacte du produit final.
  * **Zone de sécurité :** Marge interne recommandée pour protéger les textes et éléments clés.
* **Résumé des dimensions totales :** Affichage direct de la taille brute du document avec les fonds perdus intégrés.
`,);

export default article;