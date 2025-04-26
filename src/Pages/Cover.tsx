import photo from "../assets/MyPhoto.png"
import { motion } from "framer-motion"
import "../styles/Cover.scss"
import TypeText from "../components/TypeText"

const Cover = () => {
  const handleClickHireMe = () => {
    const driveLink =
      "https://drive.google.com/file/d/1JL362SfqSj0oFThtXBAW0jjp2rj7Gean/view?usp=sharing"
    window.open(driveLink, "_blank")
  }

  return (
    <>
      <div className="cover-heading">
        <motion.div
          className="cover-heading text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeText
            words={["Codekesh - Jolly Developer"]}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
            loop={false}
          />
          <TypeText words={["..."]} />
        </motion.div>
      </div>

      <hr />

      <div className="cover-content flex items-center justify-between">
        <div>
          <div className="cover-content-text font-mono text-left text-lg sm:text-xl text-green-300 bg-black p-6 rounded-lg shadow-lg w-xl max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-green-400 text-3xl mb-4"
            >
              <TypeText words={["<h1>Hi! I am Keshav...</h1>"]} />
            </motion.div>

            <div className="mb-2">
              <TypeText
                words={["<p>Click right, I promise I code well 😉</p>"]}
              />
            </div>
            <div className="mb-2">
              <TypeText words={["<p>Let's build something together! 🔨</p>"]} />
            </div>
            <div>
              <TypeText words={["<p>Projects, Coffee, and Debugging ☕</p>"]} />
            </div>
          </div>

          <div className="m-5 relative group inline-block">
            <button className="btn font-mono" onClick={handleClickHireMe}>
              Hire Me
            </button>
          </div>
        </div>

        <div className="cover-content-image">
          <img src={photo} alt="MyPhoto" style={{ opacity: 0.8 }} />
        </div>
      </div>
    </>
  )
}

export default Cover
