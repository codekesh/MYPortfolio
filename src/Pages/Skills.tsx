import { useState } from "react"

const skills = [
  "C/C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "HTML",
  "CSS",
  "React.js",
  "Bootstrap",
  "Vite.js",
  "Redux",
  "Express.js",
  "Node.js",
  "Selenium",
  "Cucumber",
  "SQL",
  "MongoDB",
  "DBMS",
  "JQL",
  "Docker",
  "Jenkins",
  "AWS",
  "Git",
  "CMake",
]

const skillDetails: Record<
  string,
  { level: string; experience: string; description: string }
> = {
  "C/C++": {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  Python: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  JavaScript: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  TypeScript: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  Java: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  HTML: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  CSS: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  "React.js": {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  Bootstrap: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  "Vite.js": {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  "Express.js": {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  "Node.js": {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  Selenium: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  Cucumber: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  SQL: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  MongoDB: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  DBMS: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  Redux: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  JQL: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  Docker: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  Jenkins: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
  AWS: {
    level: "Advanced",
    experience: "4+ Years",
    description: "Dynamic scripting language, core of modern web development.",
  },
  Git: {
    level: "Advanced",
    experience: "3 Years",
    description: "Typed superset of JavaScript for scalable applications.",
  },
  CMake: {
    level: "Advanced",
    experience: "3+ Years",
    description: "Component-based library for building user interfaces.",
  },
}

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
