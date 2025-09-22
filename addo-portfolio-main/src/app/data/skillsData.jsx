import { SiCss3, SiGit, SiPython, SiPandas, SiAnsible, SiSelenium, SiTerraform, SiHtml5, SiJavascript, SiReact, SiPostgresql, SiMysql, SiGnubash, SiCplusplus, SiOracle } from "react-icons/si";
import { FaJava, FaNode, FaAws, FaDocker, FaRedhat} from "react-icons/fa";
import { RiFileCloudFill } from "react-icons/ri";


const skillsData = [

    { id: 1, type: "backend", name: "Python", image: <SiPython /> },
    { id: 2, type: "backend", name: "Pandas", image: <SiPandas /> },
    { id: 3, type: "backend", name: "Selenium", image: <SiSelenium /> },
    { id: 4, type: "technical", name: "AWS", image: <FaAws /> },
    { id: 5, type: "backend", name: "CloudFormation", image: <RiFileCloudFill /> },
    { id: 6, type: "backend", name: "Terraform", image: <SiTerraform /> },
    { id: 7, type: "backend", name: "Docker", image: <FaDocker /> },
    { id: 8, type: "backend", name: "Ansible", image: <SiAnsible /> },
    { id: 9, type: "backend", name: "OpenSCAP", image: <FaRedhat /> }, 
    { id: 10, type: "backend", name: "MySQL", image: <SiMysql/>},
    { id: 11, type: "backend", name: "PostgreSQL", image: <SiPostgresql/>},
    { id: 12, type: "other", name: "Git", image: <SiGit /> },
    { id: 13, type:"backend", name: "Bash", image: <SiGnubash/>},
    { id: 14, type: "backend", name: "Java", image: <FaJava /> },
    { id: 15, type: "backend", name: "C++", image: <SiCplusplus /> },
    { id: 16, type: "frontend", name: "JavaScript", image: <SiJavascript /> },
    { id: 17, type: "frontend", name: "HTML", image: <SiHtml5 /> },
    { id: 18, type: "frontend", name: "CSS", image: <SiCss3 /> },
    { id: 19, type: "backend", name: "Node.js", image: <FaNode /> },
    { id: 20, type: "frontend", name: "React", image: <SiReact /> },
    { id: 21, type: "backend", name: "Oracle", image: <SiOracle /> },
    
    
];

export default skillsData;
