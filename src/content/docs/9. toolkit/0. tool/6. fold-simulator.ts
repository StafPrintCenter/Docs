import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("fold-simulator",
  "Simulateur de pliage : dépliants 2, 3 volets & accordéon",
  "Calcul des cotes en mm, compensations de volets et simulation interactive d'ouverture.",
  ["toolkit", "pliage", "depliant", "volets", "faconnage", "accordeon"],
  "updated",
  "13 septembre 2026",
  `# Simulateur de pliage : dépliants 2, 3 volets & accordéon

Le [Simulateur de Pliage](http://localhost:3001/fold-simulator) calcule les cotes d'imposition et simule l'ouverture des dépliants.

---

## Fonctionnalités principales

* **Les 4 types de plis supportés :**
  * **2 volets (Pli simple) :** 1 pli central.
  * **3 volets (Pli roulé) :** 2 plis. Calcule le volet intérieur plus court (-2 mm) pour permettre le pliage sans gondolement.
  * **3 volets (Accordéon / Z) :** 2 plis symétriques.
  * **4 volets (Portefeuille) :** 3 plis avec volets intérieurs ajustés.
* **Saisie des dimensions :** Saisie manuelle par l'utilisateur de la **largeur** et de la **hauteur** du format ouvert en mm.
* **Repères de pliage :** Calcul instantané de la largeur exacte de chaque volet au recto et au verso pour vos fichiers PAO.
* **Simulation interactive d'ouverture :** Module visuel permettant de simuler le déploiement du document volet par volet.
`,);

export default article;