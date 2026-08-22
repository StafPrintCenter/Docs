import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("envoyer-fichiers-volumineux",
"Envoyer des fichiers volumineux",
"Dépasser la limite de 200 Mo sans perdre en qualité.",
`# Envoyer des fichiers volumineux

## Limite

200 Mo par fichier sur le formulaire de devis.

## Solutions

1. Exportez en **PDF/X-4** avec compression ZIP : souvent 3 à 5 fois plus léger, sans perte.
2. Découpez un projet multipage en plusieurs PDF.
3. Au-delà, demandez un lien de dépôt sécurisé à **support@stafprint.com**.

:::danger
N'envoyez pas de fichiers via des liens de partage temporaires expirant en 7 jours : la production peut démarrer plus tard.
:::`,);

export default article;
