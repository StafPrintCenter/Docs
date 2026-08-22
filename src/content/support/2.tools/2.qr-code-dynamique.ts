import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("qr-code-dynamique",
  "Télécharger le QR code d'un lien court",
  "Génération automatique du QR code et délai d'expiration du téléchargement.",
  `# Télécharger le QR code d'un lien court

## Génération automatique

Lors de la création d'un lien court sur [SPC Shortener](https://go.stafprint.com/), le système génère automatiquement un **QR code** associé pour vos supports imprimés ou visuels.

## Délais de téléchargement

Le QR code s'affiche sur la page de confirmation immédiatement après la validation du lien.

:::warning
Le bouton de téléchargement du QR code reste actif pendant **20 secondes**. Passé ce délai, le visuel disparaît de l'écran par mesure de sécurité.
:::`,
);

export default article;