import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("gerer-une-salle",
  "Créer et gérer une salle",
  "Salles permanentes, salle d'attente, rôles et permissions des participants.",
  ["salle", "modération"],
  "updated",
  "10 août 2026",
  `# Créer et gérer une salle

## Créer une salle

Depuis le tableau de bord, **Nouvelle salle** → choisissez un type :

- **Ponctuelle** : le lien expire 24 h après la fin de la réunion.
- **Permanente** : lien stable, idéal pour les points hebdomadaires.

## Rôles

| Rôle | Peut couper les micros | Peut exclure | Peut enregistrer |
| --- | --- | --- | --- |
| Hôte | Oui | Oui | Oui |
| Co-hôte | Oui | Oui | Non |
| Participant | Non | Non | Non |

## Salle d'attente

Activez **Salle d'attente** dans les réglages de la salle pour approuver chaque arrivée.

:::warning
Sans salle d'attente, toute personne disposant du lien peut entrer. Réservez ce mode aux réunions publiques.
:::`,);

export default article;
