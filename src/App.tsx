import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Page from "./components/Page"
import { useAppDispatch, useAppSelector } from "./utils/hooks"
import { nextPage, prevPage } from "./redux/pageSlice"
import type { RootState } from "./store"
import About from "./Pages/About"
import Work from "./Pages/Work"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Connect from "./Pages/Connect"
import Cover from "./Pages/Cover"

const pages = [
  <Cover />,
  <About />,
  <Work />,
  <Projects />,
  <Skills />,
  <Connect />,
]

const App = () => {
  const pageIndex = useAppSelector((state: RootState) => state.page.pageIndex)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const dispatch = useAppDispatch()

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 bg-[url(./assets/backgroundImage.jpg)] bg-cover bg-center">
      <motion.button
        onClick={() => {
          setDirection("left")
          dispatch(prevPage())
        }}
        className="absolute left-0 h-full w-20 bg-transparent text-black hover:bg-gray-300 flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        ← Previous
      </motion.button>

      <AnimatePresence mode="wait">
        <Page
          key={pageIndex}
          content={pages[pageIndex % pages.length]}
          direction={direction}
          keyId={pageIndex}
        />
      </AnimatePresence>

      <motion.button
        onClick={() => {
          setDirection("right")
          dispatch(nextPage())
        }}
        className="absolute right-0 h-full w-20 bg-transparent text-black hover:bg-gray-300 flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        Next →
      </motion.button>
    </div>
  )
}

export default App
