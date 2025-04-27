import { useEffect, useState } from "react"
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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

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

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection("left")
        dispatch(prevPage())
      } else if (e.key === "ArrowRight") {
        setDirection("right")
        dispatch(nextPage())
      }
    }

    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [dispatch])

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 bg-[url(./assets/backgroundImage.jpg)] bg-cover bg-center">
      <motion.button
        onClick={() => {
          setDirection("left")
          dispatch(prevPage())
        }}
        className="absolute left-0 h-full w-20 bg-transparent text-white flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.3,
          backgroundColor: "#3cdb14",
          opacity: 0.4,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <FaArrowLeft size={24} />
        </motion.div>
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
        className="absolute right-0 h-full w-20 bg-transparent text-white flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.3,
          backgroundColor: "#3cdb14",
          opacity: 0.4,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <FaArrowRight size={24} />
        </motion.div>
      </motion.button>
    </div>
  )
}

export default App
