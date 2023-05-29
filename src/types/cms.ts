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
