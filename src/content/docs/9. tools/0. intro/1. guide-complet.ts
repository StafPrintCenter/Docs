import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("guide-complet",
  "Guide complet de la boîte à outils SPC Creative Toolkit",
  "Présentation générale des 10 utilitaires prépresse et impression 100 % locaux.",
  ["toolkit", "prepresse", "impression", "outils", "guide"],
  "new",
  "13 septembre 2026",
  `# Guide complet de la boîte à outils [SPC Creative Toolkit](https://toolkit.stafprint.com/)

Le [SPC Creative Toolkit](https://toolkit.stafprint.com/) regroupe **10 utilitaires web** conçus pour simplifier et sécuriser la préparation des fichiers PAO avant impression.

---

## Les 10 utilitaires intégrés

* **Convertisseur RVB vers CMJN :** Conversion de teintes, pipetage sur image importée, alerte de gamut et simulation sur papier mat ou brillant.
* **Calculateur de DPI :** Diagnostic de résolution selon les dimensions saisies (en mm/cm) avec presets standards et recommandations de distance.
* **Générateur de Gabarits :** Définition dynamique du fond perdu (3 mm), de la ligne de coupe et de la zone de sécurité (-3 mm).
* **Simulateur TAC :** Calcul du taux d'encrage cumulé (C + M + J + N) et suggestions de recettes de noir riche.
* **Calculateur d'Épaisseur de Tranche :** Estimation du dos en mm, du poids unitaire/global et schéma de couverture à plat.
* **Simulateur de Pliage :** Prise en charge des 4 types de plis (*Pli simple*, *Pli roulé*, *Accordéon*, *Portefeuille*), saisie libre des dimensions et simulation interactive d'ouverture.
* **Générateur de QR Code & Code-barres :** Création de codes 1D/2D avec personnalisation de la couleur de premier plan, pastille SPC optionnelle et export en SVG ou PDF.
* **Calculateur de Calepinage Bâche & Vinyle :** Imposition multi-visuels sur laizes standards (1.06m à 3.20m) avec coût au m², rotation à 90° et calcul de gâche.
* **Guide Textile & Flocage :** Prévisualisation des zones de marquage (Cœur, A4, A3, Manche) et équivalence des tailles du S au XXL.
* **Boîte à outils PDF Express :** Traitement zéro-serveur pour la fusion, l'extraction de pages et la conversion en niveaux de gris.
`,);

export default article;