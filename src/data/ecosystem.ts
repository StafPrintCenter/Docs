export type EcosystemSiteCategory = "principal" | "outil" | "formation" | "communication" | "divertissement";
export type EcosystemSiteStatus = "available" | "building";

export interface APIEcosystemSite {
  id: string;
  name: string;
  description: string;
  url: string;
  logoKey: string;
  logoBaseUrl: string;
  logoUrl: string;
  logoVariants: {
    mc: string;
    mw: string;
    dc: string;
    dw: string;
  };
  category: EcosystemSiteCategory;
  status: EcosystemSiteStatus;
  createdAt: string;
  updatedAt: string;
}

export const ECOSYSTEM_CATEGORIES: EcosystemSiteCategory[] = [
  "principal",
  "outil",
  "formation",
  "communication",
  "divertissement",
];

export const ECOSYSTEM_CATEGORY_LABELS: Record<EcosystemSiteCategory, string> = {
  principal: "Site principal",
  outil: "Outils",
  formation: "Formation",
  communication: "Communication",
  divertissement: "Divertissement",
};

export const ECOSYSTEM_STATUS_LABELS: Record<EcosystemSiteStatus | "Tout", string> = {
  Tout: "Tous les statuts",
  available: "Disponible",
  building: "Bientôt",
};

export const LOCAL_DOC_SPACE_IDS = ["landing", "shortener", "instructor", "student", "meet", "arcade"] as const;
export type LocalDocSpaceId = (typeof LOCAL_DOC_SPACE_IDS)[number];

export const LOGO_KEY_TO_SPACE_ID: Record<string, LocalDocSpaceId | undefined> = {
  mc: "landing",
  shortener: "shortener",
  instructor: "instructor",
  student: "student",
  meet: "meet",
  arcade: "arcade",
};

export function resolveLocalDocSpaceId(logoKey: string | undefined): LocalDocSpaceId | undefined {
  if (!logoKey) return undefined;
  return LOGO_KEY_TO_SPACE_ID[logoKey];
}

export function isOfficialDocsSite(site: Pick<APIEcosystemSite, "logoKey">): boolean {
  return site.logoKey === "docs";
}

export function filterPublicEcosystemSites(sites: APIEcosystemSite[]): APIEcosystemSite[] {
  return sites.filter((site) => !isOfficialDocsSite(site));
}

export function isLocalDocSpace(site: Pick<APIEcosystemSite, "logoKey">): boolean {
  return Boolean(resolveLocalDocSpaceId(site.logoKey));
}
