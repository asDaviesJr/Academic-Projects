'use client'
import React from 'react';
import IconLink from './IconLink.jsx';

function Navbar() {

  return (
    <nav className=" max-auto text-white p-4">
      <div className="container flex space-x-4"> 
        <div className='container flex-x-4'>
          <h3>Addo Davies Jr.</h3>
          <p className='text-white'>Rochester, NY</p>
          <div className="flex space-x-4">
          <IconLink platform="github" url="https://github.com/asd1520" label="GitHub" />
          <IconLink platform="linkedin" url="https://www.linkedin.com/in/addo-davies-jr/" label="LinkedIn"/>
          <IconLink platform = "email" url="mailto:addo.sdavies@gmail.com" label="Email"/>
          <IconLink platform="resume" url="/Davies_Addo_SE_Resume.pdf" label="Resume"/>
          </div>
       </div>
     </div>
  </nav>

  
  );
}
export default Navbar;


