import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Page from "./components/Page"
import NavigationButtons from "./components/NavigationButtons"
import type { RootState } from "./store"
import { useAppSelector } from "./utils/hooks"

const pages = [
  "Welcome to my Portfolio",
  "About Me",
  "Projects",
  "Experience",
  "Contact",
]

function App() {
  const pageIndex = useAppSelector((state: RootState) => state.page.pageIndex)
  const [direction, setDirection] = useState<"left" | "right">("right")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AnimatePresence mode="wait">
        <Page
          key={pageIndex}
          content={pages[pageIndex % pages.length]}
          direction={direction}
          keyId={pageIndex}
        />
      </AnimatePresence>
      <NavigationButtons setDirection={setDirection} />
    </div>
  )
}

export default App
