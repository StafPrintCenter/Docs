import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("qualite-audio-video",
  "Améliorer la qualité audio et vidéo",
  "Diagnostiquer l'écho, la latence et la vidéo saccadée.",
  ["audio", "vidéo", "réseau"],
  "stable",
  "01 août 2026",
  `# Améliorer la qualité audio et vidéo

## Diagnostic rapide

1. Ouvrez **Réglages → Statistiques**.
2. Relevez la latence (ms) et la perte de paquets (%).

| Indicateur | Bon | À surveiller | Critique |
| --- | --- | --- | --- |
| Latence | < 100 ms | 100–250 ms | > 250 ms |
| Perte de paquets | < 1 % | 1–3 % | > 3 % |

## Écho

L'écho vient presque toujours de haut-parleurs ouverts près d'un micro. Utilisez un casque, ou activez **Suppression d'écho renforcée**.

## Vidéo saccadée

- Passez la réception en **360p** dans Réglages → Vidéo.
- Désactivez l'arrière-plan flouté (coûteux en CPU).
- Privilégiez une connexion filaire.

:::warning
Un VPN d'entreprise ajoute souvent 80 à 150 ms de latence. Désactivez-le si votre politique le permet.
:::`,);

export default article;
