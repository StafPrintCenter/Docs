import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("barcode-generator",
  "Générateur de QR codes et codes-barres vectoriels",
  "Création de QR Codes et codes-barres 1D/2D prêts pour l'impression prépresse.",
  ["toolkit", "qrcode", "codebarres", "ean13", "code128", "vectoriel"],
  "updated",
  "13 septembre 2026",
  `# Générateur de QR codes et codes-barres vectoriels

L'outil [QR Code & Code-barres](http://localhost:3001/barcode-generator) produit des codes-barres conformes aux normes d'impression et de traçabilité.

---

## Fonctionnalités principales

* **Sélection du type de code :**
  * **QR Code :** Pour liens web, vCard, textes ou numéros de téléphone.
  * **EAN-13 :** Pour l'identification des produits du commerce (13 chiffres avec clé de contrôle).
  * **Code 128 :** Pour l'étiquetage logistique, emballages et suivi interne.
* **Personnalisation visuelle :** Réglage des couleurs de premier plan et d'arrière-plan avec indicateur de contraste pour garantir la lisibilité au lecteur optique.
* **Options d'exportation :** Téléchargement au format vectoriel **SVG** (idéal prépresse) ou image **PNG** haute définition.
`,);

export default article;