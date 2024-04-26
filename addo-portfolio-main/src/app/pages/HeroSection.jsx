'use client';
import React from 'react';
import Link from 'next/link';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const phrases = [
    'Software Engineer',
    { text: '', delay: 1000 },
    'Cloud Engineer',
    { text: '', delay: 1000 },
    'Full Stack Engineer',
    { text: '', delay: 1000 },
    'DevSecOps Engineer',
    { text: '', delay: 1000 },
    'Vulnerability Researcher ',
    { text: '', delay: 1000 }
  ];

  return (
    <section className="hero-section">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl  mb-4">Addo Davies Jr.</h1>
        <div className="text-3xl mb-4">
          <TypeAnimation
            cursor={true}
            sequence={phrases}
            wrapper="text"
            repeat={Infinity}
            speed={5}
          />
        </div>
        <div className="text-lg text-gray-500">
          <p className="text-gray-400">
            Are you in search of a Software Engineer who not only possesses a robust foundation in Python, Java, C++, SQL, JavaScript, CSS, and HTML, but also a diverse skill set spanning AWS, Docker, and Ansible? Look no further! With a background that includes pivotal roles such as Cloud Security Researcher, Software Security Researcher, and Research & Development Engineer, I bring to the table a wealth of experience and expertise. My career journey reflects a commitment to utilizing Cybersecurity, Object-Oriented Programming, Database Development, Vulnerability Assessment & Analysis, Infrastructure as Code (IaC), and DevSecOps principles to develop meaningful software solutions for real-world problems. As an Agile Methodology enthusiast, I thrive in collaborative environments, where my self-motivation, articulate planning, and leadership skills shine. My passion for technology fuels innovative critical thinking and problem-solving, making me not just a team player but also a natural leader. I am eager to leverage my talents to drive impactful software solutions that benefit society. Let&apos;s collaborate to shape the future of technology together!
          </p>
        </div>
        <SkillsSection />
        <br />
        <section className="resume-and-contact-section">
          <div className="flex space-x-4 justify-center">
            <Link href="/Davies_Addo_SE_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
                Resume
              </button>
            </Link>
            <ContactSection />
          </div>
        </section>
      </div>
    </section>
  );
}

export default HeroSection;


