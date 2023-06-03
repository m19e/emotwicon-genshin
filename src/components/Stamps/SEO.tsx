import { DefaultSeo, NextSeo } from "next-seo"

import type { StampProps } from "types/cms"
import { Stamp } from "components/Stamps/Stamp"

type Props = {
  card: StampProps
}

export const Default = () => {
  return (
    <DefaultSeo
      title="#emotwicon_genshin | ツイッターで使える原神スタンプ"
      description="#emotwicon_genshin"
      openGraph={{
        type: "website",
        siteName: "#emotwicon_genshin",
        title: "#emotwicon_genshin",
        description: "#emotwicon_genshin",
        images: [
          {
            url: "https://images.microcms-assets.io/assets/ae99c1c3e09f47a4b1bd70a1968debf3/87c2b9da511a4db69fb7e0d170b299ed/1.png",
          },
        ],
      }}
      themeColor="#D9B1AD"
      twitter={{ cardType: "summary" }}
    />
  )
}

export const SEO = ({ card }: Props) => {
  const { text, character_id, imageProps } = card

  return (
    <>
      <NextSeo
        openGraph={{
          title: text || `:${character_id[0]}:`,
          images: [{ url: imageProps.src }],
        }}
      />
      {/* <Debug card={card} /> */}
    </>
  )
}

const Debug = ({ card }: Props) => {
  const target = process.env.NEXT_PUBLIC_TARGET_ENV ?? "dev"
  if (target === "prod") return null

  return (
    <>
      <p className="whitespace-pre-wrap">{JSON.stringify(card, null, 2)}</p>
      <Stamp stamp={card} />
    </>
  )
}
