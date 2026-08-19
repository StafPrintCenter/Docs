import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./consulter-une-formation";
import { article as a1 } from "./s-inscrire-a-une-formation";

export const group: DocGroup = {
  id: "trainings",
  title: "Formations",
  articles: [a0, a1],
};

export default group;
