import { Typewriter } from "react-simple-typewriter"

const TypeText = ({
  words,
  typeSpeed = 60,
  deleteSpeed = 30,
  delaySpeed = 2000,
  loop = false,
  cursor = true,
  cursorStyle = "|",
}: {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
  loop?: boolean
  cursor?: boolean
  cursorStyle?: string
}) => (
  <Typewriter
    words={words}
    typeSpeed={typeSpeed}
    deleteSpeed={deleteSpeed}
    delaySpeed={delaySpeed}
    loop={loop}
    cursor={cursor}
    cursorStyle={cursorStyle}
  />
)

export default TypeText