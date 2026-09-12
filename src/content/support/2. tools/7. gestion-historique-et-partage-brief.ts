import { defineSupportArticle } from "@/content/support/define";

export const article = defineSupportArticle("gestion-historique-et-partage-brief",
  "Consulter l'historique local et partager son brief",
  "Accès aux briefs enregistrés en local, reprise de brouillon et options de partage.",
  `# Consulter l'historique local et partager son brief

## Espace Mes briefs (Historique local)

La page [Mes briefs](https://brief.stafprint.com/history) répertorie tous les projets créés sur votre appareil. Chaque fiche indique sa référence unique (ex: \`SPC-2026-3902\`), son titre, le type de projet, la date de création et son statut (*Brouillon* ou *Validé*) :

* **Brouillon :** Permet d'utiliser le bouton **Reprendre** pour finaliser les étapes restantes.
* **Validé :** Permet d'utiliser le bouton **Consulter** pour afficher la fiche de synthèse complète.
* **Suppression :** Icône de corbeille pour retirer définitivement le brief de votre appareil.

## Modale d'envoi et de partage

Le bouton **Partager** présent sur chaque fiche ouvre une fenêtre modale proposant 5 actions :

1. **Envoyer sur WhatsApp :** Génère un message texte pré-rempli vers l'équipe commerciale STAF PRINT CENTER.
2. **Envoyer par e-mail :** Ouvre un courrier électronique pré-rempli adressé à \`contact@stafprint.com\`.
3. **Envoyer via le formulaire du site :** Redirige vers le site officiel \`stafprint.com\` avec les données pré-injectées.
4. **Télécharger en PDF :** Génère une fiche récapitulative au format PDF prête à être transmise.
5. **Copier le lien du brief :** Copie l'URL d'accès direct pour une consultation sur votre appareil.

:::note
Vos briefs sont enregistrés exclusivement dans le navigateur de votre appareil (**localStorage**). Aucune donnée n'est stockée à distance sans votre action d'envoi.
:::`,
);

export default article;