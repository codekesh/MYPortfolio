import { useState } from "react"
import "../styles/Work.scss"

const workData = [
  {
    title: "Frontend Engineer @ XYZ Corp",
    duration: "2023 - Present",
    description:
      "Building modern UIs using React, Redux and TailwindCSS. Led the UI revamp of their customer dashboard.",
  },
  {
    title: "Software Developer @ ABC Tech",
    duration: "2021 - 2023",
    description:
      "Worked on backend systems in Node.js and developed internal tools with React.",
  },
  {
    title: "Intern @ CoolStart",
    duration: "2020 - 2021",
    description:
      "Assisted in building a mobile app using React Native. Learned full-stack basics and agile development.",
  },
]

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="work-section">
      <div className="card">
        <h3>{workData[activeIndex].title}</h3>
        <p>
          <strong>{workData[activeIndex].duration}</strong>
        </p>
        <p>{workData[activeIndex].description}</p>
      </div>
      <div className="timeline">
        {workData.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            <div className="dot" />
            <div className="info">
              <h5>{job.title}</h5>
              <span>{job.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
