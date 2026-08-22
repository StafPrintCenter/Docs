import { SITE } from "@/data/site";
import { createEmailLink } from "./email";

/**
 * Génère le message de demande d'assistance pour le support technique.
 */
export function buildQuoteMessage(serviceTitle: string): string {
  return `Bonjour l'équipe ${SITE.name},

Je souhaite obtenir un devis personnalisé ainsi que les délais d'exécution concernant votre service de « ${serviceTitle} ».

Voici quelques détails préliminaires concernant mon projet actuel :
[Décrivez ici votre support, dimensions, quantité ou vos objectifs généraux...]

Pourriez-vous me recontacter pour échanger sur les délais, le tarif et les modalités de réalisation ?
Merci d'avance pour votre retour`;
}
