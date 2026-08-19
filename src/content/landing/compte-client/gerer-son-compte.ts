import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("gerer-son-compte",
  "Gérer son compte et ses factures",
  "Coordonnées de facturation, historique et téléchargement des reçus.",
  ["compte", "facturation"],
  "stable",
  "20 juillet 2026",
  `# Gérer son compte et ses factures

## Coordonnées de facturation

**Mon compte → Facturation** : raison sociale, IFU, adresse. Ces informations apparaissent sur chaque facture.

## Télécharger une facture

Chaque commande payée génère un PDF téléchargeable pendant **5 ans** depuis l'historique.

## Supprimer son compte

Écrivez à **support@stafprint.com**. Les données de facturation sont conservées le temps légal, le reste est supprimé sous 30 jours.`,);

export default article;
