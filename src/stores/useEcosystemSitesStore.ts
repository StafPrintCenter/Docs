import { useEffect } from "react";
import { createResourceStore } from "./createResourceStore";
import { hydrateDocSpaceMetaOverrides, type APIEcosystemSite } from "@/data/ecosystem";
import { applyDocSpaceApiData } from "@/data/content/docs";

const { fetchList, fetchById, useResourceStore } = createResourceStore<APIEcosystemSite>({
  resourceKey: "ecosystem-sites",
  listEndpoint: "ecosystem-sites/list",
  detailEndpoint: "ecosystem-sites",
});

export const fetchPublicEcosystemSites = fetchList;
export const fetchEcosystemSiteById = fetchById;

export function useEcosystemSitesStore(params: Parameters<typeof useResourceStore>[0] = {}) {
  const { data, ...rest } = useResourceStore(params);

  useEffect(() => {
    hydrateDocSpaceMetaOverrides(data);
    applyDocSpaceApiData(data);
  }, [data]);

  return { sites: data, ...rest };
}