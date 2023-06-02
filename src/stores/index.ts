import { atom } from "jotai"
import type { StampProps } from "types/cms"

export const selectedStampAtom = atom<StampProps | null>(null)
