import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("dieline",
  "Générateur de tracé de découpe packaging (étui)",
  "Calcul de patrons de boîtes pliantes avec tracés de coupe, rainage et pliage 3D.",
  ["toolkit", "packaging", "dieline", "etui", "boite", "decoupe", "rainage", "3d"],
  "new",
  "4 octobre 2026",
  `# Générateur de tracé de découpe packaging (étui)

Le [Générateur de Tracé de Découpe](https://tools.stafprint.com/dieline) calcule les patrons d'emballage sur-mesure et simule leur assemblage en $3\text{D}$.

---

## Fonctionnalités principales

* **Saisie des dimensions de la boîte :**
  * Réglage millimétrique de la **Largeur**, **Profondeur** et **Hauteur** ($L \times P \times H$).
  * Ajustement de la **Languette de collage** et des **Patte de fermeture**.
* **Codes couleurs prépresse normalisés :**
  * **Ligne de coupe :** Ligne continue (Cyan / Magenta) indiquant la découpe extérieure.
  * **Ligne de rainage (pliage) :** Ligne pointillée repérant les plis.
* **Prévisualisation $3\text{D}$ & Exportation :**
  * Simulation interactive de fermeture du volume en $3\text{D}$.
  * Exportation vectorielle en **SVG** prêt pour la découpe numérique ou l'imposition.
`,);

export default article;