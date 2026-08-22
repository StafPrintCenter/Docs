import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("donnees-personnelles",
"Vos données personnelles",
"Ce que nous collectons, la durée de conservation et vos droits.",
"confidentialite",
"4 min",
`# Vos données personnelles

## Ce que nous collectons

- Identité et coordonnées liées à votre compte et à la facturation.
- Historique de commandes et fichiers d'impression.
- Préférences locales de la documentation (thème, articles enregistrés).

## Stockage local de la documentation

Les articles **enregistrés**, le thème et l'historique de recherche restent **dans votre navigateur** (localStorage). Aucun envoi vers nos serveurs.

| Donnée | Emplacement | Conservation |
| --- | --- | --- |
| Articles enregistrés | Navigateur | 90 jours |
| Historique de recherche | Navigateur | Jusqu'à effacement |
| Thème clair/sombre | Navigateur | Jusqu'à effacement |
| Factures | Serveur STAF | Durée légale |

## Vos droits

Accès, rectification, suppression : écrivez à **support@stafprint.com**.`,);

export default article;
