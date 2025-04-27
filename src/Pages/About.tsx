import { useState } from "react"
import { motion } from "framer-motion"
import photo from "../assets/ghibliKesh.png"
import "../styles/flipcard.css"
import { fullText } from "../assets/constants"

const About = () => {
  const [flipped, setFlipped] = useState(false)

  return (
    <>
      <div className="flex">
        <div
          className="flip-card w-80 h-100"
          onClick={() => {
            setFlipped(!flipped)
          }}
        >
          <motion.div
            className={`flip-card-inner ${flipped ? "flipped" : ""}`}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flip-card-front flex items-center justify-center rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={photo}
                alt="My Photo"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flip-card-back bg-white p-4 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <h1 className="text-xl font-bold mb-2 text-gray-800">About Me</h1>
              <p className="text-sm text-gray-600 text-center text-justify">
                {fullText}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="content flex flex-col">
          <motion.div
            className="ml-10 text-lg text-white font-semibold italic"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wanna know about me? Just click me!
          </motion.div>

          <div className="m-10 bg-white p-6 rounded-xl shadow-lg w-130 h-80">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              🏅 Achievements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Honored with the Bug Basher title at Modelon.</li>
              <li>Achieved success in 16 Leetcode batches.</li>
              <li>Rank 1228 in Leetcode Weekly Contest 413.</li>
              <li>Current Rating at Leetcode - 1631</li>
              <li>Hitting Gym Daily</li>
              <li>Current PRs in Squats - 22.5X10</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
