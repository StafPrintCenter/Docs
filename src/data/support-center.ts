export interface SupportArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content: string;
}

export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: "account" | "billing" | "orders" | "privacy" | "technical" | "contact";
}

export const supportCategories: SupportCategory[] = [
  {
    id: "compte",
    title: "Compte et connexion",
    description: "Créer un compte, se connecter, mot de passe oublié, sécurité.",
    icon: "account",
  },
  {
    id: "paiement",
    title: "Paiement et facturation",
    description: "Moyens de paiement, factures, remboursements et avoirs.",
    icon: "billing",
  },
  {
    id: "commandes",
    title: "Commandes et livraison",
    description: "Suivi, retrait à l'atelier, retards et réclamations.",
    icon: "orders",
  },
  {
    id: "confidentialite",
    title: "Confidentialité et données",
    description: "Données collectées, stockage local, suppression de compte.",
    icon: "privacy",
  },
  {
    id: "technique",
    title: "Problèmes techniques",
    description: "Bugs, navigateurs supportés, envoi de fichiers volumineux.",
    icon: "technical",
  },
  {
    id: "contact",
    title: "Nous contacter",
    description: "Horaires, canaux et délais de réponse de l'équipe support.",
    icon: "contact",
  },
];

const art = (
  slug: string,
  title: string,
  description: string,
  category: string,
  readTime: string,
  content: string,
): SupportArticle => ({ slug, title, description, category, readTime, content });

export const supportArticles: SupportArticle[] = [
  art(
    "mot-de-passe-oublie",
    "Mot de passe oublié ou compte bloqué",
    "Réinitialiser votre mot de passe et débloquer un compte après plusieurs tentatives.",
    "compte",
    "2 min",
    `# Mot de passe oublié ou compte bloqué

## Réinitialiser votre mot de passe

1. Sur l'écran de connexion, cliquez sur **Mot de passe oublié**.
2. Saisissez l'e-mail de votre compte.
3. Ouvrez le lien reçu (valable 30 minutes).
4. Choisissez un nouveau mot de passe d'au moins 10 caractères.

## Compte temporairement bloqué

Après 5 tentatives échouées, l'accès est suspendu **15 minutes**. Attendez, puis réessayez avec le lien de réinitialisation.

:::tip
Vous ne recevez rien ? Vérifiez les spams et confirmez que l'adresse saisie est bien celle du compte.
:::`,
  ),
  art(
    "securiser-son-compte",
    "Sécuriser son compte",
    "Bonnes pratiques et double authentification.",
    "compte",
    "3 min",
    `# Sécuriser son compte

## Double authentification

**Mon compte → Sécurité → Activer la 2FA**. Vous pouvez utiliser une application d'authentification ou un code SMS.

## Sessions actives

La liste des appareils connectés est visible dans **Sécurité → Sessions**. Déconnectez tout appareil inconnu.

:::warning
L'équipe STAF ne vous demandera jamais votre mot de passe ni un code 2FA, par téléphone ou WhatsApp.
:::`,
  ),
  art(
    "moyens-de-paiement",
    "Moyens de paiement acceptés",
    "Mobile Money, carte bancaire, virement et paiement à l'atelier.",
    "paiement",
    "2 min",
    `# Moyens de paiement acceptés

| Moyen | Disponible | Délai d'encaissement |
| --- | --- | --- |
| Mobile Money (MTN, Moov) | Oui | Immédiat |
| Carte bancaire | Oui | Immédiat |
| Virement bancaire | Oui | 1 à 3 jours ouvrés |
| Espèces à l'atelier | Oui | Immédiat |

:::note
Pour les commandes supérieures à 500 000 F CFA, un acompte de 50 % est demandé avant lancement en production.
:::`,
  ),
  art(
    "demander-un-remboursement",
    "Demander un remboursement",
    "Conditions, pièces à fournir et délais de traitement.",
    "paiement",
    "3 min",
    `# Demander un remboursement

## Cas éligibles

- Commande annulée avant lancement en production.
- Produit non conforme au BAT validé.
- Retard de livraison supérieur à 5 jours ouvrés de notre fait.

## Procédure

1. Ouvrez une réclamation depuis **Mes commandes → Signaler un problème**.
2. Joignez des photos si le produit est non conforme.
3. Réponse sous 48 h ouvrées, remboursement sous 7 jours ouvrés.

:::warning
Une erreur présente dans le fichier fourni et validée au BAT n'ouvre pas droit à remboursement.
:::`,
  ),
  art(
    "suivre-ou-recuperer-sa-commande",
    "Suivre ou récupérer sa commande",
    "Suivi en ligne, retrait à Porto-Novo et livraison.",
    "commandes",
    "2 min",
    `# Suivre ou récupérer sa commande

## Suivi

Numéro **CMD-XXXXXX** → page de suivi publique, ou **Mon compte → Commandes**.

## Retrait à l'atelier

Porto-Novo, du lundi au samedi, 8 h – 18 h. Présentez le numéro de commande et une pièce d'identité.

## Livraison

| Zone | Délai | Frais |
| --- | --- | --- |
| Porto-Novo | 24 h | 1 000 F |
| Cotonou | 48 h | 2 500 F |
| Autres villes | 3 à 5 jours | Sur devis |`,
  ),
  art(
    "commande-en-retard",
    "Ma commande est en retard",
    "Que faire lorsqu'une commande dépasse la date annoncée.",
    "commandes",
    "2 min",
    `# Ma commande est en retard

## Vérifier l'état

Un dossier bloqué en **Prépresse** attend souvent une validation de BAT de votre part : consultez vos e-mails.

## Ouvrir une réclamation

**Mes commandes → Signaler un problème → Retard**. Un conseiller répond sous 24 h ouvrées.

:::tip
Les commandes grand format déposées après 16 h démarrent en production le jour ouvré suivant.
:::`,
  ),
  art(
    "donnees-personnelles",
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

Accès, rectification, suppression : écrivez à **support@stafprint.com**.`,
  ),
  art(
    "navigateurs-supportes",
    "Navigateurs et prérequis techniques",
    "Versions supportées et réglages nécessaires.",
    "technique",
    "2 min",
    `# Navigateurs et prérequis techniques

| Navigateur | Version minimale |
| --- | --- |
| Chrome / Edge | 114 |
| Firefox | 115 |
| Safari | 16.4 |

## Réglages requis

- JavaScript activé.
- Cookies du domaine autorisés.
- Micro et caméra autorisés pour SPC Meet.

:::warning
Les navigateurs intégrés aux applications (Facebook, Instagram) ne supportent pas la visioconférence. Ouvrez le lien dans Chrome ou Safari.
:::`,
  ),
  art(
    "envoyer-fichiers-volumineux",
    "Envoyer des fichiers volumineux",
    "Dépasser la limite de 200 Mo sans perdre en qualité.",
    "technique",
    "2 min",
    `# Envoyer des fichiers volumineux

## Limite

200 Mo par fichier sur le formulaire de devis.

## Solutions

1. Exportez en **PDF/X-4** avec compression ZIP : souvent 3 à 5 fois plus léger, sans perte.
2. Découpez un projet multipage en plusieurs PDF.
3. Au-delà, demandez un lien de dépôt sécurisé à **support@stafprint.com**.

:::danger
N'envoyez pas de fichiers via des liens de partage temporaires expirant en 7 jours : la production peut démarrer plus tard.
:::`,
  ),
  art(
    "contacter-le-support",
    "Contacter le support STAF",
    "Canaux disponibles, horaires et délais de réponse.",
    "contact",
    "1 min",
    `# Contacter le support STAF

## Canaux

| Canal | Coordonnées | Délai |
| --- | --- | --- |
| E-mail | support@stafprint.com | 24 h ouvrées |
| WhatsApp | +229 (atelier Porto-Novo) | 2 h ouvrées |
| Sur place | Porto-Novo, lun–sam 8 h–18 h | Immédiat |

## Pour aller plus vite

Indiquez systématiquement votre numéro **CMD-** ou **DVS-**, ainsi qu'une capture d'écran si le problème est technique.`,
  ),
];

export function getSupportArticle(slug: string): SupportArticle | undefined {
  return supportArticles.find((a) => a.slug === slug);
}

export function articlesByCategory(categoryId: string): SupportArticle[] {
  return supportArticles.filter((a) => a.category === categoryId);
}

export const popularSupportArticles = [
  "suivre-ou-recuperer-sa-commande",
  "mot-de-passe-oublie",
  "moyens-de-paiement",
  "donnees-personnelles",
]
  .map((slug) => getSupportArticle(slug))
  .filter((a): a is SupportArticle => Boolean(a));
