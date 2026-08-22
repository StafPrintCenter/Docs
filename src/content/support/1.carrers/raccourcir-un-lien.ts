import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("raccourcir-un-lien",
  "Raccourcir un lien avec SPC Shortener",
  "Générer des liens courts sécurisés vers les contenus officiels de STAF PRINT CENTER.",
  "outils",
  "2 min",
  `# Raccourcir un lien avec SPC Shortener

## Fonctionnement

L'outil [SPC Shortener](https://go.stafprint.com/) permet de créer des liens courts pour partager nos contenus :

* **Domaine restreint :** Seules les URLs internes vers le domaine officiel \`stafprint.com\` sont acceptées.
* **Anonymat total :** Aucune création de compte n'est requise.
* **Statistiques :** Un compteur enregistre le nombre total de clics.

## Étapes de création

1. Collez votre lien officiel \`stafprint.com\` sur [SPC Shortener](https://go.stafprint.com/).
2. Validez pour obtenir votre lien au format **go.stafprint.com/r/XXXXXX**.
3. Cliquez sur **Copier** pour le partager.

:::tip
Chaque lien généré propose une page d'aperçu intermédiaire garantissant la sécurité avant la redirection finale.
:::`,
);

export default article;