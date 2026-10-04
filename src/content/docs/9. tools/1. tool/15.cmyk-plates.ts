import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("cmyk-plates",
  "Contrôle et séparation des plaques offset CMJN",
  "Décomposition des couches Cyan, Magenta, Jaune, Noir et contrôle de couverture d'encre.",
  ["toolkit", "cmyk", "offset", "plaques", "couverture", "prepresse", "cyan", "magenta", "jaune", "noir"],
  "new",
  "4 octobre 2026",
  `# Contrôle et séparation des plaques offset CMJN

L'outil [Contrôle et séparation des plaques offset CMJN](https://tools.stafprint.com/cmyk-plates) permet de vérifier la séparation des couleurs et le taux d'encrage avant l'insoleuse d'imprimerie.

---

## Fonctionnalités principales

* **Séparation des canaux CMJN :**
  * Affichage individuel et combiné des plaques **Cyan (C)**, **Magenta (M)**, **Jaune (J)** et **Noir (N)**.
  * Isolation de chaque couche de couleur pour déceler les erreurs de surimpression ou de calage.
* **Analyse de couverture d'encre (TAC) :**
  * Détection visuelle du taux de couverture d'encre cumulé sur l'ensemble du document.
  * Alerte prépresse en cas de dépassement des seuils de maculage sur papier couché ou offset.
* **Contrôle prépresse :** Inspection rigoureuse des textes et des aplats en noir pur ($K = 100\,\%$) pour éviter le noir soutenu involontaire sur le texte fin.
`,);

export default article;