import type { StampProps } from "types/cms"

type Props = {
  stamps: StampProps[]
}

export const Stamps = ({ stamps }: Props) => {
  return (
    <div className="flex flex-col">
      {stamps.map((stamp) => (
        <p key={stamp.id} className="whitespace-pre-wrap">
          {JSON.stringify(stamp, null, 2)}
        </p>
      ))}
    </div>
  )
}
