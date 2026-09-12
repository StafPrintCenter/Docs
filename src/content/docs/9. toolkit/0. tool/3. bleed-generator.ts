import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("bleed-generator",
  "Générateur de gabarits & fonds perdus 3 mm",
  "Création de repères de coupe, zone de sécurité et bord perdu pour vos documents.",
  ["toolkit", "fondperdu", "coupe", "gabarit", "marge"],
  "new",
  "12 septembre 2026",
  `# Générateur de gabarits & fonds perdus 3 mm

Le [Générateur de Gabarits](https://toolkit.stafprint.com/bleed-generator) définit les zones techniques indispensables au façonnage de vos fichiers.

---

## Repères techniques générés

* **Ligne de coupe (Format fini) :** Dimensions exactes du document final après le passage du massif.
* **Fond perdu (Bleed - 3 mm) :** Prolongement de l'arrière-plan au-delà de la ligne de coupe pour éviter les liserés blancs.
* **Marge de sécurité (Zone tranquille - 3 à 5 mm) :** Espace interne d'exclusion pour empêcher la découpe des textes et logos.
* **Exportation de gabarit :** Téléchargez des fonds de page aux formats standards prêts à l'emploi.
`,);

export default article;