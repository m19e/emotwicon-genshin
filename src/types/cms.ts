import type { DynamicImage } from "types/image"

type ImageData = {
  url: string
  width: number
  height: number
}

export type ImageContent = {
  image: ImageData
  alt: string
}

export type StampContent = {
  id: string
  character_id: string[]
  text: string
  data: ImageContent
}

export type StampProps = Omit<StampContent, "data"> & DynamicImage

export type VersionStampContent = {
  character_id: string[]
  text: string
  image: ImageData
}

export type VersionContent = {
  id: string
  version: string
  stamps: VersionStampContent[]
}
