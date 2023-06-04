import { useAtom } from "jotai"

import { selectedStampAtom, favoritesAtom, favoriteModeAtom } from "stores"

export const useSelectedStamp = () => useAtom(selectedStampAtom)

export const useFavorites = () => {
  const [favoriteMode, setMode] = useAtom(favoriteModeAtom)
  const [favorites, setFavs] = useAtom(favoritesAtom)

  const toggleMode = () => setMode((prev) => !prev)
  const updateFavs = (id: string) => {
    const isDelete = favorites.includes(id)
    if (isDelete) {
      setFavs((prev) => {
        const newFavs = prev.filter((f) => f !== id)
        if (!newFavs.length) setMode(false)
        return newFavs
      })
    } else {
      setFavs((prev) => [...prev, id])
    }
  }
  const disabled = !favorites.length

  return { favoriteMode, favorites, disabled, toggleMode, updateFavs }
}
