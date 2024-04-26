'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHome } from '@fortawesome/free-brands-svg-icons';
import { faHome as solidHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link';

function IconLink({ platform, url, label}) {
  const getIcon = () => {
    switch (platform) {
      case 'github':
        return <FontAwesomeIcon icon={faGithub} />;
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin}/>;
      case 'home':
        return <FontAwesomeIcon icon={solidHome}/>;
      case 'email':
            return <FontAwesomeIcon icon={faEnvelope}/>;
      case 'resume':
            return <FontAwesomeIcon icon={faFile}/>;
      default:
        return null;
    }
  };

  return (
   <div> 
   <Link  href={url} passHref
       target="_blank" rel="noopener noreferrer" aria-label={label}>
        {getIcon()}
    </Link>
    </div>
   
  );
}
export default IconLink;