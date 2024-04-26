'use client'
import React from 'react';
import skillsData from '../data/skillsData';

function SkillsSection() {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div key={skill.id} className="skill-button">
          {skill.image}
          {skill.name}
        </div>
      ))}
      <style jsx>{`
        .skills-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .skill-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 8px;
          padding: 10px;
          border: 2px solid #000; /* Set border color */
          border-radius: 8px; /* Set border radius */
          border-color: gray; /* Set border color */
          cursor: default; /* Disable cursor as it's not clickable */
          transition: background-color 0.3s; /* Smooth background color transition */
        }

        .skill-button:hover {
          background-color: #f0f0f0; /* Set the background color on hover */
          color: black; /* Set the text color on hover */
        }

        p {
          margin-top: 8px;
          color: gray; /* Set the initial text color */
        }
      `}</style>
    </div>
  );
}

export default SkillsSection;