import { SITE } from "@/data/site";
import { createEmailLink } from "./email";

/**
 * Génère le message de demande d'assistance pour le support technique.
 */
export function buildSupportMessage(articleTitle?: string): string {
  const contextText = articleTitle
    ? `concernant l'article de documentation « ${articleTitle} »`
    : "au sujet de l'un de vos services";

  return `Bonjour l'équipe Support ${SITE.name},

Je vous contacte ${contextText} car j'ai besoin d'une assistance complémentaire.

Voici des précisions sur mon problème / ma question :
[Décrivez ici votre situation, l'erreur rencontrée ou votre besoin spécifique...]

Informations techniques utiles (optionnel) :
- Appareil / OS : 
- Navigateur : 

Merci d'avance pour votre accompagnement.`;
}

/**
 * Génère le lien mailto pré-rempli pour le support.
 */
export function createSupportEmailLink(articleTitle?: string): string {
  const subject = articleTitle
    ? `[Support] Assistance : ${articleTitle}`
    : `[Support] Demande d'assistance - ${SITE.name}`;

  const body = buildSupportMessage(articleTitle);
  return createEmailLink(SITE.email, subject, body);
}
