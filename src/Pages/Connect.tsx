import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { HiOutlineDocumentText } from "react-icons/hi"
import emailjs from "emailjs-com"
import type { FormEvent } from "react"

const Connect = () => {
  const links = [
    {
      icon: <FaGithub />,
      href: "https://github.com/codekesh",
      color: "text-grey-500",
      hover: "hover:text-black",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/keshav-t-488684112/",
      color: "text-blue-300",
      hover: "hover:text-blue-700",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/tulsyan_keshav",
      color: "text-blue-500",
      hover: "hover:text-blue-700",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/keshavtulsiyan/?igsh=eDlnaXJiMjFzbGRj#",
      color: "text-pink-400",
      hover: "hover:text-pink-700",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:keshavradhika1823@gmail.com",
      color: "text-red-500",
      hover: "hover:text-red-700",
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/Codekesh/",
      color: "text-yellow-400",
      hover: "hover:text-yellow-600",
    },
    {
      icon: <HiOutlineDocumentText />,
      href: "https://drive.google.com/file/d/1T3bEXVmFEGeBP706baS2QoipIfFkHhp1/view?usp=sharing",
      color: "text-green-600",
      hover: "hover:text-green-700",
    },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_t80c2vq",
        "template_ng168i5",
        e.currentTarget,
        "bKe4x0VzvCRuMHuvx",
      )
      .then(
        () => {
          alert("Message sent successfully!")
        },
        () => {
          alert("Failed to send message!")
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
                className="mb-4 min-w-sm opacity-80 rounded-none p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:ring-0 focus:border-white"
              />
            </div>
            <div className="form-input">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                className="mb-4 min-w-sm opacity-80 rounded-none p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:ring-0 focus:border-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-transparent text-white px-6 py-2 rounded-4xl border-2 border-white hover:bg-white hover:text-black transition duration-300"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Connect
