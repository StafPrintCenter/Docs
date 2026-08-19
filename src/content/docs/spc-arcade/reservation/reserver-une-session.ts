import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("reserver-une-session",
  "Réserver une session Arcade",
  "Choisir un créneau, payer et présenter son QR code à l'accueil.",
  ["réservation", "paiement"],
  "stable",
  "08 août 2026",
  `# Réserver une session Arcade

## Réserver en ligne

1. Ouvrez **arcade.stafprint.com → Réserver**.
2. Choisissez la date, le créneau et le poste (console, simulateur, VR).
3. Indiquez le nombre de joueurs.
4. Payez par Mobile Money ou carte.
5. Recevez un **QR code** par e-mail et SMS.

## Tarifs indicatifs

| Poste | 30 min | 1 h | Pass 3 h |
| --- | --- | --- | --- |
| Console | 500 F | 900 F | 2 300 F |
| Simulateur | 1 000 F | 1 800 F | 4 500 F |
| Casque VR | 1 200 F | 2 000 F | 5 000 F |

:::note
Présentez-vous 10 minutes avant : au-delà de 15 minutes de retard, le créneau peut être réattribué.
:::`,);

export default article;
