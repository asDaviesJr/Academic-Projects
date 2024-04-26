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
            Searching for a Software Engineer proficient in vital scripting languages such as Python, Java, and C++, along with a diverse tech stack encompassing services like AWS, Docker, and Ansible? With a background in roles like Cloud Security Researcher, Software Security Researcher, and Research & Development Engineer, I'm keen to contribute my expertise to your organization. Eager to harness my skills to deliver impactful software solutions that advance society, let's join forces to shape the future of technology together!
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


