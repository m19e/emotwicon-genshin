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
  const items = (
    favoriteMode ? stamps.filter((s) => favorites.includes(s.id)) : stamps
  ).map((s) => <Stamp key={s.id} stamp={s} />)

  return (
    <>
      <div className="flex flex-col items-center space-y-1.5 min-h-screen sm:space-y-3 bg-kirara">
        <Header />
        <main className="flex flex-col flex-1 items-center p-4 min-w-full rounded-none lg:min-w-min lg:rounded-md bg-[#637340]/25">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items}
          </div>
        </main>
        <footer className="flex justify-center items-center w-full h-16 bg-[#637340] sm:h-24"></footer>
      </div>
      <Modal />
    </>
  )
}
