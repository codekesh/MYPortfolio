import { useState } from "react"
import { skillDetails, skills } from "../assets/constants"

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-white p-10">
      {selectedSkill && (
        <div className="card bg-white/7 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg max-w-sm w-full text-white transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">{selectedSkill}</h2>
          <p className="text-sm text-white/80 mb-4">
            {skillDetails[selectedSkill].description}
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
              {skillDetails[selectedSkill].experience}
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
              {skillDetails[selectedSkill].level}
            </span>
          </div>
        </div>
      )}

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">My Skills</h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {skills.map((skill, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedSkill(skill)
              }}
              className={`bg-gradient-to-br from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold transition transform hover:scale-110 hover:rotate-1 cursor-pointer ${
                selectedSkill === skill ? "ring-4 ring-white/30" : ""
              }`}
              style={{
                animationDelay: `${(i * 0.1).toString()}s`,
                animationDuration: "2s",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
