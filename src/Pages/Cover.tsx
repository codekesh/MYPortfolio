import { Typewriter } from "react-simple-typewriter"
import photo from "../assets/MyPhoto.png"
import { motion } from "framer-motion"

const Cover = () => {
  return (
    <>
      <div className="cover-heading">
        <motion.div
          className="cover-heading text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
            words={["Codekesh - Jolly Developer"]}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
            loop={false}
            cursor
            cursorStyle="|"
          />
          <Typewriter words={["..."]} />
        </motion.div>
      </div>
      <hr />
      <div className="cover-content flex items-center justify-between">
        <div className="cover-content-text font-mono text-left text-lg sm:text-xl text-green-300 bg-black p-6 rounded-lg shadow-lg w-xl max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-green-400 text-3xl mb-4"
          >
            <Typewriter words={["<h1>Hi! I am Keshav...</h1>"]} />
          </motion.div>

          <div className="mb-2">
            <Typewriter
              words={["<p>Click right, I promise I code well 😉</p>"]}
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>
          <div className="mb-2">
            <Typewriter
              words={["<p>Let's build something together! 🔨</p>"]}
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>
          <div>
            <Typewriter
              words={["<p>Projects, Coffee, and Debugging ☕</p>"]}
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>
        </div>
        <div className="cover-content-image">
          <img src={photo} alt="MyPhoto" style={{opacity: 0.8}} />
        </div>
      </div>
    </>
  )
}

export default Cover
