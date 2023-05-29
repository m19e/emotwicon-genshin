import type { DynamicImage } from "types/image"

export type ImageContent = {
  image: {
    url: string
    width: number
    height: number
  }
  alt: string
}

export type StampContent = {
  id: string
  text: string
  data: ImageContent
}

export type StampProps = Omit<StampContent, "data"> & DynamicImage
