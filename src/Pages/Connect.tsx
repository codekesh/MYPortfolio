import emailjs from "emailjs-com"
import { useState } from "react"
import { links } from "../assets/constants"
import "../styles/Connect.scss"

const Connect = () => {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsConnecting(true)

    emailjs
      .sendForm(
        "service_t80c2vq",
        "template_ng168i5",
        e.currentTarget,
        "bKe4x0VzvCRuMHuvx",
      )
      .then(
        () => {
          setIsConnecting(false)
          setIsConnected(true)

          setFormData({
            name: "",
            email: "",
            message: "",
          })

          setTimeout(() => {
            setIsConnected(false)
          }, 2400)
        },
        () => {
          alert("Failed to send message!")
          setIsConnecting(false)
        },
      )
  }

  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Connect With Me! 😃
        </h1>
        <p className="text-base text-white mb-6">
          Feel free to reach out to me through any of the platforms below
        </p>

        <div className="flex justify-center text-3xl text-white flex-wrap">
          {links.map(({ icon, href, color, hover }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-12 transition duration-300 ${color} ${hover}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="form flex p-8">
        <div className="form-description px-20">
          <h1 className="text-3xl font-bold text-white mb-3">
            Submit the form
          </h1>
          <p className="text-base text-white mb-6 text-justify">
            Got a project in mind or just want to connect? I'd love to hear from
            you. Fill out the form and let's make something awesome together!
          </p>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mb-4 min-w-sm opacity-80 rounded-none p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mb-4 min-w-sm opacity-80 rounded-none p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
            <div className="form-input">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mb-4 min-w-sm opacity-80 rounded-none p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:ring-0 focus:border-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`button ${isConnecting ? "connect" : ""} ${isConnected ? "connected" : ""}`}
            >
              <a>
                <span className="text">Connect</span>
                <span className="progress"></span>
                <span className="icon"></span>
              </a>
              <span className="svg-button">
                <span className="letter">c</span>
                <span className="letter">o</span>
                <span className="letter">n</span>
                <span className="letter">n</span>
                <span className="letter">e</span>
                <span className="letter">c</span>
                <span className="letter">t</span>
                <span className="letter">e</span>
                <span className="letter">d</span>
                <svg
                  width="190"
                  height="55"
                  viewBox="0 0 190 55"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" fill="none" width="190" height="55" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Connect
