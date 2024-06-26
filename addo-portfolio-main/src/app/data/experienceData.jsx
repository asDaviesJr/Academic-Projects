import { SiCss3, SiPython, SiPandas, SiAnsible, SiSelenium, SiHtml5, SiJavascript, SiReact, SiRedhat } from "react-icons/si";
import { FaUserTie, FaNode, FaAws, FaLock, FaRegCalendar, FaDocker, FaRedhat, FaGlasses, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { GrVulnerability } from "react-icons/gr";
import { BsFiletypeXml } from "react-icons/bs";


const experienceData = [
  
  {
    id: 1,
    type: "work",
    company: "RIT Collegiate Science & Technology Entry Program (CSTEP)",
    date: 'January 2024 – Present',
    img: '/RIT CSTEP.jpg',
    title: 'Cloud Security Researcher',
    location: 'Rochester, NY',
    icon: <FaBriefcase />,
    description: 'Research ways to create a secure software environment in the cloud for testing proof of concepts, ensuring data integrity & confidentiality while mitigating potential vulnerabilities.',
    skills: [
      { id: 1, name: "Python", image: <SiPython /> },
      { id: 2, name: "AWS", image: <FaAws /> },
      { id: 3, name: "OpenSCAP", image: <FaRedhat /> },
      { id: 4, name: "Ansible", image: <SiAnsible /> },
    
    ],
  },
  {
    id: 2,
    type: "work",
    company: "Rochester Institute of Technology",
    date: 'January 2024 – Present',
    img: '/RIT GOL.png',
    title: 'Engineering Secure Software Course Assistant',
    location: 'Rochester, NY',
    icon: <FaBriefcase />,
    description: 'Develop and implement grading rubrics for fuzzer, input handling, and case study assignments, evaluating student submissions for adherence to principles and practices in secure software development, helping students identify and mitigate vulnerabilities in software, and providing constructive feedback to enhance their understanding of security principles throughout the software development lifecycle.',
    skills: [
      { id: 1, name: "Python", image: <SiPython /> },
      { id: 6, name: "Spreadsheets", image: <BsFiletypeXml /> },
    ],
  },
  {
    id: 3,
    type: "work",
    company: "National Society of Black Engineers (NSBE)",
    date: 'August 2023 – Present',
    img: '/NSBE.png',
    title: 'RIT Chapter President',
    location: 'Rochester, NY',
    icon: <FaBriefcase />,
    description: 'Lead and oversee all aspects of chapter governance, including presiding over meetings, representing the chapter to external stakeholders, appointing committee members, setting policies, evaluating board performance, and facilitating communication between executive and advisory boards.',
    skills: [
      { id: 7, name: "Leadership", image: <FaUserTie /> },
    ],
  },
  {
    id: 4,
    type: "work",
    company: "RIT Laboratory of Software Design & Productivity",
    date: 'March 2023 – September 2023',
    img: '/RIT GOL.png',
    title: 'Software Security Researcher (R&D)',
    location: 'Rochester, NY',
    icon: <FaBriefcase />,
    description: "Enhanced company's knowledge of vulnerability automation processes by delivering actionable insights from analyzing 800+ CVEs and 1000+ CWEs.",
    skills: [
      { id: 1, name: "Python", image: <SiPython /> },
      { id: 8, name: "Selenium", image: <SiSelenium /> },
      { id: 6, name: "Spreadsheets", image: <BsFiletypeXml /> },
    ],
  },
  {
    id: 5,
    type: "work",
    company: "National Society of Black Engineers (NSBE)",
    date: 'August 2021 – May 2023',
    img: '/NSBE.png',
    title: 'RIT Conference Planning Chairperson',
    location: 'Rochester, NY',
    icon: <FaBriefcase />,
    description: 'Coordinated record-keeping, managed travel arrangements, disseminated conference-related information, provided monthly reports to the Chapter Vice-President, and submitted comprehensive transition reports for Upstate Zone Conferences, Regional Conferences, and the National Convention, ensuring smooth conference proceedings and facilitating effective communication with attendees and members.',
    skills: [
      { id: 9, name: "Articulate Planner", image: <FaRegCalendar /> },
    ],
  },
  {
    id: 6,
    type: "work",
    company: "TEOCO",
    date: 'August 2022 – January 2023',
    img: '/teoco.jpg',
    title: 'Full Stack Developer and Analyst',
    location: 'Henrietta, NY',
    icon: <FaBriefcase />,
    description: 'Led end-to-end product feature development utilizing Python, Selenium, OCR, and Pandas, resulting in a 30% efficiency increase; engineered a password-changing application with Selenium, reducing manual workload by 80%; and developed a report analysis application, incorporating email notifications with detailed statistics to improve error resolution and user awareness, while also providing recommendations for future improvements.',
    skills: [
      { id: 1, name: "Python", image: <SiPython /> },
      { id: 8, name: "Selenium", image: <SiSelenium /> },
      { id: 10, name: "Pandas", image: <SiPandas /> },
    ],
  },
  {
    id: 7,
    type: "work",
    company: "The Applied Research Laboratory at Penn State University ",
    date: 'June 2022 - August 2022',
    img: '/psuarl1.jpg',
    title: 'Research & Development Engineer',
    location: 'Henrietta, NY',
    icon: <FaBriefcase />,
    description: 'Developed a full-stack security pipeline for an artificial intelligence software environment, incorporating Docker images scanning for vulnerabilities according to specified OpenSCAP policies, retrieval of scan reports, and image reconfiguration utilizing an Ansible Playbook.',
    skills: [
      { id: 1, name: "Python", image: <SiPython /> },
      { id: 11, name: "Docker", image: <FaDocker /> },
      { id: 12, name: "Ansible", image: <SiAnsible /> },
      { id: 13, name: "OpenSCAP", image: <SiRedhat /> },
      { id: 14, name: "React", image: <SiReact /> },
      { id: 15, name: "CSS", image: <SiCss3 /> },
      { id: 16, name: "HTML", image: <SiHtml5 /> },
      { id: 17, name: "Node.js", image: <FaNode /> },
      { id: 18, name: "JavaScript", image: <SiJavascript /> },
    ],
  },
  {
    id: 5,
    type: "education",
    institution: "Rochester Institute of Technology (RIT)",
    icon: <FaGraduationCap />,
    degree: "Bachelor of Science in Software Engineering",
    date: "August 2020 - May 2024",
    img: '/RIT GOL.png',
  }
];

export default experienceData;
