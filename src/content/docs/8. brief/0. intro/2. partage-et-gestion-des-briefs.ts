import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("redirection-de-lien",
  "Fonctionnement de la redirection de lien",
  "Aperçu du contenu, compte à rebours de 10 secondes, redirection et gestion des états d'accès.",
  ["outil", "lien", "redirection", "securite", "expiration"],
  "stable",
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
* **Compteur automatique :** Un décompte visuel de **10 secondes** s'exécute automatiquement avant la redirection.
* **Notice de confidentialité :** Rappel indiquant que des métriques anonymisées (type d'appareil, ville, adresse IP) sont relevées à des fins statistiques.

---

## Actions utilisateur

Pendant le compte à rebours, l'utilisateur dispose de deux choix :

1. **Rediriger maintenant :** Permet d'accéder immédiatement à la page de destination sans patienter.
2. **Annuler :** Interrompt le processus et maintient l'utilisateur sur la page d'aperçu.

---

## États particuliers du lien (Désactivation & Plage de dates)

Un lien court peut être temporairement ou définitivement inaccessible dans les cas suivants :

* **Lien désactivé :** Si le lien a été désactivé manuellement par l'administration, la redirection ne s'exécute pas et le message **« Ce lien est désactivé »** s'affiche.
* **Délai / Expiration atteinte :** Si le lien est associé à une date limite d'utilisation et que cette date est dépassée, la redirection est bloquée.
* **Date de début non atteinte :** Si le lien a été programmé pour devenir actif à une date future, il ne redirige pas tant que cette date n'est pas atteinte.

:::note
En cas de lien désactivé ou non actif, la page d'aperçu permet de retourner à l'accueil ou de signaler un problème à l'équipe STAF PRINT CENTER.
:::`,);

export default article;