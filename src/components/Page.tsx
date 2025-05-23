import { motion } from "framer-motion"
import type { FC, ReactNode } from "react"

type PageProps = {
  content: ReactNode
  direction: "left" | "right"
  keyId: number
}

const Page: FC<PageProps> = ({ content, direction, keyId }) => {
  const variants = {
    enter: {
      rotateY: direction === "right" ? 90 : -90,
      opacity: 0,
    },
    center: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      rotateY: direction === "right" ? -90 : 90,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      key={keyId}
      className="page w-5xl min-h-150 p-5 bg-white/7 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-white"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      style={{ perspective: 1000 }}
    >
      <div className="text-2xl">{content}</div>
    </motion.div>
  )
}

export default Page
