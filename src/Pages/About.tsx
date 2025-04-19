import { useState } from "react"
import { motion } from "framer-motion"
import photo from "../assets/MyPhoto.png"
import "../styles/flipcard.css"

const About = () => {
  const [flipped, setFlipped] = useState(false)

  const fullText = `Hi, I'm Keshav — a curious coder and creative problem solver. 
  I love building cool digital things, debugging under pressure, 
  and bringing ideas to life with code.`

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
            <div className="flip-card-front flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <img
                src={photo}
                alt="My Photo"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flip-card-back bg-white p-4 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <h1 className="text-xl font-bold mb-2 text-gray-800">About Me</h1>
              <p className="text-sm text-gray-600 text-center">{fullText}</p>
            </div>
          </motion.div>
        </div>

        <div className="content flex flex-col">
          <motion.div
            className="ml-8 text-lg text-white font-semibold italic"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wanna know about me? Just click the photo!
          </motion.div>

          <div className="m-10 bg-white p-6 rounded-xl shadow-lg w-130 h-80">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              🏅 Achievements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Provident voluptatibus illum hic, similique.</li>
              <li>Non suscipit deleniti laborum vitae!</li>
              <li>Asperiores officia quod impedit provident expedita consequuntur harum.</li>
              <li>Nihil ullam mollitia cum aliquid non dicta natus.</li>
              <li>Delectus distinctio aperiam culpa rerum quibusdam veritatis</li>
              <li>Repudiandae sunt iusto.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
