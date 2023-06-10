import Image from "next/image"
import { commonBlurDataURL } from "consts"
import type { DynamicImage } from "types/image"

export const BlurImage = ({ imageProps, alt }: DynamicImage) => {
  return (
    <Image
      {...imageProps}
      alt={alt}
      blurDataURL={commonBlurDataURL}
      placeholder="blur"
    />
  )
}
