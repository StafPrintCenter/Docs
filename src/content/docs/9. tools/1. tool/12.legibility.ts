import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("legibility",
  "Simulateur de lisibilité d'enseigne, bâche et véhicule",
  "Diagnostic d'impact visuel selon la distance d'observation et la vitesse de déplacement.",
  ["toolkit", "lisibilite", "enseigne", "bache", "covering", "distance", "vitesse"],
  "new",
  "4 octobre 2026",
  `# Simulateur de lisibilité d'enseigne, bâche et véhicule

Le [Simulateur de Lisibilité](https://tools.stafprint.com/legibility) évalue l'efficacité et la clarté de vos visuels grand format et marquages mobiles.

---

## Fonctionnalités principales

* **Paramètres de simulation :**
  * **Distance de lecture :** Réglage en mètres (ex: $5\text{ m}$ à $100\text{ m}$).
  * **Vitesse du lecteur / véhicule :** Définition de la vitesse en $\text{km/h}$ (ex: $0\text{ km/h}$ piéton, $50\text{ km/h}$ urbain, $90\text{ km/h}$ voie rapide).
  * **Hauteur des lettres :** Saisie directe de la taille des typographies en cm.
* **Indicateurs d'impact visuel :**
  * **Temps de lecture disponible :** Calcul exact de la fenêtre d'exposition en secondes.
  * **Niveau de contraste :** Contrôle du ratio typographie / arrière-plan.
  * **Diagnostic de conformité :** Recommandations automatiques sur la taille minimale des textes pour garantir un déchiffrage instantané.
`,);

export default article;