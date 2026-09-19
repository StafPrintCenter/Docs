import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("barcode-generator",
  "Générateur de QR codes et codes-barres vectoriels",
  "Création de QR Codes et codes-barres avec personnalisation de couleur et export SVG/PDF.",
  ["toolkit", "qrcode", "codebarres", "ean13", "code128", "vectoriel"],
  "updated",
  "13 septembre 2026",
  `# Générateur de QR codes et codes-barres vectoriels

L'outil [QR Code & Code-barres](http://localhost:3001/barcode-generator) génère des codes-barres 1D et 2D prêts pour l'impression prépresse.

---

## Fonctionnalités principales

* **Types de codes pris en charge :**
  * **QR Code :** Pour encoder des URL, textes, vCard ou numéros de téléphone.
  * **EAN-13 :** Pour l'identification des produits commerciaux.
  * **Code 128 :** Pour le marquage logistique et emballages.
* **Personnalisation visuelle :**
  * **Couleur du code :** Ajustement de la couleur du premier plan.
  * **Pastille SPC (Optionnelle) :** Case à cocher pour incruster le logo/pastille SPC au centre du QR Code.
* **Formats d'exportation :** Téléchargement aux formats vectoriels **SVG** et **PDF** prêts pour l'impression.
`,);

export default article;