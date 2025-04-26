import "../styles/Work.scss"

const workData = [
  {
    title: "Junior Automation Software Engineer",
    company: "Modelon",
    duration: "Aug 2024 - Present",
    description:
      "Building modern UIs using React, Redux and TailwindCSS. Led the UI revamp of their customer dashboard.",
  },
  {
    title: "Student Intern",
    company: "Modelon",
    duration: "Jan 2024 - Jun 2024",
    description:
      "Worked on backend systems in Node.js and developed internal tools with React.",
  },
  {
    title: "Summer Intern",
    company: "Modelon",
    duration: "Jun 2023 - July 2023",
    description:
      "Assisted in building a mobile app using React Native. Learned full-stack basics and agile development.",
  },
]

const Work = () => {
  return (
    <div id="timeline" className="h-96 overflow-y-auto custom-scrollbar p-4">
      <h1 className="text-center text-white text-3xl">Timeline of Experience</h1>
      <ul className="line">
        {workData.map(job => (
          <li>
            <div className="cont">
              <h3>
                {job.title} @ {job.company}
              </h3>
              <p>{job.description}</p>
              <time>{job.duration}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work
