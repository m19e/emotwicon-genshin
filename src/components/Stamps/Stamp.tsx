import type { StampProps } from "types/cms"

import { BlurImage } from "./BlurImage"

type Props = {
  stamp: StampProps
}

export const Stamp = ({ stamp }: Props) => {
  return (
    <div className="p-1 w-44 max-w-full h-44 max-h-full bg-[#ece5d8] hover:bg-white rounded shadow transition-all hover:scale-110">
      <div className="flex justify-center items-center p-1 w-full h-full border-2 border-[#e0d2b6]">
        <BlurImage {...stamp} />
      </div>
    </div>
  )
}
