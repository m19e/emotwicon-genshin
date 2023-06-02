import type { StampProps } from "types/cms"

import { Modal } from "./Modal"
import { Stamp } from "./Stamp"

type Props = {
  stamps: StampProps[]
}

export const Stamps = ({ stamps }: Props) => {
  const items = stamps.map((s) => <Stamp key={s.id} stamp={s} />)

  return (
    <>
      <div className="flex flex-col items-center space-y-3 min-h-screen bg-kirara">
        <header className="flex justify-center items-center mt-3 w-full h-16">
          <h1 className="p-2 text-2xl font-black text-[#637340] rounded sm:text-4xl bg-[#EEF2D0]/75 font-latego">
            #emotwicon_genshin
          </h1>
        </header>
        <main className="flex flex-col flex-1 items-center p-4 rounded-md bg-[#637340]/25">
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
