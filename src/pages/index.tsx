import type { NextPage, InferGetStaticPropsType } from "next"

import { getDynamicImage } from "utils"
import type { StampContent, StampProps } from "types/cms"
import type { DynamicImage } from "types/image"
import { Client } from "utils/client"

import { Stamps } from "components/Stamps"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = (props) => {
  return <Stamps {...props} />
}

export const getStaticProps = async () => {
  const { contents } = await Client.getList<StampContent>({
    endpoint: "stamps",
    queries: { limit: 50 },
  })

  const images: DynamicImage[] = await Promise.all(
    contents.map(getDynamicImage)
  )

  const stamps: StampProps[] = contents.map(({ id, text }, i) => ({
    id,
    text: text || "",
    ...images[i],
  }))

  return {
    props: {
      stamps,
    },
  }
}

export default Page
