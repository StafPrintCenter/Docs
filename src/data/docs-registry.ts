import type { DocArticle, DocSpace, DocSpaceId, SearchHit } from "@/types/docs";

const a = (
  slug: string,
  title: string,
  description: string,
  tags: string[],
  status: DocArticle["status"],
  updatedAt: string,
  content: string,
): DocArticle => ({ slug, title, description, tags, status, updatedAt, content });

/* ------------------------------------------------------------ SITE VITRINE */

const siteVitrine: DocSpace = {
  id: "site-vitrine",
  name: "Site Vitrine",
  shortName: "Vitrine",
  tagline: "Site public, devis et commandes d'impression",
  description:
    "Le site public de STAF PRINT CENTER : demander un devis, suivre une commande, préparer des fichiers d'impression conformes et gérer votre compte client.",
  groups: [
    {
      id: "commandes",
      title: "Commandes & devis",
      articles: [
        a(
          "demander-un-devis",
          "Demander un devis d'impression",
          "Le parcours complet du formulaire de devis jusqu'à la validation du BAT.",
          ["devis", "commande"],
          "new",
          "14 août 2026",
          `# Demander un devis d'impression

## Étapes

1. Rendez-vous sur **stafprint.com → Demander un devis**.
2. Choisissez la famille de produit (affiche, flyer, bâche, textile…).
3. Renseignez le format, le support, la quantité et la finition.
4. Déposez vos fichiers (PDF, AI, PSD — 200 Mo max).
5. Validez : un numéro de dossier **DVS-XXXXXX** vous est attribué.

## Délais de réponse

| Type de projet | Délai de devis |
| --- | --- |
| Standard catalogue | 2 h ouvrées |
| Grand format | 4 h ouvrées |
| Sur-mesure / façonnage | 24 h ouvrées |

:::note
Le devis reste valable 30 jours. Passé ce délai, les prix matière sont recalculés.
:::`,
        ),
        a(
          "suivre-une-commande",
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
:::`,
        ),
      ],
    },
    {
      id: "fichiers",
      title: "Préparation des fichiers",
      articles: [
        a(
          "preparer-ses-fichiers",
          "Préparer un fichier prêt à imprimer",
          "Fonds perdus, colorimétrie, résolution et polices vectorisées.",
          ["prépresse", "pdf"],
          "updated",
          "11 août 2026",
          `# Préparer un fichier prêt à imprimer

## Règles de base

- **Fonds perdus** : 3 mm pour le petit format, 10 mm pour le grand format.
- **Zone de sécurité** : gardez 5 mm entre le texte et la coupe.
- **Résolution** : 300 dpi (petit format), 150 dpi (grand format), 72 dpi (bâche géante).
- **Colorimétrie** : CMJN, profil *Coated FOGRA39*.
- **Polices** : vectorisées ou incorporées.

## Export PDF recommandé

\`\`\`text~~export-pdf.txt
Norme        : PDF/X-4
Compression  : ZIP (sans perte)
Repères      : traits de coupe + fonds perdus
Transparence : conservée
\`\`\`

:::danger
Un fichier RVB sera converti automatiquement : les couleurs vives (bleus, verts fluo) peuvent se ternir. Fournissez toujours du CMJN.
:::`,
        ),
        a(
          "formats-supportes",
          "Formats de fichiers supportés",
          "Ce que l'atelier accepte, et ce qu'il faut éviter.",
          ["fichiers", "formats"],
          "stable",
          "28 juillet 2026",
          `# Formats de fichiers supportés

| Format | Accepté | Remarque |
| --- | --- | --- |
| PDF/X-4 | Oui | Format recommandé |
| AI / EPS | Oui | Polices vectorisées obligatoires |
| PSD / TIFF | Oui | Aplatir les calques inutiles |
| JPG / PNG | Oui | Uniquement si 300 dpi |
| DOCX / PPTX | Non | À convertir en PDF avant envoi |
| CANVA (lien) | Non | Exportez en PDF impression |

:::warning
Les exports Canva "PDF standard" sont en RVB 96 dpi. Choisissez toujours **PDF pour impression**.
:::`,
        ),
      ],
    },
    {
      id: "compte-client",
      title: "Compte client",
      articles: [
        a(
          "gerer-son-compte",
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

Écrivez à **support@stafprint.com**. Les données de facturation sont conservées le temps légal, le reste est supprimé sous 30 jours.`,
        ),
      ],
    },
  ],
};

/* ---------------------------------------------------------------- SPC MEET */

const spcMeet: DocSpace = {
  id: "spc-meet",
  name: "SPC Meet",
  shortName: "Meet",
  tagline: "Visioconférence & salles de réunion",
  description:
    "Tout pour organiser, animer et sécuriser vos réunions en ligne sur SPC Meet : connexion, salles, participants, qualité audio/vidéo et dépannage.",
  groups: [
    {
      id: "demarrage",
      title: "Démarrage",
      articles: [
        a(
          "premiere-connexion",
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
:::`,
        ),
        a(
          "raccourcis-clavier",
          "Raccourcis clavier essentiels",
          "Gagnez du temps en réunion avec les combinaisons de touches SPC Meet.",
          ["productivité", "raccourcis"],
          "stable",
          "02 août 2026",
          `# Raccourcis clavier essentiels

## En réunion

| Action | Windows / Linux | macOS |
| --- | --- | --- |
| Couper / activer le micro | Ctrl + D | ⌘ + D |
| Couper / activer la caméra | Ctrl + E | ⌘ + E |
| Lever la main | Ctrl + Alt + H | ⌘ + ⌥ + H |
| Ouvrir le chat | Ctrl + Alt + C | ⌘ + ⌥ + C |
| Partager l'écran | Ctrl + Alt + S | ⌘ + ⌥ + S |

## Appui prolongé

Maintenez la **barre d'espace** pour parler temporairement lorsque votre micro est coupé, puis relâchez.

:::tip
Les raccourcis sont désactivés lorsque le curseur se trouve dans un champ de saisie (chat, notes).
:::`,
        ),
      ],
    },
    {
      id: "salles",
      title: "Salles & participants",
      articles: [
        a(
          "gerer-une-salle",
          "Créer et gérer une salle",
          "Salles permanentes, salle d'attente, rôles et permissions des participants.",
          ["salle", "modération"],
          "updated",
          "10 août 2026",
          `# Créer et gérer une salle

## Créer une salle

Depuis le tableau de bord, **Nouvelle salle** → choisissez un type :

- **Ponctuelle** : le lien expire 24 h après la fin de la réunion.
- **Permanente** : lien stable, idéal pour les points hebdomadaires.

## Rôles

| Rôle | Peut couper les micros | Peut exclure | Peut enregistrer |
| --- | --- | --- | --- |
| Hôte | Oui | Oui | Oui |
| Co-hôte | Oui | Oui | Non |
| Participant | Non | Non | Non |

## Salle d'attente

Activez **Salle d'attente** dans les réglages de la salle pour approuver chaque arrivée.

:::warning
Sans salle d'attente, toute personne disposant du lien peut entrer. Réservez ce mode aux réunions publiques.
:::`,
        ),
        a(
          "partage-ecran",
          "Partager son écran et ses documents",
          "Partager une fenêtre, un onglet ou un document d'impression en haute définition.",
          ["partage", "présentation"],
          "stable",
          "05 août 2026",
          `# Partager son écran et ses documents

## Choisir la bonne source

- **Onglet du navigateur** : meilleure fluidité, partage audio inclus.
- **Fenêtre d'application** : montre une seule application, plus discret.
- **Écran entier** : à réserver aux démonstrations complètes.

## Partage haute définition

Pour présenter un BAT ou un fichier d'impression, activez **Qualité texte (HD)** dans le menu de partage : la fréquence d'image baisse, la netteté augmente.

:::tip
Fermez les notifications système avant un partage d'écran entier.
:::`,
        ),
      ],
    },
    {
      id: "depannage-meet",
      title: "Dépannage",
      articles: [
        a(
          "qualite-audio-video",
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
:::`,
        ),
      ],
    },
  ],
};

/* ------------------------------------------------------------- SPC ARCADE */

const spcArcade: DocSpace = {
  id: "spc-arcade",
  name: "SPC Arcade",
  shortName: "Arcade",
  tagline: "Espace gaming & réservations",
  description:
    "Réserver une session, comprendre les tarifs, respecter le règlement intérieur et organiser un tournoi à SPC Arcade, Porto-Novo.",
  groups: [
    {
      id: "reservation",
      title: "Réservation",
      articles: [
        a(
          "reserver-une-session",
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
:::`,
        ),
        a(
          "annuler-modifier",
          "Annuler ou modifier une réservation",
          "Fenêtres d'annulation, remboursement et report de créneau.",
          ["annulation", "remboursement"],
          "new",
          "13 août 2026",
          `# Annuler ou modifier une réservation

## Règles

| Délai avant le créneau | Modification | Remboursement |
| --- | --- | --- |
| > 24 h | Gratuite | 100 % |
| 6 – 24 h | Gratuite | 50 % |
| < 6 h | Non | Aucun |

## Comment faire

Ouvrez l'e-mail de confirmation → **Gérer ma réservation** → *Reporter* ou *Annuler*.

:::tip
Un report vaut mieux qu'une annulation : il conserve 100 % du montant sous forme d'avoir valable 60 jours.
:::`,
        ),
      ],
    },
    {
      id: "sur-place",
      title: "Sur place",
      articles: [
        a(
          "reglement-interieur",
          "Règlement intérieur",
          "Âge minimum, accompagnement des mineurs, matériel et comportement.",
          ["règlement", "sécurité"],
          "stable",
          "18 juillet 2026",
          `# Règlement intérieur

## Accès

- Accès libre dès **12 ans**.
- Moins de 12 ans : accompagnement d'un adulte obligatoire.
- Casque VR : **13 ans minimum** (recommandation constructeur).

## Matériel

Toute dégradation volontaire est facturée au prix de remplacement. Les manettes sont nettoyées entre chaque session.

:::danger
Nourriture et boissons sont interdites aux postes de jeu. Un espace détente est prévu à l'entrée.
:::`,
        ),
        a(
          "organiser-un-tournoi",
          "Organiser un tournoi",
          "Privatisation, formats de compétition et affichage des scores.",
          ["tournoi", "événement"],
          "beta",
          "13 août 2026",
          `# Organiser un tournoi

## Formules

| Formule | Postes | Durée | Participants |
| --- | --- | --- | --- |
| Mini-tournoi | 4 | 2 h | 8 |
| Tournoi standard | 8 | 4 h | 16 |
| Privatisation | Tous | Journée | 40+ |

## Déroulé

1. Demande via **arcade.stafprint.com → Événements** (7 jours d'avance minimum).
2. Validation du format (poules, élimination directe, double élimination).
3. Affichage temps réel des scores sur l'écran principal.
4. Remise des lots et impression des diplômes par l'atelier STAF.

:::note
Fonctionnalité en bêta : le bracket en ligne est encore en cours de finalisation.
:::`,
        ),
      ],
    },
  ],
};

/* --------------------------------------------------------- INSTRUCTOR HUB */

const instructorHub: DocSpace = {
  id: "instructor-hub",
  name: "Instructor Hub",
  shortName: "Instructor",
  tagline: "Espace des formateurs STAF",
  description:
    "Préparer, animer et évaluer vos sessions de formation : parcours, supports, présence, notation et suivi des apprenants.",
  groups: [
    {
      id: "sessions",
      title: "Sessions de formation",
      articles: [
        a(
          "preparer-une-session",
          "Préparer une session de formation",
          "Checklist matérielle et pédagogique avant le jour J.",
          ["formation", "checklist"],
          "stable",
          "06 août 2026",
          `# Préparer une session de formation

## J-7

- Publier le parcours et les prérequis dans l'Instructor Hub.
- Vérifier les inscriptions et la capacité de la salle.

## J-1

- Tester la salle SPC Meet (pour les sessions hybrides).
- Imprimer les supports via l'atelier (délai 24 h).

## Jour J

\`\`\`text~~checklist.txt
[ ] Feuille de présence ouverte
[ ] Enregistrement autorisé par les participants
[ ] Support partagé dans l'espace apprenant
[ ] Quiz de fin activé
\`\`\`

:::tip
Prévoyez une pause de 10 minutes toutes les 50 minutes : la rétention chute nettement au-delà.
:::`,
        ),
        a(
          "gerer-la-presence",
          "Gérer la présence et les émargements",
          "Émargement numérique, retards et justificatifs.",
          ["présence", "émargement"],
          "new",
          "14 août 2026",
          `# Gérer la présence et les émargements

## Émargement numérique

Ouvrez la session → **Présence** → un code à 4 chiffres s'affiche, valable 10 minutes. Chaque apprenant le saisit depuis le Student Hub.

## Statuts

| Statut | Conséquence |
| --- | --- |
| Présent | Comptabilisé dans l'attestation |
| Retard (< 15 min) | Présent, mention au dossier |
| Absent justifié | Rattrapage proposé |
| Absent | Module à repasser |

:::warning
Les feuilles d'émargement sont des pièces justificatives : ne modifiez jamais un statut après clôture sans note explicative.
:::`,
        ),
      ],
    },
    {
      id: "evaluation",
      title: "Évaluation",
      articles: [
        a(
          "creer-un-quiz",
          "Créer un quiz d'évaluation",
          "Types de questions, barème, tentative unique et correction automatique.",
          ["quiz", "évaluation"],
          "updated",
          "09 août 2026",
          `# Créer un quiz d'évaluation

## Types de questions

- Choix unique / choix multiple
- Vrai-Faux
- Réponse courte (correction manuelle)
- Association

## Barème

Le barème par défaut est 1 point par question. Activez **Pénalité** pour retirer 0,25 point par mauvaise réponse en QCM.

## Paramètres recommandés

\`\`\`text~~quiz.txt
Tentatives      : 1
Durée           : 20 min
Mélange         : questions + réponses
Correction      : affichée après clôture
Seuil de réussite : 60 %
\`\`\`

:::note
La correction automatique s'applique à tous les types sauf la réponse courte.
:::`,
        ),
        a(
          "attestations",
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
:::`,
        ),
      ],
    },
  ],
};

/* ----------------------------------------------------------- STUDENT HUB */

const studentHub: DocSpace = {
  id: "student-hub",
  name: "Student Hub",
  shortName: "Student",
  tagline: "Espace des apprenants",
  description:
    "S'inscrire à une formation, suivre ses cours, rendre ses devoirs et récupérer ses attestations depuis le Student Hub.",
  groups: [
    {
      id: "inscription",
      title: "Inscription",
      articles: [
        a(
          "sinscrire-a-une-formation",
          "S'inscrire à une formation",
          "Catalogue, prérequis, paiement et confirmation de place.",
          ["inscription", "formation"],
          "new",
          "14 août 2026",
          `# S'inscrire à une formation

## Étapes

1. Parcourez le catalogue depuis le Student Hub.
2. Vérifiez les **prérequis** affichés sur la fiche.
3. Cliquez sur **S'inscrire**, puis réglez (Mobile Money, carte, ou prise en charge employeur).
4. Recevez la confirmation et l'accès à l'espace de la session.

## Liste d'attente

Si la session est complète, rejoignez la liste d'attente : vous êtes notifié en cas de désistement, avec 24 h pour confirmer.

:::note
Une inscription est annulable gratuitement jusqu'à 7 jours avant le début du parcours.
:::`,
        ),
      ],
    },
    {
      id: "suivi",
      title: "Suivi des cours",
      articles: [
        a(
          "acceder-aux-supports",
          "Accéder aux supports de cours",
          "Téléchargement, mode hors-ligne et durée de disponibilité.",
          ["supports", "cours"],
          "stable",
          "30 juillet 2026",
          `# Accéder aux supports de cours

## Où les trouver

**Ma session → Supports**. Chaque module regroupe diapositives, fiches pratiques et exercices.

## Disponibilité

| Type | Disponibilité |
| --- | --- |
| Diapositives | 12 mois après la session |
| Enregistrements vidéo | 90 jours |
| Exercices corrigés | 12 mois |

## Hors-ligne

Utilisez le bouton **Enregistrer** de la documentation pour retrouver rapidement un article, même sans reconnexion au catalogue.

:::warning
Les supports sont réservés à un usage personnel : leur rediffusion est interdite.
:::`,
        ),
        a(
          "rendre-un-devoir",
          "Rendre un devoir",
          "Formats acceptés, dépôt, retard et retour du formateur.",
          ["devoir", "évaluation"],
          "new",
          "13 août 2026",
          `# Rendre un devoir

## Déposer

**Ma session → Devoirs → Déposer**. Formats acceptés : PDF, PNG, JPG, ZIP (50 Mo max).

## Retards

| Retard | Pénalité |
| --- | --- |
| < 24 h | -10 % |
| 24 – 72 h | -25 % |
| > 72 h | Non noté |

## Retour du formateur

La note et les commentaires apparaissent dans **Devoirs → Corrigés**, généralement sous 5 jours ouvrés.

:::tip
Nommez votre fichier \`NOM_Prenom_Module.pdf\` : les dépôts mal nommés retardent la correction.
:::`,
        ),
      ],
    },
  ],
};

export const docsRegistry: DocSpace[] = [
  siteVitrine,
  spcMeet,
  spcArcade,
  instructorHub,
  studentHub,
];

export function getSpace(id: string): DocSpace | undefined {
  return docsRegistry.find((s) => s.id === id);
}

export interface ResolvedArticle {
  space: DocSpace;
  groupTitle: string;
  article: DocArticle;
  prev?: { space: DocSpaceId; slug: string; title: string } | undefined;
  next?: { space: DocSpaceId; slug: string; title: string } | undefined;
}

export function spaceArticles(space: DocSpace): DocArticle[] {
  return space.groups.flatMap((g) => g.articles);
}

export function articleCount(space: DocSpace): number {
  return spaceArticles(space).length;
}

export function resolveArticle(spaceId: string, slug: string): ResolvedArticle | undefined {
  const space = getSpace(spaceId);
  if (!space) return undefined;
  const flat = spaceArticles(space);
  const index = flat.findIndex((art) => art.slug === slug);
  if (index === -1) return undefined;
  const article = flat[index]!;
  const group = space.groups.find((g) => g.articles.some((art) => art.slug === slug))!;
  const prevArticle = flat[index - 1];
  const nextArticle = flat[index + 1];
  return {
    space,
    groupTitle: group.title,
    article,
    prev: prevArticle
      ? { space: space.id, slug: prevArticle.slug, title: prevArticle.title }
      : undefined,
    next: nextArticle
      ? { space: space.id, slug: nextArticle.slug, title: nextArticle.title }
      : undefined,
  };
}

export function firstArticleParams(spaceId: DocSpaceId): { space: string; slug: string } {
  const space = getSpace(spaceId);
  return { space: spaceId, slug: space?.groups[0]?.articles[0]?.slug ?? "" };
}

export const allHits: SearchHit[] = docsRegistry.flatMap((space) =>
  space.groups.flatMap((group) =>
    group.articles.map((article) => ({
      spaceId: space.id,
      spaceName: space.name,
      groupTitle: group.title,
      article,
      score: 0,
    })),
  ),
);

export interface SpaceNavEntry {
  id: DocSpaceId;
  label: string;
  slug: string;
}

export const spaceNav: SpaceNavEntry[] = docsRegistry.flatMap((space) => {
  const slug = space.groups[0]?.articles[0]?.slug;
  return slug ? [{ id: space.id, label: space.name, slug }] : [];
});

export type { DocSpaceId };
