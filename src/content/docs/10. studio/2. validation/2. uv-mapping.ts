import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("ar-viewer",
  "Visualisation en Réalité Augmentée (AR)",
  "Projection du modèle 3D à l'échelle réelle dans son environnement via appareil mobile.",
  ["studio", "ar", "realite-augmentee", "mobile", "projection", "3d"],
  "updated",
  "19 septembre 2026",
  `# Visualisation en Réalité Augmentée (AR)

La fonction Réalité Augmentée de [SPC 3D Studio](https://studio.stafprint.com/ar/AR-K4I6LY) permet de projeter l'imprimé à l'échelle $1:1$ dans son environnement réel.

---

## Fonctionnalités principales

* **Aperçu mobile et QR Code :**
  * Scannez le **QR Code** présent sur l'interface ordinateur depuis un smartphone ou une tablette pour ouvrir la session AR.
* **Ancrage dans le monde réel :**
  * **Mode Sol / Surface :** Détection automatique des plans horizontaux et verticaux (sols, murs ou façades) pour poser ou suspendre le produit.
  * **Mise à l'échelle 1:1 :** Affichage aux dimensions réelles de fabrication pour vérifier l'encombrement et la lisibilité du visuel dans la pièce ou sur la devanture.
* **Compatibilité multi-plateformes :**
  * Prise en charge native via **iOS ARQuickLook** (sur iPhone / iPad) et **Android SceneViewer** (sur smartphones Android compatibles ARCore).
`,);

export default article;