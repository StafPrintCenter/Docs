import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("fonctionnement-et-commandes-spc-intelligence",
  "Fonctionnement, périmètre et commandes de SPC Intelligence",
  "Mode de fonctionnement de l'IA, restriction du champ d'application et raccourcis / et @.",
  ["ai", "intelligence", "commandes", "contexte", "prompt"],
  "new",
  "12 septembre 2026",
  `# Fonctionnement, périmètre et commandes de SPC Intelligence

[SPC Intelligence](https://ai.stafprint.com/) est l'assistant virtuel IA conçu pour guider les utilisateurs de l'écosystème STAF PRINT CENTER.

---

## 1. Conditions d'acceptation et périmètre d'action

* **Avertissement initial :** L'utilisateur doit accepter la politique d'utilisation avant toute interaction. Les réponses fournies sont générées automatiquement et nécessitent une vérification avant usage professionnel.
* **Périmètre restreint :** L'assistant refuse de traiter les demandes d'ordre général (culture générale, politique, etc.) et recentre systématiquement la conversation sur les activités de STAF PRINT CENTER (imprimerie, design, formations, devis et espace client).

---

## 2. Interface interactive et raccourcis

* **Suggestions dynamiques :** La page d'accueil propose des prompts guidés (*"Explique-moi la différence entre CMJN et RVB"*, *"Présente-moi l'écosystème"*).
* **Commandes d'action (\`/\`) :**
  * \`/code\` : Génération de code pour l'écosystème web.
  * \`/image\` : Génération de visuels et maquettes (affiches, flyers).
  * \`/devis\` : Création et estimation de devis d'impression.
  * \`/resume\` : Résumé de documents ou textes courts.
  * \`/analyse\` : Analyse détaillée de fichiers transmis.
* **Injections de contexte (\`@\`) :**
  * \`@ecosysteme\`,
  * \`@impression\`,
  * \`@formation\`,
  * \`@client\`,
  * \`@formateur\`.
`,);

export default article;