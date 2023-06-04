import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { mockKirara } from "consts"
import type { StampProps } from "types/cms"

export const selectedStampAtom = atom<StampProps>(mockKirara)

export const favoriteModeAtom = atom(false)
export const favoritesAtom = atomWithStorage<string[]>("favorites", [])
