import { useFavorites } from "hooks"
import type { StampProps } from "types/cms"

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

const Header = () => {
  const fav = useFavorites()
  const { toggleMode, disabled, favoriteMode } = fav

  return (
    <header className="px-4 mt-1.5 w-full sm:px-8 sm:mt-3 sm:h-16 lg:max-w-screen-lg navbar">
      <div className="md:navbar-start"></div>
      <h1 className="p-2 text-2xl font-black text-[#637340] rounded sm:text-4xl bg-[#EEF2D0]/75 font-latego navbar-center">
        #emotwicon_genshin
      </h1>
      <div className="navbar-end">
        <button
          className="flex gap-1 items-center p-2 bg-[#EEF2D0] shadow disabled:cursor-not-allowed rounded-box"
          onClick={() => toggleMode()}
          disabled={disabled}
        >
          <input
            type="checkbox"
            className="checked:bg-[#d9b1ad] checked:border-[#d9b1ad] toggle"
            checked={favoriteMode}
            disabled={disabled}
          />
          <label
            className={
              "swap swap-flip cursor-auto " +
              (favoriteMode ? "swap-active" : "")
            }
          >
            <div className="swap-on">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 fill-[#d9b1ad] stroke-[#d9b1ad]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="swap-off">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 stroke-[#d9b1ad]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </label>
        </button>
      </div>
    </header>
  )
}
