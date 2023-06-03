import type { NextPage, InferGetStaticPropsType } from "next"

import { getAllStampProps } from "utils"

import { Stamps } from "components/Stamps"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = (props) => {
  return <Stamps {...props} />
}

export const getStaticProps = async () => {
  const stamps = await getAllStampProps()

  return {
    props: {
      stamps,
    },
  }
}

export default Page
