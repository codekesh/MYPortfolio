import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Page from "./components/Page"
import type { RootState } from "./store"
import { useAppDispatch, useAppSelector } from "./utils/hooks"
import { nextPage, prevPage } from "./redux/pageSlice"

const pages = [
  "Welcome to my Portfolio",
  "About Me",
  "Projects",
  "Experience",
  "Contact",
]

const App = () => {
  const pageIndex = useAppSelector((state: RootState) => state.page.pageIndex)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => {
          setDirection("left")
          dispatch(prevPage())
        }}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        ← Previous
      </button>
      <AnimatePresence mode="wait">
        <Page
          key={pageIndex}
          content={pages[pageIndex % pages.length]}
          direction={direction}
          keyId={pageIndex}
        />
      </AnimatePresence>
      <button
        onClick={() => {
          setDirection("right")
          dispatch(nextPage())
        }}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next →
      </button>
    </div>
  )
}

export default App
