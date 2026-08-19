import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("attestations",
  "Générer les attestations",
  "Modèle d'attestation, conditions d'obtention et impression.",
  ["attestation", "certificat"],
  "stable",
  "24 juillet 2026",
  `# Générer les attestations

## Conditions

Une attestation est émise si l'apprenant a : **80 % de présence** et **60 % au quiz final**.

## Génération

Session clôturée → **Attestations → Générer**. Un PDF nominatif est produit avec un identifiant de vérification.

## Impression

Cochez **Envoyer à l'atelier** pour une impression papier 250 g sur le site de Porto-Novo.

:::tip
Les attestations sont vérifiables publiquement via leur identifiant sur le site vitrine.
:::`,);

export default article;
