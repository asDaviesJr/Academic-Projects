'use client'
import React from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { FaPython, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import projectsData from '../data/projectsData';
import '../styles/ProjectsList.css'; 
import Link from 'next/link';
import { GrVulnerability } from 'react-icons/gr';


  

function ProjectsList () {

  const ProjectCard = ({ project, index }) => {
    const props = useTrail(projectsData.length, {
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 1, transform: 'translateY(50px)' },
    });

    const getIcon = () => {
      switch (project.tech) {
        case 'Python':
          return <FaPython />;
        case 'React':
          return <FaReact />;
        case 'Next.js':
          return <FaNodeJs />;
        case 'AWS':
          return <FaAws/>
        case 'Vulnerability Assessment & Analysis':
          return <GrVulnerability/>
        default:
          return null;
      }
    };

    return (
      <animated.div style={props[index]} className="project-card">
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          <div className="project-thumbnail">{getIcon()}</div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className='text-gray-400'>{project.description}</p>
        </Link>
      </animated.div>
    );
};
  return (
    <main> 
      <div className='mx-auto flex flex-col items-center justify-center'>
        <h2 className="text-4xl font-bold mb-4">Projects & Developments</h2>
        <p className='text-lg text-gray-400 text-center'>Showcase of my latest works, projects, and developments</p>
      </div>
      <br />
      <div className="project-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsList;