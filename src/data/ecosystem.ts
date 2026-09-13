import type { DocSpaceMeta } from "@/types/docs";

export type EcosystemSiteCategory = "principal" | "outil" | "formation" | "communication" | "divertissement";
export type EcosystemSiteStatus = "available" | "building";

export interface APIEcosystemSite {
  id: string;
  docSpaceId?: string;
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

export const LOCAL_DOC_SPACE_IDS = [
  "landing", "shortener", "instructor", "student",
  "meet", "arcade", "ai", "brief", "toolkit",
] as const;

export type LocalDocSpaceId = (typeof LOCAL_DOC_SPACE_IDS)[number];

export const LOGO_KEY_TO_SPACE_ID: Record<string, LocalDocSpaceId | undefined> = {
  mc: "landing",
  shortener: "shortener",
  instructor: "instructor",
  student: "student",
  meet: "meet",
  arcade: "arcade",
  ai: "ai",
  brief: "brief",
  toolkit: "toolkit",
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

const docSpaceMetaOverrides = new Map<string, Partial<DocSpaceMeta>>();

export function hydrateDocSpaceMetaOverrides(sites: APIEcosystemSite[]): void {
  docSpaceMetaOverrides.clear();

  for (const site of sites) {
    const localSpaceId = resolveLocalDocSpaceId(site.logoKey);
    if (!localSpaceId) continue;

    docSpaceMetaOverrides.set(localSpaceId, {
      id: localSpaceId,
      name: site.name,
      description: site.description,
      url: site.url,
      status: site.status,
    });
  }
}

export function getDocSpaceMeta<T extends DocSpaceMeta>(spaceId: string, fallback: T): T {
  const override = docSpaceMetaOverrides.get(spaceId);
  if (!override) return fallback;
  return { ...fallback, ...override } as T;
}
