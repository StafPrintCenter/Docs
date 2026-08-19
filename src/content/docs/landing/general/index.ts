import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./s-inscrire-a-la-newsletter";
import { article as a1 } from "./signaler-un-probleme";
import { article as a3 } from "./prendre-un-rendez-vous";

export const group: DocGroup = {
  id: "general",
  title: "Général",
  articles: [a0, a1, a3],
};

export default group;
