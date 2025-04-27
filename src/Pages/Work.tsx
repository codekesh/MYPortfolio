import { workData } from "../assets/constants"
import "../styles/Work.scss"

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
