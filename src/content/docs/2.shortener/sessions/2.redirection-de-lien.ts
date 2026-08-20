import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("redirection-de-lien",
  "Fonctionnement de la redirection de lien",
  "Déroulement de la page d'intermédiaire, compte à rebours, aperçu de destination et actions possibles.",
  ["outil", "lien", "redirection", "securite"],
  "new",
  "20 août 2026",
  `# Fonctionnement de la redirection de lien

Lorsqu'un utilisateur clique sur un lien court au format **go.stafprint.com/r/XXXXXX**, il est dirigé vers une page intermédiaire de transparence avant d'être redirigé vers le contenu final.

---

## Éléments affichés sur la page d'intermédiaire

La page de redirection présente plusieurs informations clés pour garantir la sécurité de la navigation :

* **Aperçu de la destination :**
  * **Visuel de couverture :** Image d'illustration de la page ciblée.
  * **Métadonnées :** Catégorie, titre complet et description du contenu.
  * **URL de destination :** L'adresse réelle \`stafprint.com\` vers laquelle le lien pointe.
  * **Statistiques :** Le nombre total de clics enregistrés sur ce lien court.
* **Compteur automatique :** Un décompte visuel de **8 secondes** s'exécute automatiquement avant la redirection.
* **Notice de confidentialité :** Rappel indiquant que des métriques anonymisées (type d'appareil, ville, adresse IP) sont relevées à des fins statistiques.

---

## Actions utilisateur

L'utilisateur dispose de deux choix d'interaction pendant le compte à rebours :

1. **Rediriger maintenant :** Permet d'accéder immédiatement à la page de destination sans patienter jusqu'à la fin des 8 secondes.
2. **Annuler :** Interrompt le processus et maintient l'utilisateur sur la page d'aperçu.
`,);

export default article;