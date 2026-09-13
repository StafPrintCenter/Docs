import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("fold-simulator",
  "Simulateur de pliage : dépliants 2, 3 volets & accordéon",
  "Visualisation des types de plis et dimensions recommandées par volet.",
  ["toolkit", "pliage", "depliant", "volets", "faconnage", "accordeon"],
  "updated",
  "13 septembre 2026",
  `# Simulateur de pliage : dépliants 2, 3 volets & accordéon

Le [Simulateur de Pliage](http://localhost:3001/fold-simulator) facilite la conception de dépliants en définissant le découpage et les compensations de volets.

---

## Fonctionnalités principales

* **Types de plis pris en charge :**
  * **Pli simple (1 pli, 2 volets) :** Séparation symétrique au centre.
  * **Pli roulé (2 plis, 3 volets) :** Gestion du volet intérieur plus court (-2 mm) pour permettre la fermeture sans gondolement.
  * **Pli accordéon / Z (2 plis, 3 volets) :** Répartition égale des volets.
* **Format et orientations :** Choix du format ouvert de base (*A4*, *A3*, *Personnalisé*) et de l'orientation (*Paysage* / *Portrait*).
* **Repères de pliage :** Calcul direct des dimensions exactes en mm de chaque volet du recto et du verso.
`,);

export default article;