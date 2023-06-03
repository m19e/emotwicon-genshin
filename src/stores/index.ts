import { atom } from "jotai"
import { mockKirara } from "consts"
import type { StampProps } from "types/cms"

export const selectedStampAtom = atom<StampProps>(mockKirara)
