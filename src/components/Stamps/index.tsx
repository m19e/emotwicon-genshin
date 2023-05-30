import type { StampProps } from "types/cms"

import { BlurImage } from "./BlurImage"

type Props = {
  stamps: StampProps[]
}

export const Stamps = ({ stamps }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-3 min-h-screen bg-kirara">
      <header className="flex justify-center items-center mt-3 w-full h-16">
        <h1 className="p-2 text-2xl font-black text-[#637340] rounded sm:text-4xl bg-[#EEF2D0]/75 font-latego">
          #emotwicon_genshin
        </h1>
      </header>
      <main className="flex flex-col flex-1 items-center p-4 bg-[#637340]/50 rounded-box">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {stamps.map((stamp) => (
            <div
              key={stamp.id}
              className="p-1 w-44 max-w-full h-44 max-h-full bg-[#ece5d8] hover:bg-white rounded shadow transition-all hover:scale-110"
            >
              <div className="flex justify-center items-center p-1 w-full h-full border-2 border-[#e0d2b6]">
                <BlurImage {...stamp} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex justify-center items-center w-full h-16 bg-[#637340] sm:h-24"></footer>
    </div>
  )
}
