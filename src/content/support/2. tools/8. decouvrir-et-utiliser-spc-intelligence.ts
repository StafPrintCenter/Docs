import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("decouvrir-et-utiliser-spc-intelligence",
  "Découvrir et utiliser SPC Intelligence",
  "Règles d'utilisation, commandes spéciales / et @, et champ d'application de l'assistant IA.",
  `# Découvrir et utiliser SPC Intelligence

## Présentation et acceptation des conditions

Lors de votre première visite sur [SPC Intelligence](https://ai.stafprint.com/), une fenêtre modale vous demande de valider les conditions d'utilisation. L'assistant signale que ses réponses sont générées automatiquement et doivent être vérifiées avant tout usage professionnel.

## Champ d'application strictement encadré

SPC Intelligence est configuré pour répondre exclusivement aux sujets liés à l'écosystème STAF PRINT CENTER :
* Services d'impression, préparation de fichiers PAO (CMJN, résolution, fonds perdus) et devis.
* Programmes de formation et fonctionnement de l'espace apprenant ou formateur.
* Navigation et fonctionnalités des outils web de l'écosystème.

:::warning Questions hors périmètre
Toute question ne concernant pas l'écosystème (ex: actualités politiques, culture générale) est automatiquement déclinée par l'assistant.
:::

## Interface et commandes rapides

* **Suggestions de questions :** Des cartes d'exemples s'affichent sur la page d'accueil pour lancer une conversation en un clic.
* **Commandes d'action \`/\` :** Tapez \`/\` dans la zone de saisie pour déclencher une action rapide (\`/code\`, \`/image\`, \`/devis\`, \`/resume\`, \`/analyse\`).
* **Injections de contexte \`@\` :** Tapez \`@\` pour cibler un contexte précis (\`@ecosysteme\`, \`@impression\`, \`@formation\`, \`@client\`, \`@formateur\`).
`,
);

export default article;