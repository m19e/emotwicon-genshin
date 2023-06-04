import NextImage from "next/image"
import type { ImageProps } from "next/image"
import { useMemo } from "react"

import { useFavorites } from "hooks"
import type { StampProps } from "types/cms"

import { Header } from "./Header"
import { Modal } from "./Modal"
import { Stamp } from "./Stamp"

type Props = {
  stamps: StampProps[]
}

export const Stamps = ({ stamps }: Props) => {
  const { favorites, favoriteMode } = useFavorites()
  const items = useMemo(
    () =>
      (favoriteMode
        ? stamps.filter((s) => favorites.includes(s.id))
        : stamps
      ).map((s) => <Stamp key={s.id} stamp={s} />),
    [favoriteMode, favorites, stamps]
  )
  return (
    <>
      <div className="flex flex-col items-center space-y-1.5 min-h-screen sm:space-y-3 bg-kirara">
        <Header />
        <main className="flex flex-col flex-1 items-center p-4 min-w-full rounded-none lg:min-w-min lg:rounded-md bg-[#637340]/25">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items}
          </div>
        </main>
        <div className="flex justify-center w-full bg-[#637340]">
          <footer className="flex gap-4 items-center p-4 w-full text-[#EEF2D0] sm:p-8 sm:h-24 lg:max-w-screen-lg min-h-16 font-latego">
            <div className="flex justify-start">
              <div className="flex flex-col items-center">
                <a
                  className="flex flex-col items-center text-sm"
                  href="https://twitter.com/Versas_me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-16 h-16"
                    src="https://images.microcms-assets.io/assets/ae99c1c3e09f47a4b1bd70a1968debf3/0e887563b401404bbbb99300c11b0287/2.png"
                    alt=""
                    layout="fill"
                  />
                  <p>
                    by
                    <span className="text-[#d9b1ad]"> m19e</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-1 justify-end text-xs">
              <div>
                <p>Copyright© COGNOSPHERE PTE.LTD. ALL RIGHTS RESERVED</p>
                <p className="max-w-[29rem]">
                  当サイト上で使用している画像データの著作権および商標権、その他知的財産権は、当該コンテンツの提供元に帰属します。
                  <a
                    className="link"
                    href="https://genshin.hoyoverse.com/ja/news/detail/104581"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    公式スタンプ利用規約
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <Modal />
    </>
  )
}

const Image = ({ className, ...imageProps }: ImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage {...imageProps} layout="fill" objectFit="contain" />
    </div>
  )
}
