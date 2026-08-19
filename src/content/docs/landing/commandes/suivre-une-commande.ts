import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("suivre-une-commande",
  "Suivre une commande",
  "États de production, notifications et retrait en atelier à Porto-Novo.",
  ["suivi", "livraison"],
  "new",
  "13 août 2026",
  `# Suivre une commande

## Les états de production

1. **Reçue** — dossier créé, paiement en attente.
2. **Prépresse** — contrôle des fichiers et BAT.
3. **En production** — impression lancée.
4. **Façonnage** — découpe, pliage, plastification.
5. **Prête** — retrait ou livraison.

## Où suivre

Depuis **Mon compte → Commandes**, ou avec le numéro **CMD-XXXXXX** sur la page de suivi publique.

:::tip
Activez les notifications WhatsApp dans votre profil pour recevoir chaque changement d'état.
:::`,);

export default article;
