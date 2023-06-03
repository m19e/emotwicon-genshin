import { getPlaiceholder } from "plaiceholder"

import type { StampProps, VersionContent, VersionStampContent } from "types/cms"
import type { DynamicImage } from "types/image"
import { Client } from "utils/client"

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

const getStampProps = async (
  vs: VersionStampContent,
  data: {
    version_id: string
    index: number
  }
) => {
  const dynamic = await getDynamicImage(vs)
  const { character_id, text } = vs
  const { version_id, index } = data

  return {
    id: `${version_id}/${index}`,
    version_id,
    character_id,
    text: text || "",
    ...dynamic,
  } as StampProps
}

const getVersionData = async (vc: VersionContent) => {
  const stamps = await Promise.all(
    vc.stamps.map((s, index) => getStampProps(s, { version_id: vc.id, index }))
  )

  return { ...vc, stamps }
}

export const getAllStampProps = async () => {
  const { contents } = await Client.getList<VersionContent>({
    endpoint: "versions",
    queries: { limit: 50 },
  })

  const versions = await Promise.all(contents.map(getVersionData))
  const stamps = versions.map((v) => v.stamps).flat()

  return stamps
}
