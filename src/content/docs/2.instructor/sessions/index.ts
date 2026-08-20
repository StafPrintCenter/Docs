import type { DocGroup } from "@/types/docs";
import { article as a0 } from "./preparer-une-session";
import { article as a1 } from "./gerer-la-presence";

export const group: DocGroup = {
  id: "sessions",
  title: "Sessions de formation",
  articles: [a0, a1],
};

export default group;
