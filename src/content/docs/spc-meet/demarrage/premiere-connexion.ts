import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("premiere-connexion",
  "Première connexion à SPC Meet",
  "Créer votre compte, vérifier votre matériel et rejoindre votre première réunion.",
  ["compte", "démarrage"],
  "new",
  "12 août 2026",
  `# Première connexion à SPC Meet

SPC Meet est la solution de visioconférence de STAF PRINT CENTER. Cet article vous guide de la création du compte à votre première réunion.

## Créer votre compte

1. Ouvrez **meet.stafprint.com**.
2. Cliquez sur **Créer un compte** puis saisissez votre e-mail professionnel.
3. Validez le code à 6 chiffres reçu par e-mail.
4. Renseignez votre nom affiché : il sera visible par tous les participants.

:::tip
Utilisez un nom clair (Prénom + Nom + service). Cela facilite la modération des grandes réunions.
:::

## Vérifier votre matériel

Avant d'entrer en réunion, l'écran de pré-jonction affiche un test complet :

- **Micro** : parlez, la barre de niveau doit bouger.
- **Caméra** : l'aperçu doit s'afficher sans image figée.
- **Réseau** : un indicateur vert signale une bande passante suffisante.

## Rejoindre une réunion

Collez le lien reçu, ou saisissez le code de salle à 9 caractères, puis cliquez sur **Rejoindre**.

:::note
Si l'organisateur a activé la salle d'attente, vous patientez jusqu'à son approbation.
:::`,);

export default article;
