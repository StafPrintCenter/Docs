import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("spine-calculator",
  "Calculateur d'épaisseur de tranche et de poids",
  "Calcul du dos, du poids unitaire/global et génération de gabarit de couverture à plat.",
  ["toolkit", "tranche", "dos", "poids", "catalogue", "reliure"],
  "updated",
  "13 septembre 2026",
  `# Calculateur d'épaisseur de tranche et de poids

Le [Calculateur d'Épaisseur de Tranche](http://localhost:3001/spine-calculator) calcule les dimensions du dos et l'encombrement logistique d'un livre ou catalogue.

---

## Fonctionnalités principales

* **Sélection du papier intérieur :** Choix parmi des grammages prédéfinis (*Offset 80 g*, *Offset 90 g*, *Couché mat 115 g*, *Couché brillant 135 g*, *Couché 170 g*, *Carte 300 g*).
* **Type de reliure :** Sélection du façonnage (*Dos carré collé*, *Piqûre à cheval*, *Reliure cousue*).
* **Données de l'ouvrage :** Saisie du nombre de pages et du grammage de la couverture (ex: 300 g/m²).
* **Résultats & Calculs automatiques :**
  * **Épaisseur du dos :** Valeur exacte en mm ajustée à la reliure.
  * **Poids unitaire & Poids total :** Calcul du poids de l'exemplaire (en g) et d'un lot de 500 exemplaires (en kg).
* **Gabarit de couverture (à plat) :** Schéma avec les dimensions totales (4e de couverture + tranche + 1re de couverture) sans le fond perdu.
`,);

export default article;