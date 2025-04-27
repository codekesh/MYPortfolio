import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { HiOutlineDocumentText } from "react-icons/hi"
import artGallery from "../assets/art_gallery.png"
import realTime from "../assets/RealTime.png"
import unityHospital from "../assets/UnityHospital.png"

const fullText = `Hi, I'm Keshav Tulsyan — a passionate coder and creative problem solver. I enjoy building innovative digital solutions, debugging under pressure, and bringing ideas to life through code. Currently, I work as a Junior Automation Software Engineer at Modelon, where I focus on developing automation solutions, managing and creating pipelines, and supporting various teams and individuals by building WebApps.`

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

const projects = [
  {
    title: "Art Gallery",
    desc: "Designed an e-commerce web app for buying and selling user-created artifacts using the MERN stack.",
    img: artGallery,
    url: "https://github.com/codekesh/ArtGalleryFrontend",
    color: "#d10070",
  },
  {
    title: "RealTime Chat App",
    desc: "Anscalable real-time chat application that provides an interface for more than 100 user chats at the same time.",
    img: realTime,
    url: "https://github.com/codekesh/Real-Time-Chat-Repo",
    color: "#a276f5",
  },
  {
    title: "Unity Hospital",
    desc: " Led front-end development for Unity Hospital project, crafting user interfaces with HTML, CSS, and JavaScript.",
    img: unityHospital,
    url: "https://github.com/codekesh/UnityHospital/",
    color: "#3357FF",
  },
]

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

export { fullText, links, projects, skills, skillDetails, workData }
