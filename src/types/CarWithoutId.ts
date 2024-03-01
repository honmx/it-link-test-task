import { ICar } from "./ICar";

export type CarWithoutId = Omit<ICar, "id">;