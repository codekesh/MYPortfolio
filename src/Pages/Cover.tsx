import { Typewriter } from "react-simple-typewriter"

const Cover = () => {
  return (
    <div>
      <Typewriter
        words={["Codekesh - Jolly Developer"]}
        typeSpeed={100}
        loop={2}
      />
      <Typewriter
        words={["|..."]}
      />
    </div>
  )
}

export default Cover
