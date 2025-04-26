import "../styles/Work.scss"

const workData = [
  {
    title: "Junior Automation Software Engineer",
    company: "Modelon",
    url: "https://www.modelon.com/",
    duration: "Aug 2024 - Present",
    description: [
      "Assisting Quality team in achieving automation goals.",
      "Managing and improving automation pipelines.",
      "Migrating services from Jenkins to GitLab CI/CD.",
    ],
  },
  {
    title: "Student Intern",
    company: "Modelon",
    url: "https://www.modelon.com/",
    duration: "Jan 2024 - Jun 2024",
    description: [
      "Built a modular React and Plotly.js tool for dynamic data visualization.",
      "Integrated Python widgets into Voila apps for advanced post-simulation charts.",
    ],
  },
  {
    title: "Summer Intern",
    company: "Modelon",
    url: "https://www.modelon.com/",
    duration: "Jun 2023 - Jul 2023",
    description: [
      "Automated 10+ test cases using Selenium and Cucumber for faster sanity checks.",
      "Enhanced test robustness across Windows, Linux, and Jenkins environments.",
    ],
  },
]

const Work = () => {
  return (
    <div id="timeline" className="h-96 overflow-y-auto custom-scrollbar p-4">
      <h1 className="text-center text-white text-3xl">
        Timeline of Experience
      </h1>
      <ul className="line">
        {workData.map(job => (
          <li>
            <div className="cont">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-extrabold">{job.title} - </h3>
                <h3>{job.company}</h3>
              </div>

              {job.description.map((point, index) => (
                <p key={index}>- {point}</p>
              ))}
              <time>{job.duration}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work
