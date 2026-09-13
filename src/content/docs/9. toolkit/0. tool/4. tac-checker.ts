import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("tac-checker",
  "Simulateur de taux d'encrage maximum (TAC)",
  "Calcul de la couverture d'encre totale CMJN pour éviter les défauts de séchage.",
  ["toolkit", "tac", "encrage", "cmjn", "impression", "sechage"],
  "updated",
  "13 septembre 2026",
  `# Simulateur de taux d'encrage maximum (TAC)

Le [Simulateur TAC](https://toolkit.stafprint.com/tac-checker) mesure le Taux d'Encrage Cumulé (Total Area Coverage) de vos combinaisons de couleurs CMJN.

---

## Fonctionnalités principales

* **Calcul en temps réel :** Ajustez les pourcentages de C, M, J, N via les curseurs ou saisissez une couleur Hexadécimale pour obtenir la somme totale de couverture ($C + M + J + N$).
* **Évaluation de sécurité :**
  * **Optimal (≤ 280 %) :** Conforme pour la majorité des impressions offset et numériques.
  * **Critique / Risqué (> 300 %) :** Avertissement sur les risques de maculage, de séchage lent ou de surcharge du papier.
* **Recettes de noir riche :** Propositions de combinaisons CMJN recommandées pour obtenir un noir profond et net sans dépasser le TAC recommandé.
`,);

export default article;