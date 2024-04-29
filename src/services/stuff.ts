export type TStuff = Array<any>

import { useStorage } from "@vueuse/core";

export const stuffs = useStorage<TStuff>("stuffs-data", []);