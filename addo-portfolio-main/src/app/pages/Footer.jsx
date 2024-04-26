import React from 'react';
import IconLink from './IconLink';

const Footer = () => {
  return (
    <footer style={{ 
        padding: '1px',  
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        bottom: '0px',
        width:'100%'
       }}>
      <p>© {new Date().getFullYear()} Addo Davies Jr.</p>
      
      <div className="flex space-x-4">
      <br />
          <IconLink platform="github" url="https://github.com/asDaviesJr/Academic-Projects" label="GitHub" />
          <IconLink platform="linkedin" url="https://www.linkedin.com/in/addo-davies-jr/" label="LinkedIn"/>
          <IconLink platform = "email" url="mailto:addo.sdavies@gmail.com" label="Email"/>
          <IconLink platform="resume" url="/Davies_Addo_SE_Resume.pdf" label="Resume"/>
          </div>
    </footer>
  );
};

export default Footer;