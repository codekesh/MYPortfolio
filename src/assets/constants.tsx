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
  "OOPS",
  "DSA",
]

const skillDetails: Record<string, { qoutes: string }> = {
  "C/C++": {
    qoutes:
      "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off.",
  },
  Python: {
    qoutes:
      "Abstraction is one of those notions that Python tosses out the window, yet expresses very well.",
  },
  JavaScript: {
    qoutes: "JavaScript is a language with more than its share of bad parts.",
  },
  TypeScript: {
    qoutes:
      "If it’s essential that no one ever augment your type, then use type",
  },
  Java: {
    qoutes:
      "Just as tasks should have a cancellation policy, threads should have an interruption policy.",
  },
  HTML: {
    qoutes:
      "I fix things now and then, more often tweak HTML and make scripts to do things.",
  },
  CSS: {
    qoutes: "Like Women, Web also need to be make up.",
  },
  "React.js": {
    qoutes: "React developers don't age. They just keep rerendering.",
  },
  Bootstrap: {
    qoutes: "Bootstrap is like a good friend who always has your back.",
  },
  "Vite.js": {
    qoutes: "Vite is like a rocket booster for your development workflow.",
  },
  "Express.js": {
    qoutes: "Express is like a Swiss Army knife for web developers.",
  },
  "Node.js": {
    qoutes:
      "Always bet on JavaScript. Even if it’s running on a toaster via Node.",
  },
  Selenium: {
    qoutes:
      "Give me six hours to automate a test, and I will spend the first four setting up Selenium WebDriver.",
  },
  Cucumber: {
    qoutes:
      "Given I have time, When I write tests, Then I realize I don't have time.",
  },
  SQL: {
    qoutes:
      "I don't always test my SQL queries... but when I do, I do it in production.",
  },
  MongoDB: {
    qoutes:
      "MongoDB is fantastic — if you love your data scattered like confetti at a parade.",
  },
  DBMS: {
    qoutes:
      "A DBMS is like a library where all the books scream at you when you misplace a comma.",
  },
  Redux: {
    qoutes:
      "Redux: The only state management system that makes you wish your app was stateless.",
  },
  JQL: {
    qoutes: "Jira is where good intentions go to drown in JQL.",
  },
  Docker: {
    qoutes:
      "Docker: because sometimes you need to put your code in a box and ship it off.",
  },
  Jenkins: {
    qoutes: "Jenkins: where a single red ball can ruin your whole day.",
  },
  AWS: {
    qoutes:
      "AWS pricing is like a phone bill in the 90s — mysterious, terrifying, and somehow your fault.",
  },
  Git: {
    qoutes:
      "Git is the only place where 'commit' and 'push' sound easier than they really are.",
  },
  CMake: {
    qoutes: "CMake: Turning a simple build into an adventure story since 2000.",
  },
  OOPS: {
    qoutes:
      "OOPS: The concept where everything makes sense until you actually start coding.",
  },
  DSA: {
    qoutes:
      "DSA is the gym of programming. Everyone talks about it; few actually enjoy it.",
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
