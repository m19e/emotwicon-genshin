import { useAtom } from "jotai"

import { selectedStampAtom } from "stores"

export const useSelectedStamp = () => useAtom(selectedStampAtom)
