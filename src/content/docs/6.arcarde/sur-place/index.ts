import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./reglement-interieur";
import { article as a1 } from "./organiser-un-tournoi";

export const group: DocGroup = {
  id: "sur-place",
  title: "Sur place",
  articles: [a0, a1],
};

export default group;
