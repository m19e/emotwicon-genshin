import type { NextPage, InferGetStaticPropsType } from "next"

import { getDynamicImage } from "utils"
import type { StampProps, VersionContent } from "types/cms"
import type { DynamicImage } from "types/image"
import { Client } from "utils/client"

import { Stamps } from "components/Stamps"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = (props) => {
  return <Stamps {...props} />
}

export const getStaticProps = async () => {
  const { contents } = await Client.getList<VersionContent>({
    endpoint: "versions",
    queries: { limit: 50 },
  })

  const allStamps = contents.map((v) => v.stamps).flat()

  const images: DynamicImage[] = await Promise.all(
    allStamps.map(getDynamicImage)
  )

  const stamps: StampProps[] = allStamps.map(({ character_id, text }, i) => ({
    id: `${character_id[0]}-${i}`,
    character_id,
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
