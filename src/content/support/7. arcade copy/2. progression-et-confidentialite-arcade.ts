import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("progression-et-confidentialite-arcade",
  "Grades, XP et confidentialité des données sur SPC Arcade",
  "Calcul des points d'expérience, passage de niveaux et sauvegarde locale.",
  `# Grades, XP et confidentialité des données sur SPC Arcade

## Progression et Grades

En jouant aux différents mini-jeux de [SPC Arcade](https://arcade.stafprint.com/), vous cumulez des points d'expérience (**XP**) pour gravir les 7 échelons de la hiérarchie du studio :

1. **Niveau 1 :** Stagiaire Studio (0 XP)
2. **Niveau 2 :** Assistant PAO (150 XP)
3. **Niveau 3 :** Technicien PAO (400 XP)
4. **Niveau 4 :** Infographiste Senior (800 XP)
5. **Niveau 5 :** Chef de Fabrication (1 400 XP)
6. **Niveau 6 :** Directeur Artistique (2 200 XP)
7. **Niveau 7 :** Légende STAF (3 200 XP)

## Sauvegarde et Confidentialité

Vos scores, niveaux et badges sont conservés exclusivement dans la mémoire locale de votre navigateur (**localStorage**). Aucune donnée personnelle n'est envoyée ou stockée sur nos serveurs.

:::note
Si vous changez de navigateur ou effacez les données de navigation, votre progression sur la plateforme sera réinitialisée.
:::`,
);

export default article;