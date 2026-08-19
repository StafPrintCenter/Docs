import { defineArticle } from "@/content/docs/define";

export const article = defineArticle("consulter-une-formation",
  "Consulter les détails d'une formation",
  "Informations clés, prérequis, tarifs et suivi du statut d'ouverture des sessions.",
  ["formation", "indesign", "apprentissage"],
  "new",
  "19 août 2026",
  `# Consulter une fiche de formation

## Informations clés affichées

Avant toute démarche, la fiche détaillée présente l'ensemble des modalités du programme :
* **Informations générales :** Niveau requis (ex: *Intermédiaire*), durée totale (*28h sur 4 semaines*), horaires (*2 séances de 3h30/semaine en soirée*) et lieu (*Porto-Novo, Bénin*).
* **Planning & Délais :** Période de formation, date limite de préinscription et nombre de places restantes (*ex: 15 places*).
* **Tarification :** Le coût de la formation ainsi que les **frais d'inscription** (ex: *2 000 FCFA*).
* **Programme & Objectifs :** Découpage pédagogique par modules (Bases, Production, Export/Impression) et compétences visées.
* **Certification :** Une attestation STAF PRINT CENTER est remise sous condition d'atteindre au moins **80% d'assiduité**.

## Statut des inscriptions

L'accès au bouton d'action dépend de l'état de la session :
* **Ouvertes :** Permet d'accéder au parcours de préinscription.
* **Inscriptions closes :** Indique que la date limite est dépassée ou que la session est complète. Vous pouvez toutefois contacter l'équipe via WhatsApp ou Email pour connaître les prochaines dates.

:::note
Vérifiez toujours les prérequis recommandés (logiciels ou notions de base) avant de valider votre choix.
:::`,);

export default article;