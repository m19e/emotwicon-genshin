import { getPlaiceholder } from "plaiceholder"

import type { StampContent } from "types/cms"
import type { DynamicImage } from "types/image"

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

export const getDynamicImage = async (stamp: StampContent) => {
  const { image, alt } = stamp.data
  const { base64, img } = await getImage(image.url)

  return {
    imageProps: { ...img, blurDataURL: base64 },
    alt,
  } as DynamicImage
}
