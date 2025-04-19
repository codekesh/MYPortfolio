import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { HiOutlineDocumentText } from "react-icons/hi"

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
  return (
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
  )
}

export default Connect
