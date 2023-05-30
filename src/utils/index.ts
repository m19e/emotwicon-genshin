import { getPlaiceholder } from "plaiceholder"

import type { VersionStampContent } from "types/cms"
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

export const getDynamicImage = async (stamp: VersionStampContent) => {
  const { image, character_id } = stamp
  const { base64, img } = await getImage(image.url)

  return {
    imageProps: { ...img, blurDataURL: base64 },
    alt: character_id[0],
  } as DynamicImage
}
