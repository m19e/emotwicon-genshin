import type { DynamicImage } from "types/image"

type ImageData = {
  url: string
  width: number
  height: number
}

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

export type StampProps = {
  id: string
  version_id: string
  character_id: string[]
  text: string
} & DynamicImage
