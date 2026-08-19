import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("acceder-aux-supports",
  "Accéder aux supports de cours",
  "Téléchargement, mode hors-ligne et durée de disponibilité.",
  ["supports", "cours"],
  "stable",
  "30 juillet 2026",
  `# Accéder aux supports de cours

## Où les trouver

**Ma session → Supports**. Chaque module regroupe diapositives, fiches pratiques et exercices.

## Disponibilité

| Type | Disponibilité |
| --- | --- |
| Diapositives | 12 mois après la session |
| Enregistrements vidéo | 90 jours |
| Exercices corrigés | 12 mois |

## Hors-ligne

Utilisez le bouton **Enregistrer** de la documentation pour retrouver rapidement un article, même sans reconnexion au catalogue.

:::warning
Les supports sont réservés à un usage personnel : leur rediffusion est interdite.
:::`,);

export default article;
