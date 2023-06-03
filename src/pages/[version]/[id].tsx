import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"

import { getAllStampProps } from "utils"
import type { VersionContent } from "types/cms"
import { Client } from "utils/client"
import { Stamps } from "components/Stamps"
import { Stamp } from "components/Stamps/Stamp"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ stamps, card }) => {
  return (
    <>
      <p className="whitespace-pre-wrap">{JSON.stringify(card, null, 2)}</p>
      <Stamp stamp={card} />
      <Stamps stamps={stamps} />
    </>
  )
}

const getPath = (version: VersionContent) =>
  version.stamps.map((_, index) => ({
    params: { version: version.id, id: "" + index },
  }))

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await Client.getList<VersionContent>({
    endpoint: "versions",
    queries: { limit: 50 },
  })
  const paths = contents.map(getPath).flat()

  return { paths, fallback: "blocking" }
}

const toString = (id: string | string[] | undefined) => {
  return Array.isArray(id) ? id[0] : id
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const version = params?.version && toString(params.version)
  const id = params?.id && toString(params.id)
  if (!version) {
    throw new Error("[ Error ] VERSION not found")
  }
  if (!id) {
    throw new Error("[ Error ] ID not found")
  }

  const stamps = await getAllStampProps()
  const card = stamps.find((s) => s.id === `${version}/${id}`)
  if (!card) {
    throw new Error("[ Error ] STAMP not found")
  }

  return { props: { stamps, card } }
}

export default Page
