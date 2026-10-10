import type { DocSpaceMeta } from "@/types/docs";
import { SITE_LINK } from "@/data/site";
import { getDocSpaceMeta } from "@/data/ecosystem";

const fallback: DocSpaceMeta = {
  id: "studio",
  name: "SPC 3D Studio",
  shortName: "3D Studio",
  tagline: "Visualisation 3D, réalité augmentée & B.A.T. interactif",
  description: "Mise en situation 3D temps réel pour PLV, grand format et signalétique avec export B.A.T. et AR.",
  url: SITE_LINK.studioUrl,
  status: "available",
};

export const space: DocSpaceMeta = getDocSpaceMeta("studio", fallback);

export default space;
