import type { FC } from "react"

import { useSelectedStamp } from "hooks"

import { BlurImage } from "./BlurImage"

export const Modal = () => {
  const [selectedStamp] = useSelectedStamp()
  const { text, imageProps, alt } = selectedStamp

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal">
        <label className="flex flex-col items-center bg-slate-700 modal-box font-latego">
          {text && (
            <>
              <div className="text-xl text-[#EEF2D0]">{text}</div>
              <div className="my-2 divider before:bg-[#EEF2D0]/25 after:bg-[#EEF2D0]/25"></div>
            </>
          )}

          <BlurImage imageProps={imageProps} alt={alt} />

          <div className="my-2 divider before:bg-[#EEF2D0]/25 after:bg-[#EEF2D0]/25"></div>
          <div className="flex flex-col gap-2 items-stretch w-64">
            <Favorite />
            <Copy />
            <Tweet id={selectedStamp.id} />
          </div>
        </label>
      </label>
    </>
  )
}

// TODO: Implement modal menu

const Favorite = () => {
  return (
    <StampButton label="お気に入り">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-5 h-5 stroke-[#d9b1ad]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </StampButton>
  )
}

const getShareURL = (id: string) =>
  "https://twitter.com/intent/tweet?text=" +
  encodeURIComponent(
    "#emotwicon_genshin " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + id
  )

const Copy = () => {
  return (
    <StampButton label="コピー">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#ece5d8]">
        <path d="M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z" />
      </svg>
    </StampButton>
  )
}

const Tweet = ({ id }: { id: string }) => {
  return (
    <StampButton label="ツイート" id={id}>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="w-4 h-4 fill-[#1DA1F2]"
      >
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
      </svg>
    </StampButton>
  )
}

const StampButton: FC<{ label: string; id?: string }> = ({
  label,
  id,
  children,
}) => {
  if (id) {
    return (
      <a
        className="relative p-2 text-lg text-zinc-800 bg-[#ece5d8] hover:bg-[#ece5d8] rounded-full btn"
        href={getShareURL(id)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex absolute inset-0 items-center p-2">
          <div className="flex justify-center items-center w-8 h-8 bg-zinc-900 rounded-full">
            {children}
          </div>
        </div>
        <p className="ml-4">{label}</p>
      </a>
    )
  }

  return (
    <div className="relative p-2 text-lg text-zinc-800 bg-[#ece5d8] hover:bg-[#ece5d8] rounded-full btn">
      <div className="flex absolute inset-0 items-center p-2">
        <div className="flex justify-center items-center w-8 h-8 bg-zinc-900 rounded-full">
          {children}
        </div>
      </div>
      <p className="ml-4">{label}</p>
    </div>
  )
}
