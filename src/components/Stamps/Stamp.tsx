import { useSelectedStamp } from "hooks"
import type { StampProps } from "types/cms"

import { BlurImage } from "./BlurImage"

type Props = {
  stamp: StampProps
}

export const Stamp = ({ stamp }: Props) => {
  const [, selectStamp] = useSelectedStamp()
  const { imageProps, alt } = stamp

  return (
    <label
      htmlFor="modal"
      className="p-1 w-44 max-w-full h-44 max-h-full bg-[#ece5d8] hover:bg-white rounded shadow transition-all hover:scale-110"
      onClick={() => selectStamp(stamp)}
    >
      <div className="flex justify-center items-center p-1 w-full h-full border-2 border-[#e0d2b6]">
        <BlurImage imageProps={imageProps} alt={alt} />
      </div>
    </label>
  )
}
