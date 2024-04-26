'use client';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../data/experienceData.jsx';
import'../styles/ExperienceTimeline.css';
import Image from 'next/image';


function ExperienceTimeline () {

  function renderExperiences() {
    return (
      <>
        <VerticalTimeline className="vertical-timeline">
          {experienceData.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className={`vertical-timeline-element-${experience.type}`}
              date={experience.date}
              contentStyle={{ background: experience.type === 'work' ? 'rgb(0,0,0,0) ' : 'rgb(0, 0, 0, 0)', color: '#fff', boxShadow:'0 4px 8px rgba(0, 0, 0, 1)' }}
              contentArrowStyle={{ borderRight: experience.type === 'work' ? '7px solid  rgb(33, 150, 243)' : '7px solid rgb(0, 128, 0)' }}
              iconStyle={{ background: experience.type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(0, 128, 0)', color: '#fff' }}
              icon={experience.icon} 
            >
              <Image src={experience.img} alt={experience.company} width={150} height={150} className="vertical-timeline-element-image rounded-full h-20 w-20 object-cover" />
              <h3 className="vertical-timeline-element-title text-3xl font-bold">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
              <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
              <h4 className="vertical-timeline-element-subtitle text-3xl font-bold">{experience.institution}</h4>
              <h4 className="vertical-timeline-element-subtitle">{experience.degree}</h4>
              <p className=' text-gray-500 '>{experience.description}</p>
              <br />
              <div className="skills flex space-x-4 justify-center">
                {experience.skills && experience.skills.map((skill) => (
                  <span key={skill.id} className="skill text-lg">
                    {skill.image}
                  </span>
                ))}
              </div>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </>
    );
  };

  
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center justify-center vh-screen">
        <h2 className="text-4xl font-bold mb-4 ">Experience & Education</h2>
        <p className='text-lg text-gray-500 text-center '>
          Explore the journey of my professional endeavors & education through a chronological timeline.
        </p>
            {renderExperiences()} 
      </div>
    </section>   
  );
};

export default ExperienceTimeline;
